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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_strings__ = __webpack_require__("./constants/strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_strings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__constants_strings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_notificationUtils__ = __webpack_require__("./utils/notificationUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_notificationUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utils_notificationUtils__);
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
          __WEBPACK_IMPORTED_MODULE_3__utils_notificationUtils___default.a.showNotification(__WEBPACK_IMPORTED_MODULE_2__constants_strings___default.a.NOTIFICATION_INCOMPLETE_DETAILS);
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label-general",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Name")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label-general",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, this.props.targetUser)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label-general",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Deshu"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        value: this.state.deshu,
        onChange: this.handleDeshuChange,
        className: "input-general",
        name: "deshu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        className: "option-general",
        disabled: true,
        value: "default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Select his/her deshu."), __WEBPACK_IMPORTED_MODULE_1__data_dataSource___default.a.DESHU_OPTIONS.map(function (deshu) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
          className: "option-general",
          value: deshu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, deshu);
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label-general",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Birthday"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "date",
        className: "input-general",
        name: "birthday",
        value: this.state.birthday,
        onChange: this.handleBirthdayChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label-general",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "Favourite Food"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        value: this.state.favouriteFood,
        className: "input-general",
        name: "favouriteFood",
        onChange: this.handleFavouriteFoodChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        className: "option-general",
        disabled: true,
        value: "default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "Select his/her favourite food"), __WEBPACK_IMPORTED_MODULE_1__data_dataSource___default.a.FOOD_OPTIONS.map(function (foodOption) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
          className: "option-general",
          value: foodOption,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, foodOption);
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label-general",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "Letter To Exchange Away"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        className: "input-general",
        name: "letterToExchange",
        onChange: this.handleLetterToExchangeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        className: "option-general",
        disabled: true,
        selected: true,
        value: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "Select a letter to exchange away"), this.props.lettersAvailable.map(function (letter) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
          className: "option-general",
          value: letter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, /\S/.test(letter) ? letter : "Space");
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.submitForm,
        className: "btn-submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, "Submit")));
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
          _this.props.updateLoadingStatus(true);

          var exchangeRequest = new __WEBPACK_IMPORTED_MODULE_3__models_ExchangeEntity__["a" /* default */](request_user, respond_user, birthday, favouriteFood, deshu, letterToExchange, letterToReceive);
          console.log("ExchangeRequest: " + JSON.stringify(exchangeRequest));
          __WEBPACK_IMPORTED_MODULE_2__utils_gameUtils___default.a.sendExchangeRequest(exchangeRequest).then(function (succeed) {
            _this.props.onExchangeRequestSubmitSuccess(_this.state.letterToExchange, exchangeRequest);

            _this.props.updateExchangeRequest(exchangeRequest);

            _this.props.updateLoadingStatus(false);
          }, function (errMessage) {
            console.log("testttt");

            _this.props.updateLoadingStatus(false);

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
          _this.props.updateLoadingStatus(true);

          var exchangeResponse = new __WEBPACK_IMPORTED_MODULE_3__models_ExchangeEntity__["a" /* default */](request_user, respond_user, birthday, favouriteFood, deshu, letterToExchange, letterToReceive);
          console.log("ExchangeResponse: " + JSON.stringify(exchangeResponse));
          __WEBPACK_IMPORTED_MODULE_2__utils_gameUtils___default.a.sendExchangeResponse(exchangeResponse).then(function (exchResponse) {
            _this.props.updateLoadingStatus(false);

            _this.props.onExchangeResponseSubmitSuccess(exchResponse);
          }, function (errMessage) {
            __WEBPACK_IMPORTED_MODULE_4__utils_notificationUtils___default.a.showNotification(errMessage);

            _this.props.updateLoadingStatus(false);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_notify_toast__ = __webpack_require__("react-notify-toast");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_notify_toast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_notify_toast__);
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-709299620"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width,height=device-height",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-709299620"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-709299620"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
        integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-709299620"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://unpkg.com/react-tabs@2/style/react-tabs.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-709299620"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-709299620"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-709299620"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-709299620"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-709299620"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_notify_toast___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), this.props.children)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "709299620",
        css: "#main{background:linear-gradient(#07466F,#26EFB4);position:absolute;top:0;left:0;height:100%;width:100%;max-height:100%;max-width:100%;overflow-x:hidden;}.container2{position:relative;}.loading{position:absolute;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:7px;width:100%;height:100%;margin-top:10%;}.wrapper{background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:7px;width:100%;height:100%;}.form-group-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;padding:7px;}.center-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;padding:7px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.label-general{color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;}.option-general{color:black;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;}.input-general{background:transparent;border:1px solid #fff;color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;padding:7px;width:100%;}.list-item-general{background:transparent;border:1px solid #fff;color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;padding:7px;width:100%;list-style:none;}.btn{background:transparent;box-shadow:none;border:1px solid #fff;-webkit-transition:.3s all ease;transition:.3s all ease;color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;width:80px;height:100%;}.btn-submit{background:transparent;box-shadow:none;border:1px solid #fff;-webkit-transition:.3s all ease;transition:.3s all ease;color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;width:80px;padding:7px;}.btn-cancel{background:transparent;box-shadow:none;border:1px solid #fff;-webkit-transition:.3s all ease;transition:.3s all ease;color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;width:80px;height:50px;padding:7px;margin-top:15px;}.App-logo{-webkit-animation:App-logo-spin infinite 20s linear;animation:App-logo-spin infinite 20s linear;height:80px;}@-webkit-keyframes App-logo-spin{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes App-logo-spin{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQm1DLEFBR3FFLEFBVzFCLEFBR0EsQUFZSyxBQVNWLEFBTUEsQUFPRCxBQU1BLEFBTWEsQUFVQSxBQVdELEFBWUEsQUFZQSxBQWNrQixBQUlmLEFBQ0EsWUEzRWEsQUFNQSxNQTNDNUMsQUFHMkIsS0FZVixBQWtDVSxBQVVBLEFBV04sQUFZQSxBQVlBLGdCQXZCTSxBQVlBLEFBWUEsRUEzRlYsR0FmSyxDQTZETCxBQVVBLE1BdEJFLEFBTUEsTUFPMEIsQUFVQSxJQVdoQixBQVlBLEFBWUEsQ0ExR25CLElBaURjLEFBTUEsRUF0RGIsTUFpQ2UsQUFNQSxDQXRDWCxNQXVIaUIsS0F2RWhDLEFBTUEsQ0FyRGMsQUF1SGtCLFNBNURaLEFBVUEsQUE4Q04sQ0E1RlksQ0F0QlAsVUFtSG5CLEdBeER5QixBQVVBLEdBcEVQLENBVVEsRUFvRVQsQUFZQSxBQVlBLFlBckdLLEFBOEV1QixBQVlBLEFBWUEsRUE1QzVCLEFBVUEsWUFURCxBQVVBLElBcEVoQixLQTRCZSxBQU1BLEVBeUJmLEFBVXFCLFNBeENMLEFBTUEsS0EyQ0ksQUFZQSxBQVlBLEVBaENwQixLQWxEdUIsQUFVdkIsQUFNdUIsUUEyQ0UsQUFZQSxBQVlBLFVBOUZFLFVBdUVYLEFBWUEsQUFZQSxXQXZCQyxBQVlBLEFBWUEsWUF2QmpCLEFBWUEsQUFZaUIsWUFDSSxnQkFDckIsY0F2RmdCLEFBZ0JoQixZQWZlLFdBQ0MsQ0FiTyxXQWN2QixrRkFiZ0IsWUFDRCxXQUNDLFlBQ0UsZUFDbEIiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkU6XFxpY2VCcmVha2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3JlYWN0c3RyYXAnXHJcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCJyZWFjdC1ub3RpZnktdG9hc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaGVpZ2h0PWRldmljZS1oZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xLCB1c2VyLXNjYWxhYmxlPTBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjMuNy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1CVllpaVNJRmVLMWRHbUpSQWt5Y3VIQUhSZzMyT21VY3d3N29uM1JZZGc0VmErUG1TVHN6L0s2OHZiZEVqaDR1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LXRhYnNAMi9zdHlsZS9yZWFjdC10YWJzLmNzc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIi8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAjbWFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDc0NjZGLCMyNkVGQjQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lcjIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmZvcm0tZ3JvdXAtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNlbnRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubGFiZWwtZ2VuZXJhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm9wdGlvbi1nZW5lcmFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW5wdXQtZ2VuZXJhbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxpc3QtaXRlbS1nZW5lcmFse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5idG4tc3VibWl0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1jYW5jZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkFwcC1sb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogQXBwLWxvZ28tc3BpbiBpbmZpbml0ZSAyMHMgbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIEFwcC1sb2dvLXNwaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8qeyBib3JkZXI6MnB4IHNvbGlkICNDRDE4MjEgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */\n/*@ sourceURL=components\\Layout.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



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

          _this.props.onGameCompleted();

          window.alert("You have completed the game!");
          window.location.href = '/leaderboard';
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
          lineNumber: 72
        },
        className: "jsx-232204293"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "instructions2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        className: "jsx-232204293" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: "jsx-232204293" + " " + "label-general"
      }, "To complete the game, click on the boxes below to form your username: ", this.props.userName)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "playerBirthday",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-232204293" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-232204293" + " " + "label-general"
      }, "Your Deshu: ", this.props.deshu)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "playerBirthday",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: "jsx-232204293" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-232204293" + " " + "label-general"
      }, "Your Birthday: ", this.props.birthday)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "playerBirthday",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: "jsx-232204293" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        className: "jsx-232204293" + " " + "label-general"
      }, "Your Favourite Food: ", this.props.favouriteFood)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "instructions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-232204293" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-232204293" + " " + "label-general"
      }, "To get the letters you need, click a player on the left to begin exchanging letters with him/her.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-232204293" + " " + "form-group-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        className: "jsx-232204293" + " " + "pre-general"
      }, this.state.lettersUsed.join(' ')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.removeOneCharFromLettersUsed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-232204293" + " " + "btn-back"
      }, "Backspace")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-232204293" + " " + "letter-available"
      }, this.state.lettersAvailable.map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          value: index,
          onClick: _this2.handleLetterSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          className: "jsx-232204293" + " " + "btn-letter"
        }, /\S/.test(letter) ? letter : "Space");
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "232204293",
        css: ".letter-available.jsx-232204293{padding:7px;}#instructions.jsx-232204293{margin-bottom:15px;}#instructions2.jsx-232204293{margin-bottom:15px;}.pre-general.jsx-232204293{color:black;background:transparent;border:0px;font-size:20px;}.btn-back.jsx-232204293{background:transparent;box-shadow:none;border:1px solid #fff;-webkit-transition:.3s all ease;transition:.3s all ease;color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;width:100px;padding:7px;height:50px;}.btn-letter.jsx-232204293{background:transparent;box-shadow:none;border:1px solid #fff;-webkit-transition:.3s all ease;transition:.3s all ease;color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;width:70px;height:100%;padding:7px;margin-right:20px;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExldHRlcnNDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0c0QixBQUcyQyxBQUdPLEFBR0EsQUFHYixBQU1ZLEFBYUEsWUEzQjVCLEFBUzJCLE9BTjNCLEFBR0EsSUFTcUIsQUFhQSxZQWxCTixJQU1ZLEFBYUEsT0FsQlIsZUFDbkIsQUFLNkIsQUFhQSx3REFaWixBQWFBLFlBWjRCLEFBYUEsdUNBWnpCLEFBYUEsZUFaSyxBQWFBLG9CQVpSLEFBYUQsV0FDQyxDQWJBLFdBY0EsQ0FiQSxXQWNNLENBYnZCLGlCQWNxQixnQkFDckIiLCJmaWxlIjoiY29tcG9uZW50c1xcTGV0dGVyc0NvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJFOlxcaWNlQnJlYWtlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGdhbWVVdGlscyBmcm9tIFwiLi4vdXRpbHMvZ2FtZVV0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXR0ZXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsZXR0ZXJzVXNlZDogW10sXHJcbiAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU6IHByb3BzLmxldHRlcnNBc3NpZ25lZC5zbGljZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGV0dGVyIGNvbXBvbmVudCB3aWxsIHJlY2VpdmUgcHJvcHNcIilcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbGV0dGVyc1VzZWQ6IEFycmF5LmFwcGx5KG51bGwse2xlbmd0aDogbmV3UHJvcHMubGV0dGVyc0Fzc2lnbmVkLmxlbmd0aH0pLm1hcChmdW5jdGlvbigpIHsgcmV0dXJuICctJzsgfSksXHJcbiAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU6IG5ld1Byb3BzLmxldHRlcnNBc3NpZ25lZC5zbGljZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVMZXR0ZXJTZWxlY3RlZCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUYXJnZXQgdmFsdWUgaXNcIitlLnRhcmdldC52YWx1ZStcIi5cIilcclxuICAgICAgICB2YXIgbGV0dGVyc1VzZWQgPSB0aGlzLnN0YXRlLmxldHRlcnNVc2VkXHJcbiAgICAgICAgdmFyIGxldHRlcnNBdmFpbGFibGUgPSB0aGlzLnN0YXRlLmxldHRlcnNBdmFpbGFibGVcclxuICAgICAgICBsZXR0ZXJzVXNlZFtsZXR0ZXJzVXNlZC5pbmRleE9mKCctJyldID0gdGhpcy5zdGF0ZS5sZXR0ZXJzQXZhaWxhYmxlW2UudGFyZ2V0LnZhbHVlXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGV0dGVycyB1c2VkIGFyZSBub3cgXCIrbGV0dGVyc1VzZWQuam9pbignICcpKVxyXG4gICAgICAgIGxldHRlcnNBdmFpbGFibGUuc3BsaWNlKGUudGFyZ2V0LnZhbHVlLCAxKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsZXR0ZXJzVXNlZDogbGV0dGVyc1VzZWQsXHJcbiAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU6IGxldHRlcnNBdmFpbGFibGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuaGFuZGxlTGV0dGVyc0NoYW5nZWQoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZU9uZUNoYXJGcm9tTGV0dGVyc1VzZWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHZhciBsZXR0ZXJzVXNlZCA9IHRoaXMuc3RhdGUubGV0dGVyc1VzZWRcclxuICAgICAgICB2YXIgaW5kZXggPSBsZXR0ZXJzVXNlZC5pbmRleE9mKCctJylcclxuICAgICAgICBpZiAoaW5kZXggIT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgbGV0dGVyc1VzZWQgPSB0aGlzLnN0YXRlLmxldHRlcnNVc2VkXHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXJzQXZhaWxhYmxlID0gdGhpcy5zdGF0ZS5sZXR0ZXJzQXZhaWxhYmxlXHJcbiAgICAgICAgICAgIHZhciBpbmRleFRvQmVSZW1vdmVkID0gMFxyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT0gLTEpXHJcbiAgICAgICAgICAgICAgICBpbmRleFRvQmVSZW1vdmVkID0gaW5kZXggLSAxXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGluZGV4VG9CZVJlbW92ZWQgPSBsZXR0ZXJzVXNlZC5sZW5ndGgtMVxyXG4gICAgICAgICAgICB2YXIgbGV0dGVyUmVtb3ZlZCA9IGxldHRlcnNVc2VkW2luZGV4VG9CZVJlbW92ZWRdXHJcbiAgICAgICAgICAgIGxldHRlcnNVc2VkW2luZGV4VG9CZVJlbW92ZWRdID0gJy0nXHJcbiAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGUucHVzaChsZXR0ZXJSZW1vdmVkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGxldHRlcnNVc2VkOiBsZXR0ZXJzVXNlZCxcclxuICAgICAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU6IGxldHRlcnNBdmFpbGFibGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVMZXR0ZXJzQ2hhbmdlZCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVMZXR0ZXJzQ2hhbmdlZCA9ICgpID0+IHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmxldHRlcnNVc2VkLmpvaW4oJycpID09PSB0aGlzLnByb3BzLnVzZXJOYW1lICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICBnYW1lVXRpbHMuY29tcGxldGVHYW1lKCkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25HYW1lQ29tcGxldGVkKClcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIllvdSBoYXZlIGNvbXBsZXRlZCB0aGUgZ2FtZSFcIilcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPScvbGVhZGVyYm9hcmQnXHJcbiAgICAgICAgICAgIH0sZnVuY3Rpb24oZXJyKXt9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW5zdHJ1Y3Rpb25zMlwiIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtZ2VuZXJhbFwiPlRvIGNvbXBsZXRlIHRoZSBnYW1lLCBjbGljayBvbiB0aGUgYm94ZXMgYmVsb3cgdG8gZm9ybSB5b3VyIHVzZXJuYW1lOiB7dGhpcy5wcm9wcy51c2VyTmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGxheWVyQmlydGhkYXlcIiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWdlbmVyYWxcIj5Zb3VyIERlc2h1OiB7dGhpcy5wcm9wcy5kZXNodX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGxheWVyQmlydGhkYXlcIiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWdlbmVyYWxcIj5Zb3VyIEJpcnRoZGF5OiB7dGhpcy5wcm9wcy5iaXJ0aGRheX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGxheWVyQmlydGhkYXlcIiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWdlbmVyYWxcIj5Zb3VyIEZhdm91cml0ZSBGb29kOiB7dGhpcy5wcm9wcy5mYXZvdXJpdGVGb29kfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnN0cnVjdGlvbnNcIiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWdlbmVyYWxcIj5UbyBnZXQgdGhlIGxldHRlcnMgeW91IG5lZWQsIGNsaWNrIGEgcGxheWVyIG9uIHRoZSBsZWZ0IHRvIGJlZ2luIGV4Y2hhbmdpbmcgbGV0dGVycyB3aXRoIGhpbS9oZXIuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwicHJlLWdlbmVyYWxcIj57dGhpcy5zdGF0ZS5sZXR0ZXJzVXNlZC5qb2luKCcgJyl9PC9wcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnJlbW92ZU9uZUNoYXJGcm9tTGV0dGVyc1VzZWR9IGNsYXNzTmFtZT1cImJ0bi1iYWNrXCI+QmFja3NwYWNlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyLWF2YWlsYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxldHRlcnNBdmFpbGFibGUubWFwKChsZXR0ZXIsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gdmFsdWU9e2luZGV4fSBvbkNsaWNrPXt0aGlzLmhhbmRsZUxldHRlclNlbGVjdGVkfSBjbGFzc05hbWU9XCJidG4tbGV0dGVyXCI+ey9cXFMvLnRlc3QobGV0dGVyKT9sZXR0ZXI6XCJTcGFjZVwifTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmxldHRlci1hdmFpbGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNpbnN0cnVjdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAjaW5zdHJ1Y3Rpb25zMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcmUtZ2VuZXJhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5idG4tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnRuLWxldHRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyp7IGJvcmRlcjoycHggc29saWQgI0NEMTgyMSB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=components\\LettersComponent.js */"
      }));
    }
  }]);

  return LetterComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/Loading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_spinners__);
