const originalArray = [1, 3, 4, 6, 2, 5, 7];

const newArray = removeElement(originalArray, 4);


function removeElement(array, item) {
  const index = array.indexOf(item);

  if (index !== -1) {
    return [
      ...array.slice(0, index),
      ...array.slice(index + 1)
    ];
  } else {
    return [...array];
  }
}
console.log("Новый массив после удаления элемента 4:", newArray);