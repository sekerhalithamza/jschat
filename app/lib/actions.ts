"use server";

import { sha256 } from "js-sha256";

import { User, FormSchema, State } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const CreateUser = FormSchema.omit({ id: true });

const LoginUser = FormSchema.omit({ id: true });

export async function createUser(prevState: State | null, formData: FormData) {
	const validatedFields = CreateUser.safeParse({
		name: formData.get("name"),
		email: formData.get("email"),
		password: formData.get("password"),
	});

	if (!validatedFields.success) {
		return { errors: validatedFields.error.flatten().fieldErrors };
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
		};
	}

	revalidatePath("/");
	redirect("/");
}
