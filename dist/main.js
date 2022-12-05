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
___CSS_LOADER_EXPORT___.push([module.id, ".video {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    min-height: 100%;\r\n\r\n}\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%) scale(1);\r\n    \r\n    max-height: 100vh;\r\n    \r\n    z-index: 4;\r\n    width: 80%;\r\n    height: 90%;\r\n    border-radius: 30px;\r\n    backdrop-filter: blur(100px);\r\n    \r\n}\r\n\r\n.currentW {\r\n    width: 85%;\r\n    height: 70%;\r\n    background-color: white;\r\n    border-radius: 30px;\r\n    position: fixed;\r\n    top:30%;\r\n    left:50%;\r\n    transform: translate(-50%, -30%) scale(1);\r\n    filter: drop-shadow(0 1px 1px black);\r\n}\r\n.icon {\r\n    width: 100px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,WAAW;IACX,gBAAgB;;AAEpB;;AAEA;IACI,eAAe;IACf,OAAO;IACP,QAAQ;IACR,yCAAyC;;IAEzC,iBAAiB;;IAEjB,UAAU;IACV,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,4BAA4B;;AAEhC;;AAEA;IACI,UAAU;IACV,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,OAAO;IACP,QAAQ;IACR,yCAAyC;IACzC,oCAAoC;AACxC;AACA;IACI,YAAY;AAChB","sourcesContent":[".video {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    min-height: 100%;\r\n\r\n}\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%) scale(1);\r\n    \r\n    max-height: 100vh;\r\n    \r\n    z-index: 4;\r\n    width: 80%;\r\n    height: 90%;\r\n    border-radius: 30px;\r\n    backdrop-filter: blur(100px);\r\n    \r\n}\r\n\r\n.currentW {\r\n    width: 85%;\r\n    height: 70%;\r\n    background-color: white;\r\n    border-radius: 30px;\r\n    position: fixed;\r\n    top:30%;\r\n    left:50%;\r\n    transform: translate(-50%, -30%) scale(1);\r\n    filter: drop-shadow(0 1px 1px black);\r\n}\r\n.icon {\r\n    width: 100px;\r\n}"],"sourceRoot":""}]);
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
  if(currentWeather.getWeekDay() === daysForecast[0].getWeekDay) {
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
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
    document.body.innerHTML = `<video class ="video" autoplay muted loop id="myVideo">
<source src="${currentWeather.getBackgroundLink()}" type="video/mp4">
</video><div class="overlay"><div class="currentW"><img class="icon" src="${currentWeather.getIconLink()}"></div></div>
`;
    console.log(document.querySelector("source").src);
    if (
      document.querySelector("source").src ===
      currentWeather.getBackgroundLink()
    ) {
      console.log(currentWeather.getBackgroundLink());
    }
  });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25CLEVBQUUsK0RBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RCxnRkFBZ0YsNkJBQTZCO0FBQzdHO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxJQUFJLHlFQUF1QjtBQUMzQixNQUFNLDhEQUFpQjtBQUN2QixNQUFNLCtEQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlFQUF1QjtBQUMzQixNQUFNLDhEQUFpQjtBQUN2QixNQUFNLCtEQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBZ0I7QUFDcEI7QUFDQTtBQUNBLE1BQU0sNkRBQWU7QUFDckIsTUFBTSxnRUFBa0I7QUFDeEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQsNEVBQTRFLDZCQUE2QjtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tZWRpYS9jbGVhci5tcDQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbWVkaWEvY2xvdWR5Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tZWRpYS9kcml6emxlLm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tZWRpYS9yYWluLm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tZWRpYS9zbm93Lm1wNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90ZXN0aW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlck9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi52aWRlbyB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6NTAlO1xcclxcbiAgICBsZWZ0OjUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICAgIFxcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgXFxyXFxuICAgIHotaW5kZXg6IDQ7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAwcHgpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnRXIHtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgaGVpZ2h0OiA3MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDozMCU7XFxyXFxuICAgIGxlZnQ6NTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzAlKSBzY2FsZSgxKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAxcHggYmxhY2spO1xcclxcbn1cXHJcXG4uaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxRQUFRO0lBQ1IseUNBQXlDOztJQUV6QyxpQkFBaUI7O0lBRWpCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw0QkFBNEI7O0FBRWhDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixPQUFPO0lBQ1AsUUFBUTtJQUNSLHlDQUF5QztJQUN6QyxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnZpZGVvIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDo1MCU7XFxyXFxuICAgIGxlZnQ6NTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gICAgXFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBcXHJcXG4gICAgei1pbmRleDogNDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMDBweCk7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudFcge1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBoZWlnaHQ6IDcwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOjMwJTtcXHJcXG4gICAgbGVmdDo1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zMCUpIHNjYWxlKDEpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDFweCBibGFjayk7XFxyXFxufVxcclxcbi5pY29uIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3MvY2xlYXIubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9jbG91ZHkubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvcy9kcml6emxlLm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlb3MvcmFpbi5tcDRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW9zL3Nub3cubXA0XCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XHJcbiAgY3JlYXRlSG91ck9iamVjdCxcclxuICBjcmVhdGVDdXJyZW50V2VhdGhlcixcclxuICBjcmVhdGVEYXlPYmplY3QsXHJcbn0gZnJvbSBcIi4vd2VhdGhlck9iamVjdHNcIjtcclxuXHJcbmZ1bmN0aW9uIG51bWJlclRvV29yZChudW1iZXIpIHtcclxuICBjb25zdCBudW1iZXJzID0gW1wib25lXCIsIFwidHdvXCIsIFwidGhyZWVcIiwgXCJmb3VyXCIsIFwiZml2ZVwiLCBcInNpeFwiXTtcclxuICByZXR1cm4gbnVtYmVyc1tudW1iZXJdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzcGxpdEludG9EYXlzKGZvcmVjYXN0RGF0YSkge1xyXG4gIGNvbnN0IGhvdXJseURhdGFPYmplY3RzID0gW107XHJcbiAgY29uc3QgZGF5RGF0YUFycmF5cyA9IFtdO1xyXG4gIGZvcmVjYXN0RGF0YS5saXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGhvdXJseURhdGFPYmplY3RzLnB1c2goY3JlYXRlSG91ck9iamVjdChpdGVtKSk7XHJcbiAgfSk7XHJcbiAgaWYgKGhvdXJseURhdGFPYmplY3RzWzBdLmRhdGUuZ2V0SG91cnMoKSA+IDIpIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgNjsgaiArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0aW5nRGF5RGF0ZSA9IGhvdXJseURhdGFPYmplY3RzWzBdLmRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICBjb25zdCBkYXlEYXRhID0gaG91cmx5RGF0YU9iamVjdHMuZmlsdGVyKFxyXG4gICAgICAgIChob3VyRGF0YSkgPT4gaG91ckRhdGEuZGF0ZS5nZXREYXRlKCkgPT09IHN0YXJ0aW5nRGF5RGF0ZVxyXG4gICAgICApO1xyXG4gICAgICBob3VybHlEYXRhT2JqZWN0cy5zcGxpY2UoMCwgZGF5RGF0YS5sZW5ndGgpO1xyXG4gICAgICBkYXlEYXRhQXJyYXlzLnB1c2goZGF5RGF0YSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaiArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0aW5nRGF5RGF0ZSA9IGhvdXJseURhdGFPYmplY3RzWzBdLmRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICBjb25zdCBkYXlEYXRhID0gaG91cmx5RGF0YU9iamVjdHMuZmlsdGVyKFxyXG4gICAgICAgIChob3VyRGF0YSkgPT4gaG91ckRhdGEuZGF0ZS5nZXREYXRlKCkgPT09IHN0YXJ0aW5nRGF5RGF0ZVxyXG4gICAgICApO1xyXG4gICAgICBob3VybHlEYXRhT2JqZWN0cy5zcGxpY2UoMCwgZGF5RGF0YS5sZW5ndGgpO1xyXG4gICAgICBkYXlEYXRhQXJyYXlzLnB1c2goZGF5RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBkYXlEYXRhQXJyYXlzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDdXJyZW50V2VhdGhlclRvRm9yZWNhc3QoY3VycmVudFdlYXRoZXIsIGRheXNGb3JlY2FzdCkge1xyXG4gIGlmKGN1cnJlbnRXZWF0aGVyLmdldFdlZWtEYXkoKSA9PT0gZGF5c0ZvcmVjYXN0WzBdLmdldFdlZWtEYXkpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRIb3VyID0ge1xyXG4gICAgICBkYXRlOiBjdXJyZW50V2VhdGhlci5kYXRlLFxyXG4gICAgICB0aW1lOiBjdXJyZW50V2VhdGhlci5nZXRDdXJyZW50VGltZSgpLFxyXG4gICAgICB0ZW1wZXJhdHVyZTogY3VycmVudFdlYXRoZXIudGVtcGVyYXR1cmUsXHJcbiAgICAgIHByZWNpcGl0YXRpb246IGN1cnJlbnRXZWF0aGVyLnByZWNpcGl0YXRpb24sXHJcbiAgICAgIGh1bWlkaXR5OiBjdXJyZW50V2VhdGhlci5odW1pZGl0eSxcclxuICAgICAgd2luZHNwZWVkOiBjdXJyZW50V2VhdGhlci53aW5kc3BlZWQsXHJcbiAgICAgIHdlYXRoZXJjb246IGN1cnJlbnRXZWF0aGVyLndlYXRoZXJjb24sXHJcbiAgICAgIGdldEljb25MaW5rOiBjdXJyZW50V2VhdGhlci5nZXRJY29uTGluayxcclxuICAgICAgZ2V0QmFja2dyb3VuZExpbms6IGN1cnJlbnRXZWF0aGVyLmdldEJhY2tncm91bmRMaW5rXHJcbiAgICB9XHJcbiAgICBkYXlzRm9yZWNhc3RbMF0uZGF0YS5zcGxpY2UoMCwwLGN1cnJlbnRIb3VyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjdXJyZW50SG91ciA9IHtcclxuICAgICAgZGF0ZTogY3VycmVudFdlYXRoZXIuZGF0ZSxcclxuICAgICAgdGltZTogY3VycmVudFdlYXRoZXIuZ2V0Q3VycmVudFRpbWUoKSxcclxuICAgICAgdGVtcGVyYXR1cmU6IGN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlLFxyXG4gICAgICBwcmVjaXBpdGF0aW9uOiBjdXJyZW50V2VhdGhlci5wcmVjaXBpdGF0aW9uLFxyXG4gICAgICBodW1pZGl0eTogY3VycmVudFdlYXRoZXIuaHVtaWRpdHksXHJcbiAgICAgIHdpbmRzcGVlZDogY3VycmVudFdlYXRoZXIud2luZHNwZWVkLFxyXG4gICAgICB3ZWF0aGVyY29uOiBjdXJyZW50V2VhdGhlci53ZWF0aGVyY29uLFxyXG4gICAgICBnZXRJY29uTGluazogY3VycmVudFdlYXRoZXIuZ2V0SWNvbkxpbmssXHJcbiAgICAgIGdldEJhY2tncm91bmRMaW5rOiBjdXJyZW50V2VhdGhlci5nZXRCYWNrZ3JvdW5kTGlua1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHRvZGF5ID0gY3JlYXRlRGF5T2JqZWN0KFtjdXJyZW50SG91cl0pO1xyXG4gICAgZGF5c0ZvcmVjYXN0LnNwbGljZSgwLDAsdG9kYXkpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gd3JpdGVXZWF0aGVyaW50b09iamVjdHMoY3VycmVudFdlYXRoZXJQcm9taXNlLCBmb3JlY2FzdFByb21pc2UpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgUHJvbWlzZS5hbGwoW2N1cnJlbnRXZWF0aGVyUHJvbWlzZSwgZm9yZWNhc3RQcm9taXNlXSkudGhlbigodmFsdWVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRheXNGb3JlY2FzdCA9IFtdO1xyXG4gICAgICBjb25zdCBjdXJyZW50RGF0YSA9IHZhbHVlc1swXTtcclxuICAgICAgY29uc3QgZm9yZWNhc3QgPSB2YWx1ZXNbMV07XHJcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhRGF5cyA9IHNwbGl0SW50b0RheXModmFsdWVzWzFdKTtcclxuICAgICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBjcmVhdGVDdXJyZW50V2VhdGhlcihcclxuICAgICAgICBuZXcgRGF0ZShjdXJyZW50RGF0YS5kdCAqIDEwMDApLFxyXG4gICAgICAgIGN1cnJlbnREYXRhLmNvb3JkLmxvbixcclxuICAgICAgICBjdXJyZW50RGF0YS5jb29yZC5sYXQsXHJcbiAgICAgICAgY3VycmVudERhdGEubWFpbi50ZW1wLFxyXG4gICAgICAgIGZvcmVjYXN0Lmxpc3RbMF0ucG9wLFxyXG4gICAgICAgIGN1cnJlbnREYXRhLm1haW4uaHVtaWRpdHksXHJcbiAgICAgICAgY3VycmVudERhdGEud2luZC5zcGVlZCxcclxuICAgICAgICBjdXJyZW50RGF0YS53ZWF0aGVyWzBdLm1haW5cclxuICAgICAgKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWF0aGVyRGF0YURheXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBkYXlEYXRhID0gd2VhdGhlckRhdGFEYXlzW2ldO1xyXG4gICAgICAgIGRheXNGb3JlY2FzdFtpXSA9IGNyZWF0ZURheU9iamVjdChkYXlEYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBhZGRDdXJyZW50V2VhdGhlclRvRm9yZWNhc3QoY3VycmVudFdlYXRoZXIsZGF5c0ZvcmVjYXN0KTtcclxuICAgICAgcmVzb2x2ZShbY3VycmVudFdlYXRoZXIsIGRheXNGb3JlY2FzdF0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtlbHZpblRvRmFocmVuaGVpdCh0ZW1wKSB7XHJcbiAgcmV0dXJuICh0ZW1wIC0gMjczLjE1KSAqIDEuOCArIDMyLjA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtlbHZpblRvQ2Vsc2l1cyh0ZW1wKSB7XHJcbiAgcmV0dXJuIHRlbXAgLSAyNzMuMTU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZhaHJlbmhlaXRUb0NlbHNpdXModGVtcCkge1xyXG4gIHJldHVybiAodGVtcCAtIDMyKSAvIDEuODtcclxufVxyXG5cclxuZnVuY3Rpb24gY2Vsc2l1c1RvRmFocmVuaGVpdCh0ZW1wKSB7XHJcbiAgcmV0dXJuIHRlbXAgKiAxLjggKyAzMjtcclxufVxyXG5leHBvcnQge1xyXG4gIG51bWJlclRvV29yZCxcclxuICBzcGxpdEludG9EYXlzLFxyXG4gIHdyaXRlV2VhdGhlcmludG9PYmplY3RzLFxyXG4gIGtlbHZpblRvRmFocmVuaGVpdCxcclxuICBrZWx2aW5Ub0NlbHNpdXMsXHJcbiAgZmFocmVuaGVpdFRvQ2Vsc2l1cyxcclxuICBjZWxzaXVzVG9GYWhyZW5oZWl0LFxyXG59O1xyXG4iLCJmdW5jdGlvbiB0ZXN0UGFnZUxvYWREYXRhKGN1cnJlbnRXZWF0aGVyLCBkYXlzRm9yZWNhc3QsIGtlbHZpblRvQ2Vsc2l1cyxrZWx2aW5Ub0ZhaHJlbmhlaXQpIHtcclxuICBjb25zb2xlLmxvZyhcIkNVUlJFTlQgV0VBVEhFUiBDQVJEISEhISEhISEhISEhISFcIik7XHJcbiAgY29uc29sZS5sb2coXCJJY29uOiBcIiwgY3VycmVudFdlYXRoZXIuZ2V0SWNvbkxpbmsoKSk7XHJcbiAgY29uc29sZS5sb2coXCJCYWNrZ3JvdW5kOiBcIiwgY3VycmVudFdlYXRoZXIuZ2V0QmFja2dyb3VuZExpbmsoKSk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcInRlbXBlcmF0dXJlIGluIMKwQzogXCIsXHJcbiAgICBrZWx2aW5Ub0NlbHNpdXMoY3VycmVudFdlYXRoZXIudGVtcGVyYXR1cmUpXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwidGVtcGVyYXR1cmUgaW4gwrBGOiBcIixcclxuICAgIGtlbHZpblRvRmFocmVuaGVpdChjdXJyZW50V2VhdGhlci50ZW1wZXJhdHVyZSlcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFwicG9wOiBcIiwgY3VycmVudFdlYXRoZXIucHJlY2lwaXRhdGlvbik7XHJcbiAgY29uc29sZS5sb2coXCJ3aW5kc3BlZWQ6IFwiLCBjdXJyZW50V2VhdGhlci53aW5kc3BlZWQpO1xyXG4gIGNvbnNvbGUubG9nKFwiaHVtaWRpdHk6IFwiLCBjdXJyZW50V2VhdGhlci5odW1pZGl0eSk7XHJcbiAgY29uc29sZS5sb2coXCJEYXk6IFwiLCBjdXJyZW50V2VhdGhlci5nZXRXZWVrRGF5KCkpO1xyXG4gIGNvbnNvbGUubG9nKFwiTW9udGggYW5kIERheSBEYXRlOiBcIiwgY3VycmVudFdlYXRoZXIuZ2V0TW9udGhBbmREYXlEYXRlKFwiREVcIikpO1xyXG4gIGN1cnJlbnRXZWF0aGVyXHJcbiAgICAuZ2V0Q2l0eU5hbWVBbmRDb3VudHJ5Q29kZSgpXHJcbiAgICAudGhlbigoY2l0eUNvdW50cnkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJDaXR5IGFuZCBDb3VudHJ5OiBcIiwgY2l0eUNvdW50cnkpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJUaW1lOiBcIiwgY3VycmVudFdlYXRoZXIuZ2V0Q3VycmVudFRpbWUoKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSE9VUiBEQVRBIFNFQ1RJT04gISEhISEhISEhISEhISEhISEhXCIpO1xyXG4gICAgICBkYXlzRm9yZWNhc3RbMF0uZGF0YS5mb3JFYWNoKChob3VyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaW1lOiBcIiwgaG91ci50aW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkljb246IFwiLCBob3VyLmdldEljb25MaW5rKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVtcGVyYXR1cmUgaW4gwrBDOiBcIiwga2VsdmluVG9DZWxzaXVzKGhvdXIudGVtcGVyYXR1cmUpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRlbXBlcmF0dXJlIGluIMKwRjogXCIsIGtlbHZpblRvRmFocmVuaGVpdChob3VyLnRlbXBlcmF0dXJlKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRBWSBDQVJEUyBTRUNUSU9OISEhISEhISEhISEhISEhISFcIik7XHJcbiAgICAgIGRheXNGb3JlY2FzdC5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIFwiV2Vla2RheTogXCIsXHJcbiAgICAgICAgICBkYXkuZ2V0V2Vla0RheSgpICE9PSBjdXJyZW50V2VhdGhlci5nZXRXZWVrRGF5KClcclxuICAgICAgICAgICAgPyBkYXkuZ2V0V2Vla0RheSgpXHJcbiAgICAgICAgICAgIDogXCJ0b2RheVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1vbnRoQW5kRGF5OiBcIiwgZGF5LmdldE1vbnRoQW5kRGF5RGF0ZShcIkRFXCIpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkljb246IFwiLCBkYXkuZ2V0SWNvbkxpbmsoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNaW4gVGVtcGVyYXR1cmUgaW4gwrBDOiBcIiwga2VsdmluVG9DZWxzaXVzKGRheS5nZXRNaW5UZW1wKCkpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1heCBUZW1wZXJhdHVyZSBpbiDCsEM6IFwiLCBrZWx2aW5Ub0NlbHNpdXMoZGF5LmdldE1heFRlbXAoKSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWluIFRlbXBlcmF0dXJlIGluIMKwRjogXCIsIGtlbHZpblRvRmFocmVuaGVpdChkYXkuZ2V0TWluVGVtcCgpKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXggVGVtcGVyYXR1cmUgaW4gwrBGOiBcIiwga2VsdmluVG9GYWhyZW5oZWl0KGRheS5nZXRNYXhUZW1wKCkpKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgeyB0ZXN0UGFnZUxvYWREYXRhIH07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWVsc2UtcmV0dXJuICovXHJcbmZ1bmN0aW9uIGdldENpdHlDb29yZGluYXRlcyhjaXR5TmFtZSwgY291bnRyeSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9eyR7Y2l0eU5hbWV9fSx7JHtjb3VudHJ5fX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0dXMgd2FzIDIwMFwiKTtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICByZXNvbHZlKFt2YWx1ZVswXS5sYXQsIHZhbHVlWzBdLmxvbl0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIoY2l0eSwgY291bnRyeSkge1xyXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBnZXRDaXR5Q29vcmRpbmF0ZXMoY2l0eSwgY291bnRyeSkudGhlbigoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgICAgICBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtjb29yZGluYXRlc1swXX0mbG9uPSR7Y29vcmRpbmF0ZXNbMV19JmFwcGlkPWQxNDU5NzRmYWM4ZmI4MDM5MDA0MjJjMmNjMWQ2MjBlYFxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiBQcm9taXNlLnJlc29sdmUodmFsdWUpKVxyXG4gICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7Y2l0eVswXX0mbG9uPSR7Y2l0eVsxXX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigodmFsdWUpID0+IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkpXHJcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rml2ZURheUZvcmVjYXN0KGNpdHksIGNvdW50cnkpIHtcclxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZ2V0Q2l0eUNvb3JkaW5hdGVzKGNpdHksIGNvdW50cnkpLnRoZW4oKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goXHJcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2Nvb3JkaW5hdGVzWzBdfSZsb249JHtjb29yZGluYXRlc1sxXX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigodmFsdWUpID0+IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkpXHJcbiAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7Y2l0eVswXX0mbG9uPSR7Y2l0eVsxXX0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigodmFsdWUpID0+IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkpXHJcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0Q2l0eUNvb3JkaW5hdGVzLCBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Rml2ZURheUZvcmVjYXN0IH07XHJcbiIsImltcG9ydCBDbGVhciBmcm9tIFwiLi9tZWRpYS9jbGVhci5tcDRcIjtcclxuaW1wb3J0IENsb3VkcyBmcm9tIFwiLi9tZWRpYS9jbG91ZHkubXA0XCI7XHJcbmltcG9ydCBSYWluIGZyb20gXCIuL21lZGlhL3JhaW4ubXA0XCI7XHJcbmltcG9ydCBEcml6emxlIGZyb20gXCIuL21lZGlhL2RyaXp6bGUubXA0XCI7XHJcbmltcG9ydCBTbm93IGZyb20gXCIuL21lZGlhL3Nub3cubXA0XCI7XHJcbmltcG9ydCBDbGVhckljb24gZnJvbSBcIi4vbWVkaWEvY2xlYXJJY29uLnN2Z1wiO1xyXG5pbXBvcnQgQ2xvdWRzSWNvbiBmcm9tIFwiLi9tZWRpYS9jbG91ZHlJY29uLnN2Z1wiO1xyXG5pbXBvcnQgUmFpbkljb24gZnJvbSBcIi4vbWVkaWEvcmFpbkljb24uc3ZnXCI7XHJcbmltcG9ydCBEcml6emxlSWNvbiBmcm9tIFwiLi9tZWRpYS9kcml6emxlSWNvbi5zdmdcIjtcclxuaW1wb3J0IFNub3dJY29uIGZyb20gXCIuL21lZGlhL3Nub3dJY29uLnN2Z1wiO1xyXG5cclxuY29uc3QgbWVkaWFMaW5rcyA9IChzdGF0ZSkgPT4gKHtcclxuICBnZXRCYWNrZ3JvdW5kTGluaygpIHtcclxuICAgIGxldCB2aWRlb0xpbmsgPSBcIlwiO1xyXG4gICAgY29uc3Qgd2VhdGhlcmNvbiA9IHN0YXRlLndlYXRoZXJjb25cclxuICAgICAgPyBzdGF0ZS53ZWF0aGVyY29uXHJcbiAgICAgIDogc3RhdGUuZ2V0RG9taW5hdGluZ1dlYXRoZXJpY29uKCk7XHJcbiAgICBzd2l0Y2ggKHdlYXRoZXJjb24pIHtcclxuICAgICAgY2FzZSBcIkNsb3Vkc1wiOlxyXG4gICAgICAgIHZpZGVvTGluayA9IGAke0Nsb3Vkc31gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiQ2xlYXJcIjpcclxuICAgICAgICB2aWRlb0xpbmsgPSBgJHtDbGVhcn1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiU25vd1wiOlxyXG4gICAgICAgIHZpZGVvTGluayA9IGAke1Nub3d9YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlJhaW5cIjpcclxuICAgICAgICB2aWRlb0xpbmsgPSBgJHtSYWlufWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJEcml6emxlXCI6XHJcbiAgICAgICAgdmlkZW9MaW5rID0gYCR7RHJpenpsZX1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGFsZXJ0KFwibm8gd2VhdGhlcmNvbiBzZXQgeWV0XCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZpZGVvTGluaztcclxuICB9LFxyXG5cclxuICBnZXRJY29uTGluaygpIHtcclxuICAgIGxldCBpY29uTGluayA9IFwiXCI7XHJcbiAgICBjb25zdCB3ZWF0aGVyY29uID0gc3RhdGUud2VhdGhlcmNvblxyXG4gICAgICA/IHN0YXRlLndlYXRoZXJjb25cclxuICAgICAgOiBzdGF0ZS5nZXREb21pbmF0aW5nV2VhdGhlcmljb24oKTtcclxuICAgIHN3aXRjaCAod2VhdGhlcmNvbikge1xyXG4gICAgICBjYXNlIFwiQ2xvdWRzXCI6XHJcbiAgICAgICAgaWNvbkxpbmsgPSBgJHtDbG91ZHNJY29ufWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJDbGVhclwiOlxyXG4gICAgICAgIGljb25MaW5rID0gYCR7Q2xlYXJJY29ufWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJTbm93XCI6XHJcbiAgICAgICAgaWNvbkxpbmsgPSBgJHtTbm93SWNvbn1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiUmFpblwiOlxyXG4gICAgICAgIGljb25MaW5rID0gYCR7UmFpbkljb259YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkRyaXp6bGVcIjpcclxuICAgICAgICBpY29uTGluayA9IGAke0RyaXp6bGVJY29ufWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYWxlcnQoXCJubyB3ZWF0aGVyY29uIHNldCB5ZXRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaWNvbkxpbms7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBkYXRlRGF0YSA9IChzdGF0ZSkgPT4gKHtcclxuICBnZXRXZWVrRGF5KCkge1xyXG4gICAgY29uc3Qgd2VlayA9IFtcclxuICAgICAgXCJTdW5kYXlcIixcclxuICAgICAgXCJNb25kYXlcIixcclxuICAgICAgXCJUdWVzZGF5XCIsXHJcbiAgICAgIFwiV2VkbmVzZGF5XCIsXHJcbiAgICAgIFwiVGh1cnNkYXlcIixcclxuICAgICAgXCJGcmlkYXlcIixcclxuICAgICAgXCJTYXR1cmRheVwiLFxyXG4gICAgXTtcclxuICAgIHJldHVybiB3ZWVrW3N0YXRlLmRhdGUuZ2V0RGF5KCldO1xyXG4gIH0sXHJcblxyXG4gIGdldE1vbnRoQW5kRGF5RGF0ZShsYW5ndWFnZVRhZykge1xyXG4gICAgcmV0dXJuIHN0YXRlLmRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKGAke2xhbmd1YWdlVGFnfWAsIHtcclxuICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICBkYXk6IFwiMi1kaWdpdFwiLFxyXG4gICAgfSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50V2VhdGhlcihcclxuICBkYXRlLFxyXG4gIGxvbixcclxuICBsYXQsXHJcbiAgdGVtcGVyYXR1cmUsXHJcbiAgcHJlY2lwaXRhdGlvbixcclxuICBodW1pZGl0eSxcclxuICB3aW5kc3BlZWQsXHJcbiAgd2VhdGhlcmNvblxyXG4pIHtcclxuICBhc3luYyBmdW5jdGlvbiBnZXRDaXR5TmFtZUFuZENvdW50cnlDb2RlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvcmV2ZXJzZT9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9ZDE0NTk3NGZhYzhmYjgwMzkwMDQyMmMyY2MxZDYyMGVgXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAgICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGAke3ZhbHVlWzBdLm5hbWV9LCAke3ZhbHVlWzBdLmNvdW50cnl9YCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycikpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGlmIG1pbnV0ZSBpcyBvbmUgZGlnaXQsIGEgMCBnZXRzIGFkZGVkIHRvIHRoZSBtaW51dGUgdG8gc2hvdyBhIDIgZGlnaXQgbWludXRlIGNvdW50XHJcbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWUoKSB7XHJcbiAgICByZXR1cm4gYCR7ZGF0ZS5nZXRIb3VycygpfToke1xyXG4gICAgICBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLmxlbmd0aCA8IDJcclxuICAgICAgICA/IGAke2RhdGUuZ2V0TWludXRlcygpfTBgXHJcbiAgICAgICAgOiBkYXRlLmdldE1pbnV0ZXMoKVxyXG4gICAgfWA7XHJcbiAgfVxyXG5cclxuICAvLyBBc3NpZ25zIHRoZSBtZXRob2RzIGZyb20gbWVkaWFMaW5rcyBhbmQgZGF0YURhdGEgdG8gdGhlIHJldHVybmVkIG9iamVjdCB2aWEgc3ByZWFkIG9wZXJhdG9yXHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGUsXHJcbiAgICB0ZW1wZXJhdHVyZSxcclxuICAgIHByZWNpcGl0YXRpb24sXHJcbiAgICBodW1pZGl0eSxcclxuICAgIHdpbmRzcGVlZCxcclxuICAgIHdlYXRoZXJjb24sXHJcbiAgICBnZXRDaXR5TmFtZUFuZENvdW50cnlDb2RlLFxyXG4gICAgZ2V0Q3VycmVudFRpbWUsXHJcbiAgICAuLi5tZWRpYUxpbmtzKHtcclxuICAgICAgZGF0ZSxcclxuICAgICAgdGVtcGVyYXR1cmUsXHJcbiAgICAgIHByZWNpcGl0YXRpb24sXHJcbiAgICAgIGh1bWlkaXR5LFxyXG4gICAgICB3aW5kc3BlZWQsXHJcbiAgICAgIHdlYXRoZXJjb24sXHJcbiAgICAgIGdldENpdHlOYW1lQW5kQ291bnRyeUNvZGUsXHJcbiAgICAgIGdldEN1cnJlbnRUaW1lLFxyXG4gICAgfSksXHJcbiAgICAuLi5kYXRlRGF0YSh7XHJcbiAgICAgIGRhdGUsXHJcbiAgICAgIHRlbXBlcmF0dXJlLFxyXG4gICAgICBwcmVjaXBpdGF0aW9uLFxyXG4gICAgICBodW1pZGl0eSxcclxuICAgICAgd2luZHNwZWVkLFxyXG4gICAgICB3ZWF0aGVyY29uLFxyXG4gICAgICBnZXRDaXR5TmFtZUFuZENvdW50cnlDb2RlLFxyXG4gICAgICBnZXRDdXJyZW50VGltZSxcclxuICAgIH0pLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJPYmplY3QoaG91ckRhdGEpIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoaG91ckRhdGEuZHQgKiAxMDAwKTtcclxuICBjb25zdCB0aW1lID0gYCR7ZGF0ZS5nZXRIb3VycygpfToke2RhdGUuZ2V0TWludXRlcygpfTBgO1xyXG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gaG91ckRhdGEubWFpbi50ZW1wO1xyXG4gIGNvbnN0IHByZWNpcGl0YXRpb24gPSBob3VyRGF0YS5wb3A7XHJcbiAgY29uc3QgeyBodW1pZGl0eSB9ID0gaG91ckRhdGEubWFpbjtcclxuICBjb25zdCB3aW5kc3BlZWQgPSBob3VyRGF0YS53aW5kLnNwZWVkO1xyXG4gIGNvbnN0IHdlYXRoZXJjb24gPSBob3VyRGF0YS53ZWF0aGVyWzBdLm1haW47XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkYXRlLFxyXG4gICAgdGltZSxcclxuICAgIHRlbXBlcmF0dXJlLFxyXG4gICAgcHJlY2lwaXRhdGlvbixcclxuICAgIGh1bWlkaXR5LFxyXG4gICAgd2luZHNwZWVkLFxyXG4gICAgd2VhdGhlcmNvbixcclxuICAgIC4uLm1lZGlhTGlua3Moe1xyXG4gICAgICBkYXRlLFxyXG4gICAgICB0aW1lLFxyXG4gICAgICB0ZW1wZXJhdHVyZSxcclxuICAgICAgcHJlY2lwaXRhdGlvbixcclxuICAgICAgaHVtaWRpdHksXHJcbiAgICAgIHdpbmRzcGVlZCxcclxuICAgICAgd2VhdGhlcmNvbixcclxuICAgIH0pLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURheU9iamVjdChkYXRhKSB7XHJcbiAgY29uc3QgeyBkYXRlIH0gPSBkYXRhWzBdO1xyXG5cclxuICBmdW5jdGlvbiBnZXRNaW5UZW1wKCkge1xyXG4gICAgY29uc3QgY29sZGVzdEhvdXIgPSBkYXRhLnJlZHVjZShcclxuICAgICAgKGFjY3VtLCBjdXJyZW50KSA9PlxyXG4gICAgICAgIGFjY3VtLnRlbXBlcmF0dXJlIDwgY3VycmVudC50ZW1wZXJhdHVyZSA/IGFjY3VtIDogY3VycmVudCxcclxuICAgICAgZGF0YVswXVxyXG4gICAgKTtcclxuICAgIHJldHVybiBjb2xkZXN0SG91ci50ZW1wZXJhdHVyZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldE1heFRlbXAoKSB7XHJcbiAgICBjb25zdCBob3R0ZXN0SG91ciA9IGRhdGEucmVkdWNlKFxyXG4gICAgICAoYWNjdW0sIGN1cnJlbnQpID0+XHJcbiAgICAgICAgYWNjdW0udGVtcGVyYXR1cmUgPiBjdXJyZW50LnRlbXBlcmF0dXJlID8gYWNjdW0gOiBjdXJyZW50LFxyXG4gICAgICBkYXRhWzBdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGhvdHRlc3RIb3VyLnRlbXBlcmF0dXJlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RG9taW5hdGluZ1dlYXRoZXJpY29uKCkge1xyXG4gICAgY29uc3QgdGh1bmRlciA9IGRhdGEuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LndlYXRoZXJjb24gPT09IFwiVGh1bmRlclwiKTtcclxuICAgIGNvbnN0IGRyaXp6bGUgPSBkYXRhLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC53ZWF0aGVyY29uID09PSBcIkRyaXp6bGVcIik7XHJcbiAgICBjb25zdCByYWluID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJSYWluXCIpO1xyXG4gICAgY29uc3Qgc25vdyA9IGRhdGEuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LndlYXRoZXJjb24gPT09IFwiU25vd1wiKTtcclxuICAgIGNvbnN0IGNsZWFyID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQud2VhdGhlcmNvbiA9PT0gXCJDbGVhclwiKTtcclxuICAgIGNvbnN0IGNsb3VkcyA9IGRhdGEuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LndlYXRoZXJjb24gPT09IFwiQ2xvdWRzXCIpO1xyXG4gICAgY29uc3Qgc29ydGVkV2VhdGhlciA9IFt0aHVuZGVyLCBkcml6emxlLCByYWluLCBzbm93LCBjbGVhciwgY2xvdWRzXS5zb3J0KFxyXG4gICAgICAoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aFxyXG4gICAgKTtcclxuICAgIHJldHVybiBzb3J0ZWRXZWF0aGVyWzBdWzBdLndlYXRoZXJjb247XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF0ZSxcclxuICAgIGRhdGEsXHJcbiAgICBnZXRNaW5UZW1wLFxyXG4gICAgZ2V0TWF4VGVtcCxcclxuICAgIGdldERvbWluYXRpbmdXZWF0aGVyaWNvbixcclxuICAgIC4uLmRhdGVEYXRhKHtcclxuICAgICAgZGF0ZSxcclxuICAgICAgZGF0YSxcclxuICAgICAgZ2V0TWluVGVtcCxcclxuICAgICAgZ2V0TWF4VGVtcCxcclxuICAgICAgZ2V0RG9taW5hdGluZ1dlYXRoZXJpY29uLFxyXG4gICAgfSksXHJcbiAgICAuLi5tZWRpYUxpbmtzKHtcclxuICAgICAgZGF0ZSxcclxuICAgICAgZGF0YSxcclxuICAgICAgZ2V0TWluVGVtcCxcclxuICAgICAgZ2V0TWF4VGVtcCxcclxuICAgICAgZ2V0RG9taW5hdGluZ1dlYXRoZXJpY29uLFxyXG4gICAgfSksXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ3VycmVudFdlYXRoZXIsIGNyZWF0ZUhvdXJPYmplY3QsIGNyZWF0ZURheU9iamVjdCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9ycyAqL1xyXG5pbXBvcnQge1xyXG4gIHdyaXRlV2VhdGhlcmludG9PYmplY3RzLFxyXG4gIGtlbHZpblRvRmFocmVuaGVpdCxcclxuICBrZWx2aW5Ub0NlbHNpdXMsXHJcbiAgZmFocmVuaGVpdFRvQ2Vsc2l1cyxcclxuICBjZWxzaXVzVG9GYWhyZW5oZWl0LFxyXG59IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0Q3VycmVudFdlYXRoZXIsIGdldEZpdmVEYXlGb3JlY2FzdCB9IGZyb20gXCIuL3dlYXRoZXJBUElcIjtcclxuXHJcbmltcG9ydCB7IHRlc3RQYWdlTG9hZERhdGEgfSBmcm9tIFwiLi90ZXN0aW5nXCI7XHJcblxyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxubGV0IGNpdHkgPSBcIlwiO1xyXG5sZXQgY2l0eUNvb3JkcyA9IFtdO1xyXG5sZXQgY291bnRyeSA9IFwiXCI7XHJcbmxldCBjdXJyZW50V2VhdGhlciA9IHt9O1xyXG5sZXQgZGF5c0ZvcmVjYXN0ID0ge307XHJcblxyXG53cml0ZVdlYXRoZXJpbnRvT2JqZWN0cyhcclxuICBnZXRDdXJyZW50V2VhdGhlcihcInNpZG5leVwiLCBcIkFVXCIpLFxyXG4gIGdldEZpdmVEYXlGb3JlY2FzdChcInNpZG5leVwiLCBcIkFVXCIpXHJcbilcclxuICAudGhlbigod2VhdGhlck9iamVjdHMpID0+IHtcclxuICAgIFtjdXJyZW50V2VhdGhlciwgZGF5c0ZvcmVjYXN0XSA9IHdlYXRoZXJPYmplY3RzO1xyXG4gIH0pXHJcbiAgLnRoZW4oKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgPHZpZGVvIGNsYXNzID1cInZpZGVvXCIgYXV0b3BsYXkgbXV0ZWQgbG9vcCBpZD1cIm15VmlkZW9cIj5cclxuICAgIDxzb3VyY2Ugc3JjPVwiJHtjdXJyZW50V2VhdGhlci5nZXRCYWNrZ3JvdW5kTGluaygpfVwiIHR5cGU9XCJ2aWRlby9tcDRcIj5cclxuICAgIDwvdmlkZW8+PGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48ZGl2IGNsYXNzPVwiY3VycmVudFdcIj48aW1nIGNsYXNzPVwiaWNvblwiIHNyYz1cIiR7Y3VycmVudFdlYXRoZXIuZ2V0SWNvbkxpbmsoKX1cIj48L2Rpdj48L2Rpdj5cclxuICAgIGA7XHJcbiAgfSk7XHJcblxyXG5uZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcclxuICAgICAgKGxvY2F0aW9uT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShbXHJcbiAgICAgICAgICBsb2NhdGlvbk9iamVjdC5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICBsb2NhdGlvbk9iamVjdC5jb29yZHMubG9uZ2l0dWRlLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KFtcImTDvHNzZWxkb3JmXCIsIFwiREVcIl0pO1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVqZWN0KFtcImTDvHNzZWxkb3JmXCIsIFwiREVcIl0pO1xyXG4gIH1cclxufSlcclxuICAudGhlbigobG9jYXRpb24pID0+XHJcbiAgICB3cml0ZVdlYXRoZXJpbnRvT2JqZWN0cyhcclxuICAgICAgZ2V0Q3VycmVudFdlYXRoZXIobG9jYXRpb24pLFxyXG4gICAgICBnZXRGaXZlRGF5Rm9yZWNhc3QobG9jYXRpb24pXHJcbiAgICApXHJcbiAgKVxyXG4gIC5jYXRjaCgoZmFsbGJhY2tMb2NhdGlvbikgPT5cclxuICAgIHdyaXRlV2VhdGhlcmludG9PYmplY3RzKFxyXG4gICAgICBnZXRDdXJyZW50V2VhdGhlcihmYWxsYmFja0xvY2F0aW9uWzBdLCBmYWxsYmFja0xvY2F0aW9uWzFdKSxcclxuICAgICAgZ2V0Rml2ZURheUZvcmVjYXN0KGZhbGxiYWNrTG9jYXRpb25bMF0sIGZhbGxiYWNrTG9jYXRpb25bMV0pXHJcbiAgICApXHJcbiAgKVxyXG4gIC50aGVuKCh3ZWF0aGVyT2JqZWN0cykgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXHJcbiAgICBbY3VycmVudFdlYXRoZXIsIGRheXNGb3JlY2FzdF0gPSB3ZWF0aGVyT2JqZWN0cztcclxuICAgIHRlc3RQYWdlTG9hZERhdGEoXHJcbiAgICAgIGN1cnJlbnRXZWF0aGVyLFxyXG4gICAgICBkYXlzRm9yZWNhc3QsXHJcbiAgICAgIGtlbHZpblRvQ2Vsc2l1cyxcclxuICAgICAga2VsdmluVG9GYWhyZW5oZWl0XHJcbiAgICApO1xyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIHRocm93IGVycjtcclxuICB9KVxyXG4gIC50aGVuKCgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYDx2aWRlbyBjbGFzcyA9XCJ2aWRlb1wiIGF1dG9wbGF5IG11dGVkIGxvb3AgaWQ9XCJteVZpZGVvXCI+XHJcbjxzb3VyY2Ugc3JjPVwiJHtjdXJyZW50V2VhdGhlci5nZXRCYWNrZ3JvdW5kTGluaygpfVwiIHR5cGU9XCJ2aWRlby9tcDRcIj5cclxuPC92aWRlbz48ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjxkaXYgY2xhc3M9XCJjdXJyZW50V1wiPjxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiJHtjdXJyZW50V2VhdGhlci5nZXRJY29uTGluaygpfVwiPjwvZGl2PjwvZGl2PlxyXG5gO1xyXG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNvdXJjZVwiKS5zcmMpO1xyXG4gICAgaWYgKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic291cmNlXCIpLnNyYyA9PT1cclxuICAgICAgY3VycmVudFdlYXRoZXIuZ2V0QmFja2dyb3VuZExpbmsoKVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyLmdldEJhY2tncm91bmRMaW5rKCkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=