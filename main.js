/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kelvinToCelsius": () => (/* binding */ kelvinToCelsius),
/* harmony export */   "kelvinToFahrenheit": () => (/* binding */ kelvinToFahrenheit),
/* harmony export */   "numberToWord": () => (/* binding */ numberToWord),
/* harmony export */   "splitIntoDays": () => (/* binding */ splitIntoDays),
/* harmony export */   "writeWeatherintoObjects": () => (/* binding */ writeWeatherintoObjects)
/* harmony export */ });
/* harmony import */ var _weatherObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherObjects */ "./src/weatherObjects.js");


function numberToWord(number) {
  const numbers = ["one", "two", "three", "four", "five", "six"];
  return numbers[number];
}

function splitIntoDays(forecastData) {
  const hourlyDataObjects = [];
  const dayDataArrays = [];
  forecastData.list.forEach((item) => {
    hourlyDataObjects.push((0,_weatherObjects__WEBPACK_IMPORTED_MODULE_0__.createHourObject)(item));
  });
  if (hourlyDataObjects[0].date.getHours() > 2) {
    for (let j = 0; j < 6; j += 1) {
      const startingDayDate = hourlyDataObjects[0].date.getDate();
      const dayData = hourlyDataObjects.filter(
        (hourData) => hourData.date.getDate() === startingDayDate
      );
      hourlyDataObjects.splice(0, dayData.length);
      dayDataArrays.push(dayData);
    }
  } else {
    for (let j = 0; j < 5; j += 1) {
      const startingDayDate = hourlyDataObjects[0].date.getDate();
      const dayData = hourlyDataObjects.filter(
        (hourData) => hourData.date.getDate() === startingDayDate
      );
      hourlyDataObjects.splice(0, dayData.length);
      dayDataArrays.push(dayData);
    }
  }
  return dayDataArrays;
}

async function writeWeatherintoObjects(currentWeatherPromise, forecastPromise) {
  return new Promise((resolve, reject) => {
    Promise.all([currentWeatherPromise, forecastPromise]).then((values) => {
      const dayWeatherObjects = [];
      const currentData = values[0];
      const forecast = values[1];
      const weatherDataDays = splitIntoDays(values[1]);
      const currentWeather = (0,_weatherObjects__WEBPACK_IMPORTED_MODULE_0__.createCurrentWeather)(
        new Date(currentData.dt * 1000),
        currentData.coord.lon,
        currentData.coord.lat,
        currentData.main.temp,
        forecast.list[0].pop,
        currentData.main.humidity,
        currentData.wind.speed,
        currentData.weather[0].main
      );
      for (let i = 0; i < weatherDataDays.length; i += 1) {
        const dayData = weatherDataDays[i];
        dayWeatherObjects[i] = (0,_weatherObjects__WEBPACK_IMPORTED_MODULE_0__.createDayObject)(dayData);
      }
      resolve([currentWeather, dayWeatherObjects]);
    });
  });
}

function kelvinToFahrenheit(temp) {
  return (temp - 273.15) * 1.8 + 32.0;
}

function kelvinToCelsius(temp) {
  return temp - 273.15;
}



