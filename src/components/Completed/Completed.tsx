import React from 'react';

//Styles
import styles from './Completed.module.scss';

interface Props {
	backCard: () => void;
}

export const Completed = ({ backCard }: Props) => {
	return (
		<div className={styles.Completed}>
			<div className={styles.logo}></div>
			<div className={styles.description}>
				<h1>THANK YOU!</h1>
				<p>We've added your card details</p>
			</div>
			<button onClick={backCard} className={styles.confirm}>
				Continue
			</button>
		</div>
	);
};
