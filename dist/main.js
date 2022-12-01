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

function getFiveDayForecast(city, country) {
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

  function getCurrentTime() {
    return `${date.getHours()}:${date.getMinutes()}`;
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
    return data.reduce((accum, current) =>
      accum.temperature < current.temperature
        ? accum.temperature
        : current.temperature
    );
  }

  function getMaxTemp() {
    return data.reduce((accum, current) =>
      accum.temperature > current.temperature
        ? accum.temperature
        : current.temperature
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




(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.writeWeatherintoObjects)(
  (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)("duisburg", "DE"),
  (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getFiveDayForecast)("duisburg", "DE")
).then((weatherObjects) => {
  console.log(weatherObjects);
  weatherObjects[0].getCityNameAndCountryCode().then((cityandcountry)=>console.log(cityandcountry));
  console.log(weatherObjects[0].getMonthAndDayDate("DE"));
  console.log(weatherObjects[0].getCurrentTime());
  console.log(weatherObjects[0].getWeekDay());
  console.log(weatherObjects[1][0].getMonthAndDayDate("DE"));
  console.log(weatherObjects[1][0].getMinTemp());
  console.log(weatherObjects[1][0].getMaxTemp());
  console.log(weatherObjects[1][0].getDominatingWeathericon());
  console.log(weatherObjects[1][0].getWeekDay());
  console.log(weatherObjects[1][0].date);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJPYmplY3RzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBjcmVhdGVIb3VyT2JqZWN0LFxyXG4gIGNyZWF0ZUN1cnJlbnRXZWF0aGVyLFxyXG4gIGNyZWF0ZURheU9iamVjdCxcclxufSBmcm9tIFwiLi93ZWF0aGVyT2JqZWN0c1wiO1xyXG5cclxuZnVuY3Rpb24gbnVtYmVyVG9Xb3JkKG51bWJlcikge1xyXG4gIGNvbnN0IG51bWJlcnMgPSBbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiLCBcImZvdXJcIiwgXCJmaXZlXCIsIFwic2l4XCJdO1xyXG4gIHJldHVybiBudW1iZXJzW251bWJlcl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwbGl0SW50b0RheXMoZm9yZWNhc3REYXRhKSB7XHJcbiAgY29uc3QgaG91cmx5RGF0YU9iamVjdHMgPSBbXTtcclxuICBjb25zdCBkYXlEYXRhQXJyYXlzID0gW107XHJcbiAgZm9yZWNhc3REYXRhLmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaG91cmx5RGF0YU9iamVjdHMucHVzaChjcmVhdGVIb3VyT2JqZWN0KGl0ZW0pKTtcclxuICB9KTtcclxuICBpZiAoaG91cmx5RGF0YU9iamVjdHNbMF0uZGF0ZS5nZXRIb3VycygpID4gMikge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA2OyBqICs9IDEpIHtcclxuICAgICAgY29uc3Qgc3RhcnRpbmdEYXlEYXRlID0gaG91cmx5RGF0YU9iamVjdHNbMF0uZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgIGNvbnN0IGRheURhdGEgPSBob3VybHlEYXRhT2JqZWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKGhvdXJEYXRhKSA9PiBob3VyRGF0YS5kYXRlLmdldERhdGUoKSA9PT0gc3RhcnRpbmdEYXlEYXRlXHJcbiAgICAgICk7XHJcbiAgICAgIGhvdXJseURhdGFPYmplY3RzLnNwbGljZSgwLCBkYXlEYXRhLmxlbmd0aCk7XHJcbiAgICAgIGRheURhdGFBcnJheXMucHVzaChkYXlEYXRhKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqICs9IDEpIHtcclxuICAgICAgY29uc3Qgc3RhcnRpbmdEYXlEYXRlID0gaG91cmx5RGF0YU9iamVjdHNbMF0uZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgIGNvbnN0IGRheURhdGEgPSBob3VybHlEYXRhT2JqZWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKGhvdXJEYXRhKSA9PiBob3VyRGF0YS5kYXRlLmdldERhdGUoKSA9PT0gc3RhcnRpbmdEYXlEYXRlXHJcbiAgICAgICk7XHJcbiAgICAgIGhvdXJseURhdGFPYmplY3RzLnNwbGljZSgwLCBkYXlEYXRhLmxlbmd0aCk7XHJcbiAgICAgIGRheURhdGFBcnJheXMucHVzaChkYXlEYXRhKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGRheURhdGFBcnJheXM7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHdyaXRlV2VhdGhlcmludG9PYmplY3RzKGN1cnJlbnRXZWF0aGVyUHJvbWlzZSwgZm9yZWNhc3RQcm9taXNlKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIFByb21pc2UuYWxsKFtjdXJyZW50V2VhdGhlclByb21pc2UsIGZvcmVjYXN0UHJvbWlzZV0pLnRoZW4oKHZhbHVlcykgPT4ge1xyXG4gICAgICBjb25zdCBkYXlXZWF0aGVyT2JqZWN0cyA9IFtdO1xyXG4gICAgICBjb25zdCBjdXJyZW50RGF0YSA9IHZhbHVlc1swXTtcclxuICAgICAgY29uc3QgZm9yZWNhc3QgPSB2YWx1ZXNbMV07XHJcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhRGF5cyA9IHNwbGl0SW50b0RheXModmFsdWVzWzFdKTtcclxuICAgICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBjcmVhdGVDdXJyZW50V2VhdGhlcihcclxuICAgICAgICBuZXcgRGF0ZShjdXJyZW50RGF0YS5kdCAqIDEwMDApLFxyXG4gICAgICAgIGN1cnJlbnREYXRhLmNvb3JkLmxvbixcclxuICAgICAgICBjdXJyZW50RGF0YS5jb29yZC5sYXQsXHJcbiAgICAgICAgY3VycmVudERhdGEubWFpbi50ZW1wLFxyXG4gICAgICAgIGZvcmVjYXN0Lmxpc3RbMF0ucG9wLFxyXG4gICAgICAgIGN1cnJlbnREYXRhLm1haW4uaHVtaWRpdHksXHJcbiAgICAgICAgY3VycmVudERhdGEud2luZC5zcGVlZCxcclxuICAgICAgICBjdXJyZW50RGF0YS53ZWF0aGVyWzBdLm1haW5cclxuICAgICAgKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWF0aGVyRGF0YURheXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBkYXlEYXRhID0gd2VhdGhlckRhdGFEYXlzW2ldO1xyXG4gICAgICAgIGRheVdlYXRoZXJPYmplY3RzW2ldID0gY3JlYXRlRGF5T2JqZWN0KGRheURhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc29sdmUoW2N1cnJlbnRXZWF0aGVyLCBkYXlXZWF0aGVyT2JqZWN0c10pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtlbHZpblRvRmFocmVuaGVpdCh0ZW1wKSB7XHJcbiAgcmV0dXJuICh0ZW1wIC0gMjczLjE1KSAqIDEuOCArIDMyLjA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtlbHZpblRvQ2Vsc2l1cyh0ZW1wKSB7XHJcbiAgcmV0dXJuIHRlbXAgLSAyNzMuMTU7XHJcbn1cclxuZXhwb3J0IHtcclxuICBudW1iZXJUb1dvcmQsXHJcbiAgc3BsaXRJbnRvRGF5cyxcclxuICB3cml0ZVdlYXRoZXJpbnRvT2JqZWN0cyxcclxuICBrZWx2aW5Ub0ZhaHJlbmhlaXQsXHJcbiAga2VsdmluVG9DZWxzaXVzLFxyXG59O1xyXG4iLCJmdW5jdGlvbiBnZXRDaXR5Q29vcmRpbmF0ZXMoY2l0eU5hbWUsIGNvdW50cnkpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPXske2NpdHlOYW1lfX0seyR7Y291bnRyeX19JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdHVzIHdhcyAyMDBcIik7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShbdmFsdWVbMF0ubGF0LCB2YWx1ZVswXS5sb25dKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKGNpdHksIGNvdW50cnkpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZ2V0Q2l0eUNvb3JkaW5hdGVzKGNpdHksIGNvdW50cnkpLnRoZW4oKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtjb29yZGluYXRlc1swXX0mbG9uPSR7Y29vcmRpbmF0ZXNbMV19JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiBQcm9taXNlLnJlc29sdmUodmFsdWUpKVxyXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rml2ZURheUZvcmVjYXN0KGNpdHksIGNvdW50cnkpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZ2V0Q2l0eUNvb3JkaW5hdGVzKGNpdHksIGNvdW50cnkpLnRoZW4oKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7Y29vcmRpbmF0ZXNbMF19Jmxvbj0ke2Nvb3JkaW5hdGVzWzFdfSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWBcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSlcclxuICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldENpdHlDb29yZGluYXRlcywgZ2V0Q3VycmVudFdlYXRoZXIsIGdldEZpdmVEYXlGb3JlY2FzdCB9O1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVDdXJyZW50V2VhdGhlcihcclxuICBkYXRlLFxyXG4gIGxvbixcclxuICBsYXQsXHJcbiAgdGVtcGVyYXR1cmUsXHJcbiAgcHJlY2lwaXRhdGlvbixcclxuICBodW1pZGl0eSxcclxuICB3aW5kc3BlZWQsXHJcbiAgd2VhdGhlcmNvblxyXG4pIHtcclxuICBmdW5jdGlvbiBnZXRNb250aEFuZERheURhdGUobGFuZ3VhZ2VUYWcpIHtcclxuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhgJHtsYW5ndWFnZVRhZ31gLCB7XHJcbiAgICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgICAgZGF5OiBcIjItZGlnaXRcIixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0eU5hbWVBbmRDb3VudHJ5Q29kZSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL3JldmVyc2U/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShgJHt2YWx1ZVswXS5uYW1lfSwgJHt2YWx1ZVswXS5jb3VudHJ5fWApO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnIpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcclxuICAgIHJldHVybiBgJHtkYXRlLmdldEhvdXJzKCl9OiR7ZGF0ZS5nZXRNaW51dGVzKCl9YDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFdlZWtEYXkoKSB7XHJcbiAgICBjb25zdCB3ZWVrID0gW1xyXG4gICAgICBcIlN1bmRheVwiLFxyXG4gICAgICBcIk1vbmRheVwiLFxyXG4gICAgICBcIlR1ZXNkYXlcIixcclxuICAgICAgXCJXZWRuZXNkYXlcIixcclxuICAgICAgXCJUaHVyc2RheVwiLFxyXG4gICAgICBcIkZyaWRheVwiLFxyXG4gICAgICBcIlNhdHVyZGF5XCIsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIHdlZWtbZGF0ZS5nZXREYXkoKV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRJY29uTmFtZSgpIHt9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0ZW1wZXJhdHVyZSxcclxuICAgIHByZWNpcGl0YXRpb24sXHJcbiAgICBodW1pZGl0eSxcclxuICAgIHdpbmRzcGVlZCxcclxuICAgIGdldENpdHlOYW1lQW5kQ291bnRyeUNvZGUsXHJcbiAgICBnZXRNb250aEFuZERheURhdGUsXHJcbiAgICBnZXRDdXJyZW50VGltZSxcclxuICAgIGdldFdlZWtEYXksXHJcbiAgICBnZXRJY29uTmFtZSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb3VyT2JqZWN0KGhvdXJEYXRhKSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGhvdXJEYXRhLmR0ICogMTAwMCk7XHJcbiAgY29uc3QgdGltZSA9IGAke2RhdGUuZ2V0SG91cnMoKX06JHtkYXRlLmdldE1pbnV0ZXMoKX0wYDtcclxuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGhvdXJEYXRhLm1haW4udGVtcDtcclxuICBjb25zdCBwcmVjaXBpdGF0aW9uID0gaG91ckRhdGEucG9wO1xyXG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IGhvdXJEYXRhLm1haW47XHJcbiAgY29uc3Qgd2luZHNwZWVkID0gaG91ckRhdGEud2luZC5zcGVlZDtcclxuICBjb25zdCB3ZWF0aGVyY29uID0gaG91ckRhdGEud2VhdGhlclswXS5tYWluO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRlLFxyXG4gICAgdGltZSxcclxuICAgIHRlbXBlcmF0dXJlLFxyXG4gICAgcHJlY2lwaXRhdGlvbixcclxuICAgIGh1bWlkaXR5LFxyXG4gICAgd2luZHNwZWVkLFxyXG4gICAgd2VhdGhlcmNvbixcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXlPYmplY3QoZGF0YSkge1xyXG4gIGNvbnN0IHsgZGF0ZSB9ID0gZGF0YVswXTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0TW9udGhBbmREYXlEYXRlKGxhbmd1YWdlVGFnKSB7XHJcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoYCR7bGFuZ3VhZ2VUYWd9YCwge1xyXG4gICAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldE1pblRlbXAoKSB7XHJcbiAgICByZXR1cm4gZGF0YS5yZWR1Y2UoKGFjY3VtLCBjdXJyZW50KSA9PlxyXG4gICAgICBhY2N1bS50ZW1wZXJhdHVyZSA8IGN1cnJlbnQudGVtcGVyYXR1cmVcclxuICAgICAgICA/IGFjY3VtLnRlbXBlcmF0dXJlXHJcbiAgICAgICAgOiBjdXJyZW50LnRlbXBlcmF0dXJlXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TWF4VGVtcCgpIHtcclxuICAgIHJldHVybiBkYXRhLnJlZHVjZSgoYWNjdW0sIGN1cnJlbnQpID0+XHJcbiAgICAgIGFjY3VtLnRlbXBlcmF0dXJlID4gY3VycmVudC50ZW1wZXJhdHVyZVxyXG4gICAgICAgID8gYWNjdW0udGVtcGVyYXR1cmVcclxuICAgICAgICA6IGN1cnJlbnQudGVtcGVyYXR1cmVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXREb21pbmF0aW5nV2VhdGhlcmljb24oKSB7XHJcbiAgICBjb25zdCB0aHVuZGVyID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJUaHVuZGVyXCIpO1xyXG4gICAgY29uc3QgZHJpenpsZSA9IGRhdGEuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LndlYXRoZXJjb24gPT09IFwiRHJpenpsZVwiKTtcclxuICAgIGNvbnN0IHJhaW4gPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIlJhaW5cIik7XHJcbiAgICBjb25zdCBzbm93ID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJTbm93XCIpO1xyXG4gICAgY29uc3QgY2xlYXIgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIkNsZWFyXCIpO1xyXG4gICAgY29uc3QgY2xvdWRzID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJDbG91ZHNcIik7XHJcbiAgICBjb25zdCBzb3J0ZWRXZWF0aGVyID0gW3RodW5kZXIsIGRyaXp6bGUsIHJhaW4sIHNub3csIGNsZWFyLCBjbG91ZHNdLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHNvcnRlZFdlYXRoZXJbMF1bMF0ud2VhdGhlcmNvbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFdlZWtEYXkoKSB7XHJcbiAgICBjb25zdCB3ZWVrID0gW1xyXG4gICAgICBcIlN1bmRheVwiLFxyXG4gICAgICBcIk1vbmRheVwiLFxyXG4gICAgICBcIlR1ZXNkYXlcIixcclxuICAgICAgXCJXZWRuZXNkYXlcIixcclxuICAgICAgXCJUaHVyc2RheVwiLFxyXG4gICAgICBcIkZyaWRheVwiLFxyXG4gICAgICBcIlNhdHVyZGF5XCIsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIHdlZWtbZGF0ZS5nZXREYXkoKV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF0ZSxcclxuICAgIGRhdGEsXHJcbiAgICBnZXRNb250aEFuZERheURhdGUsXHJcbiAgICBnZXRNaW5UZW1wLFxyXG4gICAgZ2V0TWF4VGVtcCxcclxuICAgIGdldERvbWluYXRpbmdXZWF0aGVyaWNvbixcclxuICAgIGdldFdlZWtEYXksXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ3VycmVudFdlYXRoZXIsIGNyZWF0ZUhvdXJPYmplY3QsIGNyZWF0ZURheU9iamVjdCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHdyaXRlV2VhdGhlcmludG9PYmplY3RzIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldEN1cnJlbnRXZWF0aGVyLFxyXG4gIGdldEZpdmVEYXlGb3JlY2FzdCxcclxufSBmcm9tIFwiLi93ZWF0aGVyQVBJXCI7XHJcblxyXG53cml0ZVdlYXRoZXJpbnRvT2JqZWN0cyhcclxuICBnZXRDdXJyZW50V2VhdGhlcihcImR1aXNidXJnXCIsIFwiREVcIiksXHJcbiAgZ2V0Rml2ZURheUZvcmVjYXN0KFwiZHVpc2J1cmdcIiwgXCJERVwiKVxyXG4pLnRoZW4oKHdlYXRoZXJPYmplY3RzKSA9PiB7XHJcbiAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdHMpO1xyXG4gIHdlYXRoZXJPYmplY3RzWzBdLmdldENpdHlOYW1lQW5kQ291bnRyeUNvZGUoKS50aGVuKChjaXR5YW5kY291bnRyeSk9PmNvbnNvbGUubG9nKGNpdHlhbmRjb3VudHJ5KSk7XHJcbiAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdHNbMF0uZ2V0TW9udGhBbmREYXlEYXRlKFwiREVcIikpO1xyXG4gIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3RzWzBdLmdldEN1cnJlbnRUaW1lKCkpO1xyXG4gIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3RzWzBdLmdldFdlZWtEYXkoKSk7XHJcbiAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdHNbMV1bMF0uZ2V0TW9udGhBbmREYXlEYXRlKFwiREVcIikpO1xyXG4gIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3RzWzFdWzBdLmdldE1pblRlbXAoKSk7XHJcbiAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdHNbMV1bMF0uZ2V0TWF4VGVtcCgpKTtcclxuICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqZWN0c1sxXVswXS5nZXREb21pbmF0aW5nV2VhdGhlcmljb24oKSk7XHJcbiAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdHNbMV1bMF0uZ2V0V2Vla0RheSgpKTtcclxuICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqZWN0c1sxXVswXS5kYXRlKTtcclxufSk7XHJcbi8qXHJcbmZ1bmN0aW9uIHRlc3RHZW9jb2RpbmcoY2l0eU5hbWUpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPXske2NpdHlOYW1lfX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0dXMgd2FzIDIwMFwiKTtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICByZXNvbHZlKFt2YWx1ZVswXS5sYXQsIHZhbHVlWzBdLmxvbl0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG4qL1xyXG4vKlxyXG5nZXRDaXR5Q29vcmRpbmF0ZXMoXCJMb25kb25cIiwgXCJVU1wiKVxyXG4gIC50aGVuKCh2YWx1ZSkgPT4gZ2V0Q3VycmVudFdlYXRoZXIodmFsdWVbMF0sIHZhbHVlWzFdKSlcclxuICAudGhlbigodmFsdWUpID0+IGZpbGxXZWF0aGVyb2JqZWN0V2l0aERhdGEodmFsdWUpKVxyXG4gIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gIH0pO1xyXG5cclxuZ2V0Q2l0eUNvb3JkaW5hdGVzKFwiRHVpc2J1cmdcIilcclxuICAudGhlbigodmFsdWUpID0+IGdldEN1cnJlbnRXZWF0aGVyKHZhbHVlWzBdLCB2YWx1ZVsxXSkpXHJcbiAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB0aW1ldGVzdHV0YyA9IG5ldyBEYXRlKHZhbHVlLmR0ICogMTAwMCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aW1ldGVzdHV0Yyk7XHJcbiAgfSk7XHJcbmNvbnN0IHRpbWV0ZXN0ID0gbmV3IERhdGUoKTtcclxuXHJcbmNvbnNvbGUubG9nKHRpbWV0ZXN0KTtcclxuY29uc29sZS5sb2codGltZXRlc3QuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XHJcblxyXG5nZXRDaXR5Q29vcmRpbmF0ZXMoXCJuZXcgeW9yayBjaXR5XCIpXHJcbiAgLnRoZW4oKGNvb3JkaW5hdGVzKSA9PiBnZXRGaXZlRGF5Rm9yZWNhc3QoY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdKSlcclxuICAudGhlbigoZm9yZWNhc3QpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3QubGlzdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCB0ZXN0VGltZSA9IG5ldyBEYXRlKGZvcmVjYXN0Lmxpc3RbaV0uZHQgKiAxMDAwKTtcclxuICAgICAgY29uc29sZS5sb2codGVzdFRpbWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuY29uc3Qgc3RyaW5ndGVzdCA9IFwib25lXCI7XHJcblxyXG53aW5kb3dbc3RyaW5ndGVzdF0gPSBcInR3b1wiO1xyXG5jb25zb2xlLmxvZyhvbmUpO1xyXG5cclxuZnVuY3Rpb24gY291bnRhbGxhKG51bWJlcm9uZSkge1xyXG4gIGZ1bmN0aW9uIHVzZU51bWJlck9uZSgpIHtcclxuICAgIHJldHVybiBudW1iZXJvbmUgKiBudW1iZXJvbmU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyB1c2VOdW1iZXJPbmUgfTtcclxufVxyXG5cclxuY29uc3QgdGVzdG9iamVjdCA9IGNvdW50YWxsYSgzKTtcclxuY29uc29sZS5sb2codGVzdG9iamVjdC51c2VOdW1iZXJPbmUoKSk7XHJcblxyXG5jb25zdCB0ZXN0QXJyYXkgPSBbXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcclxuICB0ZXN0QXJyYXlbaV0gPSBpO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyh0ZXN0QXJyYXkpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGVzdE9iamVjdCh0ZW1wZXJhdHVyZSwga2V5dHdvLCBrZXl0aHJlZSkge1xyXG4gIHJldHVybiB7IHRlbXBlcmF0dXJlLCBrZXl0d28sIGtleXRocmVlIH07XHJcbn1cclxuXHJcbmNvbnN0IHRlc3RvYmplY3R0d28gPSBjcmVhdGVUZXN0T2JqZWN0KDEsIDIsIDMpO1xyXG5jb25zb2xlLmxvZyhcInRlc3RvYmplY3Q6IFwiLCB0ZXN0b2JqZWN0dHdvKTtcclxuKi9cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9