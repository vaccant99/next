"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ a; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction a() {\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const getMovies = async ()=>{\n        const response = await fetch(\"https://nomad-movies.nomadcoders.workers.dev/movies \");\n        const json = await response.json();\n        setMovies(json);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: JSON.stringify(movies)\n        }, void 0, false, {\n            fileName: \"/Users/vacant/nomadnext/app/page.tsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vacant/nomadnext/app/page.tsx\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, this);\n}\n_s(a, \"I+yrdh2lNF8CepoUuGGyqerhX8s=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDeUI7QUFDa0I7QUFLNUIsU0FBU0c7O0lBRXhCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFFSiwrQ0FBUUE7SUFDbkMsTUFBTSxDQUFDSyxTQUFRQyxXQUFXLEdBQUNOLCtDQUFRQSxDQUFDO0lBQ3BDLE1BQU1PLFlBQVc7UUFDakIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1FBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0UsSUFBSTtRQUNoQ04sVUFBVU07SUFFVjtJQUVBVCxnREFBU0EsQ0FBQztRQUFNTTtJQUFZLEdBQUcsRUFBRTtJQUUvQixxQkFBTyw4REFBQ0k7a0JBQ04sNEVBQUNDO3NCQUFJQyxLQUFLQyxTQUFTLENBQUNYOzs7Ozs7Ozs7OztBQUd4QjtHQWpCd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYSgpIHtcblxuY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9dXNlU3RhdGUoKSBcbmNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddPXVzZVN0YXRlKHRydWUpXG5jb25zdCBnZXRNb3ZpZXM9IGFzeW5jICgpPT4ge1xuY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbm9tYWQtbW92aWVzLm5vbWFkY29kZXJzLndvcmtlcnMuZGV2L21vdmllcyBcIikgXG5jb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5zZXRNb3ZpZXMoanNvbilcblxufSBcblxudXNlRWZmZWN0KCgpPT57IGdldE1vdmllcygpIH0sIFtdKSBcblxuICByZXR1cm4gPGRpdj4gXG4gICAgPGgxPntKU09OLnN0cmluZ2lmeShtb3ZpZXMpfTwvaDE+XG4gICAgXG4gIDwvZGl2PlxufSAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImEiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldE1vdmllcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZGl2IiwiaDEiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});