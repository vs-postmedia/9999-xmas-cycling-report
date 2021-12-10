(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_postmedia_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81);
/* harmony import */ var _css_postmedia_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_postmedia_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_colors_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82);
/* harmony import */ var _css_colors_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_colors_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(83);
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_fonts_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(84);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_13__);









// CSS





var iframes = [{
  id: "clark",
  hed: "Clark Dr. and E. 1st Ave",
  dek: "This intersection – which has no bike infrastructure of any kind – has the highest collision rate of any in the city from 2015-2020.",
  url: "https://www.google.com/maps/embed?pb=!4v1638919884201!6m8!1m7!1sRzc91uLUaC4sZ9oL5cPKDA!2m2!1d49.26956530084876!2d-123.0775706005678!3f311.8931709175703!4f0.9551184579334802!5f0.4000000000000002"
}, {
  id: "hornby",
  hed: "Dunsmuir St. and Hornby St.",
  dek: "A protected land on Hornby ends and Dunsmuir, which could contribute to the high collision rate at an intersection with heavy bike and vehicle traffic.",
  url: "https://www.google.com/maps/embed?pb=!4v1639157410979!6m8!1m7!1sc1amLp0Bfnee1zocBdMf3g!2m2!1d49.28484675111414!2d-123.1183912381874!3f124.73329999999999!4f0!5f0.7820865974627469"
}, {
  id: "sw-marine",
  hed: "Granville St. and SW Marine Dr.",
  dek: "A protected land at Granville and SW Marine ends at a shared street – and has the second highest crash rate in the city.",
  url: "https://www.google.com/maps/embed?pb=!4v1639157508609!6m8!1m7!1s4tRihGaI0qA_Q82NUCr3HQ!2m2!1d49.20512566546893!2d-123.140902424991!3f42.91124585226484!4f-0.35922587483902646!5f0.7820865974627469"
}]; // JS

var init = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
    var id, data, h1, subhead, iframe;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = getURLParameter('id');
            data = iframes.filter(function (d) {
              return d.id === id;
            });
            h1 = document.getElementById('header');
            subhead = document.getElementById('subhead');
            iframe = document.getElementById('iframe');
            h1.innerHTML = data[0].hed;
            subhead.innerHTML = data[0].dek;
            iframe.src = data[0].url;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

init();

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[42,1,2]]]);