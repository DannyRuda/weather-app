/* eslint-disable prefer-promise-reject-errors */
import { writeWeatherintoObjects } from "./helperFunctions";

import { getCurrentWeather, getFiveDayForecast } from "./weatherAPI";
import "./style.css"
import Clear from "./media/clear.mp4";
import Clouds from "./media/cloudy.mp4";
import Rain from "./media/rain.mp4";
import Drizzle from "./media/drizzle.mp4";
import Snow from "./media/snow.mp4"

const testvar = `${Clear}`;
document.body.innerHTML = `<video class ="video" autoplay muted loop id="myVideo">
<source src="${testvar}" type="video/mp4">
</video><div class="overlay"><div class="currentW"></div></div>
`;



let city = "";
let cityCoords = [];
let country = "";
let currentWeather = {};
let daysForecast = {};

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
    console.log(weatherObjects);
    // tests object creation and object methods
    weatherObjects[0]
      .getCityNameAndCountryCode()
      .then((cityandcountry) => console.log(cityandcountry));
    console.log(weatherObjects[0].getMonthAndDayDate("DE"));
    console.log(weatherObjects[0].getCurrentTime());
    console.log(weatherObjects[0].getWeekDay());
    console.log(weatherObjects[1][0].getMonthAndDayDate("DE"));
    console.log(weatherObjects[1][0].getMinTemp());
    console.log(weatherObjects[1][0].getMaxTemp());
    console.log(weatherObjects[1][0].getDominatingWeathericon());
    console.log(weatherObjects[1][0].getWeekDay());
    console.log(weatherObjects[1][0].date);
    // eslint-disable-next-line prefer-destructuring
    [currentWeather, daysForecast] = weatherObjects;
  })
  .catch((err) => {
    throw err;
  });

/*
function testGeocoding(cityName) {
  return new Promise((resolve, reject) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q={${cityName}}&appid=d145974fac8fb803900422c2cc1d620e`
    )
      .then((response) => {
        if (response.status === 200) {
          console.log("status was 200");
          return response.json();
        }
      })
      .then((value) => {
        resolve([value[0].lat, value[0].lon]);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
*/
/*
getCityCoordinates("London", "US")
  .then((value) => getCurrentWeather(value[0], value[1]))
  .then((value) => fillWeatherobjectWithData(value))
  .then((value) => {
    console.log(value);
  });

getCityCoordinates("Duisburg")
  .then((value) => getCurrentWeather(value[0], value[1]))
  .then((value) => {
    const timetestutc = new Date(value.dt * 1000);
    console.log(timetestutc);
  });
const timetest = new Date();

console.log(timetest);
console.log(timetest.getTimezoneOffset());

getCityCoordinates("new york city")
  .then((coordinates) => getFiveDayForecast(coordinates[0], coordinates[1]))
  .then((forecast) => {
    console.log(forecast);
    for (let i = 0; i < forecast.list.length; i += 1) {
      const testTime = new Date(forecast.list[i].dt * 1000);
      console.log(testTime);
    }
  });

const stringtest = "one";

window[stringtest] = "two";
console.log(one);

function countalla(numberone) {
  function useNumberOne() {
    return numberone * numberone;
  }

  return { useNumberOne };
}

const testobject = countalla(3);
console.log(testobject.useNumberOne());

const testArray = [];
for (let i = 0; i < 3; i += 1) {
  testArray[i] = i;
}

console.log(testArray);

function createTestObject(temperature, keytwo, keythree) {
  return { temperature, keytwo, keythree };
}

const testobjecttwo = createTestObject(1, 2, 3);
console.log("testobject: ", testobjecttwo);
*/
