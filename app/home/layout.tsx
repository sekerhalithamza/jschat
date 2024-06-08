import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import styles from "@/app/home/home.module.css";

import { NavItem } from "@/app/ui/home/components";

export default async function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const user = await loginCheck();

	return (
		<main className={styles.main}>
			<nav className={styles.nav}>
				<NavItem></NavItem>
			</nav>
			<section className={styles.section}></section>
		</main>
	);
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
