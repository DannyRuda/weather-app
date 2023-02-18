function changeToggleColorOnPageLoad(weathercon, hour) {
  const styleElement = document.createElement("style");
  switch (weathercon) {
    case "Clear":
      if (hour < 7 || hour > 20) {
        styleElement.innerHTML = `
        input[type="checkbox"] + label::before {
          background-color: rgb(241 230 224);
        }
        
        input[type="checkbox"] + label::after {
          background-color: rgb(136 134 171);
        }`;
      } else {
        styleElement.innerHTML = `
        input[type="checkbox"] + label::before {
          background-color: rgb(83 169 231);
        }
        
        input[type="checkbox"] + label::after {
          background-color: rgb(253 242 162);
        }`;
      }
      break;
    case "Snow":
    case "Rain":
    case "Drizzle":
    case "Clouds":
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
    case "Thunderstorm":
      styleElement.innerHTML = `
        input[type="checkbox"] + label::before {
          background-color: rgb(218, 218, 218);
        }
        
        input[type="checkbox"] + label::after {
          background-color: rgb(255, 255, 255);
        }`;
      break;
    default:
      alert("no weathercon set yet");
  }
  document.head.removeChild(document.head.lastChild);
  document.head.appendChild(styleElement);
}

function smallLoadIcon() {
  document.querySelector(".lds-ripple").classList.add("small");
}

function bigLoadIcon() {
  document.querySelector(".lds-ripple").classList.remove("small");
}

async function fadeOut() {
  console.log("fadeOut")
  const fadeElement = document.querySelector(".fade");
  fadeElement.classList.toggle("in");
  await new Promise((res) => {
    window.setTimeout(() => {
      res();
    }, 500);
  });
}

function fadeIn() {
  console.log("fadeIN")
  const fadeElement = document.querySelector(".fade");
  fadeElement.classList.toggle("in");
}

async function fadeWeatherOut() {
  const weatherCard = document.querySelector(".overlay");
  weatherCard.style.transform = "translate(-50%, -50%) scale(0)";
  weatherCard.style.opacity = "0";

}

function fadeWeatherIn() {
  const weatherCard = document.querySelector(".overlay");
  weatherCard.style.transform = "translate(-50%, -50%) scale(1)";
  weatherCard.style.opacity = "1";


}

function videoEventHandler() {
  fadeIn();
  fadeWeatherIn();
}

function setVideoEventListeners() {
  const video = document.querySelector("video");
  video.addEventListener("play", videoEventHandler);
}

export {
  changeToggleColorOnPageLoad,
  fadeOut,
  fadeIn,
  fadeWeatherOut,
  fadeWeatherIn,
  bigLoadIcon,
  smallLoadIcon,
  setVideoEventListeners,
};
