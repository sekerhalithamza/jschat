import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import styles from "@/app/home/home.module.css";

import NavItem from "@/app/ui/home/navItem";
import { loginCheck, fetchChats } from "@/app/lib/actions";

export default async function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const user = await loginCheck();

	const chats = await fetchChats();
	async function redirectChat(chatId: string) {
		"use server";
		revalidatePath(`/home/${chatId}`);
		redirect(`/home/${chatId}`);
	}
	return (
		<main className={styles.main}>
			<nav className={styles.nav}>
				{chats.map((chat) => (
					<NavItem
						chatId={chat.id}
						key={chat.id}
						chatName={chat.name}
						authorName={chat.messages[-1]?.authorName}
						lastMessage={chat.messages[-1]?.content}
						serverFunction={redirectChat}
					></NavItem>
				))}
			</nav>
			<section className={styles.section}>{children}</section>
		</main>
	);
}
