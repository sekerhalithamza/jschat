import { z } from "zod";

export type User = {
	id: string;
	name: string;
	email: string;
	hashedPassword: string;
};

export const FormSchema = z.object({
	id: z.string(),
	name: z
		.string({ invalid_type_error: "Please enter a username" })
		.min(3, { message: "Your username should be atleast 3 characters long" }),
	email: z
		.string({ invalid_type_error: "Please enter an email address" })
		.email(),
	password: z
		.string({ invalid_type_error: "Please enter a password" })
		.min(6, { message: "Your password should be atleast 6 characters long" }),
});

export type State = {
	errors?: {
		name?: string[];
		email?: string[];
		password?: string[];
	};

	message?: string | null;
};
