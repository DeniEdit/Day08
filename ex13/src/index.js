function randomRangeNumber(minNumber, maxNumber){
return Math.floor(Math.random() * (maxNumber - minNumber +1)) + minNumber;
} 
randomRangeNumber(2, 7);
console.log(randomRangeNumber(2, 7));
module.exports = randomRangeNumber;