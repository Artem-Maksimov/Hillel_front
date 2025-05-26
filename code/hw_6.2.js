const promptInput = prompt("Введите элементы массива, разделенные запятой (числа будут распознаны):");
if (promptInput !== null) {
   const rawElements = promptInput.split(',');
   const parsedArray = rawElements.map(item => {
     const num = parseFloat(item.trim());
     if (!isNaN(num)) {
       return num;
     } else {
       return item.trim();
     }
   });
  function calculateAverageOfNumbers(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];

      if (typeof element === 'number' && isFinite(element)) {
        sum += element;
        count++;
      }
    }
    if (count > 0) {
      return sum / count;
    } else {
      return null;
    }
  }
   console.log("\nМассив из prompt:", parsedArray);
   console.log("Середнее арифметическое из prompt:", calculateAverageOfNumbers(parsedArray));
 } else {
   console.log("Отменено.");
 }