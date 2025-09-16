const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

const phoneRegex = /^\+380\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(element, message) {
  const errorDiv = document.getElementById(`${element.id}-error`);
  errorDiv.textContent = message;
}

function clearError(element) {
  const errorDiv = document.getElementById(`${element.id}-error`);
  errorDiv.textContent = '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  if (nameInput.value.trim() === '') {
    showError(nameInput, "Ім'я є обов'язковим полем.");
    isValid = false;
  } else {
    clearError(nameInput);
  }

  if (messageInput.value.trim().length < 5) {
    showError(messageInput, 'Повідомлення має бути не менше 5 символів.');
    isValid = false;
  } else {
    clearError(messageInput);
  }

  if (!phoneRegex.test(phoneInput.value)) {
    showError(phoneInput, 'Номер телефону має починатися на +380 та містити 12 цифр.');
    isValid = false;
  } else {
    clearError(phoneInput);
  }

  if (!emailRegex.test(emailInput.value)) {
    showError(emailInput, 'Будь ласка, введіть коректний email.');
    isValid = false;
  } else {
    clearError(emailInput);
  }

  if (isValid) {
    const formData = {
      name: nameInput.value.trim(),
      message: messageInput.value.trim(),
      phone: phoneInput.value,
      email: emailInput.value
    };
    console.log('Дані успішно відправлені:', formData);
    alert('Повідомлення успішно відправлено!');
    form.reset();
  }
});