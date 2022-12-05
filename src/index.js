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
    document.body.innerHTML = `<video class ="video" autoplay muted loop id="myVideo">
    <source src="${currentWeather.getBackgroundLink()}" type="video/mp4">
    </video><div class="overlay"><div class="currentW"><img class="icon" src="${currentWeather.getIconLink()}"></div></div>
    `;
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
    document.body.innerHTML = `<video class ="video" autoplay muted loop id="myVideo">
<source src="${currentWeather.getBackgroundLink()}" type="video/mp4">
</video><div class="overlay"><div class="currentW"><img class="icon" src="${currentWeather.getIconLink()}"></div></div>
`;
    console.log(document.querySelector("source").src);
    if (
      document.querySelector("source").src ===
      currentWeather.getBackgroundLink()
    ) {
      console.log(currentWeather.getBackgroundLink());
    }
  });
