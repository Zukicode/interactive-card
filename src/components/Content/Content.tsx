import React from 'react';

//Styles
import styles from './Content.module.scss';

//Components
import { Form } from '../Form/Form';
import { Completed } from '../Completed/Completed';

import { IForms } from '../../models/models';

export interface IformEntry extends IForms {
	handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleChangeCard: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleChangeDateMonth: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleChangeDateYear: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleChangeCVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
	finish: boolean;
	finishCard: () => void;
	backCard: () => void;
}

export const Content = (props: IformEntry) => {
	const { finish } = props;

	return (
		<div className={styles.Content}>
			{finish ? <Completed backCard={props.backCard} /> : <Form {...props} />}
		</div>
	);
};
