import styles from './rescanButton.module.css';

function RescanButton({ onClick }) {
	console.log('--RescanButton');
	return (<button type="button" className={styles["rescan-button"]} onClick={onClick}>再スキャン</button>);
}

export default RescanButton;
