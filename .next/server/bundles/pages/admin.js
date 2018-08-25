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

/***/ "./pages/admin.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Page__ = __webpack_require__("./components/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_strings__ = __webpack_require__("./constants/strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_strings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants_strings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_gameUtils__ = __webpack_require__("./utils/gameUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_gameUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__utils_gameUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_credentials__ = __webpack_require__("./constants/credentials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_credentials___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__constants_credentials__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_notificationUtils__ = __webpack_require__("./utils/notificationUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_notificationUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__utils_notificationUtils__);
var _jsxFileName = "E:\\iceBreaker\\pages\\admin.js";


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
    Object.defineProperty(_assertThisInitialized(_this), "retrieveActiveUsers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_5__utils_gameUtils___default.a.getActiveUsers().then(function (activeUsers) {
          _this.setState({
            activeUsers: activeUsers
          });
        }, function (err) {});
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setupPusher", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.pusher = new __WEBPACK_IMPORTED_MODULE_2_pusher_js___default.a(__WEBPACK_IMPORTED_MODULE_7__constants_credentials___default.a.PUSHER_APP_KEY, {
          cluster: __WEBPACK_IMPORTED_MODULE_7__constants_credentials___default.a.PUSHER_APP_CLUSTER,
          encrypted: true
        });
        _this.channel = _this.pusher.subscribe(__WEBPACK_IMPORTED_MODULE_4__constants_strings___default.a.PUSHER_CHANNEL);

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_4__constants_strings___default.a.PUSHER_USER_LIST_UPDATE_EVENT, function (users) {
          var activeUsers = users.activeUsers;
          console.log("Received new user list from Pusher: " + activeUsers);
          var newActiveUsers = activeUsers.map(function (user) {
            return user.name;
          });

          _this.setState({
            activeUsers: newActiveUsers
          });
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_4__constants_strings___default.a.PUSHER_GAME_START_EVENT, function (users) {
          _this.setState({
            gameStatus: 'IN PROGRESS'
          });
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_4__constants_strings___default.a.PUSHER_GAME_STOP_EVENT, function (users) {
          _this.setState({
            gameStatus: 'INACTIVE'
          });
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_4__constants_strings___default.a.PUSHER_GAME_COMPLETED_EVENT, function (users) {
          _this.setState({
            gameStatus: 'INACTIVE'
          });
        });

        window.onbeforeunload = function () {
          this.pusher.disconnect();
        };
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handlePasswordChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          password: e.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "startGame", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_5__utils_gameUtils___default.a.startGame(_this.state.password).then(function (notificationMessage) {
          __WEBPACK_IMPORTED_MODULE_8__utils_notificationUtils___default.a.showNotification(notificationMessage);
        }, function (notificationMessage) {
          __WEBPACK_IMPORTED_MODULE_8__utils_notificationUtils___default.a.showNotification(notificationMessage);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "stopGame", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_5__utils_gameUtils___default.a.stopGame(_this.state.password).then(function (notificationMessage) {
          __WEBPACK_IMPORTED_MODULE_8__utils_notificationUtils___default.a.showNotification(notificationMessage);
        }, function (notificationMessage) {
          __WEBPACK_IMPORTED_MODULE_8__utils_notificationUtils___default.a.showNotification(notificationMessage);
        });
      }
    });
    _this.state = {
      password: '',
      activeUsers: [],
      gameStatus: __WEBPACK_IMPORTED_MODULE_4__constants_strings___default.a.GAME_STATUS_INACTIVE
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.retrieveActiveUsers();
      this.retrieveGameStatus();
      this.setupPusher();
    }
  }, {
    key: "retrieveGameStatus",
    value: function retrieveGameStatus() {
      __WEBPACK_IMPORTED_MODULE_5__utils_gameUtils___default.a.checkGameStarted().then(function (success) {
        this.setState({
          gameStatus: __WEBPACK_IMPORTED_MODULE_4__constants_strings___default.a.GAME_STATUS_IN_PROGRESS
        });
      }, function (failure) {
        this.setState({
          gameStatus: __WEBPACK_IMPORTED_MODULE_4__constants_strings___default.a.GAME_STATUS_INACTIVE
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        className: "jsx-2924920866" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: "jsx-2924920866"
      }, "Password"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        onChange: this.handlePasswordChange,
        name: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: "jsx-2924920866" + " " + "form-control"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        className: "jsx-2924920866"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "start-button",
        onClick: this.startGame,
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-2924920866" + " " + "btn btn-primary"
      }, "Start Game"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "stop-button",
        onClick: this.stopGame,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        className: "jsx-2924920866" + " " + "btn btn-danger"
      }, "Stop Game")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "game-status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        className: "jsx-2924920866"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        className: "jsx-2924920866"
      }, "Current Game Status: ", this.state.gameStatus)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "players",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        className: "jsx-2924920866"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-2924920866"
      }, "Current players in session"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        className: "jsx-2924920866" + " " + "list-group"
      }, this.state.activeUsers.map(function (user, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          className: "jsx-2924920866" + " " + "list-group-item"
        }, user);
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2924920866",
        css: "#start-button.jsx-2924920866{margin-right:15px;}#players.jsx-2924920866{margin-top:15px;}#game-status.jsx-2924920866{margin-top:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhZG1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSTRCLEFBRzJDLEFBR0YsQUFHQSxnQkFGcEIsQUFHQSxFQU5BIiwiZmlsZSI6InBhZ2VzXFxhZG1pbi5qcyIsInNvdXJjZVJvb3QiOiJFOlxcaWNlQnJlYWtlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFB1c2hlciBmcm9tIFwicHVzaGVyLWpzXCI7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSc7XHJcbmltcG9ydCBzdHJpbmdzIGZyb20gJy4uL2NvbnN0YW50cy9zdHJpbmdzJ1xyXG5pbXBvcnQgZ2FtZVV0aWxzIGZyb20gXCIuLi91dGlscy9nYW1lVXRpbHNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcydcclxuaW1wb3J0IGNyZWRlbnRpYWxzIGZyb20gXCIuLi9jb25zdGFudHMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IG5vdGlmaWNhdGlvblV0aWxzIGZyb20gXCIuLi91dGlscy9ub3RpZmljYXRpb25VdGlsc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFBhZ2V7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6JycsXHJcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJzOiBbXSxcclxuICAgICAgICAgICAgZ2FtZVN0YXR1czogc3RyaW5ncy5HQU1FX1NUQVRVU19JTkFDVElWRVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMucmV0cmlldmVBY3RpdmVVc2VycygpXHJcbiAgICAgICAgdGhpcy5yZXRyaWV2ZUdhbWVTdGF0dXMoKVxyXG4gICAgICAgIHRoaXMuc2V0dXBQdXNoZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHJpZXZlR2FtZVN0YXR1cygpe1xyXG4gICAgICAgIGdhbWVVdGlscy5jaGVja0dhbWVTdGFydGVkKCkudGhlbihmdW5jdGlvbihzdWNjZXNzKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhdHVzOiBzdHJpbmdzLkdBTUVfU1RBVFVTX0lOX1BST0dSRVNTXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxmdW5jdGlvbihmYWlsdXJlKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhdHVzOiBzdHJpbmdzLkdBTUVfU1RBVFVTX0lOQUNUSVZFXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZUFjdGl2ZVVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGdhbWVVdGlscy5nZXRBY3RpdmVVc2VycygpLnRoZW4oKGFjdGl2ZVVzZXJzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlcnMgOiBhY3RpdmVVc2Vyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sZnVuY3Rpb24oZXJyKXt9KVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwUHVzaGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcihjcmVkZW50aWFscy5QVVNIRVJfQVBQX0tFWSwge1xyXG4gICAgICAgICAgICBjbHVzdGVyOiBjcmVkZW50aWFscy5QVVNIRVJfQVBQX0NMVVNURVIsXHJcbiAgICAgICAgICAgIGVuY3J5cHRlZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUoc3RyaW5ncy5QVVNIRVJfQ0hBTk5FTCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX1VTRVJfTElTVF9VUERBVEVfRVZFTlQsICh1c2VycykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVVc2VycyA9IHVzZXJzLmFjdGl2ZVVzZXJzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgbmV3IHVzZXIgbGlzdCBmcm9tIFB1c2hlcjogXCIgKyBhY3RpdmVVc2VycylcclxuICAgICAgICAgICAgdmFyIG5ld0FjdGl2ZVVzZXJzID0gYWN0aXZlVXNlcnMubWFwKHVzZXIgPT4gdXNlci5uYW1lKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXJzOiBuZXdBY3RpdmVVc2Vyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLlBVU0hFUl9HQU1FX1NUQVJUX0VWRU5ULCAodXNlcnMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhdHVzOiAnSU4gUFJPR1JFU1MnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX0dBTUVfU1RPUF9FVkVOVCwgKHVzZXJzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXR1czogJ0lOQUNUSVZFJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLlBVU0hFUl9HQU1FX0NPTVBMRVRFRF9FVkVOVCwgKHVzZXJzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXR1czogJ0lOQUNUSVZFJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hlci5kaXNjb25uZWN0KClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2FtZVV0aWxzLnN0YXJ0R2FtZSh0aGlzLnN0YXRlLnBhc3N3b3JkKS50aGVuKChub3RpZmljYXRpb25NZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24obm90aWZpY2F0aW9uTWVzc2FnZSlcclxuICAgICAgICB9LChub3RpZmljYXRpb25NZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24obm90aWZpY2F0aW9uTWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BHYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGdhbWVVdGlscy5zdG9wR2FtZSh0aGlzLnN0YXRlLnBhc3N3b3JkKS50aGVuKChub3RpZmljYXRpb25NZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24obm90aWZpY2F0aW9uTWVzc2FnZSlcclxuICAgICAgICB9LChub3RpZmljYXRpb25NZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24obm90aWZpY2F0aW9uTWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibmFtZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSdzdGFydC1idXR0b24nIG9uQ2xpY2s9e3RoaXMuc3RhcnRHYW1lfSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3RhcnQgR2FtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9J3N0b3AtYnV0dG9uJyBvbkNsaWNrPXt0aGlzLnN0b3BHYW1lfSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPlN0b3AgR2FtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZ2FtZS1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBHYW1lIFN0YXR1czoge3RoaXMuc3RhdGUuZ2FtZVN0YXR1c308L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdwbGF5ZXJzJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBwbGF5ZXJzIGluIHNlc3Npb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFjdGl2ZVVzZXJzLm1hcCgodXNlcixpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj57dXNlcn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI3BsYXllcnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAjZ2FtZS1zdGF0dXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=pages\\admin.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_3__components_Page__["a" /* default */]);



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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/admin.js");


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
//# sourceMappingURL=admin.js.map