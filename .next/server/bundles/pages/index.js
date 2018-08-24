module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Exchange.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_dataSource__ = __webpack_require__("./data/dataSource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_dataSource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__data_dataSource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_strings__ = __webpack_require__("./constants/strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_strings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constants_strings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_notificationUtils__ = __webpack_require__("./utils/notificationUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_notificationUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils_notificationUtils__);
var _jsxFileName = "E:\\iceBreaker\\components\\Exchange.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "handleBirthdayChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        console.log(e.target.value);

        _this.setState({
          birthday: e.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleFavouriteFoodChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        console.log(e.target.value);

        _this.setState({
          favouriteFood: e.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleLetterToExchangeChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        console.log(e.target.value);

        _this.setState({
          letterToExchange: e.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleDeshuChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        console.log(e.target.value);

        _this.setState({
          deshu: e.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "updateExchangeData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(exchangeData) {
        console.log("Updating exchange data");

        _this.setState({
          birthday: exchangeData.birthday,
          favouriteFood: exchangeData.favouriteFood,
          deshu: exchangeData.deshu
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "retrieveFromCacheByUserName", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(counterParty) {
        var cachedObject = JSON.parse(localStorage.getItem(counterParty));

        if (cachedObject !== null) {
          console.log("Found cached data for " + counterParty + ": " + JSON.stringify(cachedObject));

          _this.updateExchangeData(cachedObject);
        } else console.log("No cache found for " + counterParty);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "checkIfFieldsAreComplete", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(userSelected, birthday, favouriteFood, deshu, letterToExchange) {
        if (!userSelected || !birthday || !favouriteFood || !deshu || !letterToExchange) {
          __WEBPACK_IMPORTED_MODULE_4__utils_notificationUtils___default.a.showNotification(__WEBPACK_IMPORTED_MODULE_3__constants_strings___default.a.NOTIFICATION_INCOMPLETE_DETAILS);
          return false;
        }

        return true;
      }
    });
    _this.state = {
      birthday: '',
      favouriteFood: 'default',
      deshu: "default",
      letterToExchange: ''
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      console.log("Received new props " + JSON.stringify(props));
      console.log("Trying to retrieve from cache");
      this.retrieveFromCache(props);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log("Component will mount");
      this.retrieveFromCache(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      console.log("State is " + JSON.stringify(this.state));
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-2910031397"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: "jsx-2910031397" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-2910031397"
      }, "Name")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-2910031397" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-2910031397"
      }, this.props.targetUser)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-2910031397" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-2910031397"
      }, "Deshu"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
        value: this.state.deshu,
        onChange: this.handleDeshuChange,
        name: "deshu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-2910031397" + " " + "form-control"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        disabled: true,
        value: "default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: "jsx-2910031397"
      }, "Select his/her deshu."), __WEBPACK_IMPORTED_MODULE_2__data_dataSource___default.a.DESHU_OPTIONS.map(function (deshu) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          value: deshu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          className: "jsx-2910031397"
        }, deshu);
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-2910031397" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: "jsx-2910031397"
      }, "Birthday"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "date",
        name: "birthday",
        value: this.state.birthday,
        onChange: this.handleBirthdayChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-2910031397" + " " + "form-control"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: "jsx-2910031397" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-2910031397"
      }, "Favourite Food"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
        value: this.state.favouriteFood,
        name: "favouriteFood",
        onChange: this.handleFavouriteFoodChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        className: "jsx-2910031397" + " " + "form-control"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        disabled: true,
        value: "default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: "jsx-2910031397"
      }, "Select his/her favourite food"), __WEBPACK_IMPORTED_MODULE_2__data_dataSource___default.a.FOOD_OPTIONS.map(function (foodOption) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          value: foodOption,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          className: "jsx-2910031397"
        }, foodOption);
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        className: "jsx-2910031397" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        className: "jsx-2910031397"
      }, "Letter To Exchange Away"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
        name: "letterToExchange",
        onChange: this.handleLetterToExchangeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-2910031397" + " " + "form-control"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        className: "jsx-2910031397"
      }, "Select a letter to exchange away"), this.props.lettersAvailable.map(function (letter) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          value: letter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          className: "jsx-2910031397"
        }, /\S/.test(letter) ? letter : "Space");
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "submit-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        className: "jsx-2910031397"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.submitForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        className: "jsx-2910031397" + " " + "btn btn-primary"
      }, "Submit")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2910031397",
        css: "#submit-button.jsx-2910031397{margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEV4Y2hhbmdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStINEIsQUFHNEMsbUJBQ3ZCIiwiZmlsZSI6ImNvbXBvbmVudHNcXEV4Y2hhbmdlLmpzIiwic291cmNlUm9vdCI6IkU6XFxpY2VCcmVha2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS9kYXRhU291cmNlXCI7XHJcbmltcG9ydCBzdHJpbmdzIGZyb20gJy4uL2NvbnN0YW50cy9zdHJpbmdzJ1xyXG5pbXBvcnQgbm90aWZpY2F0aW9uVXRpbHMgZnJvbSBcIi4uL3V0aWxzL25vdGlmaWNhdGlvblV0aWxzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGJpcnRoZGF5OiAnJyxcclxuICAgICAgICAgICAgZmF2b3VyaXRlRm9vZDogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICBkZXNodTogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgIGxldHRlclRvRXhjaGFuZ2U6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgbmV3IHByb3BzIFwiK0pTT04uc3RyaW5naWZ5KHByb3BzKSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRyeWluZyB0byByZXRyaWV2ZSBmcm9tIGNhY2hlXCIpXHJcbiAgICAgICAgdGhpcy5yZXRyaWV2ZUZyb21DYWNoZShwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXBvbmVudCB3aWxsIG1vdW50XCIpXHJcbiAgICAgICAgdGhpcy5yZXRyaWV2ZUZyb21DYWNoZSh0aGlzLnByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJpcnRoZGF5Q2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYmlydGhkYXk6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVGYXZvdXJpdGVGb29kQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZmF2b3VyaXRlRm9vZDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxldHRlclRvRXhjaGFuZ2VDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsZXR0ZXJUb0V4Y2hhbmdlOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRGVzaHVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkZXNodTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUV4Y2hhbmdlRGF0YSA9IChleGNoYW5nZURhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIGV4Y2hhbmdlIGRhdGFcIilcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYmlydGhkYXk6IGV4Y2hhbmdlRGF0YS5iaXJ0aGRheSxcclxuICAgICAgICAgICAgZmF2b3VyaXRlRm9vZDogZXhjaGFuZ2VEYXRhLmZhdm91cml0ZUZvb2QsXHJcbiAgICAgICAgICAgIGRlc2h1OiBleGNoYW5nZURhdGEuZGVzaHUsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZUZyb21DYWNoZUJ5VXNlck5hbWUgPSAoY291bnRlclBhcnR5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVkT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb3VudGVyUGFydHkpKVxyXG4gICAgICAgIGlmKGNhY2hlZE9iamVjdCAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRm91bmQgY2FjaGVkIGRhdGEgZm9yIFwiK2NvdW50ZXJQYXJ0eStcIjogXCIrSlNPTi5zdHJpbmdpZnkoY2FjaGVkT2JqZWN0KSlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFeGNoYW5nZURhdGEoY2FjaGVkT2JqZWN0KVxyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gY2FjaGUgZm91bmQgZm9yIFwiK2NvdW50ZXJQYXJ0eSlcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lmRmllbGRzQXJlQ29tcGxldGUgPSAodXNlclNlbGVjdGVkLGJpcnRoZGF5LGZhdm91cml0ZUZvb2QsZGVzaHUsbGV0dGVyVG9FeGNoYW5nZSkgPT4ge1xyXG4gICAgICAgIGlmKCAhdXNlclNlbGVjdGVkIHx8ICFiaXJ0aGRheSB8fCAhZmF2b3VyaXRlRm9vZCB8fCAhZGVzaHUgfHwgIWxldHRlclRvRXhjaGFuZ2Upe1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb25VdGlscy5zaG93Tm90aWZpY2F0aW9uKHN0cmluZ3MuTk9USUZJQ0FUSU9OX0lOQ09NUExFVEVfREVUQUlMUylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXRlIGlzIFwiK0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt0aGlzLnByb3BzLnRhcmdldFVzZXJ9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRlc2h1PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLmRlc2h1fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZXNodUNoYW5nZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImRlc2h1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgdmFsdWU9XCJkZWZhdWx0XCI+U2VsZWN0IGhpcy9oZXIgZGVzaHUuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLkRFU0hVX09QVElPTlMubWFwKGRlc2h1ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtkZXNodX0+e2Rlc2h1fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkJpcnRoZGF5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiYmlydGhkYXlcIiB2YWx1ZT17dGhpcy5zdGF0ZS5iaXJ0aGRheX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQmlydGhkYXlDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZhdm91cml0ZSBGb29kPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLmZhdm91cml0ZUZvb2R9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJmYXZvdXJpdGVGb29kXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmF2b3VyaXRlRm9vZENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgdmFsdWU9XCJkZWZhdWx0XCI+U2VsZWN0IGhpcy9oZXIgZmF2b3VyaXRlIGZvb2Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuRk9PRF9PUFRJT05TLm1hcChmb29kT3B0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtmb29kT3B0aW9ufT57Zm9vZE9wdGlvbn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MZXR0ZXIgVG8gRXhjaGFuZ2UgQXdheTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibGV0dGVyVG9FeGNoYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVMZXR0ZXJUb0V4Y2hhbmdlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZCBzZWxlY3RlZCB2YWx1ZT5TZWxlY3QgYSBsZXR0ZXIgdG8gZXhjaGFuZ2UgYXdheTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sZXR0ZXJzQXZhaWxhYmxlLm1hcChsZXR0ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e2xldHRlcn0+ey9cXFMvLnRlc3QobGV0dGVyKT9sZXR0ZXI6XCJTcGFjZVwifTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0nc3VibWl0LWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdEZvcm19IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgI3N1Ym1pdC1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxufVxyXG4iXX0= */\n/*@ sourceURL=components\\Exchange.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/ExchangeRequest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Exchange__ = __webpack_require__("./components/Exchange.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_gameUtils__ = __webpack_require__("./utils/gameUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_gameUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_gameUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ExchangeEntity__ = __webpack_require__("./models/ExchangeEntity.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_notificationUtils__ = __webpack_require__("./utils/notificationUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_notificationUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils_notificationUtils__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var _default =
/*#__PURE__*/
function (_Exchange) {
  _inherits(_default, _Exchange);

  function _default() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "submitForm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var request_user = _this.props.userName;
        var respond_user = _this.props.userSelected;
        var birthday = _this.state.birthday;
        var favouriteFood = _this.state.favouriteFood;
        var deshu = _this.state.deshu;
        var letterToExchange = _this.state.letterToExchange;
        var letterToReceive = '';

        if (_this.checkIfFieldsAreComplete(respond_user, birthday, favouriteFood, deshu, letterToExchange)) {
          var exchangeRequest = new __WEBPACK_IMPORTED_MODULE_3__models_ExchangeEntity__["a" /* default */](request_user, respond_user, birthday, favouriteFood, deshu, letterToExchange, letterToReceive);
          console.log("ExchangeRequest: " + JSON.stringify(exchangeRequest));
          __WEBPACK_IMPORTED_MODULE_2__utils_gameUtils___default.a.sendExchangeRequest(exchangeRequest).then(function (succeed) {
            _this.props.onExchangeRequestSubmitSuccess(_this.state.letterToExchange, exchangeRequest);

            _this.props.updateExchangeRequest(exchangeRequest);
          }, function (errMessage) {
            __WEBPACK_IMPORTED_MODULE_4__utils_notificationUtils___default.a.showNotification(errMessage);
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "retrieveFromCache", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(props) {
        _this.retrieveFromCacheByUserName(props.userSelected);
      }
    }), _temp));
  }

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1__Exchange__["a" /* default */]);



