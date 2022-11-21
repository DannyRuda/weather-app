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

