import styles from "@/app/ui/home/message.module.css";

export default function Message({
	authorName,
	content,
}: {
	authorName: string;
	content: string;
}) {
	return (
		<div className={styles.message}>
			<b>{authorName}:</b>
			{content}
		</div>
	);
}
