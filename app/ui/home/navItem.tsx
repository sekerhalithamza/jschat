"use client";

import styles from "@/app/ui/home/navItem.module.css";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NavItem({
	chatId,
	chatName,
	authorName,
	lastMessage,
	serverFunction,
}: {
	chatId: string;
	chatName: string;
	authorName: string;
	lastMessage: string;
	serverFunction: Function;
}) {
	function handleClick() {
		serverFunction(chatId);
	}
	return (
		<div onClick={handleClick} className={styles.container}>
			<h3 className={styles.title}>{chatName}</h3>
			<div className={styles.message}>
				<span className={styles.author}>{authorName}:</span>
				<p className={styles.content}>{lastMessage}</p>
			</div>
		</div>
	);
}