var _jsxFileName = "E:\\iceBreaker\\components\\Loading.js";


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
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-604654061"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-604654061"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-604654061" + " " + "container2"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-604654061" + " " + "loading"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_spinners__["BounceLoader"], {
        sizeUnit: "px",
        size: 150,
        color: '#123abc',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "604654061",
        css: "#main{background:linear-gradient(#07466F,#26EFB4);position:absolute;top:0;left:0;height:100%;width:100%;max-height:100%;max-width:100%;overflow-x:hidden;}.container2{position:relative;}.loading{position:absolute;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:7px;width:100%;height:100%;margin-top:50%;}.wrapper{background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:7px;width:100%;height:100%;}.form-group-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;padding:7px;}.center-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;padding:7px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.label-general{color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;}.option-general{color:black;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;}.input-general{background:transparent;border:1px solid #fff;color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;padding:7px;width:100%;}.list-item-general{background:transparent;border:1px solid #fff;color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;padding:7px;width:100%;list-style:none;}.btn{background:transparent;box-shadow:none;border:1px solid #fff;-webkit-transition:.3s all ease;transition:.3s all ease;color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;width:80px;height:100%;}.btn-submit{background:transparent;box-shadow:none;border:1px solid #fff;-webkit-transition:.3s all ease;transition:.3s all ease;color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;width:80px;padding:7px;}.btn-cancel{background:transparent;box-shadow:none;border:1px solid #fff;-webkit-transition:.3s all ease;transition:.3s all ease;color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;width:80px;height:100%;padding:7px;margin-top:15px;}.App-logo{-webkit-animation:App-logo-spin infinite 20s linear;animation:App-logo-spin infinite 20s linear;height:80px;}@-webkit-keyframes App-logo-spin{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes App-logo-spin{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExvYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JtQyxBQUdxRSxBQVcxQixBQUdBLEFBWUssQUFTVixBQU1BLEFBT0QsQUFNQSxBQU1hLEFBVUEsQUFXRCxBQVlBLEFBWUEsQUFja0IsQUFJZixBQUNBLFlBM0VhLEFBTUEsTUEzQzVDLEFBRzJCLEtBWVYsQUFrQ1UsQUFVQSxBQVdOLEFBWUEsQUFZQSxnQkF2Qk0sQUFZQSxBQVlBLEVBM0ZWLEdBZkssQ0E2REwsQUFVQSxNQXRCRSxBQU1BLE1BTzBCLEFBVUEsSUFXaEIsQUFZQSxBQVlBLENBMUduQixJQWlEYyxBQU1BLEVBdERiLE1BaUNlLEFBTUEsQ0F0Q1gsTUF1SGlCLEtBdkVoQyxBQU1BLENBckRjLEFBdUhrQixTQTVEWixBQVVBLEFBOENOLENBNUZZLENBdEJQLFVBbUhuQixHQXhEeUIsQUFVQSxHQXBFUCxDQVVRLEVBb0VULEFBWUEsQUFZQSxZQXJHSyxBQThFdUIsQUFZQSxBQVlBLEVBNUM1QixBQVVBLFlBVEQsQUFVQSxJQXBFaEIsS0E0QmUsQUFNQSxFQXlCZixBQVVxQixTQXhDTCxBQU1BLEtBMkNJLEFBWUEsQUFZQSxFQWhDcEIsS0FsRHVCLEFBVXZCLEFBTXVCLFFBMkNFLEFBWUEsQUFZQSxVQTlGRSxVQXVFWCxBQVlBLEFBWUEsV0F2QkMsQUFZQSxBQVlBLFlBdkJqQixBQVlBLEFBWWlCLFlBQ0ksZ0JBQ3JCLGNBdkZnQixBQWdCaEIsWUFmZSxXQUNDLENBYk8sV0FjdkIsa0ZBYmdCLFlBQ0QsV0FDQyxZQUNFLGVBQ2xCIiwiZmlsZSI6ImNvbXBvbmVudHNcXExvYWRpbmcuanMiLCJzb3VyY2VSb290IjoiRTpcXGljZUJyZWFrZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3JlYWN0c3RyYXAnXHJcbmltcG9ydCB7IEJvdW5jZUxvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm91bmNlTG9hZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVVbml0PXtcInB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9eycjMTIzYWJjJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgICNtYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNzQ2NkYsIzI2RUZCNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxvYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2VudGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5sYWJlbC1nZW5lcmFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uLWdlbmVyYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnB1dC1nZW5lcmFse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubGlzdC1pdGVtLWdlbmVyYWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1zdWJtaXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnRuLWNhbmNlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuQXBwLWxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBBcHAtbG9nby1zcGluIGluZmluaXRlIDIwcyBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgQXBwLWxvZ28tc3BpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyp7IGJvcmRlcjoycHggc29saWQgI0NEMTgyMSB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuIl19 */\n/*@ sourceURL=components\\Loading.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/LoadingScreen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_gameUtils__ = __webpack_require__("./utils/gameUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_gameUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utils_gameUtils__);
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
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));
    _this.state = {
      userName: "",
      birthday: "",
      favouriteFood: "",
      deshu: ""
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_3__utils_gameUtils___default.a.getUserInfo().then(function (user) {
        console.log("Retrieved User Object " + JSON.stringify(user));

        _this2.setState({
          userName: user.name,
          birthday: user.birthday,
          favouriteFood: user.favouriteFood,
          deshu: user.deshu
        });
      }, function (err) {});
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-1079803651" + " " + "wrapper"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-1079803651" + " " + "group-container"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-1079803651" + " " + "label-title"
      }, "Please wait for the game master to start the game."), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-1079803651" + " " + "label-general"
      }, "Name: ", this.state.userName), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-1079803651" + " " + "label-general"
      }, "Deshu: ", this.state.deshu), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-1079803651" + " " + "label-general"
      }, "Birthday: ", this.state.birthday), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-1079803651" + " " + "label-general"
      }, "Favourite Food: ", this.state.favouriteFood), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: "/static/logo.svg",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-1079803651" + " " + "App-logo"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-1079803651" + " " + "form-group-container"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        onClick: function onClick() {
          __WEBPACK_IMPORTED_MODULE_3__utils_gameUtils___default.a.logoutUser().then(function (succeed) {
            _this3.props.onSignOut();
          }, function (failed) {});
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-1079803651" + " " + "btn-cancel"
      }, "Unregister"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1079803651",
        css: "#wrapper.jsx-1079803651{background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:7px;width:100%;height:100%;}.group-container.jsx-1079803651{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;padding:7px;}.label-title.jsx-1079803651{color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;text-align:center;margin-bottom:20px;}.label-general.jsx-1079803651{color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;text-align:center;}.btn.jsx-1079803651{background:transparent;box-shadow:none;border:1px solid #fff;-webkit-transition:.3s all ease;transition:.3s all ease;color:white;font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;width:100px;height:100%;}.form-group-container.jsx-1079803651{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExvYWRpbmdTY3JlZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0Q0QixBQUdvRCxBQVNWLEFBTUQsQUFRQSxBQU9ZLEFBWUwsWUExQnFCLEFBUUEsV0F2QjNCLEFBOEJJLGdCQUNNLFlBZlIsQUFRQSxVQVFVLEtBZkwsQUFRQSxRQWhCRSxZQVNKLEFBUUEsT0FnQnRCLElBekMwQixPQWtCSCxBQVF2QixhQU1pQixNQWJqQixNQWM2Qyx1QkF4QjlCLFdBQ0MsS0F3QkksT0FqQ0csQUFVdkIsUUF3QnlCLG9CQUNSLFlBQ0EsWUFDakIseUNBcENnQixZQUNELFdBQ0MsWUFDaEIiLCJmaWxlIjoiY29tcG9uZW50c1xcTG9hZGluZ1NjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiJFOlxcaWNlQnJlYWtlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQuanMnXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGdhbWVVdGlscyBmcm9tIFwiLi4vdXRpbHMvZ2FtZVV0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB1c2VyTmFtZTogXCJcIixcclxuICAgICAgICAgICAgYmlydGhkYXk6IFwiXCIsXHJcbiAgICAgICAgICAgIGZhdm91cml0ZUZvb2Q6IFwiXCIsXHJcbiAgICAgICAgICAgIGRlc2h1OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgZ2FtZVV0aWxzLmdldFVzZXJJbmZvKCkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJldHJpZXZlZCBVc2VyIE9iamVjdCBcIitKU09OLnN0cmluZ2lmeSh1c2VyKSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYmlydGhkYXk6IHVzZXIuYmlydGhkYXksXHJcbiAgICAgICAgICAgICAgICBmYXZvdXJpdGVGb29kOiB1c2VyLmZhdm91cml0ZUZvb2QsXHJcbiAgICAgICAgICAgICAgICBkZXNodTogdXNlci5kZXNodVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sZnVuY3Rpb24oZXJyKXt9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC10aXRsZVwiPlBsZWFzZSB3YWl0IGZvciB0aGUgZ2FtZSBtYXN0ZXIgdG8gc3RhcnQgdGhlIGdhbWUuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtZ2VuZXJhbFwiPk5hbWU6IHt0aGlzLnN0YXRlLnVzZXJOYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWdlbmVyYWxcIj5EZXNodToge3RoaXMuc3RhdGUuZGVzaHV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtZ2VuZXJhbFwiPkJpcnRoZGF5OiB7dGhpcy5zdGF0ZS5iaXJ0aGRheX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1nZW5lcmFsXCI+RmF2b3VyaXRlIEZvb2Q6IHt0aGlzLnN0YXRlLmZhdm91cml0ZUZvb2R9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbG9nby5zdmdcIiBjbGFzc05hbWU9XCJBcHAtbG9nb1wiIGFsdD1cImxvZ29cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVVdGlscy5sb2dvdXRVc2VyKCkudGhlbigoc3VjY2VlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TaWduT3V0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sZnVuY3Rpb24oZmFpbGVkKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJidG4tY2FuY2VsXCI+VW5yZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAjd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ncm91cC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubGFiZWwtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubGFiZWwtZ2VuZXJhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWdyb3VwLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vKnsgYm9yZGVyOjJweCBzb2xpZCAjQ0QxODIxIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=components\\LoadingScreen.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_dataSource__ = __webpack_require__("./data/dataSource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_dataSource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_dataSource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
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

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-2829528195" + " " + "wrapper"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-2829528195" + " " + "center-container"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: "/static/main_logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-2829528195" + " " + "main-logo"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-2829528195" + " " + "form-group-container"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-2829528195" + " " + "label-general"
      }, "Name"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        onChange: this.handleNameChange,
        id: "name",
        name: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-2829528195" + " " + "input-general"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-2829528195" + " " + "form-group-container"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-2829528195" + " " + "label-general"
      }, "Deshu"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("select", {
        onChange: this.handleDeshuChange,
        name: "deshu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-2829528195" + " " + "input-general"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-2829528195" + " " + "option-general"
      }, "Select your deshu."), __WEBPACK_IMPORTED_MODULE_1__data_dataSource___default.a.DESHU_OPTIONS.map(function (deshu) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("option", {
          value: deshu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          className: "jsx-2829528195" + " " + "option-general"
        }, deshu);
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-2829528195" + " " + "form-group-container"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-2829528195" + " " + "label-general"
      }, "Birthday"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "date",
        onChange: this.handleBirthdayChange,
        name: "birthday",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: "jsx-2829528195" + " " + "input-general"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-2829528195" + " " + "form-group-container"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-2829528195" + " " + "label-general"
      }, "Favourite Food"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("select", {
        onChange: this.handleFavouriteFoodChange,
        name: "favouriteFood",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-2829528195" + " " + "input-general"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-2829528195" + " " + "option-general"
      }, "Select your favourite food"), __WEBPACK_IMPORTED_MODULE_1__data_dataSource___default.a.FOOD_OPTIONS.map(function (foodOption) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("option", {
          value: foodOption,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          className: "jsx-2829528195" + " " + "option-general"
        }, foodOption);
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        className: "jsx-2829528195" + " " + "form-group-container"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.props.onSignIn(_this2.state.name, _this2.state.birthday, _this2.state.favouriteFood, _this2.state.deshu);
        },
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        className: "jsx-2829528195" + " " + "btn-submit"
      }, "Submit")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2829528195",
        css: ".option-general.jsx-2829528195{color:black;}.main-logo.jsx-2829528195{width:70px;height:70px;float:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNpZ25Jbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRjRCLEFBR3FDLEFBR0QsV0FDQyxDQUhoQixXQUlpQixhQUNqQiIsImZpbGUiOiJjb21wb25lbnRzXFxTaWduSW4uanMiLCJzb3VyY2VSb290IjoiRTpcXGljZUJyZWFrZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL2RhdGFTb3VyY2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBiaXJ0aGRheTogXCJcIixcclxuICAgICAgICAgICAgZmF2b3VyaXRlRm9vZDogXCJcIixcclxuICAgICAgICAgICAgZGVzaHU6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTmFtZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVCaXJ0aGRheUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGJpcnRoZGF5OiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRmF2b3VyaXRlRm9vZENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZhdm91cml0ZUZvb2Q6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEZXNodUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRlc2h1OiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFpbi1sb2dvXCIgc3JjPVwiL3N0YXRpYy9tYWluX2xvZ28ucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtZ2VuZXJhbFwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX0gaWQ9XCJuYW1lXCIgY2xhc3NOYW1lPVwiaW5wdXQtZ2VuZXJhbFwiIG5hbWU9XCJuYW1lXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1nZW5lcmFsXCI+RGVzaHU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGVzaHVDaGFuZ2V9IGNsYXNzTmFtZT1cImlucHV0LWdlbmVyYWxcIiBuYW1lPVwiZGVzaHVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJvcHRpb24tZ2VuZXJhbFwiIGRpc2FibGVkIHNlbGVjdGVkIHZhbHVlPlNlbGVjdCB5b3VyIGRlc2h1Ljwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5ERVNIVV9PUFRJT05TLm1hcChkZXNodSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBjbGFzc05hbWU9XCJvcHRpb24tZ2VuZXJhbFwiIHZhbHVlPXtkZXNodX0+e2Rlc2h1fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1nZW5lcmFsXCI+QmlydGhkYXk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUJpcnRoZGF5Q2hhbmdlfSBjbGFzc05hbWU9XCJpbnB1dC1nZW5lcmFsXCIgbmFtZT1cImJpcnRoZGF5XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWdlbmVyYWxcIj5GYXZvdXJpdGUgRm9vZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5oYW5kbGVGYXZvdXJpdGVGb29kQ2hhbmdlfSBjbGFzc05hbWU9XCJpbnB1dC1nZW5lcmFsXCIgbmFtZT1cImZhdm91cml0ZUZvb2RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJvcHRpb24tZ2VuZXJhbFwiIGRpc2FibGVkIHNlbGVjdGVkIHZhbHVlPlNlbGVjdCB5b3VyIGZhdm91cml0ZSBmb29kPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLkZPT0RfT1BUSU9OUy5tYXAoZm9vZE9wdGlvbiA9PiB7IHJldHVybiA8b3B0aW9uIGNsYXNzTmFtZT1cIm9wdGlvbi1nZW5lcmFsXCIgdmFsdWU9e2Zvb2RPcHRpb259Pntmb29kT3B0aW9ufTwvb3B0aW9uPn0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TaWduSW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJpcnRoZGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mYXZvdXJpdGVGb29kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kZXNodVxyXG4gICAgICAgICAgICAgICAgICAgICkgfX0gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0bi1zdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5vcHRpb24tZ2VuZXJhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW4tbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8qeyBib3JkZXI6MnB4IHNvbGlkICNDRDE4MjEgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbn0iXX0= */\n/*@ sourceURL=components\\SignIn.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);