/***/ }),

/***/ "./components/ExchangeResponse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Exchange__ = __webpack_require__("./components/Exchange.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_gameUtils__ = __webpack_require__("./utils/gameUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_gameUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_gameUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ExchangeEntity__ = __webpack_require__("./models/ExchangeEntity.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_notificationUtils__ = __webpack_require__("./utils/notificationUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_notificationUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils_notificationUtils__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var _default =
/*#__PURE__*/
function (_Exchange) {
  _inherits(_default, _Exchange);

  function _default() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "submitForm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var request_user = _this.props.exchangeRequest.request_user;
        var respond_user = _this.props.exchangeRequest.respond_user;
        var birthday = _this.state.birthday;
        var favouriteFood = _this.state.favouriteFood;
        var deshu = _this.state.deshu;
        var letterToExchange = _this.state.letterToExchange;
        var letterToReceive = _this.props.exchangeRequest.letterToExchange;

        if (_this.checkIfFieldsAreComplete(respond_user, birthday, favouriteFood, deshu, letterToExchange)) {
          var exchangeResponse = new __WEBPACK_IMPORTED_MODULE_3__models_ExchangeEntity__["a" /* default */](request_user, respond_user, birthday, favouriteFood, deshu, letterToExchange, letterToReceive);
          console.log("ExchangeResponse: " + JSON.stringify(exchangeResponse));
          __WEBPACK_IMPORTED_MODULE_2__utils_gameUtils___default.a.sendExchangeResponse(exchangeResponse).then(function (exchResponse) {
            _this.props.onExchangeResponseSubmitSuccess(exchResponse);
          }, function (errMessage) {
            __WEBPACK_IMPORTED_MODULE_4__utils_notificationUtils___default.a.showNotification(errMessage);
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "retrieveFromCache", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(props) {
        _this.retrieveFromCacheByUserName(props.exchangeRequest.request_user);
      }
    }), _temp));
  }

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1__Exchange__["a" /* default */]);



/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_notify_toast__ = __webpack_require__("react-notify-toast");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_notify_toast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_notify_toast__);
var _jsxFileName = "E:\\iceBreaker\\components\\Layout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width,height=device-height",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
        integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://unpkg.com/react-tabs@2/style/react-tabs.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_notify_toast___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), this.props.children));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/LettersComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_gameUtils__ = __webpack_require__("./utils/gameUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_gameUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_gameUtils__);
