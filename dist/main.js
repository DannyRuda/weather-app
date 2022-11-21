/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function createWeatherObject(city,day,temp,feelslike,cond,humidity) {
    return {city,day,temp,feelslike,cond,humidity}
}

function fillWeatherobjectWithData(weatherData) {
    return createWeatherObject(weatherData.name, weatherData.dt,weatherData.main.temp, weatherData.main.feelslike, weatherData.weather[0].main, weatherData.main.humidity);
}


function getCurrentWeather(lat,lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d145974fac8fb803900422c2cc1d620e`)
    .then((response)=>response.json())
    .then((value)=>Promise.resolve(value))
    .then((value) => { 
        console.log(value)
        console.log(fillWeatherobjectWithData(value))
    })
}

/*
function getCityCoordinates(city) {

}
*/ 

function testGeocoding(cityName) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q={${cityName}}&appid=d145974fac8fb803900422c2cc1d620e`)
    .then((response) => {
        if (response.status === 200) {
            console.log('status was 200')
            return response.json();
        }
    })
    .then( (value)=> {getCurrentWeather(value[0].lat,value[0].lon)} )
    .catch((err)=>{ console.log(err) })
}

testGeocoding('Herne')


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsSUFBSSxPQUFPLElBQUk7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsRUFBRSxVQUFVO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0JBQXNCLDhDQUE4QztBQUNwRSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlV2VhdGhlck9iamVjdChjaXR5LGRheSx0ZW1wLGZlZWxzbGlrZSxjb25kLGh1bWlkaXR5KSB7XHJcbiAgICByZXR1cm4ge2NpdHksZGF5LHRlbXAsZmVlbHNsaWtlLGNvbmQsaHVtaWRpdHl9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxXZWF0aGVyb2JqZWN0V2l0aERhdGEod2VhdGhlckRhdGEpIHtcclxuICAgIHJldHVybiBjcmVhdGVXZWF0aGVyT2JqZWN0KHdlYXRoZXJEYXRhLm5hbWUsIHdlYXRoZXJEYXRhLmR0LHdlYXRoZXJEYXRhLm1haW4udGVtcCwgd2VhdGhlckRhdGEubWFpbi5mZWVsc2xpa2UsIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbiwgd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihsYXQsbG9uKSB7XHJcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYClcclxuICAgIC50aGVuKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKCh2YWx1ZSk9PlByb21pc2UucmVzb2x2ZSh2YWx1ZSkpXHJcbiAgICAudGhlbigodmFsdWUpID0+IHsgXHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsbFdlYXRoZXJvYmplY3RXaXRoRGF0YSh2YWx1ZSkpXHJcbiAgICB9KVxyXG59XHJcblxyXG4vKlxyXG5mdW5jdGlvbiBnZXRDaXR5Q29vcmRpbmF0ZXMoY2l0eSkge1xyXG5cclxufVxyXG4qLyBcclxuXHJcbmZ1bmN0aW9uIHRlc3RHZW9jb2RpbmcoY2l0eU5hbWUpIHtcclxuICAgIGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPXske2NpdHlOYW1lfX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXMgd2FzIDIwMCcpXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKCAodmFsdWUpPT4ge2dldEN1cnJlbnRXZWF0aGVyKHZhbHVlWzBdLmxhdCx2YWx1ZVswXS5sb24pfSApXHJcbiAgICAuY2F0Y2goKGVycik9PnsgY29uc29sZS5sb2coZXJyKSB9KVxyXG59XHJcblxyXG50ZXN0R2VvY29kaW5nKCdIZXJuZScpXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=