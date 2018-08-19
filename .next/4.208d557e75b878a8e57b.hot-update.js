webpackHotUpdate(4,{

/***/ "./components/LettersComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_endpoints__ = __webpack_require__("./constants/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_endpoints___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constants_endpoints__);
var _jsxFileName = "E:\\iceBreaker\\components\\LettersComponent.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var LetterComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LetterComponent, _React$Component);

  function LetterComponent(props) {
    var _this;

    _classCallCheck(this, LetterComponent);

    _this = _possibleConstructorReturn(this, (LetterComponent.__proto__ || Object.getPrototypeOf(LetterComponent)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleLetterSelected", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var lettersUsed = _this.state.lettersUsed;
        var lettersAvailable = _this.state.lettersAvailable;
        lettersUsed[lettersUsed.indexOf('-')] = _this.state.lettersAvailable[e.target.value];
        lettersAvailable.splice(e.target.value, 1);

        _this.setState({
          lettersUsed: lettersUsed,
          lettersAvailable: lettersAvailable
        });

        _this.handleLettersChanged();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "removeOneCharFromLettersUsed", {
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
    Object.defineProperty(_assertThisInitialized(_this), "handleLettersChanged", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.lettersUsed.join('') === _this.props.userName && typeof window !== 'undefined') {
          __WEBPACK_IMPORTED_MODULE_2_axios___default()({
            method: 'post',
            url: __WEBPACK_IMPORTED_MODULE_3__constants_endpoints___default.a.API_USER_COMPLETED_GAME
          }).then(function (response) {
            window.alert("You have completed the game!");
            window.location.href = '/';
          }).catch(function (response) {
            //handle error
            console.log(response);
          });
        }
      }
    });
    _this.state = {
      lettersUsed: [],
      lettersAvailable: props.lettersAssigned.slice()
    };
    return _this;
  }

  _createClass(LetterComponent, [{
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

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-644773721"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "instructions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-644773721"
      }, "Use the letters below to form your username: ", this.props.userName), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-644773721"
      }, this.state.lettersUsed.join(' '), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "cancel-btn",
        onClick: this.removeOneCharFromLettersUsed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        className: "jsx-644773721" + " " + "btn btn-light"
      }, "C")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "letters-available",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-644773721"
      }, this.state.lettersAvailable.map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          id: "letter-available",
          value: index,
          onClick: _this2.handleLetterSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          className: "jsx-644773721" + " " + "btn btn-primary"
        }, letter);
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "644773721",
        css: "#cancel-btn.jsx-644773721{margin-left:20px;margin-bottom:20px;}#letters-available.jsx-644773721{margin-bottom:20px;}#letter-available.jsx-644773721{margin:5px;}#instructions.jsx-644773721{margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExldHRlcnNDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUY0QixBQUdnRCxBQUlFLEFBR1IsQUFHQSxXQUZiLEFBR1IsTUFWNkIsRUFJckIsaUJBSEEiLCJmaWxlIjoiY29tcG9uZW50c1xcTGV0dGVyc0NvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJFOlxcaWNlQnJlYWtlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgZW5kcG9pbnRzIGZyb20gXCIuLi9jb25zdGFudHMvZW5kcG9pbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXR0ZXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsZXR0ZXJzVXNlZDogW10sXHJcbiAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU6IHByb3BzLmxldHRlcnNBc3NpZ25lZC5zbGljZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGV0dGVyIGNvbXBvbmVudCB3aWxsIHJlY2VpdmUgcHJvcHNcIilcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbGV0dGVyc1VzZWQ6IEFycmF5LmFwcGx5KG51bGwse2xlbmd0aDogbmV3UHJvcHMubGV0dGVyc0Fzc2lnbmVkLmxlbmd0aH0pLm1hcChmdW5jdGlvbigpIHsgcmV0dXJuICctJzsgfSksXHJcbiAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU6IG5ld1Byb3BzLmxldHRlcnNBc3NpZ25lZC5zbGljZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVMZXR0ZXJTZWxlY3RlZCA9IChlKSA9PiB7XHJcbiAgICAgICAgdmFyIGxldHRlcnNVc2VkID0gdGhpcy5zdGF0ZS5sZXR0ZXJzVXNlZFxyXG4gICAgICAgIHZhciBsZXR0ZXJzQXZhaWxhYmxlID0gdGhpcy5zdGF0ZS5sZXR0ZXJzQXZhaWxhYmxlXHJcbiAgICAgICAgbGV0dGVyc1VzZWRbbGV0dGVyc1VzZWQuaW5kZXhPZignLScpXSA9IHRoaXMuc3RhdGUubGV0dGVyc0F2YWlsYWJsZVtlLnRhcmdldC52YWx1ZV1cclxuICAgICAgICBsZXR0ZXJzQXZhaWxhYmxlLnNwbGljZShlLnRhcmdldC52YWx1ZSwgMSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbGV0dGVyc1VzZWQ6IGxldHRlcnNVc2VkLFxyXG4gICAgICAgICAgICBsZXR0ZXJzQXZhaWxhYmxlOiBsZXR0ZXJzQXZhaWxhYmxlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmhhbmRsZUxldHRlcnNDaGFuZ2VkKClcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVPbmVDaGFyRnJvbUxldHRlcnNVc2VkID0gKGUpID0+IHtcclxuICAgICAgICB2YXIgbGV0dGVyc1VzZWQgPSB0aGlzLnN0YXRlLmxldHRlcnNVc2VkXHJcbiAgICAgICAgdmFyIGluZGV4ID0gbGV0dGVyc1VzZWQuaW5kZXhPZignLScpXHJcbiAgICAgICAgaWYgKGluZGV4ICE9IDApIHtcclxuICAgICAgICAgICAgdmFyIGxldHRlcnNVc2VkID0gdGhpcy5zdGF0ZS5sZXR0ZXJzVXNlZFxyXG4gICAgICAgICAgICB2YXIgbGV0dGVyc0F2YWlsYWJsZSA9IHRoaXMuc3RhdGUubGV0dGVyc0F2YWlsYWJsZVxyXG4gICAgICAgICAgICB2YXIgaW5kZXhUb0JlUmVtb3ZlZCA9IDBcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9IC0xKVxyXG4gICAgICAgICAgICAgICAgaW5kZXhUb0JlUmVtb3ZlZCA9IGluZGV4IC0gMVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpbmRleFRvQmVSZW1vdmVkID0gbGV0dGVyc1VzZWQubGVuZ3RoLTFcclxuICAgICAgICAgICAgdmFyIGxldHRlclJlbW92ZWQgPSBsZXR0ZXJzVXNlZFtpbmRleFRvQmVSZW1vdmVkXVxyXG4gICAgICAgICAgICBsZXR0ZXJzVXNlZFtpbmRleFRvQmVSZW1vdmVkXSA9ICctJ1xyXG4gICAgICAgICAgICBsZXR0ZXJzQXZhaWxhYmxlLnB1c2gobGV0dGVyUmVtb3ZlZClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJzVXNlZDogbGV0dGVyc1VzZWQsXHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJzQXZhaWxhYmxlOiBsZXR0ZXJzQXZhaWxhYmxlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTGV0dGVyc0NoYW5nZWQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTGV0dGVyc0NoYW5nZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5sZXR0ZXJzVXNlZC5qb2luKCcnKSA9PT0gdGhpcy5wcm9wcy51c2VyTmFtZSAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBlbmRwb2ludHMuQVBJX1VTRVJfQ09NUExFVEVEX0dBTUVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJZb3UgaGF2ZSBjb21wbGV0ZWQgdGhlIGdhbWUhXCIpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj0nLydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy9oYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfX1cclxuXHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImluc3RydWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFVzZSB0aGUgbGV0dGVycyBiZWxvdyB0byBmb3JtIHlvdXIgdXNlcm5hbWU6IHt0aGlzLnByb3BzLnVzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxldHRlcnNVc2VkLmpvaW4oJyAnKX1cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsLWJ0blwiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlT25lQ2hhckZyb21MZXR0ZXJzVXNlZH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPkM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxldHRlcnMtYXZhaWxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGV0dGVyc0F2YWlsYWJsZS5tYXAoKGxldHRlcixpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBpZD1cImxldHRlci1hdmFpbGFibGVcIiB2YWx1ZT17aW5kZXh9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGV0dGVyU2VsZWN0ZWR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPntsZXR0ZXJ9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAjY2FuY2VsLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNsZXR0ZXJzLWF2YWlsYWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI2xldHRlci1hdmFpbGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAjaW5zdHJ1Y3Rpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=components\\LettersComponent.js */"
      }));
    }
  }]);

  return LetterComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.208d557e75b878a8e57b.hot-update.js.map