var _jsxFileName = "E:\\iceBreaker\\components\\LettersComponent.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var LetterComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LetterComponent, _React$Component);

  function LetterComponent(props) {
    var _this;

    _classCallCheck(this, LetterComponent);

    _this = _possibleConstructorReturn(this, (LetterComponent.__proto__ || Object.getPrototypeOf(LetterComponent)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleLetterSelected", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        console.log("Target value is" + e.target.value + ".");
        var lettersUsed = _this.state.lettersUsed;
        var lettersAvailable = _this.state.lettersAvailable;
        lettersUsed[lettersUsed.indexOf('-')] = _this.state.lettersAvailable[e.target.value];
        console.log("Letters used are now " + lettersUsed.join(' '));
        lettersAvailable.splice(e.target.value, 1);

        _this.setState({
          lettersUsed: lettersUsed,
          lettersAvailable: lettersAvailable
        });

        _this.handleLettersChanged();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "removeOneCharFromLettersUsed", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var lettersUsed = _this.state.lettersUsed;
        var index = lettersUsed.indexOf('-');

        if (index != 0) {
          var lettersUsed = _this.state.lettersUsed;
          var lettersAvailable = _this.state.lettersAvailable;
          var indexToBeRemoved = 0;
          if (index != -1) indexToBeRemoved = index - 1;else indexToBeRemoved = lettersUsed.length - 1;
          var letterRemoved = lettersUsed[indexToBeRemoved];
          lettersUsed[indexToBeRemoved] = '-';
          lettersAvailable.push(letterRemoved);

          _this.setState({
            lettersUsed: lettersUsed,
            lettersAvailable: lettersAvailable
          });

          _this.handleLettersChanged();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleLettersChanged", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.lettersUsed.join('') === _this.props.userName && typeof window !== 'undefined') __WEBPACK_IMPORTED_MODULE_2__utils_gameUtils___default.a.completeGame().then(function () {
          localStorage.clear();
          window.alert("You have completed the game!");
          window.location.href = '/';
        }, function (err) {});
      }
    });
    _this.state = {
      lettersUsed: [],
      lettersAvailable: props.lettersAssigned.slice()
    };
    return _this;
  }

  _createClass(LetterComponent, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      console.log("Letter component will receive props");
      this.setState({
        lettersUsed: Array.apply(null, {
          length: newProps.lettersAssigned.length
        }).map(function () {
          return '-';
        }),
        lettersAvailable: newProps.lettersAssigned.slice()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-942445572"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "instructions2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        className: "jsx-942445572" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        className: "jsx-942445572"
      }, "To complete the game, click on the blue boxes below to form your username: ", this.props.userName)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "instructions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: "jsx-942445572" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-942445572"
      }, "To get the letters you need, click a player on the left to begin exchanging letters with him/her.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-942445572"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: "jsx-942445572"
      }, this.state.lettersUsed.join(' ')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "cancel-btn",
        onClick: this.removeOneCharFromLettersUsed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-942445572" + " " + "btn btn-light"
      }, "Backspace")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "letters-available",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: "jsx-942445572"
      }, this.state.lettersAvailable.map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          id: "letter-available",
          value: index,
          onClick: _this2.handleLetterSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          className: "jsx-942445572" + " " + "btn btn-primary"
        }, /\S/.test(letter) ? letter : "Space");
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "942445572",
        css: "#cancel-btn.jsx-942445572{margin-left:0px;margin-bottom:20px;}#letters-available.jsx-942445572{margin-bottom:20px;}#letter-available.jsx-942445572{margin:5px;}#instructions.jsx-942445572{margin-bottom:15px;}#instructions2.jsx-942445572{margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExldHRlcnNDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0Y0QixBQUcrQyxBQUlHLEFBR1IsQUFHUSxBQUdBLFdBTHJCLEtBUHFCLEdBSXJCLEFBTVIsQUFHQSxnQkFaUSIsImZpbGUiOiJjb21wb25lbnRzXFxMZXR0ZXJzQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkU6XFxpY2VCcmVha2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZ2FtZVV0aWxzIGZyb20gXCIuLi91dGlscy9nYW1lVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldHRlckNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxldHRlcnNVc2VkOiBbXSxcclxuICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZTogcHJvcHMubGV0dGVyc0Fzc2lnbmVkLnNsaWNlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMZXR0ZXIgY29tcG9uZW50IHdpbGwgcmVjZWl2ZSBwcm9wc1wiKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsZXR0ZXJzVXNlZDogQXJyYXkuYXBwbHkobnVsbCx7bGVuZ3RoOiBuZXdQcm9wcy5sZXR0ZXJzQXNzaWduZWQubGVuZ3RofSkubWFwKGZ1bmN0aW9uKCkgeyByZXR1cm4gJy0nOyB9KSxcclxuICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZTogbmV3UHJvcHMubGV0dGVyc0Fzc2lnbmVkLnNsaWNlKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxldHRlclNlbGVjdGVkID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRhcmdldCB2YWx1ZSBpc1wiK2UudGFyZ2V0LnZhbHVlK1wiLlwiKVxyXG4gICAgICAgIHZhciBsZXR0ZXJzVXNlZCA9IHRoaXMuc3RhdGUubGV0dGVyc1VzZWRcclxuICAgICAgICB2YXIgbGV0dGVyc0F2YWlsYWJsZSA9IHRoaXMuc3RhdGUubGV0dGVyc0F2YWlsYWJsZVxyXG4gICAgICAgIGxldHRlcnNVc2VkW2xldHRlcnNVc2VkLmluZGV4T2YoJy0nKV0gPSB0aGlzLnN0YXRlLmxldHRlcnNBdmFpbGFibGVbZS50YXJnZXQudmFsdWVdXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMZXR0ZXJzIHVzZWQgYXJlIG5vdyBcIitsZXR0ZXJzVXNlZC5qb2luKCcgJykpXHJcbiAgICAgICAgbGV0dGVyc0F2YWlsYWJsZS5zcGxpY2UoZS50YXJnZXQudmFsdWUsIDEpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxldHRlcnNVc2VkOiBsZXR0ZXJzVXNlZCxcclxuICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZTogbGV0dGVyc0F2YWlsYWJsZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5oYW5kbGVMZXR0ZXJzQ2hhbmdlZCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlT25lQ2hhckZyb21MZXR0ZXJzVXNlZCA9IChlKSA9PiB7XHJcbiAgICAgICAgdmFyIGxldHRlcnNVc2VkID0gdGhpcy5zdGF0ZS5sZXR0ZXJzVXNlZFxyXG4gICAgICAgIHZhciBpbmRleCA9IGxldHRlcnNVc2VkLmluZGV4T2YoJy0nKVxyXG4gICAgICAgIGlmIChpbmRleCAhPSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXJzVXNlZCA9IHRoaXMuc3RhdGUubGV0dGVyc1VzZWRcclxuICAgICAgICAgICAgdmFyIGxldHRlcnNBdmFpbGFibGUgPSB0aGlzLnN0YXRlLmxldHRlcnNBdmFpbGFibGVcclxuICAgICAgICAgICAgdmFyIGluZGV4VG9CZVJlbW92ZWQgPSAwXHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPSAtMSlcclxuICAgICAgICAgICAgICAgIGluZGV4VG9CZVJlbW92ZWQgPSBpbmRleCAtIDFcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaW5kZXhUb0JlUmVtb3ZlZCA9IGxldHRlcnNVc2VkLmxlbmd0aC0xXHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXJSZW1vdmVkID0gbGV0dGVyc1VzZWRbaW5kZXhUb0JlUmVtb3ZlZF1cclxuICAgICAgICAgICAgbGV0dGVyc1VzZWRbaW5kZXhUb0JlUmVtb3ZlZF0gPSAnLSdcclxuICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZS5wdXNoKGxldHRlclJlbW92ZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyc1VzZWQ6IGxldHRlcnNVc2VkLFxyXG4gICAgICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZTogbGV0dGVyc0F2YWlsYWJsZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUxldHRlcnNDaGFuZ2VkKClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxldHRlcnNDaGFuZ2VkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubGV0dGVyc1VzZWQuam9pbignJykgPT09IHRoaXMucHJvcHMudXNlck5hbWUgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIGdhbWVVdGlscy5jb21wbGV0ZUdhbWUoKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiWW91IGhhdmUgY29tcGxldGVkIHRoZSBnYW1lIVwiKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9Jy8nXHJcbiAgICAgICAgICAgIH0sZnVuY3Rpb24oZXJyKXt9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW5zdHJ1Y3Rpb25zMlwiIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VG8gY29tcGxldGUgdGhlIGdhbWUsIGNsaWNrIG9uIHRoZSBibHVlIGJveGVzIGJlbG93IHRvIGZvcm0geW91ciB1c2VybmFtZToge3RoaXMucHJvcHMudXNlck5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImluc3RydWN0aW9uc1wiIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VG8gZ2V0IHRoZSBsZXR0ZXJzIHlvdSBuZWVkLCBjbGljayBhIHBsYXllciBvbiB0aGUgbGVmdCB0byBiZWdpbiBleGNoYW5naW5nIGxldHRlcnMgd2l0aCBoaW0vaGVyLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHByZT57dGhpcy5zdGF0ZS5sZXR0ZXJzVXNlZC5qb2luKCcgJyl9PC9wcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbC1idG5cIiBvbkNsaWNrPXt0aGlzLnJlbW92ZU9uZUNoYXJGcm9tTGV0dGVyc1VzZWR9IGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIj5CYWNrc3BhY2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxldHRlcnMtYXZhaWxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGV0dGVyc0F2YWlsYWJsZS5tYXAoKGxldHRlcixpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBpZD1cImxldHRlci1hdmFpbGFibGVcIiB2YWx1ZT17aW5kZXh9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGV0dGVyU2VsZWN0ZWR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPnsvXFxTLy50ZXN0KGxldHRlcik/bGV0dGVyOlwiU3BhY2VcIn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICNjYW5jZWwtYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAjbGV0dGVycy1hdmFpbGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNsZXR0ZXItYXZhaWxhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI2luc3RydWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNpbnN0cnVjdGlvbnMyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=components\\LettersComponent.js */"
      }));
    }
  }]);

  return LetterComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/LoadingScreen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "E:\\iceBreaker\\components\\LoadingScreen.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, "Please wait for the game master to start the game."));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/SignIn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dataSource__ = __webpack_require__("./data/dataSource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dataSource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_dataSource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "E:\\iceBreaker\\components\\SignIn.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "handleNameChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          name: e.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleBirthdayChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          birthday: e.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleFavouriteFoodChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        console.log(e.target);

        _this.setState({
          favouriteFood: e.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleDeshuChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        console.log(e.target);

        _this.setState({
          deshu: e.target.value
        });
      }
    });
    _this.state = {
      name: "",
      birthday: "",
      favouriteFood: "",
      deshu: ""
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Fill in your details below to join the game.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Name"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        onChange: this.handleNameChange,
        id: "name",
        "class": "form-control",
        name: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Deshu"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
        onChange: this.handleDeshuChange,
        className: "form-control",
        name: "deshu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Select your deshu."), __WEBPACK_IMPORTED_MODULE_0__data_dataSource___default.a.DESHU_OPTIONS.map(function (deshu) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          value: deshu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, deshu);
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Birthday"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "date",
        onChange: this.handleBirthdayChange,
        "class": "form-control",
        name: "birthday",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Favourite Food"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
        onChange: this.handleFavouriteFoodChange,
        "class": "form-control",
        name: "favouriteFood",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Select your favourite food"), __WEBPACK_IMPORTED_MODULE_0__data_dataSource___default.a.FOOD_OPTIONS.map(function (foodOption) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
          value: foodOption,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, foodOption);
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.props.onSignIn(_this2.state.name, _this2.state.birthday, _this2.state.favouriteFood, _this2.state.deshu);
        },
        type: "submit",
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Submit"));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/WaitingForVerification.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "E:\\iceBreaker\\components\\WaitingForVerification.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          textAlign: 'center',
          marginBottom: '30px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        style: {
          marginBottom: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, "You have entered the correct details! Waiting for other party to verify"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.props.cancel,
        className: "btn btn-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, "Cancel"));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./constants/config.js":
/***/ (function(module, exports) {

var DB_HOST = 'localhost';
var DB_PORT = 27017;
var DB_NAME = 'iceBreaker';
var PROTOCOL = 'http';
var HOST = 'localhost';
var HOST_IP = '127.0.0.1';
var PORT = 3000;
var FULL_URI = PROTOCOL + '://' + HOST + ':' + PORT;
var COOKIE_DURATION = 30 * 60 * 1000;
var SESSION_SECRET = 'jakbgakegb545';
var NOTIFICATION_TYPE = 'custom';
var NOTIFICATION_TIMEOUT = 5000;
var NOTIFICATION_BACKGROUND_COLOR = '#0E1717';
var NOTIFICATION_TEXT_COLOR = '#FFFFFF';
module.exports = {
  DB_NAME: DB_NAME,
  DB_PORT: DB_PORT,
  DB_HOST: DB_HOST,
  FULL_URI: FULL_URI,
  HOST_IP: HOST_IP,
  HOST: HOST,
  PORT: PORT,
  COOKIE_DURATION: COOKIE_DURATION,
  SESSION_SECRET: SESSION_SECRET,
  NOTIFICATION_TYPE: NOTIFICATION_TYPE,
  NOTIFICATION_TIMEOUT: NOTIFICATION_TIMEOUT,
  NOTIFICATION_BACKGROUND_COLOR: NOTIFICATION_BACKGROUND_COLOR,
  NOTIFICATION_TEXT_COLOR: NOTIFICATION_TEXT_COLOR
};

/***/ }),

/***/ "./constants/credentials.js":
/***/ (function(module, exports) {

var PUSHER_APP_ID = '575034';
var PUSHER_APP_KEY = '30d8dabc87d7db943336';
var PUSHER_APP_SECRET = 'ed7e51b094c6d48e5475';
var PUSHER_APP_CLUSTER = 'ap1';
module.exports = {
  PUSHER_APP_ID: PUSHER_APP_ID,
  PUSHER_APP_KEY: PUSHER_APP_KEY,
  PUSHER_APP_SECRET: PUSHER_APP_SECRET,
  PUSHER_APP_CLUSTER: PUSHER_APP_CLUSTER
};

/***/ }),

