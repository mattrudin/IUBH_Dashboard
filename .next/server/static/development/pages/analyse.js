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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AnalysisView/AnalysisView.js":
/*!*************************************************!*\
  !*** ./components/AnalysisView/AnalysisView.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\components\\AnalysisView\\AnalysisView.js";



var AnalysisView = function AnalysisView() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-909894274" + " " + "analysis-view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-909894274" + " " + "view time-cost",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-909894274",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Wartung"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-909894274",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Zeit / Kosten"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/zeit_kosten.png",
    width: "600px",
    className: "jsx-909894274",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-909894274" + " " + "view time-temperature",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-909894274",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Wartung"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-909894274",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Zeit / Temperatur"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/zeit_temperatur.png",
    width: "600px",
    className: "jsx-909894274",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "909894274",
    css: ".analysis-view.jsx-909894274{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:'Roboto';background:#eeeeee;margin-left:300px;}.view.jsx-909894274{width:800px;height:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:0.3s;transition:0.3s;margin:10px;color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}.time-cost.jsx-909894274{background:#4472c4;}.time-temperature.jsx-909894274{background:#4472c4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWF0dGhcXERvY3VtZW50c1xcV2ViIGRldmVsb3BlclxcUHJvamVjdHNcXGl1YmhfZGFzaGJvYXJkXFxjb21wb25lbnRzXFxBbmFseXNpc1ZpZXdcXEFuYWx5c2lzVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjZ0IsQUFHd0IsQUFTRCxBQVlPLEFBSUEsWUFmTixPQVlmLEFBSUEsTUFmZSxpREFWUyx5QkFXQSxxREFWSCx5QkFXQSxvRUFWRSxxQkFDRixJQVVILGVBVEUsa0JBQ3BCLE9BU2MsWUFDQSxZQUNnRSxxRUFDOUUiLCJmaWxlIjoiQzpcXFVzZXJzXFxtYXR0aFxcRG9jdW1lbnRzXFxXZWIgZGV2ZWxvcGVyXFxQcm9qZWN0c1xcaXViaF9kYXNoYm9hcmRcXGNvbXBvbmVudHNcXEFuYWx5c2lzVmlld1xcQW5hbHlzaXNWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFuYWx5c2lzVmlldyA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImFuYWx5c2lzLXZpZXdcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldyB0aW1lLWNvc3RcIj5cclxuICAgICAgPGgxPldhcnR1bmc8L2gxPlxyXG4gICAgICA8cD5aZWl0IC8gS29zdGVuPC9wPlxyXG4gICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvemVpdF9rb3N0ZW4ucG5nXCIgd2lkdGg9XCI2MDBweFwiLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3IHRpbWUtdGVtcGVyYXR1cmVcIj5cclxuICAgICAgPGgxPldhcnR1bmc8L2gxPlxyXG4gICAgICA8cD5aZWl0IC8gVGVtcGVyYXR1cjwvcD5cclxuICAgICAgPGltZyBzcmM9XCIvc3RhdGljL3plaXRfdGVtcGVyYXR1ci5wbmdcIiB3aWR0aD1cIjYwMHB4XCIvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmFuYWx5c2lzLXZpZXcge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52aWV3IHtcclxuICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aW1lLWNvc3Qge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzQ0NzJjNDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aW1lLXRlbXBlcmF0dXJlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM0NDcyYzQ7XHJcbiAgICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5hbHlzaXNWaWV3O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\components\\AnalysisView\\AnalysisView.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AnalysisView);

/***/ }),

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

/***/ "./pages/analyse.js":
/*!**************************!*\
  !*** ./pages/analyse.js ***!
  \**************************/
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
/* harmony import */ var _components_AnalysisView_AnalysisView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AnalysisView/AnalysisView */ "./components/AnalysisView/AnalysisView.js");
/* harmony import */ var _components_head_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/head/head */ "./components/head/head.js");
var _jsxFileName = "C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\pages\\analyse.js";







var Analyse = function Analyse() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1450946467" + " " + "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_head_head__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Analyse",
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
    className: "jsx-1450946467" + " " + "main-view",
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
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AnalysisView_AnalysisView__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1450946467",
    css: ".App{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;font-family:Roboto;}.navbar{min-width:300px;position:fixed;height:100%;}.main-view{width:100%;background:#eeeeee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWF0dGhcXERvY3VtZW50c1xcV2ViIGRldmVsb3BlclxcUHJvamVjdHNcXGl1YmhfZGFzaGJvYXJkXFxwYWdlc1xcYW5hbHlzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjeUIsQUFHdUIsQUFNSSxBQU1ILEFBT0osU0FDWCxFQVB1QixLQU5OLGNBT0EsQ0FOSCxZQUNkLCtCQVJvQixrQkFDQyxZQWFLLE9BWjFCLHVFQWF1Qiw2RkFDdkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxtYXR0aFxcRG9jdW1lbnRzXFxXZWIgZGV2ZWxvcGVyXFxQcm9qZWN0c1xcaXViaF9kYXNoYm9hcmRcXHBhZ2VzXFxhbmFseXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBBbmFseXNpc1ZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9BbmFseXNpc1ZpZXcvQW5hbHlzaXNWaWV3JztcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZC9oZWFkJ1xuXG5jb25zdCBBbmFseXNlID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8SGVhZCB0aXRsZT1cIkFuYWx5c2VcIi8+XG4gICAgICA8TmF2YmFyIGNsYXNzTmFtZT1cIm5hdmJhclwiLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi12aWV3XCI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPEFuYWx5c2lzVmlldyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YCBcbiAgICAgICAgLkFwcCB7XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmJhciB7XG4gICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4tdmlldyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pIFxuXG5leHBvcnQgZGVmYXVsdCBBbmFseXNlO1xuIl19 */\n/*@ sourceURL=C:\\Users\\matth\\Documents\\Web developer\\Projects\\iubh_dashboard\\pages\\analyse.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Analyse);

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/analyse.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/analyse.js */"./pages/analyse.js");


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
//# sourceMappingURL=analyse.js.map