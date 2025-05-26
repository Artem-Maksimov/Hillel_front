function createSumAccumulator() {
  let currentSum = 0;

  return function(numberToAdd) {
    currentSum += numberToAdd;
    return currentSum;
  };
}

const sum = createSumAccumulator();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));