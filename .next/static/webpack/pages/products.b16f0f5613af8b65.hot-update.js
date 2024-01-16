"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./src/views/products/ProductBasic.js":
/*!********************************************!*\
  !*** ./src/views/products/ProductBasic.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ \"./src/views/products/Product.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/hooks/useFetch */ \"./src/hooks/useFetch.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductBasic = function() {\n    var _this1 = _this;\n    _s();\n    var url = \"http://localhost:80/api/v1/products\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), products = ref[0], setProducts = ref[1];\n    // const items = [\n    // \t{ id: 1, name: \"Violão\", description: \"Um violão Gianninni sunburst preto\", price: \"500.45\" },\n    // \t{ id: 2, name: \"Bombardino\", description: \"Um bombardino dourado\", price: \"5000.37\" },\n    // \t{ id: 3, name: \"Cornetão\", description: \"Um cornetão prateado\", price: \"2500.14\" },\n    // \t{ id: 4, name: \"Trompete\", description: \"Um Trompete prateado\", price: \"2999.99\" },\n    // \t{ id: 5, name: \"Guitarra\", description: \"Uma SG vermelha\", price: \"1479.90\" },\n    // \t{ id: 6, name: \"Bateria\", description: \"Kit completo com 4 pratos\", price: \"2499.14\" },\n    // ]\n    var ref1 = (0,_src_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__.useFetch)(url), items = ref1.data.items, httpConfig = ref1.httpConfig, loading = ref1.loading, error = ref1.error;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        container: true,\n        spacing: 3,\n        mt: 4,\n        __source: {\n            fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n            lineNumber: 20,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                    lineNumber: 22,\n                    columnNumber: 16\n                },\n                __self: _this,\n                children: \"Carregando dados...\"\n            }),\n            error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                    lineNumber: 23,\n                    columnNumber: 14\n                },\n                __self: _this,\n                children: error\n            }),\n            !error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                item: true,\n                xs: 12,\n                md: 12,\n                pt: 4,\n                __source: {\n                    fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                    lineNumber: 24,\n                    columnNumber: 18\n                },\n                __self: _this,\n                children: items && items.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        name: item.name,\n                        description: item.description,\n                        price: item.price,\n                        __source: {\n                            fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                            lineNumber: 26,\n                            columnNumber: 12\n                        },\n                        __self: _this1\n                    }, item.id);\n                })\n            })\n        ]\n    }));\n};\n_s(ProductBasic, \"15iBscE7V2HYrR04mLKG2cSN2zs=\", false, function() {\n    return [\n        _src_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__.useFetch\n    ];\n});\n_c = ProductBasic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductBasic);\nvar _c;\n$RefreshReg$(_c, \"ProductBasic\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvcHJvZHVjdHMvUHJvZHVjdEJhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDTTtBQUNJO0FBQ1c7OztBQUVwRCxHQUFLLENBQUNLLFlBQVksR0FBRyxRQUNyQixHQUQyQixDQUFDOzs7SUFDM0IsR0FBSyxDQUFDQyxHQUFHLEdBQUcsQ0FBcUM7SUFDL0MsR0FBSyxDQUEyQkosR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFwQ0ssUUFBUSxHQUFpQkwsR0FBWSxLQUEzQk0sV0FBVyxHQUFJTixHQUFZO0lBQzlDLEVBQWtCO0lBQ2xCLEVBQWtHO0lBQ2hHLEVBQXdGO0lBQzFGLEVBQXVGO0lBQ3ZGLEVBQXVGO0lBQ3ZGLEVBQWtGO0lBQ2xGLEVBQTJGO0lBQzNGLEVBQUk7SUFDSixHQUFLLENBQWdERSxJQUFhLEdBQWJBLDZEQUFRLENBQUNFLEdBQUcsR0FBbERHLEtBQUssR0FBaUNMLElBQWEsQ0FBMURNLElBQUksQ0FBR0QsS0FBSyxFQUFHRSxVQUFVLEdBQW9CUCxJQUFhLENBQTNDTyxVQUFVLEVBQUVDLE9BQU8sR0FBV1IsSUFBYSxDQUEvQlEsT0FBTyxFQUFFQyxLQUFLLEdBQUlULElBQWEsQ0FBdEJTLEtBQUs7SUFFakQsTUFBTSx1RUFDSlosMERBQUk7UUFBQ2EsU0FBUztRQUFDQyxPQUFPLEVBQUUsQ0FBQztRQUFFQyxFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs7WUFFL0JKLE9BQU8seUVBQUtLLENBQUM7Ozs7Ozs7MEJBQUMsQ0FBbUI7O1lBQ2pDSixLQUFLLHlFQUFLSSxDQUFDOzs7Ozs7OzBCQUFFSixLQUFLOzthQUNkQSxLQUFLLHlFQUFLWiwwREFBSTtnQkFBQ2lCLElBQUk7Z0JBQUNDLEVBQUUsRUFBRSxFQUFFO2dCQUFFQyxFQUFFLEVBQUUsRUFBRTtnQkFBRUMsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7MEJBQ3pDWixLQUFLLElBQUlBLEtBQUssQ0FBQ2EsR0FBRyxDQUFDLFFBQVEsQ0FBUEosSUFBSTtrQ0FDckIsTUFBTSx3REFBTGxCLGdEQUFPO3dCQUNSdUIsSUFBSSxFQUFFTCxJQUFJLENBQUNLLElBQUk7d0JBQ2ZDLFdBQVcsRUFBRU4sSUFBSSxDQUFDTSxXQUFXO3dCQUM3QkMsS0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBQUs7Ozs7Ozs7dUJBSEhQLElBQUksQ0FBQ1EsRUFBRTs7Ozs7QUFRaEMsQ0FBQztHQTVCS3JCLFlBQVk7O1FBV29DRCx5REFBUTs7O0tBWHhEQyxZQUFZO0FBOEJsQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdmlld3MvcHJvZHVjdHMvUHJvZHVjdEJhc2ljLmpzPzA1NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0J1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlRmV0Y2h9IGZyb20gJy4uLy4uLy4uL3NyYy9ob29rcy91c2VGZXRjaCdcblxuY29uc3QgUHJvZHVjdEJhc2ljID0gKCkgPT4ge1xuXHRjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAvYXBpL3YxL3Byb2R1Y3RzXCJcbiAgXHRjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKVxuXHQvLyBjb25zdCBpdGVtcyA9IFtcblx0Ly8gXHR7IGlkOiAxLCBuYW1lOiBcIlZpb2zDo29cIiwgZGVzY3JpcHRpb246IFwiVW0gdmlvbMOjbyBHaWFubmlubmkgc3VuYnVyc3QgcHJldG9cIiwgcHJpY2U6IFwiNTAwLjQ1XCIgfSxcblx0Ly8gXHR7IGlkOiAyLCBuYW1lOiBcIkJvbWJhcmRpbm9cIiwgZGVzY3JpcHRpb246IFwiVW0gYm9tYmFyZGlubyBkb3VyYWRvXCIsIHByaWNlOiBcIjUwMDAuMzdcIiB9LFxuXHQvLyBcdHsgaWQ6IDMsIG5hbWU6IFwiQ29ybmV0w6NvXCIsIGRlc2NyaXB0aW9uOiBcIlVtIGNvcm5ldMOjbyBwcmF0ZWFkb1wiLCBwcmljZTogXCIyNTAwLjE0XCIgfSxcblx0Ly8gXHR7IGlkOiA0LCBuYW1lOiBcIlRyb21wZXRlXCIsIGRlc2NyaXB0aW9uOiBcIlVtIFRyb21wZXRlIHByYXRlYWRvXCIsIHByaWNlOiBcIjI5OTkuOTlcIiB9LFxuXHQvLyBcdHsgaWQ6IDUsIG5hbWU6IFwiR3VpdGFycmFcIiwgZGVzY3JpcHRpb246IFwiVW1hIFNHIHZlcm1lbGhhXCIsIHByaWNlOiBcIjE0NzkuOTBcIiB9LFxuXHQvLyBcdHsgaWQ6IDYsIG5hbWU6IFwiQmF0ZXJpYVwiLCBkZXNjcmlwdGlvbjogXCJLaXQgY29tcGxldG8gY29tIDQgcHJhdG9zXCIsIHByaWNlOiBcIjI0OTkuMTRcIiB9LFxuXHQvLyBdXG5cdGNvbnN0IHsgZGF0YToge2l0ZW1zfSwgaHR0cENvbmZpZywgbG9hZGluZywgZXJyb3J9ID0gdXNlRmV0Y2godXJsKTtcblx0XG5cdHJldHVybiAoXG5cdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IG10PXs0fT5cblx0XHRcdFxuXHRcdFx0e2xvYWRpbmcgJiYgPHA+Q2FycmVnYW5kbyBkYWRvcy4uLjwvcD59XG5cdFx0XHR7ZXJyb3IgJiYgPHA+e2Vycm9yfTwvcD59XG5cdFx0ICAgIHshZXJyb3IgJiYgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0gcHQ9ezR9PlxuXHRcdCAgICBcdHtpdGVtcyAmJiBpdGVtcy5tYXAoKGl0ZW0pID0+IChcblx0XHQgICAgICAgIFx0PFByb2R1Y3Qga2V5PXtpdGVtLmlkfSBcblx0XHQgICAgICAgIFx0bmFtZT17aXRlbS5uYW1lfSBcblx0XHQgICAgICAgIFx0ZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259IFxuXHRcdCAgICAgICAgXHRwcmljZT17aXRlbS5wcmljZX0vPlxuXHRcdCAgICAgICAgKSl9XG5cdFx0ICAgICAgPC9HcmlkPn0gXG5cdFx0PC9HcmlkPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RCYXNpYyJdLCJuYW1lcyI6WyJQcm9kdWN0IiwiR3JpZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlRmV0Y2giLCJQcm9kdWN0QmFzaWMiLCJ1cmwiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiaXRlbXMiLCJkYXRhIiwiaHR0cENvbmZpZyIsImxvYWRpbmciLCJlcnJvciIsImNvbnRhaW5lciIsInNwYWNpbmciLCJtdCIsInAiLCJpdGVtIiwieHMiLCJtZCIsInB0IiwibWFwIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/views/products/ProductBasic.js\n");

/***/ })

});