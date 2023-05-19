const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "36f9850102a58e16f2699ebeb0e51d39";

function getWeatherData(city) {
  fetch(`${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const temperatureCelsius = data.main.temp;
      const feelsLikeCelsius = data.main.feels_like;
      const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
      const feelsLikeFahrenheit = (feelsLikeCelsius * 9/5) + 32;
      const conditions = data.weather[0].description;
      const windSpeed = data.wind.speed;
      const city = data.name;
      const country = data.sys.country;

      const tempElement = document.getElementById("temp");
      tempElement.textContent = `${temperatureFahrenheit.toFixed(1)}°F`;

      const feelsLikeElement = document.getElementById("feels-like");
      feelsLikeElement.textContent = `Feels like: ${feelsLikeFahrenheit.toFixed(1)}°F`;

      const conditionsElement = document.getElementById("conditions");
      conditionsElement.textContent = `Conditions: ${conditions}`;

      const windSpeedElement = document.getElementById("wind-speed");
      windSpeedElement.textContent = `Wind speed: ${windSpeed} km/h`;

      const cityElement = document.getElementById("searched-city");
      cityElement.textContent = city;

      const countryElement = document.getElementById("Country");
      countryElement.textContent = country;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
}

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  const searchInput = document.getElementById("search-input");
  const city = searchInput.value;
  getWeatherData(city);
});

getWeatherData("New York");
getWeatherData("Los Angeles");
