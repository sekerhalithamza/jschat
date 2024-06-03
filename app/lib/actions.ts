"use server";

import { sha256 } from "js-sha256";
import { cookies } from "next/headers";

import {
	FormSchema,
	SignInState,
	SignUpState,
	User,
} from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const CreateUser = FormSchema.omit({ id: true });

const LoginUser = FormSchema.omit({ id: true });

export async function signUp(
	prevState: SignInState | null,
	formData: FormData,
) {
	const validatedFields = CreateUser.safeParse({
		name: formData.get("name"),
		email: formData.get("email"),
		password: formData.get("password"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			success: false,
		};
	}

	const { name, email, password } = validatedFields.data;

	const hashedPassword = sha256(password);

	try {
		await sql`
			INSERT INTO users (name, email, password)
			VALUES (${name}, ${email}, ${hashedPassword})
		`;
	} catch (err) {
		return {
			message: `Error: Failed to create user: ${err}`,
			success: false,
		};
	}

	return { success: true };
}

export async function signIn(
	prevState: SignInState | null,
	formData: FormData,
) {
	const validatedFields = LoginUser.safeParse({
		name: formData.get("name"),
		email: formData.get("email"),
		password: formData.get("password"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error?.flatten().fieldErrors,
		};
	}

	const { name, email, password } = validatedFields.data;

	const hashedPassword = sha256(password);

	try {
		const userData = await sql`
			SELECT * FROM users WHERE (name = ${name})
		`;

		const user: User = userData.rows[0];

		if (!user) {
			return {
				errors: {
					name: ["Name could not be found"],
				},
			};
		}

		if (email != user.email) {
			return {
				errors: {
					email: ["Email did not match"],
				},
			};
		}

		if (hashedPassword != user.password) {
			return {
				errors: {
					password: ["Password did not match"],
				},
			};
		}

		cookies().set({
			name: "userData",
			value: JSON.stringify(user),
		});
	} catch (err) {
		return {
			message: `Error, failed to fetch user: ${err}`,
		};
	}

	revalidatePath("/home");
	redirect("/home");
}
