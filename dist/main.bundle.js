"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! home-bg.jpg */ "./src/home-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merienda&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 5px;
  background-color: #49494970;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #494949e7;
}

:root {
  --header-bg: #5e3023;
  --header-text: #f3e9dc;
  --card-bg: #f3e9dc;
  --card-text: #532a1f;
}

body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  min-width: 800px;

  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position-y: 70%;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(5px) brightness(45%);
  font-family: 'Merienda', cursive;
}

@media (max-width:800px){
    body{
        background-size:800px
    }
}

.header {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0px;
  height: 70px;
  width: 100%;
  min-width: 800px;
  padding: 20px;
  font-size: 2.5rem;
  color: var(--header-text);
  border-bottom: 1px solid var(--header-text);
}

.nav {
  display: flex;
  gap: 15px;
}

.nav__a {
  cursor: pointer;
  padding-right: 20px;

  font-size: 1.5rem;
}

.nav__a--active {
  text-decoration: underline;
}

.content {
  height: 100%;
  margin-top: 70px;
  margin-bottom: 40px;
  z-index: 1;
  overflow: auto;
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px;

  font-size: 2rem;
  color: var(--header-text);
}

.menu {
  padding: 20px 200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: 200px;
  justify-content: center;
  gap: 25px;
}

.food-card {
  display: grid;
  grid-template-columns: 140px 1fr;
  grid-template-rows: 1fr 5fr;
  gap: 15px;

  padding: 10px;
  border-radius: 5px;

  color: var(--card-text);
  background-color: var(--card-bg);
}

.food-name {
  grid-column: 2/3;
  font-size: 1.5rem;
  font-weight: 900;
}

.food-description {
  grid-column: 2/3;
  grid-row: 2/3;
}

.food-image {
  grid-column: 1/2;
  grid-row: 1/3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 2px;
}

.contact{
    padding: 20px 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 25px;
}

.contact-card{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 400px;

    padding: 25px;
    border-radius: 15px;

    background-color: var(--card-bg);
}

.contact-head{
    align-self: center;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 20px;
}

.credits{
    font-size: 0.8rem;
}

