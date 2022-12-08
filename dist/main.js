/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".video {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    min-height: 100%;\r\n\r\n}\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%) scale(1);\r\n    \r\n    max-height: 100vh;\r\n    \r\n    z-index: 4;\r\n    width: 80%;\r\n    height: 90%;\r\n    border-radius: 30px;\r\n    backdrop-filter: blur(100px);\r\n    overflow: scroll;\r\n}\r\n\r\ndiv.currentW {\r\n    width: 85%;\r\n    height: 70%;\r\n    background-color: white;\r\n    border-radius: 30px;\r\n    position: fixed;\r\n    top:30%;\r\n    left:50%;\r\n    transform: translate(-50%, -30%) scale(1);\r\n    filter: drop-shadow(0 1px 1px black);\r\n    overflow:scroll;\r\n}\r\n\r\n.icon {\r\n    width: 100px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,WAAW;IACX,gBAAgB;;AAEpB;;AAEA;IACI,eAAe;IACf,OAAO;IACP,QAAQ;IACR,yCAAyC;;IAEzC,iBAAiB;;IAEjB,UAAU;IACV,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,4BAA4B;IAC5B,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,OAAO;IACP,QAAQ;IACR,yCAAyC;IACzC,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB","sourcesContent":[".video {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    min-height: 100%;\r\n\r\n}\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%) scale(1);\r\n    \r\n    max-height: 100vh;\r\n    \r\n    z-index: 4;\r\n    width: 80%;\r\n    height: 90%;\r\n    border-radius: 30px;\r\n    backdrop-filter: blur(100px);\r\n    overflow: scroll;\r\n}\r\n\r\ndiv.currentW {\r\n    width: 85%;\r\n    height: 70%;\r\n    background-color: white;\r\n    border-radius: 30px;\r\n    position: fixed;\r\n    top:30%;\r\n    left:50%;\r\n    transform: translate(-50%, -30%) scale(1);\r\n    filter: drop-shadow(0 1px 1px black);\r\n    overflow:scroll;\r\n}\r\n\r\n.icon {\r\n    width: 100px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/media/clear.mp4":
/*!*****************************!*\
  !*** ./src/media/clear.mp4 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/clear.mp4");

/***/ }),

/***/ "./src/media/cloudy.mp4":
/*!******************************!*\
  !*** ./src/media/cloudy.mp4 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/cloudy.mp4");

/***/ }),

/***/ "./src/media/rain.mp4":
/*!****************************!*\
  !*** ./src/media/rain.mp4 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/rain.mp4");

/***/ }),

/***/ "./src/media/snow.mp4":
/*!****************************!*\
  !*** ./src/media/snow.mp4 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/snow.mp4");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domCreation.js":
/*!****************************!*\
  !*** ./src/domCreation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");


function createHourElements(day, dayIndex) {
  let htmlString = ``;
  day.data.forEach((hour, i) => {
    htmlString += `<div class="hour" data-index-hour="${i}" data-index-day="${dayIndex}">
                            <p id="time">${hour.time}</p>
                            <img class="icon" src="${hour.getIconLink()}">
                            <p id="temp">${(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelsius)(
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
                            ? `<span id="minTemp">${(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelsius)(
                                day.getMinTemp()
                              )}</span>°C - <span id="maxTemp">${(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelsius)(
                                day.getMaxTemp()
                              )}</span>°C`
                            : (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelsius)(day.data[0].temperature)
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
            <p class="currentW" id="temp">${(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelsius)(
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



/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "celsiusToFahrenheit": () => (/* binding */ celsiusToFahrenheit),
/* harmony export */   "fahrenheitToCelsius": () => (/* binding */ fahrenheitToCelsius),
/* harmony export */   "kelvinToCelsius": () => (/* binding */ kelvinToCelsius),
/* harmony export */   "kelvinToFahrenheit": () => (/* binding */ kelvinToFahrenheit),
/* harmony export */   "numberToWord": () => (/* binding */ numberToWord),
/* harmony export */   "splitIntoDays": () => (/* binding */ splitIntoDays),
/* harmony export */   "writeWeatherintoObjects": () => (/* binding */ writeWeatherintoObjects)
/* harmony export */ });
/* harmony import */ var _weatherObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherObjects */ "./src/weatherObjects.js");


function numberToWord(number) {
  const numbers = ["one", "two", "three", "four", "five", "six"];
  return numbers[number];
}

function splitIntoDays(forecastData) {
  const hourlyDataObjects = [];
  const dayDataArrays = [];
  forecastData.list.forEach((item) => {
    hourlyDataObjects.push((0,_weatherObjects__WEBPACK_IMPORTED_MODULE_0__.createHourObject)(item));
  });
  if (hourlyDataObjects[0].date.getHours() > 2) {
    for (let j = 0; j < 6; j += 1) {
      const startingDayDate = hourlyDataObjects[0].date.getDate();
      const dayData = hourlyDataObjects.filter(
        (hourData) => hourData.date.getDate() === startingDayDate
      );
      hourlyDataObjects.splice(0, dayData.length);
      dayDataArrays.push(dayData);
    }
  } else {
    for (let j = 0; j < 5; j += 1) {
      const startingDayDate = hourlyDataObjects[0].date.getDate();
      const dayData = hourlyDataObjects.filter(
        (hourData) => hourData.date.getDate() === startingDayDate
      );
      hourlyDataObjects.splice(0, dayData.length);
      dayDataArrays.push(dayData);
    }
  }
  return dayDataArrays;
}

function addCurrentWeatherToForecast(currentWeather, daysForecast) {
  if(currentWeather.getWeekDay() === daysForecast[0].getWeekDay()) {
    const currentHour = {
      date: currentWeather.date,
      time: currentWeather.getCurrentTime(),
      temperature: currentWeather.temperature,
      precipitation: currentWeather.precipitation,
      humidity: currentWeather.humidity,
      windspeed: currentWeather.windspeed,
      weathercon: currentWeather.weathercon,
      getIconLink: currentWeather.getIconLink,
      getBackgroundLink: currentWeather.getBackgroundLink
    }
    daysForecast[0].data.splice(0,0,currentHour);
  } else {
      const currentHour = {
      date: currentWeather.date,
      time: currentWeather.getCurrentTime(),
      temperature: currentWeather.temperature,
      precipitation: currentWeather.precipitation,
      humidity: currentWeather.humidity,
      windspeed: currentWeather.windspeed,
      weathercon: currentWeather.weathercon,
      getIconLink: currentWeather.getIconLink,
      getBackgroundLink: currentWeather.getBackgroundLink
    };
    const today = (0,_weatherObjects__WEBPACK_IMPORTED_MODULE_0__.createDayObject)([currentHour]);
    daysForecast.splice(0,0,today);
  }
}

async function writeWeatherintoObjects(currentWeatherPromise, forecastPromise) {
  return new Promise((resolve, reject) => {
    Promise.all([currentWeatherPromise, forecastPromise]).then((values) => {
      const daysForecast = [];
      const currentData = values[0];
      const forecast = values[1];
      const weatherDataDays = splitIntoDays(values[1]);
      const currentWeather = (0,_weatherObjects__WEBPACK_IMPORTED_MODULE_0__.createCurrentWeather)(
        new Date(currentData.dt * 1000),
        currentData.coord.lon,
        currentData.coord.lat,
        currentData.main.temp,
        forecast.list[0].pop,
        currentData.main.humidity,
        currentData.wind.speed,
        currentData.weather[0].main
      );
      for (let i = 0; i < weatherDataDays.length; i += 1) {
        const dayData = weatherDataDays[i];
        daysForecast[i] = (0,_weatherObjects__WEBPACK_IMPORTED_MODULE_0__.createDayObject)(dayData);
      }
      addCurrentWeatherToForecast(currentWeather,daysForecast);
      resolve([currentWeather, daysForecast]);
    });
  });
}

function kelvinToFahrenheit(temp) {
  return Math.round((temp - 273.15) * 1.8 + 32.0);
}

function kelvinToCelsius(temp) {
  return Math.round(temp - 273.15);
}

function fahrenheitToCelsius(temp) {
  return Math.round((temp - 32) / 1.8);
}

