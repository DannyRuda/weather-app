import { daysForecast } from "./globalVar";

function getDaySectionLength(daySection) {
  const daySectionStyle = window.getComputedStyle(daySection);
  const daySectionWidth = daySectionStyle.getPropertyValue("width");
  const daySectionLength = Number(daySectionWidth.split("p")[0]);
  return daySectionLength;
}

function getDayElementLength(dayElements) {
  const dayElement = dayElements[0];
  const elementStyle = window.getComputedStyle(dayElement);
  const elementWidth = elementStyle.getPropertyValue("width");
  const elementWidthNumber = Number(elementWidth.split("p")[0]);
  const elementLeftPadding = elementStyle.getPropertyValue("padding-left");
  const elementRightPadding = elementStyle.getPropertyValue("padding-right");

  const elementHorizontalPaddingNumber =
    Number(elementLeftPadding.split("p")[0]) +
    Number(elementRightPadding.split("p")[0]);
  const elementLength = elementHorizontalPaddingNumber + elementWidthNumber;
  return elementLength;
}

function getGapWidth(daySection) {
  const Style = window.getComputedStyle(daySection);
  const gap = Style.getPropertyValue("gap");
  const gapWidth = gap.split("p")[0];
  const gapWidthNumber = Number(gapWidth);
  return gapWidthNumber;
}

function calculateNewLeft(dayElement, deltaY) {
  const dayElements = document.getElementsByClassName("dayData");
  const daySection = document.querySelector(".daySection");
  const daySectionLength = getDaySectionLength(daySection);
  const dayElementLength = getDayElementLength(dayElements);
  const gapWidthNumber = getGapWidth(daySection);
  const allDayElementsLength =
    dayElementLength * daysForecast.length +
    gapWidthNumber * (daysForecast.length - 1);
  const maxScrollableWidth = daySectionLength - allDayElementsLength;

  let leftNumber = Number(dayElement.style.left.split("p")[0]);
  if (leftNumber - deltaY <= 0 && leftNumber - deltaY >= maxScrollableWidth) {
    leftNumber -= deltaY;
    return `${leftNumber}px`;
    // eslint-disable-next-line no-else-return
  } else if (leftNumber - deltaY > 0) {
    return "0px";
  } else if (leftNumber - deltaY < maxScrollableWidth) {
    return `${maxScrollableWidth}px`;
  }
}

function activeHorizontalScrollDays(e) {
  const dayElements = document.getElementsByClassName("dayData");
  // eslint-disable-next-line no-restricted-syntax
  for (const dayElement of dayElements) {
    dayElement.style.left = calculateNewLeft(dayElement, e.deltaY);
  }
}

function activeHorizontalScrollHours(e) {
    const hourElements = document.getElementsByClassName("hourData");
    // eslint-disable-next-line no-restricted-syntax
    for (const hourElement of hourElements) {
      hourElement.style.left = calculateNewLeft(hourElement, e.deltaY);
    }
  }
  

function addScrollingEventListener() {
  const daySection = document.querySelector(".daySection");
  const hourSection = document.querySelector(".hourSection");
  daySection.addEventListener("wheel", activeHorizontalScrollDays);
}

export { addScrollingEventListener };
