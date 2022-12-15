// eslint-disable-next-line import/no-mutable-exports
let currentWeatherObject = {};
let daysForecast = {};
let suggestedCities = [];

function setCurrentWeatherObject(newValue) {
  currentWeatherObject = newValue;
}

function getCurrentWeatherObject() {
  return currentWeatherObject;
}

function setDaysForecast(newValue) {
  daysForecast = newValue;
}

function getDaysForecast() {
  return daysForecast;
}

function setSuggestedCities(newValue) {
  suggestedCities = newValue;
}

function getSuggestedCities() {
  return suggestedCities;
}

export {
  setCurrentWeatherObject,
  setDaysForecast,
  setSuggestedCities,
  getCurrentWeatherObject,
  getDaysForecast,
  getSuggestedCities,
};
