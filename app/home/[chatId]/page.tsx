import styles from "@/app/home/[chatId]/page.module.css";
import { fetchChat } from "@/app/lib/actions";
import Message from "@/app/ui/home/message";

export default async function Home({ params }: { params: { chatId: string } }) {
	const chat = await fetchChat(params.chatId);

	return (
		<section className={styles.section}>
			<Message
				authorName="Babel"
				content="a message for ya gjrwgghaorwjkgpajkwıogjmwaujpınw Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
				extraStyle={styles.users}
			></Message>
			<Message
				authorName="Babel"
				content="a message for ya gjrwgghaorwjkgpajkwıogjmwaujpınw Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
				extraStyle={styles.others}
			></Message>
		</section>
	);
}
