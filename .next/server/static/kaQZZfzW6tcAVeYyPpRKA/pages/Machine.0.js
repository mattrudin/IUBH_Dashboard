module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3710254439" + " " + "navbar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3710254439"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    id: "wheel",
    className: "jsx-3710254439" + " " + "material-icons"
  }, "clear")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    id: "title-wind",
    className: "jsx-3710254439"
  }, "RotorWind GmbH"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    className: "jsx-3710254439"
  }, "\"Uns bewegt nicht nur der Wind\""), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "echtzeit",
    className: "jsx-3710254439" + " " + "menu-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3710254439" + " " + "material-icons"
  }, "update"), " Echtzeitansicht")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/analyse"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "analyse",
    className: "jsx-3710254439" + " " + "menu-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3710254439" + " " + "material-icons"
  }, "timeline"), " Analyseansicht")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/quellen"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "quellen",
    className: "jsx-3710254439" + " " + "menu-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3710254439" + " " + "material-icons"
  }, "language"), " Quellen")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3710254439",
    css: [".navbar.jsx-3710254439{width:300px;background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url(\"/static/windmill.jpg\");background-position:center;justify-text:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "h1.jsx-3710254439{color:white;}", "em.jsx-3710254439{color:white;margin-bottom:50px;display:block;}", "#title-wind.jsx-3710254439{font-family:'Audiowide';font-size:40px;}", ".menu-item.jsx-3710254439{padding:10px;margin:2px;opacity:0,5;-webkit-transition:0.3s;transition:0.3s;display:block;width:150px;}", ".menu-item.jsx-3710254439:link{color:#b8b7ad;-webkit-text-decoration:none;text-decoration:none;}", ".menu-item.jsx-3710254439:visited{color:#b8b7ad;-webkit-text-decoration:none;text-decoration:none;}", ".menu-item.jsx-3710254439:hover{color:white;background:#00acc1;border-radius:5px;opacity:1;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}", "#wheel.jsx-3710254439{-webkit-animation:roll-jsx-3710254439 3s infinite;animation:roll-jsx-3710254439 3s infinite;-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg);font-size:120px;}", "@-webkit-keyframes roll-jsx-3710254439{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes roll-jsx-3710254439{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3766766750" + " " + "header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    id: "header-title",
    className: "jsx-3766766750"
  }, "RotorWind GmbH"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3766766750",
    css: [".header.jsx-3766766750{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#eeeeee;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}", "#header-title.jsx-3766766750{color:black;font-family:'Audiowide';font-size:60px;padding-left:300px;}"]
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var Head = function Head(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, props.title || ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Audiowide",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: props.title || ''
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/MachineViewSensor/MachineViewSensor.js



var MachineViewSensor_MachineViewSensor = function MachineViewSensor(props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-2340636589" + " " + ((props.picture === 'critical' ? 'critical-tile' : 'tile') || "")
  }, external_react_default.a.createElement("h1", {
    className: "jsx-2340636589"
  }, "Sensor ".concat(props.title)), external_react_default.a.createElement("img", {
    src: "/static/".concat(props.picture, ".png"),
    width: "175px",
    className: "jsx-2340636589"
  }), external_react_default.a.createElement(style_default.a, {
    styleId: "2340636589",
    css: [".tile.jsx-2340636589{width:200px;height:400px;background:#70ad47;color:white;margin:10px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}", ".critical-tile.jsx-2340636589{width:200px;height:400px;background:#ed7d31;color:white;margin:10px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}"]
  }));
};

/* harmony default export */ var components_MachineViewSensor_MachineViewSensor = (MachineViewSensor_MachineViewSensor);
// CONCATENATED MODULE: ./components/MachineView/MachineView.js




var MachineView_MachineView = function MachineView(props) {
  return external_react_default.a.createElement("div", {
    className: "main-view"
  }, external_react_default.a.createElement("h1", {
    className: "machine-title"
  }, "Maschine ", props.machineNo), external_react_default.a.createElement("div", {
    className: "jsx-3322109699" + " " + "machine-view"
  }, external_react_default.a.createElement(components_MachineViewSensor_MachineViewSensor, {
    title: "1",
    picture: props.picture1
  }), external_react_default.a.createElement(components_MachineViewSensor_MachineViewSensor, {
    title: "2",
    picture: props.picture2
  }), external_react_default.a.createElement(components_MachineViewSensor_MachineViewSensor, {
    title: "3",
    picture: props.picture3
  }), external_react_default.a.createElement(style_default.a, {
    styleId: "3322109699",
    css: [".machine-title{margin-left:300px;}", ".machine-view{font-family:'Roboto';display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;background:#eeeeee;margin-left:300px;}", ".button-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:300px;}", ".button{margin-left:40px;-webkit-transition:0.3s;transition:0.3s;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);padding-right:10px;padding-left:10px;margin-top:20px;color:white;}", ".button:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}", ".button:link{-webkit-text-decoration:none;text-decoration:none;}", ".button:visited{-webkit-text-decoration:none;text-decoration:none;}", ".neustart{background:#4472c4;}", ".not-aus{color:white;border-radius:50%;background:red;}"]
  })), external_react_default.a.createElement("div", {
    className: "button-row"
  }, external_react_default.a.createElement("a", {
    href: "/",
    className: "button neustart"
  }, external_react_default.a.createElement("h2", null, "Neustart der Maschine")), external_react_default.a.createElement("a", {
    href: "/",
    className: "button not-aus"
  }, external_react_default.a.createElement("h2", null, "NOT AUS"))));
};

/* harmony default export */ var components_MachineView_MachineView = __webpack_exports__["a"] = (MachineView_MachineView);

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _components_head_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _components_MachineView_MachineView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);







var Machine = function Machine() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-433168617" + " " + "App"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_head_head__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    title: "Maschine"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: "navbar"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-433168617" + " " + "main-view"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MachineView_MachineView__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    machineNo: "1",
    picture1: "okay_1",
    picture2: "okay_2",
    picture3: "okay_3"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "433168617",
    css: [".App{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;background:#eeeeee;font-family:Roboto;}", ".navbar{min-width:300px;position:fixed;height:100%;}", ".main-view{width:100%;background:#eeeeee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;}", "body{margin:0;}"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Machine);

/***/ })
/******/ ]);