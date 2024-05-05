"use client";

import styles from "@/app/ui/mainComponents.module.css";

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
