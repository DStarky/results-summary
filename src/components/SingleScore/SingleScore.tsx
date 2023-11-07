import styles from './SingleScore.module.scss';

interface SingleScoreProps {
	category: string;
	score: number;
	icon: string;
	color: string;
}

const SingleScore = ({ category, score, icon, color }: SingleScoreProps) => {
	return (
		<div
			className={styles.root}
			data-color={color}
			data-width={`${score}px`}>
			<div
				className={styles.progress}
				style={{ width: `${score}%` }}
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