/***/ "./constants/endpoints.js":
/***/ (function(module, exports) {

var API_LOGIN_USER = '/loginUser';
var API_GET_ALL_ACTIVE_USERS = '/getActiveUsers';
var API_GET_SESSION = '/getSession';
var API_GET_ASSIGNED_LETTERS = '/getAssignedLetters';
var API_SUBMIT_EXCHANGE_REQUEST = '/submitExchangeRequest';
var API_SUBMIT_EXCHANGE_RESPONSE = '/submitExchangeResponse';
var API_EXCHANGE_COMPLETED = '/exchangeCompleted';
var API_START_GAME = '/startGame';
var API_USER_COMPLETED_GAME = '/userCompletedGame';
var API_CHECK_AUTHENTICATED = '/checkAuthenticated';
var API_CHECK_GAME_STARTED = '/checkGameStarted';
var API_STOP_GAME = '/stopGame';
var API_CANCEL_EXCHANGE = '/cancelExchange';
var API_GET_COMPLETED_USERS = '/getCompletedUsers';
module.exports = {
  API_LOGIN_USER: API_LOGIN_USER,
  API_GET_ALL_ACTIVE_USERS: API_GET_ALL_ACTIVE_USERS,
  API_GET_SESSION: API_GET_SESSION,
  API_GET_ASSIGNED_LETTERS: API_GET_ASSIGNED_LETTERS,
  API_SUBMIT_EXCHANGE_REQUEST: API_SUBMIT_EXCHANGE_REQUEST,
  API_EXCHANGE_COMPLETED: API_EXCHANGE_COMPLETED,
  API_SUBMIT_EXCHANGE_RESPONSE: API_SUBMIT_EXCHANGE_RESPONSE,
  API_START_GAME: API_START_GAME,
  API_USER_COMPLETED_GAME: API_USER_COMPLETED_GAME,
  API_CHECK_AUTHENTICATED: API_CHECK_AUTHENTICATED,
  API_CHECK_GAME_STARTED: API_CHECK_GAME_STARTED,
  API_STOP_GAME: API_STOP_GAME,
  API_CANCEL_EXCHANGE: API_CANCEL_EXCHANGE,
  API_GET_COMPLETED_USERS: API_GET_COMPLETED_USERS
};

/***/ }),

/***/ "./constants/strings.js":
/***/ (function(module, exports) {

var PUSHER_CHANNEL = 'iceBreaker';
var PUSHER_USER_LIST_UPDATE_EVENT = 'update-user-list';
var PUSHER_GAME_START_EVENT = 'game-start';
var PUSHER_NEW_EXCHANGE_REQUEST_EVENT = 'new-exchange-request';
var PUSHER_NEW_EXCHANGE_RESPONSE_EVENT = 'new-exchange-response';
var EXCHANGE_COMPLETED_EVENT = 'exchange-completed';
var PUSHER_GAME_STOP_EVENT = 'game-stop';
var PUSHER_EXCHANGE_CANCELLED_EVENT = 'cancel-exchange';
var PUSHER_GAME_COMPLETED_EVENT = 'game-completed';
var NOTIFICATION_GAME_BEGUN = 'Game has begun!';
var NOTIFICATION_WRONG_DETAILS = 'You have entered the wrong details! Please try again!';
var NOTIFICATION_EXCHANGE_SUCCESSFUL = 'Exchange of letters successful!';
var NOTIFICATION_DUPLICATE_NAME = 'Name has already been taken! Please choose another one!';
var NOTIFICATION_INCOMPLETE_DETAILS = 'Please fill in all details!';
var NOTIFICATION_SAME_NAME_SELECTED = 'You are not allowed to exchange with yourself!';
var NOTIFICATION_GAME_ALREADY_IN_PROGRESS = 'Game already in progress! Please wait to join the next session!';
var NOTIFICATION_CANCEL_EXCHANGE = 'Exchange has been cancelled by the other party!';
var NOTIFICATION_GAME_STARTED_SUCCESSFUL = 'Game has been started successfully!';
var NOTIFICATION_GAME_STARTED_FAILED = 'Failed to start Game!';
var NOTIFICATION_GAME_STOP_SUCCESSFUL = 'Game has been stopped successfully!';
var NOTIFICATION_GAME_STOP_FAILED = 'Failed to stop Game!';
var NOTIFICATION_WRONG_PASSWORD = 'You have entered the wrong password!';
var NOTIFICATION_GAME_ALREADY_STARTED = 'Game already in progress!';
var NOTIFICATION_GAME_ALREADY_STOPPED = 'Game already stopped!';
var GAME_STATUS_INACTIVE = 'INACTIVE';
var GAME_STATUS_IN_PROGRESS = 'IN PROGRESS';
module.exports = {
  PUSHER_CHANNEL: PUSHER_CHANNEL,
  PUSHER_USER_LIST_UPDATE_EVENT: PUSHER_USER_LIST_UPDATE_EVENT,
  PUSHER_NEW_EXCHANGE_REQUEST_EVENT: PUSHER_NEW_EXCHANGE_REQUEST_EVENT,
  PUSHER_NEW_EXCHANGE_RESPONSE_EVENT: PUSHER_NEW_EXCHANGE_RESPONSE_EVENT,
  EXCHANGE_COMPLETED_EVENT: EXCHANGE_COMPLETED_EVENT,
  PUSHER_GAME_START_EVENT: PUSHER_GAME_START_EVENT,
  NOTIFICATION_GAME_BEGUN: NOTIFICATION_GAME_BEGUN,
  NOTIFICATION_WRONG_DETAILS: NOTIFICATION_WRONG_DETAILS,
  NOTIFICATION_EXCHANGE_SUCCESSFUL: NOTIFICATION_EXCHANGE_SUCCESSFUL,
  NOTIFICATION_DUPLICATE_NAME: NOTIFICATION_DUPLICATE_NAME,
  NOTIFICATION_INCOMPLETE_DETAILS: NOTIFICATION_INCOMPLETE_DETAILS,
  NOTIFICATION_SAME_NAME_SELECTED: NOTIFICATION_SAME_NAME_SELECTED,
  PUSHER_GAME_STOP_EVENT: PUSHER_GAME_STOP_EVENT,
  NOTIFICATION_GAME_ALREADY_IN_PROGRESS: NOTIFICATION_GAME_ALREADY_IN_PROGRESS,
  PUSHER_EXCHANGE_CANCELLED_EVENT: PUSHER_EXCHANGE_CANCELLED_EVENT,
  NOTIFICATION_CANCEL_EXCHANGE: NOTIFICATION_CANCEL_EXCHANGE,
  NOTIFICATION_GAME_STARTED_SUCCESSFUL: NOTIFICATION_GAME_STARTED_SUCCESSFUL,
  NOTIFICATION_GAME_STARTED_FAILED: NOTIFICATION_GAME_STARTED_FAILED,
  NOTIFICATION_GAME_STOP_SUCCESSFUL: NOTIFICATION_GAME_STOP_SUCCESSFUL,
  NOTIFICATION_GAME_STOP_FAILED: NOTIFICATION_GAME_STOP_FAILED,
  NOTIFICATION_WRONG_PASSWORD: NOTIFICATION_WRONG_PASSWORD,
  NOTIFICATION_GAME_ALREADY_STARTED: NOTIFICATION_GAME_ALREADY_STARTED,
  NOTIFICATION_GAME_ALREADY_STOPPED: NOTIFICATION_GAME_ALREADY_STOPPED,
  GAME_STATUS_INACTIVE: GAME_STATUS_INACTIVE,
  GAME_STATUS_IN_PROGRESS: GAME_STATUS_IN_PROGRESS,
  PUSHER_GAME_COMPLETED_EVENT: PUSHER_GAME_COMPLETED_EVENT
};

/***/ }),

/***/ "./data/dataSource.js":
/***/ (function(module, exports) {

var FOOD_OPTIONS = ['hokkien mee', 'laksa', 'mee rebus'];
var DESHU_OPTIONS = ['博A', '博B', '忍', '信', '公'];
module.exports = {
  FOOD_OPTIONS: FOOD_OPTIONS,
  DESHU_OPTIONS: DESHU_OPTIONS
};

/***/ }),

/***/ "./models/ExchangeEntity.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = function _default(request_user, respond_user, birthday, favouriteFood, deshu, letterToExchange, letterToReceive) {
  _classCallCheck(this, _default);

  this.request_user = request_user;
  this.respond_user = respond_user;
  this.birthday = birthday;
  this.favouriteFood = favouriteFood;
  this.deshu = deshu;
  this.letterToExchange = letterToExchange;
  this.letterToReceive = letterToReceive;
};



/***/ }),

