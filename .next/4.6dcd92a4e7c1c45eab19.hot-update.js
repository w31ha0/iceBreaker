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
        className: "jsx-3311417547"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "instructions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-3311417547"
      }, "Use the letters below to form your username: ", this.props.userName), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-3311417547"
      }, this.state.lettersUsed.join(' '), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "cancel-btn",
        onClick: this.removeOneCharFromLettersUsed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        className: "jsx-3311417547" + " " + "btn btn-light"
      }, "C")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "letters-available",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-3311417547"
      }, this.state.lettersAvailable.map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          id: "letter-available",
          value: index,
          onClick: _this2.handleLetterSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          className: "jsx-3311417547" + " " + "btn btn-primary"
        }, letter);
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3311417547",
        css: "#cancel-btn.jsx-3311417547{margin-left:20px;margin-bottom:20px;}#letters-available.jsx-3311417547{margin-bottom:20px;}#letter-available.jsx-3311417547{margin:5px;}#instructions.jsx-3311417547{margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExldHRlcnNDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUY0QixBQUdnRCxBQUlFLEFBR1IsQUFHUSxXQUZyQixNQVBxQixFQUlyQixBQU1SLGlCQVRRIiwiZmlsZSI6ImNvbXBvbmVudHNcXExldHRlcnNDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRTpcXGljZUJyZWFrZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGVuZHBvaW50cyBmcm9tIFwiLi4vY29uc3RhbnRzL2VuZHBvaW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV0dGVyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGV0dGVyc1VzZWQ6IFtdLFxyXG4gICAgICAgICAgICBsZXR0ZXJzQXZhaWxhYmxlOiBwcm9wcy5sZXR0ZXJzQXNzaWduZWQuc2xpY2UoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxldHRlciBjb21wb25lbnQgd2lsbCByZWNlaXZlIHByb3BzXCIpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxldHRlcnNVc2VkOiBBcnJheS5hcHBseShudWxsLHtsZW5ndGg6IG5ld1Byb3BzLmxldHRlcnNBc3NpZ25lZC5sZW5ndGh9KS5tYXAoZnVuY3Rpb24oKSB7IHJldHVybiAnLSc7IH0pLFxyXG4gICAgICAgICAgICBsZXR0ZXJzQXZhaWxhYmxlOiBuZXdQcm9wcy5sZXR0ZXJzQXNzaWduZWQuc2xpY2UoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTGV0dGVyU2VsZWN0ZWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHZhciBsZXR0ZXJzVXNlZCA9IHRoaXMuc3RhdGUubGV0dGVyc1VzZWRcclxuICAgICAgICB2YXIgbGV0dGVyc0F2YWlsYWJsZSA9IHRoaXMuc3RhdGUubGV0dGVyc0F2YWlsYWJsZVxyXG4gICAgICAgIGxldHRlcnNVc2VkW2xldHRlcnNVc2VkLmluZGV4T2YoJy0nKV0gPSB0aGlzLnN0YXRlLmxldHRlcnNBdmFpbGFibGVbZS50YXJnZXQudmFsdWVdXHJcbiAgICAgICAgbGV0dGVyc0F2YWlsYWJsZS5zcGxpY2UoZS50YXJnZXQudmFsdWUsIDEpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxldHRlcnNVc2VkOiBsZXR0ZXJzVXNlZCxcclxuICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZTogbGV0dGVyc0F2YWlsYWJsZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5oYW5kbGVMZXR0ZXJzQ2hhbmdlZCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlT25lQ2hhckZyb21MZXR0ZXJzVXNlZCA9IChlKSA9PiB7XHJcbiAgICAgICAgdmFyIGxldHRlcnNVc2VkID0gdGhpcy5zdGF0ZS5sZXR0ZXJzVXNlZFxyXG4gICAgICAgIHZhciBpbmRleCA9IGxldHRlcnNVc2VkLmluZGV4T2YoJy0nKVxyXG4gICAgICAgIGlmIChpbmRleCAhPSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXJzVXNlZCA9IHRoaXMuc3RhdGUubGV0dGVyc1VzZWRcclxuICAgICAgICAgICAgdmFyIGxldHRlcnNBdmFpbGFibGUgPSB0aGlzLnN0YXRlLmxldHRlcnNBdmFpbGFibGVcclxuICAgICAgICAgICAgdmFyIGluZGV4VG9CZVJlbW92ZWQgPSAwXHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPSAtMSlcclxuICAgICAgICAgICAgICAgIGluZGV4VG9CZVJlbW92ZWQgPSBpbmRleCAtIDFcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaW5kZXhUb0JlUmVtb3ZlZCA9IGxldHRlcnNVc2VkLmxlbmd0aC0xXHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXJSZW1vdmVkID0gbGV0dGVyc1VzZWRbaW5kZXhUb0JlUmVtb3ZlZF1cclxuICAgICAgICAgICAgbGV0dGVyc1VzZWRbaW5kZXhUb0JlUmVtb3ZlZF0gPSAnLSdcclxuICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZS5wdXNoKGxldHRlclJlbW92ZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyc1VzZWQ6IGxldHRlcnNVc2VkLFxyXG4gICAgICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZTogbGV0dGVyc0F2YWlsYWJsZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUxldHRlcnNDaGFuZ2VkKClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxldHRlcnNDaGFuZ2VkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubGV0dGVyc1VzZWQuam9pbignJykgPT09IHRoaXMucHJvcHMudXNlck5hbWUgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIHVybDogZW5kcG9pbnRzLkFQSV9VU0VSX0NPTVBMRVRFRF9HQU1FXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiWW91IGhhdmUgY29tcGxldGVkIHRoZSBnYW1lIVwiKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9Jy8nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH19XHJcblxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnN0cnVjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBVc2UgdGhlIGxldHRlcnMgYmVsb3cgdG8gZm9ybSB5b3VyIHVzZXJuYW1lOiB7dGhpcy5wcm9wcy51c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sZXR0ZXJzVXNlZC5qb2luKCcgJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbC1idG5cIiBvbkNsaWNrPXt0aGlzLnJlbW92ZU9uZUNoYXJGcm9tTGV0dGVyc1VzZWR9IGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIj5DPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsZXR0ZXJzLWF2YWlsYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxldHRlcnNBdmFpbGFibGUubWFwKChsZXR0ZXIsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gaWQ9XCJsZXR0ZXItYXZhaWxhYmxlXCIgdmFsdWU9e2luZGV4fSBvbkNsaWNrPXt0aGlzLmhhbmRsZUxldHRlclNlbGVjdGVkfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj57bGV0dGVyfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhbmNlbC1idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAjbGV0dGVycy1hdmFpbGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNsZXR0ZXItYXZhaWxhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI2luc3RydWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=components\\LettersComponent.js */"
      }));
    }
  }]);

  return LetterComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.6dcd92a4e7c1c45eab19.hot-update.js.map