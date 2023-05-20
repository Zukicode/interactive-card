import React, { useState } from 'react';
import {
	correctlyCard,
	correctlyCVC,
	correctlyDate,
	correctlyName,
} from '../../utils/utils';
import { IformEntry } from '../Content/Content';

//Styles
import styles from './Form.module.scss';

export const Form = ({
	name,
	cardNumber,
	date,
	cvc,
	handleChangeName,
	handleChangeCard,
	handleChangeDateMonth,
	handleChangeDateYear,
	handleChangeCVC,
	finishCard,
}: IformEntry) => {
	const [error, setErrors] = useState({
		errorName: false,
		errorCard: false,
		errorDateMonth: false,
		errorDateYear: false,
		errorCVC: false,
	});

	const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChangeName(e);
		setErrors({ ...error, errorName: false });
	};

	const onChangeCard = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChangeCard(e);
		setErrors({ ...error, errorCard: false });
	};

	const onChangeDateMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChangeDateMonth(e);
		setErrors({ ...error, errorDateMonth: false });
	};

	const onChangeDateYear = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChangeDateYear(e);
		setErrors({ ...error, errorDateYear: false });
	};

	const onChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChangeCVC(e);
		setErrors({ ...error, errorCVC: false });
	};

	const sendCard = (e: any) => {
		e.preventDefault();

		if (correctlyName(name) || name.length === 0) {
			setErrors({ ...error, errorName: true });
			return;
		} else if (!correctlyCard(cardNumber) || cardNumber.length === 0) {
			setErrors({ ...error, errorCard: true });
			return;
		} else if (correctlyDate(date.month)) {
			setErrors({ ...error, errorDateMonth: true });
			return;
		} else if (correctlyDate(date.year)) {
			setErrors({ ...error, errorDateYear: true });
			return;
		} else if (correctlyCVC(cvc)) {
			setErrors({ ...error, errorCVC: true });
			return;
		}

		finishCard();
	};

	return (
		<form className={styles.Form}>
			<div className={styles.full}>
				<div className={styles.field}>
					<p>CARDHOLDER NAME</p>
					<input
						type='text'
						value={name}
						onChange={onChangeName}
						placeholder='e.g. Andriy Lomakich'
						className={error.errorName ? styles.wrong : ''}
					/>
					{error.errorName && <span>Wrong format, only letters!</span>}
				</div>

				<div className={styles.field}>
					<p>CARD NUMBER</p>
					<input
						type='text'
						value={cardNumber}
						onChange={onChangeCard}
						placeholder='e.g. 0000 1111 2222 3333'
						className={error.errorCard ? styles.wrong : ''}
					/>
					{error.errorCard && <span>Wrong format, only letters!</span>}
				</div>
			</div>

			<div className={styles.togather}>
				<div className={styles.fieldTogatherDate}>
					<p>EXP. DATE (MM/YY)</p>
					<div>
						<input
							type='text'
							value={date.month}
							onChange={onChangeDateMonth}
							placeholder='MM'
							className={error.errorDateMonth ? styles.wrong : ''}
						/>
						<input
							type='text'
							value={date.year}
							onChange={onChangeDateYear}
							placeholder='YY'
							className={error.errorDateYear ? styles.wrong : ''}
						/>
					</div>
					{error.errorDateMonth || error.errorDateYear ? (
						<span>Can't be blank</span>
					) : (
						''
					)}
				</div>

				<div className={styles.fieldTogather}>
					<p>CVC</p>
					<div>
						<input
							type='text'
							value={cvc}
							onChange={onChangeCVC}
							className={error.errorCVC ? styles.wrong : ''}
							placeholder='e.g. 123'
						/>
					</div>
					{error.errorCVC && <span>Can't be blank</span>}
				</div>
			</div>

			<button type='submit' onClick={sendCard}>
				Confirm
			</button>
		</form>
	);
};
