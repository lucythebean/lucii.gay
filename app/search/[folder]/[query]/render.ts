import caps from '../../../../public/caps';

export default function recurse(
	data: object,
	parent: HTMLElement
): HTMLElement {
	Object.keys(data).forEach(element => {
		if (typeof data[element] === 'object' && data[element] !== null) {
			let child = document.createElement('div');
			child.setAttribute('id', parent.getAttribute('id') + '.' + element);
			if (element === 'attributes') {
				var labels = data[element]['labels'];
				labels.forEach(i => {
					var context = i.split('|');
					var x = context[1].split('{')[1].split(':');
					x[0] = data[element]['parameters'][x[0]][0];
					x[1] = context[1].split('}')[1];
					if (x[1].indexOf('{') > -1) {
						x[1] = x[1].replace(
							'{' + x[1].split('{')[1],
							' ' +
								data[element]['parameters'][x[1].split('{')[1].split(':')[0]][0] +
								context[1].split('}')[2]
						);
					}
					context[1] = x.join('');
					let child = document.createElement('p');
					child.setAttribute('id', parent.getAttribute('id') + '.' + context[0]);
					child.innerHTML = `<b>${caps(context[0])}: </b> ${context[1]}`;
					parent.append(child);
				});
				return parent;
			}
			if (Array.isArray(data[element]) && typeof data[element][0] !== 'object') {
				let ol = document.createElement('ol');
				let a = 0;
				data[element].forEach(i => {
					let il = document.createElement('il');
					il.innerText = i;
					il.setAttribute('id', `${a++}`);
					ol.appendChild(il);
				});
				child.append(ol);
				parent.append(child);
				return parent;
			} else {
				if (Number.isNaN(+element)) {
					let header = document.createElement('h1');
					header.innerText = caps(element);
					child.append(header);
				}
				parent.append(child, recurse(data[element], child));
				return parent;
			}
		} else {
			let child = document.createElement('p');
			child.setAttribute('id', parent.getAttribute('id') + '.' + element);
			child.innerHTML = `<b>${caps(element)}: </b> ${data[element]}`;
			parent.append(child);
			return parent;
		}
	});
	return parent;
}
