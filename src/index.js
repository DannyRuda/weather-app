/* eslint-disable prefer-promise-reject-errors */
import {
  writeWeatherintoObjects,
  kelvinToFahrenheit,
  kelvinToCelsius,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} from "./helperFunctions";

import { getCurrentWeather, getFiveDayForecast } from "./weatherAPI";

import { testPageLoadData } from "./testing";

import { pageLoad } from "./domCreation";

import "./reset.css";
import "./style.css";

let city = "";
let cityCoords = [];
let country = "";
let currentWeather = {};
let daysForecast = {};

writeWeatherintoObjects(
  getCurrentWeather("sidney", "AU"),
  getFiveDayForecast("sidney", "AU")
)
  .then((weatherObjects) => {
    [currentWeather, daysForecast] = weatherObjects;
  })
  .then(() => {
    pageLoad(currentWeather,daysForecast);
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
    testPageLoadData(
      currentWeather,
      daysForecast,
      kelvinToCelsius,
      kelvinToFahrenheit
    );
  })
  .catch((err) => {
    throw err;
  })
  .then(() => {
    pageLoad(currentWeather,daysForecast);
  });
