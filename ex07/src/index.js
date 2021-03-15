// Only change code below this line
var sum = 0;
function addThree() {
    sum = sum + 3;
    console.log("addThree: " + sum);
}
addThree();

function addFive() {
    sum = sum + 5;
    console.log("addFive: " + sum);
}
addFive();

// Only change code below this line
module.exports = {
    addThree,
    addFive
};