.footer {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 40px;
  bottom: 0px;
  padding: 10px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.5rem;
  color: var(--header-text);
  border-top: 1px solid var(--header-text);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;IACI,kBAAkB;EACpB,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,oBAAoB;EACpB,sBAAsB;EACtB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,gBAAgB;;EAEhB,yDAAoC;EACpC,0BAA0B;EAC1B,sBAAsB;EACtB,4BAA4B;EAC5B,0CAA0C;EAC1C,gCAAgC;AAClC;;AAEA;IACI;QACI;IACJ;AACJ;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,yBAAyB;EACzB,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,eAAe;EACf,mBAAmB;;EAEnB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;;EAEf,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,2DAA2D;EAC3D,qBAAqB;EACrB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,2BAA2B;EAC3B,SAAS;;EAET,aAAa;EACb,kBAAkB;;EAElB,uBAAuB;EACvB,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;;IAEZ,aAAa;IACb,mBAAmB;;IAEnB,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,WAAW;EACX,YAAY;EACZ,WAAW;EACX,aAAa;;EAEb,yCAAyC;EACzC,iBAAiB;EACjB,yBAAyB;EACzB,wCAAwC;AAC1C","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 5px;\r\n  background-color: #49494970;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background-color: #494949e7;\r\n}\r\n\r\n:root {\r\n  --header-bg: #5e3023;\r\n  --header-text: #f3e9dc;\r\n  --card-bg: #f3e9dc;\r\n  --card-text: #532a1f;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  min-width: 800px;\r\n\r\n  background-image: url(\"home-bg.jpg\");\r\n  background-position-y: 70%;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  backdrop-filter: blur(5px) brightness(45%);\r\n  font-family: 'Merienda', cursive;\r\n}\r\n\r\n@media (max-width:800px){\r\n    body{\r\n        background-size:800px\r\n    }\r\n}\r\n\r\n.header {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: fixed;\r\n  z-index: 2;\r\n  top: 0px;\r\n  height: 70px;\r\n  width: 100%;\r\n  min-width: 800px;\r\n  padding: 20px;\r\n  font-size: 2.5rem;\r\n  color: var(--header-text);\r\n  border-bottom: 1px solid var(--header-text);\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.nav__a {\r\n  cursor: pointer;\r\n  padding-right: 20px;\r\n\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.nav__a--active {\r\n  text-decoration: underline;\r\n}\r\n\r\n.content {\r\n  height: 100%;\r\n  margin-top: 70px;\r\n  margin-bottom: 40px;\r\n  z-index: 1;\r\n  overflow: auto;\r\n}\r\n\r\n.home {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0 50px;\r\n\r\n  font-size: 2rem;\r\n  color: var(--header-text);\r\n}\r\n\r\n.menu {\r\n  padding: 20px 200px;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n  grid-auto-rows: 200px;\r\n  justify-content: center;\r\n  gap: 25px;\r\n}\r\n\r\n.food-card {\r\n  display: grid;\r\n  grid-template-columns: 140px 1fr;\r\n  grid-template-rows: 1fr 5fr;\r\n  gap: 15px;\r\n\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n\r\n  color: var(--card-text);\r\n  background-color: var(--card-bg);\r\n}\r\n\r\n.food-name {\r\n  grid-column: 2/3;\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n}\r\n\r\n.food-description {\r\n  grid-column: 2/3;\r\n  grid-row: 2/3;\r\n}\r\n\r\n.food-image {\r\n  grid-column: 1/2;\r\n  grid-row: 1/3;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  border-radius: 2px;\r\n}\r\n\r\n.contact{\r\n    padding: 20px 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    gap: 25px;\r\n}\r\n\r\n.contact-card{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    width: 400px;\r\n\r\n    padding: 25px;\r\n    border-radius: 15px;\r\n\r\n    background-color: var(--card-bg);\r\n}\r\n\r\n.contact-head{\r\n    align-self: center;\r\n    font-size: 2rem;\r\n    font-weight: 800;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.credits{\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.footer {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  z-index: 2;\r\n  width: 100%;\r\n  height: 40px;\r\n  bottom: 0px;\r\n  padding: 10px;\r\n\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 0.5rem;\r\n  color: var(--header-text);\r\n  border-top: 1px solid var(--header-text);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContact: () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact(contentClass) {
  const content = document.querySelector(`.${contentClass}`);
  content.removeAttribute("class");
  content.classList.add(contentClass, "contact");
  content.textContent = "";

  const contact = createContact();
  const credit = createCredit();

  content.appendChild(contact);
  content.appendChild(credit);

  return content;
}

function createCard() {
  const card = document.createElement("div");
  card.classList.add("contact-card");
  return card;
}

function createContact() {
  const card = createCard("");

  const contactUs = document.createElement("div");
  contactUs.classList.add("contact-head");
  contactUs.textContent = "Contact Us :";

  const telephone = document.createElement("div");
  telephone.classList.add("telephone");
  telephone.textContent = "Telephone : +0123456789";

  const email = document.createElement("div");
  email.classList.add("email");
  email.textContent = "Email : rasa.nusantara@example.com";

  const location = document.createElement("div");
  location.classList.add("location");
  location.textContent = "Location : Right about there, yeah there!";

  card.appendChild(contactUs);
  card.appendChild(telephone);
  card.appendChild(email);
  card.appendChild(location);

  return card;
}

function createCredit() {
  const card = createCard();
  card.classList.add("credits");

  const header = document.createElement("div");
  header.classList.add("contact-head");
  header.textContent = "Resources / Assets Used";
  card.appendChild(header);

  credits.forEach((credit) => {
    const container = document.createElement("div");
    container.classList.add("credit");
    container.textContent = credit;
    card.appendChild(container);
  });

  return card;
}

