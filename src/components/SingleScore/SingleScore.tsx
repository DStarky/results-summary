import { useState, useEffect } from 'react';
import styles from './SingleScore.module.scss';

interface SingleScoreProps {
	category: string;
	score: number;
	icon: string;
	color: string;
}

const SingleScore = ({ category, score, icon, color }: SingleScoreProps) => {
	const [scoreWidth, setScoreWidth] = useState<number>(0);

	useEffect(() => {
		setTimeout(() => {
			setScoreWidth(score);
		}, 100);
	}, []);

	return (
		<div
			className={styles.root}
			data-color={color}
			data-width={`${score}px`}>
			<div
				className={styles.progress}
				style={{ width: `${scoreWidth}%` }}
				data-color={color}></div>
			<img
				src={icon}
				alt=''
			/>
			<p className={styles.category}>{category}</p>
			<p className={styles.score}>
				<span>{score}</span> / 100
			</p>
		</div>
	);
};
export default SingleScore;
