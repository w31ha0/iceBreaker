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
      isWaitingForCounterPartyToVerify: true,
      isVerifyingForCounterParty: false,
      isWaitingForGameToStart: false,
      signedIn: true,
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
        css: "#signIn.jsx-728230039{background-color:black;}#wrapper.active.jsx-728230039{padding-left:0;}#wrapper.active.jsx-728230039 #sidebar-wrapper.jsx-728230039{left:0;}#page-content-wrapper.jsx-728230039{width:100%;}.sidebar-nav.jsx-728230039 li.jsx-728230039{line-height:40px;text-indent:20px;}.sidebar-nav.jsx-728230039 li.jsx-728230039 a.jsx-728230039{color:#999999;display:block;-webkit-text-decoration:none;text-decoration:none;padding-left:60px;}.sidebar-nav.jsx-728230039 li.jsx-728230039 a.jsx-728230039 span.jsx-728230039:before{position:absolute;left:0;color:#41484c;text-align:center;width:20px;line-height:18px;}.sidebar-nav.jsx-728230039 li.jsx-728230039 a.jsx-728230039:hover,.sidebar-nav.jsx-728230039 li.active.jsx-728230039{color:#fff;background:rgba(255,255,255,0.2);-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-728230039 li.jsx-728230039 a.jsx-728230039:active,.sidebar-nav.jsx-728230039 li.jsx-728230039 a.jsx-728230039:focus{-webkit-text-decoration:none;text-decoration:none;}.sidebar-nav.jsx-728230039>.sidebar-brand.jsx-728230039 a.jsx-728230039{color:#999999;}.sidebar-nav.jsx-728230039>.sidebar-brand.jsx-728230039 a.jsx-728230039:hover{color:#fff;background:none;}.inset.jsx-728230039{padding:20px;}@media (min-width:1224px){#wrapper.jsx-728230039{padding-left:250px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-728230039{margin-left:-250px;left:250px;width:250px;background:linear-gradient(#000000,#3300CC);font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}.sidebar-nav.jsx-728230039>.sidebar-brand.jsx-728230039{height:65px;line-height:60px;font-size:18px;}.sidebar-nav.jsx-728230039{position:absolute;top:0;width:250px;list-style:none;margin:0;padding:0;}}@media (max-width:1224px){#wrapper.jsx-728230039{padding-left:100px;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;}#sidebar-wrapper.jsx-728230039{margin-left:-100px;left:100px;width:100px;background:linear-gradient(#000000,#3300CC);font-family:'Roboto Medium',sans-serif;font-size:100%;font-weight:lighter;position:fixed;height:100%;overflow-y:auto;z-index:1000;-webkit-transition:all 0.4s ease 0s;transition:all 0.4s ease 0s;color:white;}.sidebar-nav.jsx-728230039>.sidebar-brand.jsx-728230039{height:65px;line-height:60px;font-size:10px;}.sidebar-nav.jsx-728230039{position:absolute;top:0;width:100px;list-style:none;margin:0;padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwVWdDLEFBSXVCLEFBRWUsQUFHUixBQUdJLEFBR00sQUFJSCxBQU1JLEFBU1AsQUFNVSxBQUdQLEFBR0gsQUFJRSxBQUtVLEFBSUEsQUFnQlAsQUFNTSxBQVlDLEFBSUEsQUFnQlAsQUFNTSxPQTdHeEIsSUFHQSxBQXNCbUMsQUFZakIsQ0E2QkssQUFzQ0EsQ0EvRHZCLENBL0JnQixBQXdCaEIsQ0FyQ0EsRUFTbUIsQ0FVVixBQXdERyxBQXNDQSxDQWhFc0IsQUFJakIsQUFrQ2lCLEFBSWpCLElBOUZkLENBK0VlLEFBc0NBLENBOUZGLEVBcUJoQixDQTNCdUIsQ0F3REYsQUFzQ0EsQ0F0REgsQUFzQ0EsSUFsRmxCLEVBbUVzQixBQXNDQSxHQTlGRixHQWtDK0IsQUFzQ0EsRUFoRTVCLEFBMENuQixBQXNDQSxNQTNFSixFQTRDZSxBQXNDQSxLQTlGRixJQXlERyxBQXNDQSxPQTlGRyxHQXlEZixBQXNDQSxPQXZHZ0IsS0FtQ2hCLEFBc0NBLEVBaEVKLENBZ0M4QyxBQXNDQSxRQWhFOUMsRUFkQSw2QkF5Q3FCLEFBc0NBLGVBckNLLEFBc0NBLG9CQXJDTCxBQXNDQSxlQXJDSCxBQXNDQSxZQXJDSSxBQXNDQSxnQkFyQ0gsQUFzQ0EsYUFyQ2UsQUFzQ0EsZ0VBckNoQixBQXNDQSxZQXJDZCxBQXNDQSIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiRDpcXGljZUJyZWFrZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL1VzZXInXHJcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIlxyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xyXG5pbXBvcnQgU2lnbkluIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZ25JblwiXHJcbmltcG9ydCBzdHJpbmdzIGZyb20gJy4uL2NvbnN0YW50cy9zdHJpbmdzJ1xyXG5pbXBvcnQge25vdGlmeX0gZnJvbSBcInJlYWN0LW5vdGlmeS10b2FzdFwiO1xyXG5pbXBvcnQgZ2FtZVV0aWxzIGZyb20gXCIuLi91dGlscy9nYW1lVXRpbHNcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xyXG5pbXBvcnQgY3JlZGVudGlhbHMgZnJvbSAnLi4vY29uc3RhbnRzL2NyZWRlbnRpYWxzJ1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nU2NyZWVuXCJcclxuaW1wb3J0IG5vdGlmaWNhdGlvblV0aWxzIGZyb20gXCIuLi91dGlscy9ub3RpZmljYXRpb25VdGlsc1wiXHJcbmltcG9ydCBMZXR0ZXJDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9MZXR0ZXJzQ29tcG9uZW50J1xyXG5pbXBvcnQgRXhjaGFuZ2VSZXF1ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRXhjaGFuZ2VSZXF1ZXN0J1xyXG5pbXBvcnQgRXhjaGFuZ2VSZXNwb25zZSBmcm9tICcuLi9jb21wb25lbnRzL0V4Y2hhbmdlUmVzcG9uc2UnXHJcbmltcG9ydCBXYWl0aW5nRm9yVmVyaWZpY2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvV2FpdGluZ0ZvclZlcmlmaWNhdGlvbidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFBhZ2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBhY3RpdmVVc2VycyA6IFtdLFxyXG4gICAgICAgICAgICBsZXR0ZXJzQXNzaWduZWQ6IFtdLFxyXG4gICAgICAgICAgICB1c2VyU2VsZWN0ZWQ6ICcnLFxyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogdHJ1ZSxcclxuICAgICAgICAgICAgaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JHYW1lVG9TdGFydDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNpZ25lZEluOiB0cnVlLFxyXG4gICAgICAgICAgICBsZXR0ZXJUb0dpdmU6ICcnLFxyXG4gICAgICAgICAgICBhdXRoZW50aWNhdGlvbkNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBnYW1lU3RhcnRlZENoZWNrZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90aWZ5IGZyb20gaW5kZXggaXMgXCIrSlNPTi5zdHJpbmdpZnkobm90aWZ5KSlcclxuICAgICAgICB0aGlzLmV4Y2hhbmdlUmVxdWVzdCA9IHt9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5zZXR1cFB1c2hlcigpXHJcbiAgICAgICAgdGhpcy5jaGVja0dhbWVTdGF0ZSgpXHJcbiAgICAgICAgLypcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2lnbmVkSW46IHRydWUsXHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uQ2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgZ2FtZVN0YXJ0ZWRDaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JHYW1lVG9TdGFydDogZmFsc2UsXHJcbiAgICAgICAgfSkqL1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwUHVzaGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcihjcmVkZW50aWFscy5QVVNIRVJfQVBQX0tFWSwge1xyXG4gICAgICAgICAgICBjbHVzdGVyOiBjcmVkZW50aWFscy5QVVNIRVJfQVBQX0NMVVNURVIsXHJcbiAgICAgICAgICAgIGVuY3J5cHRlZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUoc3RyaW5ncy5QVVNIRVJfQ0hBTk5FTCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKHN0cmluZ3MuUFVTSEVSX1VTRVJfTElTVF9VUERBVEVfRVZFTlQsICh1c2VycykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVVc2VycyA9IHVzZXJzLmFjdGl2ZVVzZXJzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgbmV3IHVzZXIgbGlzdCBmcm9tIFB1c2hlcjogXCIgKyBhY3RpdmVVc2VycylcclxuICAgICAgICAgICAgdmFyIG5ld0FjdGl2ZVVzZXJzID0gYWN0aXZlVXNlcnMubWFwKHVzZXIgPT4gdXNlci5uYW1lKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXJzOiBuZXdBY3RpdmVVc2Vyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLlBVU0hFUl9ORVdfRVhDSEFOR0VfUkVRVUVTVF9FVkVOVCwgKGV4Y2hhbmdlUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIG5ldyBleGNoYW5nZSByZXF1ZXN0OiBcIiArIEpTT04uc3RyaW5naWZ5KGV4Y2hhbmdlUmVxdWVzdCkpXHJcbiAgICAgICAgICAgIGlmIChleGNoYW5nZVJlcXVlc3QucmVzcG9uZF91c2VyID09IHRoaXMuc3RhdGUudXNlck5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXhjaGFuZ2UgcmVxdWVzdCBpcyBmb3IgbWUuXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4Y2hhbmdlUmVxdWVzdCA9IGV4Y2hhbmdlUmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHk6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoc3RyaW5ncy5FWENIQU5HRV9DT01QTEVURURfRVZFTlQsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlcXVlc3RfdXNlciA9PSB0aGlzLnN0YXRlLnVzZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25VdGlscy5zaG93Tm90aWZpY2F0aW9uKHN0cmluZ3MuTk9USUZJQ0FUSU9OX0VYQ0hBTkdFX1NVQ0NFU1NGVUwpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV4Y2hhbmdlIHJlcXVlc3QgaGFzIGNvbXBsZXRlZDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGV0dGVycyBhc3NpZ25lZCBhcmUgbm93IFwiICsgdGhpcy5zdGF0ZS5sZXR0ZXJzQXNzaWduZWQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJldHJpZXZlQWxsR2FtZUluZm9ybWF0aW9uKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLlBVU0hFUl9HQU1FX1NUQVJUX0VWRU5ULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNpZ25lZEluKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgaGFzIHN0YXJ0ZWQuLi5sb2FkaW5nIG1haW4gcGFnZS4uLlwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNXYWl0aW5nRm9yR2FtZVRvU3RhcnQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZUFsbEdhbWVJbmZvcm1hdGlvbigpXHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25VdGlscy5zaG93Tm90aWZpY2F0aW9uKHN0cmluZ3MuTk9USUZJQ0FUSU9OX0dBTUVfQkVHVU4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoc3RyaW5ncy5QVVNIRVJfR0FNRV9TVE9QX0VWRU5ULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNpZ25lZEluKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIG5vdGlmaWNhdGlvbiB0byBzdG9wIHRoZSBnYW1lIGFicnVwdGx5IVwiKVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICAgICAgICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiR2FtZSBoYXMgYmVlbiBmb3JjZWZ1bGx5IHN0b3BwZWQgYnkgZ2FtZSBtYXN0ZXJcIilcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoc3RyaW5ncy5QVVNIRVJfRVhDSEFOR0VfQ0FOQ0VMTEVEX0VWRU5ULCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGNhbmNlbCByZXF1ZXN0OiBcIitKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVxdWVzdF91c2VyID09IHRoaXMuc3RhdGUudXNlck5hbWUgJiYgdGhpcy5zdGF0ZS5pc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVXRpbHMuc2hvd05vdGlmaWNhdGlvbihzdHJpbmdzLk5PVElGSUNBVElPTl9DQU5DRUxfRVhDSEFOR0UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5yZXNwb25kX3VzZXIgPT0gdGhpcy5zdGF0ZS51c2VyTmFtZSAmJiB0aGlzLnN0YXRlLmlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmeWluZ0ZvckNvdW50ZXJQYXJ0eTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25VdGlscy5zaG93Tm90aWZpY2F0aW9uKHN0cmluZ3MuTk9USUZJQ0FUSU9OX0NBTkNFTF9FWENIQU5HRSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hlci5kaXNjb25uZWN0KClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrR2FtZVN0YXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGdhbWVVdGlscy5jaGVja0F1dGhlbnRpY2F0ZWQoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzaWduZWRJbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uQ2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvbkNoZWNrZWQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBnYW1lVXRpbHMuY2hlY2tHYW1lU3RhcnRlZCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzV2FpdGluZ0ZvckdhbWVUb1N0YXJ0OiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnJldHJpZXZlQWxsR2FtZUluZm9ybWF0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhcnRlZENoZWNrZWQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhcnRlZENoZWNrZWQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHJpZXZlQWxsR2FtZUluZm9ybWF0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmV0cml2ZVVzZXJOYW1lKClcclxuICAgICAgICB0aGlzLnJldHJpdmVMZXR0ZXJzKClcclxuICAgICAgICB0aGlzLnJldHJpZXZlQWN0aXZlVXNlcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbFdhaXRpbmdGb3JWZXJpZmljYXRpb24gPSAocikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGdhbWVVdGlscy5jYW5jZWxFeGNoYW5nZSh0aGlzLmV4Y2hhbmdlUmVxdWVzdClcclxuICAgIH1cclxuXHJcbiAgICBvbkV4Y2hhbmdlUmVxdWVzdFN1Ym1pdFN1Y2Nlc3MgPSAobGV0dGVyVG9HaXZlLGV4Y2hhbmdlUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgIHV0aWxzLnNhdmVUb0xvY2FsU3RvcmFnZShleGNoYW5nZVJlcXVlc3QucmVzcG9uZF91c2VyLEpTT04uc3RyaW5naWZ5KGV4Y2hhbmdlUmVxdWVzdCkpXHJcbiAgICAgICAgY29uc3QgdXNlclNlbGVjdGVkID0gdGhpcy5zdGF0ZS51c2VyU2VsZWN0ZWRcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yQ291bnRlclBhcnR5VG9WZXJpZnk6IHRydWUsXHJcbiAgICAgICAgICAgIGxldHRlclRvR2l2ZTogbGV0dGVyVG9HaXZlLFxyXG4gICAgICAgICAgICB1c2VyU2VsZWN0ZWQ6ICcnXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXhjaGFuZ2VSZXNwb25zZVN1Ym1pdFN1Y2Nlc3MgPSAoZXhjaGFuZ2VSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvblV0aWxzLnNob3dOb3RpZmljYXRpb24oc3RyaW5ncy5OT1RJRklDQVRJT05fRVhDSEFOR0VfU1VDQ0VTU0ZVTClcclxuICAgICAgICB0aGlzLnJldHJpdmVMZXR0ZXJzKClcclxuICAgICAgICB1dGlscy5zYXZlVG9Mb2NhbFN0b3JhZ2UoZXhjaGFuZ2VSZXNwb25zZS5yZXF1ZXN0X3VzZXIsSlNPTi5zdHJpbmdpZnkoZXhjaGFuZ2VSZXNwb25zZSkpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzVmVyaWZ5aW5nRm9yQ291bnRlclBhcnR5OiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25HYW1lQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uVXNlclNlbGVjdGVkID0gKGUpID0+IHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZVVzZXJzW2UudGFyZ2V0LmlkXSA9PT0gdGhpcy5zdGF0ZS51c2VyTmFtZSlcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVXRpbHMuc2hvd05vdGlmaWNhdGlvbihzdHJpbmdzLk5PVElGSUNBVElPTl9TQU1FX05BTUVfU0VMRUNURUQpXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyB1c2VyIHNlbGVjdGVkIHRvIFwiICsgZS50YXJnZXQuaWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdXNlclNlbGVjdGVkOiB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJzW2UudGFyZ2V0LmlkXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXRyaXZlTGV0dGVycyA9ICgpID0+IHtcclxuICAgICAgICBnYW1lVXRpbHMuZ2V0QXNzaWduZWRMZXR0ZXJzKCkudGhlbigobGV0dGVycykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGxldHRlcnNBc3NpZ25lZCA6IGxldHRlcnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LGZ1bmN0aW9uKGVycil7fSlcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZUFjdGl2ZVVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGdhbWVVdGlscy5nZXRBY3RpdmVVc2VycygpLnRoZW4oKGFjdGl2ZVVzZXJzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlcnMgOiBhY3RpdmVVc2Vyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sZnVuY3Rpb24oZXJyKXt9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHJpdmVVc2VyTmFtZSA9ICgpID0+IHtcclxuICAgICAgICBnYW1lVXRpbHMuZ2V0VXNlck5hbWUoKS50aGVuKCh1c2VyTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiB1c2VyTmFtZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sZnVuY3Rpb24oZXJyKXt9KVxyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbFJlc3BvbmRUb1JlcXVlc3RlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHk6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBnYW1lVXRpbHMuY2FuY2VsRXhjaGFuZ2UodGhpcy5leGNoYW5nZVJlcXVlc3QpXHJcbiAgICB9XHJcblxyXG4gICAgb25TaWduSW4gPSAobmFtZSxiaXJ0aGRheSxmYXZvdXJpdGVGb29kLGRlc2h1KSA9PiB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWUudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2lnbmluZyBpbi4uLlwiK25hbWUpXHJcbiAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKG5hbWUsYmlydGhkYXksZGVzaHUsZmF2b3VyaXRlRm9vZClcclxuICAgICAgICBnYW1lVXRpbHMubG9naW5Vc2VyKHVzZXIpLnRoZW4oKHN1Y2NlZWQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2lnbmVkSW46IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LGZ1bmN0aW9uKGVyck1lc3NhZ2Upe1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb25VdGlscy5zaG93Tm90aWZpY2F0aW9uKGVyck1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFeGNoYW5nZVJlcXVlc3QgPSAoZXhjaGFuZ2VSZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5leGNoYW5nZVJlcXVlc3QgPSBleGNoYW5nZVJlcXVlc3RcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5hdXRoZW50aWNhdGlvbkNoZWNrZWQgfHwgIXRoaXMuc3RhdGUuZ2FtZVN0YXJ0ZWRDaGVja2VkKVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBlbHNlIGlmKCF0aGlzLnN0YXRlLnNpZ25lZEluKVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWduSW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZ25JbiBvblNpZ25Jbj17dGhpcy5vblNpZ25Jbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmlzV2FpdGluZ0ZvckdhbWVUb1N0YXJ0ICYmIHRoaXMuc3RhdGUuc2lnbmVkSW4pXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdTY3JlZW4vPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc1dhaXRpbmdGb3JDb3VudGVyUGFydHlUb1ZlcmlmeSlcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8V2FpdGluZ0ZvclZlcmlmaWNhdGlvbiBjYW5jZWw9e3RoaXMuY2FuY2VsV2FpdGluZ0ZvclZlcmlmaWNhdGlvbn0vPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuaXNWZXJpZnlpbmdGb3JDb3VudGVyUGFydHkpXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1nZW5lcmFsXCI+e3RoaXMuZXhjaGFuZ2VSZXF1ZXN0LnJlcXVlc3RfdXNlcn0gaGFzIHJlcXVlc3RlZCB0byBjb25uZWN0LlBsZWFzZSBmaWxsIGluIGhpcyBkZXRhaWxzIGJlbG93LjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEV4Y2hhbmdlUmVzcG9uc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VXNlcj17dGhpcy5leGNoYW5nZVJlcXVlc3QucmVxdWVzdF91c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZT17dGhpcy5leGNoYW5nZVJlcXVlc3QucmVxdWVzdF91c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkV4Y2hhbmdlUmVzcG9uc2VTdWJtaXRTdWNjZXNzPXt0aGlzLm9uRXhjaGFuZ2VSZXNwb25zZVN1Ym1pdFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU9e3RoaXMuc3RhdGUubGV0dGVyc0Fzc2lnbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNoYW5nZVJlcXVlc3Q9e3RoaXMuZXhjaGFuZ2VSZXF1ZXN0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNhbmNlbFJlc3BvbmRUb1JlcXVlc3Rlcn0gY2xhc3NOYW1lPVwiYnRuLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNpZGViYXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBpZD1cInNweVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyLW5hdiBuYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWN0aXZlVXNlcnMubWFwKCh1c2VyLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGlkPXtpbmRleH0gY2xhc3NOYW1lPVwic2lkZWJhci1icmFuZFwiIG9uQ2xpY2s9e3RoaXMub25Vc2VyU2VsZWN0ZWR9Pnt1c2VyfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlLWNvbnRlbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgaW5zZXRcIiBkYXRhLXNweT1cInNjcm9sbFwiIGRhdGEtdGFyZ2V0PVwiI3NweVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZXR0ZXJDb21wb25lbnQgb25HYW1lQ29tcGxldGVkPXt0aGlzLm9uR2FtZUNvbXBsZXRlZH0gdXNlck5hbWU9e3RoaXMuc3RhdGUudXNlck5hbWV9IGxldHRlcnNBc3NpZ25lZD17dGhpcy5zdGF0ZS5sZXR0ZXJzQXNzaWduZWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOic1MHB4JyxtYXJnaW5Cb3R0b206JzUwcHgnfX0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtZ2VuZXJhbFwiPkZpbGwgaW4gdGhlIGRldGFpbHMgb2YgdGhlIHBsYXllciB5b3Ugd291bGQgbGlrZSB0byBleGNoYW5nZSB3aXRoIGJlbG93LjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4Y2hhbmdlUmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRVc2VyPXt0aGlzLnN0YXRlLnVzZXJTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU9e3RoaXMuc3RhdGUudXNlck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXhjaGFuZ2VSZXF1ZXN0U3VibWl0U3VjY2Vzcz17dGhpcy5vbkV4Y2hhbmdlUmVxdWVzdFN1Ym1pdFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3RlZD17dGhpcy5zdGF0ZS51c2VyU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU9e3RoaXMuc3RhdGUubGV0dGVyc0Fzc2lnbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVFeGNoYW5nZVJlcXVlc3Q9e3RoaXMudXBkYXRlRXhjaGFuZ2VSZXF1ZXN0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICNzaWduSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAjd3JhcHBlci5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAjd3JhcHBlci5hY3RpdmUgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkgYSBzcGFuOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MTQ4NGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkgYTpob3ZlcixcclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgbGkgYTphY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItbmF2IGxpIGE6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmluc2V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDoxMjI0cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwMDAwMCwgIzMzMDBDQyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDoxMjI0cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgI3dyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwMDAwMCwgIzMzMDBDQyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1uYXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufSJdfQ== */\n/*@ sourceURL=pages\\index.js */"
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
//# sourceMappingURL=4.a3f17a6ce92325b778df.hot-update.js.map