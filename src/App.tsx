import styles from './App.module.scss';
import Result from './components/Result/Result';
import Summary from './components/Summary/Summary';

function App() {
	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				<Result />
				<Summary />
			</div>
		</div>
	);
}

export default App;
