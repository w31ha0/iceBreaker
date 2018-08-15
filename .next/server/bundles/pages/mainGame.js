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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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
/* 2 */
/***/ (function(module, exports) {

var FOOD_OPTIONS = ['hokkien mee', 'laksa', 'mee rebus'];
module.exports = {
  FOOD_OPTIONS: FOOD_OPTIONS
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width,height=device-height, initial-scale=2"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
        integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
        crossOrigin: "anonymous"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://unpkg.com/react-tabs@2/style/react-tabs.css"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charSet: "utf-8"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Container"], null, this.props.children));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var API_LOGIN_USER = '/loginUser';
var API_CHECK_SESSION_EXPIRED = '/checkExpired';
var API_GET_ALL_ACTIVE_USERS = '/getActiveUsers';
var API_GET_SESSION = '/getSession';
var API_GET_ASSIGNED_LETTERS = '/getAssignedLetters';
var API_SUBMIT_EXCHANGE_REQUEST = '/submitExchangeRequest';
var API_SUBMIT_EXCHANGE_RESPONSE = '/submitExchangeResponse';
var API_EXCHANGE_COMPLETED = '/exchangeCompleted';
module.exports = {
  API_LOGIN_USER: API_LOGIN_USER,
  API_CHECK_SESSION_EXPIRED: API_CHECK_SESSION_EXPIRED,
  API_GET_ALL_ACTIVE_USERS: API_GET_ALL_ACTIVE_USERS,
  API_GET_SESSION: API_GET_SESSION,
  API_GET_ASSIGNED_LETTERS: API_GET_ASSIGNED_LETTERS,
  API_SUBMIT_EXCHANGE_REQUEST: API_SUBMIT_EXCHANGE_REQUEST,
  API_EXCHANGE_COMPLETED: API_EXCHANGE_COMPLETED,
  API_SUBMIT_EXCHANGE_RESPONSE: API_SUBMIT_EXCHANGE_RESPONSE
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(13);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(8);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(6);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "pusher-js"
var external__pusher_js_ = __webpack_require__(14);
var external__pusher_js__default = /*#__PURE__*/__webpack_require__.n(external__pusher_js_);

// EXTERNAL MODULE: ./components/page.js
var page = __webpack_require__(1);

// EXTERNAL MODULE: ./constants/strings.js
var strings = __webpack_require__(15);
var strings_default = /*#__PURE__*/__webpack_require__.n(strings);

// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(3);

// EXTERNAL MODULE: ./constants/endpoints.js
var endpoints = __webpack_require__(7);
var endpoints_default = /*#__PURE__*/__webpack_require__.n(endpoints);

// EXTERNAL MODULE: ./constants/credentials.js
var credentials = __webpack_require__(16);
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials);

// CONCATENATED MODULE: ./components/lettersComponent.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var lettersComponent_LetterComponent =
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
        }
      }
    });
    _this.state = {
      lettersUsed: Array.apply(null, {
        length: 3
      }).map(function () {
        return '-';
      }),
      lettersAvailable: props.lettersAssigned
    };
    return _this;
  }

  _createClass(LetterComponent, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        lettersAvailable: newProps.lettersAssigned
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement("div", {
        className: "jsx-2280239731"
      }, external__react__default.a.createElement("div", {
        className: "jsx-2280239731"
      }, this.state.lettersUsed.join(' '), external__react__default.a.createElement("button", {
        id: "cancel-btn",
        onClick: this.removeOneCharFromLettersUsed,
        className: "jsx-2280239731" + " " + "btn btn-light"
      }, "C")), external__react__default.a.createElement("div", {
        id: "letters-available",
        className: "jsx-2280239731"
      }, this.state.lettersAvailable.map(function (letter, index) {
        return external__react__default.a.createElement("button", {
          id: "letter-available",
          value: index,
          onClick: _this2.handleLetterSelected,
          className: "jsx-2280239731" + " " + "btn btn-primary"
        }, letter);
      })), external__react__default.a.createElement(style__default.a, {
        styleId: "2280239731",
        css: ["#cancel-btn.jsx-2280239731{margin-left:20px;margin-bottom:20px;}", "#letters-available.jsx-2280239731{margin-bottom:20px;}", "#letter-available.jsx-2280239731{margin:5px;}"]
      }));
    }
  }]);

  return LetterComponent;
}(external__react__default.a.Component);


