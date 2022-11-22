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
        console.log(value);
        console.log(fillWeatherobjectWithData(value));
        resolve(value);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/*
function getCityCoordinates(city) {

}
*/

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
        getCurrentWeather(value[0].lat, value[0].lon);
        resolve([value[0].lat, value[0].lon]);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

testGeocoding("Herne")
  .then((value) => getCurrentWeather(value[0], value[1]))
  .then((value) => fillWeatherobjectWithData(value))
  .then((value) => {
    console.log(value);
  });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELElBQUksT0FBTyxJQUFJO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsRUFBRSxVQUFVO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlV2VhdGhlck9iamVjdChjaXR5LCBkYXksIHRlbXAsIGZlZWxzbGlrZSwgY29uZCwgaHVtaWRpdHkpIHtcclxuICByZXR1cm4geyBjaXR5LCBkYXksIHRlbXAsIGZlZWxzbGlrZSwgY29uZCwgaHVtaWRpdHkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbFdlYXRoZXJvYmplY3RXaXRoRGF0YSh3ZWF0aGVyRGF0YSkge1xyXG4gIHJldHVybiBjcmVhdGVXZWF0aGVyT2JqZWN0KFxyXG4gICAgd2VhdGhlckRhdGEubmFtZSxcclxuICAgIHdlYXRoZXJEYXRhLmR0LFxyXG4gICAgd2VhdGhlckRhdGEubWFpbi50ZW1wLFxyXG4gICAgd2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlLFxyXG4gICAgd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluLFxyXG4gICAgd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKGxhdCwgbG9uKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHZhbHVlKSA9PiBQcm9taXNlLnJlc29sdmUodmFsdWUpKVxyXG4gICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsbFdlYXRoZXJvYmplY3RXaXRoRGF0YSh2YWx1ZSkpO1xyXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLypcclxuZnVuY3Rpb24gZ2V0Q2l0eUNvb3JkaW5hdGVzKGNpdHkpIHtcclxuXHJcbn1cclxuKi9cclxuXHJcbmZ1bmN0aW9uIHRlc3RHZW9jb2RpbmcoY2l0eU5hbWUpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPXske2NpdHlOYW1lfX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0dXMgd2FzIDIwMFwiKTtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICBnZXRDdXJyZW50V2VhdGhlcih2YWx1ZVswXS5sYXQsIHZhbHVlWzBdLmxvbik7XHJcbiAgICAgICAgcmVzb2x2ZShbdmFsdWVbMF0ubGF0LCB2YWx1ZVswXS5sb25dKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbnRlc3RHZW9jb2RpbmcoXCJIZXJuZVwiKVxyXG4gIC50aGVuKCh2YWx1ZSkgPT4gZ2V0Q3VycmVudFdlYXRoZXIodmFsdWVbMF0sIHZhbHVlWzFdKSlcclxuICAudGhlbigodmFsdWUpID0+IGZpbGxXZWF0aGVyb2JqZWN0V2l0aERhdGEodmFsdWUpKVxyXG4gIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gIH0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=