/***/ "./models/User.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = function _default(name, birthday, deshu, favouriteFood) {
  _classCallCheck(this, _default);

  this.name = name;
  this.birthday = birthday;
  this.favouriteFood = favouriteFood;
  this.deshu = deshu;
};



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js__ = __webpack_require__("pusher-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pusher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_User__ = __webpack_require__("./models/User.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__("./utils/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Page__ = __webpack_require__("./components/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_SignIn__ = __webpack_require__("./components/SignIn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_strings__ = __webpack_require__("./constants/strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_strings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__constants_strings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_notify_toast__ = __webpack_require__("react-notify-toast");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_notify_toast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_notify_toast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_gameUtils__ = __webpack_require__("./utils/gameUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_gameUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__utils_gameUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_credentials__ = __webpack_require__("./constants/credentials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_credentials___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__constants_credentials__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_LoadingScreen__ = __webpack_require__("./components/LoadingScreen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_notificationUtils__ = __webpack_require__("./utils/notificationUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_notificationUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__utils_notificationUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_LettersComponent__ = __webpack_require__("./components/LettersComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_ExchangeRequest__ = __webpack_require__("./components/ExchangeRequest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_ExchangeResponse__ = __webpack_require__("./components/ExchangeResponse.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_WaitingForVerification__ = __webpack_require__("./components/WaitingForVerification.js");
var _jsxFileName = "E:\\iceBreaker\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



















var _default =
/*#__PURE__*/
function (_Page) {
  _inherits(_default, _Page);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "setupPusher", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.pusher = new __WEBPACK_IMPORTED_MODULE_2_pusher_js___default.a(__WEBPACK_IMPORTED_MODULE_11__constants_credentials___default.a.PUSHER_APP_KEY, {
          cluster: __WEBPACK_IMPORTED_MODULE_11__constants_credentials___default.a.PUSHER_APP_CLUSTER,
          encrypted: true
        });
        _this.channel = _this.pusher.subscribe(__WEBPACK_IMPORTED_MODULE_7__constants_strings___default.a.PUSHER_CHANNEL);

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_7__constants_strings___default.a.PUSHER_USER_LIST_UPDATE_EVENT, function (users) {
          var activeUsers = users.activeUsers;
          console.log("Received new user list from Pusher: " + activeUsers);
          var newActiveUsers = activeUsers.map(function (user) {
            return user.name;
          });

          _this.setState({
            activeUsers: newActiveUsers
          });
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_7__constants_strings___default.a.PUSHER_NEW_EXCHANGE_REQUEST_EVENT, function (exchangeRequest) {
          console.log("Received new exchange request: " + JSON.stringify(exchangeRequest));

          if (exchangeRequest.respond_user == _this.state.userName) {
            console.log("Exchange request is for me.");
            _this.exchangeRequest = exchangeRequest;

            _this.setState({
              isVerifyingForCounterParty: true
            });
          }
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_7__constants_strings___default.a.EXCHANGE_COMPLETED_EVENT, function (data) {
          if (data.request_user == _this.state.userName) {
            __WEBPACK_IMPORTED_MODULE_13__utils_notificationUtils___default.a.showNotification(__WEBPACK_IMPORTED_MODULE_7__constants_strings___default.a.NOTIFICATION_EXCHANGE_SUCCESSFUL);
            console.log("Exchange request has completed: " + JSON.stringify(data));
            console.log("Letters assigned are now " + _this.state.lettersAssigned);

            _this.setState({
              isWaitingForCounterPartyToVerify: false
            });

            _this.retrieveAllGameInformation();
          }
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_7__constants_strings___default.a.PUSHER_GAME_START_EVENT, function () {
          if (_this.state.signedIn) {
            console.log("Game has started...loading main page...");

            _this.setState({
              isWaitingForGameToStart: false
            });

            _this.retrieveAllGameInformation();

            __WEBPACK_IMPORTED_MODULE_13__utils_notificationUtils___default.a.showNotification(__WEBPACK_IMPORTED_MODULE_7__constants_strings___default.a.NOTIFICATION_GAME_BEGUN);
          }
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_7__constants_strings___default.a.PUSHER_GAME_STOP_EVENT, function () {
          if (_this.state.signedIn) {
            localStorage.clear();
            window.alert("Game has been forcefully stopped by game master");
            window.location.href = '/';
          }
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_7__constants_strings___default.a.PUSHER_EXCHANGE_CANCELLED_EVENT, function (data) {
          console.log("Received cancel request: " + JSON.stringify(data));

          if (data.request_user == _this.state.userName && _this.state.isWaitingForCounterPartyToVerify) {
            _this.setState({
              isWaitingForCounterPartyToVerify: false
            });

            __WEBPACK_IMPORTED_MODULE_13__utils_notificationUtils___default.a.showNotification(__WEBPACK_IMPORTED_MODULE_7__constants_strings___default.a.NOTIFICATION_CANCEL_EXCHANGE);
          } else if (data.respond_user == _this.state.userName && _this.state.isVerifyingForCounterParty) {
            _this.setState({
              isVerifyingForCounterParty: false
            });

            __WEBPACK_IMPORTED_MODULE_13__utils_notificationUtils___default.a.showNotification(__WEBPACK_IMPORTED_MODULE_7__constants_strings___default.a.NOTIFICATION_CANCEL_EXCHANGE);
          }
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "checkGameState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_9__utils_gameUtils___default.a.checkAuthenticated().then(function (res) {
          _this.setState({
            signedIn: true,
            authenticationChecked: true
          });
        }, function (err) {
          _this.setState({
            authenticationChecked: true
          });
        });
        __WEBPACK_IMPORTED_MODULE_9__utils_gameUtils___default.a.checkGameStarted().then(function (res) {
          _this.setState({
            isWaitingForGameToStart: false
          });

          _this.retrieveAllGameInformation();

          _this.setState({
            gameStartedChecked: true
          });
        }, function (err) {
          _this.setState({
            gameStartedChecked: true
          });
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "retrieveAllGameInformation", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.retriveUserName();

        _this.retriveLetters();

        _this.retrieveActiveUsers();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "cancelWaitingForVerification", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(r) {
        _this.setState({
          isWaitingForCounterPartyToVerify: false
        });

        __WEBPACK_IMPORTED_MODULE_9__utils_gameUtils___default.a.cancelExchange(_this.exchangeRequest);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onExchangeRequestSubmitSuccess", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(letterToGive, exchangeRequest) {
        __WEBPACK_IMPORTED_MODULE_4__utils_utils___default.a.saveToLocalStorage(exchangeRequest.respond_user, JSON.stringify(exchangeRequest));
        var userSelected = _this.state.userSelected;

        _this.setState({
          isWaitingForCounterPartyToVerify: true,
          letterToGive: letterToGive,
          userSelected: ''
        });

        _this.setState({
          userSelected: userSelected
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onExchangeResponseSubmitSuccess", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(exchangeResponse) {
        __WEBPACK_IMPORTED_MODULE_13__utils_notificationUtils___default.a.showNotification(__WEBPACK_IMPORTED_MODULE_7__constants_strings___default.a.NOTIFICATION_EXCHANGE_SUCCESSFUL);

        _this.retriveLetters();

        __WEBPACK_IMPORTED_MODULE_4__utils_utils___default.a.saveToLocalStorage(exchangeResponse.request_user, JSON.stringify(exchangeResponse));

        _this.setState({
          isVerifyingForCounterParty: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onUserSelected", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (_this.state.activeUsers[e.target.id] === _this.state.userName) __WEBPACK_IMPORTED_MODULE_13__utils_notificationUtils___default.a.showNotification(__WEBPACK_IMPORTED_MODULE_7__constants_strings___default.a.NOTIFICATION_SAME_NAME_SELECTED);else {
          console.log("Setting user selected to " + e.target.id);

          _this.setState({
            userSelected: _this.state.activeUsers[e.target.id]
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "retriveLetters", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_9__utils_gameUtils___default.a.getAssignedLetters().then(function (letters) {
          _this.setState({
            lettersAssigned: letters
          });
        }, function (err) {});
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "retrieveActiveUsers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_9__utils_gameUtils___default.a.getActiveUsers().then(function (activeUsers) {
          _this.setState({
            activeUsers: activeUsers
          });
        }, function (err) {});
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "retriveUserName", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_9__utils_gameUtils___default.a.getUserName().then(function (userName) {
          _this.setState({
            userName: userName
          });
        }, function (err) {});
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "cancelRespondToRequester", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          isVerifyingForCounterParty: false
        });

        __WEBPACK_IMPORTED_MODULE_9__utils_gameUtils___default.a.cancelExchange(_this.exchangeRequest);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSignIn", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name, birthday, favouriteFood, deshu) {
        name = name.toUpperCase();
        console.log("Signing in..." + name);
        var user = new __WEBPACK_IMPORTED_MODULE_3__models_User__["a" /* default */](name, birthday, deshu, favouriteFood);
        __WEBPACK_IMPORTED_MODULE_9__utils_gameUtils___default.a.loginUser(user).then(function (succeed) {
          _this.setState({
            signedIn: true
          });
        }, function (errMessage) {
          __WEBPACK_IMPORTED_MODULE_13__utils_notificationUtils___default.a.showNotification(errMessage);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "updateExchangeRequest", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(exchangeRequest) {
        _this.exchangeRequest = exchangeRequest;
      }
    });
    _this.state = {
      userName: "",
      activeUsers: [],
      lettersAssigned: [],
      userSelected: '',
      isWaitingForCounterPartyToVerify: false,
      isVerifyingForCounterParty: false,
      isWaitingForGameToStart: true,
      signedIn: false,
      letterToGive: '',
      authenticationChecked: false,
      gameStartedChecked: false
    };
    console.log("notify from index is " + JSON.stringify(__WEBPACK_IMPORTED_MODULE_8_react_notify_toast__["notify"]));
    _this.exchangeRequest = {};
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupPusher();
      this.checkGameState();
      /*
      this.setState({
          signedIn: true,
          authenticationChecked: true,
          gameStartedChecked: true,
          isWaitingForGameToStart: false,
      })*/
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.authenticationChecked || !this.state.gameStartedChecked) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      });else if (!this.state.signedIn) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_SignIn__["a" /* default */], {
        onSignIn: this.onSignIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }));else if (this.state.isWaitingForGameToStart && this.state.signedIn) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_LoadingScreen__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }));
      if (this.state.isWaitingForCounterPartyToVerify) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_WaitingForVerification__["a" /* default */], {
        cancel: this.cancelWaitingForVerification,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }));else if (this.state.isVerifyingForCounterParty) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, this.exchangeRequest.request_user, " has requested to connect.Please fill in his details below.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ExchangeResponse__["a" /* default */], {
        targetUser: this.exchangeRequest.request_user,
        userName: this.exchangeRequest.request_user,
        onExchangeResponseSubmitSuccess: this.onExchangeResponseSubmitSuccess,
        lettersAvailable: this.state.lettersAssigned,
        exchangeRequest: this.exchangeRequest,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "cancel-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.cancelRespondToRequester,
        className: "btn btn-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, "Cancel")));else return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        className: "jsx-2479897932"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "sidebar-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        className: "jsx-2479897932"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        id: "spy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        className: "jsx-2479897932"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        className: "jsx-2479897932" + " " + "sidebar-nav nav"
      }, this.state.activeUsers.map(function (user, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
          id: index,
          onClick: _this2.onUserSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          },
          className: "jsx-2479897932" + " " + "sidebar-brand"
        }, user);
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "page-content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        className: "jsx-2479897932"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "data-spy": "scroll",
        "data-target": "#spy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        className: "jsx-2479897932" + " " + "page-content inset"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_LettersComponent__["a" /* default */], {
        userName: this.state.userName,
        lettersAssigned: this.state.lettersAssigned,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          marginTop: '50px',
          marginBottom: '50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        className: "jsx-2479897932" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        className: "jsx-2479897932"
      }, "Fill in the details of the player you would like to exchange with below.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_ExchangeRequest__["a" /* default */], {
        targetUser: this.state.userSelected,
        userName: this.state.userName,
        onExchangeRequestSubmitSuccess: this.onExchangeRequestSubmitSuccess,
        userSelected: this.state.userSelected,
        lettersAvailable: this.state.lettersAssigned,
        updateExchangeRequest: this.updateExchangeRequest,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2479897932",
        css: "#wrapper.active.jsx-2479897932{padding-left:0;}#wrapper.active.jsx-2479897932 #sidebar-wrapper.jsx-2479897932{left:0;}#page-content-wrapper.jsx-2479897932{width:100%;}.sidebar-nav.jsx-2479897932 li.jsx-2479897932{line-height:40px;text-indent:20px;}.sidebar-nav.jsx-2479897932 li.jsx-2479897932 a.jsx-2479897932{color:#999999;display:block;-webkit-text-decoration:none;text-decoration:none;padding-left:60px;}.sidebar-nav.jsx-2479897932 li.jsx-2479897932 a.jsx-2479897932 span.jsx-2479897932:before{position:absolute;left:0;color:#41484c;text-align:center;width:20px;line-height:18px;}.sidebar-nav.jsx-2479897932 li.jsx-2479897932 a.jsx-2479897932:hover,.sidebar-nav.jsx-2479897932 li.active.jsx-2479897932{color:#fff;background:rgba(255,255,255,0.2);-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-2479897932 li.jsx-2479897932 a.jsx-2479897932:active,.sidebar-nav.jsx-2479897932 li.jsx-2479897932 a.jsx-2479897932:focus{-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-2479897932>.sidebar-brand.jsx-2479897932 a.jsx-2479897932{color:#999999;}.sidebar-nav.jsx-2479897932>.sidebar-brand.jsx-2479897932 a.jsx-2479897932:hover{color:#fff;background:none;}.inset.jsx-2479897932{padding:20px;}@media (min-width:1224px){#wrapper.jsx-2479897932{padding-left:250px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-2479897932{margin-left:-250px;left:250px;width:250px;background:#000;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}.sidebar-nav.jsx-2479897932>.sidebar-brand.jsx-2479897932{height:65px;line-height:60px;font-size:18px;}.sidebar-nav.jsx-2479897932{position:absolute;top:0;width:250px;list-style:none;margin:0;padding:0;}}@media (max-width:1224px){#wrapper.jsx-2479897932{padding-left:100px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-2479897932{margin-left:-100px;left:100px;width:100px;background:#000;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}.sidebar-nav.jsx-2479897932>.sidebar-brand.jsx-2479897932{height:65px;line-height:60px;font-size:10px;}.sidebar-nav.jsx-2479897932{position:absolute;top:0;width:100px;list-style:none;margin:0;padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpVWdDLEFBR3NDLEFBR1IsQUFHSSxBQUdNLEFBSUgsQUFNSSxBQVNQLEFBTVUsQUFHUCxBQUdILEFBSUUsQUFLVSxBQUlBLEFBYVAsQUFNTSxBQVlDLEFBSUEsQUFhUCxBQU1NLE9Bdkd4QixJQUdBLEFBc0JtQyxBQVlqQixDQTBCSyxBQW1DQSxDQXpEdkIsQ0EvQmdCLEFBd0JoQixDQXJDQSxFQVNtQixDQVVWLEFBcURHLEFBbUNBLENBMURzQixBQUlqQixBQStCaUIsQUFJakIsS0FmQyxBQW1DQSxDQXhGRixFQXFCaEIsQ0EzQnVCLENBcURGLEFBbUNBLENBaERILEFBbUNBLElBL0VsQixFQWdFc0IsQUFtQ0EsR0F4RkYsR0FrQ0UsQUFtQ0EsRUE3REMsQUF1Q25CLEFBbUNBLE1BckVKLEVBeUNlLEFBbUNBLEtBeEZGLENBa0NRLEFBbUNBLEdBZkwsQUFtQ0EsT0F4RkcsR0FzRGYsQUFtQ0EsRUF2RGMsQUFtQ0EsS0E3RUUsS0FtQ2hCLEFBbUNBLEVBN0RKLEFBa0NzQixBQW1DQSxTQS9EdEIsRUFkQSxLQTJDbUIsQUFtQ0EsYUFsQ2UsQUFtQ0EsZ0VBbENoQixBQW1DQSxZQWxDZCxBQW1DQSIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTpcXGljZUJyZWFrZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL1VzZXInXHJcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIlxyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xyXG5pbXBvcnQgU2lnbkluIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZ25JblwiXHJcbmltcG9ydCBzdHJpbmdzIGZyb20gJy4uL2NvbnN0YW50cy9zdHJpbmdzJ1xyXG5pbXBvcnQge25vdGlmeX0gZnJvbSBcInJlYWN0LW5vdGlmeS10b2FzdFwiO1xyXG5pbXBvcnQgZ2FtZVV0aWxzIGZyb20gXCIuLi91dGlscy9nYW1lVXRpbHNcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xyXG5pbXBvcnQgY3JlZGVudGlhbHMgZnJvbSAnLi4vY29uc3RhbnRzL2NyZWRlbnRpYWxzJ1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nU2NyZWVuXCJcclxuaW1wb3J0IG5vdGlmaWNhdGlvblV0aWxzIGZyb20gXCIuLi91dGlscy9ub3RpZmljYXRpb25VdGlsc1wiXHJcbmltcG9ydCBMZXR0ZXJDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9MZXR0ZXJzQ29tcG9uZW50J1xyXG5pbXBvcnQgRXhjaGFuZ2VSZXF1ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRXhjaGFuZ2VSZXF1ZXN0J1xyXG5pbXBvcnQgRXhjaGFuZ2VSZXNwb25zZSBmcm9tICcuLi9jb21wb25lbnRzL0V4Y2hhbmdlUmVzcG9uc2UnXHJcbmltcG9ydCBXYWl0aW5nRm9yVmVyaWZpY2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvV2FpdGluZ0ZvclZlcmlmaWNhdGlvbidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFBhZ2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBhY3RpdmVVc2VycyA6IFtdLFxyXG4gICAgICAgICAgICBsZXR0ZXJzQXNzaWduZWQ6IFtdLFxyXG4gICAgICAgICAgICB1c2VyU2VsZWN0ZWQ6ICcnLFxyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiBmYWxzZSxcclxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yR2FtZVRvU3RhcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNpZ25lZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgbGV0dGVyVG9HaXZlOiAnJyxcclxuICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZ2FtZVN0YXJ0ZWRDaGVja2VkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdGlmeSBmcm9tIGluZGV4IGlzIFwiK0pTT04uc3RyaW5naWZ5KG5vdGlmeSkpXHJcbiAgICAgICAgdGhpcy5leGNoYW5nZVJlcXVlc3QgPSB7fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuc2V0dXBQdXNoZXIoKVxyXG4gICAgICAgIHRoaXMuY2hlY2tHYW1lU3RhdGUoKVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaWduZWRJbjogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICBnYW1lU3RhcnRlZENoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGlzV2FpdGluZ0ZvckdhbWVUb1N0YXJ0OiBmYWxzZSxcclxuICAgICAgICB9KSovXHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBQdXNoZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKGNyZWRlbnRpYWxzLlBVU0hFUl9BUFBfS0VZLCB7XHJcbiAgICAgICAgICAgIGNsdXN0ZXI6IGNyZWRlbnRpYWxzLlBVU0hFUl9BUFBfQ0xVU1RFUixcclxuICAgICAgICAgICAgZW5jcnlwdGVkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMucHVzaGVyLnN1YnNjcmliZShzdHJpbmdzLlBVU0hFUl9DSEFOTkVMKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoc3RyaW5ncy5QVVNIRVJfVVNFUl9MSVNUX1VQREFURV9FVkVOVCwgKHVzZXJzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVVzZXJzID0gdXNlcnMuYWN0aXZlVXNlcnNcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBuZXcgdXNlciBsaXN0IGZyb20gUHVzaGVyOiBcIiArIGFjdGl2ZVVzZXJzKVxyXG4gICAgICAgICAgICB2YXIgbmV3QWN0aXZlVXNlcnMgPSBhY3RpdmVVc2Vycy5tYXAodXNlciA9PiB1c2VyLm5hbWUpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlcnM6IG5ld0FjdGl2ZVVzZXJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX05FV19FWENIQU5HRV9SRVFVRVNUX0VWRU5ULCAoZXhjaGFuZ2VSZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgbmV3IGV4Y2hhbmdlIHJlcXVlc3Q6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXhjaGFuZ2VSZXF1ZXN0KSlcclxuICAgICAgICAgICAgaWYgKGV4Y2hhbmdlUmVxdWVzdC5yZXNwb25kX3VzZXIgPT0gdGhpcy5zdGF0ZS51c2VyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFeGNoYW5nZSByZXF1ZXN0IGlzIGZvciBtZS5cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2VSZXF1ZXN0ID0gZXhjaGFuZ2VSZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmeWluZ0ZvckNvdW50ZXJQYXJ0eTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLkVYQ0hBTkdFX0NPTVBMRVRFRF9FVkVOVCwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVxdWVzdF91c2VyID09IHRoaXMuc3RhdGUudXNlck5hbWUpIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24oc3RyaW5ncy5OT1RJRklDQVRJT05fRVhDSEFOR0VfU1VDQ0VTU0ZVTClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXhjaGFuZ2UgcmVxdWVzdCBoYXMgY29tcGxldGVkOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZXR0ZXJzIGFzc2lnbmVkIGFyZSBub3cgXCIgKyB0aGlzLnN0YXRlLmxldHRlcnNBc3NpZ25lZClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzV2FpdGluZ0ZvckNvdW50ZXJQYXJ0eVRvVmVyaWZ5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMucmV0cmlldmVBbGxHYW1lSW5mb3JtYXRpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX0dBTUVfU1RBUlRfRVZFTlQsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2lnbmVkSW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBoYXMgc3RhcnRlZC4uLmxvYWRpbmcgbWFpbiBwYWdlLi4uXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1dhaXRpbmdGb3JHYW1lVG9TdGFydDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJldHJpZXZlQWxsR2FtZUluZm9ybWF0aW9uKClcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24oc3RyaW5ncy5OT1RJRklDQVRJT05fR0FNRV9CRUdVTilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLlBVU0hFUl9HQU1FX1NUT1BfRVZFTlQsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2lnbmVkSW4pIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJHYW1lIGhhcyBiZWVuIGZvcmNlZnVsbHkgc3RvcHBlZCBieSBnYW1lIG1hc3RlclwiKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLlBVU0hFUl9FWENIQU5HRV9DQU5DRUxMRURfRVZFTlQsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgY2FuY2VsIHJlcXVlc3Q6IFwiK0pTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXF1ZXN0X3VzZXIgPT0gdGhpcy5zdGF0ZS51c2VyTmFtZSAmJiB0aGlzLnN0YXRlLmlzV2FpdGluZ0ZvckNvdW50ZXJQYXJ0eVRvVmVyaWZ5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25VdGlscy5zaG93Tm90aWZpY2F0aW9uKHN0cmluZ3MuTk9USUZJQ0FUSU9OX0NBTkNFTF9FWENIQU5HRSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3BvbmRfdXNlciA9PSB0aGlzLnN0YXRlLnVzZXJOYW1lICYmIHRoaXMuc3RhdGUuaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24oc3RyaW5ncy5OT1RJRklDQVRJT05fQ0FOQ0VMX0VYQ0hBTkdFKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tHYW1lU3RhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2FtZVV0aWxzLmNoZWNrQXV0aGVudGljYXRlZCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNpZ25lZEluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uQ2hlY2tlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGdhbWVVdGlscy5jaGVja0dhbWVTdGFydGVkKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNXYWl0aW5nRm9yR2FtZVRvU3RhcnQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMucmV0cmlldmVBbGxHYW1lSW5mb3JtYXRpb24oKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGdhbWVTdGFydGVkQ2hlY2tlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGdhbWVTdGFydGVkQ2hlY2tlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmVBbGxHYW1lSW5mb3JtYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXRyaXZlVXNlck5hbWUoKVxyXG4gICAgICAgIHRoaXMucmV0cml2ZUxldHRlcnMoKVxyXG4gICAgICAgIHRoaXMucmV0cmlldmVBY3RpdmVVc2VycygpXHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsV2FpdGluZ0ZvclZlcmlmaWNhdGlvbiA9IChyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzV2FpdGluZ0ZvckNvdW50ZXJQYXJ0eVRvVmVyaWZ5OiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ2FtZVV0aWxzLmNhbmNlbEV4Y2hhbmdlKHRoaXMuZXhjaGFuZ2VSZXF1ZXN0KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXhjaGFuZ2VSZXF1ZXN0U3VibWl0U3VjY2VzcyA9IChsZXR0ZXJUb0dpdmUsZXhjaGFuZ2VSZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgdXRpbHMuc2F2ZVRvTG9jYWxTdG9yYWdlKGV4Y2hhbmdlUmVxdWVzdC5yZXNwb25kX3VzZXIsSlNPTi5zdHJpbmdpZnkoZXhjaGFuZ2VSZXF1ZXN0KSlcclxuICAgICAgICBjb25zdCB1c2VyU2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnVzZXJTZWxlY3RlZFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogdHJ1ZSxcclxuICAgICAgICAgICAgbGV0dGVyVG9HaXZlOiBsZXR0ZXJUb0dpdmUsXHJcbiAgICAgICAgICAgIHVzZXJTZWxlY3RlZDogJydcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25FeGNoYW5nZVJlc3BvbnNlU3VibWl0U3VjY2VzcyA9IChleGNoYW5nZVJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uVXRpbHMuc2hvd05vdGlmaWNhdGlvbihzdHJpbmdzLk5PVElGSUNBVElPTl9FWENIQU5HRV9TVUNDRVNTRlVMKVxyXG4gICAgICAgIHRoaXMucmV0cml2ZUxldHRlcnMoKVxyXG4gICAgICAgIHV0aWxzLnNhdmVUb0xvY2FsU3RvcmFnZShleGNoYW5nZVJlc3BvbnNlLnJlcXVlc3RfdXNlcixKU09OLnN0cmluZ2lmeShleGNoYW5nZVJlc3BvbnNlKSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHk6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblVzZXJTZWxlY3RlZCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmVVc2Vyc1tlLnRhcmdldC5pZF0gPT09IHRoaXMuc3RhdGUudXNlck5hbWUpXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24oc3RyaW5ncy5OT1RJRklDQVRJT05fU0FNRV9OQU1FX1NFTEVDVEVEKVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgdXNlciBzZWxlY3RlZCB0byBcIiArIGUudGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHVzZXJTZWxlY3RlZDogdGhpcy5zdGF0ZS5hY3RpdmVVc2Vyc1tlLnRhcmdldC5pZF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cml2ZUxldHRlcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2FtZVV0aWxzLmdldEFzc2lnbmVkTGV0dGVycygpLnRoZW4oKGxldHRlcnMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJzQXNzaWduZWQgOiBsZXR0ZXJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxmdW5jdGlvbihlcnIpe30pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmVBY3RpdmVVc2VycyA9ICgpID0+IHtcclxuICAgICAgICBnYW1lVXRpbHMuZ2V0QWN0aXZlVXNlcnMoKS50aGVuKChhY3RpdmVVc2VycykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXJzIDogYWN0aXZlVXNlcnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LGZ1bmN0aW9uKGVycil7fSlcclxuICAgIH1cclxuXHJcbiAgICByZXRyaXZlVXNlck5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2FtZVV0aWxzLmdldFVzZXJOYW1lKCkudGhlbigodXNlck5hbWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogdXNlck5hbWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LGZ1bmN0aW9uKGVycil7fSlcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxSZXNwb25kVG9SZXF1ZXN0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ2FtZVV0aWxzLmNhbmNlbEV4Y2hhbmdlKHRoaXMuZXhjaGFuZ2VSZXF1ZXN0KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2lnbkluID0gKG5hbWUsYmlydGhkYXksZmF2b3VyaXRlRm9vZCxkZXNodSkgPT4ge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lLnRvVXBwZXJDYXNlKClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ25pbmcgaW4uLi5cIituYW1lKVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihuYW1lLGJpcnRoZGF5LGRlc2h1LGZhdm91cml0ZUZvb2QpXHJcbiAgICAgICAgZ2FtZVV0aWxzLmxvZ2luVXNlcih1c2VyKS50aGVuKChzdWNjZWVkKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNpZ25lZEluOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxmdW5jdGlvbihlcnJNZXNzYWdlKXtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVXRpbHMuc2hvd05vdGlmaWNhdGlvbihlcnJNZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRXhjaGFuZ2VSZXF1ZXN0ID0gKGV4Y2hhbmdlUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZXhjaGFuZ2VSZXF1ZXN0ID0gZXhjaGFuZ2VSZXF1ZXN0XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYXV0aGVudGljYXRpb25DaGVja2VkIHx8ICF0aGlzLnN0YXRlLmdhbWVTdGFydGVkQ2hlY2tlZClcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgZWxzZSBpZighdGhpcy5zdGF0ZS5zaWduZWRJbilcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8U2lnbkluIG9uU2lnbkluPXt0aGlzLm9uU2lnbklufS8+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuaXNXYWl0aW5nRm9yR2FtZVRvU3RhcnQgJiYgdGhpcy5zdGF0ZS5zaWduZWRJbilcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ1NjcmVlbi8+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzV2FpdGluZ0ZvckNvdW50ZXJQYXJ0eVRvVmVyaWZ5KVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxXYWl0aW5nRm9yVmVyaWZpY2F0aW9uIGNhbmNlbD17dGhpcy5jYW5jZWxXYWl0aW5nRm9yVmVyaWZpY2F0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5pc1ZlcmlmeWluZ0ZvckNvdW50ZXJQYXJ0eSlcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt0aGlzLmV4Y2hhbmdlUmVxdWVzdC5yZXF1ZXN0X3VzZXJ9IGhhcyByZXF1ZXN0ZWQgdG8gY29ubmVjdC5QbGVhc2UgZmlsbCBpbiBoaXMgZGV0YWlscyBiZWxvdy48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFeGNoYW5nZVJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVzZXI9e3RoaXMuZXhjaGFuZ2VSZXF1ZXN0LnJlcXVlc3RfdXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU9e3RoaXMuZXhjaGFuZ2VSZXF1ZXN0LnJlcXVlc3RfdXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25FeGNoYW5nZVJlc3BvbnNlU3VibWl0U3VjY2Vzcz17dGhpcy5vbkV4Y2hhbmdlUmVzcG9uc2VTdWJtaXRTdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJzQXZhaWxhYmxlPXt0aGlzLnN0YXRlLmxldHRlcnNBc3NpZ25lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjaGFuZ2VSZXF1ZXN0PXt0aGlzLmV4Y2hhbmdlUmVxdWVzdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2NhbmNlbC1idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2FuY2VsUmVzcG9uZFRvUmVxdWVzdGVyfSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNpZGViYXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBpZD1cInNweVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyLW5hdiBuYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWN0aXZlVXNlcnMubWFwKCh1c2VyLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGlkPXtpbmRleH0gY2xhc3NOYW1lPVwic2lkZWJhci1icmFuZFwiIG9uQ2xpY2s9e3RoaXMub25Vc2VyU2VsZWN0ZWR9Pnt1c2VyfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlLWNvbnRlbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgaW5zZXRcIiBkYXRhLXNweT1cInNjcm9sbFwiIGRhdGEtdGFyZ2V0PVwiI3NweVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZXR0ZXJDb21wb25lbnQgdXNlck5hbWU9e3RoaXMuc3RhdGUudXNlck5hbWV9IGxldHRlcnNBc3NpZ25lZD17dGhpcy5zdGF0ZS5sZXR0ZXJzQXNzaWduZWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOic1MHB4JyxtYXJnaW5Cb3R0b206JzUwcHgnfX0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RmlsbCBpbiB0aGUgZGV0YWlscyBvZiB0aGUgcGxheWVyIHlvdSB3b3VsZCBsaWtlIHRvIGV4Y2hhbmdlIHdpdGggYmVsb3cuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXhjaGFuZ2VSZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVzZXI9e3RoaXMuc3RhdGUudXNlclNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZT17dGhpcy5zdGF0ZS51c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FeGNoYW5nZVJlcXVlc3RTdWJtaXRTdWNjZXNzPXt0aGlzLm9uRXhjaGFuZ2VSZXF1ZXN0U3VibWl0U3VjY2Vzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclNlbGVjdGVkPXt0aGlzLnN0YXRlLnVzZXJTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZT17dGhpcy5zdGF0ZS5sZXR0ZXJzQXNzaWduZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUV4Y2hhbmdlUmVxdWVzdD17dGhpcy51cGRhdGVFeGNoYW5nZVJlcXVlc3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIuYWN0aXZlICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEgc3BhbjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDE0ODRjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGE6aG92ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGE6YWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnNldCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN3cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjEyMjRweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG59Il19 */\n/*@ sourceURL=pages\\index.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_5__components_Page__["a" /* default */]);



/***/ }),

/***/ "./utils/gameUtils.js":
/***/ (function(module, exports, __webpack_require__) {

var axios = __webpack_require__("axios");

var strings = __webpack_require__("./constants/strings.js");

var endpoints = __webpack_require__("./constants/endpoints.js");

module.exports = {
  sendExchangeRequest: function sendExchangeRequest(exchangeRequest) {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: endpoints.API_SUBMIT_EXCHANGE_REQUEST,
        data: exchangeRequest
      }).then(function (response) {
        console.log('Response of ExchangeRequest: ' + JSON.stringify(response.data));

        if (response.data.success == 1) {
          resolve(1);
        } else reject(strings.NOTIFICATION_WRONG_DETAILS);
      }).catch(function (response) {
        console.log(response);
      });
    });
  },
  sendExchangeResponse: function sendExchangeResponse(exchangeResponse) {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: endpoints.API_SUBMIT_EXCHANGE_RESPONSE,
        data: exchangeResponse
      }).then(function (response) {
        console.log('Response of ExchangeResponse: ' + JSON.stringify(response.data));
        if (response.data.success == 1) resolve(exchangeResponse);else reject(strings.NOTIFICATION_WRONG_DETAILS);
      }).catch(function (err) {
        reject(err);
        console.log(err);
      });
    });
  },
  getAssignedLetters: function getAssignedLetters() {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: endpoints.API_GET_ASSIGNED_LETTERS
      }).then(function (response) {
        var letters = response.data;
        console.log('Got letters assigned as ' + letters);
        resolve(letters);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  getCompletedUsers: function getCompletedUsers() {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: endpoints.API_GET_COMPLETED_USERS
      }).then(function (response) {
        resolve(response.data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  getActiveUsers: function getActiveUsers() {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: endpoints.API_GET_ALL_ACTIVE_USERS
      }).then(function (response) {
        var activeUsers = response.data.map(function (session) {
          return session.user.name;
        });
        console.log('Parsed active users as ' + activeUsers);
        resolve(activeUsers);
      }).catch(function (err) {
        reject(err);
        console.log(err);
      });
    });
  },
  getUserName: function getUserName() {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: endpoints.API_GET_SESSION
      }).then(function (response) {
        var userName = response.data.user.name;
        if (typeof response.data.user === 'undefined') reject(0);
        console.log('Received username as  ' + userName);
        resolve(userName);
      }).catch(function (err) {
        reject(err);
        console.log(err);
      });
    });
  },
  loginUser: function loginUser(user) {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: endpoints.API_LOGIN_USER,
        data: user
      }).then(function (response) {
        if (response.data.result == 1) resolve(1);else reject(response.data.message);
      }).catch(function (err) {
        reject(err);
        console.log(err);
      });
    });
  },
  startGame: function startGame(password) {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: endpoints.API_START_GAME,
        data: {
          password: password
        }
      }).then(function (response) {
        if (response.data.success == 1) resolve(strings.NOTIFICATION_GAME_STARTED_SUCCESSFUL);else reject(response.data.message);
      }).catch(function (err) {
        reject(strings.NOTIFICATION_GAME_STARTED_FAILED);
        console.log(err);
      });
    });
  },
  stopGame: function stopGame(password) {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: endpoints.API_STOP_GAME,
        data: {
          password: password
        }
      }).then(function (response) {
        if (response.data.success == 1) resolve(strings.NOTIFICATION_GAME_STOP_SUCCESSFUL);else reject(response.data.message);
      }).catch(function (err) {
        reject(strings.NOTIFICATION_GAME_STOP_FAILED);
        console.log(err);
      });
    });
  },
  completeGame: function completeGame() {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: endpoints.API_USER_COMPLETED_GAME
      }).then(function (response) {
        resolve(1);
      }).catch(function (err) {
        reject(err);
        console.log(err);
      });
    });
  },
  checkAuthenticated: function checkAuthenticated() {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: endpoints.API_CHECK_AUTHENTICATED
      }).then(function (response) {
        if (response.data.result == 1) resolve(true);else reject(false);
      }).catch(function (response) {
        console.log(response);
        reject(false);
      });
    });
  },
  checkGameStarted: function checkGameStarted() {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: endpoints.API_CHECK_GAME_STARTED
      }).then(function (response) {
        if (response.data.result == 1) resolve(true);else reject(false);
      }).catch(function (response) {
        console.log(response);
        reject(false);
      });
    });
  },
  validateUserInfo: function validateUserInfo(store, exchange, targetUser) {
    return new Promise(function (resolve, reject) {
      store.all(function (err, sessions) {
        var filteredSessions = sessions.filter(function (session) {
          if (session.hasOwnProperty('user')) return session.user.name == targetUser && session.user.birthday == exchange.birthday && session.user.favouriteFood == exchange.favouriteFood && session.user.deshu == exchange.deshu && exchange.letterToExchange;else return false;
        });
        console.log("filtered sessions " + JSON.stringify(filteredSessions));
        if (filteredSessions.length > 0) resolve(true);else reject(false);
      });
    });
  },
  cancelExchange: function cancelExchange(exchangeRequest) {
    axios({
      method: 'post',
      url: endpoints.API_CANCEL_EXCHANGE,
      data: exchangeRequest
    }).then(function (response) {}).catch(function (response) {
      //handle error
      console.log(response);
    });
  }
};