function celsiusToFahrenheit(temp) {
  return Math.round(temp * 1.8 + 32)
}



/***/ }),

/***/ "./src/testing.js":
/*!************************!*\
  !*** ./src/testing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testPageLoadData": () => (/* binding */ testPageLoadData)
/* harmony export */ });
function testPageLoadData(currentWeather, daysForecast, kelvinToCelsius,kelvinToFahrenheit) {
  console.log("CURRENT WEATHER CARD!!!!!!!!!!!!!!");
  console.log("Icon: ", currentWeather.getIconLink());
  console.log("Background: ", currentWeather.getBackgroundLink());
  console.log(
    "temperature in °C: ",
    kelvinToCelsius(currentWeather.temperature)
  );
  console.log(
    "temperature in °F: ",
    kelvinToFahrenheit(currentWeather.temperature)
  );
  console.log("pop: ", currentWeather.precipitation);
  console.log("windspeed: ", currentWeather.windspeed);
  console.log("humidity: ", currentWeather.humidity);
  console.log("Day: ", currentWeather.getWeekDay());
  console.log("Month and Day Date: ", currentWeather.getMonthAndDayDate("DE"));
  currentWeather
    .getCityNameAndCountryCode()
    .then((cityCountry) => {
      console.log("City and Country: ", cityCountry);
    })
    .then(() => {
      console.log("Time: ", currentWeather.getCurrentTime());
      console.log("HOUR DATA SECTION !!!!!!!!!!!!!!!!!!");
      daysForecast[0].data.forEach((hour) => {
        console.log("Time: ", hour.time);
        console.log("Icon: ", hour.getIconLink());
        console.log("Temperature in °C: ", kelvinToCelsius(hour.temperature));
        console.log("Temperature in °F: ", kelvinToFahrenheit(hour.temperature));
      });
      console.log("DAY CARDS SECTION!!!!!!!!!!!!!!!!!");
      daysForecast.forEach((day) => {
        console.log(
          "Weekday: ",
          day.getWeekDay() !== currentWeather.getWeekDay()
            ? day.getWeekDay()
            : "today"
        );
        console.log("MonthAndDay: ", day.getMonthAndDayDate("DE"));
        console.log("Icon: ", day.getIconLink());
        console.log("Min Temperature in °C: ", kelvinToCelsius(day.getMinTemp()));
        console.log("Max Temperature in °C: ", kelvinToCelsius(day.getMaxTemp()));
        console.log("Min Temperature in °F: ", kelvinToFahrenheit(day.getMinTemp()));
        console.log("Max Temperature in °F: ", kelvinToFahrenheit(day.getMaxTemp()));
      });
    });
}



