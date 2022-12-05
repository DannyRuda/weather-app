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

/***/ "./src/media/drizzle.mp4":
/*!*******************************!*\
  !*** ./src/media/drizzle.mp4 ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "videos/drizzle.mp4");

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
  return (temp - 273.15) * 1.8 + 32.0;
}

function kelvinToCelsius(temp) {
  return temp - 273.15;
}

function fahrenheitToCelsius(temp) {
  return (temp - 32) / 1.8;
}

function celsiusToFahrenheit(temp) {
  return temp * 1.8 + 32;
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
/* harmony import */ var _media_drizzle_mp4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/drizzle.mp4 */ "./src/media/drizzle.mp4");
/* harmony import */ var _media_snow_mp4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/snow.mp4 */ "./src/media/snow.mp4");
/* harmony import */ var _media_clearIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/clearIcon.svg */ "./src/media/clearIcon.svg");
/* harmony import */ var _media_cloudyIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media/cloudyIcon.svg */ "./src/media/cloudyIcon.svg");
/* harmony import */ var _media_rainIcon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media/rainIcon.svg */ "./src/media/rainIcon.svg");
/* harmony import */ var _media_drizzleIcon_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media/drizzleIcon.svg */ "./src/media/drizzleIcon.svg");
/* harmony import */ var _media_snowIcon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media/snowIcon.svg */ "./src/media/snowIcon.svg");











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
        videoLink = `${_media_snow_mp4__WEBPACK_IMPORTED_MODULE_4__["default"]}`;
        break;
      case "Rain":
        videoLink = `${_media_rain_mp4__WEBPACK_IMPORTED_MODULE_2__["default"]}`;
        break;
      case "Drizzle":
        videoLink = `${_media_drizzle_mp4__WEBPACK_IMPORTED_MODULE_3__["default"]}`;
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
        iconLink = `${_media_cloudyIcon_svg__WEBPACK_IMPORTED_MODULE_6__}`;
        break;
      case "Clear":
        iconLink = `${_media_clearIcon_svg__WEBPACK_IMPORTED_MODULE_5__}`;
        break;
      case "Snow":
        iconLink = `${_media_snowIcon_svg__WEBPACK_IMPORTED_MODULE_9__}`;
        break;
      case "Rain":
        iconLink = `${_media_rainIcon_svg__WEBPACK_IMPORTED_MODULE_7__}`;
        break;
      case "Drizzle":
        iconLink = `${_media_drizzleIcon_svg__WEBPACK_IMPORTED_MODULE_8__}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsSUFBSSx5RUFBdUI7QUFDM0IsTUFBTSw4REFBaUI7QUFDdkIsTUFBTSwrREFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5RUFBdUI7QUFDM0IsTUFBTSw4REFBaUI7QUFDdkIsTUFBTSwrREFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxNQUFNLDZEQUFlO0FBQ3JCLE1BQU0sZ0VBQWtCO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLHNEQUFRO0FBQ1osR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tZWRpYS9jbGVhci5tcDQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbWVkaWEvY2xvdWR5Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tZWRpYS9kcml6emxlLm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tZWRpYS9yYWluLm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tZWRpYS9zbm93Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbUNyZWF0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90ZXN0aW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlck9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi52aWRlbyB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6NTAlO1xcclxcbiAgICBsZWZ0OjUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICAgIFxcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgXFxyXFxuICAgIHotaW5kZXg6IDQ7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAwcHgpO1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuY3VycmVudFcge1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBoZWlnaHQ6IDcwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOjMwJTtcXHJcXG4gICAgbGVmdDo1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zMCUpIHNjYWxlKDEpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDFweCBibGFjayk7XFxyXFxuICAgIG92ZXJmbG93OnNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsUUFBUTtJQUNSLHlDQUF5Qzs7SUFFekMsaUJBQWlCOztJQUVqQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUix5Q0FBeUM7SUFDekMsb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi52aWRlbyB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6NTAlO1xcclxcbiAgICBsZWZ0OjUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICAgIFxcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgXFxyXFxuICAgIHotaW5kZXg6IDQ7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAwcHgpO1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuY3VycmVudFcge1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBoZWlnaHQ6IDcwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOjMwJTtcXHJcXG4gICAgbGVmdDo1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zMCUpIHNjYWxlKDEpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDFweCBibGFjayk7XFxyXFxuICAgIG92ZXJmbG93OnNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9jbGVhci5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL2Nsb3VkeS5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL2RyaXp6bGUubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9yYWluLm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3Mvc25vdy5tcDRcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsga2VsdmluVG9DZWxzaXVzIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb3VyRWxlbWVudHMoZGF5LCBkYXlJbmRleCkge1xyXG4gIGxldCBodG1sU3RyaW5nID0gYGA7XHJcbiAgZGF5LmRhdGEuZm9yRWFjaCgoaG91ciwgaSkgPT4ge1xyXG4gICAgaHRtbFN0cmluZyArPSBgPGRpdiBjbGFzcz1cImhvdXJcIiBkYXRhLWluZGV4LWhvdXI9XCIke2l9XCIgZGF0YS1pbmRleC1kYXk9XCIke2RheUluZGV4fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0aW1lXCI+JHtob3VyLnRpbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImljb25cIiBzcmM9XCIke2hvdXIuZ2V0SWNvbkxpbmsoKX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwidGVtcFwiPiR7a2VsdmluVG9DZWxzaXVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyLnRlbXBlcmF0dXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfcKwQzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICB9KTtcclxuICByZXR1cm4gaHRtbFN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGF5RWxlbWVudHMoY3VycmVudFdlYXRoZXIsIGRheXNGb3JlY2FzdCkge1xyXG4gIGxldCBodG1sU3RyaW5nID0gYGA7XHJcbiAgZGF5c0ZvcmVjYXN0LmZvckVhY2goKGRheSwgaSkgPT4ge1xyXG4gICAgaHRtbFN0cmluZyArPSBgPGRpdiBjbGFzcz1cImRheVwiIGRhdGEtaW5kZXgtZGF5PVwiJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIndlZWtkYXlcIj4ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRheS5nZXRXZWVrRGF5KCkgIT09IGN1cnJlbnRXZWF0aGVyLmdldFdlZWtEYXkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkYXkuZ2V0V2Vla0RheSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidG9kYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvblwiIHNyYz1cIiR7ZGF5LmdldEljb25MaW5rKCl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5LmRhdGEubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgPHNwYW4gaWQ9XCJtaW5UZW1wXCI+JHtrZWx2aW5Ub0NlbHNpdXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5LmdldE1pblRlbXAoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfTwvc3Bhbj7CsEMgLSA8c3BhbiBpZD1cIm1heFRlbXBcIj4ke2tlbHZpblRvQ2Vsc2l1cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXkuZ2V0TWF4VGVtcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PC9zcGFuPsKwQ2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoga2VsdmluVG9DZWxzaXVzKGRheS5kYXRhWzBdLnRlbXBlcmF0dXJlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGh0bWxTdHJpbmc7XHJcbn1cclxuLypcclxuZnVuY3Rpb24gY2hhbmdlQmFja2dyb3VuZCgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNvdXJjZSkuc3JjID1cclxuICAgIGRheXNGb3JlY2FzdFtkYXRhIC0gaW5kZXggLSBkYXldLmRhdGFbXHJcbiAgICAgIGRhdGEgLSBpbmRleCAtIGhvdXJcclxuICAgIF0uZ2V0QmFja2dyb3VuZExpbmsoKTtcclxufVxyXG4qL1xyXG5mdW5jdGlvbiBwYWdlTG9hZChjdXJyZW50V2VhdGhlciwgZGF5c0ZvcmVjYXN0KSB7XHJcbiAgY29uc3QgaG91cnNIdG1sID0gY3JlYXRlSG91ckVsZW1lbnRzKGRheXNGb3JlY2FzdFswXSwgMCk7XHJcbiAgY29uc3QgZGF5c0h0bWwgPSBjcmVhdGVEYXlFbGVtZW50cyhjdXJyZW50V2VhdGhlciwgZGF5c0ZvcmVjYXN0KTtcclxuICBjdXJyZW50V2VhdGhlci5nZXRDaXR5TmFtZUFuZENvdW50cnlDb2RlKCkudGhlbigoY2l0eUFuZENvdW50cnkpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmlubmVySFRNTCA9IGBcclxuICAgIDx2aWRlbyBjbGFzcyA9XCJ2aWRlb1wiIGF1dG9wbGF5IG11dGVkIGxvb3AgaWQ9XCJteVZpZGVvXCI+XHJcbiAgICAgICAgPHNvdXJjZSBzcmM9XCIke2N1cnJlbnRXZWF0aGVyLmdldEJhY2tncm91bmRMaW5rKCl9XCIgdHlwZT1cInZpZGVvL21wNFwiPlxyXG4gICAgPC92aWRlbz5cclxuICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnRXXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY3VycmVudFdcIiBpZD1cImRhdGVcIj4ke2N1cnJlbnRXZWF0aGVyLmdldE1vbnRoQW5kRGF5RGF0ZShcclxuICAgICAgICAgICAgICBcIkRFXCJcclxuICAgICAgICAgICAgKX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY3VycmVudFdcIiBpZD1cImNpdHlcIj4ke2NpdHlBbmRDb3VudHJ5fTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjdXJyZW50V1wiIGlkPVwidGltZVwiPiR7Y3VycmVudFdlYXRoZXIuZ2V0Q3VycmVudFRpbWUoKX08L3A+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiJHtjdXJyZW50V2VhdGhlci5nZXRJY29uTGluaygpfVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImN1cnJlbnRXXCIgaWQ9XCJ0ZW1wXCI+JHtrZWx2aW5Ub0NlbHNpdXMoXHJcbiAgICAgICAgICAgICAgY3VycmVudFdlYXRoZXIudGVtcGVyYXR1cmVcclxuICAgICAgICAgICAgKX3CsEM8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY3VycmVudFdcIj5OaWVkZXJzY2hsYWc6IDxzcGFuIGlkPVwicG9wXCI+JHtcclxuICAgICAgICAgICAgICBjdXJyZW50V2VhdGhlci5wcmVjaXBpdGF0aW9uICogMTAwXHJcbiAgICAgICAgICAgIH08L3NwYW4+JSA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY3VycmVudFdcIj5MdWZ0ZmV1Y2h0ZTogPHNwYW4gaWQ9XCJodW1pZFwiPiR7XHJcbiAgICAgICAgICAgICAgY3VycmVudFdlYXRoZXIuaHVtaWRpdHlcclxuICAgICAgICAgICAgfTwvc3Bhbj4lIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjdXJyZW50V1wiPldpbmRnZXNjaHc6IDxzcGFuIGlkPVwid2luZFwiPiR7XHJcbiAgICAgICAgICAgICAgY3VycmVudFdlYXRoZXIud2luZHNwZWVkXHJcbiAgICAgICAgICAgIH08L3NwYW4+a20vaCA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3VyU2VjdGlvblwiPlxyXG4gICAgICAgICAgICAke2hvdXJzSHRtbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRheVNlY3Rpb25cIj5cclxuICAgICAgICAgICAgJHtkYXlzSHRtbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcbiAgfSk7XHJcbn1cclxuZXhwb3J0IHsgcGFnZUxvYWQgfTtcclxuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVIb3VyT2JqZWN0LFxyXG4gIGNyZWF0ZUN1cnJlbnRXZWF0aGVyLFxyXG4gIGNyZWF0ZURheU9iamVjdCxcclxufSBmcm9tIFwiLi93ZWF0aGVyT2JqZWN0c1wiO1xyXG5cclxuZnVuY3Rpb24gbnVtYmVyVG9Xb3JkKG51bWJlcikge1xyXG4gIGNvbnN0IG51bWJlcnMgPSBbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiLCBcImZvdXJcIiwgXCJmaXZlXCIsIFwic2l4XCJdO1xyXG4gIHJldHVybiBudW1iZXJzW251bWJlcl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwbGl0SW50b0RheXMoZm9yZWNhc3REYXRhKSB7XHJcbiAgY29uc3QgaG91cmx5RGF0YU9iamVjdHMgPSBbXTtcclxuICBjb25zdCBkYXlEYXRhQXJyYXlzID0gW107XHJcbiAgZm9yZWNhc3REYXRhLmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaG91cmx5RGF0YU9iamVjdHMucHVzaChjcmVhdGVIb3VyT2JqZWN0KGl0ZW0pKTtcclxuICB9KTtcclxuICBpZiAoaG91cmx5RGF0YU9iamVjdHNbMF0uZGF0ZS5nZXRIb3VycygpID4gMikge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA2OyBqICs9IDEpIHtcclxuICAgICAgY29uc3Qgc3RhcnRpbmdEYXlEYXRlID0gaG91cmx5RGF0YU9iamVjdHNbMF0uZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgIGNvbnN0IGRheURhdGEgPSBob3VybHlEYXRhT2JqZWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKGhvdXJEYXRhKSA9PiBob3VyRGF0YS5kYXRlLmdldERhdGUoKSA9PT0gc3RhcnRpbmdEYXlEYXRlXHJcbiAgICAgICk7XHJcbiAgICAgIGhvdXJseURhdGFPYmplY3RzLnNwbGljZSgwLCBkYXlEYXRhLmxlbmd0aCk7XHJcbiAgICAgIGRheURhdGFBcnJheXMucHVzaChkYXlEYXRhKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqICs9IDEpIHtcclxuICAgICAgY29uc3Qgc3RhcnRpbmdEYXlEYXRlID0gaG91cmx5RGF0YU9iamVjdHNbMF0uZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgIGNvbnN0IGRheURhdGEgPSBob3VybHlEYXRhT2JqZWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKGhvdXJEYXRhKSA9PiBob3VyRGF0YS5kYXRlLmdldERhdGUoKSA9PT0gc3RhcnRpbmdEYXlEYXRlXHJcbiAgICAgICk7XHJcbiAgICAgIGhvdXJseURhdGFPYmplY3RzLnNwbGljZSgwLCBkYXlEYXRhLmxlbmd0aCk7XHJcbiAgICAgIGRheURhdGFBcnJheXMucHVzaChkYXlEYXRhKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGRheURhdGFBcnJheXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEN1cnJlbnRXZWF0aGVyVG9Gb3JlY2FzdChjdXJyZW50V2VhdGhlciwgZGF5c0ZvcmVjYXN0KSB7XHJcbiAgaWYoY3VycmVudFdlYXRoZXIuZ2V0V2Vla0RheSgpID09PSBkYXlzRm9yZWNhc3RbMF0uZ2V0V2Vla0RheSgpKSB7XHJcbiAgICBjb25zdCBjdXJyZW50SG91ciA9IHtcclxuICAgICAgZGF0ZTogY3VycmVudFdlYXRoZXIuZGF0ZSxcclxuICAgICAgdGltZTogY3VycmVudFdlYXRoZXIuZ2V0Q3VycmVudFRpbWUoKSxcclxuICAgICAgdGVtcGVyYXR1cmU6IGN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlLFxyXG4gICAgICBwcmVjaXBpdGF0aW9uOiBjdXJyZW50V2VhdGhlci5wcmVjaXBpdGF0aW9uLFxyXG4gICAgICBodW1pZGl0eTogY3VycmVudFdlYXRoZXIuaHVtaWRpdHksXHJcbiAgICAgIHdpbmRzcGVlZDogY3VycmVudFdlYXRoZXIud2luZHNwZWVkLFxyXG4gICAgICB3ZWF0aGVyY29uOiBjdXJyZW50V2VhdGhlci53ZWF0aGVyY29uLFxyXG4gICAgICBnZXRJY29uTGluazogY3VycmVudFdlYXRoZXIuZ2V0SWNvbkxpbmssXHJcbiAgICAgIGdldEJhY2tncm91bmRMaW5rOiBjdXJyZW50V2VhdGhlci5nZXRCYWNrZ3JvdW5kTGlua1xyXG4gICAgfVxyXG4gICAgZGF5c0ZvcmVjYXN0WzBdLmRhdGEuc3BsaWNlKDAsMCxjdXJyZW50SG91cik7XHJcbiAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY3VycmVudEhvdXIgPSB7XHJcbiAgICAgIGRhdGU6IGN1cnJlbnRXZWF0aGVyLmRhdGUsXHJcbiAgICAgIHRpbWU6IGN1cnJlbnRXZWF0aGVyLmdldEN1cnJlbnRUaW1lKCksXHJcbiAgICAgIHRlbXBlcmF0dXJlOiBjdXJyZW50V2VhdGhlci50ZW1wZXJhdHVyZSxcclxuICAgICAgcHJlY2lwaXRhdGlvbjogY3VycmVudFdlYXRoZXIucHJlY2lwaXRhdGlvbixcclxuICAgICAgaHVtaWRpdHk6IGN1cnJlbnRXZWF0aGVyLmh1bWlkaXR5LFxyXG4gICAgICB3aW5kc3BlZWQ6IGN1cnJlbnRXZWF0aGVyLndpbmRzcGVlZCxcclxuICAgICAgd2VhdGhlcmNvbjogY3VycmVudFdlYXRoZXIud2VhdGhlcmNvbixcclxuICAgICAgZ2V0SWNvbkxpbms6IGN1cnJlbnRXZWF0aGVyLmdldEljb25MaW5rLFxyXG4gICAgICBnZXRCYWNrZ3JvdW5kTGluazogY3VycmVudFdlYXRoZXIuZ2V0QmFja2dyb3VuZExpbmtcclxuICAgIH07XHJcbiAgICBjb25zdCB0b2RheSA9IGNyZWF0ZURheU9iamVjdChbY3VycmVudEhvdXJdKTtcclxuICAgIGRheXNGb3JlY2FzdC5zcGxpY2UoMCwwLHRvZGF5KTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHdyaXRlV2VhdGhlcmludG9PYmplY3RzKGN1cnJlbnRXZWF0aGVyUHJvbWlzZSwgZm9yZWNhc3RQcm9taXNlKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIFByb21pc2UuYWxsKFtjdXJyZW50V2VhdGhlclByb21pc2UsIGZvcmVjYXN0UHJvbWlzZV0pLnRoZW4oKHZhbHVlcykgPT4ge1xyXG4gICAgICBjb25zdCBkYXlzRm9yZWNhc3QgPSBbXTtcclxuICAgICAgY29uc3QgY3VycmVudERhdGEgPSB2YWx1ZXNbMF07XHJcbiAgICAgIGNvbnN0IGZvcmVjYXN0ID0gdmFsdWVzWzFdO1xyXG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YURheXMgPSBzcGxpdEludG9EYXlzKHZhbHVlc1sxXSk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gY3JlYXRlQ3VycmVudFdlYXRoZXIoXHJcbiAgICAgICAgbmV3IERhdGUoY3VycmVudERhdGEuZHQgKiAxMDAwKSxcclxuICAgICAgICBjdXJyZW50RGF0YS5jb29yZC5sb24sXHJcbiAgICAgICAgY3VycmVudERhdGEuY29vcmQubGF0LFxyXG4gICAgICAgIGN1cnJlbnREYXRhLm1haW4udGVtcCxcclxuICAgICAgICBmb3JlY2FzdC5saXN0WzBdLnBvcCxcclxuICAgICAgICBjdXJyZW50RGF0YS5tYWluLmh1bWlkaXR5LFxyXG4gICAgICAgIGN1cnJlbnREYXRhLndpbmQuc3BlZWQsXHJcbiAgICAgICAgY3VycmVudERhdGEud2VhdGhlclswXS5tYWluXHJcbiAgICAgICk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VhdGhlckRhdGFEYXlzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgZGF5RGF0YSA9IHdlYXRoZXJEYXRhRGF5c1tpXTtcclxuICAgICAgICBkYXlzRm9yZWNhc3RbaV0gPSBjcmVhdGVEYXlPYmplY3QoZGF5RGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkQ3VycmVudFdlYXRoZXJUb0ZvcmVjYXN0KGN1cnJlbnRXZWF0aGVyLGRheXNGb3JlY2FzdCk7XHJcbiAgICAgIHJlc29sdmUoW2N1cnJlbnRXZWF0aGVyLCBkYXlzRm9yZWNhc3RdKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBrZWx2aW5Ub0ZhaHJlbmhlaXQodGVtcCkge1xyXG4gIHJldHVybiAodGVtcCAtIDI3My4xNSkgKiAxLjggKyAzMi4wO1xyXG59XHJcblxyXG5mdW5jdGlvbiBrZWx2aW5Ub0NlbHNpdXModGVtcCkge1xyXG4gIHJldHVybiB0ZW1wIC0gMjczLjE1O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmYWhyZW5oZWl0VG9DZWxzaXVzKHRlbXApIHtcclxuICByZXR1cm4gKHRlbXAgLSAzMikgLyAxLjg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNlbHNpdXNUb0ZhaHJlbmhlaXQodGVtcCkge1xyXG4gIHJldHVybiB0ZW1wICogMS44ICsgMzI7XHJcbn1cclxuZXhwb3J0IHtcclxuICBudW1iZXJUb1dvcmQsXHJcbiAgc3BsaXRJbnRvRGF5cyxcclxuICB3cml0ZVdlYXRoZXJpbnRvT2JqZWN0cyxcclxuICBrZWx2aW5Ub0ZhaHJlbmhlaXQsXHJcbiAga2VsdmluVG9DZWxzaXVzLFxyXG4gIGZhaHJlbmhlaXRUb0NlbHNpdXMsXHJcbiAgY2Vsc2l1c1RvRmFocmVuaGVpdCxcclxufTtcclxuIiwiZnVuY3Rpb24gdGVzdFBhZ2VMb2FkRGF0YShjdXJyZW50V2VhdGhlciwgZGF5c0ZvcmVjYXN0LCBrZWx2aW5Ub0NlbHNpdXMsa2VsdmluVG9GYWhyZW5oZWl0KSB7XHJcbiAgY29uc29sZS5sb2coXCJDVVJSRU5UIFdFQVRIRVIgQ0FSRCEhISEhISEhISEhISEhXCIpO1xyXG4gIGNvbnNvbGUubG9nKFwiSWNvbjogXCIsIGN1cnJlbnRXZWF0aGVyLmdldEljb25MaW5rKCkpO1xyXG4gIGNvbnNvbGUubG9nKFwiQmFja2dyb3VuZDogXCIsIGN1cnJlbnRXZWF0aGVyLmdldEJhY2tncm91bmRMaW5rKCkpO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJ0ZW1wZXJhdHVyZSBpbiDCsEM6IFwiLFxyXG4gICAga2VsdmluVG9DZWxzaXVzKGN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlKVxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcInRlbXBlcmF0dXJlIGluIMKwRjogXCIsXHJcbiAgICBrZWx2aW5Ub0ZhaHJlbmhlaXQoY3VycmVudFdlYXRoZXIudGVtcGVyYXR1cmUpXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcInBvcDogXCIsIGN1cnJlbnRXZWF0aGVyLnByZWNpcGl0YXRpb24pO1xyXG4gIGNvbnNvbGUubG9nKFwid2luZHNwZWVkOiBcIiwgY3VycmVudFdlYXRoZXIud2luZHNwZWVkKTtcclxuICBjb25zb2xlLmxvZyhcImh1bWlkaXR5OiBcIiwgY3VycmVudFdlYXRoZXIuaHVtaWRpdHkpO1xyXG4gIGNvbnNvbGUubG9nKFwiRGF5OiBcIiwgY3VycmVudFdlYXRoZXIuZ2V0V2Vla0RheSgpKTtcclxuICBjb25zb2xlLmxvZyhcIk1vbnRoIGFuZCBEYXkgRGF0ZTogXCIsIGN1cnJlbnRXZWF0aGVyLmdldE1vbnRoQW5kRGF5RGF0ZShcIkRFXCIpKTtcclxuICBjdXJyZW50V2VhdGhlclxyXG4gICAgLmdldENpdHlOYW1lQW5kQ291bnRyeUNvZGUoKVxyXG4gICAgLnRoZW4oKGNpdHlDb3VudHJ5KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2l0eSBhbmQgQ291bnRyeTogXCIsIGNpdHlDb3VudHJ5KTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVGltZTogXCIsIGN1cnJlbnRXZWF0aGVyLmdldEN1cnJlbnRUaW1lKCkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkhPVVIgREFUQSBTRUNUSU9OICEhISEhISEhISEhISEhISEhIVwiKTtcclxuICAgICAgZGF5c0ZvcmVjYXN0WzBdLmRhdGEuZm9yRWFjaCgoaG91cikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGltZTogXCIsIGhvdXIudGltZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJY29uOiBcIiwgaG91ci5nZXRJY29uTGluaygpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRlbXBlcmF0dXJlIGluIMKwQzogXCIsIGtlbHZpblRvQ2Vsc2l1cyhob3VyLnRlbXBlcmF0dXJlKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUZW1wZXJhdHVyZSBpbiDCsEY6IFwiLCBrZWx2aW5Ub0ZhaHJlbmhlaXQoaG91ci50ZW1wZXJhdHVyZSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJEQVkgQ0FSRFMgU0VDVElPTiEhISEhISEhISEhISEhISEhXCIpO1xyXG4gICAgICBkYXlzRm9yZWNhc3QuZm9yRWFjaCgoZGF5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBcIldlZWtkYXk6IFwiLFxyXG4gICAgICAgICAgZGF5LmdldFdlZWtEYXkoKSAhPT0gY3VycmVudFdlYXRoZXIuZ2V0V2Vla0RheSgpXHJcbiAgICAgICAgICAgID8gZGF5LmdldFdlZWtEYXkoKVxyXG4gICAgICAgICAgICA6IFwidG9kYXlcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNb250aEFuZERheTogXCIsIGRheS5nZXRNb250aEFuZERheURhdGUoXCJERVwiKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJY29uOiBcIiwgZGF5LmdldEljb25MaW5rKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWluIFRlbXBlcmF0dXJlIGluIMKwQzogXCIsIGtlbHZpblRvQ2Vsc2l1cyhkYXkuZ2V0TWluVGVtcCgpKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXggVGVtcGVyYXR1cmUgaW4gwrBDOiBcIiwga2VsdmluVG9DZWxzaXVzKGRheS5nZXRNYXhUZW1wKCkpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1pbiBUZW1wZXJhdHVyZSBpbiDCsEY6IFwiLCBrZWx2aW5Ub0ZhaHJlbmhlaXQoZGF5LmdldE1pblRlbXAoKSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWF4IFRlbXBlcmF0dXJlIGluIMKwRjogXCIsIGtlbHZpblRvRmFocmVuaGVpdChkYXkuZ2V0TWF4VGVtcCgpKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IHsgdGVzdFBhZ2VMb2FkRGF0YSB9O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1lbHNlLXJldHVybiAqL1xyXG5mdW5jdGlvbiBnZXRDaXR5Q29vcmRpbmF0ZXMoY2l0eU5hbWUsIGNvdW50cnkpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPXske2NpdHlOYW1lfX0seyR7Y291bnRyeX19JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdHVzIHdhcyAyMDBcIik7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShbdmFsdWVbMF0ubGF0LCB2YWx1ZVswXS5sb25dKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKGNpdHksIGNvdW50cnkpIHtcclxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZ2V0Q2l0eUNvb3JkaW5hdGVzKGNpdHksIGNvdW50cnkpLnRoZW4oKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goXHJcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7Y29vcmRpbmF0ZXNbMF19Jmxvbj0ke2Nvb3JkaW5hdGVzWzFdfSZhcHBpZD1kMTQ1OTc0ZmFjOGZiODAzOTAwNDIyYzJjYzFkNjIwZWBcclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSlcclxuICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2NpdHlbMF19Jmxvbj0ke2NpdHlbMV19JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiBQcm9taXNlLnJlc29sdmUodmFsdWUpKVxyXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpdmVEYXlGb3JlY2FzdChjaXR5LCBjb3VudHJ5KSB7XHJcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGdldENpdHlDb29yZGluYXRlcyhjaXR5LCBjb3VudHJ5KS50aGVuKChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgICAgIGZldGNoKFxyXG4gICAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtjb29yZGluYXRlc1swXX0mbG9uPSR7Y29vcmRpbmF0ZXNbMV19JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiBQcm9taXNlLnJlc29sdmUodmFsdWUpKVxyXG4gICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2NpdHlbMF19Jmxvbj0ke2NpdHlbMV19JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiBQcm9taXNlLnJlc29sdmUodmFsdWUpKVxyXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldENpdHlDb29yZGluYXRlcywgZ2V0Q3VycmVudFdlYXRoZXIsIGdldEZpdmVEYXlGb3JlY2FzdCB9O1xyXG4iLCJpbXBvcnQgQ2xlYXIgZnJvbSBcIi4vbWVkaWEvY2xlYXIubXA0XCI7XHJcbmltcG9ydCBDbG91ZHMgZnJvbSBcIi4vbWVkaWEvY2xvdWR5Lm1wNFwiO1xyXG5pbXBvcnQgUmFpbiBmcm9tIFwiLi9tZWRpYS9yYWluLm1wNFwiO1xyXG5pbXBvcnQgRHJpenpsZSBmcm9tIFwiLi9tZWRpYS9kcml6emxlLm1wNFwiO1xyXG5pbXBvcnQgU25vdyBmcm9tIFwiLi9tZWRpYS9zbm93Lm1wNFwiO1xyXG5pbXBvcnQgQ2xlYXJJY29uIGZyb20gXCIuL21lZGlhL2NsZWFySWNvbi5zdmdcIjtcclxuaW1wb3J0IENsb3Vkc0ljb24gZnJvbSBcIi4vbWVkaWEvY2xvdWR5SWNvbi5zdmdcIjtcclxuaW1wb3J0IFJhaW5JY29uIGZyb20gXCIuL21lZGlhL3JhaW5JY29uLnN2Z1wiO1xyXG5pbXBvcnQgRHJpenpsZUljb24gZnJvbSBcIi4vbWVkaWEvZHJpenpsZUljb24uc3ZnXCI7XHJcbmltcG9ydCBTbm93SWNvbiBmcm9tIFwiLi9tZWRpYS9zbm93SWNvbi5zdmdcIjtcclxuXHJcbmNvbnN0IG1lZGlhTGlua3MgPSAoc3RhdGUpID0+ICh7XHJcbiAgZ2V0QmFja2dyb3VuZExpbmsoKSB7XHJcbiAgICBsZXQgdmlkZW9MaW5rID0gXCJcIjtcclxuICAgIGNvbnN0IHdlYXRoZXJjb24gPSBzdGF0ZS53ZWF0aGVyY29uXHJcbiAgICAgID8gc3RhdGUud2VhdGhlcmNvblxyXG4gICAgICA6IHN0YXRlLmdldERvbWluYXRpbmdXZWF0aGVyaWNvbigpO1xyXG4gICAgc3dpdGNoICh3ZWF0aGVyY29uKSB7XHJcbiAgICAgIGNhc2UgXCJDbG91ZHNcIjpcclxuICAgICAgICB2aWRlb0xpbmsgPSBgJHtDbG91ZHN9YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkNsZWFyXCI6XHJcbiAgICAgICAgdmlkZW9MaW5rID0gYCR7Q2xlYXJ9YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlNub3dcIjpcclxuICAgICAgICB2aWRlb0xpbmsgPSBgJHtTbm93fWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJSYWluXCI6XHJcbiAgICAgICAgdmlkZW9MaW5rID0gYCR7UmFpbn1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiRHJpenpsZVwiOlxyXG4gICAgICAgIHZpZGVvTGluayA9IGAke0RyaXp6bGV9YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBhbGVydChcIm5vIHdlYXRoZXJjb24gc2V0IHlldFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2aWRlb0xpbms7XHJcbiAgfSxcclxuXHJcbiAgZ2V0SWNvbkxpbmsoKSB7XHJcbiAgICBsZXQgaWNvbkxpbmsgPSBcIlwiO1xyXG4gICAgY29uc3Qgd2VhdGhlcmNvbiA9IHN0YXRlLndlYXRoZXJjb25cclxuICAgICAgPyBzdGF0ZS53ZWF0aGVyY29uXHJcbiAgICAgIDogc3RhdGUuZ2V0RG9taW5hdGluZ1dlYXRoZXJpY29uKCk7XHJcbiAgICBzd2l0Y2ggKHdlYXRoZXJjb24pIHtcclxuICAgICAgY2FzZSBcIkNsb3Vkc1wiOlxyXG4gICAgICAgIGljb25MaW5rID0gYCR7Q2xvdWRzSWNvbn1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiQ2xlYXJcIjpcclxuICAgICAgICBpY29uTGluayA9IGAke0NsZWFySWNvbn1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiU25vd1wiOlxyXG4gICAgICAgIGljb25MaW5rID0gYCR7U25vd0ljb259YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlJhaW5cIjpcclxuICAgICAgICBpY29uTGluayA9IGAke1JhaW5JY29ufWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJEcml6emxlXCI6XHJcbiAgICAgICAgaWNvbkxpbmsgPSBgJHtEcml6emxlSWNvbn1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGFsZXJ0KFwibm8gd2VhdGhlcmNvbiBzZXQgeWV0XCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGljb25MaW5rO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgZGF0ZURhdGEgPSAoc3RhdGUpID0+ICh7XHJcbiAgZ2V0V2Vla0RheSgpIHtcclxuICAgIGNvbnN0IHdlZWsgPSBbXHJcbiAgICAgIFwiU3VuZGF5XCIsXHJcbiAgICAgIFwiTW9uZGF5XCIsXHJcbiAgICAgIFwiVHVlc2RheVwiLFxyXG4gICAgICBcIldlZG5lc2RheVwiLFxyXG4gICAgICBcIlRodXJzZGF5XCIsXHJcbiAgICAgIFwiRnJpZGF5XCIsXHJcbiAgICAgIFwiU2F0dXJkYXlcIixcclxuICAgIF07XHJcbiAgICByZXR1cm4gd2Vla1tzdGF0ZS5kYXRlLmdldERheSgpXTtcclxuICB9LFxyXG5cclxuICBnZXRNb250aEFuZERheURhdGUobGFuZ3VhZ2VUYWcpIHtcclxuICAgIHJldHVybiBzdGF0ZS5kYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhgJHtsYW5ndWFnZVRhZ31gLCB7XHJcbiAgICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgICAgZGF5OiBcIjItZGlnaXRcIixcclxuICAgIH0pO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudFdlYXRoZXIoXHJcbiAgZGF0ZSxcclxuICBsb24sXHJcbiAgbGF0LFxyXG4gIHRlbXBlcmF0dXJlLFxyXG4gIHByZWNpcGl0YXRpb24sXHJcbiAgaHVtaWRpdHksXHJcbiAgd2luZHNwZWVkLFxyXG4gIHdlYXRoZXJjb25cclxuKSB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0eU5hbWVBbmRDb3VudHJ5Q29kZSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL3JldmVyc2U/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShgJHt2YWx1ZVswXS5uYW1lfSwgJHt2YWx1ZVswXS5jb3VudHJ5fWApO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnIpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBpZiBtaW51dGUgaXMgb25lIGRpZ2l0LCBhIDAgZ2V0cyBhZGRlZCB0byB0aGUgbWludXRlIHRvIHNob3cgYSAyIGRpZ2l0IG1pbnV0ZSBjb3VudFxyXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lKCkge1xyXG4gICAgcmV0dXJuIGAke2RhdGUuZ2V0SG91cnMoKX06JHtcclxuICAgICAgZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5sZW5ndGggPCAyXHJcbiAgICAgICAgPyBgJHtkYXRlLmdldE1pbnV0ZXMoKX0wYFxyXG4gICAgICAgIDogZGF0ZS5nZXRNaW51dGVzKClcclxuICAgIH1gO1xyXG4gIH1cclxuXHJcbiAgLy8gQXNzaWducyB0aGUgbWV0aG9kcyBmcm9tIG1lZGlhTGlua3MgYW5kIGRhdGFEYXRhIHRvIHRoZSByZXR1cm5lZCBvYmplY3QgdmlhIHNwcmVhZCBvcGVyYXRvclxyXG4gIHJldHVybiB7XHJcbiAgICBkYXRlLFxyXG4gICAgdGVtcGVyYXR1cmUsXHJcbiAgICBwcmVjaXBpdGF0aW9uLFxyXG4gICAgaHVtaWRpdHksXHJcbiAgICB3aW5kc3BlZWQsXHJcbiAgICB3ZWF0aGVyY29uLFxyXG4gICAgZ2V0Q2l0eU5hbWVBbmRDb3VudHJ5Q29kZSxcclxuICAgIGdldEN1cnJlbnRUaW1lLFxyXG4gICAgLi4ubWVkaWFMaW5rcyh7XHJcbiAgICAgIGRhdGUsXHJcbiAgICAgIHRlbXBlcmF0dXJlLFxyXG4gICAgICBwcmVjaXBpdGF0aW9uLFxyXG4gICAgICBodW1pZGl0eSxcclxuICAgICAgd2luZHNwZWVkLFxyXG4gICAgICB3ZWF0aGVyY29uLFxyXG4gICAgICBnZXRDaXR5TmFtZUFuZENvdW50cnlDb2RlLFxyXG4gICAgICBnZXRDdXJyZW50VGltZSxcclxuICAgIH0pLFxyXG4gICAgLi4uZGF0ZURhdGEoe1xyXG4gICAgICBkYXRlLFxyXG4gICAgICB0ZW1wZXJhdHVyZSxcclxuICAgICAgcHJlY2lwaXRhdGlvbixcclxuICAgICAgaHVtaWRpdHksXHJcbiAgICAgIHdpbmRzcGVlZCxcclxuICAgICAgd2VhdGhlcmNvbixcclxuICAgICAgZ2V0Q2l0eU5hbWVBbmRDb3VudHJ5Q29kZSxcclxuICAgICAgZ2V0Q3VycmVudFRpbWUsXHJcbiAgICB9KSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb3VyT2JqZWN0KGhvdXJEYXRhKSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGhvdXJEYXRhLmR0ICogMTAwMCk7XHJcbiAgY29uc3QgdGltZSA9IGAke2RhdGUuZ2V0SG91cnMoKX06JHtkYXRlLmdldE1pbnV0ZXMoKX0wYDtcclxuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGhvdXJEYXRhLm1haW4udGVtcDtcclxuICBjb25zdCBwcmVjaXBpdGF0aW9uID0gaG91ckRhdGEucG9wO1xyXG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IGhvdXJEYXRhLm1haW47XHJcbiAgY29uc3Qgd2luZHNwZWVkID0gaG91ckRhdGEud2luZC5zcGVlZDtcclxuICBjb25zdCB3ZWF0aGVyY29uID0gaG91ckRhdGEud2VhdGhlclswXS5tYWluO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF0ZSxcclxuICAgIHRpbWUsXHJcbiAgICB0ZW1wZXJhdHVyZSxcclxuICAgIHByZWNpcGl0YXRpb24sXHJcbiAgICBodW1pZGl0eSxcclxuICAgIHdpbmRzcGVlZCxcclxuICAgIHdlYXRoZXJjb24sXHJcbiAgICAuLi5tZWRpYUxpbmtzKHtcclxuICAgICAgZGF0ZSxcclxuICAgICAgdGltZSxcclxuICAgICAgdGVtcGVyYXR1cmUsXHJcbiAgICAgIHByZWNpcGl0YXRpb24sXHJcbiAgICAgIGh1bWlkaXR5LFxyXG4gICAgICB3aW5kc3BlZWQsXHJcbiAgICAgIHdlYXRoZXJjb24sXHJcbiAgICB9KSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXlPYmplY3QoZGF0YSkge1xyXG4gIGNvbnN0IHsgZGF0ZSB9ID0gZGF0YVswXTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0TWluVGVtcCgpIHtcclxuICAgIGNvbnN0IGNvbGRlc3RIb3VyID0gZGF0YS5yZWR1Y2UoXHJcbiAgICAgIChhY2N1bSwgY3VycmVudCkgPT5cclxuICAgICAgICBhY2N1bS50ZW1wZXJhdHVyZSA8IGN1cnJlbnQudGVtcGVyYXR1cmUgPyBhY2N1bSA6IGN1cnJlbnQsXHJcbiAgICAgIGRhdGFbMF1cclxuICAgICk7XHJcbiAgICByZXR1cm4gY29sZGVzdEhvdXIudGVtcGVyYXR1cmU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRNYXhUZW1wKCkge1xyXG4gICAgY29uc3QgaG90dGVzdEhvdXIgPSBkYXRhLnJlZHVjZShcclxuICAgICAgKGFjY3VtLCBjdXJyZW50KSA9PlxyXG4gICAgICAgIGFjY3VtLnRlbXBlcmF0dXJlID4gY3VycmVudC50ZW1wZXJhdHVyZSA/IGFjY3VtIDogY3VycmVudCxcclxuICAgICAgZGF0YVswXVxyXG4gICAgKTtcclxuICAgIHJldHVybiBob3R0ZXN0SG91ci50ZW1wZXJhdHVyZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldERvbWluYXRpbmdXZWF0aGVyaWNvbigpIHtcclxuICAgIGNvbnN0IHRodW5kZXIgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIlRodW5kZXJcIik7XHJcbiAgICBjb25zdCBkcml6emxlID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJEcml6emxlXCIpO1xyXG4gICAgY29uc3QgcmFpbiA9IGRhdGEuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LndlYXRoZXJjb24gPT09IFwiUmFpblwiKTtcclxuICAgIGNvbnN0IHNub3cgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIlNub3dcIik7XHJcbiAgICBjb25zdCBjbGVhciA9IGRhdGEuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LndlYXRoZXJjb24gPT09IFwiQ2xlYXJcIik7XHJcbiAgICBjb25zdCBjbG91ZHMgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIkNsb3Vkc1wiKTtcclxuICAgIGNvbnN0IHNvcnRlZFdlYXRoZXIgPSBbdGh1bmRlciwgZHJpenpsZSwgcmFpbiwgc25vdywgY2xlYXIsIGNsb3Vkc10uc29ydChcclxuICAgICAgKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGhcclxuICAgICk7XHJcbiAgICByZXR1cm4gc29ydGVkV2VhdGhlclswXVswXS53ZWF0aGVyY29uO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGUsXHJcbiAgICBkYXRhLFxyXG4gICAgZ2V0TWluVGVtcCxcclxuICAgIGdldE1heFRlbXAsXHJcbiAgICBnZXREb21pbmF0aW5nV2VhdGhlcmljb24sXHJcbiAgICAuLi5kYXRlRGF0YSh7XHJcbiAgICAgIGRhdGUsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGdldE1pblRlbXAsXHJcbiAgICAgIGdldE1heFRlbXAsXHJcbiAgICAgIGdldERvbWluYXRpbmdXZWF0aGVyaWNvbixcclxuICAgIH0pLFxyXG4gICAgLi4ubWVkaWFMaW5rcyh7XHJcbiAgICAgIGRhdGUsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGdldE1pblRlbXAsXHJcbiAgICAgIGdldE1heFRlbXAsXHJcbiAgICAgIGdldERvbWluYXRpbmdXZWF0aGVyaWNvbixcclxuICAgIH0pLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUN1cnJlbnRXZWF0aGVyLCBjcmVhdGVIb3VyT2JqZWN0LCBjcmVhdGVEYXlPYmplY3QgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnMgKi9cclxuaW1wb3J0IHtcclxuICB3cml0ZVdlYXRoZXJpbnRvT2JqZWN0cyxcclxuICBrZWx2aW5Ub0ZhaHJlbmhlaXQsXHJcbiAga2VsdmluVG9DZWxzaXVzLFxyXG4gIGZhaHJlbmhlaXRUb0NlbHNpdXMsXHJcbiAgY2Vsc2l1c1RvRmFocmVuaGVpdCxcclxufSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IGdldEN1cnJlbnRXZWF0aGVyLCBnZXRGaXZlRGF5Rm9yZWNhc3QgfSBmcm9tIFwiLi93ZWF0aGVyQVBJXCI7XHJcblxyXG5pbXBvcnQgeyB0ZXN0UGFnZUxvYWREYXRhIH0gZnJvbSBcIi4vdGVzdGluZ1wiO1xyXG5cclxuaW1wb3J0IHsgcGFnZUxvYWQgfSBmcm9tIFwiLi9kb21DcmVhdGlvblwiO1xyXG5cclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmxldCBjaXR5ID0gXCJcIjtcclxubGV0IGNpdHlDb29yZHMgPSBbXTtcclxubGV0IGNvdW50cnkgPSBcIlwiO1xyXG5sZXQgY3VycmVudFdlYXRoZXIgPSB7fTtcclxubGV0IGRheXNGb3JlY2FzdCA9IHt9O1xyXG5cclxud3JpdGVXZWF0aGVyaW50b09iamVjdHMoXHJcbiAgZ2V0Q3VycmVudFdlYXRoZXIoXCJzaWRuZXlcIiwgXCJBVVwiKSxcclxuICBnZXRGaXZlRGF5Rm9yZWNhc3QoXCJzaWRuZXlcIiwgXCJBVVwiKVxyXG4pXHJcbiAgLnRoZW4oKHdlYXRoZXJPYmplY3RzKSA9PiB7XHJcbiAgICBbY3VycmVudFdlYXRoZXIsIGRheXNGb3JlY2FzdF0gPSB3ZWF0aGVyT2JqZWN0cztcclxuICB9KVxyXG4gIC50aGVuKCgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYDx2aWRlbyBjbGFzcyA9XCJ2aWRlb1wiIGF1dG9wbGF5IG11dGVkIGxvb3AgaWQ9XCJteVZpZGVvXCI+XHJcbiAgICA8c291cmNlIHNyYz1cIiR7Y3VycmVudFdlYXRoZXIuZ2V0QmFja2dyb3VuZExpbmsoKX1cIiB0eXBlPVwidmlkZW8vbXA0XCI+XHJcbiAgICA8L3ZpZGVvPjxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PGRpdiBjbGFzcz1cImN1cnJlbnRXXCI+PGltZyBjbGFzcz1cImljb25cIiBzcmM9XCIke2N1cnJlbnRXZWF0aGVyLmdldEljb25MaW5rKCl9XCI+PC9kaXY+PC9kaXY+XHJcbiAgICBgO1xyXG4gIH0pO1xyXG5cclxubmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXHJcbiAgICAgIChsb2NhdGlvbk9iamVjdCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoW1xyXG4gICAgICAgICAgbG9jYXRpb25PYmplY3QuY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgbG9jYXRpb25PYmplY3QuY29vcmRzLmxvbmdpdHVkZSxcclxuICAgICAgICBdKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgIHJlamVjdChbXCJkw7xzc2VsZG9yZlwiLCBcIkRFXCJdKTtcclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlamVjdChbXCJkw7xzc2VsZG9yZlwiLCBcIkRFXCJdKTtcclxuICB9XHJcbn0pXHJcbiAgLnRoZW4oKGxvY2F0aW9uKSA9PlxyXG4gICAgd3JpdGVXZWF0aGVyaW50b09iamVjdHMoXHJcbiAgICAgIGdldEN1cnJlbnRXZWF0aGVyKGxvY2F0aW9uKSxcclxuICAgICAgZ2V0Rml2ZURheUZvcmVjYXN0KGxvY2F0aW9uKVxyXG4gICAgKVxyXG4gIClcclxuICAuY2F0Y2goKGZhbGxiYWNrTG9jYXRpb24pID0+XHJcbiAgICB3cml0ZVdlYXRoZXJpbnRvT2JqZWN0cyhcclxuICAgICAgZ2V0Q3VycmVudFdlYXRoZXIoZmFsbGJhY2tMb2NhdGlvblswXSwgZmFsbGJhY2tMb2NhdGlvblsxXSksXHJcbiAgICAgIGdldEZpdmVEYXlGb3JlY2FzdChmYWxsYmFja0xvY2F0aW9uWzBdLCBmYWxsYmFja0xvY2F0aW9uWzFdKVxyXG4gICAgKVxyXG4gIClcclxuICAudGhlbigod2VhdGhlck9iamVjdHMpID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xyXG4gICAgW2N1cnJlbnRXZWF0aGVyLCBkYXlzRm9yZWNhc3RdID0gd2VhdGhlck9iamVjdHM7XHJcbiAgICB0ZXN0UGFnZUxvYWREYXRhKFxyXG4gICAgICBjdXJyZW50V2VhdGhlcixcclxuICAgICAgZGF5c0ZvcmVjYXN0LFxyXG4gICAgICBrZWx2aW5Ub0NlbHNpdXMsXHJcbiAgICAgIGtlbHZpblRvRmFocmVuaGVpdFxyXG4gICAgKTtcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICB0aHJvdyBlcnI7XHJcbiAgfSlcclxuICAudGhlbigoKSA9PiB7XHJcbiAgICBwYWdlTG9hZChjdXJyZW50V2VhdGhlcixkYXlzRm9yZWNhc3QpO1xyXG4gIH0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=