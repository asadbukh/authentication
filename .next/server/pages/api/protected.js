"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/protected";
exports.ids = ["pages/api/protected"];
exports.modules = {

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./pages/api/protected.ts":
/*!********************************!*\
  !*** ./pages/api/protected.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n// This is an example of to protect an API route\n\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    // console.log(\"session from api\", session);\n    if (session) {\n        res.send({\n            content: \"This is protected content. You can access this content because you are signed in.\"\n        });\n    } else {\n        res.send({\n            error: \"You must be signed in to view the protected content on this page.\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvdGVjdGVkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEVBQWdEO0FBQ0o7QUFHNUMsRUFBOEQ7QUFDOUQsaUVBQU0sT0FBZ0JDLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUssQ0FBQztJQUNqRSxLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLLENBQUNILDJEQUFVLENBQUMsQ0FBQztRQUFDQyxHQUFHO0lBQUMsQ0FBQztJQUV4QyxFQUE0QztJQUc1QyxFQUFFLEVBQUVFLE9BQU8sRUFBRSxDQUFDO1FBQ1ZELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7WUFDTkMsT0FBTyxFQUNILENBQW1GO1FBQzNGLENBQUM7SUFDTCxDQUFDLE1BQU0sQ0FBQztRQUNKSCxHQUFHLENBQUNFLElBQUksQ0FBQyxDQUFDO1lBQ05FLEtBQUssRUFBRSxDQUFtRTtRQUM5RSxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgvLi9wYWdlcy9hcGkvcHJvdGVjdGVkLnRzP2U2NTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyBhbiBleGFtcGxlIG9mIHRvIHByb3RlY3QgYW4gQVBJIHJvdXRlXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJzZXNzaW9uIGZyb20gYXBpXCIsIHNlc3Npb24pO1xuXG5cbiAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgICByZXMuc2VuZCh7XG4gICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgIFwiVGhpcyBpcyBwcm90ZWN0ZWQgY29udGVudC4gWW91IGNhbiBhY2Nlc3MgdGhpcyBjb250ZW50IGJlY2F1c2UgeW91IGFyZSBzaWduZWQgaW4uXCIsXG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnNlbmQoe1xuICAgICAgICAgICAgZXJyb3I6IFwiWW91IG11c3QgYmUgc2lnbmVkIGluIHRvIHZpZXcgdGhlIHByb3RlY3RlZCBjb250ZW50IG9uIHRoaXMgcGFnZS5cIixcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInJlcSIsInJlcyIsInNlc3Npb24iLCJzZW5kIiwiY29udGVudCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/protected.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/protected.ts"));
module.exports = __webpack_exports__;

})();