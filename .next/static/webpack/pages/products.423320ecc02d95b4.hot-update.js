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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ \"./src/views/products/Product.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/hooks/useFetch */ \"./src/hooks/useFetch.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductBasic = function() {\n    var _this1 = _this;\n    _s();\n    var url = \"http://localhost:80/api/v1/products\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), products = ref[0], setProducts = ref[1];\n    // const items = [\n    // \t{ id: 1, name: \"Violão\", description: \"Um violão Gianninni sunburst preto\", price: \"500.45\" },\n    // \t{ id: 2, name: \"Bombardino\", description: \"Um bombardino dourado\", price: \"5000.37\" },\n    // \t{ id: 3, name: \"Cornetão\", description: \"Um cornetão prateado\", price: \"2500.14\" },\n    // \t{ id: 4, name: \"Trompete\", description: \"Um Trompete prateado\", price: \"2999.99\" },\n    // \t{ id: 5, name: \"Guitarra\", description: \"Uma SG vermelha\", price: \"1479.90\" },\n    // \t{ id: 6, name: \"Bateria\", description: \"Kit completo com 4 pratos\", price: \"2499.14\" },\n    // ]\n    var ref1 = (0,_src_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__.useFetch)(url), items = ref1.data, httpConfig = ref1.httpConfig, loading = ref1.loading, error = ref1.error;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        container: true,\n        spacing: 3,\n        mt: 4,\n        __source: {\n            fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n            lineNumber: 20,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                    lineNumber: 22,\n                    columnNumber: 16\n                },\n                __self: _this,\n                children: \"Carregando dados...\"\n            }),\n            error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                    lineNumber: 23,\n                    columnNumber: 14\n                },\n                __self: _this,\n                children: error\n            }),\n            !error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                item: true,\n                xs: 12,\n                md: 12,\n                pt: 4,\n                __source: {\n                    fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                    lineNumber: 24,\n                    columnNumber: 18\n                },\n                __self: _this,\n                children: items.data && items.data.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        name: item.name,\n                        description: item.description,\n                        price: item.price,\n                        __source: {\n                            fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                            lineNumber: 26,\n                            columnNumber: 12\n                        },\n                        __self: _this1\n                    }, item.id);\n                })\n            })\n        ]\n    }));\n};\n_s(ProductBasic, \"sJFrIBN1KNkIuBH3wTXm4QexOck=\", false, function() {\n    return [\n        _src_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__.useFetch\n    ];\n});\n_c = ProductBasic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductBasic);\nvar _c;\n$RefreshReg$(_c, \"ProductBasic\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvcHJvZHVjdHMvUHJvZHVjdEJhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDTTtBQUNJO0FBQ1c7OztBQUVwRCxHQUFLLENBQUNLLFlBQVksR0FBRyxRQUNyQixHQUQyQixDQUFDOzs7SUFDM0IsR0FBSyxDQUFDQyxHQUFHLEdBQUcsQ0FBcUM7SUFDL0MsR0FBSyxDQUEyQkosR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFwQ0ssUUFBUSxHQUFpQkwsR0FBWSxLQUEzQk0sV0FBVyxHQUFJTixHQUFZO0lBQzlDLEVBQWtCO0lBQ2xCLEVBQWtHO0lBQ2hHLEVBQXdGO0lBQzFGLEVBQXVGO0lBQ3ZGLEVBQXVGO0lBQ3ZGLEVBQWtGO0lBQ2xGLEVBQTJGO0lBQzNGLEVBQUk7SUFDSixHQUFLLENBQThDRSxJQUFhLEdBQWJBLDZEQUFRLENBQUNFLEdBQUcsR0FBakRHLEtBQUssR0FBZ0NMLElBQWEsQ0FBeERNLElBQUksRUFBU0MsVUFBVSxHQUFvQlAsSUFBYSxDQUEzQ08sVUFBVSxFQUFFQyxPQUFPLEdBQVdSLElBQWEsQ0FBL0JRLE9BQU8sRUFBRUMsS0FBSyxHQUFJVCxJQUFhLENBQXRCUyxLQUFLO0lBRS9DLE1BQU0sdUVBQ0paLDBEQUFJO1FBQUNhLFNBQVM7UUFBQ0MsT0FBTyxFQUFFLENBQUM7UUFBRUMsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7O1lBRS9CSixPQUFPLHlFQUFLSyxDQUFDOzs7Ozs7OzBCQUFDLENBQW1COztZQUNqQ0osS0FBSyx5RUFBS0ksQ0FBQzs7Ozs7OzswQkFBRUosS0FBSzs7YUFDZEEsS0FBSyx5RUFBS1osMERBQUk7Z0JBQUNpQixJQUFJO2dCQUFDQyxFQUFFLEVBQUUsRUFBRTtnQkFBRUMsRUFBRSxFQUFFLEVBQUU7Z0JBQUVDLEVBQUUsRUFBRSxDQUFDOzs7Ozs7OzBCQUN6Q1osS0FBSyxDQUFDQyxJQUFJLElBQUlELEtBQUssQ0FBQ0MsSUFBSSxDQUFDWSxHQUFHLENBQUMsUUFBUSxDQUFQSixJQUFJO2tDQUMvQixNQUFNLHdEQUFMbEIsZ0RBQU87d0JBQ1J1QixJQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFBSTt3QkFDZkMsV0FBVyxFQUFFTixJQUFJLENBQUNNLFdBQVc7d0JBQzdCQyxLQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FBSzs7Ozs7Ozt1QkFISFAsSUFBSSxDQUFDUSxFQUFFOzs7OztBQVFoQyxDQUFDO0dBNUJLckIsWUFBWTs7UUFXa0NELHlEQUFROzs7S0FYdERDLFlBQVk7QUE4QmxCLCtEQUFlQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy92aWV3cy9wcm9kdWN0cy9Qcm9kdWN0QmFzaWMuanM/MDU0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VGZXRjaH0gZnJvbSAnLi4vLi4vLi4vc3JjL2hvb2tzL3VzZUZldGNoJ1xuXG5jb25zdCBQcm9kdWN0QmFzaWMgPSAoKSA9PiB7XG5cdGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MC9hcGkvdjEvcHJvZHVjdHNcIlxuICBcdGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pXG5cdC8vIGNvbnN0IGl0ZW1zID0gW1xuXHQvLyBcdHsgaWQ6IDEsIG5hbWU6IFwiVmlvbMOjb1wiLCBkZXNjcmlwdGlvbjogXCJVbSB2aW9sw6NvIEdpYW5uaW5uaSBzdW5idXJzdCBwcmV0b1wiLCBwcmljZTogXCI1MDAuNDVcIiB9LFxuXHQvLyBcdHsgaWQ6IDIsIG5hbWU6IFwiQm9tYmFyZGlub1wiLCBkZXNjcmlwdGlvbjogXCJVbSBib21iYXJkaW5vIGRvdXJhZG9cIiwgcHJpY2U6IFwiNTAwMC4zN1wiIH0sXG5cdC8vIFx0eyBpZDogMywgbmFtZTogXCJDb3JuZXTDo29cIiwgZGVzY3JpcHRpb246IFwiVW0gY29ybmV0w6NvIHByYXRlYWRvXCIsIHByaWNlOiBcIjI1MDAuMTRcIiB9LFxuXHQvLyBcdHsgaWQ6IDQsIG5hbWU6IFwiVHJvbXBldGVcIiwgZGVzY3JpcHRpb246IFwiVW0gVHJvbXBldGUgcHJhdGVhZG9cIiwgcHJpY2U6IFwiMjk5OS45OVwiIH0sXG5cdC8vIFx0eyBpZDogNSwgbmFtZTogXCJHdWl0YXJyYVwiLCBkZXNjcmlwdGlvbjogXCJVbWEgU0cgdmVybWVsaGFcIiwgcHJpY2U6IFwiMTQ3OS45MFwiIH0sXG5cdC8vIFx0eyBpZDogNiwgbmFtZTogXCJCYXRlcmlhXCIsIGRlc2NyaXB0aW9uOiBcIktpdCBjb21wbGV0byBjb20gNCBwcmF0b3NcIiwgcHJpY2U6IFwiMjQ5OS4xNFwiIH0sXG5cdC8vIF1cblx0Y29uc3QgeyBkYXRhOiBpdGVtcywgaHR0cENvbmZpZywgbG9hZGluZywgZXJyb3J9ID0gdXNlRmV0Y2godXJsKTtcblx0XG5cdHJldHVybiAoXG5cdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IG10PXs0fT5cblx0XHRcdFxuXHRcdFx0e2xvYWRpbmcgJiYgPHA+Q2FycmVnYW5kbyBkYWRvcy4uLjwvcD59XG5cdFx0XHR7ZXJyb3IgJiYgPHA+e2Vycm9yfTwvcD59XG5cdFx0ICAgIHshZXJyb3IgJiYgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0gcHQ9ezR9PlxuXHRcdCAgICBcdHtpdGVtcy5kYXRhICYmIGl0ZW1zLmRhdGEubWFwKChpdGVtKSA9PiAoXG5cdFx0ICAgICAgICBcdDxQcm9kdWN0IGtleT17aXRlbS5pZH0gXG5cdFx0ICAgICAgICBcdG5hbWU9e2l0ZW0ubmFtZX0gXG5cdFx0ICAgICAgICBcdGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufSBcblx0XHQgICAgICAgIFx0cHJpY2U9e2l0ZW0ucHJpY2V9Lz5cblx0XHQgICAgICAgICkpfVxuXHRcdCAgICAgIDwvR3JpZD59IFxuXHRcdDwvR3JpZD5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0QmFzaWMiXSwibmFtZXMiOlsiUHJvZHVjdCIsIkdyaWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUZldGNoIiwiUHJvZHVjdEJhc2ljIiwidXJsIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsIml0ZW1zIiwiZGF0YSIsImh0dHBDb25maWciLCJsb2FkaW5nIiwiZXJyb3IiLCJjb250YWluZXIiLCJzcGFjaW5nIiwibXQiLCJwIiwiaXRlbSIsInhzIiwibWQiLCJwdCIsIm1hcCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/products/ProductBasic.js\n");

/***/ })

});