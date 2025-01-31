import React from 'react';
import Styles from './editButton.module.css';

const EditButton = ({ handleEditClick }) => {
	console.log('--EditButton');
	return (<button onClick={handleEditClick} className={Styles.button}>編集</button>);
};

export default EditButton;