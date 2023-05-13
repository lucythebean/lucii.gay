'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import styles from './page.module.css';
import recurse from '../../public/render';

export default function Render() {
	let params = useSearchParams();
	let folder = params.get('folder');
	let query = params.get('query');
	useEffect(() => {
		async function Display() {
			console.log(`display called with ${folder} and ${query}!`);
			const response = await fetch(
				'/api/search?' + new URLSearchParams({ folder: folder, query: query })
			);
			return response.json();
		}
		Display().then(data => {
			let main = document.getElementById('main');
			recurse(data, main);
		});
	});
	return (
		<>
			<div>
				<div
					id='main'
					className={styles.main}
				/>
			</div>
		</>
	);
}