const credits = [
  "Photo by Ida Rizkha: https://www.pexels.com/photo/salad-with-fresh-vegetables-and-eggs-3008740/",
  "Photo by Suhairy  Tri Yadhi: https://www.pexels.com/photo/nasi-lemak-served-on-banana-leaf-11912788/",
  "Photo by Nadim Shaikh: https://www.pexels.com/photo/appetizing-asian-dish-with-rice-7758253/",
  "Image by valeria_aksakova on Freepik",
  "Image by 8photo on Freepik",
  "Image by jcomp on Freepik",
];




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome(contentClass) {
  const content = document.querySelector(`.${contentClass}`);
  content.removeAttribute("class");
  content.classList.add(contentClass, "home");
  content.textContent = "";

  const hookText = document.createElement("h2");
  hookText.textContent =
    "Embark on a culinary journey to the heart of Indonesia, where flavors come alive with every bite.";

  content.appendChild(hookText);
  return content;
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const contentClass = "content";

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const restaurantTitle = document.createElement("div");
  restaurantTitle.textContent = "Warung Nusantara";

  header.appendChild(nav());
  header.appendChild(restaurantTitle);
  return header;
}

function nav() {
  const nav = document.createElement("div");
  nav.classList.add("nav");

  const removeUnderline = () => {
    home.classList.remove("nav__a--active");
    menu.classList.remove("nav__a--active");
    contact.classList.remove("nav__a--active");
  };

  const home = document.createElement("a");
  home.classList.add("nav__a", "nav__a--active");
  home.textContent = "Home";
  home.addEventListener("click", (e) => {
    removeUnderline();
    home.classList.add("nav__a--active");
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)(contentClass);
  });

  const menu = document.createElement("a");
  menu.classList.add("nav__a");
  menu.textContent = "Menu";
  menu.addEventListener("click", (e) => {
    removeUnderline();
    menu.classList.add("nav__a--active");
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)(contentClass);
  });

  const contact = document.createElement("a");
  contact.classList.add("nav__a");
  contact.textContent = "Contact";
  contact.addEventListener("click", (e) => {
    removeUnderline();
    contact.classList.add("nav__a--active");
    (0,_contact__WEBPACK_IMPORTED_MODULE_1__.loadContact)(contentClass);
  });

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}

function createContent() {
  const content = document.createElement("div");
  content.classList.add(contentClass);
  return content;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const restaurantTitle = document.createElement("h1");
  restaurantTitle.textContent = "Copyright © YesayaS";

  footer.appendChild(restaurantTitle);
  return footer;
}

function initializeWebpage() {
  const body = document.body;

  body.appendChild(createHeader());
  body.appendChild(createContent());
  body.appendChild(createFooter());

  (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)(contentClass);
}

initializeWebpage();


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _nasi_uduk_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nasi-uduk.jpg */ "./src/nasi-uduk.jpg");
/* harmony import */ var _nasi_goreng_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nasi-goreng.jpg */ "./src/nasi-goreng.jpg");
/* harmony import */ var _rendang_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rendang.jpg */ "./src/rendang.jpg");
/* harmony import */ var _satay_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./satay.jpg */ "./src/satay.jpg");
/* harmony import */ var _soto_ayam_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./soto-ayam.jpg */ "./src/soto-ayam.jpg");
/* harmony import */ var _bakso_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bakso.jpg */ "./src/bakso.jpg");







function loadMenu(contentClass) {
  const content = document.querySelector(`.${contentClass}`);
  content.removeAttribute("class");
  content.classList.add(contentClass, "menu");
  content.textContent = "";

  menuList.forEach((food) => {
    const card = createCard(food);
    content.appendChild(card);
  });
  return content;
}

function createCard(food) {
  const card = document.createElement("div");
  card.classList.add("food-card");

  const foodName = document.createElement("div");
  foodName.classList.add("food-name");
  foodName.textContent = food.name;

  const foodDescription = document.createElement("div");
  foodDescription.classList.add("food-description");
  foodDescription.textContent = food.description;

  const foodImage = document.createElement("div");
  foodImage.classList.add("food-image");
  foodImage.style.backgroundImage = `url(${food.imageUrl})`;

  card.appendChild(foodName);
  card.appendChild(foodDescription);
  card.appendChild(foodImage);
  return card;
}