/***/ }),

/***/ "./components/WaitingForVerification.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        className: "jsx-2088511049" + " " + "wrapper"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        className: "jsx-2088511049" + " " + "custom-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        className: "jsx-2088511049" + " " + "label-general"
      }, "You have entered the correct details! Waiting for other party to verify"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/logo.svg",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-2088511049" + " " + "App-logo"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.props.cancel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-2088511049" + " " + "btn-cancel"
      }, "Cancel")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2088511049",
        css: ".custom-container.jsx-2088511049{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;padding:7px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFdhaXRpbmdGb3JWZXJpZmljYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzRCLEFBR3NDLDBFQUNTLDhFQUNYLFdBQ0MsWUFDTyw2RkFDdkIiLCJmaWxlIjoiY29tcG9uZW50c1xcV2FpdGluZ0ZvclZlcmlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJFOlxcaWNlQnJlYWtlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWdlbmVyYWxcIj5Zb3UgaGF2ZSBlbnRlcmVkIHRoZSBjb3JyZWN0IGRldGFpbHMhIFdhaXRpbmcgZm9yIG90aGVyIHBhcnR5IHRvIHZlcmlmeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xvZ28uc3ZnXCIgY2xhc3NOYW1lPVwiQXBwLWxvZ29cIiBhbHQ9XCJsb2dvXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5jYW5jZWx9IGNsYXNzTmFtZT1cImJ0bi1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAuY3VzdG9tLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vKnsgYm9yZGVyOjJweCBzb2xpZCAjQ0QxODIxIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=components\\WaitingForVerification.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



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

