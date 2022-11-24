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
