import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./app/lib/definitions.ts",
	out: "./drizzle",
	dialect: "sqlite", // 'postgresql' | 'mysql' | 'sqlite'
	dbCredentials: {
		url: "libsql://jschat-turso-sekerhalithamza.turso.io",
	},
});