const menuList = [
  {
    name: "Nasi Uduk",
    description:
      "Fragrant coconut rice served with a variety of savory side dishes.",
    imageUrl: _nasi_uduk_jpg__WEBPACK_IMPORTED_MODULE_0__,
  },
  {
    name: "Rendang",
    description:
      "Slow-cooked, tender beef stewed in a rich and aromatic blend of spices and coconut milk.",
    imageUrl: _rendang_jpg__WEBPACK_IMPORTED_MODULE_2__,
  },
  {
    name: "Satay",
    description:
      "Skewered and grilled meat (usually chicken or beef) served with a flavorful peanut sauce.",
    imageUrl: _satay_jpg__WEBPACK_IMPORTED_MODULE_3__,
  },
  {
    name: "Nasi Goreng",
    description:
      "Indonesia's beloved fried rice dish, packed with a medley of flavors and often topped with a fried egg.",
    imageUrl: _nasi_goreng_jpg__WEBPACK_IMPORTED_MODULE_1__,
  },
  {
    name: "Soto Ayam",
    description:
      "A comforting and aromatic chicken soup with rice, turmeric, and a medley of herbs and spices.",
    imageUrl: _soto_ayam_jpg__WEBPACK_IMPORTED_MODULE_4__,
  },
  {
    name: "Bakso",
    description:
      "A beloved Indonesian meatball soup with clear broth, rice noodles, and a variety of meatballs, typically made from beef or chicken.",
    imageUrl: _bakso_jpg__WEBPACK_IMPORTED_MODULE_5__,
  },
];




/***/ }),

/***/ "./src/bakso.jpg":
/*!***********************!*\
  !*** ./src/bakso.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36b5f256001c6ce8f0ae.jpg";

/***/ }),

/***/ "./src/home-bg.jpg":
/*!*************************!*\
  !*** ./src/home-bg.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c0c15f500e049caf156.jpg";

/***/ }),

/***/ "./src/nasi-goreng.jpg":
/*!*****************************!*\
  !*** ./src/nasi-goreng.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38733e8d2277f2cb3f1f.jpg";

/***/ }),

/***/ "./src/nasi-uduk.jpg":
/*!***************************!*\
  !*** ./src/nasi-uduk.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "379cf0850002dc5d3879.jpg";

/***/ }),

/***/ "./src/rendang.jpg":
/*!*************************!*\
  !*** ./src/rendang.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3fd0b9507d2050482036.jpg";

/***/ }),

/***/ "./src/satay.jpg":
/*!***********************!*\
  !*** ./src/satay.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9587146513a018ecf54.jpg";

/***/ }),

