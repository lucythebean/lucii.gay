/* Parse a json */

export function getPath(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
    if (typeof obj[key] === "object") {
      var subkeys = getPath(obj[key]);
      keys = keys.concat(
        subkeys.map(function (subkey) {
          return key + "." + subkey;
        })
      );
    }
  }
  return keys;
}

export function getKeys(obj){
  var keys =[];
  for (Object.keys(obj).length in obj){
    
  }
}