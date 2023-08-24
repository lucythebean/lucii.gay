import caps from '../app/components/caps';

export default function recurse(
	data: object,
	parent: HTMLElement
): HTMLElement {
	Object.keys(data).forEach(element => {
		let child = document.createElement('div');
		child.setAttribute('id', parent.getAttribute('id') + '.' + element);
		var content: HTMLElement;
		if (typeof data[element] === 'object' && data[element] !== null) {
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
					content = document.createElement('p');
					content.setAttribute('id', parent.getAttribute('id') + '.' + context[0]);
					content.innerHTML = `<b>${caps(context[0])}: </b> ${context[1]}`;
					child.append(content);
					parent.append(child);
				});
				return parent;
			}
			if (Array.isArray(data[element]) && typeof data[element][0] !== 'object') {
				let content = document.createElement('ol');
				let a = 0;
				data[element].forEach(i => {
					let il = document.createElement('il');
					il.innerText = i;
					il.setAttribute('id', `${a++}`);
					content.appendChild(il);
				});
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
			content = document.createElement('p');
			content.innerHTML = `<b>${caps(element)}: </b> ${data[element]}`;
		}
		child.append(content);
		parent.append(child);
		return parent;
	});
	return parent;
}
