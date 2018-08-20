webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pusher_js__ = __webpack_require__("./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pusher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_utils__ = __webpack_require__("./utils/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__utils_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Page__ = __webpack_require__("./components/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_config__ = __webpack_require__("./constants/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__constants_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_SignIn__ = __webpack_require__("./components/SignIn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_strings__ = __webpack_require__("./constants/strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_strings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__constants_strings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_notify_toast__ = __webpack_require__("./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_notify_toast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_notify_toast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_responsive__ = __webpack_require__("./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_endpoints__ = __webpack_require__("./constants/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_endpoints___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__constants_endpoints__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_credentials__ = __webpack_require__("./constants/credentials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_credentials___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__constants_credentials__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_LoadingScreen__ = __webpack_require__("./components/LoadingScreen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_LettersComponent__ = __webpack_require__("./components/LettersComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_ExchangeRequest__ = __webpack_require__("./components/ExchangeRequest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_ExchangeResponse__ = __webpack_require__("./components/ExchangeResponse.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_WaitingForVerification__ = __webpack_require__("./components/WaitingForVerification.js");

var _jsxFileName = "D:\\iceBreaker\\pages\\index.js";


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
        _this.pusher = new __WEBPACK_IMPORTED_MODULE_4_pusher_js___default.a(__WEBPACK_IMPORTED_MODULE_14__constants_credentials___default.a.PUSHER_APP_KEY, {
          cluster: __WEBPACK_IMPORTED_MODULE_14__constants_credentials___default.a.PUSHER_APP_CLUSTER,
          encrypted: true
        });
        _this.channel = _this.pusher.subscribe(__WEBPACK_IMPORTED_MODULE_9__constants_strings___default.a.PUSHER_CHANNEL);

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_9__constants_strings___default.a.PUSHER_USER_LIST_UPDATE_EVENT, function (users) {
          console.log("Received new user list from Pusher: " + users);
          var newActiveUsers = users.map(function (user) {
            return user.name;
          });

          _this.setState({
            activeUsers: newActiveUsers
          });
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_9__constants_strings___default.a.PUSHER_NEW_EXCHANGE_REQUEST_EVENT, function (exchangeRequest) {
          console.log("Received new exchange request: " + JSON.stringify(exchangeRequest));

          if (exchangeRequest.respond_user == _this.state.userName) {
            console.log("Exchange request is for me.");
            _this.exchangeRequest = exchangeRequest;

            _this.setState({
              isVerifyingForCounterParty: true
            });
          }
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_9__constants_strings___default.a.EXCHANGE_COMPLETED_EVENT, function (data) {
          if (data.request_user == _this.state.userName) {
            __WEBPACK_IMPORTED_MODULE_10_react_notify_toast__["notify"].show(__WEBPACK_IMPORTED_MODULE_9__constants_strings___default.a.NOTIFICATION_EXCHANGE_SUCCESSFUL, __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TYPE, __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TIMEOUT, {
              background: __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_BACKGROUND_COLOR,
              text: __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TEXT_COLOR
            });
            console.log("Exchange request has completed: " + JSON.stringify(data));
            console.log("Letters assigned are now " + _this.state.lettersAssigned);

            _this.setState({
              isWaitingForCounterPartyToVerify: false
            });

            _this.retrieveAllGameInformation();
          }
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_9__constants_strings___default.a.PUSHER_GAME_START_EVENT, function () {
          if (_this.state.signedIn) {
            console.log("Game has started...loading main page...");

            _this.setState({
              isWaitingForGameToStart: false
            });

            _this.retrieveAllGameInformation();

            __WEBPACK_IMPORTED_MODULE_10_react_notify_toast__["notify"].show(__WEBPACK_IMPORTED_MODULE_9__constants_strings___default.a.NOTIFICATION_GAME_BEGUN, __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TYPE, __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TIMEOUT, {
              background: __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_BACKGROUND_COLOR,
              text: __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TEXT_COLOR
            });
          }
        });

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_9__constants_strings___default.a.PUSHER_GAME_STOP_EVENT, function () {
          if (_this.state.signedIn) {
            window.alert("Game has been forcefully stopped by game master");
            window.location.href = '/';
          }
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
            signedIn: true,
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
        __WEBPACK_IMPORTED_MODULE_10_react_notify_toast__["notify"].show(__WEBPACK_IMPORTED_MODULE_9__constants_strings___default.a.NOTIFICATION_EXCHANGE_SUCCESSFUL, __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TYPE, __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TIMEOUT, {
          background: __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_BACKGROUND_COLOR,
          text: __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TEXT_COLOR
        });

        _this.setState({
          isVerifyingForCounterParty: false
        });

        _this.retriveLetters();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onUserSelected", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (_this.state.activeUsers[e.target.id] === _this.state.userName) __WEBPACK_IMPORTED_MODULE_10_react_notify_toast__["notify"].show(__WEBPACK_IMPORTED_MODULE_9__constants_strings___default.a.NOTIFICATION_SAME_NAME_SELECTED, __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TYPE, __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TIMEOUT, {
          background: __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_BACKGROUND_COLOR,
          text: __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TEXT_COLOR
        });else {
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
        __WEBPACK_IMPORTED_MODULE_2_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_13__constants_endpoints___default.a.API_GET_ASSIGNED_LETTERS
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
          url: __WEBPACK_IMPORTED_MODULE_13__constants_endpoints___default.a.API_GET_ALL_ACTIVE_USERS
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
          url: __WEBPACK_IMPORTED_MODULE_13__constants_endpoints___default.a.API_GET_SESSION
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
    Object.defineProperty(_assertThisInitialized(_this), "cancelRespondToRequester", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          isVerifyingForCounterParty: false
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
          url: __WEBPACK_IMPORTED_MODULE_13__constants_endpoints___default.a.API_LOGIN_USER,
          data: {
            name: name,
            birthday: birthday,
            favouriteFood: favouriteFood,
            deshu: deshu
          }
        }).then(function (response) {
          if (response.data.result == 1) _this.setState({
            signedIn: true
          });else __WEBPACK_IMPORTED_MODULE_10_react_notify_toast__["notify"].show(response.data.message, __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TYPE, __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TIMEOUT, {
            background: __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_BACKGROUND_COLOR,
            text: __WEBPACK_IMPORTED_MODULE_7__constants_config___default.a.NOTIFICATION_TEXT_COLOR
          });
        }).catch(function (response) {
          //handle error
          console.log(response);
        });
      }
    });
    _this.state = {
      userName: "",
      activeUsers: ["LEW WEI HAO", "TAN YI KAN"],
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
                screen.orientation.lock('landscape');
                this.setupPusher();
                this.checkGameState();
                this.setState({
                  signedIn: true,
                  authenticationChecked: true,
                  gameStartedChecked: true,
                  isWaitingForGameToStart: false
                });

              case 4:
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

      if (!this.state.authenticationChecked || !this.state.gameStartedChecked) return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      });else if (!this.state.signedIn) return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_SignIn__["a" /* default */], {
        onSignIn: this.onSignIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }));else if (this.state.isWaitingForGameToStart && this.state.signedIn) return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_LoadingScreen__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }));
      if (this.state.isWaitingForCounterPartyToVerify) return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__components_WaitingForVerification__["a" /* default */], {
        cancel: this.cancelWaitingForVerification,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }));else if (this.state.isVerifyingForCounterParty) return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, this.exchangeRequest.request_user, " has requested to connect.Please fill in his details below.")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__components_ExchangeResponse__["a" /* default */], {
        targetUser: this.exchangeRequest.request_user,
        userName: this.exchangeRequest.request_user,
        onExchangeResponseSubmitSuccess: this.onExchangeResponseSubmitSuccess,
        lettersAvailable: this.state.lettersAssigned,
        exchangeRequest: this.exchangeRequest,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "cancel-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("button", {
        onClick: this.cancelRespondToRequester,
        className: "btn btn-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, "Cancel")));else return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        className: "jsx-1097620419"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "sidebar-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        className: "jsx-1097620419"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("nav", {
        id: "spy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        className: "jsx-1097620419"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        className: "jsx-1097620419" + " " + "sidebar-nav nav"
      }, this.state.activeUsers.map(function (user, index) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
          id: index,
          onClick: _this2.onUserSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          },
          className: "jsx-1097620419" + " " + "sidebar-brand"
        }, user);
      })))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "page-content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        className: "jsx-1097620419"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        "data-spy": "scroll",
        "data-target": "#spy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        className: "jsx-1097620419" + " " + "page-content inset"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_LettersComponent__["a" /* default */], {
        userName: this.state.userName,
        lettersAssigned: this.state.lettersAssigned,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        style: {
          marginTop: '50px',
          marginBottom: '50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        className: "jsx-1097620419" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        className: "jsx-1097620419"
      }, "Fill in the details of the player you would like to exchange with.")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_ExchangeRequest__["a" /* default */], {
        targetUser: this.state.userSelected,
        userName: this.state.userName,
        onExchangeRequestSubmitSuccess: this.onExchangeRequestSubmitSuccess,
        userSelected: this.state.userSelected,
        lettersAvailable: this.state.lettersAssigned,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      })))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1097620419",
        css: "@media (min-width:1224px){#wrapper.jsx-1097620419{padding-left:250px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-1097620419{margin-left:-250px;left:250px;width:250px;background:#000;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}#wrapper.active.jsx-1097620419{padding-left:0;}#wrapper.active.jsx-1097620419 #sidebar-wrapper.jsx-1097620419{left:0;}#page-content-wrapper.jsx-1097620419{width:100%;}.sidebar-nav.jsx-1097620419{position:absolute;top:0;width:250px;list-style:none;margin:0;padding:0;}.sidebar-nav.jsx-1097620419 li.jsx-1097620419{line-height:40px;text-indent:20px;}.sidebar-nav.jsx-1097620419 li.jsx-1097620419 a.jsx-1097620419{color:#999999;display:block;-webkit-text-decoration:none;text-decoration:none;padding-left:60px;}.sidebar-nav.jsx-1097620419 li.jsx-1097620419 a.jsx-1097620419 span.jsx-1097620419:before{position:absolute;left:0;color:#41484c;text-align:center;width:20px;line-height:18px;}.sidebar-nav.jsx-1097620419 li.jsx-1097620419 a.jsx-1097620419:hover,.sidebar-nav.jsx-1097620419 li.active.jsx-1097620419{color:#fff;background:rgba(255,255,255,0.2);-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-1097620419 li.jsx-1097620419 a.jsx-1097620419:active,.sidebar-nav.jsx-1097620419 li.jsx-1097620419 a.jsx-1097620419:focus{-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-1097620419>.sidebar-brand.jsx-1097620419{height:65px;line-height:60px;font-size:18px;}.sidebar-nav.jsx-1097620419>.sidebar-brand.jsx-1097620419 a.jsx-1097620419{color:#999999;}.sidebar-nav.jsx-1097620419>.sidebar-brand.jsx-1097620419 a.jsx-1097620419:hover{color:#fff;background:none;}.inset.jsx-1097620419{padding:20px;}}@media (max-width:1224px){#wrapper.jsx-1097620419{padding-left:20%;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-1097620419{margin-left:-20%;left:20%;width:20%;background:#000;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}#wrapper.active.jsx-1097620419{padding-left:0;}#wrapper.active.jsx-1097620419 #sidebar-wrapper.jsx-1097620419{left:0;}#page-content-wrapper.jsx-1097620419{width:100%;}.sidebar-nav.jsx-1097620419{position:absolute;top:0;width:20%;list-style:none;margin:0;padding:0;}.sidebar-nav.jsx-1097620419 li.jsx-1097620419{line-height:40px;text-indent:20px;}.sidebar-nav.jsx-1097620419 li.jsx-1097620419 a.jsx-1097620419{color:#999999;display:block;-webkit-text-decoration:none;text-decoration:none;padding-left:60px;}.sidebar-nav.jsx-1097620419 li.jsx-1097620419 a.jsx-1097620419 span.jsx-1097620419:before{position:absolute;left:0;color:#41484c;text-align:center;width:20px;line-height:18px;}.sidebar-nav.jsx-1097620419 li.jsx-1097620419 a.jsx-1097620419:hover,.sidebar-nav.jsx-1097620419 li.active.jsx-1097620419{color:#fff;background:rgba(255,255,255,0.2);-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-1097620419 li.jsx-1097620419 a.jsx-1097620419:active,.sidebar-nav.jsx-1097620419 li.jsx-1097620419 a.jsx-1097620419:focus{-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-1097620419>.sidebar-brand.jsx-1097620419{height:65px;line-height:60px;font-size:18px;}.sidebar-nav.jsx-1097620419>.sidebar-brand.jsx-1097620419 a.jsx-1097620419{color:#999999;}.sidebar-nav.jsx-1097620419>.sidebar-brand.jsx-1097620419 a.jsx-1097620419:hover{color:#fff;background:none;}.inset.jsx-1097620419{padding:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0V2dDLEFBSThDLEFBSUEsQUFZSixBQUdSLEFBR0ksQUFHTyxBQVFELEFBSUgsQUFNSSxBQVNQLEFBTVUsQUFHVCxBQUtFLEFBR0gsQUFJRSxBQU1RLEFBSUEsQUFZRixBQUdSLEFBR0ksQUFHTyxBQVFELEFBSUgsQUFNSSxBQVNQLEFBTVUsQUFHVCxBQUtFLEFBR0gsQUFJRSxPQXBJbkIsQUErRUksSUE1RUosQUE4Qm1DLEFBaUJqQixBQWdDZCxBQThCbUMsQUFpQmpCLENBdkZILEFBK0VJLENBbkV2QixBQStFSSxDQW5IWSxBQTZCaEIsQUFrRG9CLEFBNkJoQixDQWpJSixBQStFSSxFQTlEZSxBQThDZSxBQUluQixBQTZCUSxDQXZGZixBQWtCQyxBQTZERyxBQWtCQyxDQTFIaUIsQUFJakIsS0FzQkMsQUErRUUsQ0E3REEsQUErRUksQ0F2Q0osQ0FkaEIsQUErRUksQ0EvR21CLEFBK0VJLENBdkRWLEFBK0VJLENBeElQLElBNkJkLEFBd0VzQixBQU9sQixFQXRGYyxBQTBESSxHQXhDRixBQStFSSxHQXRITixFQStDSyxBQVV2QixBQXFFMkIsQUFVdkIsTUFwRkosQUFpRGUsQUE4QlgsRUE3R08sQUEwRFUsS0F4Q1IsQUErRUksQ0F0SEEsQ0FxR0QsRUEvRUosTUEwRE0sQ0F4Q0MsQUErRUksQ0FqQm5CLEVBL0VKLEVBdEJjLEtBK0JNLEFBK0VJLENBOUJGLEVBUmxCLEVBL0VKLEVBUWtCLEFBdUNsQixBQStFSSxTQXpFSixBQStFSSxDQTVDZSxDQWpEbkIsQUErRUksS0E3R1csT0FnRm1CLE1BL0VKLDBEQWdGWixNQS9FSixNQWdGVixNQS9FSiIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiRDpcXGljZUJyZWFrZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFB1c2hlciBmcm9tICdwdXNoZXItanMnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMvdXRpbHMnXHJcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uc3RhbnRzL2NvbmZpZydcclxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWduSW5cIlxyXG5pbXBvcnQgc3RyaW5ncyBmcm9tICcuLi9jb25zdGFudHMvc3RyaW5ncydcclxuaW1wb3J0IHtub3RpZnl9IGZyb20gXCJyZWFjdC1ub3RpZnktdG9hc3RcIjtcclxuaW1wb3J0IE1lZGlhUXVlcnkgZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXHJcbmltcG9ydCBlbmRwb2ludHMgZnJvbSAnLi4vY29uc3RhbnRzL2VuZHBvaW50cydcclxuaW1wb3J0IGNyZWRlbnRpYWxzIGZyb20gJy4uL2NvbnN0YW50cy9jcmVkZW50aWFscydcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1NjcmVlblwiXHJcbmltcG9ydCBMZXR0ZXJDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9MZXR0ZXJzQ29tcG9uZW50J1xyXG5pbXBvcnQgRXhjaGFuZ2VSZXF1ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRXhjaGFuZ2VSZXF1ZXN0J1xyXG5pbXBvcnQgRXhjaGFuZ2VSZXNwb25zZSBmcm9tICcuLi9jb21wb25lbnRzL0V4Y2hhbmdlUmVzcG9uc2UnXHJcbmltcG9ydCBXYWl0aW5nRm9yVmVyaWZpY2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvV2FpdGluZ0ZvclZlcmlmaWNhdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUGFnZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdXNlck5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJzIDogW1wiTEVXIFdFSSBIQU9cIixcIlRBTiBZSSBLQU5cIl0sXHJcbiAgICAgICAgICAgIGxldHRlcnNBc3NpZ25lZDogW10sXHJcbiAgICAgICAgICAgIHVzZXJTZWxlY3RlZDogJycsXHJcbiAgICAgICAgICAgIGlzV2FpdGluZ0ZvckNvdW50ZXJQYXJ0eVRvVmVyaWZ5OiBmYWxzZSxcclxuICAgICAgICAgICAgaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JHYW1lVG9TdGFydDogdHJ1ZSxcclxuICAgICAgICAgICAgc2lnbmVkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICBsZXR0ZXJUb0dpdmU6ICcnLFxyXG4gICAgICAgICAgICBhdXRoZW50aWNhdGlvbkNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBnYW1lU3RhcnRlZENoZWNrZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXhjaGFuZ2VSZXF1ZXN0ID0ge31cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBzY3JlZW4ub3JpZW50YXRpb24ubG9jaygnbGFuZHNjYXBlJyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFB1c2hlcigpXHJcbiAgICAgICAgdGhpcy5jaGVja0dhbWVTdGF0ZSgpXHJcblxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2lnbmVkSW46IHRydWUsXHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uQ2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgZ2FtZVN0YXJ0ZWRDaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JHYW1lVG9TdGFydDogZmFsc2UsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFB1c2hlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIoY3JlZGVudGlhbHMuUFVTSEVSX0FQUF9LRVksIHtcclxuICAgICAgICAgICAgY2x1c3RlcjogY3JlZGVudGlhbHMuUFVTSEVSX0FQUF9DTFVTVEVSLFxyXG4gICAgICAgICAgICBlbmNyeXB0ZWQ6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKHN0cmluZ3MuUFVTSEVSX0NIQU5ORUwpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLlBVU0hFUl9VU0VSX0xJU1RfVVBEQVRFX0VWRU5ULCAodXNlcnMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBuZXcgdXNlciBsaXN0IGZyb20gUHVzaGVyOiBcIit1c2VycylcclxuICAgICAgICAgICAgdmFyIG5ld0FjdGl2ZVVzZXJzID0gdXNlcnMubWFwKHVzZXIgPT4gdXNlci5uYW1lKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXJzOiBuZXdBY3RpdmVVc2Vyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLlBVU0hFUl9ORVdfRVhDSEFOR0VfUkVRVUVTVF9FVkVOVCwgKGV4Y2hhbmdlUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIG5ldyBleGNoYW5nZSByZXF1ZXN0OiBcIitKU09OLnN0cmluZ2lmeShleGNoYW5nZVJlcXVlc3QpKVxyXG4gICAgICAgICAgICBpZihleGNoYW5nZVJlcXVlc3QucmVzcG9uZF91c2VyID09IHRoaXMuc3RhdGUudXNlck5hbWUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFeGNoYW5nZSByZXF1ZXN0IGlzIGZvciBtZS5cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2VSZXF1ZXN0ID0gZXhjaGFuZ2VSZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmeWluZ0ZvckNvdW50ZXJQYXJ0eTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLkVYQ0hBTkdFX0NPTVBMRVRFRF9FVkVOVCwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYoZGF0YS5yZXF1ZXN0X3VzZXIgPT0gdGhpcy5zdGF0ZS51c2VyTmFtZSl7XHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdyhcclxuICAgICAgICAgICAgICAgICAgICBzdHJpbmdzLk5PVElGSUNBVElPTl9FWENIQU5HRV9TVUNDRVNTRlVMLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5OT1RJRklDQVRJT05fVFlQRSwgY29uZmlnLk5PVElGSUNBVElPTl9USU1FT1VULFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY29uZmlnLk5PVElGSUNBVElPTl9CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjb25maWcuTk9USUZJQ0FUSU9OX1RFWFRfQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXhjaGFuZ2UgcmVxdWVzdCBoYXMgY29tcGxldGVkOiBcIitKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGV0dGVycyBhc3NpZ25lZCBhcmUgbm93IFwiK3RoaXMuc3RhdGUubGV0dGVyc0Fzc2lnbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZUFsbEdhbWVJbmZvcm1hdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoc3RyaW5ncy5QVVNIRVJfR0FNRV9TVEFSVF9FVkVOVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNpZ25lZEluKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgaGFzIHN0YXJ0ZWQuLi5sb2FkaW5nIG1haW4gcGFnZS4uLlwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNXYWl0aW5nRm9yR2FtZVRvU3RhcnQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZUFsbEdhbWVJbmZvcm1hdGlvbigpXHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdyhcclxuICAgICAgICAgICAgICAgICAgICBzdHJpbmdzLk5PVElGSUNBVElPTl9HQU1FX0JFR1VOLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5OT1RJRklDQVRJT05fVFlQRSwgY29uZmlnLk5PVElGSUNBVElPTl9USU1FT1VULFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY29uZmlnLk5PVElGSUNBVElPTl9CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjb25maWcuTk9USUZJQ0FUSU9OX1RFWFRfQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLlBVU0hFUl9HQU1FX1NUT1BfRVZFTlQsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zaWduZWRJbil7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJHYW1lIGhhcyBiZWVuIGZvcmNlZnVsbHkgc3RvcHBlZCBieSBnYW1lIG1hc3RlclwiKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrR2FtZVN0YXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHV0aWxzLmNoZWNrQXV0aGVudGljYXRlZCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNpZ25lZEluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uQ2hlY2tlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHV0aWxzLmNoZWNrR2FtZVN0YXJ0ZWQoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1dhaXRpbmdGb3JHYW1lVG9TdGFydDogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZUFsbEdhbWVJbmZvcm1hdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXJ0ZWRDaGVja2VkOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXJ0ZWRDaGVja2VkOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZUFsbEdhbWVJbmZvcm1hdGlvbiA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnJldHJpdmVVc2VyTmFtZSgpXHJcbiAgICAgICAgdGhpcy5yZXRyaXZlTGV0dGVycygpXHJcbiAgICAgICAgdGhpcy5yZXRyaWV2ZUFjdGl2ZVVzZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxXYWl0aW5nRm9yVmVyaWZpY2F0aW9uID0gKHIpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnk6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkV4Y2hhbmdlUmVxdWVzdFN1Ym1pdFN1Y2Nlc3MgPSAobGV0dGVyVG9HaXZlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzV2FpdGluZ0ZvckNvdW50ZXJQYXJ0eVRvVmVyaWZ5OiB0cnVlLFxyXG4gICAgICAgICAgICBsZXR0ZXJUb0dpdmU6IGxldHRlclRvR2l2ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25FeGNoYW5nZVJlc3BvbnNlU3VibWl0U3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICBub3RpZnkuc2hvdyhcclxuICAgICAgICAgICAgc3RyaW5ncy5OT1RJRklDQVRJT05fRVhDSEFOR0VfU1VDQ0VTU0ZVTCxcclxuICAgICAgICAgICAgY29uZmlnLk5PVElGSUNBVElPTl9UWVBFLCBjb25maWcuTk9USUZJQ0FUSU9OX1RJTUVPVVQsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbmZpZy5OT1RJRklDQVRJT05fQkFDS0dST1VORF9DT0xPUixcclxuICAgICAgICAgICAgICAgIHRleHQ6IGNvbmZpZy5OT1RJRklDQVRJT05fVEVYVF9DT0xPUlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHk6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnJldHJpdmVMZXR0ZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBvblVzZXJTZWxlY3RlZCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmVVc2Vyc1tlLnRhcmdldC5pZF0gPT09IHRoaXMuc3RhdGUudXNlck5hbWUpXHJcbiAgICAgICAgICAgIG5vdGlmeS5zaG93KFxyXG4gICAgICAgICAgICAgICAgc3RyaW5ncy5OT1RJRklDQVRJT05fU0FNRV9OQU1FX1NFTEVDVEVELFxyXG4gICAgICAgICAgICAgICAgY29uZmlnLk5PVElGSUNBVElPTl9UWVBFLCBjb25maWcuTk9USUZJQ0FUSU9OX1RJTUVPVVQsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY29uZmlnLk5PVElGSUNBVElPTl9CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGNvbmZpZy5OT1RJRklDQVRJT05fVEVYVF9DT0xPUlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyB1c2VyIHNlbGVjdGVkIHRvIFwiICsgZS50YXJnZXQuaWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdXNlclNlbGVjdGVkOiB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJzW2UudGFyZ2V0LmlkXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXRyaXZlTGV0dGVycyA9ICgpID0+IHtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmw6IGVuZHBvaW50cy5BUElfR0VUX0FTU0lHTkVEX0xFVFRFUlNcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR290IGxldHRlcnMgYXNzaWduZWQgYXMgJytyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGxldHRlcnNBc3NpZ25lZCA6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy9oYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHJpZXZlQWN0aXZlVXNlcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiBlbmRwb2ludHMuQVBJX0dFVF9BTExfQUNUSVZFX1VTRVJTXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZlVXNlcnMgPSByZXNwb25zZS5kYXRhLm1hcChzZXNzaW9uID0+IHNlc3Npb24udXNlci5uYW1lKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGFyc2VkIGFjdGl2ZSB1c2VycyBhcyAnK2FjdGl2ZVVzZXJzKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXJzIDogYWN0aXZlVXNlcnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy9oYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHJpdmVVc2VyTmFtZSA9ICgpID0+IHtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmw6IGVuZHBvaW50cy5BUElfR0VUX1NFU1NJT05cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNlLmRhdGEudXNlciA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIHVzZXJuYW1lIGFzICAnK3Jlc3BvbnNlLmRhdGEudXNlci5uYW1lKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHVzZXJOYW1lIDogcmVzcG9uc2UuZGF0YS51c2VyLm5hbWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy9oYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbFJlc3BvbmRUb1JlcXVlc3RlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHk6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblNpZ25JbiA9IChuYW1lLGJpcnRoZGF5LGZhdm91cml0ZUZvb2QsZGVzaHUpID0+IHtcclxuICAgICAgICBuYW1lID0gbmFtZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTaWduaW5nIGluLi4uXCIrbmFtZSlcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmw6IGVuZHBvaW50cy5BUElfTE9HSU5fVVNFUixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYmlydGhkYXk6IGJpcnRoZGF5LFxyXG4gICAgICAgICAgICAgICAgICAgIGZhdm91cml0ZUZvb2Q6IGZhdm91cml0ZUZvb2QsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaHU6IGRlc2h1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnJlc3VsdCA9PSAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbmVkSW46IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcuTk9USUZJQ0FUSU9OX1RZUEUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLk5PVElGSUNBVElPTl9USU1FT1VULFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY29uZmlnLk5PVElGSUNBVElPTl9CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjb25maWcuTk9USUZJQ0FUSU9OX1RFWFRfQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy9oYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmF1dGhlbnRpY2F0aW9uQ2hlY2tlZCB8fCAhdGhpcy5zdGF0ZS5nYW1lU3RhcnRlZENoZWNrZWQpXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGVsc2UgaWYoIXRoaXMuc3RhdGUuc2lnbmVkSW4pXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZ25JbiBvblNpZ25Jbj17dGhpcy5vblNpZ25Jbn0vPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmlzV2FpdGluZ0ZvckdhbWVUb1N0YXJ0ICYmIHRoaXMuc3RhdGUuc2lnbmVkSW4pXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdTY3JlZW4vPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeSlcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8V2FpdGluZ0ZvclZlcmlmaWNhdGlvbiBjYW5jZWw9e3RoaXMuY2FuY2VsV2FpdGluZ0ZvclZlcmlmaWNhdGlvbn0vPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHkpXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57dGhpcy5leGNoYW5nZVJlcXVlc3QucmVxdWVzdF91c2VyfSBoYXMgcmVxdWVzdGVkIHRvIGNvbm5lY3QuUGxlYXNlIGZpbGwgaW4gaGlzIGRldGFpbHMgYmVsb3cuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RXhjaGFuZ2VSZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRVc2VyPXt0aGlzLmV4Y2hhbmdlUmVxdWVzdC5yZXF1ZXN0X3VzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lPXt0aGlzLmV4Y2hhbmdlUmVxdWVzdC5yZXF1ZXN0X3VzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXhjaGFuZ2VSZXNwb25zZVN1Ym1pdFN1Y2Nlc3M9e3RoaXMub25FeGNoYW5nZVJlc3BvbnNlU3VibWl0U3VjY2Vzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZT17dGhpcy5zdGF0ZS5sZXR0ZXJzQXNzaWduZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2hhbmdlUmVxdWVzdD17dGhpcy5leGNoYW5nZVJlcXVlc3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdjYW5jZWwtYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNhbmNlbFJlc3BvbmRUb1JlcXVlc3Rlcn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWRlYmFyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgaWQ9XCJzcHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZWJhci1uYXYgbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFjdGl2ZVVzZXJzLm1hcCgodXNlcixpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBpZD17aW5kZXh9IGNsYXNzTmFtZT1cInNpZGViYXItYnJhbmRcIiBvbkNsaWNrPXt0aGlzLm9uVXNlclNlbGVjdGVkfT57dXNlcn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFnZS1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50IGluc2V0XCIgZGF0YS1zcHk9XCJzY3JvbGxcIiBkYXRhLXRhcmdldD1cIiNzcHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGV0dGVyQ29tcG9uZW50IHVzZXJOYW1lPXt0aGlzLnN0YXRlLnVzZXJOYW1lfSBsZXR0ZXJzQXNzaWduZWQ9e3RoaXMuc3RhdGUubGV0dGVyc0Fzc2lnbmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDonNTBweCcsbWFyZ2luQm90dG9tOic1MHB4J319IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZpbGwgaW4gdGhlIGRldGFpbHMgb2YgdGhlIHBsYXllciB5b3Ugd291bGQgbGlrZSB0byBleGNoYW5nZSB3aXRoLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4Y2hhbmdlUmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRVc2VyPXt0aGlzLnN0YXRlLnVzZXJTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU9e3RoaXMuc3RhdGUudXNlck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXhjaGFuZ2VSZXF1ZXN0U3VibWl0U3VjY2Vzcz17dGhpcy5vbkV4Y2hhbmdlUmVxdWVzdFN1Ym1pdFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3RlZD17dGhpcy5zdGF0ZS51c2VyU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU9e3RoaXMuc3RhdGUubGV0dGVyc0Fzc2lnbmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjEyMjRweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIuYWN0aXZlICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkgYSBzcGFuOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MTQ4NGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGE6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnNldCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjEyMjRweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTIwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIuYWN0aXZlICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEgc3BhbjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDE0ODRjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5zZXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXX0= */\n/*@ sourceURL=pages\\index.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_6__components_Page__["a" /* default */]);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.dfeda9d2b51f0082dca1.hot-update.js.map