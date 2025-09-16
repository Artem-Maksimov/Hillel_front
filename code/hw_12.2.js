const buttonContainer = document.getElementById('button-container');

buttonContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const buttonText = event.target.textContent;
    alert(`Клікнуто на кнопку: ${buttonText}`);
  }
});