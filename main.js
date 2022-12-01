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
___CSS_LOADER_EXPORT___.push([module.id, ".video {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    min-height: 100%;\r\n\r\n}\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%) scale(1);\r\n    \r\n    max-height: 100vh;\r\n    \r\n    z-index: 4;\r\n    width: 80%;\r\n    height: 90%;\r\n    border-radius: 30px;\r\n    backdrop-filter: blur(100px);\r\n    \r\n}\r\n\r\n.currentW {\r\n    width: 85%;\r\n    height: 70%;\r\n    background-color: white;\r\n    border-radius: 30px;\r\n    position: fixed;\r\n    top:30%;\r\n    left:50%;\r\n    transform: translate(-50%, -30%) scale(1);\r\n    filter: drop-shadow(0 1px 1px black);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,WAAW;IACX,gBAAgB;;AAEpB;;AAEA;IACI,eAAe;IACf,OAAO;IACP,QAAQ;IACR,yCAAyC;;IAEzC,iBAAiB;;IAEjB,UAAU;IACV,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,4BAA4B;;AAEhC;;AAEA;IACI,UAAU;IACV,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,OAAO;IACP,QAAQ;IACR,yCAAyC;IACzC,oCAAoC;AACxC","sourcesContent":[".video {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    min-height: 100%;\r\n\r\n}\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%) scale(1);\r\n    \r\n    max-height: 100vh;\r\n    \r\n    z-index: 4;\r\n    width: 80%;\r\n    height: 90%;\r\n    border-radius: 30px;\r\n    backdrop-filter: blur(100px);\r\n    \r\n}\r\n\r\n.currentW {\r\n    width: 85%;\r\n    height: 70%;\r\n    background-color: white;\r\n    border-radius: 30px;\r\n    position: fixed;\r\n    top:30%;\r\n    left:50%;\r\n    transform: translate(-50%, -30%) scale(1);\r\n    filter: drop-shadow(0 1px 1px black);\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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

async function writeWeatherintoObjects(currentWeatherPromise, forecastPromise) {
  return new Promise((resolve, reject) => {
    Promise.all([currentWeatherPromise, forecastPromise]).then((values) => {
      const dayWeatherObjects = [];
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
        dayWeatherObjects[i] = (0,_weatherObjects__WEBPACK_IMPORTED_MODULE_0__.createDayObject)(dayData);
      }
      resolve([currentWeather, dayWeatherObjects]);
    });
  });
}

function kelvinToFahrenheit(temp) {
  return (temp - 273.15) * 1.8 + 32.0;
}

function kelvinToCelsius(temp) {
  return temp - 273.15;
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
  function getMonthAndDayDate(languageTag) {
    return date.toLocaleDateString(`${languageTag}`, {
      month: "long",
      day: "2-digit",
    });
  }

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

  function getWeekDay() {
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return week[date.getDay()];
  }

  function getIconName() {}

  return {
    date,
    temperature,
    precipitation,
    humidity,
    windspeed,
    getCityNameAndCountryCode,
    getMonthAndDayDate,
    getCurrentTime,
    getWeekDay,
    getIconName,
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
  };
}

function createDayObject(data) {
  const { date } = data[0];

  function getMonthAndDayDate(languageTag) {
    return date.toLocaleDateString(`${languageTag}`, {
      month: "long",
      day: "2-digit",
    });
  }

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

  function getWeekDay() {
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return week[date.getDay()];
  }

  return {
    date,
    data,
    getMonthAndDayDate,
    getMinTemp,
    getMaxTemp,
    getDominatingWeathericon,
    getWeekDay,
  };
}




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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _media_clear_mp4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/clear.mp4 */ "./src/media/clear.mp4");
/* harmony import */ var _media_cloudy_mp4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/cloudy.mp4 */ "./src/media/cloudy.mp4");
/* harmony import */ var _media_rain_mp4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/rain.mp4 */ "./src/media/rain.mp4");
/* harmony import */ var _media_drizzle_mp4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media/drizzle.mp4 */ "./src/media/drizzle.mp4");
/* harmony import */ var _media_snow_mp4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media/snow.mp4 */ "./src/media/snow.mp4");
/* eslint-disable prefer-promise-reject-errors */










const testvar = `${_media_clear_mp4__WEBPACK_IMPORTED_MODULE_3__["default"]}`;
document.body.innerHTML = `<video class ="video" autoplay muted loop id="myVideo">
<source src="${testvar}" type="video/mp4">
</video><div class="overlay"><div class="currentW"></div></div>
`;



