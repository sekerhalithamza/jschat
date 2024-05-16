import styles from "./page.module.css";
import Slider from "@/app/ui/login/slider";
import Form from "@/app/ui/login/form";

export default async function Home() {
	return (
		<main className={`${styles.main}`}>
			<section className={`${styles.section}`}>
				<Slider></Slider>
				<div className={`${styles.container} ${styles.signUp}`}>
					<h3 className={`${styles.title}`}>Sign Up</h3>
					<Form version="signUp"></Form>
				</div>
				<div className={`${styles.container} ${styles.signIn}`}>
					<h3 className={`${styles.title}`}>Sign In</h3>
					<Form version="signIn"></Form>
				</div>
			</section>
		</main>
	);
}
