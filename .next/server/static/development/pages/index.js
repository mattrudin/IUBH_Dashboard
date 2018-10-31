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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\components\\Header\\Header.js";



function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3766766750" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    id: "header-title",
    className: "jsx-3766766750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "RotorWind GmbH"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3766766750",
    css: ".header.jsx-3766766750{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#eeeeee;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}#header-title.jsx-3766766750{color:black;font-family:'Audiowide';font-size:60px;padding-left:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWF0dGhcXERvY3VtZW50c1xcV2ViIGRldmVsb3BlclxcUHJvamVjdHNcXGl1YmhfZGFzaGJvYXJkXFxjb21wb25lbnRzXFxIZWFkZXJcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNd0IsQUFHa0MsQUFNRCxZQUNZLHdCQUNULGVBQ0ksbUJBQ3ZCLElBVHVCLG1CQUNVLDJIQUNqQyIsImZpbGUiOiJDOlxcVXNlcnNcXG1hdHRoXFxEb2N1bWVudHNcXFdlYiBkZXZlbG9wZXJcXFByb2plY3RzXFxpdWJoX2Rhc2hib2FyZFxcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMSBpZD0naGVhZGVyLXRpdGxlJz5Sb3RvcldpbmQgR21iSDwvaDE+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICNoZWFkZXItdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXVkaW93aWRlJztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1gfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\components\\Header\\Header.js */",
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Navbar/Navbar.js":
/*!*************************************!*\
  !*** ./components/Navbar/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\components\\Navbar\\Navbar.js";




var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3710254439" + " " + "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3710254439",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    id: "wheel",
    className: "jsx-3710254439" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "clear")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    id: "title-wind",
    className: "jsx-3710254439",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "RotorWind GmbH"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    className: "jsx-3710254439",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "\"Uns bewegt nicht nur der Wind\""), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "echtzeit",
    className: "jsx-3710254439" + " " + "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3710254439" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "update"), " Echtzeitansicht")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/analyse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "analyse",
    className: "jsx-3710254439" + " " + "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3710254439" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "timeline"), " Analyseansicht")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/quellen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "quellen",
    className: "jsx-3710254439" + " " + "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3710254439" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "language"), " Quellen")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3710254439",
    css: ".navbar.jsx-3710254439{width:300px;background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url(\"/static/windmill.jpg\");background-position:center;justify-text:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1.jsx-3710254439{color:white;}em.jsx-3710254439{color:white;margin-bottom:50px;display:block;}#title-wind.jsx-3710254439{font-family:'Audiowide';font-size:40px;}.menu-item.jsx-3710254439{padding:10px;margin:2px;opacity:0,5;-webkit-transition:0.3s;transition:0.3s;display:block;width:150px;}.menu-item.jsx-3710254439:link{color:#b8b7ad;-webkit-text-decoration:none;text-decoration:none;}.menu-item.jsx-3710254439:visited{color:#b8b7ad;-webkit-text-decoration:none;text-decoration:none;}.menu-item.jsx-3710254439:hover{color:white;background:#00acc1;border-radius:5px;opacity:1;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}#wheel.jsx-3710254439{-webkit-animation:roll-jsx-3710254439 3s infinite;animation:roll-jsx-3710254439 3s infinite;-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg);font-size:120px;}@-webkit-keyframes roll-jsx-3710254439{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes roll-jsx-3710254439{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWF0dGhcXERvY3VtZW50c1xcV2ViIGRldmVsb3BlclxcUHJvamVjdHNcXGl1YmhfZGFzaGJvYXJkXFxjb21wb25lbnRzXFxOYXZiYXJcXE5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQm9CLEFBRzZCLEFBV0EsQUFJQSxBQU1ZLEFBS1gsQUFVQyxBQU1BLEFBTUYsQUFRZSxBQU9ILEFBSUssWUFsRTRELEFBVzdGLEFBSXVCLEFBaUNBLENBdEJSLENBVVUsQUFNQSxVQXJCTixBQU1GLE9BWEMsQUFpQ0ksS0FyQkYsR0FOcEIsTUFMQSxJQWlDYyxVQUNXLEtBZHpCLEFBTUEsUUFvQkksSUFsQ2MsV0FzQ2QsR0FyQ1ksRUEwQlksTUF2REcsSUE4Qi9CLHVCQTVCd0IsU0FpRHhCLFdBaERpQiwrQkFxREcsZ0JBQ3BCLDJCQXJEMEIsOEVBQ0gsNkZBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWF0dGhcXERvY3VtZW50c1xcV2ViIGRldmVsb3BlclxcUHJvamVjdHNcXGl1YmhfZGFzaGJvYXJkXFxjb21wb25lbnRzXFxOYXZiYXJcXE5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgTmF2YmFyID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgIDxoMSA+PGkgaWQ9J3doZWVsJyBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNsZWFyPC9pPjwvaDE+XG4gICAgICAgIDxoMSBpZD0ndGl0bGUtd2luZCc+Um90b3JXaW5kIEdtYkg8L2gxPlxuICAgICAgICA8ZW0+XCJVbnMgYmV3ZWd0IG5pY2h0IG51ciBkZXIgV2luZFwiPC9lbT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGlkPVwiZWNodHplaXRcIiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiA+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj51cGRhdGU8L2k+IEVjaHR6ZWl0YW5zaWNodDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2FuYWx5c2VcIj5cbiAgICAgICAgICAgIDxhIGlkPVwiYW5hbHlzZVwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiID48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnRpbWVsaW5lPC9pPiBBbmFseXNlYW5zaWNodDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3F1ZWxsZW5cIj5cbiAgICAgICAgICAgIDxhIGlkPVwicXVlbGxlblwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiID48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmxhbmd1YWdlPC9pPiBRdWVsbGVuPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5uYXZiYXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwgLjYpLCByZ2JhKDAsMCwwLC42KSksIHVybChcIi9zdGF0aWMvd2luZG1pbGwuanBnXCIpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgLyogYmFja2dyb3VuZDogIzM3M2E0NzsgKi9cbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXRleHQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZW0ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjdGl0bGUtd2luZCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUtaXRlbSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLCA1O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiB1bnZpc2l0ZWQgbGluayAqL1xuICAgICAgICAgICAgLm1lbnUtaXRlbTpsaW5rIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2I4YjdhZDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIHZpc2l0ZWQgbGluayAqL1xuICAgICAgICAgICAgLm1lbnUtaXRlbTp2aXNpdGVkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2I4YjdhZDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIG1vdXNlIG92ZXIgbGluayAqL1xuICAgICAgICAgICAgLm1lbnUtaXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGFjYzE7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjd2hlZWwge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcm9sbCAzcyBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGtleWZyYW1lcyByb2xsIHtcbiAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXX0= */\n/*@ sourceURL=C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\components\\Navbar\\Navbar.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/RealtimeView/RealtimeView.js":
/*!*************************************************!*\
  !*** ./components/RealtimeView/RealtimeView.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RealtimeViewMachine_RealtimeViewMachine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RealtimeViewMachine/RealtimeViewMachine */ "./components/RealtimeViewMachine/RealtimeViewMachine.js");
