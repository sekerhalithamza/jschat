import { z } from "zod";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

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
	id: string;
	name: string;
	email: string;
	password: string;
	chats: string[];
};

export type Chat = {
	id: string;
	name: string;
	messages: Message[];
};

export type Message = {
	authorId: string;
	authorName: string;
	content: string;
	time: string;
};

export const UserSchema = sqliteTable("users", {
	id: text("id").primaryKey().unique(),
	name: text("name").notNull().unique(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
});

export const ChatSchema = sqliteTable("chats", {
	id: text("id").primaryKey().unique(),
	name: text("name").notNull().$type<string>().unique(),
	messages: text("messages", { mode: "json" }).$type<Message[]>().notNull(),
});
