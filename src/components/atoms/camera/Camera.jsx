import React from "react";
import Styles from "./camera.module.css";

const Camera = ({videoRef, handleCapture, onNoCardButtonClick}) => {
	console.log('--Camera');
	return (
		<>
			<div className={Styles["camera"]}>
				<video autoPlay muted playsInline ref={videoRef} className={Styles["video"]} />
				<div className={Styles.frame}></div>
				<p>名刺をスキャンしてください</p>
				<button type='button' className={Styles.noCardButton} onClick={onNoCardButtonClick}>
                名刺をお持ちでない方
            	</button>
				<button className={Styles["capture-btn"]} onClick={handleCapture}>●</button>
			</div>
		</>
	)
};
export default Camera;