/* harmony import */ var _machines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./machines */ "./components/RealtimeView/machines.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\components\\RealtimeView\\RealtimeView.js";





var machines = _machines__WEBPACK_IMPORTED_MODULE_3__["machinesArray"].map(function (machine, index) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: machine[1] === 'Wartung' ? "/" : "/Machine.".concat(index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "machine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RealtimeViewMachine_RealtimeViewMachine__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Maschine ".concat(index + 1),
    type: machine[0],
    status: machine[1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }))));
});

var RealtimeView = function RealtimeView() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-34810793" + " " + "machine-view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, machines, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "34810793",
    css: ".machine-view.jsx-34810793{font-family:'Roboto';display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#eeeeee;margin-left:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWF0dGhcXERvY3VtZW50c1xcV2ViIGRldmVsb3BlclxcUHJvamVjdHNcXGl1YmhfZGFzaGJvYXJkXFxjb21wb25lbnRzXFxSZWFsdGltZVZpZXdcXFJlYWx0aW1lVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmtCLEFBR2dDLHFCQUNSLDBFQUNFLHlEQUNJLDZGQUNBLG1CQUNELGtCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXG1hdHRoXFxEb2N1bWVudHNcXFdlYiBkZXZlbG9wZXJcXFByb2plY3RzXFxpdWJoX2Rhc2hib2FyZFxcY29tcG9uZW50c1xcUmVhbHRpbWVWaWV3XFxSZWFsdGltZVZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhbHRpbWVWaWV3TWFjaGluZSBmcm9tICcuLi9SZWFsdGltZVZpZXdNYWNoaW5lL1JlYWx0aW1lVmlld01hY2hpbmUnO1xyXG5pbXBvcnQgeyBtYWNoaW5lc0FycmF5IH0gZnJvbSAnLi9tYWNoaW5lcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IG1hY2hpbmVzID0gbWFjaGluZXNBcnJheS5tYXAoKG1hY2hpbmUsIGluZGV4KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGluayBocmVmPXttYWNoaW5lWzFdID09PSAnV2FydHVuZycgPyBgL2AgOiBgL01hY2hpbmUuJHtpbmRleH1gfSA+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibWFjaGluZVwiPlxyXG4gICAgICAgICAgPFJlYWx0aW1lVmlld01hY2hpbmUgdGl0bGU9e2BNYXNjaGluZSAke2luZGV4ICsgMX1gfSB0eXBlPXttYWNoaW5lWzBdfSBzdGF0dXM9e21hY2hpbmVbMV19IC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuKSk7XHJcblxyXG5jb25zdCBSZWFsdGltZVZpZXcgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWNoaW5lLXZpZXdcIj5cclxuICAgICAge21hY2hpbmVzfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLm1hY2hpbmUtdmlldyB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMzAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhbHRpbWVWaWV3O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\components\\RealtimeView\\RealtimeView.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RealtimeView);