/***/ "./src/soto-ayam.jpg":
/*!***************************!*\
  !*** ./src/soto-ayam.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35e8c59f7fa2d28a09b9.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFHQUE4QjtBQUMxRSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSDtBQUN0SCx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFVBQVUsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxhQUFhLGFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrQ0FBUTtBQUNWO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZ1QztBQUNJO0FBQ1A7QUFDSjtBQUNPO0FBQ1A7QUFDaEM7QUFDQTtBQUNBLDZDQUE2QyxhQUFhO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsY0FBYztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJDQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMseUNBQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1Q0FBSztBQUNuQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFVO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkNBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1Q0FBSztBQUNuQixHQUFHO0FBQ0g7QUFDQTtBQUNvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaG9tZS1iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcmllbmRhJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NDk3MDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk0OWU3O1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLS1oZWFkZXItYmc6ICM1ZTMwMjM7XHJcbiAgLS1oZWFkZXItdGV4dDogI2YzZTlkYztcclxuICAtLWNhcmQtYmc6ICNmM2U5ZGM7XHJcbiAgLS1jYXJkLXRleHQ6ICM1MzJhMWY7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtaW4td2lkdGg6IDgwMHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA3MCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpIGJyaWdodG5lc3MoNDUlKTtcclxuICBmb250LWZhbWlseTogJ01lcmllbmRhJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ODAwcHgpe1xyXG4gICAgYm9keXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ODAwcHhcclxuICAgIH1cclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRvcDogMHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDgwMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taGVhZGVyLXRleHQpO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTVweDtcclxufVxyXG5cclxuLm5hdl9fYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ubmF2X19hLS1hY3RpdmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uaG9tZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCA1MHB4O1xyXG5cclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0KTtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIHBhZGRpbmc6IDIwcHggMjAwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxuICBncmlkLWF1dG8tcm93czogMjAwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAyNXB4O1xyXG59XHJcblxyXG4uZm9vZC1jYXJkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTQwcHggMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcclxuICBnYXA6IDE1cHg7XHJcblxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0tY2FyZC10ZXh0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnKTtcclxufVxyXG5cclxuLmZvb2QtbmFtZSB7XHJcbiAgZ3JpZC1jb2x1bW46IDIvMztcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4uZm9vZC1kZXNjcmlwdGlvbiB7XHJcbiAgZ3JpZC1jb2x1bW46IDIvMztcclxuICBncmlkLXJvdzogMi8zO1xyXG59XHJcblxyXG4uZm9vZC1pbWFnZSB7XHJcbiAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICBncmlkLXJvdzogMS8zO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uY29udGFjdHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZ2FwOiAyNXB4O1xyXG59XHJcblxyXG4uY29udGFjdC1jYXJke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcblxyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZyk7XHJcbn1cclxuXHJcbi5jb250YWN0LWhlYWR7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNyZWRpdHN7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dCk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWhlYWRlci10ZXh0KTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7RUFDcEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjs7RUFFaEIseURBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDBDQUEwQztFQUMxQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjs7RUFFbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTs7RUFFZixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtFQUMzQixTQUFTOztFQUVULGFBQWE7RUFDYixrQkFBa0I7O0VBRWxCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7SUFFbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsWUFBWTs7SUFFWixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhOztFQUViLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHdDQUF3QztBQUMxQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJpZW5kYSZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NDk3MDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5ZTc7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0taGVhZGVyLWJnOiAjNWUzMDIzO1xcclxcbiAgLS1oZWFkZXItdGV4dDogI2YzZTlkYztcXHJcXG4gIC0tY2FyZC1iZzogI2YzZTlkYztcXHJcXG4gIC0tY2FyZC10ZXh0OiAjNTMyYTFmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG1pbi13aWR0aDogODAwcHg7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImhvbWUtYmcuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDcwJTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCkgYnJpZ2h0bmVzcyg0NSUpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdNZXJpZW5kYScsIGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOjgwMHB4KXtcXHJcXG4gICAgYm9keXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTo4MDBweFxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIHRvcDogMHB4O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4td2lkdGg6IDgwMHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0KTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItdGV4dCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9fYSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZfX2EtLWFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogNzBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCA1MHB4O1xcclxcblxcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgcGFkZGluZzogMjBweCAyMDBweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtYXV0by1yb3dzOiAyMDBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE0MHB4IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICBjb2xvcjogdmFyKC0tY2FyZC10ZXh0KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1uYW1lIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICBncmlkLXJvdzogMi8zO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1pbWFnZSB7XFxyXFxuICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgZ3JpZC1yb3c6IDEvMztcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAyMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgZ2FwOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1jYXJke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZyk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWhlYWR7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlZGl0c3tcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3R0b206IDBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuXFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0KTtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItdGV4dCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gbG9hZENvbnRhY3QoY29udGVudENsYXNzKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbnRlbnRDbGFzc31gKTtcclxuICBjb250ZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xyXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChjb250ZW50Q2xhc3MsIFwiY29udGFjdFwiKTtcclxuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgY29uc3QgY29udGFjdCA9IGNyZWF0ZUNvbnRhY3QoKTtcclxuICBjb25zdCBjcmVkaXQgPSBjcmVhdGVDcmVkaXQoKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWRpdCk7XHJcblxyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKCkge1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhcmQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY2FyZFwiKTtcclxuICByZXR1cm4gY2FyZDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcclxuICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChcIlwiKTtcclxuXHJcbiAgY29uc3QgY29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWN0VXMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaGVhZFwiKTtcclxuICBjb250YWN0VXMudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXMgOlwiO1xyXG5cclxuICBjb25zdCB0ZWxlcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRlbGVwaG9uZS5jbGFzc0xpc3QuYWRkKFwidGVsZXBob25lXCIpO1xyXG4gIHRlbGVwaG9uZS50ZXh0Q29udGVudCA9IFwiVGVsZXBob25lIDogKzAxMjM0NTY3ODlcIjtcclxuXHJcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGVtYWlsLmNsYXNzTGlzdC5hZGQoXCJlbWFpbFwiKTtcclxuICBlbWFpbC50ZXh0Q29udGVudCA9IFwiRW1haWwgOiByYXNhLm51c2FudGFyYUBleGFtcGxlLmNvbVwiO1xyXG5cclxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xyXG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID0gXCJMb2NhdGlvbiA6IFJpZ2h0IGFib3V0IHRoZXJlLCB5ZWFoIHRoZXJlIVwiO1xyXG5cclxuICBjYXJkLmFwcGVuZENoaWxkKGNvbnRhY3RVcyk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZCh0ZWxlcGhvbmUpO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQoZW1haWwpO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xyXG5cclxuICByZXR1cm4gY2FyZDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ3JlZGl0KCkge1xyXG4gIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKCk7XHJcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY3JlZGl0c1wiKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaGVhZFwiKTtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlJlc291cmNlcyAvIEFzc2V0cyBVc2VkXCI7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICBjcmVkaXRzLmZvckVhY2goKGNyZWRpdCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY3JlZGl0XCIpO1xyXG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gY3JlZGl0O1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2FyZDtcclxufVxyXG5cclxuY29uc3QgY3JlZGl0cyA9IFtcclxuICBcIlBob3RvIGJ5IElkYSBSaXpraGE6IGh0dHBzOi8vd3d3LnBleGVscy5jb20vcGhvdG8vc2FsYWQtd2l0aC1mcmVzaC12ZWdldGFibGVzLWFuZC1lZ2dzLTMwMDg3NDAvXCIsXHJcbiAgXCJQaG90byBieSBTdWhhaXJ5ICBUcmkgWWFkaGk6IGh0dHBzOi8vd3d3LnBleGVscy5jb20vcGhvdG8vbmFzaS1sZW1hay1zZXJ2ZWQtb24tYmFuYW5hLWxlYWYtMTE5MTI3ODgvXCIsXHJcbiAgXCJQaG90byBieSBOYWRpbSBTaGFpa2g6IGh0dHBzOi8vd3d3LnBleGVscy5jb20vcGhvdG8vYXBwZXRpemluZy1hc2lhbi1kaXNoLXdpdGgtcmljZS03NzU4MjUzL1wiLFxyXG4gIFwiSW1hZ2UgYnkgdmFsZXJpYV9ha3Nha292YSBvbiBGcmVlcGlrXCIsXHJcbiAgXCJJbWFnZSBieSA4cGhvdG8gb24gRnJlZXBpa1wiLFxyXG4gIFwiSW1hZ2UgYnkgamNvbXAgb24gRnJlZXBpa1wiLFxyXG5dO1xyXG5cclxuZXhwb3J0IHsgbG9hZENvbnRhY3QgfTtcclxuIiwiZnVuY3Rpb24gbG9hZEhvbWUoY29udGVudENsYXNzKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbnRlbnRDbGFzc31gKTtcclxuICBjb250ZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xyXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChjb250ZW50Q2xhc3MsIFwiaG9tZVwiKTtcclxuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgY29uc3QgaG9va1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgaG9va1RleHQudGV4dENvbnRlbnQgPVxyXG4gICAgXCJFbWJhcmsgb24gYSBjdWxpbmFyeSBqb3VybmV5IHRvIHRoZSBoZWFydCBvZiBJbmRvbmVzaWEsIHdoZXJlIGZsYXZvcnMgY29tZSBhbGl2ZSB3aXRoIGV2ZXJ5IGJpdGUuXCI7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9va1RleHQpO1xyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgeyBsb2FkSG9tZSB9O1xyXG4iLCJpbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgY29udGVudENsYXNzID0gXCJjb250ZW50XCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuXHJcbiAgY29uc3QgcmVzdGF1cmFudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSBcIldhcnVuZyBOdXNhbnRhcmFcIjtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdigpKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFRpdGxlKTtcclxuICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuYXYoKSB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlVW5kZXJsaW5lID0gKCkgPT4ge1xyXG4gICAgaG9tZS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2X19hLS1hY3RpdmVcIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZfX2EtLWFjdGl2ZVwiKTtcclxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZShcIm5hdl9fYS0tYWN0aXZlXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJuYXZfX2FcIiwgXCJuYXZfX2EtLWFjdGl2ZVwiKTtcclxuICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIHJlbW92ZVVuZGVybGluZSgpO1xyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibmF2X19hLS1hY3RpdmVcIik7XHJcbiAgICBsb2FkSG9tZShjb250ZW50Q2xhc3MpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibmF2X19hXCIpO1xyXG4gIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgcmVtb3ZlVW5kZXJsaW5lKCk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZfX2EtLWFjdGl2ZVwiKTtcclxuICAgIGxvYWRNZW51KGNvbnRlbnRDbGFzcyk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJuYXZfX2FcIik7XHJcbiAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICByZW1vdmVVbmRlcmxpbmUoKTtcclxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcIm5hdl9fYS0tYWN0aXZlXCIpO1xyXG4gICAgbG9hZENvbnRhY3QoY29udGVudENsYXNzKTtcclxuICB9KTtcclxuXHJcbiAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gIG5hdi5hcHBlbmRDaGlsZChtZW51KTtcclxuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcblxyXG4gIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKGNvbnRlbnRDbGFzcyk7XHJcbiAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xyXG5cclxuICBjb25zdCByZXN0YXVyYW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgcmVzdGF1cmFudFRpdGxlLnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgWWVzYXlhU1wiO1xyXG5cclxuICBmb290ZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFRpdGxlKTtcclxuICByZXR1cm4gZm9vdGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplV2VicGFnZSgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVDb250ZW50KCkpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG5cclxuICBsb2FkSG9tZShjb250ZW50Q2xhc3MpO1xyXG59XHJcblxyXG5pbml0aWFsaXplV2VicGFnZSgpO1xyXG4iLCJpbXBvcnQgbmFzaVVkdWsgZnJvbSBcIi4vbmFzaS11ZHVrLmpwZ1wiO1xyXG5pbXBvcnQgbmFzaUdvcmVuZyBmcm9tIFwiLi9uYXNpLWdvcmVuZy5qcGdcIjtcclxuaW1wb3J0IHJlbmRhbmcgZnJvbSBcIi4vcmVuZGFuZy5qcGdcIjtcclxuaW1wb3J0IHNhdGF5IGZyb20gXCIuL3NhdGF5LmpwZ1wiO1xyXG5pbXBvcnQgc290b0F5YW0gZnJvbSBcIi4vc290by1heWFtLmpwZ1wiO1xyXG5pbXBvcnQgYmFrc28gZnJvbSBcIi4vYmFrc28uanBnXCI7XHJcblxyXG5mdW5jdGlvbiBsb2FkTWVudShjb250ZW50Q2xhc3MpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29udGVudENsYXNzfWApO1xyXG4gIGNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7XHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKGNvbnRlbnRDbGFzcywgXCJtZW51XCIpO1xyXG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICBtZW51TGlzdC5mb3JFYWNoKChmb29kKSA9PiB7XHJcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChmb29kKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoZm9vZCkge1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhcmQuY2xhc3NMaXN0LmFkZChcImZvb2QtY2FyZFwiKTtcclxuXHJcbiAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvb2ROYW1lLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XHJcbiAgZm9vZE5hbWUudGV4dENvbnRlbnQgPSBmb29kLm5hbWU7XHJcblxyXG4gIGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9vZERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb29kLWRlc2NyaXB0aW9uXCIpO1xyXG4gIGZvb2REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGZvb2QuZGVzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9vZEltYWdlLmNsYXNzTGlzdC5hZGQoXCJmb29kLWltYWdlXCIpO1xyXG4gIGZvb2RJbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Zm9vZC5pbWFnZVVybH0pYDtcclxuXHJcbiAgY2FyZC5hcHBlbmRDaGlsZChmb29kTmFtZSk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChmb29kRGVzY3JpcHRpb24pO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcclxuICByZXR1cm4gY2FyZDtcclxufVxyXG5cclxuY29uc3QgbWVudUxpc3QgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJOYXNpIFVkdWtcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkZyYWdyYW50IGNvY29udXQgcmljZSBzZXJ2ZWQgd2l0aCBhIHZhcmlldHkgb2Ygc2F2b3J5IHNpZGUgZGlzaGVzLlwiLFxyXG4gICAgaW1hZ2VVcmw6IG5hc2lVZHVrLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJSZW5kYW5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJTbG93LWNvb2tlZCwgdGVuZGVyIGJlZWYgc3Rld2VkIGluIGEgcmljaCBhbmQgYXJvbWF0aWMgYmxlbmQgb2Ygc3BpY2VzIGFuZCBjb2NvbnV0IG1pbGsuXCIsXHJcbiAgICBpbWFnZVVybDogcmVuZGFuZyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2F0YXlcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlNrZXdlcmVkIGFuZCBncmlsbGVkIG1lYXQgKHVzdWFsbHkgY2hpY2tlbiBvciBiZWVmKSBzZXJ2ZWQgd2l0aCBhIGZsYXZvcmZ1bCBwZWFudXQgc2F1Y2UuXCIsXHJcbiAgICBpbWFnZVVybDogc2F0YXksXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk5hc2kgR29yZW5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJbmRvbmVzaWEncyBiZWxvdmVkIGZyaWVkIHJpY2UgZGlzaCwgcGFja2VkIHdpdGggYSBtZWRsZXkgb2YgZmxhdm9ycyBhbmQgb2Z0ZW4gdG9wcGVkIHdpdGggYSBmcmllZCBlZ2cuXCIsXHJcbiAgICBpbWFnZVVybDogbmFzaUdvcmVuZyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU290byBBeWFtXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBIGNvbWZvcnRpbmcgYW5kIGFyb21hdGljIGNoaWNrZW4gc291cCB3aXRoIHJpY2UsIHR1cm1lcmljLCBhbmQgYSBtZWRsZXkgb2YgaGVyYnMgYW5kIHNwaWNlcy5cIixcclxuICAgIGltYWdlVXJsOiBzb3RvQXlhbSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQmFrc29cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkEgYmVsb3ZlZCBJbmRvbmVzaWFuIG1lYXRiYWxsIHNvdXAgd2l0aCBjbGVhciBicm90aCwgcmljZSBub29kbGVzLCBhbmQgYSB2YXJpZXR5IG9mIG1lYXRiYWxscywgdHlwaWNhbGx5IG1hZGUgZnJvbSBiZWVmIG9yIGNoaWNrZW4uXCIsXHJcbiAgICBpbWFnZVVybDogYmFrc28sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB7IGxvYWRNZW51IH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==