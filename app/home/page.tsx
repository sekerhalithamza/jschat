import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Page() {
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

	return `hello ${user.name}`;
}
