webpackHotUpdate(4,{

/***/ "./pages/admin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js__ = __webpack_require__("./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pusher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Page__ = __webpack_require__("./components/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_strings__ = __webpack_require__("./constants/strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_strings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants_strings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_endpoints__ = __webpack_require__("./constants/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_endpoints___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__constants_endpoints__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_credentials__ = __webpack_require__("./constants/credentials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_credentials___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__constants_credentials__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
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
        __WEBPACK_IMPORTED_MODULE_1_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_6__constants_endpoints___default.a.API_START_GAME,
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
        __WEBPACK_IMPORTED_MODULE_1_axios___default()({
          method: 'post',
          url: __WEBPACK_IMPORTED_MODULE_6__constants_endpoints___default.a.API_STOP_GAME,
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
      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-3593686565" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-3593686565"
      }, "Password"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("input", {
        onChange: this.handlePasswordChange,
        name: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-3593686565" + " " + "form-control"
      })), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
        id: "start-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-3593686565"
      }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("button", {
        onClick: this.startGame,
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: "jsx-3593686565" + " " + "btn btn-primary"
      }, "Start Game")), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
        id: "stop-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-3593686565"
      }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("button", {
        onClick: this.stopGame,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-3593686565" + " " + "btn btn-danger"
      }, "Stop Game")), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3593686565",
        css: "#start-button.jsx-3593686565{margin-bottom:215px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhZG1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRTRCLEFBRzZDLG9CQUN4QiIsImZpbGUiOiJwYWdlc1xcYWRtaW4uanMiLCJzb3VyY2VSb290IjoiRDpcXGljZUJyZWFrZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBQdXNoZXIgZnJvbSBcInB1c2hlci1qc1wiO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xyXG5pbXBvcnQgc3RyaW5ncyBmcm9tIFwiLi4vY29uc3RhbnRzL3N0cmluZ3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcydcclxuaW1wb3J0IGVuZHBvaW50cyBmcm9tIFwiLi4vY29uc3RhbnRzL2VuZHBvaW50c1wiO1xyXG5pbXBvcnQgY3JlZGVudGlhbHMgZnJvbSBcIi4uL2NvbnN0YW50cy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFBhZ2V7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6JydcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGFzc3dvcmRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwYXNzd29yZDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmw6IGVuZHBvaW50cy5BUElfU1RBUlRfR0FNRSxcclxuICAgICAgICAgICAgZGF0YToge3Bhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb3Qgc3RhcnQgZ2FtZSByZXN1bHQgJytyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wR2FtZSA9ICgpID0+IHtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmw6IGVuZHBvaW50cy5BUElfU1RPUF9HQU1FLFxyXG4gICAgICAgICAgICBkYXRhOiB7cGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvdCBzdGFydCBnYW1lIHJlc3VsdCAnK3Jlc3BvbnNlLmRhdGEuc3VjY2VzcylcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy9oYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibmFtZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0nc3RhcnQtYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3RhcnRHYW1lfSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3RhcnQgR2FtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdzdG9wLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN0b3BHYW1lfSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPlN0b3AgR2FtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=pages\\admin.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_3__components_Page__["a" /* default */]);


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
//# sourceMappingURL=4.40ce9d39f3cea43950c4.hot-update.js.map