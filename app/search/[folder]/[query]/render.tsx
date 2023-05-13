export default function Recurse(data: {}) {
	const keys = Object.keys(data);
	let elements = [];
	keys.forEach(entry => {
		elements.push(
			<p>
				{entry}: {JSON.stringify(data[entry])}
			</p>
		);
	});
	return elements;
}
