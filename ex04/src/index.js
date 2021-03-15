// Only change code below this line
var myVariable;

function localScope() {
    var myVariable = "I am here!";
    console.log(myVariable);
}
// Only change code below this line
localScope();
console.log(myVariable);
// myVariable is not defined outside of localScope
if(typeof myVariable != "undefine"){
    console.log('outside localScope', myVariable)
} else {
    console.log('outside localScope UNDEFINED!!!')
}

module.exports = localScope;