import React from 'react';
import styles from './submitButton.module.css'

const  SubmitButton = ({ visualType }) => {
	console.log('--SubmitButton');
	const buttonText = visualType === 'submit' ? '送信' : visualType === 'login' ? 'ログイン' : '送信';

	return (<button type="submit" className={styles["submit-button"]}>{buttonText}</button>);
};

export default SubmitButton;
