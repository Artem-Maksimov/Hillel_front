const result1 = multiply(5)(2);
const result2 = multiply(10)(3);

function multiply(num1) {
  return function(num2) {
    return num1 * num2;
  };
}
console.log(`Добуток 5 * 2: ${result1}`);
console.log(`Добуток 10 * 3: ${result2}`)