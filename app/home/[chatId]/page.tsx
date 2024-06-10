import { fetchChat } from "@/app/lib/actions";

export default async function Home({ params }: { params: { chatId: string } }) {
	const chat = await fetchChat(params.chatId)
	console.log(chat)

	return <h1>{params.chatId}</h1>;
}
