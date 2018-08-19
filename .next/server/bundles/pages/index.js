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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_dataSource__ = __webpack_require__("./data/dataSource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_dataSource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_dataSource__);
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
    Object.defineProperty(_assertThisInitialized(_this), "handleLetterToExchangeChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
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
        console.log(e.target);

        _this.setState({
          deshu: e.target.value
        });
      }
    });
    _this.state = {
      birthday: '',
      favouriteFood: '',
      deshu: "",
      letterToExchange: ''
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Name")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, this.props.targetUser)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Deshu"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        onChange: this.handleDeshuChange,
        className: "form-control",
        name: "deshu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Select his/her deshu."), __WEBPACK_IMPORTED_MODULE_1__data_dataSource___default.a.DESHU_OPTIONS.map(function (deshu) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
          value: deshu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, deshu);
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Birthday"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "date",
        className: "form-control",
        name: "birthday",
        onChange: this.handleBirthdayChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Favourite Food"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        className: "form-control",
        name: "favouriteFood",
        onChange: this.handleFavouriteFoodChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Select his/her favourite food"), __WEBPACK_IMPORTED_MODULE_1__data_dataSource___default.a.FOOD_OPTIONS.map(function (foodOption) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
          value: foodOption,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, foodOption);
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Letter To Exchange Away"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        className: "form-control",
        name: "letterToExchange",
        onChange: this.handleLetterToExchangeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Select a letter to exchange away"), this.props.lettersAvailable.map(function (letter) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
          value: letter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, letter);
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.submitForm,
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Submit"));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/ExchangeRequest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Exchange__ = __webpack_require__("./components/Exchange.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_endpoints__ = __webpack_require__("./constants/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_endpoints___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constants_endpoints__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_notify_toast__ = __webpack_require__("react-notify-toast");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_notify_toast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_notify_toast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_strings__ = __webpack_require__("./constants/strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_strings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__constants_strings__);
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
        var exchangeRequest = {
          respond_user: _this.props.userSelected,
          birthday: _this.state.birthday,
          favouriteFood: _this.state.favouriteFood,
          deshu: _this.state.deshu,
          letterToExchange: _this.state.letterToExchange,
          request_user: _this.props.userName
        };
        console.log("ExchangeRequest: " + JSON.stringify(exchangeRequest));
        __WEBPACK_IMPORTED_MODULE_1_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_3__constants_endpoints___default.a.API_SUBMIT_EXCHANGE_REQUEST,
          data: exchangeRequest
        }).then(function (response) {
          console.log('Response of ExchangeRequest: ' + JSON.stringify(response.data));
          if (response.data.success == 1) _this.props.onExchangeRequestSubmitSuccess(_this.state.letterToExchange);else __WEBPACK_IMPORTED_MODULE_4_react_notify_toast__["notify"].show(__WEBPACK_IMPORTED_MODULE_5__constants_strings___default.a.NOTIFICATION_WRONG_DETAILS, "custom", 5000, {
            background: '#0E1717',
            text: "#FFFFFF"
          });
        }).catch(function (response) {
          console.log(response);
        });
      }
    }), _temp));
  }

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2__Exchange__["a" /* default */]);



/***/ }),

