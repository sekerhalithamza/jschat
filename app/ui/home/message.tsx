import styles from "@/app/ui/home/message.module.css";

export default function Message({
	authorName,
	content,
	extraStyle,
}: {
	authorName: string;
	content: string;
	extraStyle: string;
}) {
	return (
		<div className={`${styles.message} ${extraStyle}`}>
			<b>{authorName}:</b>
			{content}
		</div>
	);
}
