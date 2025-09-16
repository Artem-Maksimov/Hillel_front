let redirectUrl = 'https://developer.mozilla.org';

const setLinkBtn = document.getElementById('setLinkBtn');
const goToLinkBtn = document.getElementById('goToLinkBtn');

setLinkBtn.addEventListener('click', () => {
  const url = prompt('Будь ласка, введіть посилання (наприклад, google.com):');

  if (url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      redirectUrl = `https://${url}`;
    } else {
      redirectUrl = url;
    }
    alert(`Посилання збережено: ${redirectUrl}`);
  }
});

goToLinkBtn.addEventListener('click', () => {
  window.location.href = redirectUrl;
});