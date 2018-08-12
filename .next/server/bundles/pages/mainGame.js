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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ExchangeRequest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_dataSource__ = __webpack_require__("./data/dataSource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_dataSource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_dataSource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_endpoints__ = __webpack_require__("./constants/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_endpoints___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constants_endpoints__);
var _jsxFileName = "E:\\iceBreaker\\components\\ExchangeRequest.js";

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
    Object.defineProperty(_assertThisInitialized(_this), "submitExchangeRequest", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var exchangeRequest = {
          name: _this.props.userSelected,
          birthday: _this.state.birthday,
          favouriteFood: _this.state.favouriteFood,
          letterToExchange: _this.state.letterToExchange,
          byUser: _this.props.userName
        };
        console.log("ExchangeRequest: " + JSON.stringify(exchangeRequest));
        __WEBPACK_IMPORTED_MODULE_2_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_3__constants_endpoints___default.a.API_SUBMIT_EXCHANGE_REQUEST,
          data: exchangeRequest
        }).then(function (response) {
          console.log('Response of ExchangeRequest: ' + JSON.stringify(response.data));
          if (response.data.success == 1) _this.props.onExchangeRequestSubmitSuccess(_this.state.letterToExchange);
        }).catch(function (response) {
          //handle error
          console.log(response);
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
    _this.state = {
      birthday: '',
      favouriteFood: '',
      letterToExchange: ''
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      console.log("Exchange request has received new props " + JSON.stringify(newProps));
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Name")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, this.props.userSelected)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Birthday"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        className: "form-control",
        name: "birthday",
        onChange: this.handleBirthdayChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Favourite Food"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        className: "form-control",
        name: "favouriteFood",
        onChange: this.handleFavouriteFoodChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Select his/her favourite food"), __WEBPACK_IMPORTED_MODULE_1__data_dataSource___default.a.FOOD_OPTIONS.map(function (foodOption) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
          value: foodOption,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, foodOption);
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Letter To Exchange Away"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        className: "form-control",
        name: "letterToExchange",
        onChange: this.handleLetterToExchangeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Select a letter to exchange away"), this.props.lettersAvailable.map(function (letter) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
          value: letter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, letter);
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.submitExchangeRequest,
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Submit"));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



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
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width,height=device-height, initial-scale=2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
        integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://unpkg.com/react-tabs@2/style/react-tabs.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, this.props.children));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/lettersComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "E:\\iceBreaker\\components\\lettersComponent.js";

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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, this.state.lettersUsed.join(' '), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.removeOneCharFromLettersUsed,
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "C")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, this.state.lettersAvailable.map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          value: index,
          onClick: _this2.handleLetterSelected,
          className: "btn btn-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, letter);
      })));
    }
  }]);

  return LetterComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/page.js":
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

