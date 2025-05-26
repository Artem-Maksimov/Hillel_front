const inputN = prompt("Введите число N:");

const N = parseInt(inputN);

if (isNaN(N)) {
  console.log("Введите целое число.");
} else {
  console.log(`Числа от 1 до 100, квадрат которых не превышает ${N}:`);
  let foundNumbers = false;


  for (let i = 1; i <= 100; i++) {
    const square = i * i;

    if (square <= N) {
      console.log(i);
      foundNumbers = true;
    }
  }
}