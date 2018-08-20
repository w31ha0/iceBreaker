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
        className: "jsx-1268811696"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "sidebar-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        className: "jsx-1268811696"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("nav", {
        id: "spy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        className: "jsx-1268811696"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        className: "jsx-1268811696" + " " + "sidebar-nav nav"
      }, this.state.activeUsers.map(function (user, index) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
          id: index,
          onClick: _this2.onUserSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          },
          className: "jsx-1268811696" + " " + "sidebar-brand"
        }, user);
      })))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "page-content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        className: "jsx-1268811696"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        "data-spy": "scroll",
        "data-target": "#spy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        className: "jsx-1268811696" + " " + "page-content inset"
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
        className: "jsx-1268811696" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        className: "jsx-1268811696"
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
        styleId: "1268811696",
        css: "@media (min-width:1224px){#wrapper.jsx-1268811696{padding-left:250px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-1268811696{margin-left:-250px;left:250px;width:250px;background:#000;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}#wrapper.active.jsx-1268811696{padding-left:0;}#wrapper.active.jsx-1268811696 #sidebar-wrapper.jsx-1268811696{left:0;}#page-content-wrapper.jsx-1268811696{width:100%;}.sidebar-nav.jsx-1268811696{position:absolute;top:0;width:250px;list-style:none;margin:0;padding:0;}.sidebar-nav.jsx-1268811696 li.jsx-1268811696{line-height:40px;text-indent:20px;}.sidebar-nav.jsx-1268811696 li.jsx-1268811696 a.jsx-1268811696{color:#999999;display:block;-webkit-text-decoration:none;text-decoration:none;padding-left:60px;}.sidebar-nav.jsx-1268811696 li.jsx-1268811696 a.jsx-1268811696 span.jsx-1268811696:before{position:absolute;left:0;color:#41484c;text-align:center;width:20px;line-height:18px;}.sidebar-nav.jsx-1268811696 li.jsx-1268811696 a.jsx-1268811696:hover,.sidebar-nav.jsx-1268811696 li.active.jsx-1268811696{color:#fff;background:rgba(255,255,255,0.2);-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-1268811696 li.jsx-1268811696 a.jsx-1268811696:active,.sidebar-nav.jsx-1268811696 li.jsx-1268811696 a.jsx-1268811696:focus{-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-1268811696>.sidebar-brand.jsx-1268811696{height:65px;line-height:60px;font-size:18px;}.sidebar-nav.jsx-1268811696>.sidebar-brand.jsx-1268811696 a.jsx-1268811696{color:#999999;}.sidebar-nav.jsx-1268811696>.sidebar-brand.jsx-1268811696 a.jsx-1268811696:hover{color:#fff;background:none;}.inset.jsx-1268811696{padding:20px;}}@media (max-width:1224px){#wrapper.jsx-1268811696{padding-left:100px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-1268811696{margin-left:-100px;left:100px;width:100px;background:#000;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}#wrapper.active.jsx-1268811696{padding-left:0;}#wrapper.active.jsx-1268811696 #sidebar-wrapper.jsx-1268811696{left:0;}#page-content-wrapper.jsx-1268811696{width:100%;}.sidebar-nav.jsx-1268811696{position:absolute;top:0;width:100px;list-style:none;margin:0;padding:0;}.sidebar-nav.jsx-1268811696 li.jsx-1268811696{line-height:40px;text-indent:20px;}.sidebar-nav.jsx-1268811696 li.jsx-1268811696 a.jsx-1268811696{color:#999999;display:block;-webkit-text-decoration:none;text-decoration:none;padding-left:60px;}.sidebar-nav.jsx-1268811696 li.jsx-1268811696 a.jsx-1268811696 span.jsx-1268811696:before{position:absolute;left:0;color:#41484c;text-align:center;width:20px;line-height:18px;}.sidebar-nav.jsx-1268811696 li.jsx-1268811696 a.jsx-1268811696:hover,.sidebar-nav.jsx-1268811696 li.active.jsx-1268811696{color:#fff;background:rgba(255,255,255,0.2);-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-1268811696 li.jsx-1268811696 a.jsx-1268811696:active,.sidebar-nav.jsx-1268811696 li.jsx-1268811696 a.jsx-1268811696:focus{-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-1268811696>.sidebar-brand.jsx-1268811696{height:65px;line-height:60px;font-size:18px;}.sidebar-nav.jsx-1268811696>.sidebar-brand.jsx-1268811696 a.jsx-1268811696{color:#999999;}.sidebar-nav.jsx-1268811696>.sidebar-brand.jsx-1268811696 a.jsx-1268811696:hover{color:#fff;background:none;}.inset.jsx-1268811696{padding:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0V2dDLEFBSThDLEFBSUEsQUFZSixBQUdSLEFBR0ksQUFHTyxBQVFELEFBSUgsQUFNSSxBQVNQLEFBTVUsQUFHVCxBQUtFLEFBR0gsQUFJRSxBQU1VLEFBSUEsQUFZSixBQUdSLEFBR0ksQUFHTyxBQVFELEFBSUgsQUFNSSxBQVNQLEFBTVUsQUFHVCxBQUtFLEFBR0gsQUFJRSxPQXBJbkIsQUErRUksSUE1RUosQUE4Qm1DLEFBaUJqQixBQWdDZCxBQThCbUMsQUFpQmpCLENBdkZILEFBK0VJLENBbkV2QixBQStFSSxDQW5IWSxBQTZCaEIsQUFrRG9CLEFBNkJoQixDQWpJSixBQStFSSxFQTlEZSxBQStFSSxDQXZGZixBQWtCQyxBQTZERyxBQWtCQyxDQTFIaUIsQUFJakIsQUEyRXFCLEFBSWpCLEtBekRILEFBK0VJLENBN0RGLEFBK0VJLEVBckRwQixBQStFSSxDQS9HbUIsQUErRUksQ0F2RFYsQUErRUksQ0F4SVAsQUErRUksSUFsRGxCLEFBK0VJLEVBdEZjLEFBK0VJLEdBN0RGLEFBK0VJLEdBdEhOLEFBK0VJLEVBaENDLEFBVXZCLEFBcUUyQixBQVV2QixNQXBGSixBQStFSSxFQTdHTyxBQStFSSxLQTdERixBQStFSSxDQXRIQSxBQStFSSxHQXpEVCxBQStFSSxPQTdERyxBQStFSSxHQWhHdkIsQUErRUksRUFyR1UsQUErRUksS0FoREUsQUErRUksS0FySHhCLEFBK0VJLEVBdkVjLEFBdUNsQixBQXdDc0IsQUF1Q2xCLFNBekVKLEFBK0VJLEVBN0ZKLEFBK0VJLEtBN0dXLEFBK0VJLGFBOUVXLEFBK0VJLGdFQTlFcEIsQUErRUksWUE5RWxCLEFBK0VJIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJEOlxcaWNlQnJlYWtlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHVzaGVyIGZyb20gJ3B1c2hlci1qcyc7XHJcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy91dGlscydcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25zdGFudHMvY29uZmlnJ1xyXG5pbXBvcnQgU2lnbkluIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZ25JblwiXHJcbmltcG9ydCBzdHJpbmdzIGZyb20gJy4uL2NvbnN0YW50cy9zdHJpbmdzJ1xyXG5pbXBvcnQge25vdGlmeX0gZnJvbSBcInJlYWN0LW5vdGlmeS10b2FzdFwiO1xyXG5pbXBvcnQgTWVkaWFRdWVyeSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcydcclxuaW1wb3J0IGVuZHBvaW50cyBmcm9tICcuLi9jb25zdGFudHMvZW5kcG9pbnRzJ1xyXG5pbXBvcnQgY3JlZGVudGlhbHMgZnJvbSAnLi4vY29uc3RhbnRzL2NyZWRlbnRpYWxzJ1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nU2NyZWVuXCJcclxuaW1wb3J0IExldHRlckNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0xldHRlcnNDb21wb25lbnQnXHJcbmltcG9ydCBFeGNoYW5nZVJlcXVlc3QgZnJvbSAnLi4vY29tcG9uZW50cy9FeGNoYW5nZVJlcXVlc3QnXHJcbmltcG9ydCBFeGNoYW5nZVJlc3BvbnNlIGZyb20gJy4uL2NvbXBvbmVudHMvRXhjaGFuZ2VSZXNwb25zZSdcclxuaW1wb3J0IFdhaXRpbmdGb3JWZXJpZmljYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9XYWl0aW5nRm9yVmVyaWZpY2F0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBQYWdlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB1c2VyTmFtZTogXCJcIixcclxuICAgICAgICAgICAgYWN0aXZlVXNlcnMgOiBbXCJMRVcgV0VJIEhBT1wiLFwiVEFOIFlJIEtBTlwiXSxcclxuICAgICAgICAgICAgbGV0dGVyc0Fzc2lnbmVkOiBbXSxcclxuICAgICAgICAgICAgdXNlclNlbGVjdGVkOiAnJyxcclxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnk6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1ZlcmlmeWluZ0ZvckNvdW50ZXJQYXJ0eTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzV2FpdGluZ0ZvckdhbWVUb1N0YXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICBzaWduZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGxldHRlclRvR2l2ZTogJycsXHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uQ2hlY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGdhbWVTdGFydGVkQ2hlY2tlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5leGNoYW5nZVJlcXVlc3QgPSB7fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHNjcmVlbi5vcmllbnRhdGlvbi5sb2NrKCdsYW5kc2NhcGUnKTtcclxuICAgICAgICB0aGlzLnNldHVwUHVzaGVyKClcclxuICAgICAgICB0aGlzLmNoZWNrR2FtZVN0YXRlKClcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaWduZWRJbjogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICBnYW1lU3RhcnRlZENoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGlzV2FpdGluZ0ZvckdhbWVUb1N0YXJ0OiBmYWxzZSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwUHVzaGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcihjcmVkZW50aWFscy5QVVNIRVJfQVBQX0tFWSwge1xyXG4gICAgICAgICAgICBjbHVzdGVyOiBjcmVkZW50aWFscy5QVVNIRVJfQVBQX0NMVVNURVIsXHJcbiAgICAgICAgICAgIGVuY3J5cHRlZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUoc3RyaW5ncy5QVVNIRVJfQ0hBTk5FTCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX1VTRVJfTElTVF9VUERBVEVfRVZFTlQsICh1c2VycykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIG5ldyB1c2VyIGxpc3QgZnJvbSBQdXNoZXI6IFwiK3VzZXJzKVxyXG4gICAgICAgICAgICB2YXIgbmV3QWN0aXZlVXNlcnMgPSB1c2Vycy5tYXAodXNlciA9PiB1c2VyLm5hbWUpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlcnM6IG5ld0FjdGl2ZVVzZXJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX05FV19FWENIQU5HRV9SRVFVRVNUX0VWRU5ULCAoZXhjaGFuZ2VSZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgbmV3IGV4Y2hhbmdlIHJlcXVlc3Q6IFwiK0pTT04uc3RyaW5naWZ5KGV4Y2hhbmdlUmVxdWVzdCkpXHJcbiAgICAgICAgICAgIGlmKGV4Y2hhbmdlUmVxdWVzdC5yZXNwb25kX3VzZXIgPT0gdGhpcy5zdGF0ZS51c2VyTmFtZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV4Y2hhbmdlIHJlcXVlc3QgaXMgZm9yIG1lLlwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5leGNoYW5nZVJlcXVlc3QgPSBleGNoYW5nZVJlcXVlc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuRVhDSEFOR0VfQ09NUExFVEVEX0VWRU5ULCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZihkYXRhLnJlcXVlc3RfdXNlciA9PSB0aGlzLnN0YXRlLnVzZXJOYW1lKXtcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ3MuTk9USUZJQ0FUSU9OX0VYQ0hBTkdFX1NVQ0NFU1NGVUwsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLk5PVElGSUNBVElPTl9UWVBFLCBjb25maWcuTk9USUZJQ0FUSU9OX1RJTUVPVVQsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb25maWcuTk9USUZJQ0FUSU9OX0JBQ0tHUk9VTkRfQ09MT1IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGNvbmZpZy5OT1RJRklDQVRJT05fVEVYVF9DT0xPUlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFeGNoYW5nZSByZXF1ZXN0IGhhcyBjb21wbGV0ZWQ6IFwiK0pTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZXR0ZXJzIGFzc2lnbmVkIGFyZSBub3cgXCIrdGhpcy5zdGF0ZS5sZXR0ZXJzQXNzaWduZWQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJldHJpZXZlQWxsR2FtZUluZm9ybWF0aW9uKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLlBVU0hFUl9HQU1FX1NUQVJUX0VWRU5ULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2lnbmVkSW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBoYXMgc3RhcnRlZC4uLmxvYWRpbmcgbWFpbiBwYWdlLi4uXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1dhaXRpbmdGb3JHYW1lVG9TdGFydDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJldHJpZXZlQWxsR2FtZUluZm9ybWF0aW9uKClcclxuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ3MuTk9USUZJQ0FUSU9OX0dBTUVfQkVHVU4sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLk5PVElGSUNBVElPTl9UWVBFLCBjb25maWcuTk9USUZJQ0FUSU9OX1RJTUVPVVQsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb25maWcuTk9USUZJQ0FUSU9OX0JBQ0tHUk9VTkRfQ09MT1IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGNvbmZpZy5OT1RJRklDQVRJT05fVEVYVF9DT0xPUlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX0dBTUVfU1RPUF9FVkVOVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNpZ25lZEluKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkdhbWUgaGFzIGJlZW4gZm9yY2VmdWxseSBzdG9wcGVkIGJ5IGdhbWUgbWFzdGVyXCIpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tHYW1lU3RhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdXRpbHMuY2hlY2tBdXRoZW50aWNhdGVkKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2lnbmVkSW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvbkNoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdXRpbHMuY2hlY2tHYW1lU3RhcnRlZCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzV2FpdGluZ0ZvckdhbWVUb1N0YXJ0OiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnJldHJpZXZlQWxsR2FtZUluZm9ybWF0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhcnRlZENoZWNrZWQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhcnRlZENoZWNrZWQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHJpZXZlQWxsR2FtZUluZm9ybWF0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmV0cml2ZVVzZXJOYW1lKClcclxuICAgICAgICB0aGlzLnJldHJpdmVMZXR0ZXJzKClcclxuICAgICAgICB0aGlzLnJldHJpZXZlQWN0aXZlVXNlcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbFdhaXRpbmdGb3JWZXJpZmljYXRpb24gPSAocikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXhjaGFuZ2VSZXF1ZXN0U3VibWl0U3VjY2VzcyA9IChsZXR0ZXJUb0dpdmUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnk6IHRydWUsXHJcbiAgICAgICAgICAgIGxldHRlclRvR2l2ZTogbGV0dGVyVG9HaXZlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkV4Y2hhbmdlUmVzcG9uc2VTdWJtaXRTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIG5vdGlmeS5zaG93KFxyXG4gICAgICAgICAgICBzdHJpbmdzLk5PVElGSUNBVElPTl9FWENIQU5HRV9TVUNDRVNTRlVMLFxyXG4gICAgICAgICAgICBjb25maWcuTk9USUZJQ0FUSU9OX1RZUEUsIGNvbmZpZy5OT1RJRklDQVRJT05fVElNRU9VVCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY29uZmlnLk5PVElGSUNBVElPTl9CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogY29uZmlnLk5PVElGSUNBVElPTl9URVhUX0NPTE9SXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1ZlcmlmeWluZ0ZvckNvdW50ZXJQYXJ0eTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucmV0cml2ZUxldHRlcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uVXNlclNlbGVjdGVkID0gKGUpID0+IHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZVVzZXJzW2UudGFyZ2V0LmlkXSA9PT0gdGhpcy5zdGF0ZS51c2VyTmFtZSlcclxuICAgICAgICAgICAgbm90aWZ5LnNob3coXHJcbiAgICAgICAgICAgICAgICBzdHJpbmdzLk5PVElGSUNBVElPTl9TQU1FX05BTUVfU0VMRUNURUQsXHJcbiAgICAgICAgICAgICAgICBjb25maWcuTk9USUZJQ0FUSU9OX1RZUEUsIGNvbmZpZy5OT1RJRklDQVRJT05fVElNRU9VVCxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb25maWcuTk9USUZJQ0FUSU9OX0JBQ0tHUk9VTkRfQ09MT1IsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogY29uZmlnLk5PVElGSUNBVElPTl9URVhUX0NPTE9SXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXR0aW5nIHVzZXIgc2VsZWN0ZWQgdG8gXCIgKyBlLnRhcmdldC5pZClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB1c2VyU2VsZWN0ZWQ6IHRoaXMuc3RhdGUuYWN0aXZlVXNlcnNbZS50YXJnZXQuaWRdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHJpdmVMZXR0ZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogZW5kcG9pbnRzLkFQSV9HRVRfQVNTSUdORURfTEVUVEVSU1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb3QgbGV0dGVycyBhc3NpZ25lZCBhcyAnK3Jlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyc0Fzc2lnbmVkIDogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvL2hhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmVBY3RpdmVVc2VycyA9ICgpID0+IHtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmw6IGVuZHBvaW50cy5BUElfR0VUX0FMTF9BQ1RJVkVfVVNFUlNcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVVc2VycyA9IHJlc3BvbnNlLmRhdGEubWFwKHNlc3Npb24gPT4gc2Vzc2lvbi51c2VyLm5hbWUpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXJzZWQgYWN0aXZlIHVzZXJzIGFzICcrYWN0aXZlVXNlcnMpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlcnMgOiBhY3RpdmVVc2Vyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvL2hhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cml2ZVVzZXJOYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogZW5kcG9pbnRzLkFQSV9HRVRfU0VTU0lPTlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2UuZGF0YS51c2VyID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgdXNlcm5hbWUgYXMgICcrcmVzcG9uc2UuZGF0YS51c2VyLm5hbWUpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdXNlck5hbWUgOiByZXNwb25zZS5kYXRhLnVzZXIubmFtZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvL2hhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsUmVzcG9uZFRvUmVxdWVzdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1ZlcmlmeWluZ0ZvckNvdW50ZXJQYXJ0eTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2lnbkluID0gKG5hbWUsYmlydGhkYXksZmF2b3VyaXRlRm9vZCxkZXNodSkgPT4ge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lLnRvVXBwZXJDYXNlKClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ25pbmcgaW4uLi5cIituYW1lKVxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogZW5kcG9pbnRzLkFQSV9MT0dJTl9VU0VSLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBiaXJ0aGRheTogYmlydGhkYXksXHJcbiAgICAgICAgICAgICAgICAgICAgZmF2b3VyaXRlRm9vZDogZmF2b3VyaXRlRm9vZCxcclxuICAgICAgICAgICAgICAgICAgICBkZXNodTogZGVzaHVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEucmVzdWx0ID09IDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzaWduZWRJbjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5OT1RJRklDQVRJT05fVFlQRSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcuTk9USUZJQ0FUSU9OX1RJTUVPVVQsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb25maWcuTk9USUZJQ0FUSU9OX0JBQ0tHUk9VTkRfQ09MT1IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGNvbmZpZy5OT1RJRklDQVRJT05fVEVYVF9DT0xPUlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvL2hhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYXV0aGVudGljYXRpb25DaGVja2VkIHx8ICF0aGlzLnN0YXRlLmdhbWVTdGFydGVkQ2hlY2tlZClcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgZWxzZSBpZighdGhpcy5zdGF0ZS5zaWduZWRJbilcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8U2lnbkluIG9uU2lnbkluPXt0aGlzLm9uU2lnbklufS8+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuaXNXYWl0aW5nRm9yR2FtZVRvU3RhcnQgJiYgdGhpcy5zdGF0ZS5zaWduZWRJbilcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ1NjcmVlbi8+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzV2FpdGluZ0ZvckNvdW50ZXJQYXJ0eVRvVmVyaWZ5KVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxXYWl0aW5nRm9yVmVyaWZpY2F0aW9uIGNhbmNlbD17dGhpcy5jYW5jZWxXYWl0aW5nRm9yVmVyaWZpY2F0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5pc1ZlcmlmeWluZ0ZvckNvdW50ZXJQYXJ0eSlcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt0aGlzLmV4Y2hhbmdlUmVxdWVzdC5yZXF1ZXN0X3VzZXJ9IGhhcyByZXF1ZXN0ZWQgdG8gY29ubmVjdC5QbGVhc2UgZmlsbCBpbiBoaXMgZGV0YWlscyBiZWxvdy48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFeGNoYW5nZVJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVzZXI9e3RoaXMuZXhjaGFuZ2VSZXF1ZXN0LnJlcXVlc3RfdXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU9e3RoaXMuZXhjaGFuZ2VSZXF1ZXN0LnJlcXVlc3RfdXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25FeGNoYW5nZVJlc3BvbnNlU3VibWl0U3VjY2Vzcz17dGhpcy5vbkV4Y2hhbmdlUmVzcG9uc2VTdWJtaXRTdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJzQXZhaWxhYmxlPXt0aGlzLnN0YXRlLmxldHRlcnNBc3NpZ25lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjaGFuZ2VSZXF1ZXN0PXt0aGlzLmV4Y2hhbmdlUmVxdWVzdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2NhbmNlbC1idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2FuY2VsUmVzcG9uZFRvUmVxdWVzdGVyfSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNpZGViYXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBpZD1cInNweVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyLW5hdiBuYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWN0aXZlVXNlcnMubWFwKCh1c2VyLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGlkPXtpbmRleH0gY2xhc3NOYW1lPVwic2lkZWJhci1icmFuZFwiIG9uQ2xpY2s9e3RoaXMub25Vc2VyU2VsZWN0ZWR9Pnt1c2VyfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlLWNvbnRlbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgaW5zZXRcIiBkYXRhLXNweT1cInNjcm9sbFwiIGRhdGEtdGFyZ2V0PVwiI3NweVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZXR0ZXJDb21wb25lbnQgdXNlck5hbWU9e3RoaXMuc3RhdGUudXNlck5hbWV9IGxldHRlcnNBc3NpZ25lZD17dGhpcy5zdGF0ZS5sZXR0ZXJzQXNzaWduZWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOic1MHB4JyxtYXJnaW5Cb3R0b206JzUwcHgnfX0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RmlsbCBpbiB0aGUgZGV0YWlscyBvZiB0aGUgcGxheWVyIHlvdSB3b3VsZCBsaWtlIHRvIGV4Y2hhbmdlIHdpdGguPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXhjaGFuZ2VSZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVzZXI9e3RoaXMuc3RhdGUudXNlclNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZT17dGhpcy5zdGF0ZS51c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FeGNoYW5nZVJlcXVlc3RTdWJtaXRTdWNjZXNzPXt0aGlzLm9uRXhjaGFuZ2VSZXF1ZXN0U3VibWl0U3VjY2Vzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclNlbGVjdGVkPXt0aGlzLnN0YXRlLnVzZXJTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZT17dGhpcy5zdGF0ZS5sZXR0ZXJzQXNzaWduZWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN3cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd3JhcHBlci5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd3JhcHBlci5hY3RpdmUgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhIHNwYW46YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQxNDg0YztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGE6aG92ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaS5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGE6YWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkgYTpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc2V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTIyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN3cmFwcGVyLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN3cmFwcGVyLmFjdGl2ZSAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEgc3BhbjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDE0ODRjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5zZXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXX0= */\n/*@ sourceURL=pages\\index.js */"
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
//# sourceMappingURL=4.70aa0b8b8f638f6e8e45.hot-update.js.map