/***/ }),

/***/ "./components/RealtimeView/machines.js":
/*!*********************************************!*\
  !*** ./components/RealtimeView/machines.js ***!
  \*********************************************/
/*! exports provided: machinesArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "machinesArray", function() { return machinesArray; });
var machinesArray = [['CNC Fräse', 'OK'], ['CNC Drehbank', 'OK'], ['Bohrwerk', 'Wartung'], ['Extruder', 'Kritisch']];

/***/ }),

/***/ "./components/RealtimeViewMachine/RealtimeViewMachine.js":
/*!***************************************************************!*\
  !*** ./components/RealtimeViewMachine/RealtimeViewMachine.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\components\\RealtimeViewMachine\\RealtimeViewMachine.js";



var RealtimeViewMachine = function RealtimeViewMachine(props) {
  var status = props.status === 'OK' ? 'machine-ok' : props.status === 'Wartung' ? 'machine-na' : 'machine-critical';
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-169483557" + " " + "machine ".concat(status),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-169483557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-169483557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Typ: ", props.type), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-169483557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Status: ", props.status), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "169483557",
    css: ".machine.jsx-169483557{width:200px;height:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-transition:0.3s;transition:0.3s;margin:10px;color:black;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}.machine.jsx-169483557:link{-webkit-text-decoration:none;text-decoration:none;}.machine.jsx-169483557:visited{-webkit-text-decoration:none;text-decoration:none;}.machine.jsx-169483557:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}.title.jsx-169483557{font-size:30px;}.machine-ok.jsx-169483557{background:#70ad47;color:white;}.machine-na.jsx-169483557{background:rgb(213,213,213);}.machine-critical.jsx-169483557{color:white;background:#ed7d31;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWF0dGhcXERvY3VtZW50c1xcV2ViIGRldmVsb3BlclxcUHJvamVjdHNcXGl1YmhfZGFzaGJvYXJkXFxjb21wb25lbnRzXFxSZWFsdGltZVZpZXdNYWNoaW5lXFxSZWFsdGltZVZpZXdNYWNoaW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVTLEFBR3VCLEFBWVMsQUFLQSxBQUtDLEFBSVAsQUFJSSxBQUtXLEFBS2xCLFlBdkNDLEFBd0NNLEdBZHZCLElBSWdCLE1BN0JDLEdBbUNqQixHQUxBLEFBVUEsbUJBN0JBLEFBS0EsNEJBS0EscUJBcEIwQiw4RUFDTix3Q0FDSixZQUNBLFlBQ2dFLHFFQUNoRiIsImZpbGUiOiJDOlxcVXNlcnNcXG1hdHRoXFxEb2N1bWVudHNcXFdlYiBkZXZlbG9wZXJcXFByb2plY3RzXFxpdWJoX2Rhc2hib2FyZFxcY29tcG9uZW50c1xcUmVhbHRpbWVWaWV3TWFjaGluZVxcUmVhbHRpbWVWaWV3TWFjaGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBSZWFsdGltZVZpZXdNYWNoaW5lID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc3RhdHVzID1cclxuICAgIHByb3BzLnN0YXR1cyA9PT0gJ09LJ1xyXG4gICAgICA/ICdtYWNoaW5lLW9rJ1xyXG4gICAgICA6IHByb3BzLnN0YXR1cyA9PT0gJ1dhcnR1bmcnXHJcbiAgICAgICAgPyAnbWFjaGluZS1uYSdcclxuICAgICAgICA6ICdtYWNoaW5lLWNyaXRpY2FsJztcclxuICByZXR1cm4gKFxyXG4gICAgICA8YSBocmVmPScvJyBjbGFzc05hbWU9e2BtYWNoaW5lICR7c3RhdHVzfWB9PlxyXG4gICAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cclxuICAgICAgICA8cD5UeXA6IHtwcm9wcy50eXBlfTwvcD5cclxuICAgICAgICA8cD5TdGF0dXM6IHtwcm9wcy5zdGF0dXN9PC9wPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAubWFjaGluZSB7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogdW52aXNpdGVkIGxpbmsgKi9cclxuICAgICAgLm1hY2hpbmU6bGluayB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIHZpc2l0ZWQgbGluayAqL1xyXG4gICAgICAubWFjaGluZTp2aXNpdGVkIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogbW91c2Ugb3ZlciBsaW5rICovXHJcbiAgICAgIC5tYWNoaW5lOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5tYWNoaW5lLW9rIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM3MGFkNDc7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5tYWNoaW5lLW5hIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTMsIDIxMywgMjEzKTtcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5tYWNoaW5lLWNyaXRpY2FsIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZDdkMzE7XHJcbiAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvYT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFsdGltZVZpZXdNYWNoaW5lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\components\\RealtimeViewMachine\\RealtimeViewMachine.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RealtimeViewMachine);

/***/ }),

