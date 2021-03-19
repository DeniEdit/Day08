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
module.exports = {
    addThree,
    addFive
};
