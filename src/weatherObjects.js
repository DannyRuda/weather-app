import Clear from "./media/clear.mp4";
import Clouds from "./media/cloudy.mp4";
import Rain from "./media/rain.mp4";
import Snow from "./media/snow.mp4";
import ClearIcon from "./media/clearIcon.svg";
import CloudsIcon from "./media/cloudyIcon.svg";
import RainIcon from "./media/rainIcon.svg";
import DrizzleIcon from "./media/drizzleIcon.svg";
import SnowIcon from "./media/snowIcon.svg";

const mediaLinks = (state) => ({
  getBackgroundLink() {
    let videoLink = "";
    const weathercon = state.weathercon
      ? state.weathercon
      : state.getDominatingWeathericon();
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
        videoLink = `${Rain}`;
        break;
      default:
        alert("no weathercon set yet");
    }
    return videoLink;
  },

  getIconLink() {
    let iconLink = "";
    const weathercon = state.weathercon
      ? state.weathercon
      : state.getDominatingWeathericon();
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
  },

  getBackgroundGradient() {
    let BackgroundGradient = "";
    const weathercon = state.weathercon
      ? state.weathercon
      : state.getDominatingWeathericon();
    switch (weathercon) {
      case "Clouds":
        BackgroundGradient = "rgba(161, 164, 165, 1)0%, rgba(161, 164, 165, 1) 20%, rgba(85, 85, 82, 1) 100%";
        break;
      case "Clear":
        BackgroundGradient = "rgba(144, 189, 231, 1)0%, rgba(144, 189, 231, 1) 20%,rgba(209, 220, 138, 1) 100%";
        break;
      case "Snow":
        BackgroundGradient = "rgba(226, 232, 237, 1)0%, rgba(226, 232, 237, 1) 20%,rgba(117, 116, 113, 1) 100%";
        break;
      case "Rain":
        BackgroundGradient = "rgba(74, 90, 72, 1)0%, rgba(74, 90, 72, 1) 20%, rgba(85, 85, 82, 1) 100%";
        break;
      case "Drizzle":
        BackgroundGradient = "rgba(74, 90, 72, 1)0%, rgba(74, 90, 72, 1) 20%, rgba(85, 85, 82, 1) 100%";
        break;
      default:
        alert("no weathercon set yet");
    }
    return BackgroundGradient;
  },

  getBackgroundColor() {
    let BackgroundColor = "";
    const weathercon = state.weathercon
      ? state.weathercon
      : state.getDominatingWeathericon();
    switch (weathercon) {
      case "Clouds":
        BackgroundColor = "rgba(225, 225, 225, 1)";
        break;
      case "Clear":
        BackgroundColor = "rgba(253, 252, 242, 1)";
        break;
      case "Snow":
        BackgroundColor = "rgba(241, 241, 241, 1)";
        break;
      case "Rain":
        BackgroundColor = "rgba(233, 241, 233, 1)";
        break;
      case "Drizzle":
        BackgroundColor = "rgba(233, 241, 233, 1)";
        break;
      default:
        alert("no weathercon set yet");
    }
    return BackgroundColor;
  },
});

const dateData = (state) => ({
  getWeekDay() {
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return week[state.date.getDay()];
  },

  getMonthAndDayDate(languageTag) {
    return state.date.toLocaleDateString(`${languageTag}`, {
      month: "long",
      day: "2-digit",
    });
  },
});

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
        ? `0${date.getMinutes()}`
        : date.getMinutes()
    }`;
  }

  // Assigns the methods from mediaLinks and dataData to the returned object via spread operator
  return {
    date,
    temperature,
    precipitation,
    humidity,
    windspeed,
    weathercon,
    getCityNameAndCountryCode,
    getCurrentTime,
    ...mediaLinks({
      date,
      temperature,
      precipitation,
      humidity,
      windspeed,
      weathercon,
      getCityNameAndCountryCode,
      getCurrentTime,
    }),
    ...dateData({
      date,
      temperature,
      precipitation,
      humidity,
      windspeed,
      weathercon,
      getCityNameAndCountryCode,
      getCurrentTime,
    }),
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
    ...mediaLinks({
      date,
      time,
      temperature,
      precipitation,
      humidity,
      windspeed,
      weathercon,
    }),
  };
}

function createDayObject(data) {
  const { date } = data[0];

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

  return {
    date,
    data,
    getMinTemp,
    getMaxTemp,
    getDominatingWeathericon,
    ...dateData({
      date,
      data,
      getMinTemp,
      getMaxTemp,
      getDominatingWeathericon,
    }),
    ...mediaLinks({
      date,
      data,
      getMinTemp,
      getMaxTemp,
      getDominatingWeathericon,
    }),
  };
}

export { createCurrentWeather, createHourObject, createDayObject };
