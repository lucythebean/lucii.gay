/* Parse a json */

export function keyify(input) {
  const keyify = (obj, prefix = "") =>
    Object.keys(obj).reduce((res, el) => {
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
      console.log("x[0]: " + x[0] + " x: " + x);
    } else {
      console.log("x != x! " + x);
      classes[x.shift()].push(x);
    }
  }
  console.log("classes: " + JSON.stringify(classes));
  return output;
}
