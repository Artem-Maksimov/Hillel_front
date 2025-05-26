const inputNum = prompt("Введите целое число:");

const num = parseInt(inputNum);

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  if (number % 2 === 0) {
    return false;
  }

  for (let i = 3; i * i <= number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

if (isNaN(num)) {
  console.log("Некорректное значение. Введите целое число.");
} else {
  if (isPrime(num)) {
    console.log(`Число ${num} простое.`);
  } else {
    console.log(`Число ${num} НЕ простое.`);
  }
}