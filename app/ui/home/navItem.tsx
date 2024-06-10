import styles from "@/app/ui/home/navItem.module.css";

export default function NavItem({
	chatName,
	authorName,
	lastMessage,
}: {
	chatName: string;
	authorName: string;
	lastMessage: string;
}) {
	return (
		<a className={styles.container}>
			<h3 className={styles.title}>{chatName}</h3>
			<div className={styles.message}>
				<span className={styles.author}>{authorName}:</span>
				<p className={styles.content}>{lastMessage}</p>
			</div>
		</a>
	);
}
