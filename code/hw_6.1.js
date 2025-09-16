function removeChars(str, charsToRemove) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!charsToRemove.includes(char)) {
      result += char;
    }
  }
  return result;
}

const originalString = prompt('Введіть рядок:');
const charsToDelete = prompt('Введіть символи для видалення через кому (наприклад, l,d):').split(',');

const finalString = removeChars(originalString, charsToDelete);
alert(`Результат: "${finalString}"`);