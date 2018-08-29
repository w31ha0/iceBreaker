webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js__ = __webpack_require__("./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pusher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_User__ = __webpack_require__("./models/User.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__("./utils/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Page__ = __webpack_require__("./components/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_SignIn__ = __webpack_require__("./components/SignIn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_strings__ = __webpack_require__("./constants/strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_strings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__constants_strings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_notify_toast__ = __webpack_require__("./node_modules/react-notify-toast/bin/notify.js");
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
var _jsxFileName = "D:\\iceBreaker\\pages\\index.js";


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
          lineNumber: 264
        }
      });else if (!this.state.signedIn) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "signIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_SignIn__["a" /* default */], {
        onSignIn: this.onSignIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      })));else if (this.state.isWaitingForGameToStart && this.state.signedIn) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_LoadingScreen__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }));
      if (this.state.isWaitingForCounterPartyToVerify) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_WaitingForVerification__["a" /* default */], {
        cancel: this.cancelWaitingForVerification,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }));else if (this.state.isVerifyingForCounterParty) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        className: "label-general",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, this.exchangeRequest.request_user, " has requested to connect.Please fill in his details below.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_ExchangeResponse__["a" /* default */], {
        targetUser: this.exchangeRequest.request_user,
        userName: this.exchangeRequest.request_user,
        onExchangeResponseSubmitSuccess: this.onExchangeResponseSubmitSuccess,
        lettersAvailable: this.state.lettersAssigned,
        exchangeRequest: this.exchangeRequest,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.cancelRespondToRequester,
        className: "btn-cancel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, "Cancel"));else return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        className: "jsx-728230039"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "sidebar-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        className: "jsx-728230039"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        id: "spy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        className: "jsx-728230039"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        className: "jsx-728230039" + " " + "sidebar-nav nav"
      }, this.state.activeUsers.map(function (user, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
          id: index,
          onClick: _this2.onUserSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310
          },
          className: "jsx-728230039" + " " + "sidebar-brand"
        }, user);
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "page-content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        className: "jsx-728230039"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "data-spy": "scroll",
        "data-target": "#spy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        className: "jsx-728230039" + " " + "page-content inset"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_LettersComponent__["a" /* default */], {
        onGameCompleted: this.onGameCompleted,
        userName: this.state.userName,
        lettersAssigned: this.state.lettersAssigned,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          marginTop: '50px',
          marginBottom: '50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        className: "jsx-728230039" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        className: "jsx-728230039" + " " + "label-general"
      }, "Fill in the details of the player you would like to exchange with below.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_ExchangeRequest__["a" /* default */], {
        targetUser: this.state.userSelected,
        userName: this.state.userName,
        onExchangeRequestSubmitSuccess: this.onExchangeRequestSubmitSuccess,
        userSelected: this.state.userSelected,
        lettersAvailable: this.state.lettersAssigned,
        updateExchangeRequest: this.updateExchangeRequest,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "728230039",
        css: "#signIn.jsx-728230039{background-color:black;}#wrapper.active.jsx-728230039{padding-left:0;}#wrapper.active.jsx-728230039 #sidebar-wrapper.jsx-728230039{left:0;}#page-content-wrapper.jsx-728230039{width:100%;}.sidebar-nav.jsx-728230039 li.jsx-728230039{line-height:40px;text-indent:20px;}.sidebar-nav.jsx-728230039 li.jsx-728230039 a.jsx-728230039{color:#999999;display:block;-webkit-text-decoration:none;text-decoration:none;padding-left:60px;}.sidebar-nav.jsx-728230039 li.jsx-728230039 a.jsx-728230039 span.jsx-728230039:before{position:absolute;left:0;color:#41484c;text-align:center;width:20px;line-height:18px;}.sidebar-nav.jsx-728230039 li.jsx-728230039 a.jsx-728230039:hover,.sidebar-nav.jsx-728230039 li.active.jsx-728230039{color:#fff;background:rgba(255,255,255,0.2);-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-728230039 li.jsx-728230039 a.jsx-728230039:active,.sidebar-nav.jsx-728230039 li.jsx-728230039 a.jsx-728230039:focus{-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-728230039>.sidebar-brand.jsx-728230039 a.jsx-728230039{color:#999999;}.sidebar-nav.jsx-728230039>.sidebar-brand.jsx-728230039 a.jsx-728230039:hover{color:#fff;background:none;}.inset.jsx-728230039{padding:20px;}@media (min-width:1224px){#wrapper.jsx-728230039{padding-left:250px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-728230039{margin-left:-250px;left:250px;width:250px;background:linear-gradient(#000000,#3300CC);font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}.sidebar-nav.jsx-728230039>.sidebar-brand.jsx-728230039{height:65px;line-height:60px;font-size:18px;}.sidebar-nav.jsx-728230039{position:absolute;top:0;width:250px;list-style:none;margin:0;padding:0;}}@media (max-width:1224px){#wrapper.jsx-728230039{padding-left:100px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-728230039{margin-left:-100px;left:100px;width:100px;background:linear-gradient(#000000,#3300CC);font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}.sidebar-nav.jsx-728230039>.sidebar-brand.jsx-728230039{height:65px;line-height:60px;font-size:10px;}.sidebar-nav.jsx-728230039{position:absolute;top:0;width:100px;list-style:none;margin:0;padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwVWdDLEFBSXVCLEFBRWUsQUFHUixBQUdJLEFBR00sQUFJSCxBQU1JLEFBU1AsQUFNVSxBQUdQLEFBR0gsQUFJRSxBQUtVLEFBSUEsQUFnQlAsQUFNTSxBQVlDLEFBSUEsQUFnQlAsQUFNTSxPQTdHeEIsSUFHQSxBQXNCbUMsQUFZakIsQ0E2QkssQUFzQ0EsQ0EvRHZCLENBL0JnQixBQXdCaEIsQ0FyQ0EsRUFTbUIsQ0FVVixBQXdERyxBQXNDQSxDQWhFc0IsQUFJakIsQUFrQ2lCLEFBSWpCLElBOUZkLENBK0VlLEFBc0NBLENBOUZGLEVBcUJoQixDQTNCdUIsQ0F3REYsQUFzQ0EsQ0F0REgsQUFzQ0EsSUFsRmxCLEVBbUVzQixBQXNDQSxHQTlGRixHQWtDK0IsQUFzQ0EsRUFoRTVCLEFBMENuQixBQXNDQSxNQTNFSixFQTRDZSxBQXNDQSxLQTlGRixJQXlERyxBQXNDQSxPQTlGRyxHQXlEZixBQXNDQSxPQXZHZ0IsS0FtQ2hCLEFBc0NBLEVBaEVKLENBZ0M4QyxBQXNDQSxRQWhFOUMsRUFkQSw2QkF5Q3FCLEFBc0NBLGVBckNLLEFBc0NBLG9CQXJDTCxBQXNDQSxlQXJDSCxBQXNDQSxZQXJDSSxBQXNDQSxnQkFyQ0gsQUFzQ0EsYUFyQ2UsQUFzQ0EsZ0VBckNoQixBQXNDQSxZQXJDZCxBQXNDQSIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiRDpcXGljZUJyZWFrZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL1VzZXInXHJcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIlxyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xyXG5pbXBvcnQgU2lnbkluIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZ25JblwiXHJcbmltcG9ydCBzdHJpbmdzIGZyb20gJy4uL2NvbnN0YW50cy9zdHJpbmdzJ1xyXG5pbXBvcnQge25vdGlmeX0gZnJvbSBcInJlYWN0LW5vdGlmeS10b2FzdFwiO1xyXG5pbXBvcnQgZ2FtZVV0aWxzIGZyb20gXCIuLi91dGlscy9nYW1lVXRpbHNcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xyXG5pbXBvcnQgY3JlZGVudGlhbHMgZnJvbSAnLi4vY29uc3RhbnRzL2NyZWRlbnRpYWxzJ1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nU2NyZWVuXCJcclxuaW1wb3J0IG5vdGlmaWNhdGlvblV0aWxzIGZyb20gXCIuLi91dGlscy9ub3RpZmljYXRpb25VdGlsc1wiXHJcbmltcG9ydCBMZXR0ZXJDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9MZXR0ZXJzQ29tcG9uZW50J1xyXG5pbXBvcnQgRXhjaGFuZ2VSZXF1ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRXhjaGFuZ2VSZXF1ZXN0J1xyXG5pbXBvcnQgRXhjaGFuZ2VSZXNwb25zZSBmcm9tICcuLi9jb21wb25lbnRzL0V4Y2hhbmdlUmVzcG9uc2UnXHJcbmltcG9ydCBXYWl0aW5nRm9yVmVyaWZpY2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvV2FpdGluZ0ZvclZlcmlmaWNhdGlvbidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFBhZ2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBhY3RpdmVVc2VycyA6IFtdLFxyXG4gICAgICAgICAgICBsZXR0ZXJzQXNzaWduZWQ6IFtdLFxyXG4gICAgICAgICAgICB1c2VyU2VsZWN0ZWQ6ICcnLFxyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiBmYWxzZSxcclxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yR2FtZVRvU3RhcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNpZ25lZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgbGV0dGVyVG9HaXZlOiAnJyxcclxuICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgZ2FtZVN0YXJ0ZWRDaGVja2VkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdGlmeSBmcm9tIGluZGV4IGlzIFwiK0pTT04uc3RyaW5naWZ5KG5vdGlmeSkpXHJcbiAgICAgICAgdGhpcy5leGNoYW5nZVJlcXVlc3QgPSB7fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuc2V0dXBQdXNoZXIoKVxyXG4gICAgICAgIHRoaXMuY2hlY2tHYW1lU3RhdGUoKVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNpZ25lZEluOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRoZW50aWNhdGlvbkNoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGdhbWVTdGFydGVkQ2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yR2FtZVRvU3RhcnQ6IGZhbHNlLFxyXG4gICAgICAgIH0pKi9cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFB1c2hlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIoY3JlZGVudGlhbHMuUFVTSEVSX0FQUF9LRVksIHtcclxuICAgICAgICAgICAgY2x1c3RlcjogY3JlZGVudGlhbHMuUFVTSEVSX0FQUF9DTFVTVEVSLFxyXG4gICAgICAgICAgICBlbmNyeXB0ZWQ6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKHN0cmluZ3MuUFVTSEVSX0NIQU5ORUwpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLlBVU0hFUl9VU0VSX0xJU1RfVVBEQVRFX0VWRU5ULCAodXNlcnMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZlVXNlcnMgPSB1c2Vycy5hY3RpdmVVc2Vyc1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIG5ldyB1c2VyIGxpc3QgZnJvbSBQdXNoZXI6IFwiICsgYWN0aXZlVXNlcnMpXHJcbiAgICAgICAgICAgIHZhciBuZXdBY3RpdmVVc2VycyA9IGFjdGl2ZVVzZXJzLm1hcCh1c2VyID0+IHVzZXIubmFtZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVVc2VyczogbmV3QWN0aXZlVXNlcnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoc3RyaW5ncy5QVVNIRVJfTkVXX0VYQ0hBTkdFX1JFUVVFU1RfRVZFTlQsIChleGNoYW5nZVJlcXVlc3QpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBuZXcgZXhjaGFuZ2UgcmVxdWVzdDogXCIgKyBKU09OLnN0cmluZ2lmeShleGNoYW5nZVJlcXVlc3QpKVxyXG4gICAgICAgICAgICBpZiAoZXhjaGFuZ2VSZXF1ZXN0LnJlc3BvbmRfdXNlciA9PSB0aGlzLnN0YXRlLnVzZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV4Y2hhbmdlIHJlcXVlc3QgaXMgZm9yIG1lLlwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5leGNoYW5nZVJlcXVlc3QgPSBleGNoYW5nZVJlcXVlc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuRVhDSEFOR0VfQ09NUExFVEVEX0VWRU5ULCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXF1ZXN0X3VzZXIgPT0gdGhpcy5zdGF0ZS51c2VyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVXRpbHMuc2hvd05vdGlmaWNhdGlvbihzdHJpbmdzLk5PVElGSUNBVElPTl9FWENIQU5HRV9TVUNDRVNTRlVMKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFeGNoYW5nZSByZXF1ZXN0IGhhcyBjb21wbGV0ZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxldHRlcnMgYXNzaWduZWQgYXJlIG5vdyBcIiArIHRoaXMuc3RhdGUubGV0dGVyc0Fzc2lnbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZUFsbEdhbWVJbmZvcm1hdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoc3RyaW5ncy5QVVNIRVJfR0FNRV9TVEFSVF9FVkVOVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaWduZWRJbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIGhhcyBzdGFydGVkLi4ubG9hZGluZyBtYWluIHBhZ2UuLi5cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzV2FpdGluZ0ZvckdhbWVUb1N0YXJ0OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMucmV0cmlldmVBbGxHYW1lSW5mb3JtYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVXRpbHMuc2hvd05vdGlmaWNhdGlvbihzdHJpbmdzLk5PVElGSUNBVElPTl9HQU1FX0JFR1VOKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX0dBTUVfU1RPUF9FVkVOVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaWduZWRJbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBub3RpZmljYXRpb24gdG8gc3RvcCB0aGUgZ2FtZSBhYnJ1cHRseSFcIilcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hlci5kaXNjb25uZWN0KClcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkdhbWUgaGFzIGJlZW4gZm9yY2VmdWxseSBzdG9wcGVkIGJ5IGdhbWUgbWFzdGVyXCIpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX0VYQ0hBTkdFX0NBTkNFTExFRF9FVkVOVCwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBjYW5jZWwgcmVxdWVzdDogXCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlcXVlc3RfdXNlciA9PSB0aGlzLnN0YXRlLnVzZXJOYW1lICYmIHRoaXMuc3RhdGUuaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzV2FpdGluZ0ZvckNvdW50ZXJQYXJ0eVRvVmVyaWZ5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24oc3RyaW5ncy5OT1RJRklDQVRJT05fQ0FOQ0VMX0VYQ0hBTkdFKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEucmVzcG9uZF91c2VyID09IHRoaXMuc3RhdGUudXNlck5hbWUgJiYgdGhpcy5zdGF0ZS5pc1ZlcmlmeWluZ0ZvckNvdW50ZXJQYXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVXRpbHMuc2hvd05vdGlmaWNhdGlvbihzdHJpbmdzLk5PVElGSUNBVElPTl9DQU5DRUxfRVhDSEFOR0UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5wdXNoZXIuZGlzY29ubmVjdCgpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0dhbWVTdGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBnYW1lVXRpbHMuY2hlY2tBdXRoZW50aWNhdGVkKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2lnbmVkSW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvbkNoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25DaGVja2VkOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZ2FtZVV0aWxzLmNoZWNrR2FtZVN0YXJ0ZWQoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1dhaXRpbmdGb3JHYW1lVG9TdGFydDogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZUFsbEdhbWVJbmZvcm1hdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXJ0ZWRDaGVja2VkOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXJ0ZWRDaGVja2VkOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZUFsbEdhbWVJbmZvcm1hdGlvbiA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnJldHJpdmVVc2VyTmFtZSgpXHJcbiAgICAgICAgdGhpcy5yZXRyaXZlTGV0dGVycygpXHJcbiAgICAgICAgdGhpcy5yZXRyaWV2ZUFjdGl2ZVVzZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxXYWl0aW5nRm9yVmVyaWZpY2F0aW9uID0gKHIpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnk6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBnYW1lVXRpbHMuY2FuY2VsRXhjaGFuZ2UodGhpcy5leGNoYW5nZVJlcXVlc3QpXHJcbiAgICB9XHJcblxyXG4gICAgb25FeGNoYW5nZVJlcXVlc3RTdWJtaXRTdWNjZXNzID0gKGxldHRlclRvR2l2ZSxleGNoYW5nZVJlcXVlc3QpID0+IHtcclxuICAgICAgICB1dGlscy5zYXZlVG9Mb2NhbFN0b3JhZ2UoZXhjaGFuZ2VSZXF1ZXN0LnJlc3BvbmRfdXNlcixKU09OLnN0cmluZ2lmeShleGNoYW5nZVJlcXVlc3QpKVxyXG4gICAgICAgIGNvbnN0IHVzZXJTZWxlY3RlZCA9IHRoaXMuc3RhdGUudXNlclNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzV2FpdGluZ0ZvckNvdW50ZXJQYXJ0eVRvVmVyaWZ5OiB0cnVlLFxyXG4gICAgICAgICAgICBsZXR0ZXJUb0dpdmU6IGxldHRlclRvR2l2ZSxcclxuICAgICAgICAgICAgdXNlclNlbGVjdGVkOiAnJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXJTZWxlY3RlZDogdXNlclNlbGVjdGVkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkV4Y2hhbmdlUmVzcG9uc2VTdWJtaXRTdWNjZXNzID0gKGV4Y2hhbmdlUmVzcG9uc2UpID0+IHtcclxuICAgICAgICBub3RpZmljYXRpb25VdGlscy5zaG93Tm90aWZpY2F0aW9uKHN0cmluZ3MuTk9USUZJQ0FUSU9OX0VYQ0hBTkdFX1NVQ0NFU1NGVUwpXHJcbiAgICAgICAgdGhpcy5yZXRyaXZlTGV0dGVycygpXHJcbiAgICAgICAgdXRpbHMuc2F2ZVRvTG9jYWxTdG9yYWdlKGV4Y2hhbmdlUmVzcG9uc2UucmVxdWVzdF91c2VyLEpTT04uc3RyaW5naWZ5KGV4Y2hhbmdlUmVzcG9uc2UpKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1ZlcmlmeWluZ0ZvckNvdW50ZXJQYXJ0eTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uR2FtZUNvbXBsZXRlZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnB1c2hlci5kaXNjb25uZWN0KClcclxuICAgIH1cclxuXHJcbiAgICBvblVzZXJTZWxlY3RlZCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmVVc2Vyc1tlLnRhcmdldC5pZF0gPT09IHRoaXMuc3RhdGUudXNlck5hbWUpXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24oc3RyaW5ncy5OT1RJRklDQVRJT05fU0FNRV9OQU1FX1NFTEVDVEVEKVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgdXNlciBzZWxlY3RlZCB0byBcIiArIGUudGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHVzZXJTZWxlY3RlZDogdGhpcy5zdGF0ZS5hY3RpdmVVc2Vyc1tlLnRhcmdldC5pZF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cml2ZUxldHRlcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2FtZVV0aWxzLmdldEFzc2lnbmVkTGV0dGVycygpLnRoZW4oKGxldHRlcnMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJzQXNzaWduZWQgOiBsZXR0ZXJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxmdW5jdGlvbihlcnIpe30pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmVBY3RpdmVVc2VycyA9ICgpID0+IHtcclxuICAgICAgICBnYW1lVXRpbHMuZ2V0QWN0aXZlVXNlcnMoKS50aGVuKChhY3RpdmVVc2VycykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXJzIDogYWN0aXZlVXNlcnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LGZ1bmN0aW9uKGVycil7fSlcclxuICAgIH1cclxuXHJcbiAgICByZXRyaXZlVXNlck5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2FtZVV0aWxzLmdldFVzZXJOYW1lKCkudGhlbigodXNlck5hbWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogdXNlck5hbWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LGZ1bmN0aW9uKGVycil7fSlcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxSZXNwb25kVG9SZXF1ZXN0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ2FtZVV0aWxzLmNhbmNlbEV4Y2hhbmdlKHRoaXMuZXhjaGFuZ2VSZXF1ZXN0KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2lnbkluID0gKG5hbWUsYmlydGhkYXksZmF2b3VyaXRlRm9vZCxkZXNodSkgPT4ge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lLnRvVXBwZXJDYXNlKClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ25pbmcgaW4uLi5cIituYW1lKVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihuYW1lLGJpcnRoZGF5LGRlc2h1LGZhdm91cml0ZUZvb2QpXHJcbiAgICAgICAgZ2FtZVV0aWxzLmxvZ2luVXNlcih1c2VyKS50aGVuKChzdWNjZWVkKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNpZ25lZEluOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxmdW5jdGlvbihlcnJNZXNzYWdlKXtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVXRpbHMuc2hvd05vdGlmaWNhdGlvbihlcnJNZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRXhjaGFuZ2VSZXF1ZXN0ID0gKGV4Y2hhbmdlUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZXhjaGFuZ2VSZXF1ZXN0ID0gZXhjaGFuZ2VSZXF1ZXN0XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYXV0aGVudGljYXRpb25DaGVja2VkIHx8ICF0aGlzLnN0YXRlLmdhbWVTdGFydGVkQ2hlY2tlZClcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgZWxzZSBpZighdGhpcy5zdGF0ZS5zaWduZWRJbilcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2lnbkluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWduSW4gb25TaWduSW49e3RoaXMub25TaWduSW59Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5pc1dhaXRpbmdGb3JHYW1lVG9TdGFydCAmJiB0aGlzLnN0YXRlLnNpZ25lZEluKVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nU2NyZWVuLz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnkpXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdhaXRpbmdGb3JWZXJpZmljYXRpb24gY2FuY2VsPXt0aGlzLmNhbmNlbFdhaXRpbmdGb3JWZXJpZmljYXRpb259Lz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5KVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtZ2VuZXJhbFwiPnt0aGlzLmV4Y2hhbmdlUmVxdWVzdC5yZXF1ZXN0X3VzZXJ9IGhhcyByZXF1ZXN0ZWQgdG8gY29ubmVjdC5QbGVhc2UgZmlsbCBpbiBoaXMgZGV0YWlscyBiZWxvdy48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFeGNoYW5nZVJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVzZXI9e3RoaXMuZXhjaGFuZ2VSZXF1ZXN0LnJlcXVlc3RfdXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU9e3RoaXMuZXhjaGFuZ2VSZXF1ZXN0LnJlcXVlc3RfdXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25FeGNoYW5nZVJlc3BvbnNlU3VibWl0U3VjY2Vzcz17dGhpcy5vbkV4Y2hhbmdlUmVzcG9uc2VTdWJtaXRTdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJzQXZhaWxhYmxlPXt0aGlzLnN0YXRlLmxldHRlcnNBc3NpZ25lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjaGFuZ2VSZXF1ZXN0PXt0aGlzLmV4Y2hhbmdlUmVxdWVzdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jYW5jZWxSZXNwb25kVG9SZXF1ZXN0ZXJ9IGNsYXNzTmFtZT1cImJ0bi1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWRlYmFyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgaWQ9XCJzcHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZWJhci1uYXYgbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFjdGl2ZVVzZXJzLm1hcCgodXNlcixpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBpZD17aW5kZXh9IGNsYXNzTmFtZT1cInNpZGViYXItYnJhbmRcIiBvbkNsaWNrPXt0aGlzLm9uVXNlclNlbGVjdGVkfT57dXNlcn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFnZS1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50IGluc2V0XCIgZGF0YS1zcHk9XCJzY3JvbGxcIiBkYXRhLXRhcmdldD1cIiNzcHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGV0dGVyQ29tcG9uZW50IG9uR2FtZUNvbXBsZXRlZD17dGhpcy5vbkdhbWVDb21wbGV0ZWR9IHVzZXJOYW1lPXt0aGlzLnN0YXRlLnVzZXJOYW1lfSBsZXR0ZXJzQXNzaWduZWQ9e3RoaXMuc3RhdGUubGV0dGVyc0Fzc2lnbmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDonNTBweCcsbWFyZ2luQm90dG9tOic1MHB4J319IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWdlbmVyYWxcIj5GaWxsIGluIHRoZSBkZXRhaWxzIG9mIHRoZSBwbGF5ZXIgeW91IHdvdWxkIGxpa2UgdG8gZXhjaGFuZ2Ugd2l0aCBiZWxvdy48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeGNoYW5nZVJlcXVlc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VXNlcj17dGhpcy5zdGF0ZS51c2VyU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lPXt0aGlzLnN0YXRlLnVzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkV4Y2hhbmdlUmVxdWVzdFN1Ym1pdFN1Y2Nlc3M9e3RoaXMub25FeGNoYW5nZVJlcXVlc3RTdWJtaXRTdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyU2VsZWN0ZWQ9e3RoaXMuc3RhdGUudXNlclNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJzQXZhaWxhYmxlPXt0aGlzLnN0YXRlLmxldHRlcnNBc3NpZ25lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRXhjaGFuZ2VSZXF1ZXN0PXt0aGlzLnVwZGF0ZUV4Y2hhbmdlUmVxdWVzdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAjc2lnbkluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIuYWN0aXZlICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGEgc3BhbjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDE0ODRjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGE6aG92ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGE6YWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnNldCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN3cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDAwMDAsICMzMzAwQ0MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTIyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN3cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDAwMDAsICMzMzAwQ0MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXX0= */\n/*@ sourceURL=pages\\index.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_5__components_Page__["a" /* default */]);


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
//# sourceMappingURL=4.b179fba4bb9554e156de.hot-update.js.map