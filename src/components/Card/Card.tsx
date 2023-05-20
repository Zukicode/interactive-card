import React from 'react';
import { IForms } from '../../models/models';

//Styles
import styles from './Card.module.scss';

interface ICardData extends IForms {}

export const Card = ({ name, cardNumber, date, cvc }: ICardData) => {
	return (
		<div className={styles.Card}>
			<div className={styles.background}>
				<div className={styles.frontCard}>
					<div className={styles.frontCardHeader}>
						<div></div>
						<div></div>
					</div>

					<div className={styles.frontCardNumber}>
						<p>{cardNumber ? cardNumber : '0000 0000 0000 0000'}</p>
					</div>

					<div className={styles.frontCardFooter}>
						<p>{name ? name : 'Andriy Lomakich'}</p>
						<p>
							{date.month && date.year ? `${date.month}/${date.year}` : '00/00'}
						</p>
					</div>
				</div>

				<div className={styles.backCard}>
					<p>{cvc ? cvc : '000'}</p>
				</div>
			</div>
		</div>
	);
};
