'use client';
import styles from './page.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm() {
	const [folder, setFolder] = useState('');
	const [query, setQuery] = useState('');
	const router = useRouter();
	return (
		<form
			className={styles.search}
			onSubmit={e => {
				e.preventDefault();
				router.push(`/search/${folder}/${query}`);
			}}>
			<input
				type='text'
				placeholder='Folder'
				value={folder}
				onChange={e => setFolder(e.target.value)}
			/>
			<br />
			<input
				type='text'
				placeholder='Query'
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
			<br />
			<button type='submit'>Submit search</button> <br />
		</form>
	);
}