// EXTERNAL MODULE: ./data/dataSource.js
var dataSource = __webpack_require__(2);
var dataSource_default = /*#__PURE__*/__webpack_require__.n(dataSource);

// CONCATENATED MODULE: ./components/Exchange.js
function Exchange__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Exchange__typeof = function _typeof(obj) { return typeof obj; }; } else { Exchange__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Exchange__typeof(obj); }

function Exchange__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Exchange__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Exchange__createClass(Constructor, protoProps, staticProps) { if (protoProps) Exchange__defineProperties(Constructor.prototype, protoProps); if (staticProps) Exchange__defineProperties(Constructor, staticProps); return Constructor; }

function Exchange__possibleConstructorReturn(self, call) { if (call && (Exchange__typeof(call) === "object" || typeof call === "function")) { return call; } return Exchange__assertThisInitialized(self); }

function Exchange__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Exchange__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Exchange__default =
/*#__PURE__*/
function (_React$Component) {
  Exchange__inherits(_default, _React$Component);

  function _default() {
    var _this;

    Exchange__classCallCheck(this, _default);

    _this = Exchange__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));
    Object.defineProperty(Exchange__assertThisInitialized(_this), "handleBirthdayChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          birthday: e.target.value
        });
      }
    });
    Object.defineProperty(Exchange__assertThisInitialized(_this), "handleFavouriteFoodChange", {
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
    Object.defineProperty(Exchange__assertThisInitialized(_this), "handleLetterToExchangeChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          letterToExchange: e.target.value
        });
      }
    });
    _this.state = {
      birthday: '',
      favouriteFood: '',
      letterToExchange: ''
    };
    return _this;
  }

  Exchange__createClass(_default, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "form-group"
      }, external__react__default.a.createElement("label", null, "Name")), external__react__default.a.createElement("div", {
        className: "form-group"
      }, external__react__default.a.createElement("label", null, this.props.targetUser)), external__react__default.a.createElement("div", {
        className: "form-group"
      }, external__react__default.a.createElement("label", null, "Birthday"), external__react__default.a.createElement("input", {
        className: "form-control",
        name: "birthday",
        onChange: this.handleBirthdayChange
      })), external__react__default.a.createElement("div", {
        className: "form-group"
      }, external__react__default.a.createElement("label", null, "Favourite Food"), external__react__default.a.createElement("select", {
        className: "form-control",
        name: "favouriteFood",
        onChange: this.handleFavouriteFoodChange
      }, external__react__default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true
      }, "Select his/her favourite food"), dataSource_default.a.FOOD_OPTIONS.map(function (foodOption) {
        return external__react__default.a.createElement("option", {
          value: foodOption
        }, foodOption);
      }))), external__react__default.a.createElement("div", {
        className: "form-group"
      }, external__react__default.a.createElement("label", null, "Letter To Exchange Away"), external__react__default.a.createElement("select", {
        className: "form-control",
        name: "letterToExchange",
        onChange: this.handleLetterToExchangeChange
      }, external__react__default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true
      }, "Select a letter to exchange away"), this.props.lettersAvailable.map(function (letter) {
        return external__react__default.a.createElement("option", {
          value: letter
        }, letter);
      }))), external__react__default.a.createElement("button", {
        onClick: this.submitForm,
        className: "btn btn-primary"
      }, "Submit"));
    }
  }]);

  return _default;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./components/ExchangeRequest.js
function ExchangeRequest__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ExchangeRequest__typeof = function _typeof(obj) { return typeof obj; }; } else { ExchangeRequest__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ExchangeRequest__typeof(obj); }

function ExchangeRequest__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ExchangeRequest__possibleConstructorReturn(self, call) { if (call && (ExchangeRequest__typeof(call) === "object" || typeof call === "function")) { return call; } return ExchangeRequest__assertThisInitialized(self); }

