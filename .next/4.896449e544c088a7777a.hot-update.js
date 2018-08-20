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
        className: "jsx-3442082953"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "sidebar-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        className: "jsx-3442082953"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("nav", {
        id: "spy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        className: "jsx-3442082953"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        className: "jsx-3442082953" + " " + "sidebar-nav nav"
      }, this.state.activeUsers.map(function (user, index) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
          id: index,
          onClick: _this2.onUserSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          },
          className: "jsx-3442082953" + " " + "sidebar-brand"
        }, user);
      })))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "page-content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        className: "jsx-3442082953"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        "data-spy": "scroll",
        "data-target": "#spy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        className: "jsx-3442082953" + " " + "page-content inset"
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
        className: "jsx-3442082953" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        className: "jsx-3442082953"
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
        styleId: "3442082953",
        css: "@media (min-width:1224px){#wrapper.jsx-3442082953{padding-left:250px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-3442082953{margin-left:-250px;left:250px;width:250px;background:#000;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}#wrapper.active.jsx-3442082953{padding-left:0;}#wrapper.active.jsx-3442082953 #sidebar-wrapper.jsx-3442082953{left:0;}#page-content-wrapper.jsx-3442082953{width:100%;}.sidebar-nav.jsx-3442082953{position:absolute;top:0;width:250px;list-style:none;margin:0;padding:0;}.sidebar-nav.jsx-3442082953 li.jsx-3442082953{line-height:40px;text-indent:20px;}.sidebar-nav.jsx-3442082953 li.jsx-3442082953 a.jsx-3442082953{color:#999999;display:block;-webkit-text-decoration:none;text-decoration:none;padding-left:60px;}.sidebar-nav.jsx-3442082953 li.jsx-3442082953 a.jsx-3442082953 span.jsx-3442082953:before{position:absolute;left:0;color:#41484c;text-align:center;width:20px;line-height:18px;}.sidebar-nav.jsx-3442082953 li.jsx-3442082953 a.jsx-3442082953:hover,.sidebar-nav.jsx-3442082953 li.active.jsx-3442082953{color:#fff;background:rgba(255,255,255,0.2);-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-3442082953 li.jsx-3442082953 a.jsx-3442082953:active,.sidebar-nav.jsx-3442082953 li.jsx-3442082953 a.jsx-3442082953:focus{-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-3442082953>.sidebar-brand.jsx-3442082953{height:65px;line-height:60px;font-size:18px;}.sidebar-nav.jsx-3442082953>.sidebar-brand.jsx-3442082953 a.jsx-3442082953{color:#999999;}.sidebar-nav.jsx-3442082953>.sidebar-brand.jsx-3442082953 a.jsx-3442082953:hover{color:#fff;background:none;}.inset.jsx-3442082953{padding:20px;}}@media (max-width:1224px){#wrapper.jsx-3442082953{padding-left:20%;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-3442082953{margin-left:-20%;left:20%;width:20%;background:#000;position:fixed;height:100%;overflow-y:scroll;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}#wrapper.active.jsx-3442082953{padding-left:0;}#wrapper.active.jsx-3442082953 #sidebar-wrapper.jsx-3442082953{left:0;}#page-content-wrapper.jsx-3442082953{width:100%;}.sidebar-nav.jsx-3442082953{position:absolute;top:0;width:20%;list-style:none;margin:0;padding:0;}.sidebar-nav.jsx-3442082953 li.jsx-3442082953{line-height:40px;text-indent:20px;}.sidebar-nav.jsx-3442082953 li.jsx-3442082953 a.jsx-3442082953{color:#999999;display:block;-webkit-text-decoration:none;text-decoration:none;padding-left:60px;}.sidebar-nav.jsx-3442082953 li.jsx-3442082953 a.jsx-3442082953 span.jsx-3442082953:before{position:absolute;left:0;color:#41484c;text-align:center;width:20px;line-height:18px;}.sidebar-nav.jsx-3442082953 li.jsx-3442082953 a.jsx-3442082953:hover,.sidebar-nav.jsx-3442082953 li.active.jsx-3442082953{color:#fff;background:rgba(255,255,255,0.2);-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-3442082953 li.jsx-3442082953 a.jsx-3442082953:active,.sidebar-nav.jsx-3442082953 li.jsx-3442082953 a.jsx-3442082953:focus{-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-3442082953>.sidebar-brand.jsx-3442082953{height:65px;line-height:60px;font-size:50%;}.sidebar-nav.jsx-3442082953>.sidebar-brand.jsx-3442082953 a.jsx-3442082953{color:#999999;}.sidebar-nav.jsx-3442082953>.sidebar-brand.jsx-3442082953 a.jsx-3442082953:hover{color:#fff;background:none;}.inset.jsx-3442082953{padding:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0V2dDLEFBSThDLEFBSUEsQUFZSixBQUdSLEFBR0ksQUFHTyxBQVFELEFBSUgsQUFNSSxBQVNQLEFBTVUsQUFHVCxBQUtFLEFBR0gsQUFJRSxBQU1RLEFBSUEsQUFZRixBQUdSLEFBR0ksQUFHTyxBQVFELEFBSUgsQUFNSSxBQVNQLEFBTVUsQUFHVCxBQUtFLEFBR0gsQUFJRSxPQXBJbkIsQUErRUksSUE1RUosQUE4Qm1DLEFBaUJqQixBQWdDZCxBQThCbUMsQUFpQmpCLENBdkZILEFBK0VJLENBbkV2QixBQStFSSxDQW5IWSxBQTZCaEIsQUFrRG9CLEFBNkJoQixDQWpJSixBQStFSSxFQTlEZSxBQThDZSxBQUluQixBQTZCUSxDQXZGZixBQWtCQyxBQTZERyxBQWtCQyxDQTFIaUIsQUFJakIsS0FzQkMsQUErRUUsQ0E3REEsQUErRUksQ0F2Q0osQ0FkaEIsQUErRUksQ0EvR21CLEFBK0VJLENBdkRWLEFBK0VHLENBeElOLElBNkJkLEFBd0VzQixBQU9sQixFQXRGYyxBQTBESSxHQXhDRixBQStFSSxHQXRITixDQXdJZCxDQXpGbUIsQUFVdkIsQUFxRTJCLE1BMUUzQixBQWlEZSxBQThCWCxFQTdHTyxBQTBEVSxLQXhDUixBQStFSSxDQXRIQSxDQXFHRCxFQS9FSixNQTBETSxDQXhDQyxBQStFSSxDQWpCbkIsRUEvRUosRUF0QmMsS0ErQk0sQUErRUksQ0E5QkEsRUFScEIsRUEvRUosRUFRa0IsQUF1Q2xCLEFBK0VJLFNBekVKLEFBK0VJLEVBN0ZKLEFBK0VJLENBOUJlLElBL0VKLFNBZ0ZtQixJQS9FSiw0REFnRlosSUEvRUosUUFnRlYsSUEvRUoiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkQ6XFxpY2VCcmVha2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbnN0YW50cy9jb25maWcnXHJcbmltcG9ydCBTaWduSW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lnbkluXCJcclxuaW1wb3J0IHN0cmluZ3MgZnJvbSAnLi4vY29uc3RhbnRzL3N0cmluZ3MnXHJcbmltcG9ydCB7bm90aWZ5fSBmcm9tIFwicmVhY3Qtbm90aWZ5LXRvYXN0XCI7XHJcbmltcG9ydCBNZWRpYVF1ZXJ5IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xyXG5pbXBvcnQgZW5kcG9pbnRzIGZyb20gJy4uL2NvbnN0YW50cy9lbmRwb2ludHMnXHJcbmltcG9ydCBjcmVkZW50aWFscyBmcm9tICcuLi9jb25zdGFudHMvY3JlZGVudGlhbHMnXHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmdTY3JlZW5cIlxyXG5pbXBvcnQgTGV0dGVyQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvTGV0dGVyc0NvbXBvbmVudCdcclxuaW1wb3J0IEV4Y2hhbmdlUmVxdWVzdCBmcm9tICcuLi9jb21wb25lbnRzL0V4Y2hhbmdlUmVxdWVzdCdcclxuaW1wb3J0IEV4Y2hhbmdlUmVzcG9uc2UgZnJvbSAnLi4vY29tcG9uZW50cy9FeGNoYW5nZVJlc3BvbnNlJ1xyXG5pbXBvcnQgV2FpdGluZ0ZvclZlcmlmaWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1dhaXRpbmdGb3JWZXJpZmljYXRpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFBhZ2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBhY3RpdmVVc2VycyA6IFtcIkxFVyBXRUkgSEFPXCIsXCJUQU4gWUkgS0FOXCJdLFxyXG4gICAgICAgICAgICBsZXR0ZXJzQXNzaWduZWQ6IFtdLFxyXG4gICAgICAgICAgICB1c2VyU2VsZWN0ZWQ6ICcnLFxyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiBmYWxzZSxcclxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yR2FtZVRvU3RhcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNpZ25lZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgbGV0dGVyVG9HaXZlOiAnJyxcclxuICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZ2FtZVN0YXJ0ZWRDaGVja2VkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmV4Y2hhbmdlUmVxdWVzdCA9IHt9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgc2NyZWVuLm9yaWVudGF0aW9uLmxvY2soJ2xhbmRzY2FwZScpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBQdXNoZXIoKVxyXG4gICAgICAgIHRoaXMuY2hlY2tHYW1lU3RhdGUoKVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNpZ25lZEluOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRoZW50aWNhdGlvbkNoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGdhbWVTdGFydGVkQ2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yR2FtZVRvU3RhcnQ6IGZhbHNlLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBQdXNoZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKGNyZWRlbnRpYWxzLlBVU0hFUl9BUFBfS0VZLCB7XHJcbiAgICAgICAgICAgIGNsdXN0ZXI6IGNyZWRlbnRpYWxzLlBVU0hFUl9BUFBfQ0xVU1RFUixcclxuICAgICAgICAgICAgZW5jcnlwdGVkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMucHVzaGVyLnN1YnNjcmliZShzdHJpbmdzLlBVU0hFUl9DSEFOTkVMKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoc3RyaW5ncy5QVVNIRVJfVVNFUl9MSVNUX1VQREFURV9FVkVOVCwgKHVzZXJzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgbmV3IHVzZXIgbGlzdCBmcm9tIFB1c2hlcjogXCIrdXNlcnMpXHJcbiAgICAgICAgICAgIHZhciBuZXdBY3RpdmVVc2VycyA9IHVzZXJzLm1hcCh1c2VyID0+IHVzZXIubmFtZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVVc2VyczogbmV3QWN0aXZlVXNlcnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoc3RyaW5ncy5QVVNIRVJfTkVXX0VYQ0hBTkdFX1JFUVVFU1RfRVZFTlQsIChleGNoYW5nZVJlcXVlc3QpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBuZXcgZXhjaGFuZ2UgcmVxdWVzdDogXCIrSlNPTi5zdHJpbmdpZnkoZXhjaGFuZ2VSZXF1ZXN0KSlcclxuICAgICAgICAgICAgaWYoZXhjaGFuZ2VSZXF1ZXN0LnJlc3BvbmRfdXNlciA9PSB0aGlzLnN0YXRlLnVzZXJOYW1lKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXhjaGFuZ2UgcmVxdWVzdCBpcyBmb3IgbWUuXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4Y2hhbmdlUmVxdWVzdCA9IGV4Y2hhbmdlUmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHk6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoc3RyaW5ncy5FWENIQU5HRV9DT01QTEVURURfRVZFTlQsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGRhdGEucmVxdWVzdF91c2VyID09IHRoaXMuc3RhdGUudXNlck5hbWUpe1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5ncy5OT1RJRklDQVRJT05fRVhDSEFOR0VfU1VDQ0VTU0ZVTCxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcuTk9USUZJQ0FUSU9OX1RZUEUsIGNvbmZpZy5OT1RJRklDQVRJT05fVElNRU9VVCxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbmZpZy5OT1RJRklDQVRJT05fQkFDS0dST1VORF9DT0xPUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogY29uZmlnLk5PVElGSUNBVElPTl9URVhUX0NPTE9SXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV4Y2hhbmdlIHJlcXVlc3QgaGFzIGNvbXBsZXRlZDogXCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxldHRlcnMgYXNzaWduZWQgYXJlIG5vdyBcIit0aGlzLnN0YXRlLmxldHRlcnNBc3NpZ25lZClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzV2FpdGluZ0ZvckNvdW50ZXJQYXJ0eVRvVmVyaWZ5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMucmV0cmlldmVBbGxHYW1lSW5mb3JtYXRpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX0dBTUVfU1RBUlRfRVZFTlQsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zaWduZWRJbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIGhhcyBzdGFydGVkLi4ubG9hZGluZyBtYWluIHBhZ2UuLi5cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzV2FpdGluZ0ZvckdhbWVUb1N0YXJ0OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMucmV0cmlldmVBbGxHYW1lSW5mb3JtYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5ncy5OT1RJRklDQVRJT05fR0FNRV9CRUdVTixcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcuTk9USUZJQ0FUSU9OX1RZUEUsIGNvbmZpZy5OT1RJRklDQVRJT05fVElNRU9VVCxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbmZpZy5OT1RJRklDQVRJT05fQkFDS0dST1VORF9DT0xPUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogY29uZmlnLk5PVElGSUNBVElPTl9URVhUX0NPTE9SXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoc3RyaW5ncy5QVVNIRVJfR0FNRV9TVE9QX0VWRU5ULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2lnbmVkSW4pe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiR2FtZSBoYXMgYmVlbiBmb3JjZWZ1bGx5IHN0b3BwZWQgYnkgZ2FtZSBtYXN0ZXJcIilcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0dhbWVTdGF0ZSA9ICgpID0+IHtcclxuICAgICAgICB1dGlscy5jaGVja0F1dGhlbnRpY2F0ZWQoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzaWduZWRJbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uQ2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvbkNoZWNrZWQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB1dGlscy5jaGVja0dhbWVTdGFydGVkKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNXYWl0aW5nRm9yR2FtZVRvU3RhcnQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMucmV0cmlldmVBbGxHYW1lSW5mb3JtYXRpb24oKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGdhbWVTdGFydGVkQ2hlY2tlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGdhbWVTdGFydGVkQ2hlY2tlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmVBbGxHYW1lSW5mb3JtYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXRyaXZlVXNlck5hbWUoKVxyXG4gICAgICAgIHRoaXMucmV0cml2ZUxldHRlcnMoKVxyXG4gICAgICAgIHRoaXMucmV0cmlldmVBY3RpdmVVc2VycygpXHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsV2FpdGluZ0ZvclZlcmlmaWNhdGlvbiA9IChyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzV2FpdGluZ0ZvckNvdW50ZXJQYXJ0eVRvVmVyaWZ5OiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25FeGNoYW5nZVJlcXVlc3RTdWJtaXRTdWNjZXNzID0gKGxldHRlclRvR2l2ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogdHJ1ZSxcclxuICAgICAgICAgICAgbGV0dGVyVG9HaXZlOiBsZXR0ZXJUb0dpdmVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXhjaGFuZ2VSZXNwb25zZVN1Ym1pdFN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgbm90aWZ5LnNob3coXHJcbiAgICAgICAgICAgIHN0cmluZ3MuTk9USUZJQ0FUSU9OX0VYQ0hBTkdFX1NVQ0NFU1NGVUwsXHJcbiAgICAgICAgICAgIGNvbmZpZy5OT1RJRklDQVRJT05fVFlQRSwgY29uZmlnLk5PVElGSUNBVElPTl9USU1FT1VULFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb25maWcuTk9USUZJQ0FUSU9OX0JBQ0tHUk9VTkRfQ09MT1IsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBjb25maWcuTk9USUZJQ0FUSU9OX1RFWFRfQ09MT1JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5yZXRyaXZlTGV0dGVycygpXHJcbiAgICB9XHJcblxyXG4gICAgb25Vc2VyU2VsZWN0ZWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYWN0aXZlVXNlcnNbZS50YXJnZXQuaWRdID09PSB0aGlzLnN0YXRlLnVzZXJOYW1lKVxyXG4gICAgICAgICAgICBub3RpZnkuc2hvdyhcclxuICAgICAgICAgICAgICAgIHN0cmluZ3MuTk9USUZJQ0FUSU9OX1NBTUVfTkFNRV9TRUxFQ1RFRCxcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5OT1RJRklDQVRJT05fVFlQRSwgY29uZmlnLk5PVElGSUNBVElPTl9USU1FT1VULFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbmZpZy5OT1RJRklDQVRJT05fQkFDS0dST1VORF9DT0xPUixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjb25maWcuTk9USUZJQ0FUSU9OX1RFWFRfQ09MT1JcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgdXNlciBzZWxlY3RlZCB0byBcIiArIGUudGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHVzZXJTZWxlY3RlZDogdGhpcy5zdGF0ZS5hY3RpdmVVc2Vyc1tlLnRhcmdldC5pZF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cml2ZUxldHRlcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiBlbmRwb2ludHMuQVBJX0dFVF9BU1NJR05FRF9MRVRURVJTXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvdCBsZXR0ZXJzIGFzc2lnbmVkIGFzICcrcmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJzQXNzaWduZWQgOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZUFjdGl2ZVVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogZW5kcG9pbnRzLkFQSV9HRVRfQUxMX0FDVElWRV9VU0VSU1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVVzZXJzID0gcmVzcG9uc2UuZGF0YS5tYXAoc2Vzc2lvbiA9PiBzZXNzaW9uLnVzZXIubmFtZSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhcnNlZCBhY3RpdmUgdXNlcnMgYXMgJythY3RpdmVVc2VycylcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVVc2VycyA6IGFjdGl2ZVVzZXJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXRyaXZlVXNlck5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiBlbmRwb2ludHMuQVBJX0dFVF9TRVNTSU9OXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZS5kYXRhLnVzZXIgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCB1c2VybmFtZSBhcyAgJytyZXNwb25zZS5kYXRhLnVzZXIubmFtZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB1c2VyTmFtZSA6IHJlc3BvbnNlLmRhdGEudXNlci5uYW1lXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxSZXNwb25kVG9SZXF1ZXN0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TaWduSW4gPSAobmFtZSxiaXJ0aGRheSxmYXZvdXJpdGVGb29kLGRlc2h1KSA9PiB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWUudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2lnbmluZyBpbi4uLlwiK25hbWUpXHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiBlbmRwb2ludHMuQVBJX0xPR0lOX1VTRVIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGJpcnRoZGF5OiBiaXJ0aGRheSxcclxuICAgICAgICAgICAgICAgICAgICBmYXZvdXJpdGVGb29kOiBmYXZvdXJpdGVGb29kLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2h1OiBkZXNodVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5yZXN1bHQgPT0gMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25lZEluOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBub3RpZnkuc2hvdyhcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLk5PVElGSUNBVElPTl9UWVBFLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5OT1RJRklDQVRJT05fVElNRU9VVCxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbmZpZy5OT1RJRklDQVRJT05fQkFDS0dST1VORF9DT0xPUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogY29uZmlnLk5PVElGSUNBVElPTl9URVhUX0NPTE9SXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5hdXRoZW50aWNhdGlvbkNoZWNrZWQgfHwgIXRoaXMuc3RhdGUuZ2FtZVN0YXJ0ZWRDaGVja2VkKVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBlbHNlIGlmKCF0aGlzLnN0YXRlLnNpZ25lZEluKVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWduSW4gb25TaWduSW49e3RoaXMub25TaWduSW59Lz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5pc1dhaXRpbmdGb3JHYW1lVG9TdGFydCAmJiB0aGlzLnN0YXRlLnNpZ25lZEluKVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nU2NyZWVuLz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnkpXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdhaXRpbmdGb3JWZXJpZmljYXRpb24gY2FuY2VsPXt0aGlzLmNhbmNlbFdhaXRpbmdGb3JWZXJpZmljYXRpb259Lz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5KVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3RoaXMuZXhjaGFuZ2VSZXF1ZXN0LnJlcXVlc3RfdXNlcn0gaGFzIHJlcXVlc3RlZCB0byBjb25uZWN0LlBsZWFzZSBmaWxsIGluIGhpcyBkZXRhaWxzIGJlbG93LjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEV4Y2hhbmdlUmVzcG9uc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VXNlcj17dGhpcy5leGNoYW5nZVJlcXVlc3QucmVxdWVzdF91c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZT17dGhpcy5leGNoYW5nZVJlcXVlc3QucmVxdWVzdF91c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkV4Y2hhbmdlUmVzcG9uc2VTdWJtaXRTdWNjZXNzPXt0aGlzLm9uRXhjaGFuZ2VSZXNwb25zZVN1Ym1pdFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU9e3RoaXMuc3RhdGUubGV0dGVyc0Fzc2lnbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNoYW5nZVJlcXVlc3Q9e3RoaXMuZXhjaGFuZ2VSZXF1ZXN0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nY2FuY2VsLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jYW5jZWxSZXNwb25kVG9SZXF1ZXN0ZXJ9IGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2lkZWJhci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGlkPVwic3B5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXItbmF2IG5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hY3RpdmVVc2Vycy5tYXAoKHVzZXIsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgaWQ9e2luZGV4fSBjbGFzc05hbWU9XCJzaWRlYmFyLWJyYW5kXCIgb25DbGljaz17dGhpcy5vblVzZXJTZWxlY3RlZH0+e3VzZXJ9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2UtY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudCBpbnNldFwiIGRhdGEtc3B5PVwic2Nyb2xsXCIgZGF0YS10YXJnZXQ9XCIjc3B5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExldHRlckNvbXBvbmVudCB1c2VyTmFtZT17dGhpcy5zdGF0ZS51c2VyTmFtZX0gbGV0dGVyc0Fzc2lnbmVkPXt0aGlzLnN0YXRlLmxldHRlcnNBc3NpZ25lZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6JzUwcHgnLG1hcmdpbkJvdHRvbTonNTBweCd9fSBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GaWxsIGluIHRoZSBkZXRhaWxzIG9mIHRoZSBwbGF5ZXIgeW91IHdvdWxkIGxpa2UgdG8gZXhjaGFuZ2Ugd2l0aC48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeGNoYW5nZVJlcXVlc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VXNlcj17dGhpcy5zdGF0ZS51c2VyU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lPXt0aGlzLnN0YXRlLnVzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkV4Y2hhbmdlUmVxdWVzdFN1Ym1pdFN1Y2Nlc3M9e3RoaXMub25FeGNoYW5nZVJlcXVlc3RTdWJtaXRTdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyU2VsZWN0ZWQ9e3RoaXMuc3RhdGUudXNlclNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJzQXZhaWxhYmxlPXt0aGlzLnN0YXRlLmxldHRlcnNBc3NpZ25lZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDoxMjI0cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN3cmFwcGVyLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN3cmFwcGVyLmFjdGl2ZSAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEgc3BhbjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDE0ODRjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkgYTpob3ZlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkgYTphY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zZXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxMjI0cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN3cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIuYWN0aXZlICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEgc3BhbjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDE0ODRjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnNldCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufSJdfQ== */\n/*@ sourceURL=pages\\index.js */"
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
//# sourceMappingURL=4.896449e544c088a7777a.hot-update.js.map