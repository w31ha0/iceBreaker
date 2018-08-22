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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-notify-toast");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var axios = __webpack_require__(6);

var strings = __webpack_require__(3);

var endpoints = __webpack_require__(7);

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
/* 3 */
/***/ (function(module, exports) {

var PUSHER_CHANNEL = 'iceBreaker';
var PUSHER_USER_LIST_UPDATE_EVENT = 'update-user-list';
var PUSHER_GAME_START_EVENT = 'game-start';
var PUSHER_NEW_EXCHANGE_REQUEST_EVENT = 'new-exchange-request';
var PUSHER_NEW_EXCHANGE_RESPONSE_EVENT = 'new-exchange-response';
var EXCHANGE_COMPLETED_EVENT = 'exchange-completed';
var PUSHER_GAME_STOP_EVENT = 'game-stop';
var PUSHER_EXCHANGE_CANCELLED_EVENT = 'cancel-exchange';
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
  NOTIFICATION_GAME_ALREADY_STOPPED: NOTIFICATION_GAME_ALREADY_STOPPED
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var notify = __webpack_require__(1).notify;

var config = __webpack_require__(15);

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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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
var API_START_GAME = '/startGame';
var API_USER_COMPLETED_GAME = '/userCompletedGame';
var API_CHECK_AUTHENTICATED = '/checkAuthenticated';
var API_CHECK_GAME_STARTED = '/checkGameStarted';
var API_STOP_GAME = '/stopGame';
var API_CANCEL_EXCHANGE = '/cancelExchange';
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
  API_CHECK_GAME_STARTED: API_CHECK_GAME_STARTED,
  API_STOP_GAME: API_STOP_GAME,
  API_CANCEL_EXCHANGE: API_CANCEL_EXCHANGE
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_notify_toast__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_notify_toast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_notify_toast__);
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
        content: "width=device-width,height=device-height"
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
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "mobile-web-app-capable",
        content: "yes"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Container"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_notify_toast___default.a, null), this.props.children));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var axios = __webpack_require__(6);

var endpoints = __webpack_require__(7);

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
  }
};

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports) {

var FOOD_OPTIONS = ['hokkien mee', 'laksa', 'mee rebus'];
var DESHU_OPTIONS = ['博A', '博B', '忍', '信', '公'];
module.exports = {
  FOOD_OPTIONS: FOOD_OPTIONS,
  DESHU_OPTIONS: DESHU_OPTIONS
};

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(21);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(5);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "pusher-js"
var external__pusher_js_ = __webpack_require__(9);
var external__pusher_js__default = /*#__PURE__*/__webpack_require__.n(external__pusher_js_);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(10);
var utils_default = /*#__PURE__*/__webpack_require__.n(utils);

// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(11);

// EXTERNAL MODULE: ./data/dataSource.js
var dataSource = __webpack_require__(16);
var dataSource_default = /*#__PURE__*/__webpack_require__.n(dataSource);

// EXTERNAL MODULE: external "react-notify-toast"
var external__react_notify_toast_ = __webpack_require__(1);
var external__react_notify_toast__default = /*#__PURE__*/__webpack_require__.n(external__react_notify_toast_);

// CONCATENATED MODULE: ./components/SignIn.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var SignIn__default =
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

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "form-group"
      }, external__react__default.a.createElement("label", null, "Fill in your details below to join the game.")), external__react__default.a.createElement("div", {
        className: "form-group"
      }, external__react__default.a.createElement("label", null, "Name"), external__react__default.a.createElement("input", {
        onChange: this.handleNameChange,
        id: "name",
        "class": "form-control",
        name: "name"
      })), external__react__default.a.createElement("div", {
        className: "form-group"
      }, external__react__default.a.createElement("label", null, "Deshu"), external__react__default.a.createElement("select", {
        onChange: this.handleDeshuChange,
        className: "form-control",
        name: "deshu"
      }, external__react__default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true
      }, "Select your deshu."), dataSource_default.a.DESHU_OPTIONS.map(function (deshu) {
        return external__react__default.a.createElement("option", {
          value: deshu
        }, deshu);
      }))), external__react__default.a.createElement("div", {
        className: "form-group"
      }, external__react__default.a.createElement("label", null, "Birthday"), external__react__default.a.createElement("input", {
        type: "date",
        onChange: this.handleBirthdayChange,
        "class": "form-control",
        name: "birthday"
      })), external__react__default.a.createElement("div", {
        className: "form-group"
      }, external__react__default.a.createElement("label", null, "Favourite Food"), external__react__default.a.createElement("select", {
        onChange: this.handleFavouriteFoodChange,
        "class": "form-control",
        name: "favouriteFood"
      }, external__react__default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true
      }, "Select your favourite food"), dataSource_default.a.FOOD_OPTIONS.map(function (foodOption) {
        return external__react__default.a.createElement("option", {
          value: foodOption
        }, foodOption);
      }))), external__react__default.a.createElement("button", {
        onClick: function onClick() {
          _this2.props.onSignIn(_this2.state.name, _this2.state.birthday, _this2.state.favouriteFood, _this2.state.deshu);
        },
        type: "submit",
        className: "btn btn-primary"
      }, "Submit"));
    }
  }]);

  return _default;
}(external__react__default.a.Component);


