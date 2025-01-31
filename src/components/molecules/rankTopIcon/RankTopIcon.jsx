import React, { useEffect, useState } from 'react';
import styles from './RankTopIcon.module.scss';

function RankTopIcon(props) {
	console.log('--RankTopIcon');
	const {teamNum, date}  = props;
	// data
	const [year, setYear] = useState(0);
	useEffect(() => {
		const dataDate = new Date(date);
		let dataYear = dataDate.getFullYear();
		if(dataDate.getMonth() + 1 >= 4) {
			dataYear++;
		}
		setYear(dataYear);
	},[teamNum])
	return (
		<figure className={styles.teamIcon}>
			<img 
					src={`/assets/img/logo/${year}/${teamNum}`} alt={`${teamNum}logo`} 
					onError={(e) => e.target.src = 'https://placehold.jp/3d4070/ffffff/150x150.png?text=logo'}
				/>
			<figcaption>{teamNum}</figcaption>
		</figure>
	);
}

export default RankTopIcon;