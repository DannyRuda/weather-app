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
        if (response.status === 200) {
            console.log('status was 200')
            return response.json();
        }
    })
    .then( (value)=> Promise.resolve([value[0].lat,value[0].lon]) )
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



