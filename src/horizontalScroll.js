/* logic to scroll horizontally with mouse wheel */

function activeHorizontalScrollDays(e) {
  const daySection = document.querySelector(".daySection");

  const myInterval = window.setInterval(() => {
    daySection.scrollBy(e.deltaY / 10, 0);
  }, 20);
  window.setTimeout(() => {
    clearInterval(myInterval);
  }, 220);
}

function activeHorizontalScrollHours(e) {
  const hourSection = document.querySelector(".hourSection");

  const myInterval = window.setInterval(() => {
    hourSection.scrollBy(e.deltaY / 10, 0);
  }, 20);
  window.setTimeout(() => {
    clearInterval(myInterval);
  }, 220);
}

function addScrollingEventListener() {
  const daySection = document.querySelector(".daySection");
  const hourSection = document.querySelector(".hourSection");
  daySection.addEventListener("wheel", (e) => {
    activeHorizontalScrollDays(e);
  });
  hourSection.addEventListener("wheel", (e) => {
    hourSection.style.scrollSnapType = "none";
    hourSection.style.scrollBehavior = "auto";
    activeHorizontalScrollHours(e);
  });
}

/* logic to scroll via dragging the elements with the mouse */

function scrollWithDrag(e) {
  const { target } = e;
  if (target.classList.contains("dayData")) {
    const targetParent = target.parentElement;
    targetParent.scrollBy(-e.movementX, 0);
    target.style.left -= e.movementX;
  } else {
    target.scrollBy(-e.movementX, 0);
  }
}

function removePointerEvents(e) {
  e.target.style.pointerEvents = "none";
}

function addDraggingToDays() {
  const daySection = document.querySelector(".daySection");
  const dayElements = daySection.children;
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
    daySection.addEventListener("mousemove", scrollWithDrag);
  });
  daySection.addEventListener("mouseup", () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const day of dayElements) {
      day.removeEventListener("mousemove", removePointerEvents);
      day.style.pointerEvents = "auto";
    }

    daySection.removeEventListener("mousemove", scrollWithDrag);
  });
  daySection.addEventListener("mouseleave", () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const day of dayElements) {
      day.removeEventListener("mousemove", removePointerEvents);
      day.style.pointerEvents = "auto";
    }

    daySection.removeEventListener("mousemove", scrollWithDrag);
  });
}

function addDraggingToHours() {
  const hourSection = document.querySelector(".hourSection");
  const hourElements = hourSection.children;
  // eslint-disable-next-line no-restricted-syntax
  for (const hour of hourElements) {
    hour.addEventListener("mousedown", (e) => {
      scrollWithDrag(e);
      hour.addEventListener("mousemove", removePointerEvents);
    });
    hour.addEventListener("mouseup", () => {
      hour.removeEventListener("mousemove", removePointerEvents);
      hour.style.pointerEvents = "auto";
    });
  }
  hourSection.addEventListener("mousedown", () => {
    hourSection.style.scrollBehavior = "auto";
    hourSection.style.scrollSnapType = "none";
    hourSection.addEventListener("mousemove", scrollWithDrag);
  });
  hourSection.addEventListener("mouseup", () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const hour of hourElements) {
      hour.removeEventListener("mousemove", removePointerEvents);
      hour.style.pointerEvents = "auto";
    }
    hourSection.style.scrollBehavior = "auto";
    hourSection.style.scrollSnapType = "inline mandatory";
    hourSection.removeEventListener("mousemove", scrollWithDrag);
  });
  hourSection.addEventListener("mouseleave", () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const hour of hourElements) {
      hour.removeEventListener("mousemove", removePointerEvents);
      hour.style.pointerEvents = "auto";
    }
    hourSection.style.scrollBehavior = "smooth";
    hourSection.style.scrollSnapType = "inline mandatory";
    hourSection.removeEventListener("mousemove", scrollWithDrag);
  });
}

function addDraggingEventListeners() {
  addDraggingToDays();
  addDraggingToHours();
}

/* logic for scrolling day section one card when clicking on arrow */

function scrollOnClickWithoutTimeout(e) {
  const daySection = document.querySelector(".daySection");
  const dayElements = daySection.children;
  const direction = e.target.classList.contains("forwardArrow")
    ? "right"
    : "left";
  const scrollValue = direction === "right" ? 352 : -352;
  daySection.style.scrollBehavior = "smooth";
  daySection.style.scrollSnapType = "inline proximity";
  // eslint-disable-next-line no-restricted-syntax
  for (const day of dayElements) {
    day.style.pointerEvents = "none";
  }
  daySection.scrollBy(scrollValue,0);
  window.setTimeout(()=>{
    daySection.style.scrollBehavior = "auto";
  daySection.style.scrollSnapType = "none";
  // eslint-disable-next-line no-restricted-syntax
  for (const day of dayElements) {
    day.style.pointerEvents = "auto";
  }
  },300)
}

function addListenersToArrows() {
  const forwardArrow = document.querySelector(".forwardArrow");
  const backArrow = document.querySelector(".backArrow");
  forwardArrow.addEventListener("click", scrollOnClickWithoutTimeout);
  backArrow.addEventListener("click", scrollOnClickWithoutTimeout);
}

export {
  addScrollingEventListener,
  addDraggingEventListeners,
  addListenersToArrows,
};

/* Logic to scroll horizontally smoothly with changing the "left" value on scroll of each element 

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
*/
