import { z } from "zod";

export const FormSchema = z.object({
	id: z.string(),
	name: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(6),
});

export type SignInState = {
	errors?: {
		name?: string[];
		email?: string[];
		password?: string[];
	};

	message?: string | null;
};

export type SignUpState = {
	errors?: {
		name?: string[];
		email?: string[];
		password?: string[];
	};

	message?: string | null;
	success: boolean;
};
