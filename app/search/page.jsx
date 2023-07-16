//Will be the page for inputting searches :3
'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function SearchForm() {
	const [folder, setFolder] = useState('');
	const [query, setQuery] = useState('');
	const router = useRouter();
	function search(e) {
		e.preventDefault();
		router.push(`/search/${folder}/${query}`);
	}
	return (
		<>
			<div className={styles.main}>
				<form onSubmit={search}>
					<h1 className={styles.header}>Search a thing</h1>
					<div className={styles.searchFields}>
						<input
							type='text'
							placeholder='Folder'
							value={folder}
							onChange={e => setFolder(e.target.value)}
						/>{' '}
						<br />
						<input
							type='text'
							placeholder='Query'
							value={query}
							onChange={e => setQuery(e.target.value)}
						/>{' '}
						<br />
						<button type='submit'>Submit search</button> <br />
					</div>
				</form>
				<div>
					<h1>STILL WORKING ON THIS ONE :3</h1>
					<Link href='/'>
						<button>Back to homepage!</button>
					</Link>
				</div>
			</div>
		</>
	);
}