function ExchangeRequest__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ExchangeRequest__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var ExchangeRequest__default =
/*#__PURE__*/
function (_Exchange) {
  ExchangeRequest__inherits(_default, _Exchange);

  function _default() {
    var _ref;

    var _temp, _this;

    ExchangeRequest__classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ExchangeRequest__possibleConstructorReturn(_this, (_temp = _this = ExchangeRequest__possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), Object.defineProperty(ExchangeRequest__assertThisInitialized(_this), "submitForm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var exchangeRequest = {
          respond_user: _this.props.userSelected,
          birthday: _this.state.birthday,
          favouriteFood: _this.state.favouriteFood,
          letterToExchange: _this.state.letterToExchange,
          request_user: _this.props.userName
        };
        console.log("ExchangeRequest: " + JSON.stringify(exchangeRequest));
        external__axios__default()({
          method: 'post',
          url: endpoints_default.a.API_SUBMIT_EXCHANGE_REQUEST,
          data: exchangeRequest
        }).then(function (response) {
          console.log('Response of ExchangeRequest: ' + JSON.stringify(response.data));
          if (response.data.success == 1) _this.props.onExchangeRequestSubmitSuccess(_this.state.letterToExchange);
        }).catch(function (response) {
          //handle error
          console.log(response);
        });
      }
    }), _temp));
  }

  return _default;
}(Exchange__default);


// CONCATENATED MODULE: ./components/ExchangeResponse.js
function ExchangeResponse__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ExchangeResponse__typeof = function _typeof(obj) { return typeof obj; }; } else { ExchangeResponse__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ExchangeResponse__typeof(obj); }

function ExchangeResponse__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ExchangeResponse__possibleConstructorReturn(self, call) { if (call && (ExchangeResponse__typeof(call) === "object" || typeof call === "function")) { return call; } return ExchangeResponse__assertThisInitialized(self); }

function ExchangeResponse__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ExchangeResponse__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var ExchangeResponse__default =
/*#__PURE__*/
function (_Exchange) {
  ExchangeResponse__inherits(_default, _Exchange);

  function _default() {
    var _ref;

    var _temp, _this;

    ExchangeResponse__classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ExchangeResponse__possibleConstructorReturn(_this, (_temp = _this = ExchangeResponse__possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), Object.defineProperty(ExchangeResponse__assertThisInitialized(_this), "submitForm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var exchangeResponse = {
          request_user: _this.props.exchangeRequest.request_user,
          birthday: _this.state.birthday,
          favouriteFood: _this.state.favouriteFood,
          letterToExchange: _this.state.letterToExchange
        };
        console.log("ExchangeResponse: " + JSON.stringify(exchangeResponse));
        external__axios__default()({
          method: 'post',
          url: endpoints_default.a.API_SUBMIT_EXCHANGE_RESPONSE,
          data: exchangeResponse
        }).then(function (response) {
          console.log('Response of ExchangeResponse: ' + JSON.stringify(response.data));

          if (response.data.success == 1) {
            var letterToReceive = _this.props.exchangeRequest.letterToExchange;
            var letterToGive = _this.state.letterToExchange;

            _this.props.onExchangeResponseSubmitSuccess(letterToGive, letterToReceive, _this.props.exchangeRequest.request_user);
          }
        }).catch(function (response) {
          //handle error
          console.log(response);
        });
      }
    }), _temp));
  }

  return _default;
}(Exchange__default);


// CONCATENATED MODULE: ./components/WaitingForVerification.js
function WaitingForVerification__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { WaitingForVerification__typeof = function _typeof(obj) { return typeof obj; }; } else { WaitingForVerification__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return WaitingForVerification__typeof(obj); }

function WaitingForVerification__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WaitingForVerification__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WaitingForVerification__createClass(Constructor, protoProps, staticProps) { if (protoProps) WaitingForVerification__defineProperties(Constructor.prototype, protoProps); if (staticProps) WaitingForVerification__defineProperties(Constructor, staticProps); return Constructor; }

function WaitingForVerification__possibleConstructorReturn(self, call) { if (call && (WaitingForVerification__typeof(call) === "object" || typeof call === "function")) { return call; } return WaitingForVerification__assertThisInitialized(self); }