// EXTERNAL MODULE: ./constants/strings.js
var strings = __webpack_require__(3);
var strings_default = /*#__PURE__*/__webpack_require__.n(strings);

// EXTERNAL MODULE: ./utils/gameUtils.js
var gameUtils = __webpack_require__(2);
var gameUtils_default = /*#__PURE__*/__webpack_require__.n(gameUtils);

// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(8);

// EXTERNAL MODULE: ./constants/credentials.js
var credentials = __webpack_require__(14);
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials);

// CONCATENATED MODULE: ./components/LoadingScreen.js
function LoadingScreen__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LoadingScreen__typeof = function _typeof(obj) { return typeof obj; }; } else { LoadingScreen__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LoadingScreen__typeof(obj); }

function LoadingScreen__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LoadingScreen__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LoadingScreen__createClass(Constructor, protoProps, staticProps) { if (protoProps) LoadingScreen__defineProperties(Constructor.prototype, protoProps); if (staticProps) LoadingScreen__defineProperties(Constructor, staticProps); return Constructor; }

function LoadingScreen__possibleConstructorReturn(self, call) { if (call && (LoadingScreen__typeof(call) === "object" || typeof call === "function")) { return call; } return LoadingScreen__assertThisInitialized(self); }

function LoadingScreen__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LoadingScreen__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var LoadingScreen__default =
/*#__PURE__*/
function (_React$Component) {
  LoadingScreen__inherits(_default, _React$Component);

  function _default() {
    LoadingScreen__classCallCheck(this, _default);

    return LoadingScreen__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  LoadingScreen__createClass(_default, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "form-group"
      }, external__react__default.a.createElement("label", null, "Please wait for the game master to start the game."));
    }
  }]);

  return _default;
}(external__react__default.a.Component);


// EXTERNAL MODULE: ./utils/notificationUtils.js
var notificationUtils = __webpack_require__(4);
var notificationUtils_default = /*#__PURE__*/__webpack_require__.n(notificationUtils);

// CONCATENATED MODULE: ./components/LettersComponent.js


function LettersComponent__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LettersComponent__typeof = function _typeof(obj) { return typeof obj; }; } else { LettersComponent__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LettersComponent__typeof(obj); }

function LettersComponent__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LettersComponent__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LettersComponent__createClass(Constructor, protoProps, staticProps) { if (protoProps) LettersComponent__defineProperties(Constructor.prototype, protoProps); if (staticProps) LettersComponent__defineProperties(Constructor, staticProps); return Constructor; }

function LettersComponent__possibleConstructorReturn(self, call) { if (call && (LettersComponent__typeof(call) === "object" || typeof call === "function")) { return call; } return LettersComponent__assertThisInitialized(self); }

