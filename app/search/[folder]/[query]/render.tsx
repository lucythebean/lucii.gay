/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import caps from '../../../caps';
import style from '../[query]/page.module.css';

export default function Recurse(data: object, context = []) {
	let elements = [];
	Object.keys(data).forEach(i => {
		const element = data[i];
		if (typeof element === 'object') {
			let subKeys = [];
			if (Array.isArray(element)) {
				element.forEach(x => {
					subKeys.push(<li>{Recurse(element)}</li>);
				});
				elements.push(<ul id={i}>{subKeys}</ul>);
				return;
			}
			if (i === 'images') {
				let subElements = [];
				for (let subElement in element) {
					if (element[subElement].toString().includes('https://')) {
						subElements.push(
							<img
								src={element[subElement]}
								alt={subElement}
							/>
						);
					}
				}
				context.unshift(
					<div
						id={i}
						className={style.images}>
						{subElements}
					</div>
				);
				return;
			}
			elements.push(
				<div id={i}>
					{isNaN(+i) ? <b>{caps(i)}</b> : null}
					{Recurse(element, subKeys)}
				</div>
			);
			return;
		}
		elements.push(
			i === 'fandom' ? (
				<p>
					<Link href={element}>{element}</Link>
				</p>
			) : (
				<p>
					{caps(i)}: {element}
				</p>
			)
		);
	});
	context.push(elements);
	return context;
}
