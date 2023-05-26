import caps from '../../../caps';
import Image from 'next/image';
import style from '../[query]/page.module.css';
import { url } from 'inspector';

export default function Recurse(data: object, context = [], note: any = false) {
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
			elements.push(
				<div id={i}>
					{isNaN(+i) ? <b>{caps(i)}</b> : null}
					{Recurse(element, subKeys)}
				</div>
			);
			return;
		}
		elements.push(
			element.toString().includes('https://') && i !== 'fandom' ? (
				<div className={style.image}>
					<Image
						id={i}
						src={element}
						alt={i}
						fill={true}
					/>
				</div>
			) : (
				<p>{element}</p>
			)
		);
	});
	context.push(elements);
	return context;
}
