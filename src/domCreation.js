import { kelvinToCelsius } from "./helperFunctions";

function createHourElements(day, dayIndex) {
  let htmlString = ``;
  day.data.forEach((hour, i) => {
    htmlString += `<div class="hour" data-index-hour="${i}" data-index-day="${dayIndex}">
                            <p id="time">${hour.time}</p>
                            <img class="icon" src="${hour.getIconLink()}">
                            <p id="temp">${kelvinToCelsius(
                              hour.temperature
                            )}°C</p>
                        </div>`;
  });
  return htmlString;
}

function createDayElements(currentWeather, daysForecast) {
  let htmlString = ``;
  daysForecast.forEach((day, i) => {
    htmlString += `<div class="day" data-index-day="${i}">
                        <p id="weekday">${
                          day.getWeekDay() !== currentWeather.getWeekDay()
                            ? day.getWeekDay()
                            : "today"
                        }</p>
                        <img class="icon" src="${day.getIconLink()}">
                        <p>${
                          day.data.length > 1
                            ? `<span id="minTemp">${kelvinToCelsius(
                                day.getMinTemp()
                              )}</span>°C - <span id="maxTemp">${kelvinToCelsius(
                                day.getMaxTemp()
                              )}</span>°C`
                            : kelvinToCelsius(day.data[0].temperature)
                        }</p>
                    </div>`;
  });
  return htmlString;
}
/*
function changeBackground() {
  document.querySelector(source).src =
    daysForecast[data - index - day].data[
      data - index - hour
    ].getBackgroundLink();
}
*/
function pageLoad(currentWeather, daysForecast) {
  const hoursHtml = createHourElements(daysForecast[0], 0);
  const daysHtml = createDayElements(currentWeather, daysForecast);
  currentWeather.getCityNameAndCountryCode().then((cityAndCountry) => {
    document.querySelector("body").innerHTML = `
    <video class ="video" autoplay muted loop id="myVideo">
        <source src="${currentWeather.getBackgroundLink()}" type="video/mp4">
    </video>
    <div class="overlay">
        <div class="currentW">
            <p class="currentW" id="date">${currentWeather.getMonthAndDayDate(
              "DE"
            )}</p>
            <p class="currentW" id="city">${cityAndCountry}</p>
            <p class="currentW" id="time">${currentWeather.getCurrentTime()}</p>
            <img class="icon" src="${currentWeather.getIconLink()}">
            <p class="currentW" id="temp">${kelvinToCelsius(
              currentWeather.temperature
            )}°C</p>
            <p class="currentW">Niederschlag: <span id="pop">${
              currentWeather.precipitation * 100
            }</span>% </p>
            <p class="currentW">Luftfeuchte: <span id="humid">${
              currentWeather.humidity
            }</span>% </p>
            <p class="currentW">Windgeschw: <span id="wind">${
              currentWeather.windspeed
            }</span>km/h </p>
            <div class="hourSection">
            ${hoursHtml}
            </div>
        </div>
        <div class="daySection">
            ${daysHtml}
        </div>
    </div>`;
  });
}
export { pageLoad };
