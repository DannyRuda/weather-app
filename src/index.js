/* eslint-disable prefer-promise-reject-errors */
import {
  writeWeatherintoObjects,
  kelvinToFahrenheit,
  kelvinToCelsius,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  getCity,
  getCountry,
} from "./helperFunctions";

import { getCurrentWeather, getFiveDayForecast } from "./weatherAPI";

import { getAndFillSuggestions } from "./searchbar";

import {
  pageLoad,
  updateSelectedWeather,
  updateDetailedSection,
  addEventListenersToElements,
} from "./domCreation";

import "./reset.css";
import "./style.css";

let suggestedCities = [];
let currentWeather = {};
let daysForecast = {};

const wrapUpdateSelectedWeather = function (event) {
  updateSelectedWeather(event, daysForecast);
};

const wrapUpdateDetailedSection = function (event) {
  updateDetailedSection(event, daysForecast);
};

const wrapClickedSuggestionLoad = function (event) {
  const clickedSuggestion = event.target;
  const city = suggestedCities[clickedSuggestion.dataset.index];
  console.log(city)
  const coords = city.latAndLon
  console.log(coords);
  writeWeatherintoObjects(
    getCurrentWeather(coords),
    getFiveDayForecast(coords)
  )
    .then((weatherObjects) => {
      [currentWeather, daysForecast] = weatherObjects;
    })
    .then(() => pageLoad(currentWeather, daysForecast))
    .then(() => {
      const search = document.querySelector(".search");
      const suggestions = document.querySelector(".suggestions");
      const suggestionElements = suggestions.children;

      search.addEventListener("input", (e) => {
        if (search.value.length >= 1) {
          suggestions.classList.remove("hide");
        } else {
          suggestions.classList.add("hide");
        }
        getAndFillSuggestions(e).then((citiesArray) => {
          suggestedCities = citiesArray;
          addEventListenersToElements(
            suggestionElements,
            wrapClickedSuggestionLoad
          );
        });
      });
      const hourElements = document.querySelector(".hourSection").children;
      const dayElements = document.querySelector(".daySection").children;
      addEventListenersToElements(hourElements, wrapUpdateSelectedWeather);
      addEventListenersToElements(dayElements, wrapUpdateDetailedSection);
    });
};

writeWeatherintoObjects(
  getCurrentWeather("sidney", "AU"),
  getFiveDayForecast("sidney", "AU")
)
  .then((weatherObjects) => {
    [currentWeather, daysForecast] = weatherObjects;
  })
  .then(() => pageLoad(currentWeather, daysForecast))
  .then(() => {
    const search = document.querySelector(".search");
    const suggestions = document.querySelector(".suggestions");
    const suggestionElements = suggestions.children;

    search.addEventListener("input", (event) => {
      if (search.value.length >= 1) {
        suggestions.classList.remove("hide");
      } else {
        suggestions.classList.add("hide");
      }
      getAndFillSuggestions(event).then((citiesArray) => {
        suggestedCities = citiesArray;
        addEventListenersToElements(
          suggestionElements,
          wrapClickedSuggestionLoad
        );
      });
    });
    const hourElements = document.querySelector(".hourSection").children;
    const dayElements = document.querySelector(".daySection").children;
    addEventListenersToElements(hourElements, wrapUpdateSelectedWeather);
    addEventListenersToElements(dayElements, wrapUpdateDetailedSection);
  });

new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (locationObject) => {
        resolve([
          locationObject.coords.latitude,
          locationObject.coords.longitude,
        ]);
      },
      (err) => {
        reject(["düsseldorf", "DE"]);
        throw err;
      }
    );
  } else {
    reject(["düsseldorf", "DE"]);
  }
})
  .then((location) =>
    writeWeatherintoObjects(
      getCurrentWeather(location),
      getFiveDayForecast(location)
    )
  )
  .catch((fallbackLocation) =>
    writeWeatherintoObjects(
      getCurrentWeather(fallbackLocation[0], fallbackLocation[1]),
      getFiveDayForecast(fallbackLocation[0], fallbackLocation[1])
    )
  )
  .then((weatherObjects) => {
    // eslint-disable-next-line prefer-destructuring
    [currentWeather, daysForecast] = weatherObjects;
  })
  .catch((err) => {
    throw err;
  })
  .then(() => pageLoad(currentWeather, daysForecast))
  .then(() => {
    const search = document.querySelector(".search");
    const suggestions = document.querySelector(".suggestions");
    const suggestionElements = suggestions.children;

    search.addEventListener("input", (event) => {
      if (search.value.length >= 1) {
        suggestions.classList.remove("hide");
      } else {
        suggestions.classList.add("hide");
      }
      getAndFillSuggestions(event).then((citiesArray) => {
        suggestedCities = citiesArray;
        addEventListenersToElements(
          suggestionElements,
          wrapClickedSuggestionLoad
        );
      });
    });
    const hourElements = document.querySelector(".hourSection").children;
    const dayElements = document.querySelector(".daySection").children;
    addEventListenersToElements(hourElements, wrapUpdateSelectedWeather);
    addEventListenersToElements(dayElements, wrapUpdateDetailedSection);
  });
