import { toggleUnit, daysForecast } from "./globalVar";
import { kelvinToUnit, speedToUnit } from "./helperFunctions";

function toggleClassUnit(element) {
  if (element.classList.contains("celsius")) {
    element.classList.replace("celsius", "fahrenheit");
  } else {
    element.classList.replace("fahrenheit", "celsius");
  }
}

function enableSwitchAnimation() {
  const toggleSwitch = document.querySelector(`input[type="checkbox"]`);
  toggleSwitch.classList.toggle("hover-enabled");
  toggleSwitch.classList.toggle("transition-enabled");
  toggleClassUnit(toggleSwitch);
  window.setTimeout(() => {
    toggleSwitch.classList.toggle("transition-enabled");
    toggleSwitch.classList.toggle("hover-enabled");
  }, 500);
}

function toggleUnitsOnHourElements() {
  const hourElements = document.querySelector(".hourSection").children;
  // eslint-disable-next-line no-restricted-syntax
  for (const hourElement of hourElements) {
    const { indexDay } = hourElement.dataset;
    const { indexHour } = hourElement.dataset;
    const goalTemperature = daysForecast[indexDay].data[indexHour].temperature;
    const tempElement = hourElement.querySelector(".temp");
    if (tempElement.classList.contains("celsius")) {
      tempElement.classList.replace("celsius", "fahrenheit");
    } else {
      tempElement.classList.replace("fahrenheit", "celsius");
    }
    tempElement.innerText = kelvinToUnit(goalTemperature);
  }
}

function toggleUnitsOnDayElements() {
  const dayElements = document.querySelector(".daySection").children;
  // eslint-disable-next-line no-restricted-syntax
  for (const dayElement of dayElements) {
    const { indexDay } = dayElement.dataset;
    const dayObject = daysForecast[indexDay];
    if (dayObject.data.length > 1) {
      const newMinTemp = kelvinToUnit(dayObject.getMinTemp());
      const newMaxTemp = kelvinToUnit(dayObject.getMaxTemp());
      const minTempElement = dayElement.querySelector(".min");
      const maxTempElement = dayElement.querySelector(".max");
      minTempElement.innerText = newMinTemp;
      maxTempElement.innerText = newMaxTemp;
    } else {
      const newTemp = kelvinToUnit(dayObject.data[0].temperature);
      const tempElement = dayElement.querySelector(".temp");
      tempElement.innerText = newTemp;
    }
  }
}

function toggleUnitOnSelectedTemp(indexDay, indexHour) {
  const newTemp = kelvinToUnit(
    daysForecast[indexDay].data[indexHour].temperature
  );
  const selectedTempElement = document.querySelector(".weatherData .temp");
  selectedTempElement.innerText = newTemp;
}

function toggleUnitOnSelectedWind(indexDay, indexHour) {
  const newWindSpeed = speedToUnit(
    daysForecast[indexDay].data[indexHour].windspeed
  );
  const selectedWindElement = document.querySelector(".weatherData .wind");
  selectedWindElement.innerText = newWindSpeed;
}

function toggleUnitsOnSelectedArea() {
  const selectedHour = document.querySelector(".hourData.selected");
  const { indexDay } = selectedHour.dataset;
  const { indexHour } = selectedHour.dataset;
  toggleUnitOnSelectedTemp(indexDay, indexHour);
  toggleUnitOnSelectedWind(indexDay, indexHour);
}

function toggleUnitsOnPage() {
  enableSwitchAnimation();
  toggleUnit();
  toggleUnitsOnSelectedArea();
  toggleUnitsOnDayElements();
  toggleUnitsOnHourElements();
}

export { toggleUnitsOnPage };
