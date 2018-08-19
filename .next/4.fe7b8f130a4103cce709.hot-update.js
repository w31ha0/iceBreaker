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
        className: "jsx-2280239731"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-2280239731"
      }, "Use the letters below to form your username: ", this.props.userName), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-2280239731"
      }, this.state.lettersUsed.join(' '), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "cancel-btn",
        onClick: this.removeOneCharFromLettersUsed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        className: "jsx-2280239731" + " " + "btn btn-light"
      }, "C")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "letters-available",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-2280239731"
      }, this.state.lettersAvailable.map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          id: "letter-available",
          value: index,
          onClick: _this2.handleLetterSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          className: "jsx-2280239731" + " " + "btn btn-primary"
        }, letter);
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2280239731",
        css: "#cancel-btn.jsx-2280239731{margin-left:20px;margin-bottom:20px;}#letters-available.jsx-2280239731{margin-bottom:20px;}#letter-available.jsx-2280239731{margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExldHRlcnNDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUY0QixBQUdnRCxBQUlFLEFBR1IsV0FDYixNQVBxQixFQUlyQixpQkFIQSIsImZpbGUiOiJjb21wb25lbnRzXFxMZXR0ZXJzQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkU6XFxpY2VCcmVha2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBlbmRwb2ludHMgZnJvbSBcIi4uL2NvbnN0YW50cy9lbmRwb2ludHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldHRlckNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxldHRlcnNVc2VkOiBbXSxcclxuICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZTogcHJvcHMubGV0dGVyc0Fzc2lnbmVkLnNsaWNlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMZXR0ZXIgY29tcG9uZW50IHdpbGwgcmVjZWl2ZSBwcm9wc1wiKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsZXR0ZXJzVXNlZDogQXJyYXkuYXBwbHkobnVsbCx7bGVuZ3RoOiBuZXdQcm9wcy5sZXR0ZXJzQXNzaWduZWQubGVuZ3RofSkubWFwKGZ1bmN0aW9uKCkgeyByZXR1cm4gJy0nOyB9KSxcclxuICAgICAgICAgICAgbGV0dGVyc0F2YWlsYWJsZTogbmV3UHJvcHMubGV0dGVyc0Fzc2lnbmVkLnNsaWNlKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxldHRlclNlbGVjdGVkID0gKGUpID0+IHtcclxuICAgICAgICB2YXIgbGV0dGVyc1VzZWQgPSB0aGlzLnN0YXRlLmxldHRlcnNVc2VkXHJcbiAgICAgICAgdmFyIGxldHRlcnNBdmFpbGFibGUgPSB0aGlzLnN0YXRlLmxldHRlcnNBdmFpbGFibGVcclxuICAgICAgICBsZXR0ZXJzVXNlZFtsZXR0ZXJzVXNlZC5pbmRleE9mKCctJyldID0gdGhpcy5zdGF0ZS5sZXR0ZXJzQXZhaWxhYmxlW2UudGFyZ2V0LnZhbHVlXVxyXG4gICAgICAgIGxldHRlcnNBdmFpbGFibGUuc3BsaWNlKGUudGFyZ2V0LnZhbHVlLCAxKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsZXR0ZXJzVXNlZDogbGV0dGVyc1VzZWQsXHJcbiAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU6IGxldHRlcnNBdmFpbGFibGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuaGFuZGxlTGV0dGVyc0NoYW5nZWQoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZU9uZUNoYXJGcm9tTGV0dGVyc1VzZWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHZhciBsZXR0ZXJzVXNlZCA9IHRoaXMuc3RhdGUubGV0dGVyc1VzZWRcclxuICAgICAgICB2YXIgaW5kZXggPSBsZXR0ZXJzVXNlZC5pbmRleE9mKCctJylcclxuICAgICAgICBpZiAoaW5kZXggIT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgbGV0dGVyc1VzZWQgPSB0aGlzLnN0YXRlLmxldHRlcnNVc2VkXHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXJzQXZhaWxhYmxlID0gdGhpcy5zdGF0ZS5sZXR0ZXJzQXZhaWxhYmxlXHJcbiAgICAgICAgICAgIHZhciBpbmRleFRvQmVSZW1vdmVkID0gMFxyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT0gLTEpXHJcbiAgICAgICAgICAgICAgICBpbmRleFRvQmVSZW1vdmVkID0gaW5kZXggLSAxXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGluZGV4VG9CZVJlbW92ZWQgPSBsZXR0ZXJzVXNlZC5sZW5ndGgtMVxyXG4gICAgICAgICAgICB2YXIgbGV0dGVyUmVtb3ZlZCA9IGxldHRlcnNVc2VkW2luZGV4VG9CZVJlbW92ZWRdXHJcbiAgICAgICAgICAgIGxldHRlcnNVc2VkW2luZGV4VG9CZVJlbW92ZWRdID0gJy0nXHJcbiAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGUucHVzaChsZXR0ZXJSZW1vdmVkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGxldHRlcnNVc2VkOiBsZXR0ZXJzVXNlZCxcclxuICAgICAgICAgICAgICAgIGxldHRlcnNBdmFpbGFibGU6IGxldHRlcnNBdmFpbGFibGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVMZXR0ZXJzQ2hhbmdlZCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVMZXR0ZXJzQ2hhbmdlZCA9ICgpID0+IHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmxldHRlcnNVc2VkLmpvaW4oJycpID09PSB0aGlzLnByb3BzLnVzZXJOYW1lICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGVuZHBvaW50cy5BUElfVVNFUl9DT01QTEVURURfR0FNRVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIllvdSBoYXZlIGNvbXBsZXRlZCB0aGUgZ2FtZSFcIilcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPScvJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2hhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9fVxyXG5cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFVzZSB0aGUgbGV0dGVycyBiZWxvdyB0byBmb3JtIHlvdXIgdXNlcm5hbWU6IHt0aGlzLnByb3BzLnVzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxldHRlcnNVc2VkLmpvaW4oJyAnKX1cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsLWJ0blwiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlT25lQ2hhckZyb21MZXR0ZXJzVXNlZH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPkM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxldHRlcnMtYXZhaWxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGV0dGVyc0F2YWlsYWJsZS5tYXAoKGxldHRlcixpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBpZD1cImxldHRlci1hdmFpbGFibGVcIiB2YWx1ZT17aW5kZXh9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGV0dGVyU2VsZWN0ZWR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPntsZXR0ZXJ9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAjY2FuY2VsLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNsZXR0ZXJzLWF2YWlsYWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI2xldHRlci1hdmFpbGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=components\\LettersComponent.js */"
      }));
    }
  }]);

  return LetterComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.fe7b8f130a4103cce709.hot-update.js.map