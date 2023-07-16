import Recurse from './render';
import style from './page.module.css';

export default async function Page({ params }) {
	let folder: string = params.folder;
	let query: string = params.query;
	async function getData() {
		const res = await fetch(
			'https://lucii.gay/api/search?' +
				new URLSearchParams({ folder: folder, query: query })
		);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	}

	const data = await getData();
	const content = Recurse(data);
	return (
		<>
			<div className={style.main}>{content}</div>
		</>
	);
}