let city = "";
let cityCoords = [];
let country = "";
let currentWeather = {};
let daysForecast = {};

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
    console.log(weatherObjects);
    // tests object creation and object methods
    weatherObjects[0]
      .getCityNameAndCountryCode()
      .then((cityandcountry) => console.log(cityandcountry));
    console.log(weatherObjects[0].getMonthAndDayDate("DE"));
    console.log(weatherObjects[0].getCurrentTime());
    console.log(weatherObjects[0].getWeekDay());
    console.log(weatherObjects[1][0].getMonthAndDayDate("DE"));
    console.log(weatherObjects[1][0].getMinTemp());
    console.log(weatherObjects[1][0].getMaxTemp());
    console.log(weatherObjects[1][0].getDominatingWeathericon());
    console.log(weatherObjects[1][0].getWeekDay());
    console.log(weatherObjects[1][0].date);
    // eslint-disable-next-line prefer-destructuring
    [currentWeather, daysForecast] = weatherObjects;
  })
  .catch((err) => {
    throw err;
  }).then(()=>{
    console.log(currentWeather);
    console.log(daysForecast);
  })

/*
function testGeocoding(cityName) {
  return new Promise((resolve, reject) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q={${cityName}}&appid=d145974fac8fb803900422c2cc1d620e`
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
*/
/*
getCityCoordinates("London", "US")
  .then((value) => getCurrentWeather(value[0], value[1]))
  .then((value) => fillWeatherobjectWithData(value))
  .then((value) => {
    console.log(value);
  });

getCityCoordinates("Duisburg")
  .then((value) => getCurrentWeather(value[0], value[1]))
  .then((value) => {
    const timetestutc = new Date(value.dt * 1000);
    console.log(timetestutc);
  });
const timetest = new Date();

console.log(timetest);
console.log(timetest.getTimezoneOffset());

getCityCoordinates("new york city")
  .then((coordinates) => getFiveDayForecast(coordinates[0], coordinates[1]))
  .then((forecast) => {
    console.log(forecast);
    for (let i = 0; i < forecast.list.length; i += 1) {
      const testTime = new Date(forecast.list[i].dt * 1000);
      console.log(testTime);
    }
  });

const stringtest = "one";

window[stringtest] = "two";
console.log(one);

function countalla(numberone) {
  function useNumberOne() {
    return numberone * numberone;
  }

  return { useNumberOne };
}

const testobject = countalla(3);
console.log(testobject.useNumberOne());

const testArray = [];
for (let i = 0; i < 3; i += 1) {
  testArray[i] = i;
}

console.log(testArray);

function createTestObject(temperature, keytwo, keythree) {
  return { temperature, keytwo, keythree };
}

const testobjecttwo = createTestObject(1, 2, 3);
console.log("testobject: ", testobjecttwo);
*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELEVBQUUsVUFBVTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21lZGlhL2NsZWFyLm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tZWRpYS9jbG91ZHkubXA0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21lZGlhL2RyaXp6bGUubXA0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21lZGlhL3JhaW4ubXA0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21lZGlhL3Nub3cubXA0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVscGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlck9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi52aWRlbyB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6NTAlO1xcclxcbiAgICBsZWZ0OjUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICAgIFxcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgXFxyXFxuICAgIHotaW5kZXg6IDQ7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAwcHgpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnRXIHtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgaGVpZ2h0OiA3MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDozMCU7XFxyXFxuICAgIGxlZnQ6NTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzAlKSBzY2FsZSgxKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAxcHggYmxhY2spO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUix5Q0FBeUM7O0lBRXpDLGlCQUFpQjs7SUFFakIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLE9BQU87SUFDUCxRQUFRO0lBQ1IseUNBQXlDO0lBQ3pDLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudmlkZW8ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOjUwJTtcXHJcXG4gICAgbGVmdDo1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbiAgICBcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICAgIFxcclxcbiAgICB6LWluZGV4OiA0O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwMHB4KTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50VyB7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIGhlaWdodDogNzAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6MzAlO1xcclxcbiAgICBsZWZ0OjUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTMwJSkgc2NhbGUoMSk7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggMXB4IGJsYWNrKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL2NsZWFyLm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3MvY2xvdWR5Lm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3MvZHJpenpsZS5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL3JhaW4ubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9zbm93Lm1wNFwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xyXG4gIGNyZWF0ZUhvdXJPYmplY3QsXHJcbiAgY3JlYXRlQ3VycmVudFdlYXRoZXIsXHJcbiAgY3JlYXRlRGF5T2JqZWN0LFxyXG59IGZyb20gXCIuL3dlYXRoZXJPYmplY3RzXCI7XHJcblxyXG5mdW5jdGlvbiBudW1iZXJUb1dvcmQobnVtYmVyKSB7XHJcbiAgY29uc3QgbnVtYmVycyA9IFtcIm9uZVwiLCBcInR3b1wiLCBcInRocmVlXCIsIFwiZm91clwiLCBcImZpdmVcIiwgXCJzaXhcIl07XHJcbiAgcmV0dXJuIG51bWJlcnNbbnVtYmVyXTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3BsaXRJbnRvRGF5cyhmb3JlY2FzdERhdGEpIHtcclxuICBjb25zdCBob3VybHlEYXRhT2JqZWN0cyA9IFtdO1xyXG4gIGNvbnN0IGRheURhdGFBcnJheXMgPSBbXTtcclxuICBmb3JlY2FzdERhdGEubGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBob3VybHlEYXRhT2JqZWN0cy5wdXNoKGNyZWF0ZUhvdXJPYmplY3QoaXRlbSkpO1xyXG4gIH0pO1xyXG4gIGlmIChob3VybHlEYXRhT2JqZWN0c1swXS5kYXRlLmdldEhvdXJzKCkgPiAyKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDY7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBzdGFydGluZ0RheURhdGUgPSBob3VybHlEYXRhT2JqZWN0c1swXS5kYXRlLmdldERhdGUoKTtcclxuICAgICAgY29uc3QgZGF5RGF0YSA9IGhvdXJseURhdGFPYmplY3RzLmZpbHRlcihcclxuICAgICAgICAoaG91ckRhdGEpID0+IGhvdXJEYXRhLmRhdGUuZ2V0RGF0ZSgpID09PSBzdGFydGluZ0RheURhdGVcclxuICAgICAgKTtcclxuICAgICAgaG91cmx5RGF0YU9iamVjdHMuc3BsaWNlKDAsIGRheURhdGEubGVuZ3RoKTtcclxuICAgICAgZGF5RGF0YUFycmF5cy5wdXNoKGRheURhdGEpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBzdGFydGluZ0RheURhdGUgPSBob3VybHlEYXRhT2JqZWN0c1swXS5kYXRlLmdldERhdGUoKTtcclxuICAgICAgY29uc3QgZGF5RGF0YSA9IGhvdXJseURhdGFPYmplY3RzLmZpbHRlcihcclxuICAgICAgICAoaG91ckRhdGEpID0+IGhvdXJEYXRhLmRhdGUuZ2V0RGF0ZSgpID09PSBzdGFydGluZ0RheURhdGVcclxuICAgICAgKTtcclxuICAgICAgaG91cmx5RGF0YU9iamVjdHMuc3BsaWNlKDAsIGRheURhdGEubGVuZ3RoKTtcclxuICAgICAgZGF5RGF0YUFycmF5cy5wdXNoKGRheURhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZGF5RGF0YUFycmF5cztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gd3JpdGVXZWF0aGVyaW50b09iamVjdHMoY3VycmVudFdlYXRoZXJQcm9taXNlLCBmb3JlY2FzdFByb21pc2UpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgUHJvbWlzZS5hbGwoW2N1cnJlbnRXZWF0aGVyUHJvbWlzZSwgZm9yZWNhc3RQcm9taXNlXSkudGhlbigodmFsdWVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRheVdlYXRoZXJPYmplY3RzID0gW107XHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gdmFsdWVzWzBdO1xyXG4gICAgICBjb25zdCBmb3JlY2FzdCA9IHZhbHVlc1sxXTtcclxuICAgICAgY29uc3Qgd2VhdGhlckRhdGFEYXlzID0gc3BsaXRJbnRvRGF5cyh2YWx1ZXNbMV0pO1xyXG4gICAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGNyZWF0ZUN1cnJlbnRXZWF0aGVyKFxyXG4gICAgICAgIG5ldyBEYXRlKGN1cnJlbnREYXRhLmR0ICogMTAwMCksXHJcbiAgICAgICAgY3VycmVudERhdGEuY29vcmQubG9uLFxyXG4gICAgICAgIGN1cnJlbnREYXRhLmNvb3JkLmxhdCxcclxuICAgICAgICBjdXJyZW50RGF0YS5tYWluLnRlbXAsXHJcbiAgICAgICAgZm9yZWNhc3QubGlzdFswXS5wb3AsXHJcbiAgICAgICAgY3VycmVudERhdGEubWFpbi5odW1pZGl0eSxcclxuICAgICAgICBjdXJyZW50RGF0YS53aW5kLnNwZWVkLFxyXG4gICAgICAgIGN1cnJlbnREYXRhLndlYXRoZXJbMF0ubWFpblxyXG4gICAgICApO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYXRoZXJEYXRhRGF5cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGRheURhdGEgPSB3ZWF0aGVyRGF0YURheXNbaV07XHJcbiAgICAgICAgZGF5V2VhdGhlck9iamVjdHNbaV0gPSBjcmVhdGVEYXlPYmplY3QoZGF5RGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzb2x2ZShbY3VycmVudFdlYXRoZXIsIGRheVdlYXRoZXJPYmplY3RzXSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24ga2VsdmluVG9GYWhyZW5oZWl0KHRlbXApIHtcclxuICByZXR1cm4gKHRlbXAgLSAyNzMuMTUpICogMS44ICsgMzIuMDtcclxufVxyXG5cclxuZnVuY3Rpb24ga2VsdmluVG9DZWxzaXVzKHRlbXApIHtcclxuICByZXR1cm4gdGVtcCAtIDI3My4xNTtcclxufVxyXG5leHBvcnQge1xyXG4gIG51bWJlclRvV29yZCxcclxuICBzcGxpdEludG9EYXlzLFxyXG4gIHdyaXRlV2VhdGhlcmludG9PYmplY3RzLFxyXG4gIGtlbHZpblRvRmFocmVuaGVpdCxcclxuICBrZWx2aW5Ub0NlbHNpdXMsXHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWVsc2UtcmV0dXJuICovXHJcbmZ1bmN0aW9uIGdldENpdHlDb29yZGluYXRlcyhjaXR5TmFtZSwgY291bnRyeSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9eyR7Y2l0eU5hbWV9fSx7JHtjb3VudHJ5fX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0dXMgd2FzIDIwMFwiKTtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICByZXNvbHZlKFt2YWx1ZVswXS5sYXQsIHZhbHVlWzBdLmxvbl0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIoY2l0eSwgY291bnRyeSkge1xyXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBnZXRDaXR5Q29vcmRpbmF0ZXMoY2l0eSwgY291bnRyeSkudGhlbigoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgICAgICBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtjb29yZGluYXRlc1swXX0mbG9uPSR7Y29vcmRpbmF0ZXNbMV19JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiBQcm9taXNlLnJlc29sdmUodmFsdWUpKVxyXG4gICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7Y2l0eVswXX0mbG9uPSR7Y2l0eVsxXX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigodmFsdWUpID0+IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkpXHJcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rml2ZURheUZvcmVjYXN0KGNpdHksIGNvdW50cnkpIHtcclxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZ2V0Q2l0eUNvb3JkaW5hdGVzKGNpdHksIGNvdW50cnkpLnRoZW4oKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goXHJcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2Nvb3JkaW5hdGVzWzBdfSZsb249JHtjb29yZGluYXRlc1sxXX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigodmFsdWUpID0+IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkpXHJcbiAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7Y2l0eVswXX0mbG9uPSR7Y2l0eVsxXX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigodmFsdWUpID0+IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkpXHJcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0Q2l0eUNvb3JkaW5hdGVzLCBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Rml2ZURheUZvcmVjYXN0IH07XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRXZWF0aGVyKFxyXG4gIGRhdGUsXHJcbiAgbG9uLFxyXG4gIGxhdCxcclxuICB0ZW1wZXJhdHVyZSxcclxuICBwcmVjaXBpdGF0aW9uLFxyXG4gIGh1bWlkaXR5LFxyXG4gIHdpbmRzcGVlZCxcclxuICB3ZWF0aGVyY29uXHJcbikge1xyXG4gIGZ1bmN0aW9uIGdldE1vbnRoQW5kRGF5RGF0ZShsYW5ndWFnZVRhZykge1xyXG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKGAke2xhbmd1YWdlVGFnfWAsIHtcclxuICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICBkYXk6IFwiMi1kaWdpdFwiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRDaXR5TmFtZUFuZENvdW50cnlDb2RlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvcmV2ZXJzZT9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAgICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGAke3ZhbHVlWzBdLm5hbWV9LCAke3ZhbHVlWzBdLmNvdW50cnl9YCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycikpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGlmIG1pbnV0ZSBpcyBvbmUgZGlnaXQsIGEgMCBnZXRzIGFkZGVkIHRvIHRoZSBtaW51dGUgdG8gc2hvdyBhIDIgZGlnaXQgbWludXRlIGNvdW50XHJcbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWUoKSB7XHJcbiAgICByZXR1cm4gYCR7ZGF0ZS5nZXRIb3VycygpfToke1xyXG4gICAgICBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLmxlbmd0aCA8IDJcclxuICAgICAgICA/IGAke2RhdGUuZ2V0TWludXRlcygpfTBgXHJcbiAgICAgICAgOiBkYXRlLmdldE1pbnV0ZXMoKVxyXG4gICAgfWA7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRXZWVrRGF5KCkge1xyXG4gICAgY29uc3Qgd2VlayA9IFtcclxuICAgICAgXCJTdW5kYXlcIixcclxuICAgICAgXCJNb25kYXlcIixcclxuICAgICAgXCJUdWVzZGF5XCIsXHJcbiAgICAgIFwiV2VkbmVzZGF5XCIsXHJcbiAgICAgIFwiVGh1cnNkYXlcIixcclxuICAgICAgXCJGcmlkYXlcIixcclxuICAgICAgXCJTYXR1cmRheVwiLFxyXG4gICAgXTtcclxuICAgIHJldHVybiB3ZWVrW2RhdGUuZ2V0RGF5KCldO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0SWNvbk5hbWUoKSB7fVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF0ZSxcclxuICAgIHRlbXBlcmF0dXJlLFxyXG4gICAgcHJlY2lwaXRhdGlvbixcclxuICAgIGh1bWlkaXR5LFxyXG4gICAgd2luZHNwZWVkLFxyXG4gICAgZ2V0Q2l0eU5hbWVBbmRDb3VudHJ5Q29kZSxcclxuICAgIGdldE1vbnRoQW5kRGF5RGF0ZSxcclxuICAgIGdldEN1cnJlbnRUaW1lLFxyXG4gICAgZ2V0V2Vla0RheSxcclxuICAgIGdldEljb25OYW1lLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJPYmplY3QoaG91ckRhdGEpIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoaG91ckRhdGEuZHQgKiAxMDAwKTtcclxuICBjb25zdCB0aW1lID0gYCR7ZGF0ZS5nZXRIb3VycygpfToke2RhdGUuZ2V0TWludXRlcygpfTBgO1xyXG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gaG91ckRhdGEubWFpbi50ZW1wO1xyXG4gIGNvbnN0IHByZWNpcGl0YXRpb24gPSBob3VyRGF0YS5wb3A7XHJcbiAgY29uc3QgeyBodW1pZGl0eSB9ID0gaG91ckRhdGEubWFpbjtcclxuICBjb25zdCB3aW5kc3BlZWQgPSBob3VyRGF0YS53aW5kLnNwZWVkO1xyXG4gIGNvbnN0IHdlYXRoZXJjb24gPSBob3VyRGF0YS53ZWF0aGVyWzBdLm1haW47XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGUsXHJcbiAgICB0aW1lLFxyXG4gICAgdGVtcGVyYXR1cmUsXHJcbiAgICBwcmVjaXBpdGF0aW9uLFxyXG4gICAgaHVtaWRpdHksXHJcbiAgICB3aW5kc3BlZWQsXHJcbiAgICB3ZWF0aGVyY29uLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURheU9iamVjdChkYXRhKSB7XHJcbiAgY29uc3QgeyBkYXRlIH0gPSBkYXRhWzBdO1xyXG5cclxuICBmdW5jdGlvbiBnZXRNb250aEFuZERheURhdGUobGFuZ3VhZ2VUYWcpIHtcclxuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhgJHtsYW5ndWFnZVRhZ31gLCB7XHJcbiAgICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgICAgZGF5OiBcIjItZGlnaXRcIixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TWluVGVtcCgpIHtcclxuICAgIGNvbnN0IGNvbGRlc3RIb3VyID0gZGF0YS5yZWR1Y2UoXHJcbiAgICAgIChhY2N1bSwgY3VycmVudCkgPT5cclxuICAgICAgICBhY2N1bS50ZW1wZXJhdHVyZSA8IGN1cnJlbnQudGVtcGVyYXR1cmUgPyBhY2N1bSA6IGN1cnJlbnQsXHJcbiAgICAgIGRhdGFbMF1cclxuICAgICk7XHJcbiAgICByZXR1cm4gY29sZGVzdEhvdXIudGVtcGVyYXR1cmU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRNYXhUZW1wKCkge1xyXG4gICAgY29uc3QgaG90dGVzdEhvdXIgPSBkYXRhLnJlZHVjZShcclxuICAgICAgKGFjY3VtLCBjdXJyZW50KSA9PlxyXG4gICAgICAgIGFjY3VtLnRlbXBlcmF0dXJlID4gY3VycmVudC50ZW1wZXJhdHVyZSA/IGFjY3VtIDogY3VycmVudCxcclxuICAgICAgZGF0YVswXVxyXG4gICAgKTtcclxuICAgIHJldHVybiBob3R0ZXN0SG91ci50ZW1wZXJhdHVyZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldERvbWluYXRpbmdXZWF0aGVyaWNvbigpIHtcclxuICAgIGNvbnN0IHRodW5kZXIgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIlRodW5kZXJcIik7XHJcbiAgICBjb25zdCBkcml6emxlID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJEcml6emxlXCIpO1xyXG4gICAgY29uc3QgcmFpbiA9IGRhdGEuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LndlYXRoZXJjb24gPT09IFwiUmFpblwiKTtcclxuICAgIGNvbnN0IHNub3cgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIlNub3dcIik7XHJcbiAgICBjb25zdCBjbGVhciA9IGRhdGEuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LndlYXRoZXJjb24gPT09IFwiQ2xlYXJcIik7XHJcbiAgICBjb25zdCBjbG91ZHMgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIkNsb3Vkc1wiKTtcclxuICAgIGNvbnN0IHNvcnRlZFdlYXRoZXIgPSBbdGh1bmRlciwgZHJpenpsZSwgcmFpbiwgc25vdywgY2xlYXIsIGNsb3Vkc10uc29ydChcclxuICAgICAgKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGhcclxuICAgICk7XHJcbiAgICByZXR1cm4gc29ydGVkV2VhdGhlclswXVswXS53ZWF0aGVyY29uO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0V2Vla0RheSgpIHtcclxuICAgIGNvbnN0IHdlZWsgPSBbXHJcbiAgICAgIFwiU3VuZGF5XCIsXHJcbiAgICAgIFwiTW9uZGF5XCIsXHJcbiAgICAgIFwiVHVlc2RheVwiLFxyXG4gICAgICBcIldlZG5lc2RheVwiLFxyXG4gICAgICBcIlRodXJzZGF5XCIsXHJcbiAgICAgIFwiRnJpZGF5XCIsXHJcbiAgICAgIFwiU2F0dXJkYXlcIixcclxuICAgIF07XHJcbiAgICByZXR1cm4gd2Vla1tkYXRlLmdldERheSgpXTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkYXRlLFxyXG4gICAgZGF0YSxcclxuICAgIGdldE1vbnRoQW5kRGF5RGF0ZSxcclxuICAgIGdldE1pblRlbXAsXHJcbiAgICBnZXRNYXhUZW1wLFxyXG4gICAgZ2V0RG9taW5hdGluZ1dlYXRoZXJpY29uLFxyXG4gICAgZ2V0V2Vla0RheSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDdXJyZW50V2VhdGhlciwgY3JlYXRlSG91ck9iamVjdCwgY3JlYXRlRGF5T2JqZWN0IH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcHJvbWlzZS1yZWplY3QtZXJyb3JzICovXHJcbmltcG9ydCB7IHdyaXRlV2VhdGhlcmludG9PYmplY3RzIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Rml2ZURheUZvcmVjYXN0IH0gZnJvbSBcIi4vd2VhdGhlckFQSVwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBDbGVhciBmcm9tIFwiLi9tZWRpYS9jbGVhci5tcDRcIjtcclxuaW1wb3J0IENsb3VkcyBmcm9tIFwiLi9tZWRpYS9jbG91ZHkubXA0XCI7XHJcbmltcG9ydCBSYWluIGZyb20gXCIuL21lZGlhL3JhaW4ubXA0XCI7XHJcbmltcG9ydCBEcml6emxlIGZyb20gXCIuL21lZGlhL2RyaXp6bGUubXA0XCI7XHJcbmltcG9ydCBTbm93IGZyb20gXCIuL21lZGlhL3Nub3cubXA0XCJcclxuXHJcbmNvbnN0IHRlc3R2YXIgPSBgJHtDbGVhcn1gO1xyXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGA8dmlkZW8gY2xhc3MgPVwidmlkZW9cIiBhdXRvcGxheSBtdXRlZCBsb29wIGlkPVwibXlWaWRlb1wiPlxyXG48c291cmNlIHNyYz1cIiR7dGVzdHZhcn1cIiB0eXBlPVwidmlkZW8vbXA0XCI+XHJcbjwvdmlkZW8+PGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48ZGl2IGNsYXNzPVwiY3VycmVudFdcIj48L2Rpdj48L2Rpdj5cclxuYDtcclxuXHJcblxyXG5cclxubGV0IGNpdHkgPSBcIlwiO1xyXG5sZXQgY2l0eUNvb3JkcyA9IFtdO1xyXG5sZXQgY291bnRyeSA9IFwiXCI7XHJcbmxldCBjdXJyZW50V2VhdGhlciA9IHt9O1xyXG5sZXQgZGF5c0ZvcmVjYXN0ID0ge307XHJcblxyXG5uZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcclxuICAgICAgKGxvY2F0aW9uT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShbXHJcbiAgICAgICAgICBsb2NhdGlvbk9iamVjdC5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICBsb2NhdGlvbk9iamVjdC5jb29yZHMubG9uZ2l0dWRlLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KFtcImTDvHNzZWxkb3JmXCIsIFwiREVcIl0pO1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVqZWN0KFtcImTDvHNzZWxkb3JmXCIsIFwiREVcIl0pO1xyXG4gIH1cclxufSlcclxuICAudGhlbigobG9jYXRpb24pID0+XHJcbiAgICB3cml0ZVdlYXRoZXJpbnRvT2JqZWN0cyhcclxuICAgICAgZ2V0Q3VycmVudFdlYXRoZXIobG9jYXRpb24pLFxyXG4gICAgICBnZXRGaXZlRGF5Rm9yZWNhc3QobG9jYXRpb24pXHJcbiAgICApXHJcbiAgKVxyXG4gIC5jYXRjaCgoZmFsbGJhY2tMb2NhdGlvbikgPT5cclxuICAgIHdyaXRlV2VhdGhlcmludG9PYmplY3RzKFxyXG4gICAgICBnZXRDdXJyZW50V2VhdGhlcihmYWxsYmFja0xvY2F0aW9uWzBdLCBmYWxsYmFja0xvY2F0aW9uWzFdKSxcclxuICAgICAgZ2V0Rml2ZURheUZvcmVjYXN0KGZhbGxiYWNrTG9jYXRpb25bMF0sIGZhbGxiYWNrTG9jYXRpb25bMV0pXHJcbiAgICApXHJcbiAgKVxyXG4gIC50aGVuKCh3ZWF0aGVyT2JqZWN0cykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdHMpO1xyXG4gICAgLy8gdGVzdHMgb2JqZWN0IGNyZWF0aW9uIGFuZCBvYmplY3QgbWV0aG9kc1xyXG4gICAgd2VhdGhlck9iamVjdHNbMF1cclxuICAgICAgLmdldENpdHlOYW1lQW5kQ291bnRyeUNvZGUoKVxyXG4gICAgICAudGhlbigoY2l0eWFuZGNvdW50cnkpID0+IGNvbnNvbGUubG9nKGNpdHlhbmRjb3VudHJ5KSk7XHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqZWN0c1swXS5nZXRNb250aEFuZERheURhdGUoXCJERVwiKSk7XHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqZWN0c1swXS5nZXRDdXJyZW50VGltZSgpKTtcclxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3RzWzBdLmdldFdlZWtEYXkoKSk7XHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqZWN0c1sxXVswXS5nZXRNb250aEFuZERheURhdGUoXCJERVwiKSk7XHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqZWN0c1sxXVswXS5nZXRNaW5UZW1wKCkpO1xyXG4gICAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdHNbMV1bMF0uZ2V0TWF4VGVtcCgpKTtcclxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3RzWzFdWzBdLmdldERvbWluYXRpbmdXZWF0aGVyaWNvbigpKTtcclxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3RzWzFdWzBdLmdldFdlZWtEYXkoKSk7XHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqZWN0c1sxXVswXS5kYXRlKTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xyXG4gICAgW2N1cnJlbnRXZWF0aGVyLCBkYXlzRm9yZWNhc3RdID0gd2VhdGhlck9iamVjdHM7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgdGhyb3cgZXJyO1xyXG4gIH0pLnRoZW4oKCk9PntcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKTtcclxuICAgIGNvbnNvbGUubG9nKGRheXNGb3JlY2FzdCk7XHJcbiAgfSlcclxuXHJcbi8qXHJcbmZ1bmN0aW9uIHRlc3RHZW9jb2RpbmcoY2l0eU5hbWUpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPXske2NpdHlOYW1lfX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0dXMgd2FzIDIwMFwiKTtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICByZXNvbHZlKFt2YWx1ZVswXS5sYXQsIHZhbHVlWzBdLmxvbl0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG4qL1xyXG4vKlxyXG5nZXRDaXR5Q29vcmRpbmF0ZXMoXCJMb25kb25cIiwgXCJVU1wiKVxyXG4gIC50aGVuKCh2YWx1ZSkgPT4gZ2V0Q3VycmVudFdlYXRoZXIodmFsdWVbMF0sIHZhbHVlWzFdKSlcclxuICAudGhlbigodmFsdWUpID0+IGZpbGxXZWF0aGVyb2JqZWN0V2l0aERhdGEodmFsdWUpKVxyXG4gIC50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gIH0pO1xyXG5cclxuZ2V0Q2l0eUNvb3JkaW5hdGVzKFwiRHVpc2J1cmdcIilcclxuICAudGhlbigodmFsdWUpID0+IGdldEN1cnJlbnRXZWF0aGVyKHZhbHVlWzBdLCB2YWx1ZVsxXSkpXHJcbiAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB0aW1ldGVzdHV0YyA9IG5ldyBEYXRlKHZhbHVlLmR0ICogMTAwMCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aW1ldGVzdHV0Yyk7XHJcbiAgfSk7XHJcbmNvbnN0IHRpbWV0ZXN0ID0gbmV3IERhdGUoKTtcclxuXHJcbmNvbnNvbGUubG9nKHRpbWV0ZXN0KTtcclxuY29uc29sZS5sb2codGltZXRlc3QuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XHJcblxyXG5nZXRDaXR5Q29vcmRpbmF0ZXMoXCJuZXcgeW9yayBjaXR5XCIpXHJcbiAgLnRoZW4oKGNvb3JkaW5hdGVzKSA9PiBnZXRGaXZlRGF5Rm9yZWNhc3QoY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdKSlcclxuICAudGhlbigoZm9yZWNhc3QpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3QubGlzdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCB0ZXN0VGltZSA9IG5ldyBEYXRlKGZvcmVjYXN0Lmxpc3RbaV0uZHQgKiAxMDAwKTtcclxuICAgICAgY29uc29sZS5sb2codGVzdFRpbWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuY29uc3Qgc3RyaW5ndGVzdCA9IFwib25lXCI7XHJcblxyXG53aW5kb3dbc3RyaW5ndGVzdF0gPSBcInR3b1wiO1xyXG5jb25zb2xlLmxvZyhvbmUpO1xyXG5cclxuZnVuY3Rpb24gY291bnRhbGxhKG51bWJlcm9uZSkge1xyXG4gIGZ1bmN0aW9uIHVzZU51bWJlck9uZSgpIHtcclxuICAgIHJldHVybiBudW1iZXJvbmUgKiBudW1iZXJvbmU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyB1c2VOdW1iZXJPbmUgfTtcclxufVxyXG5cclxuY29uc3QgdGVzdG9iamVjdCA9IGNvdW50YWxsYSgzKTtcclxuY29uc29sZS5sb2codGVzdG9iamVjdC51c2VOdW1iZXJPbmUoKSk7XHJcblxyXG5jb25zdCB0ZXN0QXJyYXkgPSBbXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcclxuICB0ZXN0QXJyYXlbaV0gPSBpO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyh0ZXN0QXJyYXkpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGVzdE9iamVjdCh0ZW1wZXJhdHVyZSwga2V5dHdvLCBrZXl0aHJlZSkge1xyXG4gIHJldHVybiB7IHRlbXBlcmF0dXJlLCBrZXl0d28sIGtleXRocmVlIH07XHJcbn1cclxuXHJcbmNvbnN0IHRlc3RvYmplY3R0d28gPSBjcmVhdGVUZXN0T2JqZWN0KDEsIDIsIDMpO1xyXG5jb25zb2xlLmxvZyhcInRlc3RvYmplY3Q6IFwiLCB0ZXN0b2JqZWN0dHdvKTtcclxuKi9cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9