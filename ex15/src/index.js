// Only change code below this line
function convertToInt(str) {
    return parseInt(str,16);
}
console.log(typeof convertToInt("BA"));
console.log(convertToInt("BA"));
console.log(convertToInt("F1"));
console.log(convertToInt("JeffBezos"));
module.exports = convertToInt;