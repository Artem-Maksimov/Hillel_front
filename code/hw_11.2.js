const textBlock = document.getElementById('textBlock');
const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', () => {
  textBlock.classList.toggle('highlighted');
});