/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCityCoordinates": () => (/* binding */ getCityCoordinates),
/* harmony export */   "getCurrentWeather": () => (/* binding */ getCurrentWeather),
/* harmony export */   "getFiveDayForecast": () => (/* binding */ getFiveDayForecast)
/* harmony export */ });
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
function getCityCoordinates(cityName, country) {
  return new Promise((resolve, reject) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q={${cityName}},{${country}}&appid=d145974fac8fb803900422c2cc1d620e`
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

function getCurrentWeather(city, country) {
  if (arguments.length === 2) {
    return new Promise((resolve, reject) => {
      getCityCoordinates(city, country).then((coordinates) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=d145974fac8fb803900422c2cc1d620e`
        )
          .then((response) => response.json())
          .then((value) => Promise.resolve(value))
          .then((value) => {
            resolve(value);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  } else if (arguments.length === 1) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city[0]}&lon=${city[1]}&appid=d145974fac8fb803900422c2cc1d620e`
      )
        .then((response) => response.json())
        .then((value) => Promise.resolve(value))
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

function getFiveDayForecast(city, country) {
  if (arguments.length === 2) {
    return new Promise((resolve, reject) => {
      getCityCoordinates(city, country).then((coordinates) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=d145974fac8fb803900422c2cc1d620e`
        )
          .then((response) => response.json())
          .then((value) => Promise.resolve(value))
          .then((value) => {
            resolve(value);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  } else if (arguments.length === 1) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city[0]}&lon=${city[1]}&appid=d145974fac8fb803900422c2cc1d620e`
      )
        .then((response) => response.json())
        .then((value) => Promise.resolve(value))
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}




/***/ }),

/***/ "./src/weatherObjects.js":
/*!*******************************!*\
  !*** ./src/weatherObjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCurrentWeather": () => (/* binding */ createCurrentWeather),
/* harmony export */   "createDayObject": () => (/* binding */ createDayObject),
/* harmony export */   "createHourObject": () => (/* binding */ createHourObject)
/* harmony export */ });
function createCurrentWeather(
  date,
  lon,
  lat,
  temperature,
  precipitation,
  humidity,
  windspeed,
  weathercon
) {
  function getMonthAndDayDate(languageTag) {
    return date.toLocaleDateString(`${languageTag}`, {
      month: "long",
      day: "2-digit",
    });
  }

  async function getCityNameAndCountryCode() {
    return new Promise((resolve, reject) => {
      fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=d145974fac8fb803900422c2cc1d620e`
      )
        .then((response) => response.json())
        .then(
          (value) => {
            resolve(`${value[0].name}, ${value[0].country}`);
          },
          (err) => {
            reject(new Error(err));
          }
        );
    });
  }

  // if minute is one digit, a 0 gets added to the minute to show a 2 digit minute count
  function getCurrentTime() {
    return `${date.getHours()}:${
      date.getMinutes().toString().length < 2
        ? `${date.getMinutes()}0`
        : date.getMinutes()
    }`;
  }

  function getWeekDay() {
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return week[date.getDay()];
  }

  function getIconName() {}

  return {
    date,
    temperature,
    precipitation,
    humidity,
    windspeed,
    getCityNameAndCountryCode,
    getMonthAndDayDate,
    getCurrentTime,
    getWeekDay,
    getIconName,
  };
}

function createHourObject(hourData) {
  const date = new Date(hourData.dt * 1000);
  const time = `${date.getHours()}:${date.getMinutes()}0`;
  const temperature = hourData.main.temp;
  const precipitation = hourData.pop;
  const { humidity } = hourData.main;
  const windspeed = hourData.wind.speed;
  const weathercon = hourData.weather[0].main;
  return {
    date,
    time,
    temperature,
    precipitation,
    humidity,
    windspeed,
    weathercon,
  };
}

