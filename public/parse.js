/* Parse a json */

export default function parse(data) {
    var display = []
    var x = JSON.parse(data)
    var keys = Object.keys(JSON.parse(data))
    console.log(`keys?: ${Object.keys(JSON.parse(data))}`)
    for (i in keys){
        console.log(`x[key[i]]: ${x[keys[i]]}`)
        display.push(`${keys[i]}: ${x[keys[i]]}`)};
    return(display);
};