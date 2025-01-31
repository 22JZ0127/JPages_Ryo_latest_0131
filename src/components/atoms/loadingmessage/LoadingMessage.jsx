import styles from "./loadingmessage.module.css"

function LoadingMessage({loading, canvasRef}) {
	console.log('--LoadingMessage');
	return (
		<>
			{loading && <div className={styles["loading-message"]}>現在スキャン中です...</div>}
			<canvas ref={canvasRef} className={styles["canvas"]} width="960" height="540" style={{ display: 'none' }}></canvas>
		</>
	)
}
export default LoadingMessage;