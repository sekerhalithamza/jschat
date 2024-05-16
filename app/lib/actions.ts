"use server";

import { sha256 } from "js-sha256";

import { FormSchema, SignInState, SignUpState } from "@/app/lib/definitions";
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
		const user = await sql`
			SELECT * FROM users WHERE (name = ${name} AND email = ${email} AND password = ${hashedPassword})
		`;
	} catch (err) {
		return {
			message: `Error, failed to fetch user: ${err}`,
		};
	}

	revalidatePath("/home");
	redirect("/home");
}
