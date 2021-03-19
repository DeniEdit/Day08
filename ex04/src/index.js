var myVariable;
function localScope() {
    var myVariable = "I am here!";
    console.log(myVariable);
}
localScope();
console.log(myVariable);
if(typeof myVariable != "undefine"){
    console.log('outside localScope', myVariable)
} else {
    console.log('outside localScope UNDEFINED!!!')
}
module.exports = localScope;