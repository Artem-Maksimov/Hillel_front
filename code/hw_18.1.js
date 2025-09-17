let timeInSeconds = 85;

const timerDisplay = document.getElementById('timer');

function updateTimer() {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;

  timeInSeconds--;

  if (timeInSeconds < 0) {
    clearInterval(timerInterval);
    timerDisplay.textContent = "00:00";
    alert("Час вийшов!");
  }
}

const timerInterval = setInterval(updateTimer, 1000);

updateTimer();