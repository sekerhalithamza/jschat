import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Page() {
	const user = await loginCheck();

	return <h1>Hello {user.name}</h1>;
}

function loginCheck() {
	const userData = cookies().get("userData");
	if (!userData?.value) {
		revalidatePath("/");
		redirect("/");
	}

	const user = JSON.parse(userData.value);

	if (!user.name) {
		revalidatePath("/");
		redirect("/");
	}

	return user;
}