var PUSHER_APP_ID = process.env.APP_ID;
var PUSHER_APP_KEY = "b835427d208ad8e041f6";
var PUSHER_APP_SECRET = process.env.APP_SECRET;
var PUSHER_APP_CLUSTER = "ap1";
console.log(PUSHER_APP_ID);
console.log(PUSHER_APP_KEY);
console.log(PUSHER_APP_SECRET);
console.log(PUSHER_APP_CLUSTER);
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
var API_UNREGISTER_USER = '/unregisterUser';
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
  API_GET_COMPLETED_USERS: API_GET_COMPLETED_USERS,
  API_UNREGISTER_USER: API_UNREGISTER_USER
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
var NOTIFICATION_USER_BUSY = 'The other user is currently exchanging with another player!';
var NOTIFICATION_UNREGISTER_USER = 'You have successfuly unregistered from the game!';
var GAME_STATUS_INACTIVE = 'INACTIVE';
var GAME_STATUS_IN_PROGRESS = 'IN PROGRESS';
var USER_STATUS_IDLE = 'IDLE';
var USER_STATUS_BUSY = 'BUSY';
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
  PUSHER_GAME_COMPLETED_EVENT: PUSHER_GAME_COMPLETED_EVENT,
  USER_STATUS_IDLE: USER_STATUS_IDLE,
  USER_STATUS_BUSY: USER_STATUS_BUSY,
  NOTIFICATION_USER_BUSY: NOTIFICATION_USER_BUSY,
  NOTIFICATION_UNREGISTER_USER: NOTIFICATION_UNREGISTER_USER
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_Loading__ = __webpack_require__("./components/Loading.js");
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
            console.log("Received notification to stop the game abruptly!");
            localStorage.clear();

            _this.pusher.disconnect();

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

        window.onbeforeunload = function () {
          this.pusher.disconnect();
        };
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
        _this.retrieveUserInfo();

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
    Object.defineProperty(_assertThisInitialized(_this), "onGameCompleted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.pusher.disconnect();
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
    Object.defineProperty(_assertThisInitialized(_this), "retrieveUserInfo", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_9__utils_gameUtils___default.a.getUserInfo().then(function (user) {
          console.log("Retrieved User Object " + JSON.stringify(user));

          _this.setState({
            userName: user.name,
            birthday: user.birthday,
            favouriteFood: user.favouriteFood,
            deshu: user.deshu
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
        if (name && birthday && favouriteFood && deshu) {
          _this.setState({
            loading: true
          });
        }

        name = name.toUpperCase();
        console.log("Signing in..." + name);
        var user = new __WEBPACK_IMPORTED_MODULE_3__models_User__["a" /* default */](name, birthday, deshu, favouriteFood);
        __WEBPACK_IMPORTED_MODULE_9__utils_gameUtils___default.a.loginUser(user).then(function (succeed) {
          _this.setState({
            signedIn: true,
            loading: false
          });
        }, function (errMessage) {
          this.setState({
            loading: false
          });
          __WEBPACK_IMPORTED_MODULE_13__utils_notificationUtils___default.a.showNotification(errMessage);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSignOut", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        console.log("On signing out...");

        _this.setState({
          signedIn: false
        });

        __WEBPACK_IMPORTED_MODULE_13__utils_notificationUtils___default.a.showNotification(__WEBPACK_IMPORTED_MODULE_7__constants_strings___default.a.NOTIFICATION_UNREGISTER_USER);
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
    Object.defineProperty(_assertThisInitialized(_this), "updateLoadingStatus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(status) {
        _this.setState({
          loading: status
        });
      }
    });
    _this.state = {
      userName: "",
      deshu: "",
      birthday: "",
      favouriteFood: "",
      activeUsers: [],
      lettersAssigned: [],
      userSelected: '',
      isWaitingForCounterPartyToVerify: false,
      isVerifyingForCounterParty: false,
      isWaitingForGameToStart: true,
      signedIn: false,
      letterToGive: '',
      authenticationChecked: false,
      gameStartedChecked: false,
      loading: false
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

      if (this.state.loading) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__components_Loading__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      });else if (!this.state.authenticationChecked || !this.state.gameStartedChecked) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      });else if (!this.state.signedIn) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_SignIn__["a" /* default */], {
        onSignIn: this.onSignIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      })));else if (this.state.isWaitingForGameToStart && this.state.signedIn) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_LoadingScreen__["a" /* default */], {
        onSignOut: this.onSignOut,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }));
      if (this.state.isWaitingForCounterPartyToVerify) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_WaitingForVerification__["a" /* default */], {
        cancel: this.cancelWaitingForVerification,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }));else if (this.state.isVerifyingForCounterParty) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        className: "label-general",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, this.exchangeRequest.request_user, " has requested to connect.Please fill in his details below.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ExchangeResponse__["a" /* default */], {
        targetUser: this.exchangeRequest.request_user,
        userName: this.exchangeRequest.request_user,
        onExchangeResponseSubmitSuccess: this.onExchangeResponseSubmitSuccess,
        lettersAvailable: this.state.lettersAssigned,
        exchangeRequest: this.exchangeRequest,
        updateLoadingStatus: this.updateLoadingStatus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.cancelRespondToRequester,
        className: "btn-cancel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, "Cancel"));else return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        className: "jsx-1696882089"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "sidebar-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        className: "jsx-1696882089"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        id: "spy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        className: "jsx-1696882089"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        className: "jsx-1696882089" + " " + "sidebar-nav nav"
      }, this.state.activeUsers.map(function (user, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
          id: index,
          onClick: _this2.onUserSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355
          },
          className: "jsx-1696882089" + " " + "sidebar-brand"
        }, user);
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "page-content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        className: "jsx-1696882089"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "data-spy": "scroll",
        "data-target": "#spy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        className: "jsx-1696882089" + " " + "page-content inset"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_LettersComponent__["a" /* default */], {
        onGameCompleted: this.onGameCompleted,
        userName: this.state.userName,
        deshu: this.state.deshu,
        birthday: this.state.birthday,
        favouriteFood: this.state.favouriteFood,
        lettersAssigned: this.state.lettersAssigned,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          marginTop: '50px',
          marginBottom: '50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        className: "jsx-1696882089" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        className: "jsx-1696882089" + " " + "label-general"
      }, "Fill in the details of the player you would like to exchange with below.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_ExchangeRequest__["a" /* default */], {
        targetUser: this.state.userSelected,
        userName: this.state.userName,
        onExchangeRequestSubmitSuccess: this.onExchangeRequestSubmitSuccess,
        userSelected: this.state.userSelected,
        lettersAvailable: this.state.lettersAssigned,
        updateExchangeRequest: this.updateExchangeRequest,
        updateLoadingStatus: this.updateLoadingStatus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1696882089",
        css: "#wrapper.active.jsx-1696882089{padding-left:0;}#wrapper.active.jsx-1696882089 #sidebar-wrapper.jsx-1696882089{left:0;}#page-content-wrapper.jsx-1696882089{width:100%;}.sidebar-nav.jsx-1696882089 li.jsx-1696882089{line-height:40px;text-indent:20px;}.sidebar-nav.jsx-1696882089 li.jsx-1696882089 a.jsx-1696882089{color:#999999;display:block;-webkit-text-decoration:none;text-decoration:none;padding-left:60px;}.sidebar-nav.jsx-1696882089 li.jsx-1696882089 a.jsx-1696882089 span.jsx-1696882089:before{position:absolute;left:0;color:#41484c;text-align:center;width:20px;line-height:18px;}.sidebar-nav.jsx-1696882089 li.jsx-1696882089 a.jsx-1696882089:hover,.sidebar-nav.jsx-1696882089 li.active.jsx-1696882089{color:#fff;background:rgba(255,255,255,0.2);-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-1696882089 li.jsx-1696882089 a.jsx-1696882089:active,.sidebar-nav.jsx-1696882089 li.jsx-1696882089 a.jsx-1696882089:focus{-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-1696882089>.sidebar-brand.jsx-1696882089 a.jsx-1696882089{color:#999999;}.sidebar-nav.jsx-1696882089>.sidebar-brand.jsx-1696882089 a.jsx-1696882089:hover{color:#fff;background:none;}.inset.jsx-1696882089{padding:20px;}@media (min-width:1224px){#wrapper.jsx-1696882089{padding-left:250px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-1696882089{margin-left:-250px;left:250px;width:250px;background:linear-gradient(#000000,#3300CC);font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}.sidebar-nav.jsx-1696882089>.sidebar-brand.jsx-1696882089{height:65px;line-height:60px;font-size:18px;}.sidebar-nav.jsx-1696882089{position:absolute;top:0;width:250px;list-style:none;margin:0;padding:0;}}@media (max-width:1224px){#wrapper.jsx-1696882089{padding-left:100px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-1696882089{margin-left:-100px;left:100px;width:100px;background:linear-gradient(#000000,#3300CC);font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}.sidebar-nav.jsx-1696882089>.sidebar-brand.jsx-1696882089{height:65px;line-height:60px;font-size:10px;}.sidebar-nav.jsx-1696882089{position:absolute;top:0;width:100px;list-style:none;margin:0;padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3WGdDLEFBR3NDLEFBR1IsQUFHSSxBQUdNLEFBSUgsQUFNSSxBQVNQLEFBTVUsQUFHUCxBQUdILEFBSUUsQUFLVSxBQUlBLEFBZ0JQLEFBTU0sQUFZQyxBQUlBLEFBZ0JQLEFBTU0sT0E3R3hCLElBR0EsQUFzQm1DLEFBWWpCLENBNkJLLEFBc0NBLENBL0R2QixDQS9CZ0IsQUF3QmhCLENBckNBLEVBU21CLENBVVYsQUF3REcsQUFzQ0EsQ0FoRXNCLEFBSWpCLEFBa0NpQixBQUlqQixLQWZDLEFBc0NBLENBOUZGLEVBcUJoQixDQTNCdUIsQ0F3REYsQUFzQ0EsQ0F0REgsQUFzQ0EsSUFsRmxCLEVBbUVzQixBQXNDQSxHQTlGRixHQWtDK0IsQUFzQ0EsRUFoRTVCLEFBMENuQixBQXNDQSxNQTNFSixFQTRDZSxBQXNDQSxLQTlGRixJQXlERyxBQXNDQSxPQTlGRyxHQXlEZixBQXNDQSxPQXZHZ0IsS0FtQ2hCLEFBc0NBLEVBaEVKLENBZ0M4QyxBQXNDQSxRQWhFOUMsRUFkQSw2QkF5Q3FCLEFBc0NBLGVBckNLLEFBc0NBLG9CQXJDTCxBQXNDQSxlQXJDSCxBQXNDQSxZQXJDSSxBQXNDQSxnQkFyQ0gsQUFzQ0EsYUFyQ2UsQUFzQ0EsZ0VBckNoQixBQXNDQSxZQXJDZCxBQXNDQSIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTpcXGljZUJyZWFrZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL1VzZXInXHJcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIlxyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xyXG5pbXBvcnQgU2lnbkluIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZ25JblwiXHJcbmltcG9ydCBzdHJpbmdzIGZyb20gJy4uL2NvbnN0YW50cy9zdHJpbmdzJ1xyXG5pbXBvcnQge25vdGlmeX0gZnJvbSBcInJlYWN0LW5vdGlmeS10b2FzdFwiO1xyXG5pbXBvcnQgZ2FtZVV0aWxzIGZyb20gXCIuLi91dGlscy9nYW1lVXRpbHNcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xyXG5pbXBvcnQgY3JlZGVudGlhbHMgZnJvbSAnLi4vY29uc3RhbnRzL2NyZWRlbnRpYWxzJ1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nU2NyZWVuXCJcclxuaW1wb3J0IG5vdGlmaWNhdGlvblV0aWxzIGZyb20gXCIuLi91dGlscy9ub3RpZmljYXRpb25VdGlsc1wiXHJcbmltcG9ydCBMZXR0ZXJDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9MZXR0ZXJzQ29tcG9uZW50J1xyXG5pbXBvcnQgRXhjaGFuZ2VSZXF1ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRXhjaGFuZ2VSZXF1ZXN0J1xyXG5pbXBvcnQgRXhjaGFuZ2VSZXNwb25zZSBmcm9tICcuLi9jb21wb25lbnRzL0V4Y2hhbmdlUmVzcG9uc2UnXHJcbmltcG9ydCBXYWl0aW5nRm9yVmVyaWZpY2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvV2FpdGluZ0ZvclZlcmlmaWNhdGlvbidcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBQYWdlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB1c2VyTmFtZTogXCJcIixcclxuICAgICAgICAgICAgZGVzaHU6IFwiXCIsXHJcbiAgICAgICAgICAgIGJpcnRoZGF5OiBcIlwiLFxyXG4gICAgICAgICAgICBmYXZvdXJpdGVGb29kOiBcIlwiLFxyXG4gICAgICAgICAgICBhY3RpdmVVc2VycyA6IFtdLFxyXG4gICAgICAgICAgICBsZXR0ZXJzQXNzaWduZWQ6IFtdLFxyXG4gICAgICAgICAgICB1c2VyU2VsZWN0ZWQ6ICcnLFxyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiBmYWxzZSxcclxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yR2FtZVRvU3RhcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNpZ25lZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgbGV0dGVyVG9HaXZlOiAnJyxcclxuICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZ2FtZVN0YXJ0ZWRDaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJub3RpZnkgZnJvbSBpbmRleCBpcyBcIitKU09OLnN0cmluZ2lmeShub3RpZnkpKVxyXG4gICAgICAgIHRoaXMuZXhjaGFuZ2VSZXF1ZXN0ID0ge31cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLnNldHVwUHVzaGVyKClcclxuICAgICAgICB0aGlzLmNoZWNrR2FtZVN0YXRlKClcclxuICAgICAgICAvKlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaWduZWRJbjogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICBnYW1lU3RhcnRlZENoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGlzV2FpdGluZ0ZvckdhbWVUb1N0YXJ0OiBmYWxzZSxcclxuICAgICAgICB9KSovXHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBQdXNoZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKGNyZWRlbnRpYWxzLlBVU0hFUl9BUFBfS0VZLCB7XHJcbiAgICAgICAgICAgIGNsdXN0ZXI6IGNyZWRlbnRpYWxzLlBVU0hFUl9BUFBfQ0xVU1RFUixcclxuICAgICAgICAgICAgZW5jcnlwdGVkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMucHVzaGVyLnN1YnNjcmliZShzdHJpbmdzLlBVU0hFUl9DSEFOTkVMKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoc3RyaW5ncy5QVVNIRVJfVVNFUl9MSVNUX1VQREFURV9FVkVOVCwgKHVzZXJzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVVzZXJzID0gdXNlcnMuYWN0aXZlVXNlcnNcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBuZXcgdXNlciBsaXN0IGZyb20gUHVzaGVyOiBcIiArIGFjdGl2ZVVzZXJzKVxyXG4gICAgICAgICAgICB2YXIgbmV3QWN0aXZlVXNlcnMgPSBhY3RpdmVVc2Vycy5tYXAodXNlciA9PiB1c2VyLm5hbWUpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlcnM6IG5ld0FjdGl2ZVVzZXJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX05FV19FWENIQU5HRV9SRVFVRVNUX0VWRU5ULCAoZXhjaGFuZ2VSZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgbmV3IGV4Y2hhbmdlIHJlcXVlc3Q6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXhjaGFuZ2VSZXF1ZXN0KSlcclxuICAgICAgICAgICAgaWYgKGV4Y2hhbmdlUmVxdWVzdC5yZXNwb25kX3VzZXIgPT0gdGhpcy5zdGF0ZS51c2VyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFeGNoYW5nZSByZXF1ZXN0IGlzIGZvciBtZS5cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2VSZXF1ZXN0ID0gZXhjaGFuZ2VSZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmeWluZ0ZvckNvdW50ZXJQYXJ0eTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLkVYQ0hBTkdFX0NPTVBMRVRFRF9FVkVOVCwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVxdWVzdF91c2VyID09IHRoaXMuc3RhdGUudXNlck5hbWUpIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24oc3RyaW5ncy5OT1RJRklDQVRJT05fRVhDSEFOR0VfU1VDQ0VTU0ZVTClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXhjaGFuZ2UgcmVxdWVzdCBoYXMgY29tcGxldGVkOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZXR0ZXJzIGFzc2lnbmVkIGFyZSBub3cgXCIgKyB0aGlzLnN0YXRlLmxldHRlcnNBc3NpZ25lZClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzV2FpdGluZ0ZvckNvdW50ZXJQYXJ0eVRvVmVyaWZ5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMucmV0cmlldmVBbGxHYW1lSW5mb3JtYXRpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX0dBTUVfU1RBUlRfRVZFTlQsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2lnbmVkSW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBoYXMgc3RhcnRlZC4uLmxvYWRpbmcgbWFpbiBwYWdlLi4uXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1dhaXRpbmdGb3JHYW1lVG9TdGFydDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJldHJpZXZlQWxsR2FtZUluZm9ybWF0aW9uKClcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24oc3RyaW5ncy5OT1RJRklDQVRJT05fR0FNRV9CRUdVTilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLlBVU0hFUl9HQU1FX1NUT1BfRVZFTlQsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2lnbmVkSW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgbm90aWZpY2F0aW9uIHRvIHN0b3AgdGhlIGdhbWUgYWJydXB0bHkhXCIpXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoZXIuZGlzY29ubmVjdCgpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJHYW1lIGhhcyBiZWVuIGZvcmNlZnVsbHkgc3RvcHBlZCBieSBnYW1lIG1hc3RlclwiKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLlBVU0hFUl9FWENIQU5HRV9DQU5DRUxMRURfRVZFTlQsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgY2FuY2VsIHJlcXVlc3Q6IFwiK0pTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXF1ZXN0X3VzZXIgPT0gdGhpcy5zdGF0ZS51c2VyTmFtZSAmJiB0aGlzLnN0YXRlLmlzV2FpdGluZ0ZvckNvdW50ZXJQYXJ0eVRvVmVyaWZ5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25VdGlscy5zaG93Tm90aWZpY2F0aW9uKHN0cmluZ3MuTk9USUZJQ0FUSU9OX0NBTkNFTF9FWENIQU5HRSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3BvbmRfdXNlciA9PSB0aGlzLnN0YXRlLnVzZXJOYW1lICYmIHRoaXMuc3RhdGUuaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24oc3RyaW5ncy5OT1RJRklDQVRJT05fQ0FOQ0VMX0VYQ0hBTkdFKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tHYW1lU3RhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2FtZVV0aWxzLmNoZWNrQXV0aGVudGljYXRlZCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNpZ25lZEluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uQ2hlY2tlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGdhbWVVdGlscy5jaGVja0dhbWVTdGFydGVkKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNXYWl0aW5nRm9yR2FtZVRvU3RhcnQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMucmV0cmlldmVBbGxHYW1lSW5mb3JtYXRpb24oKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGdhbWVTdGFydGVkQ2hlY2tlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGdhbWVTdGFydGVkQ2hlY2tlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmVBbGxHYW1lSW5mb3JtYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXRyaWV2ZVVzZXJJbmZvKClcclxuICAgICAgICB0aGlzLnJldHJpdmVMZXR0ZXJzKClcclxuICAgICAgICB0aGlzLnJldHJpZXZlQWN0aXZlVXNlcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbFdhaXRpbmdGb3JWZXJpZmljYXRpb24gPSAocikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGdhbWVVdGlscy5jYW5jZWxFeGNoYW5nZSh0aGlzLmV4Y2hhbmdlUmVxdWVzdClcclxuICAgIH1cclxuXHJcbiAgICBvbkV4Y2hhbmdlUmVxdWVzdFN1Ym1pdFN1Y2Nlc3MgPSAobGV0dGVyVG9HaXZlLGV4Y2hhbmdlUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgIHV0aWxzLnNhdmVUb0xvY2FsU3RvcmFnZShleGNoYW5nZVJlcXVlc3QucmVzcG9uZF91c2VyLEpTT04uc3RyaW5naWZ5KGV4Y2hhbmdlUmVxdWVzdCkpXHJcbiAgICAgICAgY29uc3QgdXNlclNlbGVjdGVkID0gdGhpcy5zdGF0ZS51c2VyU2VsZWN0ZWRcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnk6IHRydWUsXHJcbiAgICAgICAgICAgIGxldHRlclRvR2l2ZTogbGV0dGVyVG9HaXZlLFxyXG4gICAgICAgICAgICB1c2VyU2VsZWN0ZWQ6ICcnXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXhjaGFuZ2VSZXNwb25zZVN1Ym1pdFN1Y2Nlc3MgPSAoZXhjaGFuZ2VSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24oc3RyaW5ncy5OT1RJRklDQVRJT05fRVhDSEFOR0VfU1VDQ0VTU0ZVTClcclxuICAgICAgICB0aGlzLnJldHJpdmVMZXR0ZXJzKClcclxuICAgICAgICB1dGlscy5zYXZlVG9Mb2NhbFN0b3JhZ2UoZXhjaGFuZ2VSZXNwb25zZS5yZXF1ZXN0X3VzZXIsSlNPTi5zdHJpbmdpZnkoZXhjaGFuZ2VSZXNwb25zZSkpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25HYW1lQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uVXNlclNlbGVjdGVkID0gKGUpID0+IHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZVVzZXJzW2UudGFyZ2V0LmlkXSA9PT0gdGhpcy5zdGF0ZS51c2VyTmFtZSlcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVXRpbHMuc2hvd05vdGlmaWNhdGlvbihzdHJpbmdzLk5PVElGSUNBVElPTl9TQU1FX05BTUVfU0VMRUNURUQpXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyB1c2VyIHNlbGVjdGVkIHRvIFwiICsgZS50YXJnZXQuaWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdXNlclNlbGVjdGVkOiB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJzW2UudGFyZ2V0LmlkXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXRyaXZlTGV0dGVycyA9ICgpID0+IHtcclxuICAgICAgICBnYW1lVXRpbHMuZ2V0QXNzaWduZWRMZXR0ZXJzKCkudGhlbigobGV0dGVycykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGxldHRlcnNBc3NpZ25lZCA6IGxldHRlcnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LGZ1bmN0aW9uKGVycil7fSlcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZUFjdGl2ZVVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGdhbWVVdGlscy5nZXRBY3RpdmVVc2VycygpLnRoZW4oKGFjdGl2ZVVzZXJzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlcnMgOiBhY3RpdmVVc2Vyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sZnVuY3Rpb24oZXJyKXt9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHJpZXZlVXNlckluZm8gPSAoKSA9PiB7XHJcbiAgICAgICAgZ2FtZVV0aWxzLmdldFVzZXJJbmZvKCkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJldHJpZXZlZCBVc2VyIE9iamVjdCBcIitKU09OLnN0cmluZ2lmeSh1c2VyKSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYmlydGhkYXk6IHVzZXIuYmlydGhkYXksXHJcbiAgICAgICAgICAgICAgICBmYXZvdXJpdGVGb29kOiB1c2VyLmZhdm91cml0ZUZvb2QsXHJcbiAgICAgICAgICAgICAgICBkZXNodTogdXNlci5kZXNodVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sZnVuY3Rpb24oZXJyKXt9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHJpdmVVc2VyTmFtZSA9ICgpID0+IHtcclxuICAgICAgICBnYW1lVXRpbHMuZ2V0VXNlck5hbWUoKS50aGVuKCh1c2VyTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiB1c2VyTmFtZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sZnVuY3Rpb24oZXJyKXt9KVxyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbFJlc3BvbmRUb1JlcXVlc3RlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHk6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBnYW1lVXRpbHMuY2FuY2VsRXhjaGFuZ2UodGhpcy5leGNoYW5nZVJlcXVlc3QpXHJcbiAgICB9XHJcblxyXG4gICAgb25TaWduSW4gPSAobmFtZSxiaXJ0aGRheSxmYXZvdXJpdGVGb29kLGRlc2h1KSA9PiB7XHJcbiAgICAgICAgaWYoIG5hbWUgJiYgYmlydGhkYXkgJiYgZmF2b3VyaXRlRm9vZCAmJiBkZXNodSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbmFtZSA9IG5hbWUudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2lnbmluZyBpbi4uLlwiK25hbWUpXHJcbiAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKG5hbWUsYmlydGhkYXksZGVzaHUsZmF2b3VyaXRlRm9vZClcclxuICAgICAgICBnYW1lVXRpbHMubG9naW5Vc2VyKHVzZXIpLnRoZW4oKHN1Y2NlZWQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2lnbmVkSW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sZnVuY3Rpb24oZXJyTWVzc2FnZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVXRpbHMuc2hvd05vdGlmaWNhdGlvbihlcnJNZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TaWduT3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT24gc2lnbmluZyBvdXQuLi5cIilcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2lnbmVkSW46IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBub3RpZmljYXRpb25VdGlscy5zaG93Tm90aWZpY2F0aW9uKHN0cmluZ3MuTk9USUZJQ0FUSU9OX1VOUkVHSVNURVJfVVNFUilcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFeGNoYW5nZVJlcXVlc3QgPSAoZXhjaGFuZ2VSZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5leGNoYW5nZVJlcXVlc3QgPSBleGNoYW5nZVJlcXVlc3RcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMb2FkaW5nU3RhdHVzID0gKHN0YXR1cykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBzdGF0dXNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcpXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMb2FkaW5nLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGVsc2UgaWYoIXRoaXMuc3RhdGUuYXV0aGVudGljYXRpb25DaGVja2VkIHx8ICF0aGlzLnN0YXRlLmdhbWVTdGFydGVkQ2hlY2tlZClcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dCBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBlbHNlIGlmKCF0aGlzLnN0YXRlLnNpZ25lZEluKVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZ25JbiBvblNpZ25Jbj17dGhpcy5vblNpZ25Jbn0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5pc1dhaXRpbmdGb3JHYW1lVG9TdGFydCAmJiB0aGlzLnN0YXRlLnNpZ25lZEluKVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdTY3JlZW4gb25TaWduT3V0PXt0aGlzLm9uU2lnbk91dH0vPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeSlcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dCBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxXYWl0aW5nRm9yVmVyaWZpY2F0aW9uIGNhbmNlbD17dGhpcy5jYW5jZWxXYWl0aW5nRm9yVmVyaWZpY2F0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5pc1ZlcmlmeWluZ0ZvckNvdW50ZXJQYXJ0eSlcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dCBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtZ2VuZXJhbFwiPnt0aGlzLmV4Y2hhbmdlUmVxdWVzdC5yZXF1ZXN0X3VzZXJ9IGhhcyByZXF1ZXN0ZWQgdG8gY29ubmVjdC5QbGVhc2UgZmlsbCBpbiBoaXMgZGV0YWlscyBiZWxvdy48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFeGNoYW5nZVJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVzZXI9e3RoaXMuZXhjaGFuZ2VSZXF1ZXN0LnJlcXVlc3RfdXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU9e3RoaXMuZXhjaGFuZ2VSZXF1ZXN0LnJlcXVlc3RfdXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25FeGNoYW5nZVJlc3BvbnNlU3VibWl0U3VjY2Vzcz17dGhpcy5vbkV4Y2hhbmdlUmVzcG9uc2VTdWJtaXRTdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJzQXZhaWxhYmxlPXt0aGlzLnN0YXRlLmxldHRlcnNBc3NpZ25lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjaGFuZ2VSZXF1ZXN0PXt0aGlzLmV4Y2hhbmdlUmVxdWVzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTG9hZGluZ1N0YXR1cz17dGhpcy51cGRhdGVMb2FkaW5nU3RhdHVzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNhbmNlbFJlc3BvbmRUb1JlcXVlc3Rlcn0gY2xhc3NOYW1lPVwiYnRuLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2lkZWJhci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGlkPVwic3B5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXItbmF2IG5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hY3RpdmVVc2Vycy5tYXAoKHVzZXIsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgaWQ9e2luZGV4fSBjbGFzc05hbWU9XCJzaWRlYmFyLWJyYW5kXCIgb25DbGljaz17dGhpcy5vblVzZXJTZWxlY3RlZH0+e3VzZXJ9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2UtY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudCBpbnNldFwiIGRhdGEtc3B5PVwic2Nyb2xsXCIgZGF0YS10YXJnZXQ9XCIjc3B5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExldHRlckNvbXBvbmVudCBvbkdhbWVDb21wbGV0ZWQ9e3RoaXMub25HYW1lQ29tcGxldGVkfSB1c2VyTmFtZT17dGhpcy5zdGF0ZS51c2VyTmFtZX0gZGVzaHU9e3RoaXMuc3RhdGUuZGVzaHV9IGJpcnRoZGF5PXt0aGlzLnN0YXRlLmJpcnRoZGF5fSBmYXZvdXJpdGVGb29kPXt0aGlzLnN0YXRlLmZhdm91cml0ZUZvb2R9IGxldHRlcnNBc3NpZ25lZD17dGhpcy5zdGF0ZS5sZXR0ZXJzQXNzaWduZWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOic1MHB4JyxtYXJnaW5Cb3R0b206JzUwcHgnfX0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtZ2VuZXJhbFwiPkZpbGwgaW4gdGhlIGRldGFpbHMgb2YgdGhlIHBsYXllciB5b3Ugd291bGQgbGlrZSB0byBleGNoYW5nZSB3aXRoIGJlbG93LjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4Y2hhbmdlUmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRVc2VyPXt0aGlzLnN0YXRlLnVzZXJTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU9e3RoaXMuc3RhdGUudXNlck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXhjaGFuZ2VSZXF1ZXN0U3VibWl0U3VjY2Vzcz17dGhpcy5vbkV4Y2hhbmdlUmVxdWVzdFN1Ym1pdFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3RlZD17dGhpcy5zdGF0ZS51c2VyU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU9e3RoaXMuc3RhdGUubGV0dGVyc0Fzc2lnbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVFeGNoYW5nZVJlcXVlc3Q9e3RoaXMudXBkYXRlRXhjaGFuZ2VSZXF1ZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMb2FkaW5nU3RhdHVzPXt0aGlzLnVwZGF0ZUxvYWRpbmdTdGF0dXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIuYWN0aXZlICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEgc3BhbjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDE0ODRjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGE6aG92ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGE6YWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnNldCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN3cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDAwMDAsICMzMzAwQ0MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTIyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN3cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDAwMDAsICMzMzAwQ0MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXX0= */\n/*@ sourceURL=pages\\index.js */"
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
        } else reject(response.data.message);
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
  getUserInfo: function getUserInfo() {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: endpoints.API_GET_SESSION
      }).then(function (response) {
        var userName = response.data.user.name;
        if (typeof response.data.user === 'undefined') reject(0);
        resolve(response.data.user);
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
  logoutUser: function logoutUser() {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: endpoints.API_UNREGISTER_USER
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

/***/ "react-spinners":
/***/ (function(module, exports) {

module.exports = require("react-spinners");

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