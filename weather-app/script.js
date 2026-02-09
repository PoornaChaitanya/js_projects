const apiKey = "1e8bc8ebb0938a6db963670d26e2a78c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weatherBox = document.querySelector(".weather");
const errorText = document.querySelector(".error");

const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
const iconEl = document.querySelector(".icon");

async function getWeather(city) {
  if (!city) return;

  try {
    const res = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (!res.ok) {
      showError();
      return;
    }

    const data = await res.json();
    console.log(data);
    updateUI(data);
  } catch {
    showError();
  }
}

function updateUI(data) {
  cityEl.textContent = data.name;
  tempEl.textContent = `${Math.round(data.main.temp)}°C`;
  humidityEl.textContent = `${data.main.humidity}%`;
  windEl.textContent = `${data.wind.speed} km/h`;

  const condition = data.weather[0].main;
  iconEl.src = `images/${condition.toLowerCase()}.png`;

  weatherBox.style.display = "block";
  errorText.style.display = "none";
}

function showError() {
  weatherBox.style.display = "none";
  errorText.style.display = "block";
}

button.addEventListener("click", () => {
  getWeather(input.value.trim());
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather(input.value.trim());
  }
});
