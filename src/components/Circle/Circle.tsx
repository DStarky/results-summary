import { useEffect, useState } from 'react';
import styles from './Circle.module.scss';
import data from '../../data/data.json';

const Circle = () => {
	const [score, setScore] = useState<number>(0);

	useEffect(() => {
		const totalScore = data.reduce((acc, item) => {
			return acc + item.score;
		}, 0);

		const averageScore = Math.floor(totalScore / data.length);
		setScore(averageScore);
	}, []);

	return (
		<div className={styles.root}>
			<p className={styles.score}>{score}</p>
			<p className={styles.text}>of 100</p>
		</div>
	);
};


export default Circle;