/***/ }),

/***/ "./utils/notificationUtils.js":
/***/ (function(module, exports, __webpack_require__) {

var notify = __webpack_require__("react-notify-toast").notify;

var config = __webpack_require__("./constants/config.js");

console.log("Notify is " + JSON.stringify(notify));
module.exports = {
  showNotification: function showNotification(message) {
    notify.show(message, config.NOTIFICATION_TYPE, config.NOTIFICATION_TIMEOUT, {
      background: config.NOTIFICATION_BACKGROUND_COLOR,
      text: config.NOTIFICATION_TEXT_COLOR
    });
  }
};

/***/ }),

/***/ "./utils/utils.js":
/***/ (function(module, exports) {

module.exports = {
  insertLetter: function insertLetter(lettersUsed, letterToInsert) {
    var index = lettersUsed.findIndex('-');
  },
  shuffleString: function shuffleString(input) {
    var a = input.split(""),
        n = a.length;

    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }

    return a.join("");
  },
  saveToLocalStorage: function saveToLocalStorage(key, value) {
    if (typeof localStorage !== 'undefined') {
      console.log("Setting local storage " + key + ":" + value);
      localStorage.setItem(key, value);
    }
  }
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pusher-js":
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-notify-toast":
/***/ (function(module, exports) {

module.exports = require("react-notify-toast");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map