/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCityCoordinates": () => (/* binding */ getCityCoordinates),
/* harmony export */   "getCurrentWeather": () => (/* binding */ getCurrentWeather),
/* harmony export */   "getFiveDayForecast": () => (/* binding */ getFiveDayForecast)
/* harmony export */ });
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
function getCityCoordinates(cityName, country) {
  return new Promise((resolve, reject) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q={${cityName}},{${country}}&appid=d145974fac8fb803900422c2cc1d620e`
    )
      .then((response) => {
        if (response.status === 200) {
          console.log("status was 200");
          return response.json();
        }
      })
      .then((value) => {
        resolve([value[0].lat, value[0].lon]);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getCurrentWeather(city, country) {
  if (arguments.length === 2) {
    return new Promise((resolve, reject) => {
      getCityCoordinates(city, country).then((coordinates) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=d145974fac8fb803900422c2cc1d620e`
        )
          .then((response) => response.json())
          .then((value) => Promise.resolve(value))
          .then((value) => {
            resolve(value);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  } else if (arguments.length === 1) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city[0]}&lon=${city[1]}&appid=d145974fac8fb803900422c2cc1d620e`
      )
        .then((response) => response.json())
        .then((value) => Promise.resolve(value))
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

function getFiveDayForecast(city, country) {
  if (arguments.length === 2) {
    return new Promise((resolve, reject) => {
      getCityCoordinates(city, country).then((coordinates) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=d145974fac8fb803900422c2cc1d620e`
        )
          .then((response) => response.json())
          .then((value) => Promise.resolve(value))
          .then((value) => {
            resolve(value);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  } else if (arguments.length === 1) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city[0]}&lon=${city[1]}&appid=d145974fac8fb803900422c2cc1d620e`
      )
        .then((response) => response.json())
        .then((value) => Promise.resolve(value))
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}




/***/ }),

/***/ "./src/weatherObjects.js":
/*!*******************************!*\
  !*** ./src/weatherObjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCurrentWeather": () => (/* binding */ createCurrentWeather),
/* harmony export */   "createDayObject": () => (/* binding */ createDayObject),
/* harmony export */   "createHourObject": () => (/* binding */ createHourObject)
/* harmony export */ });
/* harmony import */ var _media_clear_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/clear.mp4 */ "./src/media/clear.mp4");
/* harmony import */ var _media_cloudy_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/cloudy.mp4 */ "./src/media/cloudy.mp4");
/* harmony import */ var _media_rain_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/rain.mp4 */ "./src/media/rain.mp4");
/* harmony import */ var _media_snow_mp4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/snow.mp4 */ "./src/media/snow.mp4");
/* harmony import */ var _media_clearIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/clearIcon.svg */ "./src/media/clearIcon.svg");
/* harmony import */ var _media_cloudyIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/cloudyIcon.svg */ "./src/media/cloudyIcon.svg");
/* harmony import */ var _media_rainIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media/rainIcon.svg */ "./src/media/rainIcon.svg");
/* harmony import */ var _media_drizzleIcon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media/drizzleIcon.svg */ "./src/media/drizzleIcon.svg");
/* harmony import */ var _media_snowIcon_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media/snowIcon.svg */ "./src/media/snowIcon.svg");










const mediaLinks = (state) => ({
  getBackgroundLink() {
    let videoLink = "";
    const weathercon = state.weathercon
      ? state.weathercon
      : state.getDominatingWeathericon();
    switch (weathercon) {
      case "Clouds":
        videoLink = `${_media_cloudy_mp4__WEBPACK_IMPORTED_MODULE_1__["default"]}`;
        break;
      case "Clear":
        videoLink = `${_media_clear_mp4__WEBPACK_IMPORTED_MODULE_0__["default"]}`;
        break;
      case "Snow":
        videoLink = `${_media_snow_mp4__WEBPACK_IMPORTED_MODULE_3__["default"]}`;
        break;
      case "Rain":
        videoLink = `${_media_rain_mp4__WEBPACK_IMPORTED_MODULE_2__["default"]}`;
        break;
      case "Drizzle":
        videoLink = `${_media_rain_mp4__WEBPACK_IMPORTED_MODULE_2__["default"]}`;
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
        iconLink = `${_media_cloudyIcon_svg__WEBPACK_IMPORTED_MODULE_5__}`;
        break;
      case "Clear":
        iconLink = `${_media_clearIcon_svg__WEBPACK_IMPORTED_MODULE_4__}`;
        break;
      case "Snow":
        iconLink = `${_media_snowIcon_svg__WEBPACK_IMPORTED_MODULE_8__}`;
        break;
      case "Rain":
        iconLink = `${_media_rainIcon_svg__WEBPACK_IMPORTED_MODULE_6__}`;
        break;
      case "Drizzle":
        iconLink = `${_media_drizzleIcon_svg__WEBPACK_IMPORTED_MODULE_7__}`;
        break;
      default:
        alert("no weathercon set yet");
    }
    return iconLink;
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
        ? `${date.getMinutes()}0`
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




/***/ }),

/***/ "./src/media/clearIcon.svg":
/*!*********************************!*\
  !*** ./src/media/clearIcon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0e7a8d91e9d6b2f0a46.svg";

/***/ }),

/***/ "./src/media/cloudyIcon.svg":
/*!**********************************!*\
  !*** ./src/media/cloudyIcon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6e2425b137a128bf117.svg";

/***/ }),

/***/ "./src/media/drizzleIcon.svg":
/*!***********************************!*\
  !*** ./src/media/drizzleIcon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a42f7cbb0c7206e0afb9.svg";

/***/ }),

/***/ "./src/media/rainIcon.svg":
/*!********************************!*\
  !*** ./src/media/rainIcon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e45158f2f79593dd25a0.svg";

/***/ }),

/***/ "./src/media/snowIcon.svg":
/*!********************************!*\
  !*** ./src/media/snowIcon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e56f993727eb41175eae.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherAPI */ "./src/weatherAPI.js");
/* harmony import */ var _testing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testing */ "./src/testing.js");
/* harmony import */ var _domCreation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domCreation */ "./src/domCreation.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* eslint-disable prefer-promise-reject-errors */










let city = "";
let cityCoords = [];
let country = "";
let currentWeather = {};
let daysForecast = {};

(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.writeWeatherintoObjects)(
  (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)("sidney", "AU"),
  (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getFiveDayForecast)("sidney", "AU")
)
  .then((weatherObjects) => {
    [currentWeather, daysForecast] = weatherObjects;
  })
  .then(() => {
    document.body.innerHTML = `<video class ="video" autoplay muted loop id="myVideo">
    <source src="${currentWeather.getBackgroundLink()}" type="video/mp4">
    </video><div class="overlay"><div class="currentW"><img class="icon" src="${currentWeather.getIconLink()}"></div></div>
    `;
  });

new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (locationObject) => {
        resolve([
          locationObject.coords.latitude,
          locationObject.coords.longitude,
        ]);
      },
      (err) => {
        reject(["düsseldorf", "DE"]);
        throw err;
      }
    );
  } else {
    reject(["düsseldorf", "DE"]);
  }
})
  .then((location) =>
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.writeWeatherintoObjects)(
      (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)(location),
      (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getFiveDayForecast)(location)
    )
  )
  .catch((fallbackLocation) =>
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.writeWeatherintoObjects)(
      (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)(fallbackLocation[0], fallbackLocation[1]),
      (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getFiveDayForecast)(fallbackLocation[0], fallbackLocation[1])
    )
  )
  .then((weatherObjects) => {
    // eslint-disable-next-line prefer-destructuring
    [currentWeather, daysForecast] = weatherObjects;
    (0,_testing__WEBPACK_IMPORTED_MODULE_2__.testPageLoadData)(
      currentWeather,
      daysForecast,
      _helperFunctions__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelsius,
      _helperFunctions__WEBPACK_IMPORTED_MODULE_0__.kelvinToFahrenheit
    );
  })
  .catch((err) => {
    throw err;
  })
  .then(() => {
    (0,_domCreation__WEBPACK_IMPORTED_MODULE_3__.pageLoad)(currentWeather,daysForecast);
  });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsSUFBSSx5RUFBdUI7QUFDM0IsTUFBTSw4REFBaUI7QUFDdkIsTUFBTSwrREFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5RUFBdUI7QUFDM0IsTUFBTSw4REFBaUI7QUFDdkIsTUFBTSwrREFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxNQUFNLDZEQUFlO0FBQ3JCLE1BQU0sZ0VBQWtCO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLHNEQUFRO0FBQ1osR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tZWRpYS9jbGVhci5tcDQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbWVkaWEvY2xvdWR5Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tZWRpYS9yYWluLm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tZWRpYS9zbm93Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbUNyZWF0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90ZXN0aW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlck9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi52aWRlbyB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6NTAlO1xcclxcbiAgICBsZWZ0OjUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICAgIFxcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgXFxyXFxuICAgIHotaW5kZXg6IDQ7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAwcHgpO1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuY3VycmVudFcge1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBoZWlnaHQ6IDcwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOjMwJTtcXHJcXG4gICAgbGVmdDo1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zMCUpIHNjYWxlKDEpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDFweCBibGFjayk7XFxyXFxuICAgIG92ZXJmbG93OnNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsUUFBUTtJQUNSLHlDQUF5Qzs7SUFFekMsaUJBQWlCOztJQUVqQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUix5Q0FBeUM7SUFDekMsb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi52aWRlbyB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6NTAlO1xcclxcbiAgICBsZWZ0OjUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICAgIFxcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgXFxyXFxuICAgIHotaW5kZXg6IDQ7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAwcHgpO1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuY3VycmVudFcge1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBoZWlnaHQ6IDcwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOjMwJTtcXHJcXG4gICAgbGVmdDo1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zMCUpIHNjYWxlKDEpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDFweCBibGFjayk7XFxyXFxuICAgIG92ZXJmbG93OnNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9jbGVhci5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL2Nsb3VkeS5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL3JhaW4ubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9zbm93Lm1wNFwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBrZWx2aW5Ub0NlbHNpdXMgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJFbGVtZW50cyhkYXksIGRheUluZGV4KSB7XHJcbiAgbGV0IGh0bWxTdHJpbmcgPSBgYDtcclxuICBkYXkuZGF0YS5mb3JFYWNoKChob3VyLCBpKSA9PiB7XHJcbiAgICBodG1sU3RyaW5nICs9IGA8ZGl2IGNsYXNzPVwiaG91clwiIGRhdGEtaW5kZXgtaG91cj1cIiR7aX1cIiBkYXRhLWluZGV4LWRheT1cIiR7ZGF5SW5kZXh9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInRpbWVcIj4ke2hvdXIudGltZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvblwiIHNyYz1cIiR7aG91ci5nZXRJY29uTGluaygpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0ZW1wXCI+JHtrZWx2aW5Ub0NlbHNpdXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIudGVtcGVyYXR1cmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9wrBDPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gIH0pO1xyXG4gIHJldHVybiBodG1sU3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXlFbGVtZW50cyhjdXJyZW50V2VhdGhlciwgZGF5c0ZvcmVjYXN0KSB7XHJcbiAgbGV0IGh0bWxTdHJpbmcgPSBgYDtcclxuICBkYXlzRm9yZWNhc3QuZm9yRWFjaCgoZGF5LCBpKSA9PiB7XHJcbiAgICBodG1sU3RyaW5nICs9IGA8ZGl2IGNsYXNzPVwiZGF5XCIgZGF0YS1pbmRleC1kYXk9XCIke2l9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwid2Vla2RheVwiPiR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5LmdldFdlZWtEYXkoKSAhPT0gY3VycmVudFdlYXRoZXIuZ2V0V2Vla0RheSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRheS5nZXRXZWVrRGF5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0b2RheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiJHtkYXkuZ2V0SWNvbkxpbmsoKX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXkuZGF0YS5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGA8c3BhbiBpZD1cIm1pblRlbXBcIj4ke2tlbHZpblRvQ2Vsc2l1cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXkuZ2V0TWluVGVtcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PC9zcGFuPsKwQyAtIDxzcGFuIGlkPVwibWF4VGVtcFwiPiR7a2VsdmluVG9DZWxzaXVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheS5nZXRNYXhUZW1wKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX08L3NwYW4+wrBDYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBrZWx2aW5Ub0NlbHNpdXMoZGF5LmRhdGFbMF0udGVtcGVyYXR1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICB9KTtcclxuICByZXR1cm4gaHRtbFN0cmluZztcclxufVxyXG4vKlxyXG5mdW5jdGlvbiBjaGFuZ2VCYWNrZ3JvdW5kKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc291cmNlKS5zcmMgPVxyXG4gICAgZGF5c0ZvcmVjYXN0W2RhdGEgLSBpbmRleCAtIGRheV0uZGF0YVtcclxuICAgICAgZGF0YSAtIGluZGV4IC0gaG91clxyXG4gICAgXS5nZXRCYWNrZ3JvdW5kTGluaygpO1xyXG59XHJcbiovXHJcbmZ1bmN0aW9uIHBhZ2VMb2FkKGN1cnJlbnRXZWF0aGVyLCBkYXlzRm9yZWNhc3QpIHtcclxuICBjb25zdCBob3Vyc0h0bWwgPSBjcmVhdGVIb3VyRWxlbWVudHMoZGF5c0ZvcmVjYXN0WzBdLCAwKTtcclxuICBjb25zdCBkYXlzSHRtbCA9IGNyZWF0ZURheUVsZW1lbnRzKGN1cnJlbnRXZWF0aGVyLCBkYXlzRm9yZWNhc3QpO1xyXG4gIGN1cnJlbnRXZWF0aGVyLmdldENpdHlOYW1lQW5kQ291bnRyeUNvZGUoKS50aGVuKChjaXR5QW5kQ291bnRyeSkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuaW5uZXJIVE1MID0gYFxyXG4gICAgPHZpZGVvIGNsYXNzID1cInZpZGVvXCIgYXV0b3BsYXkgbXV0ZWQgbG9vcCBpZD1cIm15VmlkZW9cIj5cclxuICAgICAgICA8c291cmNlIHNyYz1cIiR7Y3VycmVudFdlYXRoZXIuZ2V0QmFja2dyb3VuZExpbmsoKX1cIiB0eXBlPVwidmlkZW8vbXA0XCI+XHJcbiAgICA8L3ZpZGVvPlxyXG4gICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudFdcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjdXJyZW50V1wiIGlkPVwiZGF0ZVwiPiR7Y3VycmVudFdlYXRoZXIuZ2V0TW9udGhBbmREYXlEYXRlKFxyXG4gICAgICAgICAgICAgIFwiREVcIlxyXG4gICAgICAgICAgICApfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjdXJyZW50V1wiIGlkPVwiY2l0eVwiPiR7Y2l0eUFuZENvdW50cnl9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImN1cnJlbnRXXCIgaWQ9XCJ0aW1lXCI+JHtjdXJyZW50V2VhdGhlci5nZXRDdXJyZW50VGltZSgpfTwvcD5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImljb25cIiBzcmM9XCIke2N1cnJlbnRXZWF0aGVyLmdldEljb25MaW5rKCl9XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY3VycmVudFdcIiBpZD1cInRlbXBcIj4ke2tlbHZpblRvQ2Vsc2l1cyhcclxuICAgICAgICAgICAgICBjdXJyZW50V2VhdGhlci50ZW1wZXJhdHVyZVxyXG4gICAgICAgICAgICApfcKwQzwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjdXJyZW50V1wiPk5pZWRlcnNjaGxhZzogPHNwYW4gaWQ9XCJwb3BcIj4ke1xyXG4gICAgICAgICAgICAgIGN1cnJlbnRXZWF0aGVyLnByZWNpcGl0YXRpb24gKiAxMDBcclxuICAgICAgICAgICAgfTwvc3Bhbj4lIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjdXJyZW50V1wiPkx1ZnRmZXVjaHRlOiA8c3BhbiBpZD1cImh1bWlkXCI+JHtcclxuICAgICAgICAgICAgICBjdXJyZW50V2VhdGhlci5odW1pZGl0eVxyXG4gICAgICAgICAgICB9PC9zcGFuPiUgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImN1cnJlbnRXXCI+V2luZGdlc2NodzogPHNwYW4gaWQ9XCJ3aW5kXCI+JHtcclxuICAgICAgICAgICAgICBjdXJyZW50V2VhdGhlci53aW5kc3BlZWRcclxuICAgICAgICAgICAgfTwvc3Bhbj5rbS9oIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICR7aG91cnNIdG1sfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5U2VjdGlvblwiPlxyXG4gICAgICAgICAgICAke2RheXNIdG1sfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICB9KTtcclxufVxyXG5leHBvcnQgeyBwYWdlTG9hZCB9O1xyXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZUhvdXJPYmplY3QsXHJcbiAgY3JlYXRlQ3VycmVudFdlYXRoZXIsXHJcbiAgY3JlYXRlRGF5T2JqZWN0LFxyXG59IGZyb20gXCIuL3dlYXRoZXJPYmplY3RzXCI7XHJcblxyXG5mdW5jdGlvbiBudW1iZXJUb1dvcmQobnVtYmVyKSB7XHJcbiAgY29uc3QgbnVtYmVycyA9IFtcIm9uZVwiLCBcInR3b1wiLCBcInRocmVlXCIsIFwiZm91clwiLCBcImZpdmVcIiwgXCJzaXhcIl07XHJcbiAgcmV0dXJuIG51bWJlcnNbbnVtYmVyXTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3BsaXRJbnRvRGF5cyhmb3JlY2FzdERhdGEpIHtcclxuICBjb25zdCBob3VybHlEYXRhT2JqZWN0cyA9IFtdO1xyXG4gIGNvbnN0IGRheURhdGFBcnJheXMgPSBbXTtcclxuICBmb3JlY2FzdERhdGEubGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBob3VybHlEYXRhT2JqZWN0cy5wdXNoKGNyZWF0ZUhvdXJPYmplY3QoaXRlbSkpO1xyXG4gIH0pO1xyXG4gIGlmIChob3VybHlEYXRhT2JqZWN0c1swXS5kYXRlLmdldEhvdXJzKCkgPiAyKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDY7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBzdGFydGluZ0RheURhdGUgPSBob3VybHlEYXRhT2JqZWN0c1swXS5kYXRlLmdldERhdGUoKTtcclxuICAgICAgY29uc3QgZGF5RGF0YSA9IGhvdXJseURhdGFPYmplY3RzLmZpbHRlcihcclxuICAgICAgICAoaG91ckRhdGEpID0+IGhvdXJEYXRhLmRhdGUuZ2V0RGF0ZSgpID09PSBzdGFydGluZ0RheURhdGVcclxuICAgICAgKTtcclxuICAgICAgaG91cmx5RGF0YU9iamVjdHMuc3BsaWNlKDAsIGRheURhdGEubGVuZ3RoKTtcclxuICAgICAgZGF5RGF0YUFycmF5cy5wdXNoKGRheURhdGEpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBzdGFydGluZ0RheURhdGUgPSBob3VybHlEYXRhT2JqZWN0c1swXS5kYXRlLmdldERhdGUoKTtcclxuICAgICAgY29uc3QgZGF5RGF0YSA9IGhvdXJseURhdGFPYmplY3RzLmZpbHRlcihcclxuICAgICAgICAoaG91ckRhdGEpID0+IGhvdXJEYXRhLmRhdGUuZ2V0RGF0ZSgpID09PSBzdGFydGluZ0RheURhdGVcclxuICAgICAgKTtcclxuICAgICAgaG91cmx5RGF0YU9iamVjdHMuc3BsaWNlKDAsIGRheURhdGEubGVuZ3RoKTtcclxuICAgICAgZGF5RGF0YUFycmF5cy5wdXNoKGRheURhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZGF5RGF0YUFycmF5cztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ3VycmVudFdlYXRoZXJUb0ZvcmVjYXN0KGN1cnJlbnRXZWF0aGVyLCBkYXlzRm9yZWNhc3QpIHtcclxuICBpZihjdXJyZW50V2VhdGhlci5nZXRXZWVrRGF5KCkgPT09IGRheXNGb3JlY2FzdFswXS5nZXRXZWVrRGF5KCkpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRIb3VyID0ge1xyXG4gICAgICBkYXRlOiBjdXJyZW50V2VhdGhlci5kYXRlLFxyXG4gICAgICB0aW1lOiBjdXJyZW50V2VhdGhlci5nZXRDdXJyZW50VGltZSgpLFxyXG4gICAgICB0ZW1wZXJhdHVyZTogY3VycmVudFdlYXRoZXIudGVtcGVyYXR1cmUsXHJcbiAgICAgIHByZWNpcGl0YXRpb246IGN1cnJlbnRXZWF0aGVyLnByZWNpcGl0YXRpb24sXHJcbiAgICAgIGh1bWlkaXR5OiBjdXJyZW50V2VhdGhlci5odW1pZGl0eSxcclxuICAgICAgd2luZHNwZWVkOiBjdXJyZW50V2VhdGhlci53aW5kc3BlZWQsXHJcbiAgICAgIHdlYXRoZXJjb246IGN1cnJlbnRXZWF0aGVyLndlYXRoZXJjb24sXHJcbiAgICAgIGdldEljb25MaW5rOiBjdXJyZW50V2VhdGhlci5nZXRJY29uTGluayxcclxuICAgICAgZ2V0QmFja2dyb3VuZExpbms6IGN1cnJlbnRXZWF0aGVyLmdldEJhY2tncm91bmRMaW5rXHJcbiAgICB9XHJcbiAgICBkYXlzRm9yZWNhc3RbMF0uZGF0YS5zcGxpY2UoMCwwLGN1cnJlbnRIb3VyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjdXJyZW50SG91ciA9IHtcclxuICAgICAgZGF0ZTogY3VycmVudFdlYXRoZXIuZGF0ZSxcclxuICAgICAgdGltZTogY3VycmVudFdlYXRoZXIuZ2V0Q3VycmVudFRpbWUoKSxcclxuICAgICAgdGVtcGVyYXR1cmU6IGN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlLFxyXG4gICAgICBwcmVjaXBpdGF0aW9uOiBjdXJyZW50V2VhdGhlci5wcmVjaXBpdGF0aW9uLFxyXG4gICAgICBodW1pZGl0eTogY3VycmVudFdlYXRoZXIuaHVtaWRpdHksXHJcbiAgICAgIHdpbmRzcGVlZDogY3VycmVudFdlYXRoZXIud2luZHNwZWVkLFxyXG4gICAgICB3ZWF0aGVyY29uOiBjdXJyZW50V2VhdGhlci53ZWF0aGVyY29uLFxyXG4gICAgICBnZXRJY29uTGluazogY3VycmVudFdlYXRoZXIuZ2V0SWNvbkxpbmssXHJcbiAgICAgIGdldEJhY2tncm91bmRMaW5rOiBjdXJyZW50V2VhdGhlci5nZXRCYWNrZ3JvdW5kTGlua1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHRvZGF5ID0gY3JlYXRlRGF5T2JqZWN0KFtjdXJyZW50SG91cl0pO1xyXG4gICAgZGF5c0ZvcmVjYXN0LnNwbGljZSgwLDAsdG9kYXkpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gd3JpdGVXZWF0aGVyaW50b09iamVjdHMoY3VycmVudFdlYXRoZXJQcm9taXNlLCBmb3JlY2FzdFByb21pc2UpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgUHJvbWlzZS5hbGwoW2N1cnJlbnRXZWF0aGVyUHJvbWlzZSwgZm9yZWNhc3RQcm9taXNlXSkudGhlbigodmFsdWVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRheXNGb3JlY2FzdCA9IFtdO1xyXG4gICAgICBjb25zdCBjdXJyZW50RGF0YSA9IHZhbHVlc1swXTtcclxuICAgICAgY29uc3QgZm9yZWNhc3QgPSB2YWx1ZXNbMV07XHJcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhRGF5cyA9IHNwbGl0SW50b0RheXModmFsdWVzWzFdKTtcclxuICAgICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBjcmVhdGVDdXJyZW50V2VhdGhlcihcclxuICAgICAgICBuZXcgRGF0ZShjdXJyZW50RGF0YS5kdCAqIDEwMDApLFxyXG4gICAgICAgIGN1cnJlbnREYXRhLmNvb3JkLmxvbixcclxuICAgICAgICBjdXJyZW50RGF0YS5jb29yZC5sYXQsXHJcbiAgICAgICAgY3VycmVudERhdGEubWFpbi50ZW1wLFxyXG4gICAgICAgIGZvcmVjYXN0Lmxpc3RbMF0ucG9wLFxyXG4gICAgICAgIGN1cnJlbnREYXRhLm1haW4uaHVtaWRpdHksXHJcbiAgICAgICAgY3VycmVudERhdGEud2luZC5zcGVlZCxcclxuICAgICAgICBjdXJyZW50RGF0YS53ZWF0aGVyWzBdLm1haW5cclxuICAgICAgKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWF0aGVyRGF0YURheXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBkYXlEYXRhID0gd2VhdGhlckRhdGFEYXlzW2ldO1xyXG4gICAgICAgIGRheXNGb3JlY2FzdFtpXSA9IGNyZWF0ZURheU9iamVjdChkYXlEYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBhZGRDdXJyZW50V2VhdGhlclRvRm9yZWNhc3QoY3VycmVudFdlYXRoZXIsZGF5c0ZvcmVjYXN0KTtcclxuICAgICAgcmVzb2x2ZShbY3VycmVudFdlYXRoZXIsIGRheXNGb3JlY2FzdF0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtlbHZpblRvRmFocmVuaGVpdCh0ZW1wKSB7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQoKHRlbXAgLSAyNzMuMTUpICogMS44ICsgMzIuMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtlbHZpblRvQ2Vsc2l1cyh0ZW1wKSB7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQodGVtcCAtIDI3My4xNSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZhaHJlbmhlaXRUb0NlbHNpdXModGVtcCkge1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0ZW1wIC0gMzIpIC8gMS44KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2Vsc2l1c1RvRmFocmVuaGVpdCh0ZW1wKSB7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQodGVtcCAqIDEuOCArIDMyKVxyXG59XHJcbmV4cG9ydCB7XHJcbiAgbnVtYmVyVG9Xb3JkLFxyXG4gIHNwbGl0SW50b0RheXMsXHJcbiAgd3JpdGVXZWF0aGVyaW50b09iamVjdHMsXHJcbiAga2VsdmluVG9GYWhyZW5oZWl0LFxyXG4gIGtlbHZpblRvQ2Vsc2l1cyxcclxuICBmYWhyZW5oZWl0VG9DZWxzaXVzLFxyXG4gIGNlbHNpdXNUb0ZhaHJlbmhlaXQsXHJcbn07XHJcbiIsImZ1bmN0aW9uIHRlc3RQYWdlTG9hZERhdGEoY3VycmVudFdlYXRoZXIsIGRheXNGb3JlY2FzdCwga2VsdmluVG9DZWxzaXVzLGtlbHZpblRvRmFocmVuaGVpdCkge1xyXG4gIGNvbnNvbGUubG9nKFwiQ1VSUkVOVCBXRUFUSEVSIENBUkQhISEhISEhISEhISEhIVwiKTtcclxuICBjb25zb2xlLmxvZyhcIkljb246IFwiLCBjdXJyZW50V2VhdGhlci5nZXRJY29uTGluaygpKTtcclxuICBjb25zb2xlLmxvZyhcIkJhY2tncm91bmQ6IFwiLCBjdXJyZW50V2VhdGhlci5nZXRCYWNrZ3JvdW5kTGluaygpKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwidGVtcGVyYXR1cmUgaW4gwrBDOiBcIixcclxuICAgIGtlbHZpblRvQ2Vsc2l1cyhjdXJyZW50V2VhdGhlci50ZW1wZXJhdHVyZSlcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJ0ZW1wZXJhdHVyZSBpbiDCsEY6IFwiLFxyXG4gICAga2VsdmluVG9GYWhyZW5oZWl0KGN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlKVxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXCJwb3A6IFwiLCBjdXJyZW50V2VhdGhlci5wcmVjaXBpdGF0aW9uKTtcclxuICBjb25zb2xlLmxvZyhcIndpbmRzcGVlZDogXCIsIGN1cnJlbnRXZWF0aGVyLndpbmRzcGVlZCk7XHJcbiAgY29uc29sZS5sb2coXCJodW1pZGl0eTogXCIsIGN1cnJlbnRXZWF0aGVyLmh1bWlkaXR5KTtcclxuICBjb25zb2xlLmxvZyhcIkRheTogXCIsIGN1cnJlbnRXZWF0aGVyLmdldFdlZWtEYXkoKSk7XHJcbiAgY29uc29sZS5sb2coXCJNb250aCBhbmQgRGF5IERhdGU6IFwiLCBjdXJyZW50V2VhdGhlci5nZXRNb250aEFuZERheURhdGUoXCJERVwiKSk7XHJcbiAgY3VycmVudFdlYXRoZXJcclxuICAgIC5nZXRDaXR5TmFtZUFuZENvdW50cnlDb2RlKClcclxuICAgIC50aGVuKChjaXR5Q291bnRyeSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNpdHkgYW5kIENvdW50cnk6IFwiLCBjaXR5Q291bnRyeSk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlRpbWU6IFwiLCBjdXJyZW50V2VhdGhlci5nZXRDdXJyZW50VGltZSgpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJIT1VSIERBVEEgU0VDVElPTiAhISEhISEhISEhISEhISEhISFcIik7XHJcbiAgICAgIGRheXNGb3JlY2FzdFswXS5kYXRhLmZvckVhY2goKGhvdXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWU6IFwiLCBob3VyLnRpbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSWNvbjogXCIsIGhvdXIuZ2V0SWNvbkxpbmsoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUZW1wZXJhdHVyZSBpbiDCsEM6IFwiLCBrZWx2aW5Ub0NlbHNpdXMoaG91ci50ZW1wZXJhdHVyZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVtcGVyYXR1cmUgaW4gwrBGOiBcIiwga2VsdmluVG9GYWhyZW5oZWl0KGhvdXIudGVtcGVyYXR1cmUpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiREFZIENBUkRTIFNFQ1RJT04hISEhISEhISEhISEhISEhIVwiKTtcclxuICAgICAgZGF5c0ZvcmVjYXN0LmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgXCJXZWVrZGF5OiBcIixcclxuICAgICAgICAgIGRheS5nZXRXZWVrRGF5KCkgIT09IGN1cnJlbnRXZWF0aGVyLmdldFdlZWtEYXkoKVxyXG4gICAgICAgICAgICA/IGRheS5nZXRXZWVrRGF5KClcclxuICAgICAgICAgICAgOiBcInRvZGF5XCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9udGhBbmREYXk6IFwiLCBkYXkuZ2V0TW9udGhBbmREYXlEYXRlKFwiREVcIikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSWNvbjogXCIsIGRheS5nZXRJY29uTGluaygpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1pbiBUZW1wZXJhdHVyZSBpbiDCsEM6IFwiLCBrZWx2aW5Ub0NlbHNpdXMoZGF5LmdldE1pblRlbXAoKSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWF4IFRlbXBlcmF0dXJlIGluIMKwQzogXCIsIGtlbHZpblRvQ2Vsc2l1cyhkYXkuZ2V0TWF4VGVtcCgpKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNaW4gVGVtcGVyYXR1cmUgaW4gwrBGOiBcIiwga2VsdmluVG9GYWhyZW5oZWl0KGRheS5nZXRNaW5UZW1wKCkpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1heCBUZW1wZXJhdHVyZSBpbiDCsEY6IFwiLCBrZWx2aW5Ub0ZhaHJlbmhlaXQoZGF5LmdldE1heFRlbXAoKSkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCB7IHRlc3RQYWdlTG9hZERhdGEgfTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cclxuZnVuY3Rpb24gZ2V0Q2l0eUNvb3JkaW5hdGVzKGNpdHlOYW1lLCBjb3VudHJ5KSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGZldGNoKFxyXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT17JHtjaXR5TmFtZX19LHske2NvdW50cnl9fSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWBcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXR1cyB3YXMgMjAwXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoW3ZhbHVlWzBdLmxhdCwgdmFsdWVbMF0ubG9uXSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihjaXR5LCBjb3VudHJ5KSB7XHJcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGdldENpdHlDb29yZGluYXRlcyhjaXR5LCBjb3VudHJ5KS50aGVuKChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgICAgIGZldGNoKFxyXG4gICAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2Nvb3JkaW5hdGVzWzBdfSZsb249JHtjb29yZGluYXRlc1sxXX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigodmFsdWUpID0+IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkpXHJcbiAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtjaXR5WzBdfSZsb249JHtjaXR5WzFdfSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWBcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSlcclxuICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGaXZlRGF5Rm9yZWNhc3QoY2l0eSwgY291bnRyeSkge1xyXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBnZXRDaXR5Q29vcmRpbmF0ZXMoY2l0eSwgY291bnRyeSkudGhlbigoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgICAgICBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7Y29vcmRpbmF0ZXNbMF19Jmxvbj0ke2Nvb3JkaW5hdGVzWzFdfSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWBcclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSlcclxuICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtjaXR5WzBdfSZsb249JHtjaXR5WzFdfSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWBcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSlcclxuICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBnZXRDaXR5Q29vcmRpbmF0ZXMsIGdldEN1cnJlbnRXZWF0aGVyLCBnZXRGaXZlRGF5Rm9yZWNhc3QgfTtcclxuIiwiaW1wb3J0IENsZWFyIGZyb20gXCIuL21lZGlhL2NsZWFyLm1wNFwiO1xyXG5pbXBvcnQgQ2xvdWRzIGZyb20gXCIuL21lZGlhL2Nsb3VkeS5tcDRcIjtcclxuaW1wb3J0IFJhaW4gZnJvbSBcIi4vbWVkaWEvcmFpbi5tcDRcIjtcclxuaW1wb3J0IFNub3cgZnJvbSBcIi4vbWVkaWEvc25vdy5tcDRcIjtcclxuaW1wb3J0IENsZWFySWNvbiBmcm9tIFwiLi9tZWRpYS9jbGVhckljb24uc3ZnXCI7XHJcbmltcG9ydCBDbG91ZHNJY29uIGZyb20gXCIuL21lZGlhL2Nsb3VkeUljb24uc3ZnXCI7XHJcbmltcG9ydCBSYWluSWNvbiBmcm9tIFwiLi9tZWRpYS9yYWluSWNvbi5zdmdcIjtcclxuaW1wb3J0IERyaXp6bGVJY29uIGZyb20gXCIuL21lZGlhL2RyaXp6bGVJY29uLnN2Z1wiO1xyXG5pbXBvcnQgU25vd0ljb24gZnJvbSBcIi4vbWVkaWEvc25vd0ljb24uc3ZnXCI7XHJcblxyXG5jb25zdCBtZWRpYUxpbmtzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGdldEJhY2tncm91bmRMaW5rKCkge1xyXG4gICAgbGV0IHZpZGVvTGluayA9IFwiXCI7XHJcbiAgICBjb25zdCB3ZWF0aGVyY29uID0gc3RhdGUud2VhdGhlcmNvblxyXG4gICAgICA/IHN0YXRlLndlYXRoZXJjb25cclxuICAgICAgOiBzdGF0ZS5nZXREb21pbmF0aW5nV2VhdGhlcmljb24oKTtcclxuICAgIHN3aXRjaCAod2VhdGhlcmNvbikge1xyXG4gICAgICBjYXNlIFwiQ2xvdWRzXCI6XHJcbiAgICAgICAgdmlkZW9MaW5rID0gYCR7Q2xvdWRzfWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJDbGVhclwiOlxyXG4gICAgICAgIHZpZGVvTGluayA9IGAke0NsZWFyfWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJTbm93XCI6XHJcbiAgICAgICAgdmlkZW9MaW5rID0gYCR7U25vd31gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiUmFpblwiOlxyXG4gICAgICAgIHZpZGVvTGluayA9IGAke1JhaW59YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkRyaXp6bGVcIjpcclxuICAgICAgICB2aWRlb0xpbmsgPSBgJHtSYWlufWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYWxlcnQoXCJubyB3ZWF0aGVyY29uIHNldCB5ZXRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmlkZW9MaW5rO1xyXG4gIH0sXHJcblxyXG4gIGdldEljb25MaW5rKCkge1xyXG4gICAgbGV0IGljb25MaW5rID0gXCJcIjtcclxuICAgIGNvbnN0IHdlYXRoZXJjb24gPSBzdGF0ZS53ZWF0aGVyY29uXHJcbiAgICAgID8gc3RhdGUud2VhdGhlcmNvblxyXG4gICAgICA6IHN0YXRlLmdldERvbWluYXRpbmdXZWF0aGVyaWNvbigpO1xyXG4gICAgc3dpdGNoICh3ZWF0aGVyY29uKSB7XHJcbiAgICAgIGNhc2UgXCJDbG91ZHNcIjpcclxuICAgICAgICBpY29uTGluayA9IGAke0Nsb3Vkc0ljb259YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkNsZWFyXCI6XHJcbiAgICAgICAgaWNvbkxpbmsgPSBgJHtDbGVhckljb259YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlNub3dcIjpcclxuICAgICAgICBpY29uTGluayA9IGAke1Nub3dJY29ufWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJSYWluXCI6XHJcbiAgICAgICAgaWNvbkxpbmsgPSBgJHtSYWluSWNvbn1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiRHJpenpsZVwiOlxyXG4gICAgICAgIGljb25MaW5rID0gYCR7RHJpenpsZUljb259YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBhbGVydChcIm5vIHdlYXRoZXJjb24gc2V0IHlldFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpY29uTGluaztcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IGRhdGVEYXRhID0gKHN0YXRlKSA9PiAoe1xyXG4gIGdldFdlZWtEYXkoKSB7XHJcbiAgICBjb25zdCB3ZWVrID0gW1xyXG4gICAgICBcIlN1bmRheVwiLFxyXG4gICAgICBcIk1vbmRheVwiLFxyXG4gICAgICBcIlR1ZXNkYXlcIixcclxuICAgICAgXCJXZWRuZXNkYXlcIixcclxuICAgICAgXCJUaHVyc2RheVwiLFxyXG4gICAgICBcIkZyaWRheVwiLFxyXG4gICAgICBcIlNhdHVyZGF5XCIsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIHdlZWtbc3RhdGUuZGF0ZS5nZXREYXkoKV07XHJcbiAgfSxcclxuXHJcbiAgZ2V0TW9udGhBbmREYXlEYXRlKGxhbmd1YWdlVGFnKSB7XHJcbiAgICByZXR1cm4gc3RhdGUuZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoYCR7bGFuZ3VhZ2VUYWd9YCwge1xyXG4gICAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXHJcbiAgICB9KTtcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRXZWF0aGVyKFxyXG4gIGRhdGUsXHJcbiAgbG9uLFxyXG4gIGxhdCxcclxuICB0ZW1wZXJhdHVyZSxcclxuICBwcmVjaXBpdGF0aW9uLFxyXG4gIGh1bWlkaXR5LFxyXG4gIHdpbmRzcGVlZCxcclxuICB3ZWF0aGVyY29uXHJcbikge1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldENpdHlOYW1lQW5kQ291bnRyeUNvZGUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaChcclxuICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9yZXZlcnNlP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWBcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoYCR7dmFsdWVbMF0ubmFtZX0sICR7dmFsdWVbMF0uY291bnRyeX1gKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgbWludXRlIGlzIG9uZSBkaWdpdCwgYSAwIGdldHMgYWRkZWQgdG8gdGhlIG1pbnV0ZSB0byBzaG93IGEgMiBkaWdpdCBtaW51dGUgY291bnRcclxuICBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcclxuICAgIHJldHVybiBgJHtkYXRlLmdldEhvdXJzKCl9OiR7XHJcbiAgICAgIGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkubGVuZ3RoIDwgMlxyXG4gICAgICAgID8gYCR7ZGF0ZS5nZXRNaW51dGVzKCl9MGBcclxuICAgICAgICA6IGRhdGUuZ2V0TWludXRlcygpXHJcbiAgICB9YDtcclxuICB9XHJcblxyXG4gIC8vIEFzc2lnbnMgdGhlIG1ldGhvZHMgZnJvbSBtZWRpYUxpbmtzIGFuZCBkYXRhRGF0YSB0byB0aGUgcmV0dXJuZWQgb2JqZWN0IHZpYSBzcHJlYWQgb3BlcmF0b3JcclxuICByZXR1cm4ge1xyXG4gICAgZGF0ZSxcclxuICAgIHRlbXBlcmF0dXJlLFxyXG4gICAgcHJlY2lwaXRhdGlvbixcclxuICAgIGh1bWlkaXR5LFxyXG4gICAgd2luZHNwZWVkLFxyXG4gICAgd2VhdGhlcmNvbixcclxuICAgIGdldENpdHlOYW1lQW5kQ291bnRyeUNvZGUsXHJcbiAgICBnZXRDdXJyZW50VGltZSxcclxuICAgIC4uLm1lZGlhTGlua3Moe1xyXG4gICAgICBkYXRlLFxyXG4gICAgICB0ZW1wZXJhdHVyZSxcclxuICAgICAgcHJlY2lwaXRhdGlvbixcclxuICAgICAgaHVtaWRpdHksXHJcbiAgICAgIHdpbmRzcGVlZCxcclxuICAgICAgd2VhdGhlcmNvbixcclxuICAgICAgZ2V0Q2l0eU5hbWVBbmRDb3VudHJ5Q29kZSxcclxuICAgICAgZ2V0Q3VycmVudFRpbWUsXHJcbiAgICB9KSxcclxuICAgIC4uLmRhdGVEYXRhKHtcclxuICAgICAgZGF0ZSxcclxuICAgICAgdGVtcGVyYXR1cmUsXHJcbiAgICAgIHByZWNpcGl0YXRpb24sXHJcbiAgICAgIGh1bWlkaXR5LFxyXG4gICAgICB3aW5kc3BlZWQsXHJcbiAgICAgIHdlYXRoZXJjb24sXHJcbiAgICAgIGdldENpdHlOYW1lQW5kQ291bnRyeUNvZGUsXHJcbiAgICAgIGdldEN1cnJlbnRUaW1lLFxyXG4gICAgfSksXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG91ck9iamVjdChob3VyRGF0YSkge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShob3VyRGF0YS5kdCAqIDEwMDApO1xyXG4gIGNvbnN0IHRpbWUgPSBgJHtkYXRlLmdldEhvdXJzKCl9OiR7ZGF0ZS5nZXRNaW51dGVzKCl9MGA7XHJcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBob3VyRGF0YS5tYWluLnRlbXA7XHJcbiAgY29uc3QgcHJlY2lwaXRhdGlvbiA9IGhvdXJEYXRhLnBvcDtcclxuICBjb25zdCB7IGh1bWlkaXR5IH0gPSBob3VyRGF0YS5tYWluO1xyXG4gIGNvbnN0IHdpbmRzcGVlZCA9IGhvdXJEYXRhLndpbmQuc3BlZWQ7XHJcbiAgY29uc3Qgd2VhdGhlcmNvbiA9IGhvdXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGUsXHJcbiAgICB0aW1lLFxyXG4gICAgdGVtcGVyYXR1cmUsXHJcbiAgICBwcmVjaXBpdGF0aW9uLFxyXG4gICAgaHVtaWRpdHksXHJcbiAgICB3aW5kc3BlZWQsXHJcbiAgICB3ZWF0aGVyY29uLFxyXG4gICAgLi4ubWVkaWFMaW5rcyh7XHJcbiAgICAgIGRhdGUsXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIHRlbXBlcmF0dXJlLFxyXG4gICAgICBwcmVjaXBpdGF0aW9uLFxyXG4gICAgICBodW1pZGl0eSxcclxuICAgICAgd2luZHNwZWVkLFxyXG4gICAgICB3ZWF0aGVyY29uLFxyXG4gICAgfSksXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGF5T2JqZWN0KGRhdGEpIHtcclxuICBjb25zdCB7IGRhdGUgfSA9IGRhdGFbMF07XHJcblxyXG4gIGZ1bmN0aW9uIGdldE1pblRlbXAoKSB7XHJcbiAgICBjb25zdCBjb2xkZXN0SG91ciA9IGRhdGEucmVkdWNlKFxyXG4gICAgICAoYWNjdW0sIGN1cnJlbnQpID0+XHJcbiAgICAgICAgYWNjdW0udGVtcGVyYXR1cmUgPCBjdXJyZW50LnRlbXBlcmF0dXJlID8gYWNjdW0gOiBjdXJyZW50LFxyXG4gICAgICBkYXRhWzBdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGNvbGRlc3RIb3VyLnRlbXBlcmF0dXJlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TWF4VGVtcCgpIHtcclxuICAgIGNvbnN0IGhvdHRlc3RIb3VyID0gZGF0YS5yZWR1Y2UoXHJcbiAgICAgIChhY2N1bSwgY3VycmVudCkgPT5cclxuICAgICAgICBhY2N1bS50ZW1wZXJhdHVyZSA+IGN1cnJlbnQudGVtcGVyYXR1cmUgPyBhY2N1bSA6IGN1cnJlbnQsXHJcbiAgICAgIGRhdGFbMF1cclxuICAgICk7XHJcbiAgICByZXR1cm4gaG90dGVzdEhvdXIudGVtcGVyYXR1cmU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXREb21pbmF0aW5nV2VhdGhlcmljb24oKSB7XHJcbiAgICBjb25zdCB0aHVuZGVyID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJUaHVuZGVyXCIpO1xyXG4gICAgY29uc3QgZHJpenpsZSA9IGRhdGEuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LndlYXRoZXJjb24gPT09IFwiRHJpenpsZVwiKTtcclxuICAgIGNvbnN0IHJhaW4gPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIlJhaW5cIik7XHJcbiAgICBjb25zdCBzbm93ID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJTbm93XCIpO1xyXG4gICAgY29uc3QgY2xlYXIgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIkNsZWFyXCIpO1xyXG4gICAgY29uc3QgY2xvdWRzID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJDbG91ZHNcIik7XHJcbiAgICBjb25zdCBzb3J0ZWRXZWF0aGVyID0gW3RodW5kZXIsIGRyaXp6bGUsIHJhaW4sIHNub3csIGNsZWFyLCBjbG91ZHNdLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHNvcnRlZFdlYXRoZXJbMF1bMF0ud2VhdGhlcmNvbjtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkYXRlLFxyXG4gICAgZGF0YSxcclxuICAgIGdldE1pblRlbXAsXHJcbiAgICBnZXRNYXhUZW1wLFxyXG4gICAgZ2V0RG9taW5hdGluZ1dlYXRoZXJpY29uLFxyXG4gICAgLi4uZGF0ZURhdGEoe1xyXG4gICAgICBkYXRlLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBnZXRNaW5UZW1wLFxyXG4gICAgICBnZXRNYXhUZW1wLFxyXG4gICAgICBnZXREb21pbmF0aW5nV2VhdGhlcmljb24sXHJcbiAgICB9KSxcclxuICAgIC4uLm1lZGlhTGlua3Moe1xyXG4gICAgICBkYXRlLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBnZXRNaW5UZW1wLFxyXG4gICAgICBnZXRNYXhUZW1wLFxyXG4gICAgICBnZXREb21pbmF0aW5nV2VhdGhlcmljb24sXHJcbiAgICB9KSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDdXJyZW50V2VhdGhlciwgY3JlYXRlSG91ck9iamVjdCwgY3JlYXRlRGF5T2JqZWN0IH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcHJvbWlzZS1yZWplY3QtZXJyb3JzICovXHJcbmltcG9ydCB7XHJcbiAgd3JpdGVXZWF0aGVyaW50b09iamVjdHMsXHJcbiAga2VsdmluVG9GYWhyZW5oZWl0LFxyXG4gIGtlbHZpblRvQ2Vsc2l1cyxcclxuICBmYWhyZW5oZWl0VG9DZWxzaXVzLFxyXG4gIGNlbHNpdXNUb0ZhaHJlbmhlaXQsXHJcbn0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Rml2ZURheUZvcmVjYXN0IH0gZnJvbSBcIi4vd2VhdGhlckFQSVwiO1xyXG5cclxuaW1wb3J0IHsgdGVzdFBhZ2VMb2FkRGF0YSB9IGZyb20gXCIuL3Rlc3RpbmdcIjtcclxuXHJcbmltcG9ydCB7IHBhZ2VMb2FkIH0gZnJvbSBcIi4vZG9tQ3JlYXRpb25cIjtcclxuXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5sZXQgY2l0eSA9IFwiXCI7XHJcbmxldCBjaXR5Q29vcmRzID0gW107XHJcbmxldCBjb3VudHJ5ID0gXCJcIjtcclxubGV0IGN1cnJlbnRXZWF0aGVyID0ge307XHJcbmxldCBkYXlzRm9yZWNhc3QgPSB7fTtcclxuXHJcbndyaXRlV2VhdGhlcmludG9PYmplY3RzKFxyXG4gIGdldEN1cnJlbnRXZWF0aGVyKFwic2lkbmV5XCIsIFwiQVVcIiksXHJcbiAgZ2V0Rml2ZURheUZvcmVjYXN0KFwic2lkbmV5XCIsIFwiQVVcIilcclxuKVxyXG4gIC50aGVuKCh3ZWF0aGVyT2JqZWN0cykgPT4ge1xyXG4gICAgW2N1cnJlbnRXZWF0aGVyLCBkYXlzRm9yZWNhc3RdID0gd2VhdGhlck9iamVjdHM7XHJcbiAgfSlcclxuICAudGhlbigoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGA8dmlkZW8gY2xhc3MgPVwidmlkZW9cIiBhdXRvcGxheSBtdXRlZCBsb29wIGlkPVwibXlWaWRlb1wiPlxyXG4gICAgPHNvdXJjZSBzcmM9XCIke2N1cnJlbnRXZWF0aGVyLmdldEJhY2tncm91bmRMaW5rKCl9XCIgdHlwZT1cInZpZGVvL21wNFwiPlxyXG4gICAgPC92aWRlbz48ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjxkaXYgY2xhc3M9XCJjdXJyZW50V1wiPjxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiJHtjdXJyZW50V2VhdGhlci5nZXRJY29uTGluaygpfVwiPjwvZGl2PjwvZGl2PlxyXG4gICAgYDtcclxuICB9KTtcclxuXHJcbm5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICAobG9jYXRpb25PYmplY3QpID0+IHtcclxuICAgICAgICByZXNvbHZlKFtcclxuICAgICAgICAgIGxvY2F0aW9uT2JqZWN0LmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgIGxvY2F0aW9uT2JqZWN0LmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnIpID0+IHtcclxuICAgICAgICByZWplY3QoW1wiZMO8c3NlbGRvcmZcIiwgXCJERVwiXSk7XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZWplY3QoW1wiZMO8c3NlbGRvcmZcIiwgXCJERVwiXSk7XHJcbiAgfVxyXG59KVxyXG4gIC50aGVuKChsb2NhdGlvbikgPT5cclxuICAgIHdyaXRlV2VhdGhlcmludG9PYmplY3RzKFxyXG4gICAgICBnZXRDdXJyZW50V2VhdGhlcihsb2NhdGlvbiksXHJcbiAgICAgIGdldEZpdmVEYXlGb3JlY2FzdChsb2NhdGlvbilcclxuICAgIClcclxuICApXHJcbiAgLmNhdGNoKChmYWxsYmFja0xvY2F0aW9uKSA9PlxyXG4gICAgd3JpdGVXZWF0aGVyaW50b09iamVjdHMoXHJcbiAgICAgIGdldEN1cnJlbnRXZWF0aGVyKGZhbGxiYWNrTG9jYXRpb25bMF0sIGZhbGxiYWNrTG9jYXRpb25bMV0pLFxyXG4gICAgICBnZXRGaXZlRGF5Rm9yZWNhc3QoZmFsbGJhY2tMb2NhdGlvblswXSwgZmFsbGJhY2tMb2NhdGlvblsxXSlcclxuICAgIClcclxuICApXHJcbiAgLnRoZW4oKHdlYXRoZXJPYmplY3RzKSA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcclxuICAgIFtjdXJyZW50V2VhdGhlciwgZGF5c0ZvcmVjYXN0XSA9IHdlYXRoZXJPYmplY3RzO1xyXG4gICAgdGVzdFBhZ2VMb2FkRGF0YShcclxuICAgICAgY3VycmVudFdlYXRoZXIsXHJcbiAgICAgIGRheXNGb3JlY2FzdCxcclxuICAgICAga2VsdmluVG9DZWxzaXVzLFxyXG4gICAgICBrZWx2aW5Ub0ZhaHJlbmhlaXRcclxuICAgICk7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgdGhyb3cgZXJyO1xyXG4gIH0pXHJcbiAgLnRoZW4oKCkgPT4ge1xyXG4gICAgcGFnZUxvYWQoY3VycmVudFdlYXRoZXIsZGF5c0ZvcmVjYXN0KTtcclxuICB9KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9