'use client';
import styles from './page.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm() {
	const [folder, setFolder] = useState('');
	const [query, setQuery] = useState('');
	const router = useRouter();
	let allOptions = ['Artifacts', 'Characters', 'Materials', 'Weapons']; //Replace with an api call for catergory options :3
	let list = [];
	for (let i in allOptions) {
		list.push(<option>{allOptions[i]}</option>);
	}
	return (
		<form
			className={styles.search}
			onSubmit={e => {
				e.preventDefault();
				router.push(`/search/${folder}/${query}`);
			}}>
			<select
				placeholder='Folder'
				value={folder}
				onChange={e => {
					setFolder(e.target.value);
				}}
				id='list'>
				{list}
			</select>
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
