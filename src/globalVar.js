// eslint-disable-next-line import/no-mutable-exports
let currentWeather = {};
let daysForecast = {};
let suggestedCities = [];

function setCurrentWeather(newValue) {
  currentWeather = newValue;
}

function setDaysForecast(newValue) {
  daysForecast = newValue;
}

function setSuggestedCities(newValue) {
  suggestedCities = newValue;
}

export {
  setCurrentWeather,
  setDaysForecast,
  setSuggestedCities,
  currentWeather,
  daysForecast,
  suggestedCities
};