/***/ "./components/ExchangeResponse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Exchange__ = __webpack_require__("./components/Exchange.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_endpoints__ = __webpack_require__("./constants/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_endpoints___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constants_endpoints__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_notify_toast__ = __webpack_require__("react-notify-toast");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_notify_toast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_notify_toast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_strings__ = __webpack_require__("./constants/strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_strings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__constants_strings__);
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
        var exchangeResponse = {
          request_user: _this.props.exchangeRequest.request_user,
          birthday: _this.state.birthday,
          favouriteFood: _this.state.favouriteFood,
          deshu: _this.state.deshu,
          letterToExchange: _this.state.letterToExchange,
          letterToReceive: _this.props.exchangeRequest.letterToExchange,
          respond_user: _this.props.exchangeRequest.respond_user
        };
        console.log("ExchangeResponse: " + JSON.stringify(exchangeResponse));
        __WEBPACK_IMPORTED_MODULE_1_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_3__constants_endpoints___default.a.API_SUBMIT_EXCHANGE_RESPONSE,
          data: exchangeResponse
        }).then(function (response) {
          console.log('Response of ExchangeResponse: ' + JSON.stringify(response.data));
          if (response.data.success == 1) _this.props.onExchangeResponseSubmitSuccess();else __WEBPACK_IMPORTED_MODULE_4_react_notify_toast__["notify"].show(__WEBPACK_IMPORTED_MODULE_5__constants_strings___default.a.NOTIFICATION_WRONG_DETAILS, "custom", 5000, {
            background: '#0E1717',
            text: "#FFFFFF"
          });
        }).catch(function (response) {
          //handle error
          console.log(response);
        });
      }
    }), _temp));
  }

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2__Exchange__["a" /* default */]);



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
        content: "width=device-width,height=device-height, initial-scale=2",
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
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_notify_toast___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_endpoints__ = __webpack_require__("./constants/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_endpoints___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constants_endpoints__);
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
        var lettersUsed = _this.state.lettersUsed;
        var lettersAvailable = _this.state.lettersAvailable;
        lettersUsed[lettersUsed.indexOf('-')] = _this.state.lettersAvailable[e.target.value];
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
        if (_this.state.lettersUsed.join('') === _this.props.userName && typeof window !== 'undefined') {
          __WEBPACK_IMPORTED_MODULE_2_axios___default()({
            method: 'post',
            url: __WEBPACK_IMPORTED_MODULE_3__constants_endpoints___default.a.API_USER_COMPLETED_GAME
          }).then(function (response) {
            window.alert("You have completed the game!");
            window.location.href = '/';
          }).catch(function (response) {
            //handle error
            console.log(response);
          });
        }
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
          lineNumber: 77
        },
        className: "jsx-3311417547"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "instructions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-3311417547"
      }, "Use the letters below to form your username: ", this.props.userName), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-3311417547"
      }, this.state.lettersUsed.join(' '), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "cancel-btn",
        onClick: this.removeOneCharFromLettersUsed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        className: "jsx-3311417547" + " " + "btn btn-light"
      }, "C")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "letters-available",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-3311417547"
      }, this.state.lettersAvailable.map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          id: "letter-available",
          value: index,
          onClick: _this2.handleLetterSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          className: "jsx-3311417547" + " " + "btn btn-primary"
        }, letter);
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3311417547",
        css: "#cancel-btn.jsx-3311417547{margin-left:20px;margin-bottom:20px;}#letters-available.jsx-3311417547{margin-bottom:20px;}#letter-available.jsx-3311417547{margin:5px;}#instructions.jsx-3311417547{margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExldHRlcnNDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUY0QixBQUdnRCxBQUlFLEFBR1IsQUFHUSxXQUZyQixNQVBxQixFQUlyQixBQU1SLGlCQVRRIiwiZmlsZSI6ImNvbXBvbmVudHNcXExldHRlcnNDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRTpcXGljZUJyZWFrZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGVuZHBvaW50cyBmcm9tIFwiLi4vY29uc3RhbnRzL2VuZHBvaW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV0dGVyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGV0dGVyc1VzZWQ6IFtdLFxyXG4gICAgICAgICAgICBsZXR0ZXJzQXZhaWxhYmxlOiBwcm9wcy5sZXR0ZXJzQXNzaWduZWQuc2xpY2UoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxldHRlciBjb21wb25lbnQgd2lsbCByZWNlaXZlIHByb3BzXCIpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxldHRlcnNVc2VkOiBBcnJheS5hcHBseShudWxsLHtsZW5ndGg6IG5ld1Byb3BzLmxldHRlcnNBc3NpZ25lZC5sZW5ndGh9KS5tYXAoZnVuY3Rpb24oKSB7IHJldHVybiAnLSc7IH0pLFxyXG4gICAgICAgICAgICBsZXR0ZXJzQXZhaWxhYmxlOiBuZXdQcm9wcy5sZXR0ZXJzQXNzaWduZWQuc2xpY2UoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTGV0dGVyU2VsZWN0ZWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHZhciBsZXR0ZXJzVXNlZCA9IHRoaXMuc3RhdGUubGV0dGVyc1VzZWRcclxuICAgICAgICB2YXIgbGV0dGVyc0F2YWlsYWJsZSA9IHRoaXMuc3RhdGUubGV0dGVyc0F2YWlsYWJsZVxyXG4gICAgICAgIGxldHRlcnNVc2VkW2xldHRlcnNVc2VkLmluZGV4T2YoJy0nKV0gPSB0aGlzLnN0YXRlLmxldHRlcnNBdmFpbGFibGVbZS50YXJnZXQudmFsdWVdXHJcbiAgICAgICAgbGV0dGVyc0F2YWlsYWJsZS5zcGxpY2UoZS50YXJnZXQudmFsdWUsIDEpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxldHRlcnNVc2VkOiBsZXR0ZXJzVXNlZCxcclxuICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZTogbGV0dGVyc0F2YWlsYWJsZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5oYW5kbGVMZXR0ZXJzQ2hhbmdlZCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlT25lQ2hhckZyb21MZXR0ZXJzVXNlZCA9IChlKSA9PiB7XHJcbiAgICAgICAgdmFyIGxldHRlcnNVc2VkID0gdGhpcy5zdGF0ZS5sZXR0ZXJzVXNlZFxyXG4gICAgICAgIHZhciBpbmRleCA9IGxldHRlcnNVc2VkLmluZGV4T2YoJy0nKVxyXG4gICAgICAgIGlmIChpbmRleCAhPSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXJzVXNlZCA9IHRoaXMuc3RhdGUubGV0dGVyc1VzZWRcclxuICAgICAgICAgICAgdmFyIGxldHRlcnNBdmFpbGFibGUgPSB0aGlzLnN0YXRlLmxldHRlcnNBdmFpbGFibGVcclxuICAgICAgICAgICAgdmFyIGluZGV4VG9CZVJlbW92ZWQgPSAwXHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPSAtMSlcclxuICAgICAgICAgICAgICAgIGluZGV4VG9CZVJlbW92ZWQgPSBpbmRleCAtIDFcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaW5kZXhUb0JlUmVtb3ZlZCA9IGxldHRlcnNVc2VkLmxlbmd0aC0xXHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXJSZW1vdmVkID0gbGV0dGVyc1VzZWRbaW5kZXhUb0JlUmVtb3ZlZF1cclxuICAgICAgICAgICAgbGV0dGVyc1VzZWRbaW5kZXhUb0JlUmVtb3ZlZF0gPSAnLSdcclxuICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZS5wdXNoKGxldHRlclJlbW92ZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyc1VzZWQ6IGxldHRlcnNVc2VkLFxyXG4gICAgICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZTogbGV0dGVyc0F2YWlsYWJsZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUxldHRlcnNDaGFuZ2VkKClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxldHRlcnNDaGFuZ2VkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubGV0dGVyc1VzZWQuam9pbignJykgPT09IHRoaXMucHJvcHMudXNlck5hbWUgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIHVybDogZW5kcG9pbnRzLkFQSV9VU0VSX0NPTVBMRVRFRF9HQU1FXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiWW91IGhhdmUgY29tcGxldGVkIHRoZSBnYW1lIVwiKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9Jy8nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH19XHJcblxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnN0cnVjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBVc2UgdGhlIGxldHRlcnMgYmVsb3cgdG8gZm9ybSB5b3VyIHVzZXJuYW1lOiB7dGhpcy5wcm9wcy51c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sZXR0ZXJzVXNlZC5qb2luKCcgJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbC1idG5cIiBvbkNsaWNrPXt0aGlzLnJlbW92ZU9uZUNoYXJGcm9tTGV0dGVyc1VzZWR9IGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIj5DPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsZXR0ZXJzLWF2YWlsYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxldHRlcnNBdmFpbGFibGUubWFwKChsZXR0ZXIsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gaWQ9XCJsZXR0ZXItYXZhaWxhYmxlXCIgdmFsdWU9e2luZGV4fSBvbkNsaWNrPXt0aGlzLmhhbmRsZUxldHRlclNlbGVjdGVkfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj57bGV0dGVyfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhbmNlbC1idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAjbGV0dGVycy1hdmFpbGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNsZXR0ZXItYXZhaWxhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI2luc3RydWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=components\\LettersComponent.js */"
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
      }, "Fill in your details to begin the game.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
