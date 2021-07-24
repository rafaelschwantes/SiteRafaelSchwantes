(function() {
var exports = {};
exports.id = "pages/api/comunidades";
exports.ids = ["pages/api/comunidades"];
exports.modules = {

/***/ "./pages/api/comunidades.js":
/*!**********************************!*\
  !*** ./pages/api/comunidades.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ recebedorDeRequests; }
/* harmony export */ });
/* harmony import */ var datocms_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datocms-client */ "datocms-client");
/* harmony import */ var datocms_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(datocms_client__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


async function recebedorDeRequests(request, response) {
  if (request.method === 'POST') {
    const TOKEN = '1e7e409d4eb9a59e2398b4c5a70fd1';
    const client = new datocms_client__WEBPACK_IMPORTED_MODULE_0__.SiteClient(TOKEN); // Validar os dados, antes de sair cadastrando

    const registroCriado = await client.items.create(_objectSpread({
      itemType: "968529"
    }, request.body));
    console.log(registroCriado);
    response.json({
      dados: 'Algum dado qualquer',
      registroCriado: registroCriado
    });
    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!'
  });
}

/***/ }),

/***/ "datocms-client":
/*!*********************************!*\
  !*** external "datocms-client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("datocms-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/comunidades.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzLy4vcGFnZXMvYXBpL2NvbXVuaWRhZGVzLmpzIiwid2VicGFjazovL3dpdGgtc3R5bGVkLWNvbXBvbmVudHMvZXh0ZXJuYWwgXCJkYXRvY21zLWNsaWVudFwiIl0sIm5hbWVzIjpbInJlY2ViZWRvckRlUmVxdWVzdHMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJtZXRob2QiLCJUT0tFTiIsImNsaWVudCIsIlNpdGVDbGllbnQiLCJyZWdpc3Ryb0NyaWFkbyIsIml0ZW1zIiwiY3JlYXRlIiwiaXRlbVR5cGUiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImpzb24iLCJkYWRvcyIsInN0YXR1cyIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLGVBQWVBLG1CQUFmLENBQW1DQyxPQUFuQyxFQUE0Q0MsUUFBNUMsRUFBc0Q7QUFDakUsTUFBR0QsT0FBTyxDQUFDRSxNQUFSLEtBQW1CLE1BQXRCLEVBQThCO0FBQzFCLFVBQU1DLEtBQUssR0FBRyxnQ0FBZDtBQUNBLFVBQU1DLE1BQU0sR0FBRyxJQUFJQyxzREFBSixDQUFlRixLQUFmLENBQWYsQ0FGMEIsQ0FJMUI7O0FBQ0EsVUFBTUcsY0FBYyxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxNQUFiO0FBQ3pCQyxjQUFRLEVBQUU7QUFEZSxPQUV0QlQsT0FBTyxDQUFDVSxJQUZjLEVBQTdCO0FBUUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixjQUFaO0FBRUFMLFlBQVEsQ0FBQ1ksSUFBVCxDQUFjO0FBQ1ZDLFdBQUssRUFBRSxxQkFERztBQUVWUixvQkFBYyxFQUFFQTtBQUZOLEtBQWQ7QUFJQTtBQUNIOztBQUVETCxVQUFRLENBQUNjLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJGLElBQXJCLENBQTBCO0FBQ3RCRyxXQUFPLEVBQUU7QUFEYSxHQUExQjtBQUdILEM7Ozs7Ozs7Ozs7O0FDNUJELDRDIiwiZmlsZSI6InBhZ2VzL2FwaS9jb211bmlkYWRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpdGVDbGllbnQgfSBmcm9tICdkYXRvY21zLWNsaWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZWNlYmVkb3JEZVJlcXVlc3RzKHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcbiAgICBpZihyZXF1ZXN0Lm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgY29uc3QgVE9LRU4gPSAnMWU3ZTQwOWQ0ZWI5YTU5ZTIzOThiNGM1YTcwZmQxJztcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgU2l0ZUNsaWVudChUT0tFTik7XHJcblxyXG4gICAgICAgIC8vIFZhbGlkYXIgb3MgZGFkb3MsIGFudGVzIGRlIHNhaXIgY2FkYXN0cmFuZG9cclxuICAgICAgICBjb25zdCByZWdpc3Ryb0NyaWFkbyA9IGF3YWl0IGNsaWVudC5pdGVtcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBpdGVtVHlwZTogXCI5Njg1MjlcIiwgLy8gSUQgZG8gTW9kZWwgZGUgXCJDb21tdW5pdGllc1wiIGNyaWFkbyBwZWxvIERhdG9cclxuICAgICAgICAgICAgLi4ucmVxdWVzdC5ib2R5LFxyXG4gICAgICAgICAgICAvLyB0aXRsZTogXCJDb211bmlkYWRlIGRlIFRlc3RlXCIsXHJcbiAgICAgICAgICAgIC8vIGltYWdlVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9yYWZhZWxzY2h3YW50ZXMucG5nXCIsXHJcbiAgICAgICAgICAgIC8vIGNyZWF0b3JTbHVnOiBcIm9tYXJpb3NvdXRvXCJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZWdpc3Ryb0NyaWFkbyk7XHJcblxyXG4gICAgICAgIHJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICBkYWRvczogJ0FsZ3VtIGRhZG8gcXVhbHF1ZXInLFxyXG4gICAgICAgICAgICByZWdpc3Ryb0NyaWFkbzogcmVnaXN0cm9DcmlhZG8sXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVzcG9uc2Uuc3RhdHVzKDQwNCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ0FpbmRhIG7Do28gdGVtb3MgbmFkYSBubyBHRVQsIG1hcyBubyBQT1NUIHRlbSEnXHJcbiAgICB9KVxyXG59ICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdG9jbXMtY2xpZW50XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9