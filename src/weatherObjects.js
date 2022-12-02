import Clear from "./media/clear.mp4";
import Clouds from "./media/cloudy.mp4";
import Rain from "./media/rain.mp4";
import Drizzle from "./media/drizzle.mp4";
import Snow from "./media/snow.mp4";
import ClearIcon from "./media/clearIcon.svg";
import CloudsIcon from "./media/cloudyIcon.svg";
import RainIcon from "./media/rainIcon.svg";
import DrizzleIcon from "./media/drizzleIcon.svg";
import SnowIcon from "./media/snowIcon.svg";

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

  // if minute is one digit, a 0 gets added to the minute to show a 2 digit minute count
  function getCurrentTime() {
    return `${date.getHours()}:${
      date.getMinutes().toString().length < 2
        ? `${date.getMinutes()}0`
        : date.getMinutes()
    }`;
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

  function getIconLink() {
    let videoLink = "";
    switch (weathercon) {
      case "Clouds":
        videoLink = `${CloudsIcon}`;
        break;
      case "Clear":
        videoLink = `${ClearIcon}`;
        break;
      case "Snow":
        videoLink = `${SnowIcon}`;
        break;
      case "Rain":
        videoLink = `${RainIcon}`;
        break;
      case "Drizzle":
        videoLink = `${DrizzleIcon}`;
        break;
      default:
        alert("no weathercon set yet");
    }
    return videoLink;
  }

  function getBackgroundLink() {
    let videoLink = "";
    switch (weathercon) {
      case "Clouds":
        videoLink = `${Clouds}`;
        break;
      case "Clear":
        videoLink = `${Clear}`;
        break;
      case "Snow":
        videoLink = `${Snow}`;
        break;
      case "Rain":
        videoLink = `${Rain}`;
        break;
      case "Drizzle":
        videoLink = `${Drizzle}`;
        break;
      default:
        alert("no weathercon set yet");
    }
    return videoLink;
  }

  return {
    date,
    temperature,
    precipitation,
    humidity,
    windspeed,
    getCityNameAndCountryCode,
    getMonthAndDayDate,
    getCurrentTime,
    getWeekDay,
    getIconLink,
    getBackgroundLink,
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

  function getIconLink() {
    let videoLink = "";
    switch (weathercon) {
      case "Clouds":
        videoLink = `${CloudsIcon}`;
        break;
      case "Clear":
        videoLink = `${ClearIcon}`;
        break;
      case "Snow":
        videoLink = `${SnowIcon}`;
        break;
      case "Rain":
        videoLink = `${RainIcon}`;
        break;
      case "Drizzle":
        videoLink = `${DrizzleIcon}`;
        break;
      default:
        alert("no weathercon set yet");
    }
    return videoLink;
  }

  function getBackgroundLink() {
    let videoLink = "";
    switch (weathercon) {
      case "Clouds":
        videoLink = `${Clouds}`;
        break;
      case "Clear":
        videoLink = `${Clear}`;
        break;
      case "Snow":
        videoLink = `${Snow}`;
        break;
      case "Rain":
        videoLink = `${Rain}`;
        break;
      case "Drizzle":
        videoLink = `${Drizzle}`;
        break;
      default:
        alert("no weathercon set yet");
    }
    return videoLink;
  }

  return {
    date,
    time,
    temperature,
    precipitation,
    humidity,
    windspeed,
    weathercon,
    getIconLink,
    getBackgroundLink,
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
    const coldestHour = data.reduce(
      (accum, current) =>
        accum.temperature < current.temperature ? accum : current,
      data[0]
    );
    return coldestHour.temperature;
  }

  function getMaxTemp() {
    const hottestHour = data.reduce(
      (accum, current) =>
        accum.temperature > current.temperature ? accum : current,
      data[0]
    );
    return hottestHour.temperature;
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

  function getIconLink() {
    let iconLink = "";
    const weathercon = this.getDominatingWeathericon();
    switch (weathercon) {
      case "Clouds":
        iconLink = `${CloudsIcon}`;
        break;
      case "Clear":
        iconLink = `${ClearIcon}`;
        break;
      case "Snow":
        iconLink = `${SnowIcon}`;
        break;
      case "Rain":
        iconLink = `${RainIcon}`;
        break;
      case "Drizzle":
        iconLink = `${DrizzleIcon}`;
        break;
      default:
        alert("no weathercon set yet");
    }
    return iconLink;
  }

  function getBackgroundLink() {
    let videoLink = "";
    const weathercon = this.getDominatingWeathericon();
    switch (weathercon) {
      case "Clouds":
        videoLink = `${Clouds}`;
        break;
      case "Clear":
        videoLink = `${Clear}`;
        break;
      case "Snow":
        videoLink = `${Snow}`;
        break;
      case "Rain":
        videoLink = `${Rain}`;
        break;
      case "Drizzle":
        videoLink = `${Drizzle}`;
        break;
      default:
        alert("no weathercon set yet");
    }
    return videoLink;
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
    getIconLink,
    getBackgroundLink,
  };
}

export { createCurrentWeather, createHourObject, createDayObject };
