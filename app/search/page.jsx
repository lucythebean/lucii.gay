import styles from './page.module.css';
import SearchForm from './searchForm';

export default function Search() {
	return (
		<>
			<div className={styles.main}>
				<div className={styles.header}>
					<span id='header'>Lucy's internet emporium :3</span>
				</div>
				<SearchForm />
			</div>
		</>
	);
}
