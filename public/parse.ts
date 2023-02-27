/* Parse a json */

export default function keyify(input: object): object {
  const keyify = (obj: any, prefix = "") =>
    Object.keys(obj).reduce((res, el): any[] => {
      if (typeof obj[el] === "object" && obj[el] !== null) {
        return [...res, ...keyify(obj[el], prefix + el + "|")];
      }
      return [...res, prefix + el];
    }, []);
  const output = keyify(input);
  var classes = { keys: [] };
  for (var i in output) {
    let x = output[i].split("|");
    if (!classes.keys.includes(x[0])) {
      classes.keys.push(x[0]);
      classes[x[0]] = [];
    } else {
      classes[x.shift()].push(x);
    }
  }
  return classes;
}
