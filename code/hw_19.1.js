const API_KEY = '9a889784f02fc991babf1e2d9466f130';
const CITY_NAME = 'Dnipro';
// const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric&lang=ua`;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Dnipro&appid=9a889784f02fc991babf1e2d9466f130&units=metric&lang=ua`;

const cityNameElement = document.getElementById('city-name');
const tempElement = document.getElementById('temperature');
const descElement = document.getElementById('description');
const refreshBtn = document.getElementById('refresh-btn');

async function getWeather() {
  try {
    const response = await fetch(API_URL);
    console.log(API_URL);

    if (!response.ok) {
      throw new Error(`Помилка: ${response.status}`);
    }

    const weatherData = await response.json();

    if (weatherData && weatherData.name && weatherData.main && weatherData.weather) {
      cityNameElement.textContent = weatherData.name;
      tempElement.textContent = Math.round(weatherData.main.temp);
      descElement.textContent = weatherData.weather[0].description;
      console.log("Дані оновлено:", weatherData);
    } else {
      throw new Error("Неповні або некоректні дані від API.");
    }

  } catch (error) {
    console.error("Не вдалося отримати дані про погоду:", error);
    cityNameElement.textContent = 'Немає даних';
    tempElement.textContent = '...';
    descElement.textContent = '...';
    alert("Не вдалося оновити дані. Перевірте ключ API або назву міста.");
  }
}

refreshBtn.addEventListener('click', getWeather);

getWeather();