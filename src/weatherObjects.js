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
    return date.toLocaleDateString(`${languageTag}`, {
      month: "long",
      day: "2-digit",
    });
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

  function getWeekDay() {
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
    getWeekDay,
    getIconName,
  };
}

function createHourObject(hourData) {
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
  const { date } = data[0];

  function getMonthAndDayDate(languageTag) {
    return date.toLocaleDateString(`${languageTag}`, {
      month: "long",
      day: "2-digit",
    });
  }

  function getMinTemp() {
    return data.reduce((accum, current) =>
      accum.temperature < current.temperature
        ? accum.temperature
        : current.temperature
    );
  }

  function getMaxTemp() {
    return data.reduce((accum, current) =>
      accum.temperature > current.temperature
        ? accum.temperature
        : current.temperature
    );
  }

  function getDominatingWeathericon() {
    const thunder = data.filter((element) => element.weathercon === "Thunder");
    const drizzle = data.filter((element) => element.weathercon === "Drizzle");
    const rain = data.filter((element) => element.weathercon === "Rain");
    const snow = data.filter((element) => element.weathercon === "Snow");
    const clear = data.filter((element) => element.weathercon === "Clear");
    const clouds = data.filter((element) => element.weathercon === "Clouds");
    const sortedWeather = [thunder, drizzle, rain, snow, clear, clouds].sort(
      (a, b) => b.length - a.length
    );
    return sortedWeather[0][0].weathercon;
  }

  function getWeekDay() {
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
    getMonthAndDayDate,
    getMinTemp,
    getMaxTemp,
    getDominatingWeathericon,
    getWeekDay,
  };
}

export { createCurrentWeather, createHourObject, createDayObject };
