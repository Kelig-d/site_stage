(self["webpackChunkarmor_production"] = self["webpackChunkarmor_production"] || []).push([["page"],{

/***/ "./assets/src/page.js":
/*!****************************!*\
  !*** ./assets/src/page.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function Page(props) {
  var pages = props.propsPages;
  var textes = [pages.TEXT1, pages.TEXT2, pages.TEXT3];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: "blog text-gray-700 body-font"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "container px-5 py-24 mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "flex flex-wrap w-full mb-20 flex-col items-center text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", {
    className: "md:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
  }, pages.TITLE), textes.map(function (textes, index) {
    if (textes) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        key: index,
        className: "shadow-md md:shadow-none rounded-lg md:rounded-none my-5 overflow-hidden md:mb-0 md:mx-auto md:flex md:items-center md:justify-center md:relative md:w-full md:float-left md:max-w-4xl"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "md:float-right md:relative md:px-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "md:bg-black"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "md:opacity-75"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
        src: pages.PHOTOS1
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "md:left-0 md:max-w-xs md:h-1/2 md:overflow-hidden md:absolute md:p-2 md:bg-white md:shadow-lg md:border-l-4 border-black"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
        className: "md:text-grey-darkest md:leading-tight md:overflow-ellipsis"
      }, textes)));
    }
  }))));
}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-14ec80"], () => (__webpack_exec__("./assets/src/page.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcm1vcl9wcm9kdWN0aW9uLy4vYXNzZXRzL3NyYy9wYWdlLmpzIiwid2VicGFjazovL2FybW9yX3Byb2R1Y3Rpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyJdLCJuYW1lcyI6WyJQYWdlIiwicHJvcHMiLCJwYWdlcyIsInByb3BzUGFnZXMiLCJ0ZXh0ZXMiLCJURVhUMSIsIlRFWFQyIiwiVEVYVDMiLCJUSVRMRSIsIm1hcCIsImluZGV4IiwiUEhPVE9TMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDakIsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLFVBQXBCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLENBQUNGLEtBQUssQ0FBQ0csS0FBUCxFQUFhSCxLQUFLLENBQUNJLEtBQW5CLEVBQXlCSixLQUFLLENBQUNLLEtBQS9CLENBQWI7QUFDQSxzQkFDRTtBQUFTLGFBQVMsRUFBQztBQUFuQixrQkFDQTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUFnRkwsS0FBSyxDQUFDTSxLQUF0RixDQURGLEVBSUlKLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNMLE1BQUQsRUFBU00sS0FBVCxFQUFpQjtBQUMxQixRQUFHTixNQUFILEVBQVU7QUFDViwwQkFDRTtBQUFLLFdBQUcsRUFBRU0sS0FBVjtBQUFpQixpQkFBUyxFQUFDO0FBQTNCLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNGO0FBQUssV0FBRyxFQUFFUixLQUFLLENBQUNTO0FBQWhCLFFBREUsQ0FERixDQURGLENBREYsZUFRRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFHLGlCQUFTLEVBQUM7QUFBYixTQUEyRVAsTUFBM0UsQ0FERixDQVJGLENBREY7QUFjQztBQUNGLEdBakJELENBSkosQ0FERixDQURBLENBREY7QUE4Qkg7O0FBQUE7QUFFRCxpRUFBZUosSUFBZixFOzs7Ozs7Ozs7OztBQ3JDYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsV0FBVyxrSEFBMkM7QUFDdEQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDOztBQUUxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLDZEQUE2RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6InBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOyAgIFxyXG4gICBcclxuZnVuY3Rpb24gUGFnZShwcm9wcykge1xyXG4gICAgY29uc3QgcGFnZXMgPSBwcm9wcy5wcm9wc1BhZ2VzO1xyXG4gICAgbGV0IHRleHRlcyA9IFtwYWdlcy5URVhUMSxwYWdlcy5URVhUMixwYWdlcy5URVhUM107XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9nIHRleHQtZ3JheS03MDAgYm9keS1mb250XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTUgcHktMjQgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdy1mdWxsIG1iLTIwIGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1kOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtbWVkaXVtIHRpdGxlLWZvbnQgbWItMiB0ZXh0LWdyYXktOTAwXCI+e3BhZ2VzLlRJVExFfTwvaDE+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0ZXh0ZXMubWFwKCh0ZXh0ZXMsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgIGlmKHRleHRlcyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzaGFkb3ctbWQgbWQ6c2hhZG93LW5vbmUgcm91bmRlZC1sZyBtZDpyb3VuZGVkLW5vbmUgbXktNSBvdmVyZmxvdy1oaWRkZW4gbWQ6bWItMCBtZDpteC1hdXRvIG1kOmZsZXggbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktY2VudGVyIG1kOnJlbGF0aXZlIG1kOnctZnVsbCBtZDpmbG9hdC1sZWZ0IG1kOm1heC13LTR4bFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmZsb2F0LXJpZ2h0IG1kOnJlbGF0aXZlIG1kOnB4LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmJnLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOm9wYWNpdHktNzVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGFnZXMuUEhPVE9TMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6bGVmdC0wIG1kOm1heC13LXhzIG1kOmgtMS8yIG1kOm92ZXJmbG93LWhpZGRlbiBtZDphYnNvbHV0ZSBtZDpwLTIgbWQ6Ymctd2hpdGUgbWQ6c2hhZG93LWxnIG1kOmJvcmRlci1sLTQgYm9yZGVyLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWQ6dGV4dC1ncmV5LWRhcmtlc3QgbWQ6bGVhZGluZy10aWdodCBtZDpvdmVyZmxvdy1lbGxpcHNpc1wiPnt0ZXh0ZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=