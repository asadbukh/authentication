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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./modals/User.js":
/*!************************!*\
  !*** ./modals/User.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst NoteSchema = new mongoose.Schema({\n    email: {\n        type: String,\n        required: true,\n        maxlength: [\n            400,\n            \"email cannot be more than 40 characters\"\n        ]\n    },\n    name: {\n        type: String,\n        // required: true,\n        maxlength: [\n            200,\n            \"name cannot be more than 200 characters\"\n        ]\n    }\n});\nmodule.exports = mongoose.models.Note || mongoose.model(\"Note\", NoteSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RhbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsS0FBSyxDQUFDQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQVU7QUFFbkMsS0FBSyxDQUFDQyxVQUFVLEdBQUcsR0FBRyxDQUFDRixRQUFRLENBQUNHLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDQyxLQUFLLEVBQUUsQ0FBQztRQUNOQyxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7UUFDZEMsU0FBUyxFQUFFLENBQUM7QUFBQSxlQUFHO1lBQUUsQ0FBeUM7UUFBQSxDQUFDO0lBQzdELENBQUM7SUFDREMsSUFBSSxFQUFFLENBQUM7UUFDTEosSUFBSSxFQUFFQyxNQUFNO1FBQ1osRUFBa0I7UUFDbEJFLFNBQVMsRUFBRSxDQUFDO0FBQUEsZUFBRztZQUFFLENBQXlDO1FBQUEsQ0FBQztJQUM3RCxDQUFDO0FBQ0gsQ0FBQztBQUVERSxNQUFNLENBQUNDLE9BQU8sR0FBR1gsUUFBUSxDQUFDWSxNQUFNLENBQUNDLElBQUksSUFBSWIsUUFBUSxDQUFDYyxLQUFLLENBQUMsQ0FBTSxPQUFFWixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hdXRoLy4vbW9kYWxzL1VzZXIuanM/OTBmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuY29uc3QgTm90ZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBlbWFpbDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtYXhsZW5ndGg6IFs0MDAsIFwiZW1haWwgY2Fubm90IGJlIG1vcmUgdGhhbiA0MCBjaGFyYWN0ZXJzXCJdLFxuICB9LFxuICBuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxuICAgIG1heGxlbmd0aDogWzIwMCwgXCJuYW1lIGNhbm5vdCBiZSBtb3JlIHRoYW4gMjAwIGNoYXJhY3RlcnNcIl0sXG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuTm90ZSB8fCBtb25nb29zZS5tb2RlbChcIk5vdGVcIiwgTm90ZVNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiTm90ZVNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibWF4bGVuZ3RoIiwibmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJOb3RlIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./modals/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/user.ts":
/*!***************************!*\
  !*** ./pages/api/user.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n/* harmony import */ var _modals_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modals/User */ \"(api)/./modals/User.js\");\n/* harmony import */ var _modals_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modals_User__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method  } = req;\n    console.log(req.body);\n    switch(method){\n        case 'GET':\n            try {\n                const notes = await _modals_User__WEBPACK_IMPORTED_MODULE_1___default().find({});\n                res.status(200).json({\n                    success: true,\n                    data: notes\n                });\n            } catch (error) {\n                res.status(400).json({\n                    success: false,\n                    data: error\n                });\n            }\n            break;\n        case 'POST':\n            console.log(\"ji\");\n            try {\n                const note = await _modals_User__WEBPACK_IMPORTED_MODULE_1___default().create(req.body);\n                res.status(201).json({\n                    success: true,\n                    data: note\n                });\n            } catch (error1) {\n                res.status(400).json({\n                    success: false,\n                    data: error1\n                });\n            }\n            break;\n        default:\n            res.status(400).json({\n                success: false\n            });\n            break;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZDO0FBQ1Q7QUFJcENBLDREQUFTO0FBRVQsaUVBQU0sT0FBZ0JFLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUssQ0FBQztJQUNuRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEVBQUMsQ0FBQyxHQUFHRixHQUFHO0lBR3RCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osR0FBRyxDQUFDSyxJQUFJO0lBR3BCLE1BQU0sQ0FBRUgsTUFBTTtRQUNaLElBQUksQ0FBQyxDQUFLO1lBQ1IsR0FBRyxDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDSSxLQUFLLEdBQUcsS0FBSyxDQUFDUCx3REFBUyxDQUFDLENBQUMsQ0FBQztnQkFFaENFLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7b0JBQUNDLE9BQU8sRUFBRSxJQUFJO29CQUFFQyxJQUFJLEVBQUVMLEtBQUs7Z0JBQUMsQ0FBQztZQUNyRCxDQUFDLENBQUMsS0FBSyxFQUFFTSxLQUFLLEVBQUUsQ0FBQztnQkFDZlgsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztvQkFBQ0MsT0FBTyxFQUFFLEtBQUs7b0JBQUVDLElBQUksRUFBRUMsS0FBSztnQkFBQyxDQUFDO1lBQ3RELENBQUM7WUFDRCxLQUFLO1FBQ1AsSUFBSSxDQUFDLENBQU07WUFDVFQsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBSTtZQUNoQixHQUFHLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUNTLElBQUksR0FBRyxLQUFLLENBQUNkLDBEQUFXLENBQUNDLEdBQUcsQ0FBQ0ssSUFBSTtnQkFFdkNKLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7b0JBQUNDLE9BQU8sRUFBRSxJQUFJO29CQUFFQyxJQUFJLEVBQUVFLElBQUk7Z0JBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsS0FBSyxFQUFFRCxNQUFLLEVBQUUsQ0FBQztnQkFDZlgsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztvQkFBQ0MsT0FBTyxFQUFFLEtBQUs7b0JBQUVDLElBQUksRUFBRUMsTUFBSztnQkFBQyxDQUFDO1lBQ3RELENBQUM7WUFDRCxLQUFLOztZQUVMWCxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO2dCQUFDQyxPQUFPLEVBQUUsS0FBSztZQUFDLENBQUM7WUFDdkMsS0FBSzs7QUFFWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hdXRoLy4vcGFnZXMvYXBpL3VzZXIudHM/MTcxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi91dGlscy9kYkNvbm5lY3RcIjtcbmltcG9ydCBOb3RlIGZyb20gXCIuLi8uLi9tb2RhbHMvVXNlclwiO1xuXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG5kYkNvbm5lY3QoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XG5cblxuICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG5cblxuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBub3RlcyA9IGF3YWl0IE5vdGUuZmluZCh7fSk7XG5cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBub3RlcyB9KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogZXJyb3IgfSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQT1NUJzpcbiAgICAgIGNvbnNvbGUubG9nKFwiamlcIilcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5vdGUgPSBhd2FpdCBOb3RlLmNyZWF0ZShyZXEuYm9keSk7XG5cbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBub3RlIH0pXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBlcnJvciB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbn0iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiTm90ZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJib2R5Iiwibm90ZXMiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJub3RlIiwiY3JlYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user.ts\n");

