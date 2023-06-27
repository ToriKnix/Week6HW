// Define variables to store the API endpoint and your API key
const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "36f9850102a58e16f2699ebeb0e51d39";

// Define a function to fetch weather data from the API
function getWeatherData(city) {

  fetch(`${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const feelsLike = data.main.feels_like;
      const conditions = data.weather[0].description;
      const windSpeed = data.wind.speed;

      const tempElement = document.getElementById("temp");
      tempElement.textContent = `${temperature}°C`;

      const feelsLikeElement = document.getElementById("feels-like");
      feelsLikeElement.textContent = `Feels like: ${feelsLike}°C`;

      const conditionsElement = document.getElementById("conditions");
      conditionsElement.textContent = `Conditions: ${conditions}`;

      const windSpeedElement = document.getElementById("wind-speed");
      windSpeedElement.textContent = `Wind speed: ${windSpeed} km/h`;
    })
    // Handle errors
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
}

// Call the getWeatherData() function with the desired location as the argument
getWeatherData("New York");
getWeatherData("Los Angeles");
