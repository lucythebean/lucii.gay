/* Parse a json */

export default function keyify(input: object): object {
  if (Array.isArray(input)) {
    var output = { paths: [] };
    for (let i in input) {
      output.paths.push(input[i]);
    }
    return output;
  } else {
    var topInput = input;
    const keyify = (input: object): any[] => {
      let output = [];
      let keys = Object.keys(input);
      keys.forEach(element => {
        if (typeof input[element] === 'object' && input[element] !== null) {
          let subkeys = [];
          subkeys.push(element, keyify(input[element]));
          output.push(subkeys);
          return;
        } else if (
          typeof input[element] !== 'object' &&
          input[element] !== null
        ) {
          output.push([element, [input[element]]]);
        }
        return;
      });
      return output;
    };
    return { keys: Object.keys(input), paths: keyify(input) };
  }
}