/***/ "./components/respondToExchangeRequest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_dataSource__ = __webpack_require__("./data/dataSource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_dataSource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_dataSource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_endpoints__ = __webpack_require__("./constants/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_endpoints___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants_endpoints__);
var _jsxFileName = "E:\\iceBreaker\\components\\respondToExchangeRequest.js";

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
    Object.defineProperty(_assertThisInitialized(_this), "submitExchangeResponse", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var exchangeResponse = {
          name: _this.props.exchangeRequestReceived.byUser,
          birthday: _this.state.birthday,
          favouriteFood: _this.state.favouriteFood,
          letterToExchange: _this.state.letterToExchange
        };
        console.log("ExchangeResponse: " + JSON.stringify(exchangeResponse));
        __WEBPACK_IMPORTED_MODULE_3_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_4__constants_endpoints___default.a.API_SUBMIT_EXCHANGE_RESPONSE,
          data: exchangeResponse
        }).then(function (response) {
          console.log('Response of ExchangeRequest: ' + JSON.stringify(response.data));

          if (response.data.success == 1) {
            var letterToReceive = _this.props.exchangeRequestReceived.letterToExchange;
            var letterToGive = _this.state.letterToExchange;

            _this.props.onExchangeResponseSubmitSuccess(letterToGive, letterToReceive, _this.props.exchangeRequestReceived.byUser);
          }
        }).catch(function (response) {
          //handle error
          console.log(response);
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
    _this.state = {
      birthday: '',
      favouriteFood: '',
      letterToExchange: ''
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Name")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, this.props.exchangeRequestReceived.byUser)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Birthday"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        className: "form-control",
        name: "birthday",
        onChange: this.handleBirthdayChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Favourite Food"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("select", {
        className: "form-control",
        name: "favouriteFood",
        onChange: this.handleFavouriteFoodChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Select his/her favourite food"), __WEBPACK_IMPORTED_MODULE_1__data_dataSource___default.a.FOOD_OPTIONS.map(function (foodOption) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("option", {
          value: foodOption,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, foodOption);
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Letter To Exchange Away"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("select", {
        className: "form-control",
        name: "letterToExchange",
        onChange: this.handleLetterToExchangeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Select a letter to exchange away"), this.props.lettersAvailable.map(function (letter) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("option", {
          value: letter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, letter);
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        onClick: this.submitExchangeResponse,
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Submit"));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);



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

/***/ "./constants/strings.js":
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

/***/ "./data/dataSource.js":
/***/ (function(module, exports) {

var FOOD_OPTIONS = ['hokkien mee', 'laksa', 'mee rebus'];
module.exports = {
  FOOD_OPTIONS: FOOD_OPTIONS
};

/***/ }),

/***/ "./pages/mainGame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_page__ = __webpack_require__("./components/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_endpoints__ = __webpack_require__("./constants/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_endpoints___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants_endpoints__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_strings__ = __webpack_require__("./constants/strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_strings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__constants_strings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_pusher_js__ = __webpack_require__("pusher-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_pusher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_lettersComponent__ = __webpack_require__("./components/lettersComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ExchangeRequest__ = __webpack_require__("./components/ExchangeRequest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_respondToExchangeRequest__ = __webpack_require__("./components/respondToExchangeRequest.js");

var _jsxFileName = "E:\\iceBreaker\\pages\\mainGame.js";

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
    Object.defineProperty(_assertThisInitialized(_this), "swapLetters", {
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
      value: function value(letterToGive, letterToReceive, requestUser) {
        _this.swapLetters(letterToGive, letterToReceive);

        _this.setState({
          isVerifyingForCounterParty: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        console.log("clicked " + e.target.value);

        _this.setState({
          userSelected: _this.state.activeUsers[e.target.value]
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "retriveLetters", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_3_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_4__constants_endpoints___default.a.API_GET_ASSIGNED_LETTERS
        }).then(function (response) {
          var lettersAssigned = response.data;
          console.log('Got letters assigned as ' + lettersAssigned);

          _this.setState({
            lettersAssigned: lettersAssigned
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
        __WEBPACK_IMPORTED_MODULE_3_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_4__constants_endpoints___default.a.API_GET_ALL_ACTIVE_USERS
        }).then(function (response) {
          console.log("Got response from API backend " + JSON.stringify(response));
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
        __WEBPACK_IMPORTED_MODULE_3_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_4__constants_endpoints___default.a.API_GET_SESSION
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
      activeUsers: [],
      lettersAssigned: [],
      userSelected: '',
      isWaitingForCounterPartyToVerify: false,
      isVerifyingForCounterParty: false,
      letterToGive: ''
    };
    _this.exchangeRequestReceived = {};

    _this.retriveUserName();

    _this.retriveLetters();

    _this.retrieveActiveUsers();

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var _this2 = this;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.pusher = new __WEBPACK_IMPORTED_MODULE_6_pusher_js___default.a("30d8dabc87d7db943336", {
                  cluster: "ap1",
                  encrypted: true
                });
                this.channel = this.pusher.subscribe(__WEBPACK_IMPORTED_MODULE_5__constants_strings___default.a.PUSHER_CHANNEL);
                this.channel.bind(__WEBPACK_IMPORTED_MODULE_5__constants_strings___default.a.PUSHER_NEW_USER_EVENT, function (user) {
                  console.log("Received new user from Pusher: " + user);
                  var newActiveUsers = _this2.state.activeUsers;
                  newActiveUsers.push(user);

                  _this2.setState({
                    activeUsers: newActiveUsers
                  });
                });
                this.channel.bind(__WEBPACK_IMPORTED_MODULE_5__constants_strings___default.a.PUSHER_NEW_EXCHANGE_REQUEST_EVENT, function (ExchangeRequest) {
                  console.log("Received new exchange request: " + JSON.stringify(ExchangeRequest));

                  if (ExchangeRequest.name == _this2.state.userName) {
                    console.log("Exchange request is for me.");
                    _this2.exchangeRequestReceived = ExchangeRequest;

                    _this2.setState({
                      isVerifyingForCounterParty: true
                    });
                  }
                });
                this.channel.bind(__WEBPACK_IMPORTED_MODULE_5__constants_strings___default.a.EXCHANGE_COMPLETED_EVENT, function (data) {
                  if (data.requestUser == _this2.state.userName) {
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
      if (this.state.isWaitingForCounterPartyToVerify) return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, "Waiting for other party to verify", __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("button", {
        onClick: this.cancelWaitingForVerification,
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, "Cancel"));else if (this.state.isVerifyingForCounterParty) return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_respondToExchangeRequest__["a" /* default */], {
        onExchangeResponseSubmitSuccess: this.onExchangeResponseSubmitSuccess,
        lettersAvailable: this.state.lettersAssigned,
        exchangeRequestReceived: this.exchangeRequestReceived,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      });else return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, this.state.activeUsers.map(function (user) {
        return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("li", {
          onClick: _this3.onClick,
          className: "list-group-item",
          value: user,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          }
        }, user);
      })), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_lettersComponent__["a" /* default */], {
        lettersAssigned: this.state.lettersAssigned,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ExchangeRequest__["a" /* default */], {
        userName: this.state.userName,
        onExchangeRequestSubmitSuccess: this.onExchangeRequestSubmitSuccess,
        userSelected: this.state.userSelected,
        lettersAvailable: this.state.lettersAssigned,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1__components_page__["a" /* default */]);



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/mainGame.js");


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

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=mainGame.js.map