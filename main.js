/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function createWeatherObject(city,day,temp,feelslike,cond,humidity) {
    return {city,day,temp,feelslike,cond,humidity}
}

function fillWeatherobjectWithData(weatherData) {
    return createWeatherObject(weatherData.name, weatherData.dt,weatherData.main.temp, weatherData.main.feels_like, weatherData.weather[0].main, weatherData.main.humidity);
}


function getCurrentWeather(lat,lon) {
    return new Promise((resolve,reject)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d145974fac8fb803900422c2cc1d620e`)
        .then((response)=>response.json())
        .then((value)=>Promise.resolve(value))
        .then((value) => { 
            console.log(value)
            console.log(fillWeatherobjectWithData(value))
            resolve(value);
        })
        .catch((err)=>{reject(err)});
    })
}

/*
function getCityCoordinates(city) {

}
*/ 

async function testGeocoding(cityName) {
    return new Promise((resolve,reject)=>{
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q={${cityName}}&appid=d145974fac8fb803900422c2cc1d620e`)
    .then((response) => {
        if (response.status === 200) {
            console.log('status was 200')
            return response.json();
        }
    })
    .then( (value)=> {
        getCurrentWeather(value[0].lat,value[0].lon);
        resolve([value[0].lat,value[0].lon]);
    })
    .catch((err)=>{ reject(err) })
    })
}

testGeocoding('Herne')
.then((value)=>getCurrentWeather(value[0],value[1]))
.then((value)=>fillWeatherobjectWithData(value))
.then((value)=>{console.log(value)})


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxJQUFJLE9BQU8sSUFBSTtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCLFlBQVk7QUFDbkMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELEVBQUUsVUFBVTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxvQkFBb0IsYUFBYTtBQUNqQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVXZWF0aGVyT2JqZWN0KGNpdHksZGF5LHRlbXAsZmVlbHNsaWtlLGNvbmQsaHVtaWRpdHkpIHtcclxuICAgIHJldHVybiB7Y2l0eSxkYXksdGVtcCxmZWVsc2xpa2UsY29uZCxodW1pZGl0eX1cclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbFdlYXRoZXJvYmplY3RXaXRoRGF0YSh3ZWF0aGVyRGF0YSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVdlYXRoZXJPYmplY3Qod2VhdGhlckRhdGEubmFtZSwgd2VhdGhlckRhdGEuZHQsd2VhdGhlckRhdGEubWFpbi50ZW1wLCB3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UsIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbiwgd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihsYXQsbG9uKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigodmFsdWUpPT5Qcm9taXNlLnJlc29sdmUodmFsdWUpKVxyXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4geyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGxXZWF0aGVyb2JqZWN0V2l0aERhdGEodmFsdWUpKVxyXG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKT0+e3JlamVjdChlcnIpfSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG4vKlxyXG5mdW5jdGlvbiBnZXRDaXR5Q29vcmRpbmF0ZXMoY2l0eSkge1xyXG5cclxufVxyXG4qLyBcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRlc3RHZW9jb2RpbmcoY2l0eU5hbWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9eyR7Y2l0eU5hbWV9fSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1cyB3YXMgMjAwJylcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oICh2YWx1ZSk9PiB7XHJcbiAgICAgICAgZ2V0Q3VycmVudFdlYXRoZXIodmFsdWVbMF0ubGF0LHZhbHVlWzBdLmxvbik7XHJcbiAgICAgICAgcmVzb2x2ZShbdmFsdWVbMF0ubGF0LHZhbHVlWzBdLmxvbl0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKT0+eyByZWplY3QoZXJyKSB9KVxyXG4gICAgfSlcclxufVxyXG5cclxudGVzdEdlb2NvZGluZygnSGVybmUnKVxyXG4udGhlbigodmFsdWUpPT5nZXRDdXJyZW50V2VhdGhlcih2YWx1ZVswXSx2YWx1ZVsxXSkpXHJcbi50aGVuKCh2YWx1ZSk9PmZpbGxXZWF0aGVyb2JqZWN0V2l0aERhdGEodmFsdWUpKVxyXG4udGhlbigodmFsdWUpPT57Y29uc29sZS5sb2codmFsdWUpfSlcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==