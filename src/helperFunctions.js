import {
  createHourObject,
  createCurrentWeather,
  createDayObject,
} from "./weatherObjects";

function numberToWord(number) {
  const numbers = ["one", "two", "three", "four", "five", "six"];
  return numbers[number];
}

function splitIntoDays(forecastData) {
  const hourlyDataObjects = [];
  const dayDataArrays = [];
  forecastData.list.forEach((item) => {
    hourlyDataObjects.push(createHourObject(item));
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

function addCurrentWeatherToForecast(currentWeather, daysForecast) {
  if(currentWeather.getWeekDay() === daysForecast[0].getWeekDay) {
    const currentHour = {
      date: currentWeather.date,
      time: currentWeather.getCurrentTime(),
      temperature: currentWeather.temperature,
      precipitation: currentWeather.precipitation,
      humidity: currentWeather.humidity,
      windspeed: currentWeather.windspeed,
      weathercon: currentWeather.weathercon,
      getIconLink: currentWeather.getIconLink,
      getBackgroundLink: currentWeather.getBackgroundLink
    }
    daysForecast[0].data.splice(0,0,currentHour);
  } else {
      const currentHour = {
      date: currentWeather.date,
      time: currentWeather.getCurrentTime(),
      temperature: currentWeather.temperature,
      precipitation: currentWeather.precipitation,
      humidity: currentWeather.humidity,
      windspeed: currentWeather.windspeed,
      weathercon: currentWeather.weathercon,
      getIconLink: currentWeather.getIconLink,
      getBackgroundLink: currentWeather.getBackgroundLink
    };
    const today = createDayObject([currentHour]);
    daysForecast.splice(0,0,today);
  }
}

async function writeWeatherintoObjects(currentWeatherPromise, forecastPromise) {
  return new Promise((resolve, reject) => {
    Promise.all([currentWeatherPromise, forecastPromise]).then((values) => {
      const daysForecast = [];
      const currentData = values[0];
      const forecast = values[1];
      const weatherDataDays = splitIntoDays(values[1]);
      const currentWeather = createCurrentWeather(
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
        daysForecast[i] = createDayObject(dayData);
      }
      addCurrentWeatherToForecast(currentWeather,daysForecast);
      resolve([currentWeather, daysForecast]);
    });
  });
}

function kelvinToFahrenheit(temp) {
  return (temp - 273.15) * 1.8 + 32.0;
}

function kelvinToCelsius(temp) {
  return temp - 273.15;
}

function fahrenheitToCelsius(temp) {
  return (temp - 32) / 1.8;
}

function celsiusToFahrenheit(temp) {
  return temp * 1.8 + 32;
}
export {
  numberToWord,
  splitIntoDays,
  writeWeatherintoObjects,
  kelvinToFahrenheit,
  kelvinToCelsius,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};
