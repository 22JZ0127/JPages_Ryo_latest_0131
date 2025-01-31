import React, { useState, useEffect } from "react";
import styles from "./characterStatus.module.css"

const LevelAndPoints = ({ level, point, count }) => {
	console.log('--LevelAndPoints')
	// data
	const [progress, setProgress] = useState(0);

	// ポイントバーの長さを決める
	useEffect(() => {
		const calculateProgress = (point) => { // returnはprogressのwidth
			if (point >= 18000) {
				return 100;
			}
			else if (point >= 11000) {
				return ((point - 11000) / 7000) * 100; 
			}
			else if (point >= 7000) {
				return ((point - 7000) / 4000) * 100; 
			}
			else if (point >= 3500) {
				return ((point - 3500) / 3500) * 100; 
			}
			else if (point >= 1000) {
				return ((point - 1000) / 2500) * 100; 
			}
			return (point / 1000) * 100;
		};
		setProgress(calculateProgress(point))
	}, [point]);




	return (
		<div className={styles.container}>
			<div className={styles.level}>
				<span className={styles.levelText}>Lv.</span>
				<span className={styles.levelNumber}><span>{level}</span></span>
				<div className={styles.bar}>
						<div className={styles.progress} style={{ width: `calc(${progress}% + 4px)` }} />
				</div>
			</div>
			<div className={styles.points}>
				<p className={styles.pointContainer}><img src='/assets/img/point.png' className={styles.png}/>{point ? point.toLocaleString() : 0}</p>
				<div className={styles.countContainer}>
					<img src={`/assets/img/people.svg`} alt="" className={styles.countImg}/>
					<p>{count}</p>
				</div>
			</div>
		</div>
	);
};

export default LevelAndPoints;
