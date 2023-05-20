import React, { useState } from 'react';

//Styles
import styles from './App.module.scss';

//Components
import { Card } from '../Card/Card';
import { Content } from '../Content/Content';

//Models
import { IForms } from '../../models/models';

export const App = () => {
	const [finish, setFinish] = useState(false);
	const [cardData, setCardData] = useState<IForms>({
		name: '',
		cardNumber: '',
		date: {
			month: '',
			year: '',
		},
		cvc: '',
	});

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCardData({ ...cardData, name: e.target.value });
	};

	const handleChangeCard = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCardData({ ...cardData, cardNumber: e.target.value });
	};

	const handleChangeDateMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCardData({
			...cardData,
			date: {
				month: e.target.value,
				year: cardData.date.year,
			},
		});
	};

	const handleChangeDateYear = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCardData({
			...cardData,
			date: {
				month: cardData.date.month,
				year: e.target.value,
			},
		});
	};

	const handleChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCardData({ ...cardData, cvc: e.target.value });
	};

	const finishCard = () => {
		setFinish(true);
	};

	const backCard = () => {
		setFinish(false);
	};

	return (
		<div className={styles.App}>
			<Card {...cardData} />
			<Content
				finish={finish}
				finishCard={finishCard}
				backCard={backCard}
				handleChangeName={handleChangeName}
				handleChangeCard={handleChangeCard}
				handleChangeDateMonth={handleChangeDateMonth}
				handleChangeDateYear={handleChangeDateYear}
				handleChangeCVC={handleChangeCVC}
				{...cardData}
			/>
		</div>
	);
};
