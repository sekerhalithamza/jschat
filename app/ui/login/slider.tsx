"use client";

import { Button } from "@/app/ui/mainComponents";
import styles from "@/app/ui/login/slider.module.css";

export default function Slider() {
	function sliderAnimation() {
		const slider = document.getElementById("slider");
		slider?.classList.toggle(styles.onRight);
	}
	return (
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
					child="Sign In"
					event={sliderAnimation}
					buttonType="button"
					style="secondary"
					extraStyles={[styles.sliderButton]}
				></Button>
			</div>
		</div>
	);
}
