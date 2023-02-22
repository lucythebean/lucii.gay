/* Parse a json */

export function getPath(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
    if (typeof obj[key] !== "string") {
      var subkeys = getPath(obj[key]);
      keys = keys.concat(
        subkeys.map(function (subkey) {
          return key + "." + subkey;
        })
      );
    }
  }
  console.log("keys: " + Object.keys(obj));
  return keys;
}

export function getKeys(obj) {
  var keys = [];
  var keyList = Object.keys(obj);
  console.log("keylist: " + keyList);
  for (key in keyList) {
    console.log("key: " + keyList[key]);
    keys.push(Object.keys(obj[key]));
    console.log("keys: " + Object.keys(obj[key]));
  }
  console.log(keys);
  return keys;
}

export function keyify(input) {
  const keyify = (obj, prefix = "") =>
    Object.keys(obj).reduce((res, el) => {
      if (typeof obj[el] === "object" && obj[el] !== null) {
        return [...res, ...keyify(obj[el], prefix + el + "|")];
      }
      return [...res, prefix + el];
    }, []);
  const output = keyify(input);
  for (i in output) {
    console.log(output[i].split("|")[0]);
  }
  return output;
}
