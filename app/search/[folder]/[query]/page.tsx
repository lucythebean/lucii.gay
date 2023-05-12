import { searchFolder } from 'genshin-db';
import recurse from './render';

export default function Page({ params }) {
	let folder = params.folder;
	let query = params.query;
	function Content() {
		return recurse(searchFolder(folder, query));
	}
	return (
		<>
			<div>
				<Content />
			</div>
		</>
	);
}