function LettersComponent__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function LettersComponent__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var LettersComponent_LetterComponent =
/*#__PURE__*/
function (_React$Component) {
  LettersComponent__inherits(LetterComponent, _React$Component);

  function LetterComponent(props) {
    var _this;

    LettersComponent__classCallCheck(this, LetterComponent);

    _this = LettersComponent__possibleConstructorReturn(this, (LetterComponent.__proto__ || Object.getPrototypeOf(LetterComponent)).call(this, props));
    Object.defineProperty(LettersComponent__assertThisInitialized(_this), "handleLetterSelected", {
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
    Object.defineProperty(LettersComponent__assertThisInitialized(_this), "removeOneCharFromLettersUsed", {
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
    Object.defineProperty(LettersComponent__assertThisInitialized(_this), "handleLettersChanged", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.lettersUsed.join('') === _this.props.userName && typeof window !== 'undefined') gameUtils_default.a.completeGame().then(function () {
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

  LettersComponent__createClass(LetterComponent, [{
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

      return external__react__default.a.createElement("div", {
        className: "jsx-942445572"
      }, external__react__default.a.createElement("div", {
        id: "instructions2",
        className: "jsx-942445572" + " " + "form-group"
      }, external__react__default.a.createElement("label", {
        className: "jsx-942445572"
      }, "To complete the game, click on the blue boxes below to form your username: ", this.props.userName)), external__react__default.a.createElement("div", {
        id: "instructions",
        className: "jsx-942445572" + " " + "form-group"
      }, external__react__default.a.createElement("label", {
        className: "jsx-942445572"
      }, "To get the letters you need, click a player on the left to begin exchanging letters with him/her.")), external__react__default.a.createElement("div", {
        className: "jsx-942445572"
      }, external__react__default.a.createElement("pre", {
        className: "jsx-942445572"
      }, this.state.lettersUsed.join(' ')), external__react__default.a.createElement("button", {
        id: "cancel-btn",
        onClick: this.removeOneCharFromLettersUsed,
        className: "jsx-942445572" + " " + "btn btn-light"
      }, "Backspace")), external__react__default.a.createElement("div", {
        id: "letters-available",
        className: "jsx-942445572"
      }, this.state.lettersAvailable.map(function (letter, index) {
        return external__react__default.a.createElement("button", {
          id: "letter-available",
          value: index,
          onClick: _this2.handleLetterSelected,
          className: "jsx-942445572" + " " + "btn btn-primary"
        }, /\S/.test(letter) ? letter : "Space");
      })), external__react__default.a.createElement(style__default.a, {
        styleId: "942445572",
        css: ["#cancel-btn.jsx-942445572{margin-left:0px;margin-bottom:20px;}", "#letters-available.jsx-942445572{margin-bottom:20px;}", "#letter-available.jsx-942445572{margin:5px;}", "#instructions.jsx-942445572{margin-bottom:15px;}", "#instructions2.jsx-942445572{margin-bottom:15px;}"]
      }));
    }
  }]);

  return LetterComponent;
}(external__react__default.a.Component);


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
    Object.defineProperty(Exchange__assertThisInitialized(_this), "checkIfFieldsAreComplete", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(userSelected, birthday, favouriteFood, deshu, letterToExchange) {
        if (!userSelected || !birthday || !favouriteFood || !deshu || !letterToExchange) {
          notificationUtils_default.a.showNotification(strings_default.a.NOTIFICATION_INCOMPLETE_DETAILS);
          return false;
        }

        return true;
      }
    });
    Object.defineProperty(Exchange__assertThisInitialized(_this), "handleBirthdayChange", {
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
    Object.defineProperty(Exchange__assertThisInitialized(_this), "handleFavouriteFoodChange", {
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
    Object.defineProperty(Exchange__assertThisInitialized(_this), "handleLetterToExchangeChange", {
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
    Object.defineProperty(Exchange__assertThisInitialized(_this), "handleDeshuChange", {
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
    Object.defineProperty(Exchange__assertThisInitialized(_this), "updateExchangeData", {
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
    _this.state = {
      birthday: '',
      favouriteFood: 'default',
      deshu: "default",
      letterToExchange: ''
    };
    return _this;
  }

  Exchange__createClass(_default, [{
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
      return external__react__default.a.createElement("div", {
        className: "jsx-2910031397"
      }, external__react__default.a.createElement("div", {
        className: "jsx-2910031397" + " " + "form-group"
      }, external__react__default.a.createElement("label", {
        className: "jsx-2910031397"
      }, "Name")), external__react__default.a.createElement("div", {
        className: "jsx-2910031397" + " " + "form-group"
      }, external__react__default.a.createElement("label", {
        className: "jsx-2910031397"
      }, this.props.targetUser)), external__react__default.a.createElement("div", {
        className: "jsx-2910031397" + " " + "form-group"
      }, external__react__default.a.createElement("label", {
        className: "jsx-2910031397"
      }, "Deshu"), external__react__default.a.createElement("select", {
        value: this.state.deshu,
        onChange: this.handleDeshuChange,
        name: "deshu",
        className: "jsx-2910031397" + " " + "form-control"
      }, external__react__default.a.createElement("option", {
        disabled: true,
        value: "default",
        className: "jsx-2910031397"
      }, "Select his/her deshu."), dataSource_default.a.DESHU_OPTIONS.map(function (deshu) {
        return external__react__default.a.createElement("option", {
          value: deshu,
          className: "jsx-2910031397"
        }, deshu);
      }))), external__react__default.a.createElement("div", {
        className: "jsx-2910031397" + " " + "form-group"
      }, external__react__default.a.createElement("label", {
        className: "jsx-2910031397"
      }, "Birthday"), external__react__default.a.createElement("input", {
        type: "date",
        name: "birthday",
        value: this.state.birthday,
        onChange: this.handleBirthdayChange,
        className: "jsx-2910031397" + " " + "form-control"
      })), external__react__default.a.createElement("div", {
        className: "jsx-2910031397" + " " + "form-group"
      }, external__react__default.a.createElement("label", {
        className: "jsx-2910031397"
      }, "Favourite Food"), external__react__default.a.createElement("select", {
        value: this.state.favouriteFood,
        name: "favouriteFood",
        onChange: this.handleFavouriteFoodChange,
        className: "jsx-2910031397" + " " + "form-control"
      }, external__react__default.a.createElement("option", {
        disabled: true,
        value: "default",
        className: "jsx-2910031397"
      }, "Select his/her favourite food"), dataSource_default.a.FOOD_OPTIONS.map(function (foodOption) {
        return external__react__default.a.createElement("option", {
          value: foodOption,
          className: "jsx-2910031397"
        }, foodOption);
      }))), external__react__default.a.createElement("div", {
        className: "jsx-2910031397" + " " + "form-group"
      }, external__react__default.a.createElement("label", {
        className: "jsx-2910031397"
      }, "Letter To Exchange Away"), external__react__default.a.createElement("select", {
        name: "letterToExchange",
        onChange: this.handleLetterToExchangeChange,
        className: "jsx-2910031397" + " " + "form-control"
      }, external__react__default.a.createElement("option", {
        disabled: true,
        selected: true,
        value: true,
        className: "jsx-2910031397"
      }, "Select a letter to exchange away"), this.props.lettersAvailable.map(function (letter) {
        return external__react__default.a.createElement("option", {
          value: letter,
          className: "jsx-2910031397"
        }, /\S/.test(letter) ? letter : "Space");
      }))), external__react__default.a.createElement("div", {
        id: "submit-button",
        className: "jsx-2910031397"
      }, external__react__default.a.createElement("button", {
        onClick: this.submitForm,
        className: "jsx-2910031397" + " " + "btn btn-primary"
      }, "Submit")), external__react__default.a.createElement(style__default.a, {
        styleId: "2910031397",
        css: ["#submit-button.jsx-2910031397{margin-bottom:15px;}"]
      }));
    }
  }]);

  return _default;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./models/ExchangeEntity.js
function ExchangeEntity__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExchangeEntity__default = function _default(request_user, respond_user, birthday, favouriteFood, deshu, letterToExchange, letterToReceive) {
  ExchangeEntity__classCallCheck(this, _default);

  this.request_user = request_user;
  this.respond_user = respond_user;
  this.birthday = birthday;
  this.favouriteFood = favouriteFood;
  this.deshu = deshu;
  this.letterToExchange = letterToExchange;
  this.letterToReceive = letterToReceive;
};


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
        var request_user = _this.props.userName;
        var respond_user = _this.props.userSelected;
        var birthday = _this.state.birthday;
        var favouriteFood = _this.state.favouriteFood;
        var deshu = _this.state.deshu;
        var letterToExchange = _this.state.letterToExchange;
        var letterToReceive = '';

        if (_this.checkIfFieldsAreComplete(respond_user, birthday, favouriteFood, deshu, letterToExchange)) {
          var exchangeRequest = new ExchangeEntity__default(request_user, respond_user, birthday, favouriteFood, deshu, letterToExchange, letterToReceive);
          console.log("ExchangeRequest: " + JSON.stringify(exchangeRequest));
          gameUtils_default.a.sendExchangeRequest(exchangeRequest).then(function (succeed) {
            _this.props.onExchangeRequestSubmitSuccess(_this.state.letterToExchange, exchangeRequest);

            _this.props.updateExchangeRequest(exchangeRequest);
          }, function (errMessage) {
            notificationUtils_default.a.showNotification(errMessage);
          });
        }
      }
    }), Object.defineProperty(ExchangeRequest__assertThisInitialized(_this), "retrieveFromCache", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(props) {
        var counterParty = props.userSelected;
        var cachedObject = JSON.parse(localStorage.getItem(counterParty));

        if (cachedObject !== null) {
          console.log("Found cached data for " + counterParty + ": " + JSON.stringify(cachedObject));

          _this.updateExchangeData(cachedObject);
        } else console.log("No cache found for " + counterParty);
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
        var request_user = _this.props.exchangeRequest.request_user;
        var respond_user = _this.props.exchangeRequest.respond_user;
        var birthday = _this.state.birthday;
        var favouriteFood = _this.state.favouriteFood;
        var deshu = _this.state.deshu;
        var letterToExchange = _this.state.letterToExchange;
        var letterToReceive = _this.props.exchangeRequest.letterToExchange;

        if (_this.checkIfFieldsAreComplete(respond_user, birthday, favouriteFood, deshu, letterToExchange)) {
          var exchangeResponse = new ExchangeEntity__default(request_user, respond_user, birthday, favouriteFood, deshu, letterToExchange, letterToReceive);
          console.log("ExchangeResponse: " + JSON.stringify(exchangeResponse));
          gameUtils_default.a.sendExchangeResponse(exchangeResponse).then(function (exchResponse) {
            _this.props.onExchangeResponseSubmitSuccess(exchResponse);
          }, function (errMessage) {
            notificationUtils_default.a.showNotification(errMessage);
          });
        }
      }
    }), Object.defineProperty(ExchangeResponse__assertThisInitialized(_this), "retrieveFromCache", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(props) {
        var counterParty = props.exchangeRequest.request_user;
        var cachedObject = JSON.parse(localStorage.getItem(counterParty));

        if (cachedObject !== null) {
          console.log("Found cached data for " + counterParty + ": " + JSON.stringify(cachedObject));

          _this.updateExchangeData(cachedObject);
        } else console.log("No cache found for " + counterParty);
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
      }, "You have entered the correct details! Waiting for other party to verify"), external__react__default.a.createElement("button", {
        onClick: this.props.cancel,
        className: "btn btn-danger"
      }, "Cancel"));
    }
  }]);

  return _default;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages__default; });



function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


















var pages__default =
/*#__PURE__*/
function (_Page) {
  pages__inherits(_default, _Page);

  function _default() {
    var _this;

    pages__classCallCheck(this, _default);

    _this = pages__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));
    Object.defineProperty(pages__assertThisInitialized(_this), "setupPusher", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.pusher = new external__pusher_js__default.a(credentials_default.a.PUSHER_APP_KEY, {
          cluster: credentials_default.a.PUSHER_APP_CLUSTER,
          encrypted: true
        });
        _this.channel = _this.pusher.subscribe(strings_default.a.PUSHER_CHANNEL);

        _this.channel.bind(strings_default.a.PUSHER_USER_LIST_UPDATE_EVENT, function (users) {
          console.log("Received new user list from Pusher: " + users);
          var newActiveUsers = users.map(function (user) {
            return user.name;
          });

          _this.setState({
            activeUsers: newActiveUsers
          });
        });

        _this.channel.bind(strings_default.a.PUSHER_NEW_EXCHANGE_REQUEST_EVENT, function (exchangeRequest) {
          console.log("Received new exchange request: " + JSON.stringify(exchangeRequest));

          if (exchangeRequest.respond_user == _this.state.userName) {
            console.log("Exchange request is for me.");
            _this.exchangeRequest = exchangeRequest;

            _this.setState({
              isVerifyingForCounterParty: true
            });
          }
        });

        _this.channel.bind(strings_default.a.EXCHANGE_COMPLETED_EVENT, function (data) {
          if (data.request_user == _this.state.userName) {
            notificationUtils_default.a.showNotification(strings_default.a.NOTIFICATION_EXCHANGE_SUCCESSFUL);
            console.log("Exchange request has completed: " + JSON.stringify(data));
            console.log("Letters assigned are now " + _this.state.lettersAssigned);

            _this.setState({
              isWaitingForCounterPartyToVerify: false
            });

            _this.retrieveAllGameInformation();
          }
        });

        _this.channel.bind(strings_default.a.PUSHER_GAME_START_EVENT, function () {
          if (_this.state.signedIn) {
            console.log("Game has started...loading main page...");

            _this.setState({
              isWaitingForGameToStart: false
            });

            _this.retrieveAllGameInformation();

            notificationUtils_default.a.showNotification(strings_default.a.NOTIFICATION_GAME_BEGUN);
          }
        });

        _this.channel.bind(strings_default.a.PUSHER_GAME_STOP_EVENT, function () {
          if (_this.state.signedIn) {
            localStorage.clear();
            window.alert("Game has been forcefully stopped by game master");
            window.location.href = '/';
          }
        });

        _this.channel.bind(strings_default.a.PUSHER_EXCHANGE_CANCELLED_EVENT, function (data) {
          console.log("Received cancel request: " + JSON.stringify(data));

          if (data.request_user == _this.state.userName && _this.state.isWaitingForCounterPartyToVerify) {
            _this.setState({
              isWaitingForCounterPartyToVerify: false
            });

            notificationUtils_default.a.showNotification(strings_default.a.NOTIFICATION_CANCEL_EXCHANGE);
          } else if (data.respond_user == _this.state.userName && _this.state.isVerifyingForCounterParty) {
            _this.setState({
              isVerifyingForCounterParty: false
            });

            notificationUtils_default.a.showNotification(strings_default.a.NOTIFICATION_CANCEL_EXCHANGE);
          }
        });
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "checkGameState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        gameUtils_default.a.checkAuthenticated().then(function (res) {
          _this.setState({
            signedIn: true,
            authenticationChecked: true
          });
        }, function (err) {
          _this.setState({
            authenticationChecked: true
          });
        });
        gameUtils_default.a.checkGameStarted().then(function (res) {
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
    Object.defineProperty(pages__assertThisInitialized(_this), "retrieveAllGameInformation", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.retriveUserName();

        _this.retriveLetters();

        _this.retrieveActiveUsers();
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "cancelWaitingForVerification", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(r) {
        _this.setState({
          isWaitingForCounterPartyToVerify: false
        });

        gameUtils_default.a.cancelExchange(_this.exchangeRequest);
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "onExchangeRequestSubmitSuccess", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(letterToGive, exchangeRequest) {
        if (typeof localStorage !== 'undefined') {
          console.log("Setting local storage " + exchangeRequest.respond_user + ":" + exchangeRequest);
          localStorage.setItem(exchangeRequest.respond_user, JSON.stringify(exchangeRequest));
        }

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
    Object.defineProperty(pages__assertThisInitialized(_this), "onExchangeResponseSubmitSuccess", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(exchangeResponse) {
        notificationUtils_default.a.showNotification(strings_default.a.NOTIFICATION_EXCHANGE_SUCCESSFUL);

        _this.retriveLetters();

        if (typeof localStorage !== 'undefined') {
          console.log("Setting local storage " + exchangeResponse.request_user + ":" + exchangeResponse);
          localStorage.setItem(exchangeResponse.request_user, JSON.stringify(exchangeResponse));
        }

        _this.setState({
          isVerifyingForCounterParty: false
        });
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "onUserSelected", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (_this.state.activeUsers[e.target.id] === _this.state.userName) notificationUtils_default.a.showNotification(strings_default.a.NOTIFICATION_SAME_NAME_SELECTED);else {
          console.log("Setting user selected to " + e.target.id);

          _this.setState({
            userSelected: _this.state.activeUsers[e.target.id]
          });
        }
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "retriveLetters", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        gameUtils_default.a.getAssignedLetters().then(function (letters) {
          _this.setState({
            lettersAssigned: letters
          });
        }, function (err) {});
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "retrieveActiveUsers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        gameUtils_default.a.getActiveUsers().then(function (activeUsers) {
          _this.setState({
            activeUsers: activeUsers
          });
        }, function (err) {});
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "retriveUserName", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        gameUtils_default.a.getUserName().then(function (userName) {
          _this.setState({
            userName: userName
          });
        }, function (err) {});
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "cancelRespondToRequester", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          isVerifyingForCounterParty: false
        });

        gameUtils_default.a.cancelExchange(_this.exchangeRequest);
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "onSignIn", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name, birthday, favouriteFood, deshu) {
        name = name.toUpperCase();
        console.log("Signing in..." + name);
        var data = {
          name: name,
          birthday: birthday,
          favouriteFood: favouriteFood,
          deshu: deshu
        };
        gameUtils_default.a.loginUser(data).then(function (succeed) {
          _this.setState({
            signedIn: true
          });
        }, function (errMessage) {
          notificationUtils_default.a.showNotification(errMessage);
        });
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "updateExchangeRequest", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(exchangeRequest) {
        _this.exchangeRequest = exchangeRequest;
      }
    });
    _this.state = {
      userName: "",
      activeUsers: ["LEW WEI HAO", "TAN YI KAN"],
      lettersAssigned: ["A", "B", "C", " "],
      userSelected: '',
      isWaitingForCounterPartyToVerify: false,
      isVerifyingForCounterParty: false,
      isWaitingForGameToStart: true,
      signedIn: false,
      letterToGive: '',
      authenticationChecked: false,
      gameStartedChecked: false
    };
    console.log("notify from index is " + JSON.stringify(external__react_notify_toast_["notify"]));
    _this.exchangeRequest = {};
    return _this;
  }

  pages__createClass(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setupPusher();
                this.checkGameState();
                /*
                this.setState({
                    signedIn: true,
                    authenticationChecked: true,
                    gameStartedChecked: true,
                    isWaitingForGameToStart: false,
                })*/

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

      if (!this.state.authenticationChecked || !this.state.gameStartedChecked) return external__react__default.a.createElement(Layout["a" /* default */], null);else if (!this.state.signedIn) return external__react__default.a.createElement(Layout["a" /* default */], null, external__react__default.a.createElement(SignIn__default, {
        onSignIn: this.onSignIn
      }));else if (this.state.isWaitingForGameToStart && this.state.signedIn) return external__react__default.a.createElement(Layout["a" /* default */], null, external__react__default.a.createElement(LoadingScreen__default, null));
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
      }), external__react__default.a.createElement("div", {
        id: "cancel-button"
      }, external__react__default.a.createElement("button", {
        onClick: this.cancelRespondToRequester,
        className: "btn btn-danger"
      }, "Cancel")));else return external__react__default.a.createElement(Layout["a" /* default */], null, external__react__default.a.createElement("div", {
        id: "wrapper",
        className: "jsx-2479897932"
      }, external__react__default.a.createElement("div", {
        id: "sidebar-wrapper",
        className: "jsx-2479897932"
      }, external__react__default.a.createElement("nav", {
        id: "spy",
        className: "jsx-2479897932"
      }, external__react__default.a.createElement("ul", {
        className: "jsx-2479897932" + " " + "sidebar-nav nav"
      }, this.state.activeUsers.map(function (user, index) {
        return external__react__default.a.createElement("li", {
          id: index,
          onClick: _this2.onUserSelected,
          className: "jsx-2479897932" + " " + "sidebar-brand"
        }, user);
      })))), external__react__default.a.createElement("div", {
        id: "page-content-wrapper",
        className: "jsx-2479897932"
      }, external__react__default.a.createElement("div", {
        "data-spy": "scroll",
        "data-target": "#spy",
        className: "jsx-2479897932" + " " + "page-content inset"
      }, external__react__default.a.createElement(LettersComponent_LetterComponent, {
        userName: this.state.userName,
        lettersAssigned: this.state.lettersAssigned
      }), external__react__default.a.createElement("div", {
        style: {
          marginTop: '50px',
          marginBottom: '50px'
        },
        className: "jsx-2479897932" + " " + "form-group"
      }, external__react__default.a.createElement("label", {
        className: "jsx-2479897932"
      }, "Fill in the details of the player you would like to exchange with below.")), external__react__default.a.createElement(ExchangeRequest__default, {
        targetUser: this.state.userSelected,
        userName: this.state.userName,
        onExchangeRequestSubmitSuccess: this.onExchangeRequestSubmitSuccess,
        userSelected: this.state.userSelected,
        lettersAvailable: this.state.lettersAssigned,
        updateExchangeRequest: this.updateExchangeRequest
      })))), external__react__default.a.createElement(style__default.a, {
        styleId: "2479897932",
        css: ["#wrapper.active.jsx-2479897932{padding-left:0;}", "#wrapper.active.jsx-2479897932 #sidebar-wrapper.jsx-2479897932{left:0;}", "#page-content-wrapper.jsx-2479897932{width:100%;}", ".sidebar-nav.jsx-2479897932 li.jsx-2479897932{line-height:40px;text-indent:20px;}", ".sidebar-nav.jsx-2479897932 li.jsx-2479897932 a.jsx-2479897932{color:#999999;display:block;-webkit-text-decoration:none;text-decoration:none;padding-left:60px;}", ".sidebar-nav.jsx-2479897932 li.jsx-2479897932 a.jsx-2479897932 span.jsx-2479897932:before{position:absolute;left:0;color:#41484c;text-align:center;width:20px;line-height:18px;}", ".sidebar-nav.jsx-2479897932 li.jsx-2479897932 a.jsx-2479897932:hover,.sidebar-nav.jsx-2479897932 li.active.jsx-2479897932{color:#fff;background:rgba(255,255,255,0.2);-webkit-text-decoration:none;text-decoration:none;}", ".sidebar-nav.jsx-2479897932 li.jsx-2479897932 a.jsx-2479897932:active,.sidebar-nav.jsx-2479897932 li.jsx-2479897932 a.jsx-2479897932:focus{-webkit-text-decoration:none;text-decoration:none;}", ".sidebar-nav.jsx-2479897932>.sidebar-brand.jsx-2479897932 a.jsx-2479897932{color:#999999;}", ".sidebar-nav.jsx-2479897932>.sidebar-brand.jsx-2479897932 a.jsx-2479897932:hover{color:#fff;background:none;}", ".inset.jsx-2479897932{padding:20px;}", "@media (min-width:1224px){#wrapper.jsx-2479897932{padding-left:250px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-2479897932{margin-left:-250px;left:250px;width:250px;background:#000;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}.sidebar-nav.jsx-2479897932>.sidebar-brand.jsx-2479897932{height:65px;line-height:60px;font-size:18px;}.sidebar-nav.jsx-2479897932{position:absolute;top:0;width:250px;list-style:none;margin:0;padding:0;}}", "@media (max-width:1224px){#wrapper.jsx-2479897932{padding-left:100px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-2479897932{margin-left:-100px;left:100px;width:100px;background:#000;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}.sidebar-nav.jsx-2479897932>.sidebar-brand.jsx-2479897932{height:65px;line-height:60px;font-size:10px;}.sidebar-nav.jsx-2479897932{position:absolute;top:0;width:100px;list-style:none;margin:0;padding:0;}}"]
      }));
    }
  }]);

  return _default;
}(Page["a" /* default */]);



/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ })
/******/ ]);