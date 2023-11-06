import Circle from '../Circle/Circle';
import styles from './Result.module.scss';

const Result = () => {
	return (
		<div className={styles.root}>
			<h1>Ваш результат</h1>
			<Circle />
			<h2>Отлично</h2>
			<p className={styles.text}>Ваш счет выше, чем у 65% людей, проходивших этот тест</p>
		</div>
	);
};
export default Result;