var API_CHECK_SESSION_EXPIRED = '/checkExpired';
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
module.exports = {
  API_LOGIN_USER: API_LOGIN_USER,
  API_CHECK_SESSION_EXPIRED: API_CHECK_SESSION_EXPIRED,
  API_GET_ALL_ACTIVE_USERS: API_GET_ALL_ACTIVE_USERS,
  API_GET_SESSION: API_GET_SESSION,
  API_GET_ASSIGNED_LETTERS: API_GET_ASSIGNED_LETTERS,
  API_SUBMIT_EXCHANGE_REQUEST: API_SUBMIT_EXCHANGE_REQUEST,
  API_EXCHANGE_COMPLETED: API_EXCHANGE_COMPLETED,
  API_SUBMIT_EXCHANGE_RESPONSE: API_SUBMIT_EXCHANGE_RESPONSE,
  API_START_GAME: API_START_GAME,
  API_USER_COMPLETED_GAME: API_USER_COMPLETED_GAME,
  API_CHECK_AUTHENTICATED: API_CHECK_AUTHENTICATED,
  API_CHECK_GAME_STARTED: API_CHECK_GAME_STARTED
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
var NOTIFICATION_GAME_BEGUN = 'Game has begun!';
var NOTIFICATION_WRONG_DETAILS = 'You have entered the wrong details! Please try again!';
var NOTIFICATION_EXCHANGE_SUCCESSFUL = 'Exchange of letters succeeded!';
module.exports = {
  PUSHER_CHANNEL: PUSHER_CHANNEL,
  PUSHER_USER_LIST_UPDATE_EVENT: PUSHER_USER_LIST_UPDATE_EVENT,
  PUSHER_NEW_EXCHANGE_REQUEST_EVENT: PUSHER_NEW_EXCHANGE_REQUEST_EVENT,
  PUSHER_NEW_EXCHANGE_RESPONSE_EVENT: PUSHER_NEW_EXCHANGE_RESPONSE_EVENT,
  EXCHANGE_COMPLETED_EVENT: EXCHANGE_COMPLETED_EVENT,
  PUSHER_GAME_START_EVENT: PUSHER_GAME_START_EVENT,
  NOTIFICATION_GAME_BEGUN: NOTIFICATION_GAME_BEGUN,
  NOTIFICATION_WRONG_DETAILS: NOTIFICATION_WRONG_DETAILS,
  NOTIFICATION_EXCHANGE_SUCCESSFUL: NOTIFICATION_EXCHANGE_SUCCESSFUL
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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pusher_js__ = __webpack_require__("pusher-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pusher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_utils__ = __webpack_require__("./utils/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__utils_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Page__ = __webpack_require__("./components/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_SignIn__ = __webpack_require__("./components/SignIn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_strings__ = __webpack_require__("./constants/strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_strings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__constants_strings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_notify_toast__ = __webpack_require__("react-notify-toast");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_notify_toast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_notify_toast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_endpoints__ = __webpack_require__("./constants/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_endpoints___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__constants_endpoints__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_credentials__ = __webpack_require__("./constants/credentials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_credentials___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__constants_credentials__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_LoadingScreen__ = __webpack_require__("./components/LoadingScreen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_LettersComponent__ = __webpack_require__("./components/LettersComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_ExchangeRequest__ = __webpack_require__("./components/ExchangeRequest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_ExchangeResponse__ = __webpack_require__("./components/ExchangeResponse.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_WaitingForVerification__ = __webpack_require__("./components/WaitingForVerification.js");

var _jsxFileName = "E:\\iceBreaker\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

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
        _this.pusher = new __WEBPACK_IMPORTED_MODULE_4_pusher_js___default.a(__WEBPACK_IMPORTED_MODULE_12__constants_credentials___default.a.PUSHER_APP_KEY, {
          cluster: __WEBPACK_IMPORTED_MODULE_12__constants_credentials___default.a.PUSHER_APP_CLUSTER,
          encrypted: true
        });
        _this.channel = _this.pusher.subscribe(__WEBPACK_IMPORTED_MODULE_8__constants_strings___default.a.PUSHER_CHANNEL);

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_8__constants_strings___default.a.PUSHER_USER_LIST_UPDATE_EVENT, function (users) {
          console.log("Received new user list from Pusher: " + users);
          var newActiveUsers = users.map(function (user) {
            return user.name;
          });

          _this.setState({
            activeUsers: newActiveUsers
          });
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_8__constants_strings___default.a.PUSHER_NEW_EXCHANGE_REQUEST_EVENT, function (exchangeRequest) {
          console.log("Received new exchange request: " + JSON.stringify(exchangeRequest));

          if (exchangeRequest.respond_user == _this.state.userName) {
            console.log("Exchange request is for me.");
            _this.exchangeRequest = exchangeRequest;

            _this.setState({
              isVerifyingForCounterParty: true
            });
          }
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_8__constants_strings___default.a.EXCHANGE_COMPLETED_EVENT, function (data) {
          if (data.request_user == _this.state.userName) {
            __WEBPACK_IMPORTED_MODULE_9_react_notify_toast__["notify"].show(__WEBPACK_IMPORTED_MODULE_8__constants_strings___default.a.NOTIFICATION_EXCHANGE_SUCCESSFUL, "custom", 5000, {
              background: '#0E1717',
              text: "#FFFFFF"
            });
            console.log("Exchange request has completed: " + JSON.stringify(data));
            console.log("Letters assigned are now " + _this.state.lettersAssigned);

            _this.setState({
              isWaitingForCounterPartyToVerify: false
            });

            _this.retrieveAllGameInformation();
          }
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_8__constants_strings___default.a.PUSHER_GAME_START_EVENT, function () {
          console.log("Game has started...loading main page...");

          _this.setState({
            isWaitingForGameToStart: false
          });

          _this.retrieveAllGameInformation();

          __WEBPACK_IMPORTED_MODULE_9_react_notify_toast__["notify"].show(__WEBPACK_IMPORTED_MODULE_8__constants_strings___default.a.NOTIFICATION_GAME_BEGUN, "custom", 5000, {
            background: '#0E1717',
            text: "#FFFFFF"
          });
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "checkGameState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_5__utils_utils___default.a.checkAuthenticated().then(function (res) {
          _this.setState({
            signedIn: true
          });

          _this.setState({
            authenticationChecked: true
          });
        }, function (err) {
          _this.setState({
            authenticationChecked: true
          });
        });
        __WEBPACK_IMPORTED_MODULE_5__utils_utils___default.a.checkGameStarted().then(function (res) {
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
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onExchangeRequestSubmitSuccess", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(letterToGive) {
        _this.setState({
          isWaitingForCounterPartyToVerify: true,
          letterToGive: letterToGive
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onExchangeResponseSubmitSuccess", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_9_react_notify_toast__["notify"].show(__WEBPACK_IMPORTED_MODULE_8__constants_strings___default.a.NOTIFICATION_EXCHANGE_SUCCESSFUL, "custom", 5000, {
          background: '#0E1717',
          text: "#FFFFFF"
        });

        _this.setState({
          isVerifyingForCounterParty: false
        });

        _this.retriveLetters();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        console.log("Setting user selected to " + e.target.id);

        _this.setState({
          userSelected: _this.state.activeUsers[e.target.id]
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "retriveLetters", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_2_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_11__constants_endpoints___default.a.API_GET_ASSIGNED_LETTERS
        }).then(function (response) {
          console.log('Got letters assigned as ' + response.data);

          _this.setState({
            lettersAssigned: response.data
          });
        }).catch(function (response) {
          //handle error
          console.log(response);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "retrieveActiveUsers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_2_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_11__constants_endpoints___default.a.API_GET_ALL_ACTIVE_USERS
        }).then(function (response) {
          var activeUsers = response.data.map(function (session) {
            return session.user.name;
          });
          console.log('Parsed active users as ' + activeUsers);

          _this.setState({
            activeUsers: activeUsers
          });
        }).catch(function (response) {
          //handle error
          console.log(response);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "retriveUserName", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_2_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_11__constants_endpoints___default.a.API_GET_SESSION
        }).then(function (response) {
          if (typeof response.data.user === 'undefined') return;
          console.log('Received username as  ' + response.data.user.name);

          _this.setState({
            userName: response.data.user.name
          });
        }).catch(function (response) {
          //handle error
          console.log(response);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSignIn", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name, birthday, favouriteFood, deshu) {
        name = name.toUpperCase();
        console.log("Signing in..." + name);
        __WEBPACK_IMPORTED_MODULE_2_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_11__constants_endpoints___default.a.API_LOGIN_USER,
          data: {
            name: name,
            birthday: birthday,
            favouriteFood: favouriteFood,
            deshu: deshu
          }
        }).then(function (response) {
          if (response.data.result == 1) _this.setState({
            signedIn: true
          });
          console.log("Signed in successful");
        }).catch(function (response) {
          //handle error
          console.log(response);
        });
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
    _this.exchangeRequest = {};
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setupPusher();
                this.checkGameState();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.authenticationChecked || !this.state.gameStartedChecked) return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      });else if (!this.state.signedIn) return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_SignIn__["a" /* default */], {
        onSignIn: this.onSignIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }));else if (this.state.isWaitingForGameToStart && this.state.signedIn) return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_LoadingScreen__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }));
      if (this.state.isWaitingForCounterPartyToVerify) return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_WaitingForVerification__["a" /* default */], {
        cancel: this.cancelWaitingForVerification,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }));else if (this.state.isVerifyingForCounterParty) return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, this.exchangeRequest.request_user, " has requested to connect.Please fill in his details below.")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ExchangeResponse__["a" /* default */], {
        targetUser: this.exchangeRequest.request_user,
        userName: this.exchangeRequest.request_user,
        onExchangeResponseSubmitSuccess: this.onExchangeResponseSubmitSuccess,
        lettersAvailable: this.state.lettersAssigned,
        exchangeRequest: this.exchangeRequest,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }));else return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        className: "jsx-2713142477"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "sidebar-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        className: "jsx-2713142477"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("nav", {
        id: "spy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        className: "jsx-2713142477"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        className: "jsx-2713142477" + " " + "sidebar-nav nav"
      }, this.state.activeUsers.map(function (user, index) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
          id: index,
          onClick: _this2.onClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          className: "jsx-2713142477" + " " + "sidebar-brand"
        }, user);
      })))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "page-content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        className: "jsx-2713142477"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        "data-spy": "scroll",
        "data-target": "#spy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        className: "jsx-2713142477" + " " + "page-content inset"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_LettersComponent__["a" /* default */], {
        userName: this.state.userName,
        lettersAssigned: this.state.lettersAssigned,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        style: {
          marginTop: '50px',
          marginBottom: '50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        className: "jsx-2713142477" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        className: "jsx-2713142477"
      }, "Fill in the details of the player you would like to exchange with.")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_ExchangeRequest__["a" /* default */], {
        targetUser: this.state.userSelected,
        userName: this.state.userName,
        onExchangeRequestSubmitSuccess: this.onExchangeRequestSubmitSuccess,
        userSelected: this.state.userSelected,
        lettersAvailable: this.state.lettersAssigned,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      })))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "2713142477",
        css: "#wrapper.jsx-2713142477{padding-left:250px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-2713142477{margin-left:-250px;left:250px;width:250px;background:#000;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}#wrapper.active.jsx-2713142477{padding-left:0;}#wrapper.active.jsx-2713142477 #sidebar-wrapper.jsx-2713142477{left:0;}#page-content-wrapper.jsx-2713142477{width:100%;}.sidebar-nav.jsx-2713142477{position:absolute;top:0;width:250px;list-style:none;margin:0;padding:0;}.sidebar-nav.jsx-2713142477 li.jsx-2713142477{line-height:40px;text-indent:20px;}.sidebar-nav.jsx-2713142477 li.jsx-2713142477 a.jsx-2713142477{color:#999999;display:block;-webkit-text-decoration:none;text-decoration:none;padding-left:60px;}.sidebar-nav.jsx-2713142477 li.jsx-2713142477 a.jsx-2713142477 span.jsx-2713142477:before{position:absolute;left:0;color:#41484c;text-align:center;width:20px;line-height:18px;}.sidebar-nav.jsx-2713142477 li.jsx-2713142477 a.jsx-2713142477:hover,.sidebar-nav.jsx-2713142477 li.active.jsx-2713142477{color:#fff;background:rgba(255,255,255,0.2);-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-2713142477 li.jsx-2713142477 a.jsx-2713142477:active,.sidebar-nav.jsx-2713142477 li.jsx-2713142477 a.jsx-2713142477:focus{-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-2713142477>.sidebar-brand.jsx-2713142477{height:65px;line-height:60px;font-size:18px;}.sidebar-nav.jsx-2713142477>.sidebar-brand.jsx-2713142477 a.jsx-2713142477{color:#999999;}.sidebar-nav.jsx-2713142477>.sidebar-brand.jsx-2713142477 a.jsx-2713142477:hover{color:#fff;background:none;}.inset.jsx-2713142477{padding:20px;}@media (max-width:767px){#wrapper.jsx-2713142477{padding-left:0;}#sidebar-wrapper.jsx-2713142477{left:0;}#wrapper.active.jsx-2713142477{position:relative;left:250px;}#wrapper.active.jsx-2713142477 #sidebar-wrapper.jsx-2713142477{left:250px;width:250px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#menu-toggle.jsx-2713142477{display:inline-block;}.inset.jsx-2713142477{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4U2dDLEFBRzBDLEFBS0EsQUFhSixBQUlSLEFBSUksQUFJTyxBQVNELEFBS0gsQUFPSSxBQVVQLEFBT1UsQUFJVCxBQU1FLEFBSUgsQUFLRSxBQU1FLEFBSVIsQUFJVyxBQUtQLEFBTVUsQUFJUixPQTdGZixBQTJFQSxJQXZFQSxBQW1DbUMsQUFxQmpCLEFBd0JKLENBbENLLENBZW5CLEFBNkJBLENBeEVnQixBQWtDaEIsQ0E1REEsQUEyRUEsRUF0RG1CLENBVFgsQUFxQkMsQUFrREksQ0FyR2lCLEFBS2pCLEVBMkdiLEVBTDhCLENBNUVoQixDQXFCRSxFQStCaEIsQ0F0Q3VCLENBNEJOLEFBNkJqQixDQWhHYyxJQWtDZCxFQVJrQixHQXFCRSxHQTlDRixFQXVESyxBQVl2QixNQU5BLEVBbkNXLEtBcUJFLENBOUNJLEdBMEJMLE9BcUJPLEdBcEJuQixFQTFCYyxLQXFDTSxLQTdDcEIsRUFTa0IsQUE4Q2xCLEVBb0RBLE9BN0NBLEVBaEJBLEtBcENlLGFBQ2UsZ0VBQ2hCLFlBQ2QiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6XFxpY2VCcmVha2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xyXG5pbXBvcnQgU2lnbkluIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZ25JblwiXHJcbmltcG9ydCBzdHJpbmdzIGZyb20gJy4uL2NvbnN0YW50cy9zdHJpbmdzJ1xyXG5pbXBvcnQge25vdGlmeX0gZnJvbSBcInJlYWN0LW5vdGlmeS10b2FzdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xyXG5pbXBvcnQgZW5kcG9pbnRzIGZyb20gJy4uL2NvbnN0YW50cy9lbmRwb2ludHMnXHJcbmltcG9ydCBjcmVkZW50aWFscyBmcm9tICcuLi9jb25zdGFudHMvY3JlZGVudGlhbHMnXHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmdTY3JlZW5cIlxyXG5pbXBvcnQgTGV0dGVyQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvTGV0dGVyc0NvbXBvbmVudCdcclxuaW1wb3J0IEV4Y2hhbmdlUmVxdWVzdCBmcm9tICcuLi9jb21wb25lbnRzL0V4Y2hhbmdlUmVxdWVzdCdcclxuaW1wb3J0IEV4Y2hhbmdlUmVzcG9uc2UgZnJvbSAnLi4vY29tcG9uZW50cy9FeGNoYW5nZVJlc3BvbnNlJ1xyXG5pbXBvcnQgV2FpdGluZ0ZvclZlcmlmaWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1dhaXRpbmdGb3JWZXJpZmljYXRpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFBhZ2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBhY3RpdmVVc2VycyA6IFtdLFxyXG4gICAgICAgICAgICBsZXR0ZXJzQXNzaWduZWQ6IFtdLFxyXG4gICAgICAgICAgICB1c2VyU2VsZWN0ZWQ6ICcnLFxyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiBmYWxzZSxcclxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yR2FtZVRvU3RhcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNpZ25lZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgbGV0dGVyVG9HaXZlOiAnJyxcclxuICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZ2FtZVN0YXJ0ZWRDaGVja2VkOiBmYWxzZVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5leGNoYW5nZVJlcXVlc3QgPSB7fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuc2V0dXBQdXNoZXIoKVxyXG4gICAgICAgIHRoaXMuY2hlY2tHYW1lU3RhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwUHVzaGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcihjcmVkZW50aWFscy5QVVNIRVJfQVBQX0tFWSwge1xyXG4gICAgICAgICAgICBjbHVzdGVyOiBjcmVkZW50aWFscy5QVVNIRVJfQVBQX0NMVVNURVIsXHJcbiAgICAgICAgICAgIGVuY3J5cHRlZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUoc3RyaW5ncy5QVVNIRVJfQ0hBTk5FTCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX1VTRVJfTElTVF9VUERBVEVfRVZFTlQsICh1c2VycykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIG5ldyB1c2VyIGxpc3QgZnJvbSBQdXNoZXI6IFwiK3VzZXJzKVxyXG4gICAgICAgICAgICB2YXIgbmV3QWN0aXZlVXNlcnMgPSB1c2Vycy5tYXAodXNlciA9PiB1c2VyLm5hbWUpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlcnM6IG5ld0FjdGl2ZVVzZXJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX05FV19FWENIQU5HRV9SRVFVRVNUX0VWRU5ULCAoZXhjaGFuZ2VSZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgbmV3IGV4Y2hhbmdlIHJlcXVlc3Q6IFwiK0pTT04uc3RyaW5naWZ5KGV4Y2hhbmdlUmVxdWVzdCkpXHJcbiAgICAgICAgICAgIGlmKGV4Y2hhbmdlUmVxdWVzdC5yZXNwb25kX3VzZXIgPT0gdGhpcy5zdGF0ZS51c2VyTmFtZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV4Y2hhbmdlIHJlcXVlc3QgaXMgZm9yIG1lLlwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5leGNoYW5nZVJlcXVlc3QgPSBleGNoYW5nZVJlcXVlc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuRVhDSEFOR0VfQ09NUExFVEVEX0VWRU5ULCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZihkYXRhLnJlcXVlc3RfdXNlciA9PSB0aGlzLnN0YXRlLnVzZXJOYW1lKXtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KHN0cmluZ3MuTk9USUZJQ0FUSU9OX0VYQ0hBTkdFX1NVQ0NFU1NGVUwsIFwiY3VzdG9tXCIsIDUwMDAsIHsgYmFja2dyb3VuZDogJyMwRTE3MTcnLCB0ZXh0OiBcIiNGRkZGRkZcIiB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXhjaGFuZ2UgcmVxdWVzdCBoYXMgY29tcGxldGVkOiBcIitKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGV0dGVycyBhc3NpZ25lZCBhcmUgbm93IFwiK3RoaXMuc3RhdGUubGV0dGVyc0Fzc2lnbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZUFsbEdhbWVJbmZvcm1hdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoc3RyaW5ncy5QVVNIRVJfR0FNRV9TVEFSVF9FVkVOVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgaGFzIHN0YXJ0ZWQuLi5sb2FkaW5nIG1haW4gcGFnZS4uLlwiKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzV2FpdGluZ0ZvckdhbWVUb1N0YXJ0OiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnJldHJpZXZlQWxsR2FtZUluZm9ybWF0aW9uKClcclxuICAgICAgICAgICAgbm90aWZ5LnNob3coc3RyaW5ncy5OT1RJRklDQVRJT05fR0FNRV9CRUdVTiwgXCJjdXN0b21cIiwgNTAwMCwgeyBiYWNrZ3JvdW5kOiAnIzBFMTcxNycsIHRleHQ6IFwiI0ZGRkZGRlwiIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrR2FtZVN0YXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHV0aWxzLmNoZWNrQXV0aGVudGljYXRlZCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNpZ25lZEluOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdXRpbHMuY2hlY2tHYW1lU3RhcnRlZCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzV2FpdGluZ0ZvckdhbWVUb1N0YXJ0OiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnJldHJpZXZlQWxsR2FtZUluZm9ybWF0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhcnRlZENoZWNrZWQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhcnRlZENoZWNrZWQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHJpZXZlQWxsR2FtZUluZm9ybWF0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmV0cml2ZVVzZXJOYW1lKClcclxuICAgICAgICB0aGlzLnJldHJpdmVMZXR0ZXJzKClcclxuICAgICAgICB0aGlzLnJldHJpZXZlQWN0aXZlVXNlcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbFdhaXRpbmdGb3JWZXJpZmljYXRpb24gPSAocikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXhjaGFuZ2VSZXF1ZXN0U3VibWl0U3VjY2VzcyA9IChsZXR0ZXJUb0dpdmUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnk6IHRydWUsXHJcbiAgICAgICAgICAgIGxldHRlclRvR2l2ZTogbGV0dGVyVG9HaXZlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkV4Y2hhbmdlUmVzcG9uc2VTdWJtaXRTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIG5vdGlmeS5zaG93KHN0cmluZ3MuTk9USUZJQ0FUSU9OX0VYQ0hBTkdFX1NVQ0NFU1NGVUwsIFwiY3VzdG9tXCIsIDUwMDAsIHsgYmFja2dyb3VuZDogJyMwRTE3MTcnLCB0ZXh0OiBcIiNGRkZGRkZcIiB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHk6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnJldHJpdmVMZXR0ZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgdXNlciBzZWxlY3RlZCB0byBcIitlLnRhcmdldC5pZClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlclNlbGVjdGVkOiB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJzW2UudGFyZ2V0LmlkXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0cml2ZUxldHRlcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiBlbmRwb2ludHMuQVBJX0dFVF9BU1NJR05FRF9MRVRURVJTXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvdCBsZXR0ZXJzIGFzc2lnbmVkIGFzICcrcmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJzQXNzaWduZWQgOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZUFjdGl2ZVVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogZW5kcG9pbnRzLkFQSV9HRVRfQUxMX0FDVElWRV9VU0VSU1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVVzZXJzID0gcmVzcG9uc2UuZGF0YS5tYXAoc2Vzc2lvbiA9PiBzZXNzaW9uLnVzZXIubmFtZSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhcnNlZCBhY3RpdmUgdXNlcnMgYXMgJythY3RpdmVVc2VycylcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVVc2VycyA6IGFjdGl2ZVVzZXJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXRyaXZlVXNlck5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiBlbmRwb2ludHMuQVBJX0dFVF9TRVNTSU9OXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZS5kYXRhLnVzZXIgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCB1c2VybmFtZSBhcyAgJytyZXNwb25zZS5kYXRhLnVzZXIubmFtZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB1c2VyTmFtZSA6IHJlc3BvbnNlLmRhdGEudXNlci5uYW1lXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNpZ25JbiA9IChuYW1lLGJpcnRoZGF5LGZhdm91cml0ZUZvb2QsZGVzaHUpID0+IHtcclxuICAgICAgICBuYW1lID0gbmFtZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTaWduaW5nIGluLi4uXCIrbmFtZSlcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmw6IGVuZHBvaW50cy5BUElfTE9HSU5fVVNFUixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYmlydGhkYXk6IGJpcnRoZGF5LFxyXG4gICAgICAgICAgICAgICAgICAgIGZhdm91cml0ZUZvb2Q6IGZhdm91cml0ZUZvb2QsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaHU6IGRlc2h1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnJlc3VsdCA9PSAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbmVkSW46IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ25lZCBpbiBzdWNjZXNzZnVsXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5hdXRoZW50aWNhdGlvbkNoZWNrZWQgfHwgIXRoaXMuc3RhdGUuZ2FtZVN0YXJ0ZWRDaGVja2VkKVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBlbHNlIGlmKCF0aGlzLnN0YXRlLnNpZ25lZEluKVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWduSW4gb25TaWduSW49e3RoaXMub25TaWduSW59Lz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5pc1dhaXRpbmdGb3JHYW1lVG9TdGFydCAmJiB0aGlzLnN0YXRlLnNpZ25lZEluKVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nU2NyZWVuLz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnkpXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdhaXRpbmdGb3JWZXJpZmljYXRpb24gY2FuY2VsPXt0aGlzLmNhbmNlbFdhaXRpbmdGb3JWZXJpZmljYXRpb259Lz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5KVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3RoaXMuZXhjaGFuZ2VSZXF1ZXN0LnJlcXVlc3RfdXNlcn0gaGFzIHJlcXVlc3RlZCB0byBjb25uZWN0LlBsZWFzZSBmaWxsIGluIGhpcyBkZXRhaWxzIGJlbG93LjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEV4Y2hhbmdlUmVzcG9uc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VXNlcj17dGhpcy5leGNoYW5nZVJlcXVlc3QucmVxdWVzdF91c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZT17dGhpcy5leGNoYW5nZVJlcXVlc3QucmVxdWVzdF91c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkV4Y2hhbmdlUmVzcG9uc2VTdWJtaXRTdWNjZXNzPXt0aGlzLm9uRXhjaGFuZ2VSZXNwb25zZVN1Ym1pdFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU9e3RoaXMuc3RhdGUubGV0dGVyc0Fzc2lnbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNoYW5nZVJlcXVlc3Q9e3RoaXMuZXhjaGFuZ2VSZXF1ZXN0fS8+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2lkZWJhci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGlkPVwic3B5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXItbmF2IG5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hY3RpdmVVc2Vycy5tYXAoKHVzZXIsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgaWQ9e2luZGV4fSBjbGFzc05hbWU9XCJzaWRlYmFyLWJyYW5kXCIgb25DbGljaz17dGhpcy5vbkNsaWNrfT57dXNlcn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFnZS1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50IGluc2V0XCIgZGF0YS1zcHk9XCJzY3JvbGxcIiBkYXRhLXRhcmdldD1cIiNzcHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGV0dGVyQ29tcG9uZW50IHVzZXJOYW1lPXt0aGlzLnN0YXRlLnVzZXJOYW1lfSBsZXR0ZXJzQXNzaWduZWQ9e3RoaXMuc3RhdGUubGV0dGVyc0Fzc2lnbmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDonNTBweCcsbWFyZ2luQm90dG9tOic1MHB4J319IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZpbGwgaW4gdGhlIGRldGFpbHMgb2YgdGhlIHBsYXllciB5b3Ugd291bGQgbGlrZSB0byBleGNoYW5nZSB3aXRoLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4Y2hhbmdlUmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRVc2VyPXt0aGlzLnN0YXRlLnVzZXJTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU9e3RoaXMuc3RhdGUudXNlck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXhjaGFuZ2VSZXF1ZXN0U3VibWl0U3VjY2Vzcz17dGhpcy5vbkV4Y2hhbmdlUmVxdWVzdFN1Ym1pdFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3RlZD17dGhpcy5zdGF0ZS51c2VyU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU9e3RoaXMuc3RhdGUubGV0dGVyc0Fzc2lnbmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjd3JhcHBlci5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIuYWN0aXZlICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhIHNwYW46YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQxNDg0YztcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkgYTpob3ZlcixcclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGE6YWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmluc2V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo3NjdweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAjd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjd3JhcHBlci5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjd3JhcHBlci5hY3RpdmUgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjbWVudS10b2dnbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmluc2V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXX0= */\n/*@ sourceURL=pages\\index.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_6__components_Page__["a" /* default */]);



/***/ }),

/***/ "./utils/utils.js":
/***/ (function(module, exports, __webpack_require__) {

var axios = __webpack_require__("axios");

var endpoints = __webpack_require__("./constants/endpoints.js");

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
          if (session.hasOwnProperty('user')) return session.user.name == targetUser && session.user.birthday == exchange.birthday && session.user.favouriteFood == exchange.favouriteFood && session.user.deshu == exchange.deshu;else return false;
        });
        console.log("filtered sessions " + JSON.stringify(filteredSessions));
        if (filteredSessions.length > 0) resolve(true);else reject(false);
      });
    });
  }
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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