function createDayObject(data) {
  const { date } = data[0];

  function getMonthAndDayDate(languageTag) {
    return date.toLocaleDateString(`${languageTag}`, {
      month: "long",
      day: "2-digit",
    });
  }

  function getMinTemp() {
    return data.reduce(
      (accum, current) =>
        accum.temperature < current.temperature
          ? accum.temperature
          : current.temperature,
      data[0]
    );
  }

  function getMaxTemp() {
    return data.reduce(
      (accum, current) =>
        accum.temperature > current.temperature
          ? accum.temperature
          : current.temperature,
      data[0]
    );
  }

  function getDominatingWeathericon() {
    const thunder = data.filter((element) => element.weathercon === "Thunder");
    const drizzle = data.filter((element) => element.weathercon === "Drizzle");
    const rain = data.filter((element) => element.weathercon === "Rain");
    const snow = data.filter((element) => element.weathercon === "Snow");
    const clear = data.filter((element) => element.weathercon === "Clear");
    const clouds = data.filter((element) => element.weathercon === "Clouds");
    const sortedWeather = [thunder, drizzle, rain, snow, clear, clouds].sort(
      (a, b) => b.length - a.length
    );
    return sortedWeather[0][0].weathercon;
  }

  function getWeekDay() {
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return week[date.getDay()];
  }

  return {
    date,
    data,
    getMonthAndDayDate,
    getMinTemp,
    getMaxTemp,
    getDominatingWeathericon,
    getWeekDay,
  };
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherAPI */ "./src/weatherAPI.js");
/* eslint-disable prefer-promise-reject-errors */




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
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.writeWeatherintoObjects)(
      (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)(location),
      (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getFiveDayForecast)(location)
    )
  )
  .catch((fallbackLocation) =>
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.writeWeatherintoObjects)(
      (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)(fallbackLocation[0], fallbackLocation[1]),
      (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getFiveDayForecast)(fallbackLocation[0], fallbackLocation[1])
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
  .catch((err)=>{throw err})

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUkseUVBQXVCO0FBQzNCLE1BQU0sOERBQWlCO0FBQ3ZCLE1BQU0sK0RBQWtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsRUFBRSxVQUFVO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgY3JlYXRlSG91ck9iamVjdCxcclxuICBjcmVhdGVDdXJyZW50V2VhdGhlcixcclxuICBjcmVhdGVEYXlPYmplY3QsXHJcbn0gZnJvbSBcIi4vd2VhdGhlck9iamVjdHNcIjtcclxuXHJcbmZ1bmN0aW9uIG51bWJlclRvV29yZChudW1iZXIpIHtcclxuICBjb25zdCBudW1iZXJzID0gW1wib25lXCIsIFwidHdvXCIsIFwidGhyZWVcIiwgXCJmb3VyXCIsIFwiZml2ZVwiLCBcInNpeFwiXTtcclxuICByZXR1cm4gbnVtYmVyc1tudW1iZXJdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzcGxpdEludG9EYXlzKGZvcmVjYXN0RGF0YSkge1xyXG4gIGNvbnN0IGhvdXJseURhdGFPYmplY3RzID0gW107XHJcbiAgY29uc3QgZGF5RGF0YUFycmF5cyA9IFtdO1xyXG4gIGZvcmVjYXN0RGF0YS5saXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGhvdXJseURhdGFPYmplY3RzLnB1c2goY3JlYXRlSG91ck9iamVjdChpdGVtKSk7XHJcbiAgfSk7XHJcbiAgaWYgKGhvdXJseURhdGFPYmplY3RzWzBdLmRhdGUuZ2V0SG91cnMoKSA+IDIpIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgNjsgaiArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0aW5nRGF5RGF0ZSA9IGhvdXJseURhdGFPYmplY3RzWzBdLmRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICBjb25zdCBkYXlEYXRhID0gaG91cmx5RGF0YU9iamVjdHMuZmlsdGVyKFxyXG4gICAgICAgIChob3VyRGF0YSkgPT4gaG91ckRhdGEuZGF0ZS5nZXREYXRlKCkgPT09IHN0YXJ0aW5nRGF5RGF0ZVxyXG4gICAgICApO1xyXG4gICAgICBob3VybHlEYXRhT2JqZWN0cy5zcGxpY2UoMCwgZGF5RGF0YS5sZW5ndGgpO1xyXG4gICAgICBkYXlEYXRhQXJyYXlzLnB1c2goZGF5RGF0YSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaiArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0aW5nRGF5RGF0ZSA9IGhvdXJseURhdGFPYmplY3RzWzBdLmRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICBjb25zdCBkYXlEYXRhID0gaG91cmx5RGF0YU9iamVjdHMuZmlsdGVyKFxyXG4gICAgICAgIChob3VyRGF0YSkgPT4gaG91ckRhdGEuZGF0ZS5nZXREYXRlKCkgPT09IHN0YXJ0aW5nRGF5RGF0ZVxyXG4gICAgICApO1xyXG4gICAgICBob3VybHlEYXRhT2JqZWN0cy5zcGxpY2UoMCwgZGF5RGF0YS5sZW5ndGgpO1xyXG4gICAgICBkYXlEYXRhQXJyYXlzLnB1c2goZGF5RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBkYXlEYXRhQXJyYXlzO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB3cml0ZVdlYXRoZXJpbnRvT2JqZWN0cyhjdXJyZW50V2VhdGhlclByb21pc2UsIGZvcmVjYXN0UHJvbWlzZSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBQcm9taXNlLmFsbChbY3VycmVudFdlYXRoZXJQcm9taXNlLCBmb3JlY2FzdFByb21pc2VdKS50aGVuKCh2YWx1ZXMpID0+IHtcclxuICAgICAgY29uc3QgZGF5V2VhdGhlck9iamVjdHMgPSBbXTtcclxuICAgICAgY29uc3QgY3VycmVudERhdGEgPSB2YWx1ZXNbMF07XHJcbiAgICAgIGNvbnN0IGZvcmVjYXN0ID0gdmFsdWVzWzFdO1xyXG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YURheXMgPSBzcGxpdEludG9EYXlzKHZhbHVlc1sxXSk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gY3JlYXRlQ3VycmVudFdlYXRoZXIoXHJcbiAgICAgICAgbmV3IERhdGUoY3VycmVudERhdGEuZHQgKiAxMDAwKSxcclxuICAgICAgICBjdXJyZW50RGF0YS5jb29yZC5sb24sXHJcbiAgICAgICAgY3VycmVudERhdGEuY29vcmQubGF0LFxyXG4gICAgICAgIGN1cnJlbnREYXRhLm1haW4udGVtcCxcclxuICAgICAgICBmb3JlY2FzdC5saXN0WzBdLnBvcCxcclxuICAgICAgICBjdXJyZW50RGF0YS5tYWluLmh1bWlkaXR5LFxyXG4gICAgICAgIGN1cnJlbnREYXRhLndpbmQuc3BlZWQsXHJcbiAgICAgICAgY3VycmVudERhdGEud2VhdGhlclswXS5tYWluXHJcbiAgICAgICk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VhdGhlckRhdGFEYXlzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgZGF5RGF0YSA9IHdlYXRoZXJEYXRhRGF5c1tpXTtcclxuICAgICAgICBkYXlXZWF0aGVyT2JqZWN0c1tpXSA9IGNyZWF0ZURheU9iamVjdChkYXlEYXRhKTtcclxuICAgICAgfVxyXG4gICAgICByZXNvbHZlKFtjdXJyZW50V2VhdGhlciwgZGF5V2VhdGhlck9iamVjdHNdKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBrZWx2aW5Ub0ZhaHJlbmhlaXQodGVtcCkge1xyXG4gIHJldHVybiAodGVtcCAtIDI3My4xNSkgKiAxLjggKyAzMi4wO1xyXG59XHJcblxyXG5mdW5jdGlvbiBrZWx2aW5Ub0NlbHNpdXModGVtcCkge1xyXG4gIHJldHVybiB0ZW1wIC0gMjczLjE1O1xyXG59XHJcbmV4cG9ydCB7XHJcbiAgbnVtYmVyVG9Xb3JkLFxyXG4gIHNwbGl0SW50b0RheXMsXHJcbiAgd3JpdGVXZWF0aGVyaW50b09iamVjdHMsXHJcbiAga2VsdmluVG9GYWhyZW5oZWl0LFxyXG4gIGtlbHZpblRvQ2Vsc2l1cyxcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cclxuZnVuY3Rpb24gZ2V0Q2l0eUNvb3JkaW5hdGVzKGNpdHlOYW1lLCBjb3VudHJ5KSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGZldGNoKFxyXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT17JHtjaXR5TmFtZX19LHske2NvdW50cnl9fSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWBcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXR1cyB3YXMgMjAwXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoW3ZhbHVlWzBdLmxhdCwgdmFsdWVbMF0ubG9uXSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihjaXR5LCBjb3VudHJ5KSB7XHJcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGdldENpdHlDb29yZGluYXRlcyhjaXR5LCBjb3VudHJ5KS50aGVuKChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgICAgIGZldGNoKFxyXG4gICAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2Nvb3JkaW5hdGVzWzBdfSZsb249JHtjb29yZGluYXRlc1sxXX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigodmFsdWUpID0+IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkpXHJcbiAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtjaXR5WzBdfSZsb249JHtjaXR5WzFdfSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWBcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSlcclxuICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGaXZlRGF5Rm9yZWNhc3QoY2l0eSwgY291bnRyeSkge1xyXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBnZXRDaXR5Q29vcmRpbmF0ZXMoY2l0eSwgY291bnRyeSkudGhlbigoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgICAgICBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7Y29vcmRpbmF0ZXNbMF19Jmxvbj0ke2Nvb3JkaW5hdGVzWzFdfSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWBcclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSlcclxuICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtjaXR5WzBdfSZsb249JHtjaXR5WzFdfSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWBcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSlcclxuICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBnZXRDaXR5Q29vcmRpbmF0ZXMsIGdldEN1cnJlbnRXZWF0aGVyLCBnZXRGaXZlRGF5Rm9yZWNhc3QgfTtcclxuIiwiZnVuY3Rpb24gY3JlYXRlQ3VycmVudFdlYXRoZXIoXHJcbiAgZGF0ZSxcclxuICBsb24sXHJcbiAgbGF0LFxyXG4gIHRlbXBlcmF0dXJlLFxyXG4gIHByZWNpcGl0YXRpb24sXHJcbiAgaHVtaWRpdHksXHJcbiAgd2luZHNwZWVkLFxyXG4gIHdlYXRoZXJjb25cclxuKSB7XHJcbiAgZnVuY3Rpb24gZ2V0TW9udGhBbmREYXlEYXRlKGxhbmd1YWdlVGFnKSB7XHJcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoYCR7bGFuZ3VhZ2VUYWd9YCwge1xyXG4gICAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldENpdHlOYW1lQW5kQ291bnRyeUNvZGUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaChcclxuICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9yZXZlcnNlP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWBcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoYCR7dmFsdWVbMF0ubmFtZX0sICR7dmFsdWVbMF0uY291bnRyeX1gKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgbWludXRlIGlzIG9uZSBkaWdpdCwgYSAwIGdldHMgYWRkZWQgdG8gdGhlIG1pbnV0ZSB0byBzaG93IGEgMiBkaWdpdCBtaW51dGUgY291bnRcclxuICBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcclxuICAgIHJldHVybiBgJHtkYXRlLmdldEhvdXJzKCl9OiR7XHJcbiAgICAgIGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkubGVuZ3RoIDwgMlxyXG4gICAgICAgID8gYCR7ZGF0ZS5nZXRNaW51dGVzKCl9MGBcclxuICAgICAgICA6IGRhdGUuZ2V0TWludXRlcygpXHJcbiAgICB9YDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFdlZWtEYXkoKSB7XHJcbiAgICBjb25zdCB3ZWVrID0gW1xyXG4gICAgICBcIlN1bmRheVwiLFxyXG4gICAgICBcIk1vbmRheVwiLFxyXG4gICAgICBcIlR1ZXNkYXlcIixcclxuICAgICAgXCJXZWRuZXNkYXlcIixcclxuICAgICAgXCJUaHVyc2RheVwiLFxyXG4gICAgICBcIkZyaWRheVwiLFxyXG4gICAgICBcIlNhdHVyZGF5XCIsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIHdlZWtbZGF0ZS5nZXREYXkoKV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRJY29uTmFtZSgpIHt9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkYXRlLFxyXG4gICAgdGVtcGVyYXR1cmUsXHJcbiAgICBwcmVjaXBpdGF0aW9uLFxyXG4gICAgaHVtaWRpdHksXHJcbiAgICB3aW5kc3BlZWQsXHJcbiAgICBnZXRDaXR5TmFtZUFuZENvdW50cnlDb2RlLFxyXG4gICAgZ2V0TW9udGhBbmREYXlEYXRlLFxyXG4gICAgZ2V0Q3VycmVudFRpbWUsXHJcbiAgICBnZXRXZWVrRGF5LFxyXG4gICAgZ2V0SWNvbk5hbWUsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG91ck9iamVjdChob3VyRGF0YSkge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShob3VyRGF0YS5kdCAqIDEwMDApO1xyXG4gIGNvbnN0IHRpbWUgPSBgJHtkYXRlLmdldEhvdXJzKCl9OiR7ZGF0ZS5nZXRNaW51dGVzKCl9MGA7XHJcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBob3VyRGF0YS5tYWluLnRlbXA7XHJcbiAgY29uc3QgcHJlY2lwaXRhdGlvbiA9IGhvdXJEYXRhLnBvcDtcclxuICBjb25zdCB7IGh1bWlkaXR5IH0gPSBob3VyRGF0YS5tYWluO1xyXG4gIGNvbnN0IHdpbmRzcGVlZCA9IGhvdXJEYXRhLndpbmQuc3BlZWQ7XHJcbiAgY29uc3Qgd2VhdGhlcmNvbiA9IGhvdXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0ZSxcclxuICAgIHRpbWUsXHJcbiAgICB0ZW1wZXJhdHVyZSxcclxuICAgIHByZWNpcGl0YXRpb24sXHJcbiAgICBodW1pZGl0eSxcclxuICAgIHdpbmRzcGVlZCxcclxuICAgIHdlYXRoZXJjb24sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGF5T2JqZWN0KGRhdGEpIHtcclxuICBjb25zdCB7IGRhdGUgfSA9IGRhdGFbMF07XHJcblxyXG4gIGZ1bmN0aW9uIGdldE1vbnRoQW5kRGF5RGF0ZShsYW5ndWFnZVRhZykge1xyXG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKGAke2xhbmd1YWdlVGFnfWAsIHtcclxuICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICBkYXk6IFwiMi1kaWdpdFwiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRNaW5UZW1wKCkge1xyXG4gICAgcmV0dXJuIGRhdGEucmVkdWNlKFxyXG4gICAgICAoYWNjdW0sIGN1cnJlbnQpID0+XHJcbiAgICAgICAgYWNjdW0udGVtcGVyYXR1cmUgPCBjdXJyZW50LnRlbXBlcmF0dXJlXHJcbiAgICAgICAgICA/IGFjY3VtLnRlbXBlcmF0dXJlXHJcbiAgICAgICAgICA6IGN1cnJlbnQudGVtcGVyYXR1cmUsXHJcbiAgICAgIGRhdGFbMF1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRNYXhUZW1wKCkge1xyXG4gICAgcmV0dXJuIGRhdGEucmVkdWNlKFxyXG4gICAgICAoYWNjdW0sIGN1cnJlbnQpID0+XHJcbiAgICAgICAgYWNjdW0udGVtcGVyYXR1cmUgPiBjdXJyZW50LnRlbXBlcmF0dXJlXHJcbiAgICAgICAgICA/IGFjY3VtLnRlbXBlcmF0dXJlXHJcbiAgICAgICAgICA6IGN1cnJlbnQudGVtcGVyYXR1cmUsXHJcbiAgICAgIGRhdGFbMF1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXREb21pbmF0aW5nV2VhdGhlcmljb24oKSB7XHJcbiAgICBjb25zdCB0aHVuZGVyID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJUaHVuZGVyXCIpO1xyXG4gICAgY29uc3QgZHJpenpsZSA9IGRhdGEuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LndlYXRoZXJjb24gPT09IFwiRHJpenpsZVwiKTtcclxuICAgIGNvbnN0IHJhaW4gPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIlJhaW5cIik7XHJcbiAgICBjb25zdCBzbm93ID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJTbm93XCIpO1xyXG4gICAgY29uc3QgY2xlYXIgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIkNsZWFyXCIpO1xyXG4gICAgY29uc3QgY2xvdWRzID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJDbG91ZHNcIik7XHJcbiAgICBjb25zdCBzb3J0ZWRXZWF0aGVyID0gW3RodW5kZXIsIGRyaXp6bGUsIHJhaW4sIHNub3csIGNsZWFyLCBjbG91ZHNdLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHNvcnRlZFdlYXRoZXJbMF1bMF0ud2VhdGhlcmNvbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFdlZWtEYXkoKSB7XHJcbiAgICBjb25zdCB3ZWVrID0gW1xyXG4gICAgICBcIlN1bmRheVwiLFxyXG4gICAgICBcIk1vbmRheVwiLFxyXG4gICAgICBcIlR1ZXNkYXlcIixcclxuICAgICAgXCJXZWRuZXNkYXlcIixcclxuICAgICAgXCJUaHVyc2RheVwiLFxyXG4gICAgICBcIkZyaWRheVwiLFxyXG4gICAgICBcIlNhdHVyZGF5XCIsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIHdlZWtbZGF0ZS5nZXREYXkoKV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF0ZSxcclxuICAgIGRhdGEsXHJcbiAgICBnZXRNb250aEFuZERheURhdGUsXHJcbiAgICBnZXRNaW5UZW1wLFxyXG4gICAgZ2V0TWF4VGVtcCxcclxuICAgIGdldERvbWluYXRpbmdXZWF0aGVyaWNvbixcclxuICAgIGdldFdlZWtEYXksXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ3VycmVudFdlYXRoZXIsIGNyZWF0ZUhvdXJPYmplY3QsIGNyZWF0ZURheU9iamVjdCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnMgKi9cclxuaW1wb3J0IHsgd3JpdGVXZWF0aGVyaW50b09iamVjdHMgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IGdldEN1cnJlbnRXZWF0aGVyLCBnZXRGaXZlRGF5Rm9yZWNhc3QgfSBmcm9tIFwiLi93ZWF0aGVyQVBJXCI7XHJcblxyXG5sZXQgY2l0eSA9IFwiXCI7XHJcbmxldCBjaXR5Q29vcmRzID0gW107XHJcbmxldCBjb3VudHJ5ID0gXCJcIjtcclxubGV0IGN1cnJlbnRXZWF0aGVyID0ge307XHJcbmxldCBkYXlzRm9yZWNhc3QgPSB7fTtcclxuXHJcbm5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICAobG9jYXRpb25PYmplY3QpID0+IHtcclxuICAgICAgICByZXNvbHZlKFtcclxuICAgICAgICAgIGxvY2F0aW9uT2JqZWN0LmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgIGxvY2F0aW9uT2JqZWN0LmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnIpID0+IHtcclxuICAgICAgICByZWplY3QoW1wiZMO8c3NlbGRvcmZcIiwgXCJERVwiXSk7XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZWplY3QoW1wiZMO8c3NlbGRvcmZcIiwgXCJERVwiXSk7XHJcbiAgfVxyXG59KVxyXG4gIC50aGVuKChsb2NhdGlvbikgPT5cclxuICAgIHdyaXRlV2VhdGhlcmludG9PYmplY3RzKFxyXG4gICAgICBnZXRDdXJyZW50V2VhdGhlcihsb2NhdGlvbiksXHJcbiAgICAgIGdldEZpdmVEYXlGb3JlY2FzdChsb2NhdGlvbilcclxuICAgIClcclxuICApXHJcbiAgLmNhdGNoKChmYWxsYmFja0xvY2F0aW9uKSA9PlxyXG4gICAgd3JpdGVXZWF0aGVyaW50b09iamVjdHMoXHJcbiAgICAgIGdldEN1cnJlbnRXZWF0aGVyKGZhbGxiYWNrTG9jYXRpb25bMF0sIGZhbGxiYWNrTG9jYXRpb25bMV0pLFxyXG4gICAgICBnZXRGaXZlRGF5Rm9yZWNhc3QoZmFsbGJhY2tMb2NhdGlvblswXSwgZmFsbGJhY2tMb2NhdGlvblsxXSlcclxuICAgIClcclxuICApXHJcbiAgLnRoZW4oKHdlYXRoZXJPYmplY3RzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqZWN0cyk7XHJcbiAgICAvLyB0ZXN0cyBvYmplY3QgY3JlYXRpb24gYW5kIG9iamVjdCBtZXRob2RzXHJcbiAgICB3ZWF0aGVyT2JqZWN0c1swXVxyXG4gICAgICAuZ2V0Q2l0eU5hbWVBbmRDb3VudHJ5Q29kZSgpXHJcbiAgICAgIC50aGVuKChjaXR5YW5kY291bnRyeSkgPT4gY29uc29sZS5sb2coY2l0eWFuZGNvdW50cnkpKTtcclxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3RzWzBdLmdldE1vbnRoQW5kRGF5RGF0ZShcIkRFXCIpKTtcclxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3RzWzBdLmdldEN1cnJlbnRUaW1lKCkpO1xyXG4gICAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdHNbMF0uZ2V0V2Vla0RheSgpKTtcclxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3RzWzFdWzBdLmdldE1vbnRoQW5kRGF5RGF0ZShcIkRFXCIpKTtcclxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3RzWzFdWzBdLmdldE1pblRlbXAoKSk7XHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqZWN0c1sxXVswXS5nZXRNYXhUZW1wKCkpO1xyXG4gICAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdHNbMV1bMF0uZ2V0RG9taW5hdGluZ1dlYXRoZXJpY29uKCkpO1xyXG4gICAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdHNbMV1bMF0uZ2V0V2Vla0RheSgpKTtcclxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3RzWzFdWzBdLmRhdGUpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXHJcbiAgICBbY3VycmVudFdlYXRoZXIsIGRheXNGb3JlY2FzdF0gPSB3ZWF0aGVyT2JqZWN0cztcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyKT0+e3Rocm93IGVycn0pXHJcblxyXG4vKlxyXG5mdW5jdGlvbiB0ZXN0R2VvY29kaW5nKGNpdHlOYW1lKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGZldGNoKFxyXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT17JHtjaXR5TmFtZX19JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdHVzIHdhcyAyMDBcIik7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShbdmFsdWVbMF0ubGF0LCB2YWx1ZVswXS5sb25dKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuKi9cclxuLypcclxuZ2V0Q2l0eUNvb3JkaW5hdGVzKFwiTG9uZG9uXCIsIFwiVVNcIilcclxuICAudGhlbigodmFsdWUpID0+IGdldEN1cnJlbnRXZWF0aGVyKHZhbHVlWzBdLCB2YWx1ZVsxXSkpXHJcbiAgLnRoZW4oKHZhbHVlKSA9PiBmaWxsV2VhdGhlcm9iamVjdFdpdGhEYXRhKHZhbHVlKSlcclxuICAudGhlbigodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICB9KTtcclxuXHJcbmdldENpdHlDb29yZGluYXRlcyhcIkR1aXNidXJnXCIpXHJcbiAgLnRoZW4oKHZhbHVlKSA9PiBnZXRDdXJyZW50V2VhdGhlcih2YWx1ZVswXSwgdmFsdWVbMV0pKVxyXG4gIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdGltZXRlc3R1dGMgPSBuZXcgRGF0ZSh2YWx1ZS5kdCAqIDEwMDApO1xyXG4gICAgY29uc29sZS5sb2codGltZXRlc3R1dGMpO1xyXG4gIH0pO1xyXG5jb25zdCB0aW1ldGVzdCA9IG5ldyBEYXRlKCk7XHJcblxyXG5jb25zb2xlLmxvZyh0aW1ldGVzdCk7XHJcbmNvbnNvbGUubG9nKHRpbWV0ZXN0LmdldFRpbWV6b25lT2Zmc2V0KCkpO1xyXG5cclxuZ2V0Q2l0eUNvb3JkaW5hdGVzKFwibmV3IHlvcmsgY2l0eVwiKVxyXG4gIC50aGVuKChjb29yZGluYXRlcykgPT4gZ2V0Rml2ZURheUZvcmVjYXN0KGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSkpXHJcbiAgLnRoZW4oKGZvcmVjYXN0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0Lmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgdGVzdFRpbWUgPSBuZXcgRGF0ZShmb3JlY2FzdC5saXN0W2ldLmR0ICogMTAwMCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRlc3RUaW1lKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmNvbnN0IHN0cmluZ3Rlc3QgPSBcIm9uZVwiO1xyXG5cclxud2luZG93W3N0cmluZ3Rlc3RdID0gXCJ0d29cIjtcclxuY29uc29sZS5sb2cob25lKTtcclxuXHJcbmZ1bmN0aW9uIGNvdW50YWxsYShudW1iZXJvbmUpIHtcclxuICBmdW5jdGlvbiB1c2VOdW1iZXJPbmUoKSB7XHJcbiAgICByZXR1cm4gbnVtYmVyb25lICogbnVtYmVyb25lO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgdXNlTnVtYmVyT25lIH07XHJcbn1cclxuXHJcbmNvbnN0IHRlc3RvYmplY3QgPSBjb3VudGFsbGEoMyk7XHJcbmNvbnNvbGUubG9nKHRlc3RvYmplY3QudXNlTnVtYmVyT25lKCkpO1xyXG5cclxuY29uc3QgdGVzdEFycmF5ID0gW107XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XHJcbiAgdGVzdEFycmF5W2ldID0gaTtcclxufVxyXG5cclxuY29uc29sZS5sb2codGVzdEFycmF5KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRlc3RPYmplY3QodGVtcGVyYXR1cmUsIGtleXR3bywga2V5dGhyZWUpIHtcclxuICByZXR1cm4geyB0ZW1wZXJhdHVyZSwga2V5dHdvLCBrZXl0aHJlZSB9O1xyXG59XHJcblxyXG5jb25zdCB0ZXN0b2JqZWN0dHdvID0gY3JlYXRlVGVzdE9iamVjdCgxLCAyLCAzKTtcclxuY29uc29sZS5sb2coXCJ0ZXN0b2JqZWN0OiBcIiwgdGVzdG9iamVjdHR3byk7XHJcbiovXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==