"use client";

import Image from "next/image";

import styles from "./page.module.css";
import { Button } from "@/app/ui/mainComponents";

export default function Home() {
	function sliderAnimation() {
		const slider = document.getElementById("slider");
		slider?.classList.toggle(styles.onRight);
	}
	return (
		<main className={`${styles.main}`}>
			<section className={`${styles.section}`}>
				<div className={`${styles.slider} ${styles.onRight}`} id="slider">
					<div className={`${styles.sliderContainer} ${styles.containerLeft}`}>
						<h2 className={`${styles.sliderTitle}`}>Hello Friend!</h2>
						<p className={`${styles.sliderText}`}>Join us and have fun.</p>
						<Button
							child="Sign Up"
							event={sliderAnimation}
							buttonType="button"
							style="secondary"
							extraStyles={[styles.sliderButton]}
						></Button>
					</div>
					<div className={`${styles.sliderContainer} ${styles.containerRight}`}>
						<h2 className={`${styles.sliderTitle}`}>Welcome Back Friend!</h2>
						<p className={`${styles.sliderText}`}>
							If you already have an account.
						</p>
						<Button
							child="Sign Up"
							event={sliderAnimation}
							buttonType="button"
							style="secondary"
							extraStyles={[styles.sliderButton]}
						></Button>
					</div>
				</div>
				<div className={`${styles.container} ${styles.signUp}`}>
					<h3 className={`${styles.title}`}>Sign Up</h3>
					<form className={`${styles.form}`}>
						<input
							className={`${styles.input}`}
							type="text"
							placeholder="Username"
						></input>
						<input
							className={`${styles.input}`}
							type="email"
							placeholder="E-Mail"
						></input>
						<input
							className={`${styles.input}`}
							type="password"
							placeholder="Password"
						></input>
						<Button
							child="Submit"
							style="primary"
							buttonType="submit"
							extraStyles={[styles.formButton]}
						></Button>
					</form>
				</div>
				<div className={`${styles.container} ${styles.signIn}`}>
					<h3 className={`${styles.title}`}>Sign In</h3>
					<form className={`${styles.form}`}>
						<input
							className={`${styles.input}`}
							type="text"
							placeholder="Username"
						></input>
						<input
							className={`${styles.input}`}
							type="email"
							placeholder="E-Mail"
						></input>
						<input
							className={`${styles.input}`}
							type="password"
							placeholder="Password"
						></input>
						<Button
							child="Submit"
							style="primary"
							buttonType="submit"
							extraStyles={[styles.formButton]}
						></Button>
						<a href="#" className={`${styles.link}`}>
							Forgot Password?
						</a>
					</form>
				</div>
			</section>
		</main>
	);
}
