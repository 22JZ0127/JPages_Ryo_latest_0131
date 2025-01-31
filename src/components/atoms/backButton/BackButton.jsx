import Styles from './backButton.module.css'
import { AppContext } from '../../AppContextProvider';
import { useContext } from 'react';

function BackButton() {
	console.log('--BackButton');
	const {setAppState} = useContext(AppContext);
	return (
		<button type='button' className={Styles.backButton} onClick={() => setAppState('home')}>戻る</button>
	)
}

export default BackButton;