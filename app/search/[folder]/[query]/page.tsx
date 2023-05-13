import Recurse from './render';

export default async function Page({ params }) {
	let folder: string = params.folder;
	let query: string = params.query;
	async function getData() {
		const res = await fetch(
			'https://dev.lucii.gay/api/search?' +
				new URLSearchParams({ folder: folder, query: query })
		);
		if (!res.ok) {
			// This will activate the closest `error.js` Error Boundary
			throw new Error('Failed to fetch data');
		}

		return res.json();
	}

	const data = await getData();
	const content = Recurse(data);
	return (
		<>
			<div>{content}</div>
		</>
	);
}
