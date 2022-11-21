/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function getCurrentWeather(lat,lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d145974fac8fb803900422c2cc1d620e`)
    .then((response)=>response.json())
    .then((value)=>Promise.resolve(value))
}

/*
function getCityCoordinates(city) {

}
*/ 

function testGeocoding(cityName) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q={${cityName}}&appid=d145974fac8fb803900422c2cc1d620e`)
    .then((response) => {
        let weatherPromise = '';
        if (response.status === 200) {
            console.log('status was 200')
            weatherPromise = response.json();
        }
        return weatherPromise;
    })
    .then( (value)=> {
        return Promise.resolve([value[0].lat,value[0].lon])
    })
    .catch((err)=>{ console.log(err) })
}

function createWeatherObject(city,day,temp,feelslike,cond,humidity) {
    return {city,day,temp,feelslike,cond,humidity}
}

function fillWeatherobjectWithData(weatherData) {
    createWeatherObject(weatherData.name, weatherData.dt,weatherData.main.temp, weatherData.main.feelslike, weatherData.weather.main, weatherData.main.humidity);
}

testGeocoding('Herne')
.then((value)=>getCurrentWeather(value[0],value[1]))
.then((value)=>Promise.resolve(fillWeatherobjectWithData(value)))
.then((weather)=>{console.log(weather)})
.catch((err)=>{console.log(err)})




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsaUVBQWlFLElBQUksT0FBTyxJQUFJO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsRUFBRSxVQUFVO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QyxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihsYXQsbG9uKSB7XHJcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYClcclxuICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKCh2YWx1ZSk9PlByb21pc2UucmVzb2x2ZSh2YWx1ZSkpXHJcbn1cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGdldENpdHlDb29yZGluYXRlcyhjaXR5KSB7XHJcblxyXG59XHJcbiovIFxyXG5cclxuZnVuY3Rpb24gdGVzdEdlb2NvZGluZyhjaXR5TmFtZSkge1xyXG4gICAgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9eyR7Y2l0eU5hbWV9fSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBsZXQgd2VhdGhlclByb21pc2UgPSAnJztcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1cyB3YXMgMjAwJylcclxuICAgICAgICAgICAgd2VhdGhlclByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWF0aGVyUHJvbWlzZTtcclxuICAgIH0pXHJcbiAgICAudGhlbiggKHZhbHVlKT0+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFt2YWx1ZVswXS5sYXQsdmFsdWVbMF0ubG9uXSlcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycik9PnsgY29uc29sZS5sb2coZXJyKSB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyT2JqZWN0KGNpdHksZGF5LHRlbXAsZmVlbHNsaWtlLGNvbmQsaHVtaWRpdHkpIHtcclxuICAgIHJldHVybiB7Y2l0eSxkYXksdGVtcCxmZWVsc2xpa2UsY29uZCxodW1pZGl0eX1cclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbFdlYXRoZXJvYmplY3RXaXRoRGF0YSh3ZWF0aGVyRGF0YSkge1xyXG4gICAgY3JlYXRlV2VhdGhlck9iamVjdCh3ZWF0aGVyRGF0YS5uYW1lLCB3ZWF0aGVyRGF0YS5kdCx3ZWF0aGVyRGF0YS5tYWluLnRlbXAsIHdlYXRoZXJEYXRhLm1haW4uZmVlbHNsaWtlLCB3ZWF0aGVyRGF0YS53ZWF0aGVyLm1haW4sIHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHkpO1xyXG59XHJcblxyXG50ZXN0R2VvY29kaW5nKCdIZXJuZScpXHJcbi50aGVuKCh2YWx1ZSk9PmdldEN1cnJlbnRXZWF0aGVyKHZhbHVlWzBdLHZhbHVlWzFdKSlcclxuLnRoZW4oKHZhbHVlKT0+UHJvbWlzZS5yZXNvbHZlKGZpbGxXZWF0aGVyb2JqZWN0V2l0aERhdGEodmFsdWUpKSlcclxuLnRoZW4oKHdlYXRoZXIpPT57Y29uc29sZS5sb2cod2VhdGhlcil9KVxyXG4uY2F0Y2goKGVycik9Pntjb25zb2xlLmxvZyhlcnIpfSlcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9