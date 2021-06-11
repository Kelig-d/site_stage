(self["webpackChunkarmor_production"] = self["webpackChunkarmor_production"] || []).push([["navigation"],{

/***/ "./assets/src/contact.js":
/*!*******************************!*\
  !*** ./assets/src/contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Contact = function Contact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Contact");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./assets/src/home.js":
/*!****************************!*\
  !*** ./assets/src/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Home");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./assets/src/navigation.js":
/*!**********************************!*\
  !*** ./assets/src/navigation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web */ "./assets/src/web.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./assets/src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./assets/src/contact.js");
/* harmony import */ var _prestations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prestations */ "./assets/src/prestations.js");








function Navigation() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-col sm:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-64 h-screen bg-gray-800 mt-8 sm:mt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex items-center justify-center mt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "h-6",
    src: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "mt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/Armor_productions/front_end",
    className: "divide-y divide-gray-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "flex justify-center items-center mt-5 py-2 px-8 text-gray-400 mx-4 font-medium transition duration-500 ease-in-out transform hover:scale-110 "
  }, "Home", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "nav-underline"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/Armor_productions/front_end/web"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "flex justify-center items-center mt-5 py-2 px-8 text-gray-400 mx-4 font-medium transition duration-500 ease-in-out transform hover:scale-110"
  }, "Web")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/Armor_productions/front_end/prestations"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "flex justify-center items-center mt-5 py-2 px-8 text-gray-400 mx-4 font-medium transition duration-500 ease-in-out transform hover:scale-110"
  }, "Prestations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/Armor_productions/front_end/contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "flex justify-center items-center mt-5 py-2 px-8 text-gray-400 mx-4 font-medium transition duration-500 ease-in-out transform hover:scale-110"
  }, "Contact")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    exact: true,
    path: "/Armor_productions/front_end/web"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_web__WEBPACK_IMPORTED_MODULE_2__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    exact: true,
    path: "/Armor_productions/front_end/prestations"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prestations__WEBPACK_IMPORTED_MODULE_5__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    exact: true,
    path: "/Armor_productions/front_end/contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contact__WEBPACK_IMPORTED_MODULE_4__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    exact: true,
    path: "/Armor_productions/front_end/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_home__WEBPACK_IMPORTED_MODULE_3__.default, null)))));
}

react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Navigation, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/src/prestations.js":
/*!***********************************!*\
  !*** ./assets/src/prestations.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Prestations = function Prestations() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Prestation");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prestations);

/***/ }),

