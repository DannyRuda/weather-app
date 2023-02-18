/* eslint-disable prefer-promise-reject-errors */
import { writeWeatherintoObjects } from "./helperFunctions";

import { setCurrentWeather, setDaysForecast } from "./globalVar";

import { getCurrentWeather, getFiveDayForecast } from "./weatherAPI";

import { updateSearchbarVariables, addListenersToSearchbar } from "./searchbar";

import { pageLoad, addListenersToHourAndDataElements } from "./domCreation";

import "./reset.css";
import "./style.css";
import "./toggleSwitch.css";

import { toggleUnitsOnPage } from "./toggleUnits";

import {
  addDraggingEventListeners,
  addScrollingEventListener,
  addListenersToArrows,
} from "./horizontalScroll";

import { bigLoadIcon, fadeIn, fadeOut, fadeWeatherIn, fadeWeatherOut, setVideoEventListeners } from "./transitions";

writeWeatherintoObjects(
  getCurrentWeather("sidney", "AU"),
  getFiveDayForecast("sidney", "AU")
)
  .then((weatherObjects) => {
    setCurrentWeather(weatherObjects[0]);
    setDaysForecast(weatherObjects[1]);
  })
  .then(() => pageLoad())
  .then(() => {
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
    setCurrentWeather(weatherObjects[0]);
    setDaysForecast(weatherObjects[1]);
  })
  .catch((err) => {
    throw err;
  })
  .then(() => {
    bigLoadIcon();
    fadeWeatherOut();
    return fadeOut();
  })
  .then(() => pageLoad())
  .then(() => {
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
  });
