'use client';
import styles from './page.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm() {
	let categories = ['Artifacts', 'Characters', 'Materials', 'Weapons'];
	let allCategories = [
		'Characters',
		'Talents',
		'Constellations',
		'Outfits',
		'Weapons',
		'Foods',
		'Materials',
		'Weapon material types',
		'Talent material types',
		'Artifacts',
		'Domains',
		'Enemies',
		'Rarity',
		'Elements',
		'Achievements',
		'Achievement groups',
		'Windgliders',
		'Animals',
		'Namecards',
		'Geographies',
		'Adventure ranks',
	];
	const [folder, setFolder] = useState(categories[0]);
	const [query, setQuery] = useState('');
	const [showCategories, setShowCategories] = useState(false);
	[];
	const router = useRouter();
	function listOptions(x: string[]) {
		let list = x.map(i => <option key={i}>{i}</option>);
		return list;
	}
	async function suggestResults(x: string) {
		let list = [];
		async function getData() {
			const res = await fetch(
				'https://dev.lucii.gay/api/search?' +
					new URLSearchParams({ folder: x, query: 'names' }),
				{ cache: 'force-cache' }
			);

			if (!res.ok) {
				throw new Error('Failed to fetch data');
			}
			return res.json();
		}
		const data = await getData();
		return console.log(data);
	}
	suggestResults(folder);
	return (
		<form
			className={styles.search}
			onSubmit={e => {
				e.preventDefault();
				router.push(`/search/${folder}/${query}`);
			}}>
			<span>
				Show all categories
				<input
					type='checkbox'
					checked={showCategories}
					onChange={() => {
						setShowCategories(!showCategories);
					}}
				/>
			</span>
			<br />
			<select
				value={folder}
				onChange={e => {
					setFolder(e.target.value);
				}}
				id='list'>
				{listOptions(showCategories ? allCategories : categories)}
			</select>
			<br />
			<div>
				<input
					type='text'
					placeholder='Query'
					value={query}
					onChange={e => {
						setQuery(e.target.value);
					}}
				/>
				<ul>{}</ul>
			</div>
			<br />
			<button type='submit'>Submit search</button> <br />
		</form>
	);
}
