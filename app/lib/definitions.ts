import { z } from "zod";

export type User = {
	id: string;
	name: string;
	email: string;
	hashedPassword: string;
};

export const FormSchema = z.object({
	id: z.string(),
	name: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(6),
});

export type State = {
	errors?: {
		name?: string;
		email?: string;
		password?: string;
	};

	message?: {};
};
