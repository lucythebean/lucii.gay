import styles from './page.module.css';
import SearchForm from './searchForm';

export default function Search() {
	return (
		<>
			<main className={styles.main}>
				<div className={styles.header}>
					<span id='header'>Lucy's internet emporium :3</span>
				</div>
				<SearchForm />
			</main>
		</>
	);
}
