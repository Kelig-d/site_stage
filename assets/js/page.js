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
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");




function Page(props) {
  var pages = props.propsPages;
  var textes = {
    texte1: {
      texte: pages.TEXT1,
      photo: pages.PHOTOS1
    },
    texte2: {
      texte: pages.TEXT2,
      photo: pages.PHOTOS2
    },
    texte3: {
      texte: pages.TEXT3,
      photo: pages.PHOTOS3
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("section", {
    className: "text-gray-700 body-font"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "container px-5 py-24 mx-auto flex items-center justify-center h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "flex flex-wrap items-center justify-center h-full w-full mb-20 flex-col items-center text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1", {
    className: "md:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
  }, pages.TITLE), Object.keys(textes).map(function (key, index) {
    if (textes) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
        key: index,
        className: "flex flex-col shadow-md md:shadow-none rounded-lg md:rounded-none my-5 overflow-hidden md:mb-0 md:mx-auto md:flex md:items-center md:justify-center md:relative md:w-full md:float-left md:max-w-4xl"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
        className: "md:float-right md:relative md:px-3 max-w-xl"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {
        src: textes[key].photo
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
        className: "md:left-0 md:max-w-xs md:h-1/2 md:overflow-hidden md:absolute md:p-2 md:bg-white md:shadow-lg md:border-l-4 border-black"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
        className: "md:text-grey-darkest md:leading-tight md:overflow-ellipsis"
      }, textes[key].texte)));
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


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-653f40"], () => (__webpack_exec__("./assets/src/page.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcm1vcl9wcm9kdWN0aW9uLy4vYXNzZXRzL3NyYy9wYWdlLmpzIiwid2VicGFjazovL2FybW9yX3Byb2R1Y3Rpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly9hcm1vcl9wcm9kdWN0aW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qcyJdLCJuYW1lcyI6WyJQYWdlIiwicHJvcHMiLCJwYWdlcyIsInByb3BzUGFnZXMiLCJ0ZXh0ZXMiLCJ0ZXh0ZTEiLCJ0ZXh0ZSIsIlRFWFQxIiwicGhvdG8iLCJQSE9UT1MxIiwidGV4dGUyIiwiVEVYVDIiLCJQSE9UT1MyIiwidGV4dGUzIiwiVEVYVDMiLCJQSE9UT1MzIiwiVElUTEUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ2pCLE1BQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxVQUFwQjtBQUNBLE1BQUlDLE1BQU0sR0FBRztBQUNYQyxVQUFNLEVBQUU7QUFBRUMsV0FBSyxFQUFDSixLQUFLLENBQUNLLEtBQWQ7QUFBcUJDLFdBQUssRUFBRU4sS0FBSyxDQUFDTztBQUFsQyxLQURHO0FBRVhDLFVBQU0sRUFBRTtBQUFHSixXQUFLLEVBQUNKLEtBQUssQ0FBQ1MsS0FBZjtBQUFzQkgsV0FBSyxFQUFFTixLQUFLLENBQUNVO0FBQW5DLEtBRkc7QUFHWEMsVUFBTSxFQUFFO0FBQUVQLFdBQUssRUFBQ0osS0FBSyxDQUFDWSxLQUFkO0FBQXFCTixXQUFLLEVBQUVOLEtBQUssQ0FBQ2E7QUFBbEM7QUFIRyxHQUFiO0FBTUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUM7QUFBbkIsa0JBQ0E7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBZ0ZiLEtBQUssQ0FBQ2MsS0FBdEYsQ0FERixFQUlJQyxNQUFNLENBQUNDLElBQVAsQ0FBWWQsTUFBWixFQUFvQmUsR0FBcEIsQ0FBd0IsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWM7QUFDcEMsUUFBR2pCLE1BQUgsRUFBVTtBQUNWLDBCQUNFO0FBQUssV0FBRyxFQUFFaUIsS0FBVjtBQUFpQixpQkFBUyxFQUFDO0FBQTNCLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssV0FBRyxFQUFFakIsTUFBTSxDQUFDZ0IsR0FBRCxDQUFOLENBQVlaO0FBQXRCLFFBREYsQ0FERixlQUlFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUcsaUJBQVMsRUFBQztBQUFiLFNBQTJFSixNQUFNLENBQUNnQixHQUFELENBQU4sQ0FBWWQsS0FBdkYsQ0FERixDQUpGLENBREY7QUFVQztBQUNGLEdBYkQsQ0FKSixDQURGLENBREEsQ0FERjtBQTBCSDs7QUFBQTtBQUVELGlFQUFlTixJQUFmLEU7Ozs7Ozs7Ozs7O0FDdENhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLGtIQUEyQztBQUN0RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNkRBQTZEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDZEQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxZQUFZLG1CQUFPLENBQUMscUVBQW9COztBQUV4Qyw2Q0FBNkMsZUFBZSxFQUFFOztBQUU5RDtBQUNBO0FBQ0EsR0FBRyw0REFBNEQ7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgICBcclxuICAgXHJcbmZ1bmN0aW9uIFBhZ2UocHJvcHMpIHtcclxuICAgIGNvbnN0IHBhZ2VzID0gcHJvcHMucHJvcHNQYWdlcztcclxuICAgIHZhciB0ZXh0ZXMgPSB7IFxyXG4gICAgICB0ZXh0ZTE6IHsgdGV4dGU6cGFnZXMuVEVYVDEsIHBob3RvOiBwYWdlcy5QSE9UT1MxfSwgXHJcbiAgICAgIHRleHRlMjogeyAgdGV4dGU6cGFnZXMuVEVYVDIsIHBob3RvOiBwYWdlcy5QSE9UT1MyfSwgXHJcbiAgICAgIHRleHRlMzogeyB0ZXh0ZTpwYWdlcy5URVhUMywgcGhvdG86IHBhZ2VzLlBIT1RPUzN9IFxyXG4gIH1cclxuICA7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGJvZHktZm9udFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC01IHB5LTI0IG14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHctZnVsbCBtYi0yMCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZDp0ZXh0LTN4bCB0ZXh0LTJ4bCBmb250LW1lZGl1bSB0aXRsZS1mb250IG1iLTIgdGV4dC1ncmF5LTkwMFwiPntwYWdlcy5USVRMRX08L2gxPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGV4dGVzKS5tYXAoKGtleSwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgaWYodGV4dGVzKXtcclxuICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc2hhZG93LW1kIG1kOnNoYWRvdy1ub25lIHJvdW5kZWQtbGcgbWQ6cm91bmRlZC1ub25lIG15LTUgb3ZlcmZsb3ctaGlkZGVuIG1kOm1iLTAgbWQ6bXgtYXV0byBtZDpmbGV4IG1kOml0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWNlbnRlciBtZDpyZWxhdGl2ZSBtZDp3LWZ1bGwgbWQ6ZmxvYXQtbGVmdCBtZDptYXgtdy00eGxcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbG9hdC1yaWdodCBtZDpyZWxhdGl2ZSBtZDpweC0zIG1heC13LXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RleHRlc1trZXldLnBob3RvfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpsZWZ0LTAgbWQ6bWF4LXcteHMgbWQ6aC0xLzIgbWQ6b3ZlcmZsb3ctaGlkZGVuIG1kOmFic29sdXRlIG1kOnAtMiBtZDpiZy13aGl0ZSBtZDpzaGFkb3ctbGcgbWQ6Ym9yZGVyLWwtNCBib3JkZXItYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZDp0ZXh0LWdyZXktZGFya2VzdCBtZDpsZWFkaW5nLXRpZ2h0IG1kOm92ZXJmbG93LWVsbGlwc2lzXCI+e3RleHRlc1trZXldLnRleHRlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IG5hdGl2ZUtleXMoMSk7IH0pO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRkFJTFNfT05fUFJJTUlUSVZFUyB9LCB7XG4gIGtleXM6IGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyh0b09iamVjdChpdCkpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=