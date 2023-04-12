export default function recurse(
 data: object,
 parent: HTMLElement
): HTMLElement {
 Object.keys(data).forEach(element => {
  if (typeof data[element] === 'object' && data[element] !== null) {
   let child = document.createElement('div');
   child.setAttribute('id', element);
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
     header.innerText = element;
     child.append(header);
    }
    parent.append(child, recurse(data[element], child));
    return parent;
   }
  } else {
   let child = document.createElement('p');
   child.setAttribute('id', element);
   child.innerText = `${element}: ${data[element]}`;
   parent.append(child);
   return parent;
  }
 });
 return parent;
}
