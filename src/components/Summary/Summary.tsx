import styles from './Summary.module.scss';
import data from '../../data/data.json';
import SingleScore from '../SingleScore/SingleScore';

const Summary = () => {
	return (
		<div className={styles.root}>
			<h3>Summary</h3>
			<ul>
				{data.map((result, index) => {
					return (
						<li key={index}>
							<SingleScore {...result} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default Summary;
