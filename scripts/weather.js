let is_loading = false;
let error_message = "";
let weather_data = null;

const outputContainer = document.getElementById("weather-output");

function renderWeather() {
  degreeOutput = document.getElementById("weather-degrees");
  forecastOutput = document.getElementById("weather-forecast");
  if (is_loading) {
    degreeOutput.textContent = "Loading data...";
  } else if (error_message.length > 0) {
    outputContainer.innerHTML = `Error: ${error_message}`;
  } else if (weather_data != null) {
    degreeOutput.textContent = `${weather_data.properties.periods[0].temperature + "°"}`;
    forecastOutput.textContent = `${weather_data.properties.periods[0].shortForecast}`;
  } else {
    degreeOutput.textContent = "Weather data unavailable.";
  }
}

async function getWeatherData() {
  is_loading = true;
  error_message = "";
  renderWeather();
  try {
    const response = await fetch(
      "https://api.weather.gov/gridpoints/MSO/105,131/forecast",
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    weather_data = await response.json();
  } catch (error) {
    error_message = error.message;
  } finally {
    is_loading = false;
    renderWeather();
  }
}

getWeatherData();