/***/ "./assets/src/web.js":
/*!***************************!*\
  !*** ./assets/src/web.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Web = function Web() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Hello web");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Web);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_react_index_js","vendors-node_modules_react-dom_index_js","vendors-node_modules_react-router-dom_esm_react-router-dom_js"], () => (__webpack_exec__("./assets/src/navigation.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcm1vcl9wcm9kdWN0aW9uLy4vYXNzZXRzL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL2FybW9yX3Byb2R1Y3Rpb24vLi9hc3NldHMvc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vYXJtb3JfcHJvZHVjdGlvbi8uL2Fzc2V0cy9zcmMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9hcm1vcl9wcm9kdWN0aW9uLy4vYXNzZXRzL3NyYy9wcmVzdGF0aW9ucy5qcyIsIndlYnBhY2s6Ly9hcm1vcl9wcm9kdWN0aW9uLy4vYXNzZXRzL3NyYy93ZWIuanMiXSwibmFtZXMiOlsiQ29udGFjdCIsIkhvbWUiLCJOYXZpZ2F0aW9uIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUHJlc3RhdGlvbnMiLCJXZWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQixzQkFDSSx3RUFESjtBQUtILENBTkQ7O0FBUUEsaUVBQWVBLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOztBQUVHLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZCxzQkFDSSxxRUFESjtBQUtILENBTkY7O0FBUUMsaUVBQWVBLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWSjtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxVQUFULEdBQXNCO0FBQ3BCLHNCQUNFLGlEQUFDLDJEQUFELHFCQUNFLDJFQUNBO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixPQUFHLEVBQUM7QUFBekIsSUFERixDQURGLGVBSUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSxpREFBQyxrREFBRDtBQUFNLE1BQUUsRUFBQyw4QkFBVDtBQUF3QyxhQUFTLEVBQUM7QUFBbEQsa0JBQTZFO0FBQU0sYUFBUyxFQUFDO0FBQWhCLDBCQUFvSztBQUFNLGFBQVMsRUFBQztBQUFoQixJQUFwSyxDQUE3RSxDQURKLGVBRUksaURBQUMsa0RBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxrQkFBNEM7QUFBTSxhQUFTLEVBQUM7QUFBaEIsV0FBNUMsQ0FGSixlQUdJLGlEQUFDLGtEQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsa0JBQW9EO0FBQU0sYUFBUyxFQUFDO0FBQWhCLG1CQUFwRCxDQUhKLGVBSUksaURBQUMsa0RBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxrQkFBZ0Q7QUFBTSxhQUFTLEVBQUM7QUFBaEIsZUFBaEQsQ0FKSixDQUpGLENBREYsQ0FERixDQURBLGVBZ0JFLGlEQUFDLG9EQUFELHFCQUNFLGlEQUFDLG1EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNFLGlEQUFDLHlDQUFELE9BREYsQ0FERixlQUlFLGlEQUFDLG1EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNFLGlEQUFDLGlEQUFELE9BREYsQ0FKRixlQU9FLGlEQUFDLG1EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNFLGlEQUFDLDZDQUFELE9BREYsQ0FQRixlQVVFLGlEQUFDLG1EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNFLGlEQUFDLDBDQUFELE9BREYsQ0FWRixDQWhCRixDQURGLENBREY7QUFvQ0Q7O0FBQ0RDLDZDQUFBLGVBQWdCLGlEQUFDLFVBQUQsT0FBaEIsRUFBK0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUEvQixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsc0JBQ0ksMkVBREo7QUFLSCxDQU5EOztBQVFBLGlFQUFlQSxXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQ2Qsc0JBQ0ksMEVBREo7QUFLSCxDQU5EOztBQVFBLGlFQUFlQSxHQUFmLEUiLCJmaWxlIjoibmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7ICAgXHJcbiAgIFxyXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOyAgIFxyXG4gICBcclxuICAgY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcclxuICBTd2l0Y2gsXHJcbiAgUm91dGUsXHJcbiAgTGlua1xyXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgV2ViIGZyb20gJy4vd2ViJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcclxuaW1wb3J0IFByZXN0YXRpb25zIGZyb20gJy4vcHJlc3RhdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdXRlcj5cclxuICAgICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTY0IGgtc2NyZWVuIGJnLWdyYXktODAwIG10LTggc206bXQtMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTEwXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTZcIiBzcmM9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvQXJtb3JfcHJvZHVjdGlvbnMvZnJvbnRfZW5kXCIgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLWdyYXktMzAwXCI+PHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtNSBweS0yIHB4LTggdGV4dC1ncmF5LTQwMCBteC00IGZvbnQtbWVkaXVtIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTAgXCI+SG9tZTxzcGFuIGNsYXNzTmFtZT1cIm5hdi11bmRlcmxpbmVcIj48L3NwYW4+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL0FybW9yX3Byb2R1Y3Rpb25zL2Zyb250X2VuZC93ZWJcIj48c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC01IHB5LTIgcHgtOCB0ZXh0LWdyYXktNDAwIG14LTQgZm9udC1tZWRpdW0gdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMFwiPldlYjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9Bcm1vcl9wcm9kdWN0aW9ucy9mcm9udF9lbmQvcHJlc3RhdGlvbnNcIj48c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC01IHB5LTIgcHgtOCB0ZXh0LWdyYXktNDAwIG14LTQgZm9udC1tZWRpdW0gdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMFwiPlByZXN0YXRpb25zPC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL0FybW9yX3Byb2R1Y3Rpb25zL2Zyb250X2VuZC9jb250YWN0XCI+PHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtNSBweS0yIHB4LTggdGV4dC1ncmF5LTQwMCBteC00IGZvbnQtbWVkaXVtIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTBcIj5Db250YWN0PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj48L2Rpdj5cclxuXHJcbiAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL0FybW9yX3Byb2R1Y3Rpb25zL2Zyb250X2VuZC93ZWJcIj5cclxuICAgICAgICAgICAgPFdlYiAvPlxyXG4gICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL0FybW9yX3Byb2R1Y3Rpb25zL2Zyb250X2VuZC9wcmVzdGF0aW9uc1wiPlxyXG4gICAgICAgICAgICA8UHJlc3RhdGlvbnMgLz5cclxuICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9Bcm1vcl9wcm9kdWN0aW9ucy9mcm9udF9lbmQvY29udGFjdFwiPlxyXG4gICAgICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL0FybW9yX3Byb2R1Y3Rpb25zL2Zyb250X2VuZC9cIj5cclxuICAgICAgICAgICAgPEhvbWUgLz5cclxuICAgICAgICAgIDwvUm91dGU+XHJcblxyXG4gICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUm91dGVyPlxyXG4gICk7XHJcbn1cclxuUmVhY3RET00ucmVuZGVyKDxOYXZpZ2F0aW9uIC8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgICBcclxuICAgXHJcbmNvbnN0IFByZXN0YXRpb25zID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBQcmVzdGF0aW9uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlc3RhdGlvbnM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgICBcclxuICAgXHJcbmNvbnN0IFdlYiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgSGVsbG8gd2ViXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2ViOyJdLCJzb3VyY2VSb290IjoiIn0=