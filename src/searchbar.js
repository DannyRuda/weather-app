import {
  getMatchingCities,
  getCurrentWeather,
  getFiveDayForecast,
} from "./weatherAPI";

import {
  setDaysForecast,
  setCurrentWeather,
  setSuggestedCities,
  suggestedCities,
} from "./globalVar";

import { writeWeatherintoObjects } from "./helperFunctions";

import {
  pageLoad,
  addEventListenersToElements,
  addListenersToHourAndDataElements,
} from "./domCreation";

import { toggleUnitsOnPage } from "./toggleUnits";

import {
  addScrollingEventListener,
  addDraggingEventListeners,
  addListenersToArrows,
} from "./horizontalScroll";

import { bigLoadIcon, fadeIn, fadeOut, fadeWeatherIn, fadeWeatherOut, setVideoEventListeners } from "./transitions";

let search = "";
let suggestions = "";
let suggestionElements = "";
let searchIcon = "";

function updateSearchbarVariables() {
  search = document.querySelector(".search");
  searchIcon = document.querySelector(".searchIcon");
  suggestions = document.querySelector(".suggestions");
  suggestionElements = suggestions.children;
}

async function callWeather(e) {
  const clickedSuggestion = e.target;

  const city = suggestedCities[clickedSuggestion.dataset.index];
  const coords = city.latAndLon;
  const weatherObjects = await writeWeatherintoObjects(
    getCurrentWeather(coords),
    getFiveDayForecast(coords)
  );
  return weatherObjects;
}

function createCity(possibleCity, i) {
  const { name } = possibleCity;
  const { country } = possibleCity;
  const latAndLon = [possibleCity.lat, possibleCity.lon];
  const index = i;
  return { name, country, latAndLon, index };
}

function createSuggestion(city) {
  const suggestion = document.createElement("p");
  suggestion.innerText = `${city.name}, ${city.country}`;
  suggestion.dataset.index = city.index;
  return suggestion;
}

// used as event handler for input on search bar
async function getAndFillSuggestions() {
  const searchText = search.value.toLowerCase();
  const possibleCities = await getMatchingCities(searchText);
  const citiesArray = possibleCities.map((possibleCity, i) =>
    createCity(possibleCity, i)
  );
  const suggestionArray = citiesArray.map(createSuggestion);
  suggestions.replaceChildren(...suggestionArray);
  setSuggestedCities(citiesArray);
}

async function inputHandler(e) {
  // eslint-disable-next-line no-useless-escape
  const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/;
  if (
    e.key === "Enter" &&
    search.value.length > 0 &&
    !specialCharacters.test(search.value)
  ) {
    // eslint-disable-next-line no-use-before-define
    loadEnteredCity();
  } else if (
    search.value.length >= 1 &&
    !specialCharacters.test(search.value)
  ) {
    suggestions.classList.remove("hide");
    await getAndFillSuggestions();
    // eslint-disable-next-line no-use-before-define
    addEventListenersToElements(suggestionElements, loadClickedSuggestion);
  } else if (specialCharacters.test(search.value) && e.key === "Enter") {
    search.value = "No Special Characters allowed!";
  } else {
    suggestions.classList.add("hide");
  }
}

function addListenersToSearchbar() {
  // eslint-disable-next-line no-use-before-define
  searchIcon.addEventListener("click", loadEnteredCity);
  search.addEventListener("keyup", inputHandler);
}

async function loadEnteredCity() {
  const cityAndCountry = search.value.split(", ");
  const weatherObjects = await writeWeatherintoObjects(
    getCurrentWeather(cityAndCountry[0], cityAndCountry[1]),
    getFiveDayForecast(cityAndCountry[0], cityAndCountry[1])
  );
  setCurrentWeather(weatherObjects[0]);
  setDaysForecast(weatherObjects[1]);
  bigLoadIcon();
  fadeWeatherOut();
  await fadeOut()
  await pageLoad();
  setVideoEventListeners();
  updateSearchbarVariables();
  addListenersToSearchbar();
  addListenersToHourAndDataElements();
  document
    .querySelector("#toggleSwitch")
    .addEventListener("click", toggleUnitsOnPage);
  addScrollingEventListener();
  addDraggingEventListeners();
  addListenersToArrows();
}

async function loadClickedSuggestion(e) {
  const weatherObjects = await callWeather(e);
  setCurrentWeather(weatherObjects[0]);
  setDaysForecast(weatherObjects[1]);
  bigLoadIcon();
  fadeWeatherOut();
  await fadeOut();
  await pageLoad();
  setVideoEventListeners();
  updateSearchbarVariables();
  addListenersToSearchbar();
  addListenersToHourAndDataElements();
  document
    .querySelector("#toggleSwitch")
    .addEventListener("click", toggleUnitsOnPage);
  addScrollingEventListener();
  addDraggingEventListeners();
  addListenersToArrows()
}

export {
  loadClickedSuggestion,
  getAndFillSuggestions,
  updateSearchbarVariables,
  addListenersToSearchbar,
};
