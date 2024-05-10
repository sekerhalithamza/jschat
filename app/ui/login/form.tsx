"use client";

import { Input, Button } from "@/app/ui/mainComponents";
import styles from "@/app/ui/login/form.module.css";
import { useFormState } from "react-dom";
import { createUser } from "@/app/lib/actions";

export default function Form({ version }: { version: "signIn" | "signUp" }) {
	const initialState = {};
	const [state, formAction] = useFormState(createUser, initialState);
	switch (version) {
		case "signUp":
			return (
				<form className={`${styles.form}`} action={formAction}>
					<Input inputType="text" placeholder="Username" name="name"></Input>
					<Input inputType="email" placeholder="E-Mail" name="email"></Input>
					<Input
						inputType="password"
						placeholder="Password"
						name="password"
					></Input>
					<Button
						child="Submit"
						style="primary"
						buttonType="submit"
						extraStyles={[styles.formButton]}
					></Button>
				</form>
			);

		case "signIn":
			return (
				<form className={`${styles.form}`}>
					<Input inputType="text" placeholder="Username" name="name"></Input>
					<Input inputType="email" placeholder="E-Mail" name="email"></Input>
					<Input
						inputType="password"
						placeholder="Password"
						name="password"
					></Input>
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
			);
	}
}
