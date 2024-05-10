"use client";

import { Input, Button } from "@/app/ui/mainComponents";
import styles from "@/app/ui/login/form.module.css";
import { useFormState } from "react-dom";
import { createUser } from "@/app/lib/actions";

export default function Form({ version }: { version: "signIn" | "signUp" }) {
	const [createUserState, createUserAction] = useFormState(createUser, null);
	const [loginUserState, loginUserAction] = useFormState(createUser, null);
	switch (version) {
		case "signUp":
			return (
				<form className={`${styles.form}`} action={createUserAction}>
					<Input inputType="text" placeholder="Username" name="name"></Input>
					<div className={`${styles.fieldErrorContainer}`}>
						{createUserState?.errors?.name &&
							createUserState?.errors.name.map((err: string) => (
								<p className={`${styles.fieldErrorText}`} key={err}>
									{err}
								</p>
							))}
					</div>
					<Input inputType="email" placeholder="E-Mail" name="email"></Input>
					<div className={`${styles.fieldErrorContainer}`}>
						{createUserState?.errors?.email &&
							createUserState?.errors.email.map((err: string) => (
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
						{createUserState?.errors?.password &&
							createUserState?.errors.password.map((err: string) => (
								<p className={`${styles.fieldErrorText}`} key={err}>
									{err}
								</p>
							))}
					</div>
					<Button
						child="Submit"
						style="primary"
						buttonType="submit"
						extraStyles={[styles.formButton]}
					></Button>
					{createUserState?.message && (
						<p className={`${styles.errorMessage}`}>
							{createUserState.message}
						</p>
					)}
				</form>
			);

		case "signIn":
			return (
				<form className={`${styles.form}`} action={loginUserAction}>
					<Input inputType="text" placeholder="Username" name="name"></Input>
					<div className={`${styles.fieldErrorContainer}`}>
						{createUserState?.errors?.name &&
							createUserState?.errors.name.map((err: string) => (
								<p className={`${styles.fieldErrorText}`} key={err}>
									{err}
								</p>
							))}
					</div>
					<Input inputType="email" placeholder="E-Mail" name="email"></Input>
					<div className={`${styles.fieldErrorContainer}`}>
						{loginUserState?.errors?.email &&
							loginUserState?.errors.email.map((err: string) => (
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
						{loginUserState?.errors?.password &&
							loginUserState?.errors.password.map((err: string) => (
								<p className={`${styles.fieldErrorText}`} key={err}>
									{err}
								</p>
							))}
					</div>
					<Button
						child="Submit"
						style="primary"
						buttonType="submit"
						extraStyles={[styles.formButton]}
					></Button>
					<a href="#" className={`${styles.link}`}>
						Forgot Password?
					</a>
					{loginUserState?.message && (
						<p className={`${styles.errorMessage} ${styles.loginError}`}>
							{loginUserState.message}
						</p>
					)}
				</form>
			);
	}
}
