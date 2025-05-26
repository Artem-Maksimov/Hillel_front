function promptForNumberGreaterThan100() {
  const maxIterations = 10;
  let lastValidInput = null;

  for (let i = 1; i <= maxIterations; i++) {
    const userInput = prompt(`Итерация ${i}/${maxIterations}: Введите число больше 100:`);

    if (userInput === null) {
      console.log("Ввод отменен пользователем.");
      return;
    }

    const parsedNumber = parseInt(userInput);

    if (isNaN(parsedNumber)) {
      console.log("Введены некорректные данные (не число).");
      return;
    }

    if (parsedNumber > 100) {
      lastValidInput = parsedNumber;
      console.log(`Последнее введенное число (больше 100): ${lastValidInput}`);
      return;
    } else {
      console.log(`Число ${parsedNumber} меньше либо равно 100. Попробуйте еще раз.`);

      if (i === maxIterations) {
        console.log(`Достигнуто максимальное количество итераций (${maxIterations}). Последний ввод был ${parsedNumber}.`);
        return;
      }
    }
  }
}
promptForNumberGreaterThan100();