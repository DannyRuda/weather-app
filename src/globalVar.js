// eslint-disable-next-line import/no-mutable-exports
let currentWeather = {};
let daysForecast = {};
let suggestedCities = [];
let unit = "celsius";


function setCurrentWeather(newValue) {
  currentWeather = newValue;
}

function setDaysForecast(newValue) {
  daysForecast = newValue;
}

function setSuggestedCities(newValue) {
  suggestedCities = newValue;
}

function toggleUnit() {
  unit = unit === "celsius" ? "fahrenheit" : "celsius";
}

export {
  setCurrentWeather,
  setDaysForecast,
  setSuggestedCities,
  toggleUnit,
  currentWeather,
  daysForecast,
  suggestedCities,
  unit,
};
