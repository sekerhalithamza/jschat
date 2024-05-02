import Image from "next/image";

import { Input, Button } from "@/app/ui/components";

import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={`${styles.main}`}>
			{/*
			<section className={`${styles.section}`}></section>
			<div className={`${styles.seperator}`}></div>
			<section className={`${styles.section}`}></section>
			*/}
			<section className={`${styles.section}`}>
				<h3 className={`${styles.title}`}>Aramıza Katıl</h3>
				<form className={`${styles.form}`}>
					<Input
						placeholder="Username"
						inputType="text"
						extraClassNames={undefined}
					></Input>
					<Input
						placeholder="Password"
						inputType="password"
						extraClassNames={undefined}
					></Input>
					<Input
						placeholder="E-Mail"
						inputType="email"
						extraClassNames={undefined}
					></Input>
					<Button
						child="Kayıt Ol"
						buttonType="submit"
						styleType="primary"
						extraClassNames={[styles.formButton]}
					></Button>
				</form>
				<div className={`${styles.bottomContainer}`}>
					<span className={`${styles.text}`}>Zaten bir hesabınız var mı?</span>
					<Button child="Giriş Yap" buttonType="button" styleType="secondary" extraClassNames={[styles.redirectButton]}></Button>
				</div>
			</section>
		</main>
	);
}
