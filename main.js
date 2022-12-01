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
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherAPI */ "./src/weatherAPI.js");




(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.writeWeatherintoObjects)(
  (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)("duisburg", "DE"),
  (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getFiveDayForecast)("duisburg", "DE")
).then((weatherObjects) => {
  console.log(weatherObjects);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEQ7QUFDNUQ7QUFJc0I7QUFDdEI7QUFDQSx5RUFBdUI7QUFDdkIsRUFBRSw4REFBaUI7QUFDbkIsRUFBRSwrREFBa0I7QUFDcEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxFQUFFLFVBQVU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJPYmplY3RzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlSG91ck9iamVjdCwgY3JlYXRlQ3VycmVudFdlYXRoZXIsIGNyZWF0ZURheU9iamVjdCB9IGZyb20gXCIuL3dlYXRoZXJPYmplY3RzXCI7XHJcblxyXG5leHBvcnQgeyBudW1iZXJUb1dvcmQsIHNwbGl0SW50b0RheXMsIHdyaXRlV2VhdGhlcmludG9PYmplY3RzIH07XHJcblxyXG5mdW5jdGlvbiBudW1iZXJUb1dvcmQobnVtYmVyKSB7XHJcbiAgY29uc3QgbnVtYmVycyA9IFtcIm9uZVwiLCBcInR3b1wiLCBcInRocmVlXCIsIFwiZm91clwiLCBcImZpdmVcIiwgXCJzaXhcIl07XHJcbiAgcmV0dXJuIG51bWJlcnNbbnVtYmVyXTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3BsaXRJbnRvRGF5cyhmb3JlY2FzdERhdGEpIHtcclxuICBjb25zdCBob3VybHlEYXRhT2JqZWN0cyA9IFtdO1xyXG4gIGNvbnN0IGRheURhdGFBcnJheXMgPSBbXTtcclxuICBmb3JlY2FzdERhdGEubGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBob3VybHlEYXRhT2JqZWN0cy5wdXNoKGNyZWF0ZUhvdXJPYmplY3QoaXRlbSkpO1xyXG4gIH0pO1xyXG4gIGlmIChob3VybHlEYXRhT2JqZWN0c1swXS5kYXRlLmdldEhvdXJzKCkgPiAyKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDY7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBzdGFydGluZ0RheURhdGUgPSBob3VybHlEYXRhT2JqZWN0c1swXS5kYXRlLmdldERhdGUoKTtcclxuICAgICAgY29uc3QgZGF5RGF0YSA9IGhvdXJseURhdGFPYmplY3RzLmZpbHRlcihcclxuICAgICAgICAoaG91ckRhdGEpID0+IGhvdXJEYXRhLmRhdGUuZ2V0RGF0ZSgpID09PSBzdGFydGluZ0RheURhdGVcclxuICAgICAgKTtcclxuICAgICAgaG91cmx5RGF0YU9iamVjdHMuc3BsaWNlKDAsIGRheURhdGEubGVuZ3RoKTtcclxuICAgICAgZGF5RGF0YUFycmF5cy5wdXNoKGRheURhdGEpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBzdGFydGluZ0RheURhdGUgPSBob3VybHlEYXRhT2JqZWN0c1swXS5kYXRlLmdldERhdGUoKTtcclxuICAgICAgY29uc3QgZGF5RGF0YSA9IGhvdXJseURhdGFPYmplY3RzLmZpbHRlcihcclxuICAgICAgICAoaG91ckRhdGEpID0+IGhvdXJEYXRhLmRhdGUuZ2V0RGF0ZSgpID09PSBzdGFydGluZ0RheURhdGVcclxuICAgICAgKTtcclxuICAgICAgaG91cmx5RGF0YU9iamVjdHMuc3BsaWNlKDAsIGRheURhdGEubGVuZ3RoKTtcclxuICAgICAgZGF5RGF0YUFycmF5cy5wdXNoKGRheURhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZGF5RGF0YUFycmF5cztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gd3JpdGVXZWF0aGVyaW50b09iamVjdHMoY3VycmVudFdlYXRoZXJQcm9taXNlLCBmb3JlY2FzdFByb21pc2UpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgUHJvbWlzZS5hbGwoW2N1cnJlbnRXZWF0aGVyUHJvbWlzZSwgZm9yZWNhc3RQcm9taXNlXSkudGhlbigodmFsdWVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRheVdlYXRoZXJPYmplY3RzID0gW107XHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gdmFsdWVzWzBdO1xyXG4gICAgICBjb25zdCBmb3JlY2FzdCA9IHZhbHVlc1sxXTtcclxuICAgICAgY29uc3Qgd2VhdGhlckRhdGFEYXlzID0gc3BsaXRJbnRvRGF5cyh2YWx1ZXNbMV0pO1xyXG4gICAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGNyZWF0ZUN1cnJlbnRXZWF0aGVyKFxyXG4gICAgICAgIG5ldyBEYXRlKGN1cnJlbnREYXRhLmR0ICogMTAwMCksXHJcbiAgICAgICAgY3VycmVudERhdGEuY29vcmQubG9uLFxyXG4gICAgICAgIGN1cnJlbnREYXRhLmNvb3JkLmxhdCxcclxuICAgICAgICBjdXJyZW50RGF0YS5tYWluLnRlbXAsXHJcbiAgICAgICAgZm9yZWNhc3QubGlzdFswXS5wb3AsXHJcbiAgICAgICAgY3VycmVudERhdGEubWFpbi5odW1pZGl0eSxcclxuICAgICAgICBjdXJyZW50RGF0YS53aW5kLnNwZWVkLFxyXG4gICAgICAgIGN1cnJlbnREYXRhLndlYXRoZXJbMF0ubWFpblxyXG4gICAgICApO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYXRoZXJEYXRhRGF5cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGRheURhdGEgPSB3ZWF0aGVyRGF0YURheXNbaV07XHJcbiAgICAgICAgZGF5V2VhdGhlck9iamVjdHNbaV0gPSBjcmVhdGVEYXlPYmplY3QoZGF5RGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzb2x2ZShbY3VycmVudFdlYXRoZXIsIGRheVdlYXRoZXJPYmplY3RzXSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgeyBnZXRDaXR5Q29vcmRpbmF0ZXMsIGdldEN1cnJlbnRXZWF0aGVyLCBnZXRGaXZlRGF5Rm9yZWNhc3QgfTtcclxuXHJcbmZ1bmN0aW9uIGdldENpdHlDb29yZGluYXRlcyhjaXR5TmFtZSwgY291bnRyeSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9eyR7Y2l0eU5hbWV9fSx7JHtjb3VudHJ5fX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0dXMgd2FzIDIwMFwiKTtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICByZXNvbHZlKFt2YWx1ZVswXS5sYXQsIHZhbHVlWzBdLmxvbl0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIoY2l0eSwgY291bnRyeSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBnZXRDaXR5Q29vcmRpbmF0ZXMoY2l0eSwgY291bnRyeSkudGhlbigoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2Nvb3JkaW5hdGVzWzBdfSZsb249JHtjb29yZGluYXRlc1sxXX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigodmFsdWUpID0+IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkpXHJcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGaXZlRGF5Rm9yZWNhc3QoY2l0eSwgY291bnRyeSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBnZXRDaXR5Q29vcmRpbmF0ZXMoY2l0eSwgY291bnRyeSkudGhlbigoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtjb29yZGluYXRlc1swXX0mbG9uPSR7Y29vcmRpbmF0ZXNbMV19JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiBQcm9taXNlLnJlc29sdmUodmFsdWUpKVxyXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgeyBjcmVhdGVDdXJyZW50V2VhdGhlciB9O1xyXG5leHBvcnQgeyBjcmVhdGVIb3VyT2JqZWN0IH07XHJcbmV4cG9ydCB7IGNyZWF0ZURheU9iamVjdCB9O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudFdlYXRoZXIoXHJcbiAgZGF0ZSxcclxuICBsb24sXHJcbiAgbGF0LFxyXG4gIHRlbXBlcmF0dXJlLFxyXG4gIHByZWNpcGl0YXRpb24sXHJcbiAgaHVtaWRpdHksXHJcbiAgd2luZHNwZWVkLFxyXG4gIHdlYXRoZXJjb25cclxuKSB7XHJcbiAgZnVuY3Rpb24gZ2V0TW9udGhBbmREYXlEYXRlKGxhbmd1YWdlVGFnKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUobnVsbCwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkudG9Mb2NhbERhdGVTdHJpbmcoXHJcbiAgICAgIGAke2xhbmd1YWdlVGFnfWAsXHJcbiAgICAgIHsgbW9udGg6IFwibG9uZ1wiIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRDaXR5TmFtZUFuZENvdW50cnlDb2RlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvcmV2ZXJzZT9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAgICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGAke3ZhbHVlWzBdLm5hbWV9LCAke3ZhbHVlWzBdLmNvdW50cnl9YCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycikpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lKCkge1xyXG4gICAgcmV0dXJuIGAke2RhdGUuZ2V0SG91cnMoKX06JHtkYXRlLmdldE1pbnV0ZXMoKX1gO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0V2Vla2RheSgpIHtcclxuICAgIGNvbnN0IHdlZWsgPSBbXHJcbiAgICAgIFwiU3VuZGF5XCIsXHJcbiAgICAgIFwiTW9uZGF5XCIsXHJcbiAgICAgIFwiVHVlc2RheVwiLFxyXG4gICAgICBcIldlZG5lc2RheVwiLFxyXG4gICAgICBcIlRodXJzZGF5XCIsXHJcbiAgICAgIFwiRnJpZGF5XCIsXHJcbiAgICAgIFwiU2F0dXJkYXlcIixcclxuICAgIF07XHJcbiAgICByZXR1cm4gd2Vla1tkYXRlLmdldERheSgpXTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEljb25OYW1lKCkge31cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRlbXBlcmF0dXJlLFxyXG4gICAgcHJlY2lwaXRhdGlvbixcclxuICAgIGh1bWlkaXR5LFxyXG4gICAgd2luZHNwZWVkLFxyXG4gICAgZ2V0Q2l0eU5hbWVBbmRDb3VudHJ5Q29kZSxcclxuICAgIGdldE1vbnRoQW5kRGF5RGF0ZSxcclxuICAgIGdldEN1cnJlbnRUaW1lLFxyXG4gICAgZ2V0V2Vla2RheSxcclxuICAgIGdldEljb25OYW1lLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJPYmplY3QoaG91ckRhdGEpIHtcclxuICAvLyBjb25zb2xlLmxvZyhob3VyRGF0YSlcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoaG91ckRhdGEuZHQgKiAxMDAwKTtcclxuICBjb25zdCB0aW1lID0gYCR7ZGF0ZS5nZXRIb3VycygpfToke2RhdGUuZ2V0TWludXRlcygpfTBgO1xyXG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gaG91ckRhdGEubWFpbi50ZW1wO1xyXG4gIGNvbnN0IHByZWNpcGl0YXRpb24gPSBob3VyRGF0YS5wb3A7XHJcbiAgY29uc3QgeyBodW1pZGl0eSB9ID0gaG91ckRhdGEubWFpbjtcclxuICBjb25zdCB3aW5kc3BlZWQgPSBob3VyRGF0YS53aW5kLnNwZWVkO1xyXG4gIGNvbnN0IHdlYXRoZXJjb24gPSBob3VyRGF0YS53ZWF0aGVyWzBdLm1haW47XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGUsXHJcbiAgICB0aW1lLFxyXG4gICAgdGVtcGVyYXR1cmUsXHJcbiAgICBwcmVjaXBpdGF0aW9uLFxyXG4gICAgaHVtaWRpdHksXHJcbiAgICB3aW5kc3BlZWQsXHJcbiAgICB3ZWF0aGVyY29uLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURheU9iamVjdChkYXRhKSB7XHJcbiAgY29uc3Qge2RhdGV9ID0gZGF0YVswXVxyXG5cclxuICBmdW5jdGlvbiBnZXRNaW5UZW1wKCkge1xyXG4gICAgcmV0dXJuIGRhdGEucmVkdWNlKChhY2N1bSwgY3VycmVudCkgPT4gKGFjY3VtIDwgY3VycmVudCA/IGFjY3VtIDogY3VycmVudCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TWF4VGVtcCgpIHtcclxuICAgIHJldHVybiBkYXRhLnJlZHVjZSgoYWNjdW0sIGN1cnJlbnQpID0+IChhY2N1bSA+IGN1cnJlbnQgPyBhY2N1bSA6IGN1cnJlbnQpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldERvbWluYXRpbmdXZWF0aGVyaWNvbigpIHtcclxuICAgIGNvbnN0IHRodW5kZXIgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIlRodW5kZXJcIik7XHJcbiAgICBjb25zdCBkcml6emxlID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJEcml6emxlXCIpO1xyXG4gICAgY29uc3QgcmFpbiA9IGRhdGEuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LndlYXRoZXJjb24gPT09IFwiUmFpblwiKTtcclxuICAgIGNvbnN0IHNub3cgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIlNub3dcIik7XHJcbiAgICBjb25zdCBjbGVhciA9IGRhdGEuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LndlYXRoZXJjb24gPT09IFwiQ2xlYXJcIik7XHJcbiAgICBjb25zdCBjbG91ZHMgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIkNsb3Vkc1wiKTtcclxuICAgIGNvbnN0IHNvcnRlZFdlYXRoZXIgPSBbdGh1bmRlciwgZHJpenpsZSwgcmFpbiwgc25vdywgY2xlYXIsIGNsb3Vkc10uc29ydChcclxuICAgICAgKGEsIGIpID0+IGIgLSBhXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHNvcnRlZFdlYXRoZXJbMF0ud2VhdGhlcmNvbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFdlZWtkYXkoKSB7XHJcbiAgICBjb25zdCB3ZWVrID0gW1xyXG4gICAgICBcIlN1bmRheVwiLFxyXG4gICAgICBcIk1vbmRheVwiLFxyXG4gICAgICBcIlR1ZXNkYXlcIixcclxuICAgICAgXCJXZWRuZXNkYXlcIixcclxuICAgICAgXCJUaHVyc2RheVwiLFxyXG4gICAgICBcIkZyaWRheVwiLFxyXG4gICAgICBcIlNhdHVyZGF5XCIsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIHdlZWtbZGF0ZS5nZXREYXkoKV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF0ZSxcclxuICAgIGRhdGEsXHJcbiAgICBnZXRNaW5UZW1wLFxyXG4gICAgZ2V0TWF4VGVtcCxcclxuICAgIGdldERvbWluYXRpbmdXZWF0aGVyaWNvbixcclxuICAgIGdldFdlZWtkYXksXHJcbiAgfTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHdyaXRlV2VhdGhlcmludG9PYmplY3RzIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldEN1cnJlbnRXZWF0aGVyLFxyXG4gIGdldEZpdmVEYXlGb3JlY2FzdCxcclxufSBmcm9tIFwiLi93ZWF0aGVyQVBJXCI7XHJcblxyXG53cml0ZVdlYXRoZXJpbnRvT2JqZWN0cyhcclxuICBnZXRDdXJyZW50V2VhdGhlcihcImR1aXNidXJnXCIsIFwiREVcIiksXHJcbiAgZ2V0Rml2ZURheUZvcmVjYXN0KFwiZHVpc2J1cmdcIiwgXCJERVwiKVxyXG4pLnRoZW4oKHdlYXRoZXJPYmplY3RzKSA9PiB7XHJcbiAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdHMpO1xyXG59KTtcclxuLypcclxuZnVuY3Rpb24gdGVzdEdlb2NvZGluZyhjaXR5TmFtZSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9eyR7Y2l0eU5hbWV9fSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWBcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXR1cyB3YXMgMjAwXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoW3ZhbHVlWzBdLmxhdCwgdmFsdWVbMF0ubG9uXSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiovXHJcbi8qXHJcbmdldENpdHlDb29yZGluYXRlcyhcIkxvbmRvblwiLCBcIlVTXCIpXHJcbiAgLnRoZW4oKHZhbHVlKSA9PiBnZXRDdXJyZW50V2VhdGhlcih2YWx1ZVswXSwgdmFsdWVbMV0pKVxyXG4gIC50aGVuKCh2YWx1ZSkgPT4gZmlsbFdlYXRoZXJvYmplY3RXaXRoRGF0YSh2YWx1ZSkpXHJcbiAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG5nZXRDaXR5Q29vcmRpbmF0ZXMoXCJEdWlzYnVyZ1wiKVxyXG4gIC50aGVuKCh2YWx1ZSkgPT4gZ2V0Q3VycmVudFdlYXRoZXIodmFsdWVbMF0sIHZhbHVlWzFdKSlcclxuICAudGhlbigodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHRpbWV0ZXN0dXRjID0gbmV3IERhdGUodmFsdWUuZHQgKiAxMDAwKTtcclxuICAgIGNvbnNvbGUubG9nKHRpbWV0ZXN0dXRjKTtcclxuICB9KTtcclxuY29uc3QgdGltZXRlc3QgPSBuZXcgRGF0ZSgpO1xyXG5cclxuY29uc29sZS5sb2codGltZXRlc3QpO1xyXG5jb25zb2xlLmxvZyh0aW1ldGVzdC5nZXRUaW1lem9uZU9mZnNldCgpKTtcclxuXHJcbmdldENpdHlDb29yZGluYXRlcyhcIm5ldyB5b3JrIGNpdHlcIilcclxuICAudGhlbigoY29vcmRpbmF0ZXMpID0+IGdldEZpdmVEYXlGb3JlY2FzdChjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0pKVxyXG4gIC50aGVuKChmb3JlY2FzdCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3QpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdC5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHRlc3RUaW1lID0gbmV3IERhdGUoZm9yZWNhc3QubGlzdFtpXS5kdCAqIDEwMDApO1xyXG4gICAgICBjb25zb2xlLmxvZyh0ZXN0VGltZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5jb25zdCBzdHJpbmd0ZXN0ID0gXCJvbmVcIjtcclxuXHJcbndpbmRvd1tzdHJpbmd0ZXN0XSA9IFwidHdvXCI7XHJcbmNvbnNvbGUubG9nKG9uZSk7XHJcblxyXG5mdW5jdGlvbiBjb3VudGFsbGEobnVtYmVyb25lKSB7XHJcbiAgZnVuY3Rpb24gdXNlTnVtYmVyT25lKCkge1xyXG4gICAgcmV0dXJuIG51bWJlcm9uZSAqIG51bWJlcm9uZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHVzZU51bWJlck9uZSB9O1xyXG59XHJcblxyXG5jb25zdCB0ZXN0b2JqZWN0ID0gY291bnRhbGxhKDMpO1xyXG5jb25zb2xlLmxvZyh0ZXN0b2JqZWN0LnVzZU51bWJlck9uZSgpKTtcclxuXHJcbmNvbnN0IHRlc3RBcnJheSA9IFtdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xyXG4gIHRlc3RBcnJheVtpXSA9IGk7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKHRlc3RBcnJheSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUZXN0T2JqZWN0KHRlbXBlcmF0dXJlLCBrZXl0d28sIGtleXRocmVlKSB7XHJcbiAgcmV0dXJuIHsgdGVtcGVyYXR1cmUsIGtleXR3bywga2V5dGhyZWUgfTtcclxufVxyXG5cclxuY29uc3QgdGVzdG9iamVjdHR3byA9IGNyZWF0ZVRlc3RPYmplY3QoMSwgMiwgMyk7XHJcbmNvbnNvbGUubG9nKFwidGVzdG9iamVjdDogXCIsIHRlc3RvYmplY3R0d28pO1xyXG4qL1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=