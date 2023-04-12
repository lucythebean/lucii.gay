'use client';
import { useEffect } from 'react';

export default function Render() {
 useEffect(() => {
  var data = { a: { b: [1, 2, 3], c: 'D' } };
  var main = document.getElementById('main');
  function recurse(data: object, parent: HTMLElement): HTMLElement {
   Object.keys(data).forEach(element => {
    if (typeof data[element] === 'object' && data[element] !== null) {
     console.log(
      `data[element]: ${
       data[element]
      } element: ${element}, parent: ${parent}, isArray: ${Array.isArray(
       data[element]
      )}`
     );
     let child = document.createElement('div');
     let header = document.createElement('h1');
     header.innerText = element;
     child.append(header);
     child.setAttribute('id', element);
     if (Array.isArray(data[element])) {
      let ol = document.createElement('ol');
      let il = document.createElement('il');
      data[element].forEach(i => {
       il.append(i);
      });
      ol.appendChild(il);
      child.append(ol);
      parent.append(child);
      return parent;
     } else {
      parent.append(child, recurse(data[element], child));
      return parent;
     }
    } else {
     console.log(
      `data[element]: ${
       data[element]
      } element: ${element}, parent: ${parent}, isArray: ${Array.isArray(
       data[element]
      )}`
     );
     let child = document.createElement('p');
     child.setAttribute('id', element);
     child.innerText = `${element}: ${data[element]}`;
     parent.append(child);
     return parent;
    }
   });
   return parent;
  }
  recurse(data, main);
 }, []);
 return (
  <div id='main'>
   <h1>Initial header!</h1>
  </div>
 );
}
