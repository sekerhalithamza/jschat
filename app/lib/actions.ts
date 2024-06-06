"use server";

import { sha256 } from "js-sha256";
import { cookies } from "next/headers";

import {
	FormSchema,
	SignInState,
	SignUpState,
	User,
} from "@/app/lib/definitions";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";
import { hash } from "crypto";

const prisma = new PrismaClient();

const CreateUser = FormSchema.omit({ id: true });

const LoginUser = FormSchema.omit({ id: true });

export async function signUp(
	prevState: SignUpState | null,
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
		const user = await prisma.user.create({
			data: {
				name: name,
				email: email,
				password: hashedPassword,
			},
		});
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
		const user = await prisma.user.findUniqueOrThrow({
			where: {
				name: name,
			},
		});

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
