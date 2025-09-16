const imageElement = document.getElementById('randomImage');

const randomNumber = Math.floor(Math.random() * 9) + 1;

const imagePath = `images/${randomNumber}.jpg`;

imageElement.src = imagePath;

imageElement.alt = `Випадкове зображення №${randomNumber}`;