/***/ "./components/head/head.js":
/*!*********************************!*\
  !*** ./components/head/head.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\components\\head\\head.js";



var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var Head = function Head(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.title || ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Audiowide",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: props.title || '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
};

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./components/Navbar/Navbar.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_RealtimeView_RealtimeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RealtimeView/RealtimeView */ "./components/RealtimeView/RealtimeView.js");
/* harmony import */ var _components_head_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/head/head */ "./components/head/head.js");
var _jsxFileName = "C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\pages\\index.js";







var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3430293088" + " " + "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_head_head__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Echtzeit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3430293088" + " " + "main-view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_RealtimeView_RealtimeView__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3430293088",
    css: ".App{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;font-family:Roboto;}.navbar{min-width:300px;position:fixed;height:100%;}body{margin:0;}a:link{-webkit-text-decoration:none;text-decoration:none;}.main-view{width:100%;background:#eeeeee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWF0dGhcXERvY3VtZW50c1xcV2ViIGRldmVsb3BlclxcUHJvamVjdHNcXGl1YmhfZGFzaGJvYXJkXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3VCLEFBR3FCLEFBTUksQUFLUCxBQUlZLEFBR1YsU0FOYixFQU9xQixLQVpKLGNBYUYsQ0FaRCxZQUNkLE9BT0Esd0JBZm9CLGtCQUNDLFlBbUJHLE9BbEJ4Qix1RUFtQnFCLDZGQUNOLGFBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxtYXR0aFxcRG9jdW1lbnRzXFxXZWIgZGV2ZWxvcGVyXFxQcm9qZWN0c1xcaXViaF9kYXNoYm9hcmRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgUmVhbHRpbWVWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvUmVhbHRpbWVWaWV3L1JlYWx0aW1lVmlldyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZC9oZWFkJ1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICA8SGVhZCB0aXRsZT1cIkVjaHR6ZWl0XCIvPlxyXG4gICAgPE5hdmJhciBjbGFzc05hbWU9XCJuYXZiYXJcIi8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdmlld1wiPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxSZWFsdGltZVZpZXcgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2AgXHJcbiAgICAgIC5BcHAge1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYTpsaW5rIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLm1haW4tdmlldyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbikgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\pages\\index.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map