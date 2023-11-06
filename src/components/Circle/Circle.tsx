import styles from './Circle.module.scss';

const Circle = () => {
	return (
		<div className={styles.root}>
			<p className={styles.score}>76</p>
			<p className={styles.text}>of 100</p>
		</div>
	);
};

export default Circle;
