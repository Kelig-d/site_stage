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
    className: "left-40 top-0 text-gray-700 body-font"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "container px-5 py-24 mx-auto flex items-center justify-center h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "flex flex-wrap items-center justify-center h-full w-full mb-20 flex-col items-center text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1", {
    className: "md:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
  }, pages.TITLE), Object.keys(textes).map(function (key, index) {
    if (textes[key].texte) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
        key: index,
        className: "flex flex-col shadow-md md:shadow-none rounded-lg md:rounded-none my-5 overflow-hidden md:mb-0 md:mx-auto md:flex md:items-center md:justify-center md:relative md:w-full md:float-left md:max-w-lg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
        className: "md:float-right md:relative md:pl-10 max-w-xl"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {
        src: textes[key].photo,
        placeholder: "photo article"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
        className: "md:left-0 md:max-w-xs md:h-1/2 md:overflow-hidden md:absolute md:p-2 md:bg-white md:shadow-lg md:border-l-4 border-black"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
        className: "md:text-grey-darkest md:leading-tight md:overflow-ellipsis"
      }, textes[key].texte)));
    } else {
      console.log("no");
    }
  }))));
}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_react_index_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_expo-d23a98"], () => (__webpack_exec__("./assets/src/page.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcm1vcl9wcm9kdWN0aW9uLy4vYXNzZXRzL3NyYy9wYWdlLmpzIiwid2VicGFjazovL2FybW9yX3Byb2R1Y3Rpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vYXJtb3JfcHJvZHVjdGlvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovL2FybW9yX3Byb2R1Y3Rpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5rZXlzLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJwcm9wcyIsInBhZ2VzIiwicHJvcHNQYWdlcyIsInRleHRlcyIsInRleHRlMSIsInRleHRlIiwiVEVYVDEiLCJwaG90byIsIlBIT1RPUzEiLCJ0ZXh0ZTIiLCJURVhUMiIsIlBIT1RPUzIiLCJ0ZXh0ZTMiLCJURVhUMyIsIlBIT1RPUzMiLCJUSVRMRSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ2pCLE1BQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxVQUFwQjtBQUNBLE1BQUlDLE1BQU0sR0FBRztBQUNYQyxVQUFNLEVBQUU7QUFBRUMsV0FBSyxFQUFDSixLQUFLLENBQUNLLEtBQWQ7QUFBcUJDLFdBQUssRUFBRU4sS0FBSyxDQUFDTztBQUFsQyxLQURHO0FBRVhDLFVBQU0sRUFBRTtBQUFHSixXQUFLLEVBQUNKLEtBQUssQ0FBQ1MsS0FBZjtBQUFzQkgsV0FBSyxFQUFFTixLQUFLLENBQUNVO0FBQW5DLEtBRkc7QUFHWEMsVUFBTSxFQUFFO0FBQUVQLFdBQUssRUFBQ0osS0FBSyxDQUFDWSxLQUFkO0FBQXFCTixXQUFLLEVBQUVOLEtBQUssQ0FBQ2E7QUFBbEM7QUFIRyxHQUFiO0FBTUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUM7QUFBbkIsa0JBQ0E7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBZ0ZiLEtBQUssQ0FBQ2MsS0FBdEYsQ0FERixFQUlJQyxNQUFNLENBQUNDLElBQVAsQ0FBWWQsTUFBWixFQUFvQmUsR0FBcEIsQ0FBd0IsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWM7QUFDcEMsUUFBR2pCLE1BQU0sQ0FBQ2dCLEdBQUQsQ0FBTixDQUFZZCxLQUFmLEVBQXFCO0FBQ3JCLDBCQUNFO0FBQUssV0FBRyxFQUFFZSxLQUFWO0FBQWlCLGlCQUFTLEVBQUM7QUFBM0Isc0JBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSyxXQUFHLEVBQUVqQixNQUFNLENBQUNnQixHQUFELENBQU4sQ0FBWVosS0FBdEI7QUFBNkIsbUJBQVcsRUFBQztBQUF6QyxRQURGLENBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFHLGlCQUFTLEVBQUM7QUFBYixTQUEyRUosTUFBTSxDQUFDZ0IsR0FBRCxDQUFOLENBQVlkLEtBQXZGLENBREYsQ0FKRixDQURGO0FBVUMsS0FYRCxNQVlJO0FBQ0ZnQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0Q7QUFDRixHQWhCRCxDQUpKLENBREYsQ0FEQSxDQURGO0FBNkJIOztBQUFBO0FBRUQsaUVBQWV2QixJQUFmLEU7Ozs7Ozs7Ozs7QUN6Q0EsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsaUJBQWlCLG1CQUFPLENBQUMsNkZBQWdDOztBQUV6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2xCYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsV0FBVyxrSEFBMkM7QUFDdEQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDOztBQUUxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLDZEQUE2RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ2RELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjs7QUFFeEMsNkNBQTZDLGVBQWUsRUFBRTs7QUFFOUQ7QUFDQTtBQUNBLEdBQUcsNERBQTREO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7ICAgXHJcbiAgIFxyXG5mdW5jdGlvbiBQYWdlKHByb3BzKSB7XHJcbiAgICBjb25zdCBwYWdlcyA9IHByb3BzLnByb3BzUGFnZXM7XHJcbiAgICB2YXIgdGV4dGVzID0geyBcclxuICAgICAgdGV4dGUxOiB7IHRleHRlOnBhZ2VzLlRFWFQxLCBwaG90bzogcGFnZXMuUEhPVE9TMX0sIFxyXG4gICAgICB0ZXh0ZTI6IHsgIHRleHRlOnBhZ2VzLlRFWFQyLCBwaG90bzogcGFnZXMuUEhPVE9TMn0sIFxyXG4gICAgICB0ZXh0ZTM6IHsgdGV4dGU6cGFnZXMuVEVYVDMsIHBob3RvOiBwYWdlcy5QSE9UT1MzfSBcclxuICB9XHJcbiAgO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGVmdC00MCB0b3AtMCB0ZXh0LWdyYXktNzAwIGJvZHktZm9udFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC01IHB5LTI0IG14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHctZnVsbCBtYi0yMCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZDp0ZXh0LTN4bCB0ZXh0LTJ4bCBmb250LW1lZGl1bSB0aXRsZS1mb250IG1iLTIgdGV4dC1ncmF5LTkwMFwiPntwYWdlcy5USVRMRX08L2gxPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGV4dGVzKS5tYXAoKGtleSwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgaWYodGV4dGVzW2tleV0udGV4dGUpe1xyXG4gICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzaGFkb3ctbWQgbWQ6c2hhZG93LW5vbmUgcm91bmRlZC1sZyBtZDpyb3VuZGVkLW5vbmUgbXktNSBvdmVyZmxvdy1oaWRkZW4gbWQ6bWItMCBtZDpteC1hdXRvIG1kOmZsZXggbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktY2VudGVyIG1kOnJlbGF0aXZlIG1kOnctZnVsbCBtZDpmbG9hdC1sZWZ0IG1kOm1heC13LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6ZmxvYXQtcmlnaHQgbWQ6cmVsYXRpdmUgbWQ6cGwtMTAgbWF4LXcteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGV4dGVzW2tleV0ucGhvdG99IHBsYWNlaG9sZGVyPVwicGhvdG8gYXJ0aWNsZVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6bGVmdC0wIG1kOm1heC13LXhzIG1kOmgtMS8yIG1kOm92ZXJmbG93LWhpZGRlbiBtZDphYnNvbHV0ZSBtZDpwLTIgbWQ6Ymctd2hpdGUgbWQ6c2hhZG93LWxnIG1kOmJvcmRlci1sLTQgYm9yZGVyLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWQ6dGV4dC1ncmV5LWRhcmtlc3QgbWQ6bGVhZGluZy10aWdodCBtZDpvdmVyZmxvdy1lbGxpcHNpc1wiPnt0ZXh0ZXNba2V5XS50ZXh0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJub1wiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBuYXRpdmVLZXlzKDEpOyB9KTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZBSUxTX09OX1BSSU1JVElWRVMgfSwge1xuICBrZXlzOiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXModG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9