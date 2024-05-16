"use client";

import { Input, Button } from "@/app/ui/mainComponents";
import styles from "@/app/ui/login/form.module.css";
import { useFormState, useFormStatus } from "react-dom";
import { signUp } from "@/app/lib/actions";
import { signIn } from "@/app/lib/actions";
import { sliderAnimation } from "@/app/ui/login/slider";
import { useState } from "react";

export default function Form({ version }: { version: "signIn" | "signUp" }) {
	const [signUpState, signUpAction] = useFormState(signUp, null);
	const [signInState, signInAction] = useFormState(signIn, null);
	const [successState, toggleState] = useState(signUpState?.success);
	function handleClick() {
		toggleState(false);
		sliderAnimation();
	}
	switch (version) {
		case "signUp":
			return (
				<form className={`${styles.form}`} action={signUpAction}>
					{successState && (
						<div className={styles.successContainer}>
							<p className={styles.successMessage}>
								You have succesfully Signed Up!
							</p>
							<button type="button" onClick={handleClick}>
								Close
							</button>
						</div>
					)}
					<Input inputType="text" placeholder="Username" name="name"></Input>
					<div className={`${styles.fieldErrorContainer}`}>
						{signUpState?.errors?.name &&
							signUpState?.errors.name.map((err: string) => (
								<p className={`${styles.fieldErrorText}`} key={err}>
									{err}
								</p>
							))}
					</div>
					<Input inputType="email" placeholder="E-Mail" name="email"></Input>
					<div className={`${styles.fieldErrorContainer}`}>
						{signUpState?.errors?.email &&
							signUpState?.errors.email.map((err: string) => (
								<p className={`${styles.fieldErrorText}`} key={err}>
									{err}
								</p>
							))}
					</div>
					<Input
						inputType="password"
						placeholder="Password"
						name="password"
					></Input>
					<div className={`${styles.fieldErrorContainer}`}>
						{signUpState?.errors?.password &&
							signUpState?.errors.password.map((err: string) => (
								<p className={`${styles.fieldErrorText}`} key={err}>
									{err}
								</p>
							))}
					</div>
					<Submit></Submit>
					{signUpState?.message && (
						<p className={`${styles.errorMessage}`}>{signUpState.message}</p>
					)}
				</form>
			);

		case "signIn":
			return (
				<form className={`${styles.form}`} action={signInAction}>
					<Input inputType="text" placeholder="Username" name="name"></Input>
					<div className={`${styles.fieldErrorContainer}`}>
						{signInState?.errors?.name &&
							signInState?.errors.name.map((err: string) => (
								<p className={`${styles.fieldErrorText}`} key={err}>
									{err}
								</p>
							))}
					</div>
					<Input inputType="email" placeholder="E-Mail" name="email"></Input>
					<div className={`${styles.fieldErrorContainer}`}>
						{signInState?.errors?.email &&
							signInState?.errors.email.map((err: string) => (
								<p className={`${styles.fieldErrorText}`} key={err}>
									{err}
								</p>
							))}
					</div>
					<Input
						inputType="password"
						placeholder="Password"
						name="password"
					></Input>
					<div className={`${styles.fieldErrorContainer}`}>
						{signInState?.errors?.password &&
							signInState?.errors.password.map((err: string) => (
								<p className={`${styles.fieldErrorText}`} key={err}>
									{err}
								</p>
							))}
					</div>
					<Submit></Submit>
					<a href="#" className={`${styles.link}`}>
						Forgot Password?
					</a>
					{signInState?.message && (
						<p className={`${styles.errorMessage} ${styles.signInError}`}>
							{signInState.message}
						</p>
					)}
				</form>
			);
	}
}

function Submit() {
	const { pending } = useFormStatus();

	const child = pending ? "Submitting..." : "Submit";

	return (
		<Button
			child={child}
			style="primary"
			buttonType="submit"
			extraStyles={[styles.formButton]}
			disable={pending}
		></Button>
	);
}
