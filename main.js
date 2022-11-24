/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function createWeatherObject(city, day, temp, feelslike, cond, humidity) {
  return { city, day, temp, feelslike, cond, humidity };
}

function fillWeatherobjectWithData(weatherData) {
  return createWeatherObject(
    weatherData.name,
    weatherData.dt,
    weatherData.main.temp,
    weatherData.main.feels_like,
    weatherData.weather[0].main,
    weatherData.main.humidity
  );
}

function getCurrentWeather(lat, lon) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d145974fac8fb803900422c2cc1d620e`
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

function getFiveDayForecast(lat, lon) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d145974fac8fb803900422c2cc1d620e`,
      {
        mode: "cors",
      }
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

function getCityCoordinates(cityName) {
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

getCityCoordinates("new york city")
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELElBQUksT0FBTyxJQUFJO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxJQUFJLE9BQU8sSUFBSTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsRUFBRSxVQUFVO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxFQUFFLFVBQVU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlV2VhdGhlck9iamVjdChjaXR5LCBkYXksIHRlbXAsIGZlZWxzbGlrZSwgY29uZCwgaHVtaWRpdHkpIHtcclxuICByZXR1cm4geyBjaXR5LCBkYXksIHRlbXAsIGZlZWxzbGlrZSwgY29uZCwgaHVtaWRpdHkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbFdlYXRoZXJvYmplY3RXaXRoRGF0YSh3ZWF0aGVyRGF0YSkge1xyXG4gIHJldHVybiBjcmVhdGVXZWF0aGVyT2JqZWN0KFxyXG4gICAgd2VhdGhlckRhdGEubmFtZSxcclxuICAgIHdlYXRoZXJEYXRhLmR0LFxyXG4gICAgd2VhdGhlckRhdGEubWFpbi50ZW1wLFxyXG4gICAgd2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlLFxyXG4gICAgd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluLFxyXG4gICAgd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKGxhdCwgbG9uKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHZhbHVlKSA9PiBQcm9taXNlLnJlc29sdmUodmFsdWUpKVxyXG4gICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpdmVEYXlGb3JlY2FzdChsYXQsIGxvbikge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgLFxyXG4gICAgICB7XHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgIH1cclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKCh2YWx1ZSkgPT4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSlcclxuICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDaXR5Q29vcmRpbmF0ZXMoY2l0eU5hbWUpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPXske2NpdHlOYW1lfX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0dXMgd2FzIDIwMFwiKTtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICByZXNvbHZlKFt2YWx1ZVswXS5sYXQsIHZhbHVlWzBdLmxvbl0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLypcclxuZnVuY3Rpb24gdGVzdEdlb2NvZGluZyhjaXR5TmFtZSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9eyR7Y2l0eU5hbWV9fSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWBcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXR1cyB3YXMgMjAwXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoW3ZhbHVlWzBdLmxhdCwgdmFsdWVbMF0ubG9uXSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiovXHJcblxyXG5nZXRDaXR5Q29vcmRpbmF0ZXMoXCJuZXcgeW9yayBjaXR5XCIpXHJcbiAgLnRoZW4oKHZhbHVlKSA9PiBnZXRDdXJyZW50V2VhdGhlcih2YWx1ZVswXSwgdmFsdWVbMV0pKVxyXG4gIC50aGVuKCh2YWx1ZSkgPT4gZmlsbFdlYXRoZXJvYmplY3RXaXRoRGF0YSh2YWx1ZSkpXHJcbiAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG5nZXRDaXR5Q29vcmRpbmF0ZXMoXCJEdWlzYnVyZ1wiKVxyXG4gIC50aGVuKCh2YWx1ZSkgPT4gZ2V0Q3VycmVudFdlYXRoZXIodmFsdWVbMF0sIHZhbHVlWzFdKSlcclxuICAudGhlbigodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHRpbWV0ZXN0dXRjID0gbmV3IERhdGUodmFsdWUuZHQgKiAxMDAwKTtcclxuICAgIGNvbnNvbGUubG9nKHRpbWV0ZXN0dXRjKTtcclxuICB9KTtcclxuY29uc3QgdGltZXRlc3QgPSBuZXcgRGF0ZSgpO1xyXG5cclxuY29uc29sZS5sb2codGltZXRlc3QpO1xyXG5jb25zb2xlLmxvZyh0aW1ldGVzdC5nZXRUaW1lem9uZU9mZnNldCgpKTtcclxuXHJcbmdldENpdHlDb29yZGluYXRlcyhcIm5ldyB5b3JrIGNpdHlcIilcclxuICAudGhlbigoY29vcmRpbmF0ZXMpID0+IGdldEZpdmVEYXlGb3JlY2FzdChjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0pKVxyXG4gIC50aGVuKChmb3JlY2FzdCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3QpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdC5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHRlc3RUaW1lID0gbmV3IERhdGUoZm9yZWNhc3QubGlzdFtpXS5kdCAqIDEwMDApO1xyXG4gICAgICBjb25zb2xlLmxvZyh0ZXN0VGltZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==