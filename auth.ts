import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import z from "zod";
import { FormSchema } from "@/app/lib/definitions";

const User = FormSchema.omit({ id: true });

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = User.safeParse(credentials);
			},
		}),
	],
});
