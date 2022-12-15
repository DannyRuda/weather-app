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

import {
  setCurrentWeatherObject,
  setDaysForecast,
  setSuggestedCities,
  getCurrentWeatherObject,
  getDaysForecast,
  getSuggestedCities,
} from "./globalVar";

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

const wrapUpdateSelectedWeather = function (event) {
  updateSelectedWeather(event, getDaysForecast());
};

const wrapUpdateDetailedSection = function (event) {
  updateDetailedSection(event, getDaysForecast());
};

const wrapClickedSuggestionLoad = function (event) {
  const clickedSuggestion = event.target;
  const city = getSuggestedCities()[clickedSuggestion.dataset.index];
  const coords = city.latAndLon;
  writeWeatherintoObjects(getCurrentWeather(coords), getFiveDayForecast(coords))
    .then((weatherObjects) => {
      setCurrentWeatherObject(weatherObjects[0]);
      setDaysForecast(weatherObjects[1]);
    })
    .then(() => pageLoad(getCurrentWeatherObject(), getDaysForecast()))
    .then(() => {
      const search = document.querySelector(".search");
      const suggestions = document.querySelector(".suggestions");
      const suggestionElements = suggestions.children;
      const searchIcon = document.querySelector(".searchIcon");
      // eslint-disable-next-line no-use-before-define
      searchIcon.addEventListener("click", wrapEnteredValueLoad);
      search.addEventListener("input", (e) => {
        if (e.key === "Enter" && search.value.length > 0) {
          wrapEnteredValueLoad();
        } else if (search.value.length >= 1) {
          suggestions.classList.remove("hide");
        } else {
          suggestions.classList.add("hide");
        }
        getAndFillSuggestions(e).then((citiesArray) => {
          setSuggestedCities(citiesArray);
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

const wrapEnteredValueLoad = function () {
  const cityAndCountry = document.querySelector(".search").value.split(", ");
  writeWeatherintoObjects(
    getCurrentWeather(cityAndCountry[0], cityAndCountry[1]),
    getFiveDayForecast(cityAndCountry[0], cityAndCountry[1])
  )
    .then((weatherObjects) => {
      setCurrentWeatherObject(weatherObjects[0]);
      setDaysForecast(weatherObjects[1]);
    })
    .then(() => pageLoad(getCurrentWeatherObject(), getDaysForecast()))
    .then(() => {
      const searchNew = document.querySelector(".search");
      const suggestionsNew = document.querySelector(".suggestions");
      const suggestionElementsNew = suggestionsNew.children;
      const searchIcon = document.querySelector(".searchIcon");
      searchIcon.addEventListener("click", wrapEnteredValueLoad);
      searchNew.addEventListener("keyup", (e) => {
        if (e.key === "Enter" && searchNew.value.length > 0) {
          wrapEnteredValueLoad();
        } else if (searchNew.value.length >= 1) {
          suggestionsNew.classList.remove("hide");
        } else {
          suggestionsNew.classList.add("hide");
        }
        getAndFillSuggestions(e).then((citiesArray) => {
          setSuggestedCities(citiesArray);
          addEventListenersToElements(
            suggestionElementsNew,
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
    setCurrentWeatherObject(weatherObjects[0]);
    setDaysForecast(weatherObjects[1]);
  })
  .then(() => pageLoad(getCurrentWeatherObject(), getDaysForecast()))
  .then(() => {
    const search = document.querySelector(".search");
    const suggestions = document.querySelector(".suggestions");
    const suggestionElements = suggestions.children;
    const searchIcon = document.querySelector(".searchIcon");
    searchIcon.addEventListener("click", wrapEnteredValueLoad);
    search.addEventListener("keyup", (event) => {
      if (event.key === "Enter" && search.value.length > 0) {
        wrapEnteredValueLoad();
      } else if (search.value.length >= 1) {
        suggestions.classList.remove("hide");
      } else {
        suggestions.classList.add("hide");
      }
      getAndFillSuggestions(event).then((citiesArray) => {
        setSuggestedCities(citiesArray);
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
    setCurrentWeatherObject(weatherObjects[0]);
    setDaysForecast(weatherObjects[1]);
  })
  .catch((err) => {
    throw err;
  })
  .then(() => pageLoad(getCurrentWeatherObject(), getDaysForecast()))
  .then(() => {
    const search = document.querySelector(".search");
    const suggestions = document.querySelector(".suggestions");
    const suggestionElements = suggestions.children;
    const searchIcon = document.querySelector(".searchIcon");
    searchIcon.addEventListener("click", wrapEnteredValueLoad);
    search.addEventListener("keyup", (event) => {
      if (event.key === "Enter" && search.value.length > 0) {
        wrapEnteredValueLoad();
      } else if (search.value.length >= 1) {
        suggestions.classList.remove("hide");
      } else {
        suggestions.classList.add("hide");
      }
      getAndFillSuggestions(event).then((citiesArray) => {
        setSuggestedCities(citiesArray);
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
