import styles from './Summary.module.scss';
import data from '../../data/data.json';
import SingleScore from '../SingleScore/SingleScore';

const Summary = () => {
	return (
		<div>
			<h3>Summary</h3>
			<ul>
				{data.map(result => {
					return (
						<li>
							<SingleScore />
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default Summary;
