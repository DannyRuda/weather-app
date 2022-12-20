import { daysForecast } from "./globalVar";

function getSectionLength(Section) {
  const SectionStyle = window.getComputedStyle(Section);
  const SectionWidth = SectionStyle.getPropertyValue("width");
  const SectionLength = Number(SectionWidth.split("p")[0]);
  return SectionLength;
}

function getElementLength(element) {
  const elementStyle = window.getComputedStyle(element);
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

function getGapWidth(Section) {
  const Style = window.getComputedStyle(Section);
  const gap = Style.getPropertyValue("gap");
  const gapWidth = gap.split("p")[0];
  const gapWidthNumber = Number(gapWidth);
  return gapWidthNumber;
}

function calculateNewLeft(element, deltaY) {
  const section = element.parentElement;
  const sectionLength = getSectionLength(section);
  const elementLength = getElementLength(element);
  const gapWidthNumber = getGapWidth(section);
  const allElementsLength =
    elementLength * section.children.length +
    gapWidthNumber * (section.children.length - 1);
  const maxScrollableWidth = sectionLength - allElementsLength;

  let leftNumber = Number(element.style.left.split("p")[0]);
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
  hourSection.addEventListener("wheel", activeHorizontalScrollHours);
}

function scrollWithDrag(e) {
    e.target.scrollLeft = e.movementX;
}

function addDraggingEventListener() {
    const daySection = document.querySelector(".daySection");
    const hourSection = document.querySelector(".hourSection");
    daySection.addEventListener('mousedown',()=>{
        daySection.addEventListener("mousemove",scrollWithDrag);
    })
    daySection.addEventListener("mouseup",()=>{
        daySection.removeEventListener("mousemove",scrollWithDrag);
    })
}

export { addScrollingEventListener , addDraggingEventListener};
