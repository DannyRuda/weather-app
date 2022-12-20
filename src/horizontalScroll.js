import { daysForecast, setMousedown, toggleMousedown } from "./globalVar";

import {
  addEventListenersToElements,
  removeListenersFromHourAndDataElements,
  addListenersToHourAndDataElements,
} from "./domCreation";

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
  const sectionScrolledLeft = section.scrollLeft;
  const sectionLength = getSectionLength(section);
  const elementLength = getElementLength(element);
  const gapWidthNumber = getGapWidth(section);
  const allElementsLength =
    elementLength * section.children.length +
    gapWidthNumber * (section.children.length - 1);
  const maxScrollableWidth =
    sectionLength - allElementsLength + sectionScrolledLeft;

  let leftNumber = Number(element.style.left.split("p")[0]);
  if (
    leftNumber - deltaY <= sectionScrolledLeft &&
    leftNumber - deltaY >= maxScrollableWidth
  ) {
    leftNumber -= deltaY;

    return `${leftNumber}px`;
    // eslint-disable-next-line no-else-return
  } else if (leftNumber - deltaY > sectionScrolledLeft) {
    return `${sectionScrolledLeft}px`;
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

function resetScroll(section, elements) {
  const firstElement = elements[0];
  const daySection = section;
  const elementsLeftNumber = Number(firstElement.style.left.split("p")[0]);
  console.log("element left number",elementsLeftNumber);
  if(elementsLeftNumber!==0) {
    daySection.scrollLeft = -elementsLeftNumber
    console.log("section scroll left",section.scrollLeft);
    // eslint-disable-next-line no-restricted-syntax
    for (const element of elements) {
      element.style.transition = "none";
      element.style.left = "0px";
      element.style.transition = "transform 0.3s, left 0.25s";
    }
  }
}

function scrollWithDrag(e) {
  const { target } = e;
  if (target.classList.contains("dayData")) {
    const targetParent = target.parentElement;
    targetParent.scrollBy(-e.movementX, 0);
    target.style.left -= e.movementX;
  } else {
    target.scrollBy(-e.movementX, 0);
  }
  console.log(document.querySelector(".daySection").scrollLeft);
}

function removePointerEvents(e) {
  e.target.style.pointerEvents = "none";
}

function addDraggingEventListener() {
  const daySection = document.querySelector(".daySection");
  const dayElements = daySection.children;
  console.log(dayElements);
  // eslint-disable-next-line no-restricted-syntax
  for (const day of dayElements) {
    day.addEventListener("mousedown", (e) => {
      scrollWithDrag(e);
      day.addEventListener("mousemove", removePointerEvents);
    });
    day.addEventListener("mouseup", () => {
      day.removeEventListener("mousemove", removePointerEvents);
      day.style.pointerEvents = "auto";
    });
  }
  daySection.addEventListener("mousedown", () => {
    daySection.style.scrollBehavior = "auto";
    daySection.style.scrollSnapType = "none";
    daySection.addEventListener("mousemove", scrollWithDrag);
  });
  daySection.addEventListener("mouseup", () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const day of dayElements) {
      day.removeEventListener("mousemove", removePointerEvents);
      day.style.pointerEvents = "auto";
    }
    daySection.style.scrollBehavior = "smooth";
    daySection.style.scrollSnapType = "inline mandatory";
    daySection.removeEventListener("mousemove", scrollWithDrag);
  });
  daySection.addEventListener("mouseleave", () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const day of dayElements) {
      day.removeEventListener("mousemove", removePointerEvents);
      day.style.pointerEvents = "auto";
    }
    daySection.style.scrollBehavior = "smooth";
    daySection.style.scrollSnapType = "inline mandatory";
    daySection.removeEventListener("mousemove", scrollWithDrag);
  });
}

/* Horizontal scrolling on dragging with mouse */

export { addScrollingEventListener, addDraggingEventListener };