function WaitingForVerification__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WaitingForVerification__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var WaitingForVerification__default =
/*#__PURE__*/
function (_React$Component) {
  WaitingForVerification__inherits(_default, _React$Component);

  function _default() {
    WaitingForVerification__classCallCheck(this, _default);

    return WaitingForVerification__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  WaitingForVerification__createClass(_default, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        style: {
          textAlign: 'center',
          marginBottom: '30px'
        }
      }, external__react__default.a.createElement("h1", {
        style: {
          marginBottom: '20px'
        }
      }, "Waiting for other party to verify"), external__react__default.a.createElement("button", {
        onClick: this.props.cancel,
        className: "btn btn-danger"
      }, "Cancel"));
    }
  }]);

  return _default;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./pages/mainGame.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mainGame__default; });



function mainGame__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { mainGame__typeof = function _typeof(obj) { return typeof obj; }; } else { mainGame__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return mainGame__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function mainGame__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function mainGame__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function mainGame__createClass(Constructor, protoProps, staticProps) { if (protoProps) mainGame__defineProperties(Constructor.prototype, protoProps); if (staticProps) mainGame__defineProperties(Constructor, staticProps); return Constructor; }

function mainGame__possibleConstructorReturn(self, call) { if (call && (mainGame__typeof(call) === "object" || typeof call === "function")) { return call; } return mainGame__assertThisInitialized(self); }

function mainGame__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mainGame__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }














