import styles from "@/app/ui/components.module.css";

export function Input({
	placeholder,
	inputType,
	extraClassNames,
}: {
	placeholder: string;
	inputType: string;
	extraClassNames: string[] | undefined;
}) {
	const extraClassNamesString: string | undefined = extraClassNames?.join("");
	return (
		<input
			className={`${styles.input} ${extraClassNamesString}`}
			placeholder={placeholder}
			type={inputType}
		></input>
	);
}

export function Button({
	child,
	buttonType,
	styleType,
	extraClassNames,
}: {
	child: React.ReactNode;
	buttonType: "button" | "submit" | "reset" | undefined;
	styleType: "primary" | "secondary";
	extraClassNames: string[] | undefined;
}) {
	const extraClassNamesString: string | undefined = extraClassNames?.join("");
	return (
		<button
			className={`${styles.button} ${styles[styleType]} ${extraClassNamesString}`}
			type={buttonType}
		>
			{child}
		</button>
	);
}