/***/ }),

/***/ "(api)/./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    connection.isConnected = db.connections[0].readyState;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLENBQUMsQ0FBQztlQUVOQyxTQUFTLEdBQUcsQ0FBQztJQUMxQixFQUFFLEVBQUVELFVBQVUsQ0FBQ0UsV0FBVyxFQUFFLENBQUM7UUFDM0IsTUFBTTtJQUNSLENBQUM7SUFFRCxLQUFLLENBQUNDLEVBQUUsR0FBRyxLQUFLLENBQUNKLHVEQUFnQixDQUFDTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFLENBQUM7UUFDeERDLGVBQWUsRUFBRSxJQUFJO1FBQ3JCQyxrQkFBa0IsRUFBRSxJQUFJO0lBQzFCLENBQUM7SUFFRFQsVUFBVSxDQUFDRSxXQUFXLEdBQUdDLEVBQUUsQ0FBQ08sV0FBVyxDQUFDLENBQUMsRUFBRUMsVUFBVTtBQUN2RCxDQUFDO0FBRUQsaUVBQWVWLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXV0aC8uL3V0aWxzL2RiQ29ubmVjdC5qcz9jM2NlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgY29ubmVjdGlvbiA9IHt9O1xuXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSwge1xuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gIH0pO1xuXG4gIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/dbConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user.ts"));
module.exports = __webpack_exports__;

})();