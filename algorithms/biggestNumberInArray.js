const biggestNumberInArray = (array) => {
  let biggestNumber = 0;
  for (let index = 0; index < array.length; index++) {
    biggestNumber = array[index] > biggestNumber ? array[index] : biggestNumber;
  }
  console.log(`biggestNumber: `, biggestNumber);
  return biggestNumber;
};

const sum = (a, b) => {
  return a + b;
};

module.exports = { biggestNumberInArray, sum };
