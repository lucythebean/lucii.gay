/* Parse a json */

export default function keyify(input: object): object {
 if (Array.isArray(input)) {
  var output = { paths: [] };
  for (let i in input) {
   output.paths.push(input[i]);
  }
  return output;
 } else {
  const keyify = (input: object): any[] => {
   let keys = Object.keys(input);
   let output = [];
   keys.forEach(element => {
    if (typeof input[element] === 'object' && input[element] !== null) {
     let subkeys = {};
     subkeys[element] = keyify(input[element]);
     output.push(subkeys);
     return;
    } else if (typeof input[element] !== 'object' && input[element] !== null) {
     let x = {};
     x[element] = input[element];
     output.push(x);
    }
    return;
   });
   return output;
  };
  return { keys: Object.keys(input), paths: keyify(input) };
 }
}
