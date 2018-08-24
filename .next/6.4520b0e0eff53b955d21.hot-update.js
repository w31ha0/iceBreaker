webpackHotUpdate(6,{

/***/ "./pages/leaderboard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Page__ = __webpack_require__("./components/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pusher_js__ = __webpack_require__("./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pusher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_credentials__ = __webpack_require__("./constants/credentials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_credentials___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants_credentials__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_strings__ = __webpack_require__("./constants/strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_strings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__constants_strings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_gameUtils__ = __webpack_require__("./utils/gameUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_gameUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__utils_gameUtils__);
var _jsxFileName = "E:\\iceBreaker\\pages\\leaderboard.js";


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
    Object.defineProperty(_assertThisInitialized(_this), "retrieveCompletedUsers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_7__utils_gameUtils___default.a.getCompletedUsers().then(function (res) {
          var completedUsers = res.completedUsers;

          _this.setState({
            completedUsers: completedUsers
          });
        }, function (failure) {});
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setupPusher", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.pusher = new __WEBPACK_IMPORTED_MODULE_3_pusher_js___default.a(__WEBPACK_IMPORTED_MODULE_4__constants_credentials___default.a.PUSHER_APP_KEY, {
          cluster: __WEBPACK_IMPORTED_MODULE_4__constants_credentials___default.a.PUSHER_APP_CLUSTER,
          encrypted: true
        });
        _this.channel = _this.pusher.subscribe(__WEBPACK_IMPORTED_MODULE_5__constants_strings___default.a.PUSHER_CHANNEL);

        _this.channel.bind(__WEBPACK_IMPORTED_MODULE_5__constants_strings___default.a.PUSHER_USER_LIST_UPDATE_EVENT, function (users) {
          console.log("Received users " + JSON.stringify(users));
          var completedUsers = users.completedUsers;
          console.log("Received new user list from Pusher: " + JSON.stringify(completedUsers));

          _this.setState({
            completedUsers: completedUsers
          });
        });
      }
    });
    _this.state = {
      completedUsers: []
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupPusher();
      this.retrieveCompletedUsers();
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "players",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-741864783"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-741864783"
      }, "Hall of Fame"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-741864783" + " " + "table"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-741864783"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-741864783"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-741864783"
      }, "Rank"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-741864783"
      }, "Name"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-741864783"
      }, "Deshu"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-741864783"
      }, this.state.completedUsers.map(function (user, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          className: "jsx-741864783"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("th", {
          scope: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          className: "jsx-741864783"
        }, index + 1), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          className: "jsx-741864783"
        }, user.name), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          className: "jsx-741864783"
        }, user.deshu));
      })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "741864783",
        css: "#players.jsx-741864783{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsZWFkZXJib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRTRCLEFBRzJDLGtCQUN0QiIsImZpbGUiOiJwYWdlc1xcbGVhZGVyYm9hcmQuanMiLCJzb3VyY2VSb290IjoiRTpcXGljZUJyZWFrZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFB1c2hlciBmcm9tIFwicHVzaGVyLWpzXCI7XHJcbmltcG9ydCBjcmVkZW50aWFscyBmcm9tIFwiLi4vY29uc3RhbnRzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCBzdHJpbmdzIGZyb20gXCIuLi9jb25zdGFudHMvc3RyaW5nc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xyXG5pbXBvcnQgZ2FtZVV0aWxzIGZyb20gJy4uL3V0aWxzL2dhbWVVdGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUGFnZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29tcGxldGVkVXNlcnM6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5zZXR1cFB1c2hlcigpXHJcbiAgICAgICAgdGhpcy5yZXRyaWV2ZUNvbXBsZXRlZFVzZXJzKClcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZUNvbXBsZXRlZFVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGdhbWVVdGlscy5nZXRDb21wbGV0ZWRVc2VycygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWRVc2VycyA9IHJlcy5jb21wbGV0ZWRVc2Vyc1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZFVzZXJzOiBjb21wbGV0ZWRVc2Vyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sZnVuY3Rpb24oZmFpbHVyZSl7fSlcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFB1c2hlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIoY3JlZGVudGlhbHMuUFVTSEVSX0FQUF9LRVksIHtcclxuICAgICAgICAgICAgY2x1c3RlcjogY3JlZGVudGlhbHMuUFVTSEVSX0FQUF9DTFVTVEVSLFxyXG4gICAgICAgICAgICBlbmNyeXB0ZWQ6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKHN0cmluZ3MuUFVTSEVSX0NIQU5ORUwpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZChzdHJpbmdzLlBVU0hFUl9VU0VSX0xJU1RfVVBEQVRFX0VWRU5ULCAodXNlcnMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCB1c2VycyBcIitKU09OLnN0cmluZ2lmeSh1c2VycykpXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZFVzZXJzID0gdXNlcnMuY29tcGxldGVkVXNlcnNcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBuZXcgdXNlciBsaXN0IGZyb20gUHVzaGVyOiBcIiArIEpTT04uc3RyaW5naWZ5KGNvbXBsZXRlZFVzZXJzKSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWRVc2VyczogY29tcGxldGVkVXNlcnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0ncGxheWVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkhhbGwgb2YgRmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UmFuazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRlc2h1PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29tcGxldGVkVXNlcnMubWFwKCh1c2VyLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2luZGV4KzF9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5kZXNodX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgI3BsYXllcnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=pages\\leaderboard.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1__components_Page__["a" /* default */]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/leaderboard")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.4520b0e0eff53b955d21.hot-update.js.map