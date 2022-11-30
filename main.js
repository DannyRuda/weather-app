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
    return new Date(null, date.getMonth(), date.getDate()).toLocalDateString(
      `${languageTag}`,
      { month: "long" }
    );
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

  function getCurrentTime() {
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  function getWeekday() {
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
    temperature,
    precipitation,
    humidity,
    windspeed,
    getCityNameAndCountryCode,
    getMonthAndDayDate,
    getCurrentTime,
    getWeekday,
    getIconName,
  };
}

function createHourObject(hourData) {
  // console.log(hourData)
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
  const {date} = data[0]

  function getMinTemp() {
    return data.reduce((accum, current) => (accum < current ? accum : current));
  }

  function getMaxTemp() {
    return data.reduce((accum, current) => (accum > current ? accum : current));
  }

  function getDominatingWeathericon() {
    const thunder = data.filter((element) => element.weathercon === "Thunder");
    const drizzle = data.filter((element) => element.weathercon === "Drizzle");
    const rain = data.filter((element) => element.weathercon === "Rain");
    const snow = data.filter((element) => element.weathercon === "Snow");
    const clear = data.filter((element) => element.weathercon === "Clear");
    const clouds = data.filter((element) => element.weathercon === "Clouds");
    const sortedWeather = [thunder, drizzle, rain, snow, clear, clouds].sort(
      (a, b) => b - a
    );
    return sortedWeather[0].weathercon;
  }

  function getWeekday() {
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
    getMinTemp,
    getMaxTemp,
    getDominatingWeathericon,
    getWeekday,
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
/* harmony import */ var _weatherObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherObjects */ "./src/weatherObjects.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");




function getCurrentWeather(city, country) {
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
}

function getFiveDayForecast(city,country) {
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
}

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

(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.writeWeatherintoObjects)(getCurrentWeather("duisburg","DE"),getFiveDayForecast("duisburg","DE"))
.then((weatherObjects)=>{console.log(weatherObjects)});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsRUFBRSxVQUFVLEVBQUUsRUFBRSxTQUFTO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQSx5RUFBdUI7QUFDdkIseUJBQXlCLDRCQUE0QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxFQUFFLFVBQVU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUhvdXJPYmplY3QsIGNyZWF0ZUN1cnJlbnRXZWF0aGVyLCBjcmVhdGVEYXlPYmplY3QgfSBmcm9tIFwiLi93ZWF0aGVyT2JqZWN0c1wiO1xyXG5cclxuZXhwb3J0IHsgbnVtYmVyVG9Xb3JkLCBzcGxpdEludG9EYXlzLCB3cml0ZVdlYXRoZXJpbnRvT2JqZWN0cyB9O1xyXG5cclxuZnVuY3Rpb24gbnVtYmVyVG9Xb3JkKG51bWJlcikge1xyXG4gIGNvbnN0IG51bWJlcnMgPSBbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiLCBcImZvdXJcIiwgXCJmaXZlXCIsIFwic2l4XCJdO1xyXG4gIHJldHVybiBudW1iZXJzW251bWJlcl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwbGl0SW50b0RheXMoZm9yZWNhc3REYXRhKSB7XHJcbiAgY29uc3QgaG91cmx5RGF0YU9iamVjdHMgPSBbXTtcclxuICBjb25zdCBkYXlEYXRhQXJyYXlzID0gW107XHJcbiAgZm9yZWNhc3REYXRhLmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaG91cmx5RGF0YU9iamVjdHMucHVzaChjcmVhdGVIb3VyT2JqZWN0KGl0ZW0pKTtcclxuICB9KTtcclxuICBpZiAoaG91cmx5RGF0YU9iamVjdHNbMF0uZGF0ZS5nZXRIb3VycygpID4gMikge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA2OyBqICs9IDEpIHtcclxuICAgICAgY29uc3Qgc3RhcnRpbmdEYXlEYXRlID0gaG91cmx5RGF0YU9iamVjdHNbMF0uZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgIGNvbnN0IGRheURhdGEgPSBob3VybHlEYXRhT2JqZWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKGhvdXJEYXRhKSA9PiBob3VyRGF0YS5kYXRlLmdldERhdGUoKSA9PT0gc3RhcnRpbmdEYXlEYXRlXHJcbiAgICAgICk7XHJcbiAgICAgIGhvdXJseURhdGFPYmplY3RzLnNwbGljZSgwLCBkYXlEYXRhLmxlbmd0aCk7XHJcbiAgICAgIGRheURhdGFBcnJheXMucHVzaChkYXlEYXRhKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqICs9IDEpIHtcclxuICAgICAgY29uc3Qgc3RhcnRpbmdEYXlEYXRlID0gaG91cmx5RGF0YU9iamVjdHNbMF0uZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgIGNvbnN0IGRheURhdGEgPSBob3VybHlEYXRhT2JqZWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKGhvdXJEYXRhKSA9PiBob3VyRGF0YS5kYXRlLmdldERhdGUoKSA9PT0gc3RhcnRpbmdEYXlEYXRlXHJcbiAgICAgICk7XHJcbiAgICAgIGhvdXJseURhdGFPYmplY3RzLnNwbGljZSgwLCBkYXlEYXRhLmxlbmd0aCk7XHJcbiAgICAgIGRheURhdGFBcnJheXMucHVzaChkYXlEYXRhKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGRheURhdGFBcnJheXM7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHdyaXRlV2VhdGhlcmludG9PYmplY3RzKGN1cnJlbnRXZWF0aGVyUHJvbWlzZSwgZm9yZWNhc3RQcm9taXNlKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIFByb21pc2UuYWxsKFtjdXJyZW50V2VhdGhlclByb21pc2UsIGZvcmVjYXN0UHJvbWlzZV0pLnRoZW4oKHZhbHVlcykgPT4ge1xyXG4gICAgICBjb25zdCBkYXlXZWF0aGVyT2JqZWN0cyA9IFtdO1xyXG4gICAgICBjb25zdCBjdXJyZW50RGF0YSA9IHZhbHVlc1swXTtcclxuICAgICAgY29uc3QgZm9yZWNhc3QgPSB2YWx1ZXNbMV07XHJcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhRGF5cyA9IHNwbGl0SW50b0RheXModmFsdWVzWzFdKTtcclxuICAgICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBjcmVhdGVDdXJyZW50V2VhdGhlcihcclxuICAgICAgICBuZXcgRGF0ZShjdXJyZW50RGF0YS5kdCAqIDEwMDApLFxyXG4gICAgICAgIGN1cnJlbnREYXRhLmNvb3JkLmxvbixcclxuICAgICAgICBjdXJyZW50RGF0YS5jb29yZC5sYXQsXHJcbiAgICAgICAgY3VycmVudERhdGEubWFpbi50ZW1wLFxyXG4gICAgICAgIGZvcmVjYXN0Lmxpc3RbMF0ucG9wLFxyXG4gICAgICAgIGN1cnJlbnREYXRhLm1haW4uaHVtaWRpdHksXHJcbiAgICAgICAgY3VycmVudERhdGEud2luZC5zcGVlZCxcclxuICAgICAgICBjdXJyZW50RGF0YS53ZWF0aGVyWzBdLm1haW5cclxuICAgICAgKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWF0aGVyRGF0YURheXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBkYXlEYXRhID0gd2VhdGhlckRhdGFEYXlzW2ldO1xyXG4gICAgICAgIGRheVdlYXRoZXJPYmplY3RzW2ldID0gY3JlYXRlRGF5T2JqZWN0KGRheURhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc29sdmUoW2N1cnJlbnRXZWF0aGVyLCBkYXlXZWF0aGVyT2JqZWN0c10pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IHsgY3JlYXRlQ3VycmVudFdlYXRoZXIgfTtcclxuZXhwb3J0IHsgY3JlYXRlSG91ck9iamVjdCB9O1xyXG5leHBvcnQgeyBjcmVhdGVEYXlPYmplY3QgfTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRXZWF0aGVyKFxyXG4gIGRhdGUsXHJcbiAgbG9uLFxyXG4gIGxhdCxcclxuICB0ZW1wZXJhdHVyZSxcclxuICBwcmVjaXBpdGF0aW9uLFxyXG4gIGh1bWlkaXR5LFxyXG4gIHdpbmRzcGVlZCxcclxuICB3ZWF0aGVyY29uXHJcbikge1xyXG4gIGZ1bmN0aW9uIGdldE1vbnRoQW5kRGF5RGF0ZShsYW5ndWFnZVRhZykge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKG51bGwsIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpLnRvTG9jYWxEYXRlU3RyaW5nKFxyXG4gICAgICBgJHtsYW5ndWFnZVRhZ31gLFxyXG4gICAgICB7IG1vbnRoOiBcImxvbmdcIiB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0eU5hbWVBbmRDb3VudHJ5Q29kZSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL3JldmVyc2U/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShgJHt2YWx1ZVswXS5uYW1lfSwgJHt2YWx1ZVswXS5jb3VudHJ5fWApO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnIpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcclxuICAgIHJldHVybiBgJHtkYXRlLmdldEhvdXJzKCl9OiR7ZGF0ZS5nZXRNaW51dGVzKCl9YDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFdlZWtkYXkoKSB7XHJcbiAgICBjb25zdCB3ZWVrID0gW1xyXG4gICAgICBcIlN1bmRheVwiLFxyXG4gICAgICBcIk1vbmRheVwiLFxyXG4gICAgICBcIlR1ZXNkYXlcIixcclxuICAgICAgXCJXZWRuZXNkYXlcIixcclxuICAgICAgXCJUaHVyc2RheVwiLFxyXG4gICAgICBcIkZyaWRheVwiLFxyXG4gICAgICBcIlNhdHVyZGF5XCIsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIHdlZWtbZGF0ZS5nZXREYXkoKV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRJY29uTmFtZSgpIHt9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0ZW1wZXJhdHVyZSxcclxuICAgIHByZWNpcGl0YXRpb24sXHJcbiAgICBodW1pZGl0eSxcclxuICAgIHdpbmRzcGVlZCxcclxuICAgIGdldENpdHlOYW1lQW5kQ291bnRyeUNvZGUsXHJcbiAgICBnZXRNb250aEFuZERheURhdGUsXHJcbiAgICBnZXRDdXJyZW50VGltZSxcclxuICAgIGdldFdlZWtkYXksXHJcbiAgICBnZXRJY29uTmFtZSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb3VyT2JqZWN0KGhvdXJEYXRhKSB7XHJcbiAgLy8gY29uc29sZS5sb2coaG91ckRhdGEpXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGhvdXJEYXRhLmR0ICogMTAwMCk7XHJcbiAgY29uc3QgdGltZSA9IGAke2RhdGUuZ2V0SG91cnMoKX06JHtkYXRlLmdldE1pbnV0ZXMoKX0wYDtcclxuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGhvdXJEYXRhLm1haW4udGVtcDtcclxuICBjb25zdCBwcmVjaXBpdGF0aW9uID0gaG91ckRhdGEucG9wO1xyXG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IGhvdXJEYXRhLm1haW47XHJcbiAgY29uc3Qgd2luZHNwZWVkID0gaG91ckRhdGEud2luZC5zcGVlZDtcclxuICBjb25zdCB3ZWF0aGVyY29uID0gaG91ckRhdGEud2VhdGhlclswXS5tYWluO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRlLFxyXG4gICAgdGltZSxcclxuICAgIHRlbXBlcmF0dXJlLFxyXG4gICAgcHJlY2lwaXRhdGlvbixcclxuICAgIGh1bWlkaXR5LFxyXG4gICAgd2luZHNwZWVkLFxyXG4gICAgd2VhdGhlcmNvbixcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXlPYmplY3QoZGF0YSkge1xyXG4gIGNvbnN0IHtkYXRlfSA9IGRhdGFbMF1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TWluVGVtcCgpIHtcclxuICAgIHJldHVybiBkYXRhLnJlZHVjZSgoYWNjdW0sIGN1cnJlbnQpID0+IChhY2N1bSA8IGN1cnJlbnQgPyBhY2N1bSA6IGN1cnJlbnQpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldE1heFRlbXAoKSB7XHJcbiAgICByZXR1cm4gZGF0YS5yZWR1Y2UoKGFjY3VtLCBjdXJyZW50KSA9PiAoYWNjdW0gPiBjdXJyZW50ID8gYWNjdW0gOiBjdXJyZW50KSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXREb21pbmF0aW5nV2VhdGhlcmljb24oKSB7XHJcbiAgICBjb25zdCB0aHVuZGVyID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJUaHVuZGVyXCIpO1xyXG4gICAgY29uc3QgZHJpenpsZSA9IGRhdGEuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LndlYXRoZXJjb24gPT09IFwiRHJpenpsZVwiKTtcclxuICAgIGNvbnN0IHJhaW4gPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIlJhaW5cIik7XHJcbiAgICBjb25zdCBzbm93ID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJTbm93XCIpO1xyXG4gICAgY29uc3QgY2xlYXIgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIkNsZWFyXCIpO1xyXG4gICAgY29uc3QgY2xvdWRzID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJDbG91ZHNcIik7XHJcbiAgICBjb25zdCBzb3J0ZWRXZWF0aGVyID0gW3RodW5kZXIsIGRyaXp6bGUsIHJhaW4sIHNub3csIGNsZWFyLCBjbG91ZHNdLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PiBiIC0gYVxyXG4gICAgKTtcclxuICAgIHJldHVybiBzb3J0ZWRXZWF0aGVyWzBdLndlYXRoZXJjb247XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRXZWVrZGF5KCkge1xyXG4gICAgY29uc3Qgd2VlayA9IFtcclxuICAgICAgXCJTdW5kYXlcIixcclxuICAgICAgXCJNb25kYXlcIixcclxuICAgICAgXCJUdWVzZGF5XCIsXHJcbiAgICAgIFwiV2VkbmVzZGF5XCIsXHJcbiAgICAgIFwiVGh1cnNkYXlcIixcclxuICAgICAgXCJGcmlkYXlcIixcclxuICAgICAgXCJTYXR1cmRheVwiLFxyXG4gICAgXTtcclxuICAgIHJldHVybiB3ZWVrW2RhdGUuZ2V0RGF5KCldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGUsXHJcbiAgICBkYXRhLFxyXG4gICAgZ2V0TWluVGVtcCxcclxuICAgIGdldE1heFRlbXAsXHJcbiAgICBnZXREb21pbmF0aW5nV2VhdGhlcmljb24sXHJcbiAgICBnZXRXZWVrZGF5LFxyXG4gIH07XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xyXG4gIGNyZWF0ZUN1cnJlbnRXZWF0aGVyLFxyXG4gIGNyZWF0ZUhvdXJPYmplY3QsXHJcbiAgY3JlYXRlRGF5T2JqZWN0LFxyXG59IGZyb20gXCIuL3dlYXRoZXJPYmplY3RzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIHNwbGl0SW50b0RheXMsXHJcbiAgbnVtYmVyVG9Xb3JkLFxyXG4gIHdyaXRlV2VhdGhlcmludG9PYmplY3RzLFxyXG59IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIoY2l0eSwgY291bnRyeSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBnZXRDaXR5Q29vcmRpbmF0ZXMoY2l0eSwgY291bnRyeSkudGhlbigoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2Nvb3JkaW5hdGVzWzBdfSZsb249JHtjb29yZGluYXRlc1sxXX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigodmFsdWUpID0+IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkpXHJcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGaXZlRGF5Rm9yZWNhc3QoY2l0eSxjb3VudHJ5KSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGdldENpdHlDb29yZGluYXRlcyhjaXR5LCBjb3VudHJ5KS50aGVuKChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgICBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2Nvb3JkaW5hdGVzWzBdfSZsb249JHtjb29yZGluYXRlc1sxXX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigodmFsdWUpID0+IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkpXHJcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDaXR5Q29vcmRpbmF0ZXMoY2l0eU5hbWUsIGNvdW50cnkpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPXske2NpdHlOYW1lfX0seyR7Y291bnRyeX19JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdHVzIHdhcyAyMDBcIik7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShbdmFsdWVbMF0ubGF0LCB2YWx1ZVswXS5sb25dKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbndyaXRlV2VhdGhlcmludG9PYmplY3RzKGdldEN1cnJlbnRXZWF0aGVyKFwiZHVpc2J1cmdcIixcIkRFXCIpLGdldEZpdmVEYXlGb3JlY2FzdChcImR1aXNidXJnXCIsXCJERVwiKSlcclxuLnRoZW4oKHdlYXRoZXJPYmplY3RzKT0+e2NvbnNvbGUubG9nKHdlYXRoZXJPYmplY3RzKX0pO1xyXG4vKlxyXG5mdW5jdGlvbiB0ZXN0R2VvY29kaW5nKGNpdHlOYW1lKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGZldGNoKFxyXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT17JHtjaXR5TmFtZX19JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdHVzIHdhcyAyMDBcIik7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShbdmFsdWVbMF0ubGF0LCB2YWx1ZVswXS5sb25dKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuKi9cclxuLypcclxuZ2V0Q2l0eUNvb3JkaW5hdGVzKFwiTG9uZG9uXCIsIFwiVVNcIilcclxuICAudGhlbigodmFsdWUpID0+IGdldEN1cnJlbnRXZWF0aGVyKHZhbHVlWzBdLCB2YWx1ZVsxXSkpXHJcbiAgLnRoZW4oKHZhbHVlKSA9PiBmaWxsV2VhdGhlcm9iamVjdFdpdGhEYXRhKHZhbHVlKSlcclxuICAudGhlbigodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICB9KTtcclxuXHJcbmdldENpdHlDb29yZGluYXRlcyhcIkR1aXNidXJnXCIpXHJcbiAgLnRoZW4oKHZhbHVlKSA9PiBnZXRDdXJyZW50V2VhdGhlcih2YWx1ZVswXSwgdmFsdWVbMV0pKVxyXG4gIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdGltZXRlc3R1dGMgPSBuZXcgRGF0ZSh2YWx1ZS5kdCAqIDEwMDApO1xyXG4gICAgY29uc29sZS5sb2codGltZXRlc3R1dGMpO1xyXG4gIH0pO1xyXG5jb25zdCB0aW1ldGVzdCA9IG5ldyBEYXRlKCk7XHJcblxyXG5jb25zb2xlLmxvZyh0aW1ldGVzdCk7XHJcbmNvbnNvbGUubG9nKHRpbWV0ZXN0LmdldFRpbWV6b25lT2Zmc2V0KCkpO1xyXG5cclxuZ2V0Q2l0eUNvb3JkaW5hdGVzKFwibmV3IHlvcmsgY2l0eVwiKVxyXG4gIC50aGVuKChjb29yZGluYXRlcykgPT4gZ2V0Rml2ZURheUZvcmVjYXN0KGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSkpXHJcbiAgLnRoZW4oKGZvcmVjYXN0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0Lmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgdGVzdFRpbWUgPSBuZXcgRGF0ZShmb3JlY2FzdC5saXN0W2ldLmR0ICogMTAwMCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRlc3RUaW1lKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmNvbnN0IHN0cmluZ3Rlc3QgPSBcIm9uZVwiO1xyXG5cclxud2luZG93W3N0cmluZ3Rlc3RdID0gXCJ0d29cIjtcclxuY29uc29sZS5sb2cob25lKTtcclxuXHJcbmZ1bmN0aW9uIGNvdW50YWxsYShudW1iZXJvbmUpIHtcclxuICBmdW5jdGlvbiB1c2VOdW1iZXJPbmUoKSB7XHJcbiAgICByZXR1cm4gbnVtYmVyb25lICogbnVtYmVyb25lO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgdXNlTnVtYmVyT25lIH07XHJcbn1cclxuXHJcbmNvbnN0IHRlc3RvYmplY3QgPSBjb3VudGFsbGEoMyk7XHJcbmNvbnNvbGUubG9nKHRlc3RvYmplY3QudXNlTnVtYmVyT25lKCkpO1xyXG5cclxuY29uc3QgdGVzdEFycmF5ID0gW107XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XHJcbiAgdGVzdEFycmF5W2ldID0gaTtcclxufVxyXG5cclxuY29uc29sZS5sb2codGVzdEFycmF5KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRlc3RPYmplY3QodGVtcGVyYXR1cmUsIGtleXR3bywga2V5dGhyZWUpIHtcclxuICByZXR1cm4geyB0ZW1wZXJhdHVyZSwga2V5dHdvLCBrZXl0aHJlZSB9O1xyXG59XHJcblxyXG5jb25zdCB0ZXN0b2JqZWN0dHdvID0gY3JlYXRlVGVzdE9iamVjdCgxLCAyLCAzKTtcclxuY29uc29sZS5sb2coXCJ0ZXN0b2JqZWN0OiBcIiwgdGVzdG9iamVjdHR3byk7XHJcbiovXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==