var mainGame__default =
/*#__PURE__*/
function (_Page) {
  mainGame__inherits(_default, _Page);

  function _default() {
    var _this;

    mainGame__classCallCheck(this, _default);

    _this = mainGame__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));
    Object.defineProperty(mainGame__assertThisInitialized(_this), "swapLetters", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(letterToGive, letterToReceive) {
        console.log("Giving away letter " + letterToGive);
        console.log("Receiving letter " + letterToReceive);
        var lettersAssigned = _this.state.lettersAssigned;
        lettersAssigned[lettersAssigned.indexOf(letterToGive)] = letterToReceive;

        _this.setState({
          lettersAssigned: lettersAssigned
        });
      }
    });
    Object.defineProperty(mainGame__assertThisInitialized(_this), "cancelWaitingForVerification", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(r) {
        _this.setState({
          isWaitingForCounterPartyToVerify: false
        });
      }
    });
    Object.defineProperty(mainGame__assertThisInitialized(_this), "onExchangeRequestSubmitSuccess", {
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
    Object.defineProperty(mainGame__assertThisInitialized(_this), "onExchangeResponseSubmitSuccess", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(letterToGive, letterToReceive, requestUser) {
        _this.swapLetters(letterToGive, letterToReceive);

        _this.setState({
          isVerifyingForCounterParty: false
        });
      }
    });
    Object.defineProperty(mainGame__assertThisInitialized(_this), "onClick", {
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
    Object.defineProperty(mainGame__assertThisInitialized(_this), "retriveLetters", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        external__axios__default()({
          method: 'post',
          url: endpoints_default.a.API_GET_ASSIGNED_LETTERS
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
    Object.defineProperty(mainGame__assertThisInitialized(_this), "retrieveActiveUsers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        external__axios__default()({
          method: 'post',
          url: endpoints_default.a.API_GET_ALL_ACTIVE_USERS
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
    Object.defineProperty(mainGame__assertThisInitialized(_this), "retriveUserName", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        external__axios__default()({
          method: 'post',
          url: endpoints_default.a.API_GET_SESSION
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
    _this.state = {
      userName: "",
      activeUsers: ["Test", "Mary"],
      lettersAssigned: [],
      userSelected: '',
      isWaitingForCounterPartyToVerify: false,
      isVerifyingForCounterParty: false,
      letterToGive: ''
    };
    _this.exchangeRequest = {};

    _this.retriveUserName();

    _this.retriveLetters();

    _this.retrieveActiveUsers();

    return _this;
  }

  mainGame__createClass(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        var _this2 = this;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.pusher = new external__pusher_js__default.a(credentials_default.a.PUSHER_APP_KEY, {
                  cluster: credentials_default.a.PUSHER_APP_CLUSTER,
                  encrypted: true
                });
                this.channel = this.pusher.subscribe(strings_default.a.PUSHER_CHANNEL);
                this.channel.bind(strings_default.a.PUSHER_NEW_USER_EVENT, function (user) {
                  console.log("Received new user from Pusher: " + user);
                  var newActiveUsers = _this2.state.activeUsers;
                  newActiveUsers.push(user);

                  _this2.setState({
                    activeUsers: newActiveUsers
                  });
                });
                this.channel.bind(strings_default.a.PUSHER_NEW_EXCHANGE_REQUEST_EVENT, function (exchangeRequest) {
                  console.log("Received new exchange request: " + JSON.stringify(exchangeRequest));

                  if (exchangeRequest.respond_user == _this2.state.userName) {
                    console.log("Exchange request is for me.");
                    _this2.exchangeRequest = exchangeRequest;

                    _this2.setState({
                      isVerifyingForCounterParty: true
                    });
                  }
                });
                this.channel.bind(strings_default.a.EXCHANGE_COMPLETED_EVENT, function (data) {
                  if (data.request_user == _this2.state.userName) {
                    console.log("Exchange request has completed: " + JSON.stringify(data));

                    _this2.setState({
                      isWaitingForCounterPartyToVerify: false
                    });

                    _this2.swapLetters(_this2.state.letterToGive, data.letterToReceive);
                  }
                });

              case 5:
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
      var _this3 = this;

      console.log("passing in user name into props " + this.state.userName);
      if (this.state.isWaitingForCounterPartyToVerify) return external__react__default.a.createElement(Layout["a" /* default */], null, external__react__default.a.createElement(WaitingForVerification__default, {
        cancel: this.cancelWaitingForVerification
      }));else if (this.state.isVerifyingForCounterParty) return external__react__default.a.createElement(Layout["a" /* default */], null, external__react__default.a.createElement("div", {
        className: "form-group"
      }, external__react__default.a.createElement("label", null, this.exchangeRequest.request_user, " has requested to connect.Please fill in his details below.")), external__react__default.a.createElement(ExchangeResponse__default, {
        targetUser: this.exchangeRequest.request_user,
        userName: this.exchangeRequest.request_user,
        onExchangeResponseSubmitSuccess: this.onExchangeResponseSubmitSuccess,
        lettersAvailable: this.state.lettersAssigned,
        exchangeRequest: this.exchangeRequest
      }));else return external__react__default.a.createElement(Layout["a" /* default */], null, external__react__default.a.createElement("div", {
        id: "wrapper",
        className: "jsx-2713142477"
      }, external__react__default.a.createElement("div", {
        id: "sidebar-wrapper",
        className: "jsx-2713142477"
      }, external__react__default.a.createElement("nav", {
        id: "spy",
        className: "jsx-2713142477"
      }, external__react__default.a.createElement("ul", {
        className: "jsx-2713142477" + " " + "sidebar-nav nav"
      }, this.state.activeUsers.map(function (user, index) {
        return external__react__default.a.createElement("li", {
          id: index,
          onClick: _this3.onClick,
          className: "jsx-2713142477" + " " + "sidebar-brand"
        }, user);
      })))), external__react__default.a.createElement("div", {
        id: "page-content-wrapper",
        className: "jsx-2713142477"
      }, external__react__default.a.createElement("div", {
        "data-spy": "scroll",
        "data-target": "#spy",
        className: "jsx-2713142477" + " " + "page-content inset"
      }, external__react__default.a.createElement(lettersComponent_LetterComponent, {
        lettersAssigned: this.state.lettersAssigned
      }), external__react__default.a.createElement("div", {
        style: {
          marginTop: '50px',
          marginBottom: '50px'
        },
        className: "jsx-2713142477" + " " + "form-group"
      }, external__react__default.a.createElement("label", {
        className: "jsx-2713142477"
      }, "Fill in the details of the player you would like to exchange with.")), external__react__default.a.createElement(ExchangeRequest__default, {
        targetUser: this.state.userSelected,
        userName: this.state.userName,
        onExchangeRequestSubmitSuccess: this.onExchangeRequestSubmitSuccess,
        userSelected: this.state.userSelected,
        lettersAvailable: this.state.lettersAssigned
      })))), external__react__default.a.createElement(style__default.a, {
        styleId: "2713142477",
        css: ["#wrapper.jsx-2713142477{padding-left:250px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}", "#sidebar-wrapper.jsx-2713142477{margin-left:-250px;left:250px;width:250px;background:#000;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}", "#wrapper.active.jsx-2713142477{padding-left:0;}", "#wrapper.active.jsx-2713142477 #sidebar-wrapper.jsx-2713142477{left:0;}", "#page-content-wrapper.jsx-2713142477{width:100%;}", ".sidebar-nav.jsx-2713142477{position:absolute;top:0;width:250px;list-style:none;margin:0;padding:0;}", ".sidebar-nav.jsx-2713142477 li.jsx-2713142477{line-height:40px;text-indent:20px;}", ".sidebar-nav.jsx-2713142477 li.jsx-2713142477 a.jsx-2713142477{color:#999999;display:block;-webkit-text-decoration:none;text-decoration:none;padding-left:60px;}", ".sidebar-nav.jsx-2713142477 li.jsx-2713142477 a.jsx-2713142477 span.jsx-2713142477:before{position:absolute;left:0;color:#41484c;text-align:center;width:20px;line-height:18px;}", ".sidebar-nav.jsx-2713142477 li.jsx-2713142477 a.jsx-2713142477:hover,.sidebar-nav.jsx-2713142477 li.active.jsx-2713142477{color:#fff;background:rgba(255,255,255,0.2);-webkit-text-decoration:none;text-decoration:none;}", ".sidebar-nav.jsx-2713142477 li.jsx-2713142477 a.jsx-2713142477:active,.sidebar-nav.jsx-2713142477 li.jsx-2713142477 a.jsx-2713142477:focus{-webkit-text-decoration:none;text-decoration:none;}", ".sidebar-nav.jsx-2713142477>.sidebar-brand.jsx-2713142477{height:65px;line-height:60px;font-size:18px;}", ".sidebar-nav.jsx-2713142477>.sidebar-brand.jsx-2713142477 a.jsx-2713142477{color:#999999;}", ".sidebar-nav.jsx-2713142477>.sidebar-brand.jsx-2713142477 a.jsx-2713142477:hover{color:#fff;background:none;}", ".inset.jsx-2713142477{padding:20px;}", "@media (max-width:767px){#wrapper.jsx-2713142477{padding-left:0;}#sidebar-wrapper.jsx-2713142477{left:0;}#wrapper.active.jsx-2713142477{position:relative;left:250px;}#wrapper.active.jsx-2713142477 #sidebar-wrapper.jsx-2713142477{left:250px;width:250px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#menu-toggle.jsx-2713142477{display:inline-block;}.inset.jsx-2713142477{padding:15px;}}"]
      }));
    }
  }]);

  return _default;
}(page["a" /* default */]);



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var PUSHER_CHANNEL = 'iceBreaker';
var PUSHER_NEW_USER_EVENT = 'new-user';
var PUSHER_NEW_EXCHANGE_REQUEST_EVENT = 'new-exchange-request';
var PUSHER_NEW_EXCHANGE_RESPONSE_EVENT = 'new-exchange-response';
var EXCHANGE_COMPLETED_EVENT = 'exchange-completed';
module.exports = {
  PUSHER_CHANNEL: PUSHER_CHANNEL,
  PUSHER_NEW_USER_EVENT: PUSHER_NEW_USER_EVENT,
  PUSHER_NEW_EXCHANGE_REQUEST_EVENT: PUSHER_NEW_EXCHANGE_REQUEST_EVENT,
  PUSHER_NEW_EXCHANGE_RESPONSE_EVENT: PUSHER_NEW_EXCHANGE_RESPONSE_EVENT,
  EXCHANGE_COMPLETED_EVENT: EXCHANGE_COMPLETED_EVENT
};

/***/ }),
/* 16 */
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

/***/ })
/******/ ]);