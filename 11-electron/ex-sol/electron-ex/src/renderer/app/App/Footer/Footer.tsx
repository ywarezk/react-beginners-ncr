import { FC } from "react";

const styles = require('./Footer.module.scss').default;

export const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<h3>
				place footer links here
			</h3>
		</footer>
	)
}
