webpackHotUpdate(4,{

/***/ "./pages/admin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pusher_js__ = __webpack_require__("./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pusher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__("./components/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_strings__ = __webpack_require__("./constants/strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_strings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constants_strings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_endpoints__ = __webpack_require__("./constants/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_endpoints___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__constants_endpoints__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_credentials__ = __webpack_require__("./constants/credentials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_credentials___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__constants_credentials__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
var _jsxFileName = "D:\\iceBreaker\\pages\\admin.js";

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
        __WEBPACK_IMPORTED_MODULE_0_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_5__constants_endpoints___default.a.API_START_GAME,
          data: {
            password: _this.state.password
          }
        }).then(function (response) {
          console.log('Got start game result ' + response.data.success);
        }).catch(function (response) {
          //handle error
          console.log(response);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "stopGame", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_0_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_5__constants_endpoints___default.a.API_STOP_GAME,
          data: {
            password: _this.state.password
          }
        }).then(function (response) {
          console.log('Got start game result ' + response.data.success);
        }).catch(function (response) {
          //handle error
          console.log(response);
        });
      }
    });
    _this.state = {
      password: ''
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Password"), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("input", {
        onChange: this.handlePasswordChange,
        className: "form-control",
        name: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("button", {
        onClick: this.startGame,
        type: "submit",
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Start Game")), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("button", {
        onClick: this.stopGame,
        className: "btn btn-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Stop Game")));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2__components_Page__["a" /* default */]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/admin")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.e7b4b1de04edfbb8992b.hot-update.js.map