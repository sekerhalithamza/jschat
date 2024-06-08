import { z } from "zod";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { SQL, sql } from "drizzle-orm";

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

export type User = {
	name?: string;
	email?: string;
	password?: string;
};

export const UserSchema = sqliteTable("users", {
	id: text("id").primaryKey().unique(),
	name: text("name").notNull().$type<string>().unique(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
	chats: text("chats", { mode: "json" })
		.$type<string[]>()
		.default(sql`'[]'`),
});
