import { kelvinToCelsius } from "./helperFunctions";
import ClearIcon from "./media/clearIcon.svg";
import GithubIcon from "./media/githubIcon.svg";
import LinkedinIcon from "./media/linkedinIcon.svg";
import ClockIcon from "./media/clockIcon.svg";

function createHourElements(day, dayIndex) {
  let htmlString = ``;
  day.data.forEach((hour, i) => {
    htmlString += `<div class="hourData" data-index-hour="${i}" data-index-day="${dayIndex}">
                            <p class="time">${hour.time}</p>
                            <img class="icon" src="${hour.getIconLink()}" width="70" height="70"/>
                            <p class="temp celsius">${kelvinToCelsius(
                              hour.temperature
                            )}°C</p>
                        </div>`;
  });
  return htmlString;
}

function createDayElements(currentWeather, daysForecast) {
  let htmlString = ``;
  daysForecast.forEach((day, i) => {
    htmlString += `<div class="dayData" data-index-day="${i}">
                      <div class="metaAndIcon">
                        <div class="meta">
                            <p class="weekday">${
                              day.getWeekDay() !== currentWeather.getWeekDay()
                                ? day.getWeekDay()
                                : "today"
                            }</p>
                            <p class="date">${day.getMonthAndDayDate("DE")}</p>
                        </div>
                        <img src="${day.getIconLink()}" width="80" height="80"/>
                      </div>
                      <div class="tempScale">
                        <p class="temp celsius">${kelvinToCelsius(
                          day.getMinTemp()
                        )}°C</p>
                        <p class="spacer">-</p>
                        <p class="temp celsius">${kelvinToCelsius(
                          day.getMaxTemp()
                        )}°C</p>
                      </div>
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
      <header>
        <div class="logo">
            <img src="${ClearIcon}" width="50" height="50">
            <p class="siteName">Weather App</p>
        </div>
        <input class="search" lang="DE" type="search" placeholder="Stadt, Landcode(DE)"/>
        <input type="range" min="0" max="1" value="1" class="units"/>
        <div class="socials">
            <p class="myName">By DannyRuda</p>
            <img src="${GithubIcon}" width="30" height="30"/>
            <img src="${LinkedinIcon}" width="30" height="30"/>
        </div>
      </header>
      <div class="detailed">
        <div class="selectedWeather">
          <div class="weatherData">
            <div class="iconAndTemp">
                <img src="${currentWeather.getIconLink()}" width="85" height="75" class="icon selected"/>
                <p class="temp celsius">${kelvinToCelsius(
                  currentWeather.temperature
                )}°C</p>
            </div>
            <div class="text">
                <p lang="DE">Niederschlag:</p>
                <p lang="DE">Luftfeuchte:</p>
                <p lang="DE">Windgeschw:</p>
            </div>
            <div class="variables">
                <p class="pop">${currentWeather.precipitation}%</p>
                <p class="humid">${currentWeather.humidity}%</p>
                <p class="wind metric">${currentWeather.windspeed} km/h</p>
            </div>
          </div>
          <div class="metaData">
            <p class="date">${currentWeather.getWeekDay()}, ${currentWeather.getMonthAndDayDate(
      "DE"
    )}</p>
            <p class="city country">${cityAndCountry}</p>
            <div class="time">
                <img src="${ClockIcon}" width="30" height="30"/>
                <p class="time">${currentWeather.getCurrentTime()}</p>
            </div>
          </div>
      </div>
      <div class="hourSection">
        ${hoursHtml}
      </div>
    
    </div>
      <div class="daySlider">
        <div class="backArrow">

        </div>
        <div class="daySection">
          ${daysHtml}
        </div>
      <div class="forwardArrow">

    </div>
</div>
    </div>`;
  });
}
export { pageLoad };
