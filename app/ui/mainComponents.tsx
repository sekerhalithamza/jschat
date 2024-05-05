import styles from "@/app/ui/mainComponents.module.css";
import { strict } from "assert";

export function Button({
	child,
	event,
	style,
	extraStyles,
	buttonType,
}: {
	child: React.ReactNode;
	event?: Function;
	style: "primary" | "secondary";
	extraStyles?: string[];
	buttonType: "submit" | "button" | "reset";
}) {
	const handleClick = () => {
		if (event) event();
	};

	return (
		<button
			onClick={handleClick}
			type={buttonType}
			className={`${styles.button} ${styles[style]} ${extraStyles?.join(" ")} `}
		>
			{child}
		</button>
	);
}

export function Input({
	extraStyles,
	inputType,
	placeholder,
}: {
	extraStyles?: string[];
	inputType:
	| "button"
	| "checkbox"
	| "color"
	| "date"
	| "datetime-local"
	| "email"
	| "file"
	| "hidden"
	| "image"
	| "month"
	| "number"
	| "password"
	| "radio"
	| "range"
	| "reset"
	| "search"
	| "submit"
	| "tel"
	| "text"
	| "time"
	| "url"
	| "week";
	placeholder: string;
	name: string;
}) {
	return (
		<input
			className={`${styles.input} ${extraStyles?.join(" ")}`}
			type={inputType}
			placeholder={placeholder}
		></input>
	);
}
