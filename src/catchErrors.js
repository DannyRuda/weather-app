function locationNotFound() {
    const detailed = document.querySelector(".detailed");
    const daySlider = document.querySelector(".daySlider");
    daySlider.replaceChildren();
    const errorTemplate = document.querySelector("#error").content.cloneNode(true);
    console.log(errorTemplate)
    detailed.replaceChildren(errorTemplate);
}

export {locationNotFound}