import recurse from './render';

export default function Page({ params }) {
	let folder: string = params.folder;
	let query: string = params.query;
	function Content() {
		async function Request() {
			var x: any;
			try {
				const response = await fetch(
					'https://dev.lucii.gay/api/searchGenshin?' +
						new URLSearchParams({ folder: folder, query: query })
				);
				const text = await response.text(); // Parse it as text
				const data = JSON.parse(text); // Try to parse it as JSON
				x = data;
			} catch (err) {
				x = "Error! Website's down lol :)";
			}
			return x;
		}
		return recurse(Request());
	}
	return (
		<>
			<div>
				<Content />
			</div>
		</>
	);
}
