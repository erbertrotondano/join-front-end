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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ \"./src/views/products/Product.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_hooks_useFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/hooks/useFetch */ \"./src/hooks/useFetch.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductBasic = function() {\n    _s();\n    var url = \"http://localhost:80/api/v1/products\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), products = ref[0], setProducts = ref[1];\n    var ref1 = (0,_src_hooks_useFetch__WEBPACK_IMPORTED_MODULE_4__.useFetch)(url), items = ref1.data, httpConfig = ref1.httpConfig, loading = ref1.loading, error = ref1.error;\n    var renderList = _asyncToGenerator(_Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n        var productComponents;\n        return _Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n            while(1)switch(_ctx1.prev = _ctx1.next){\n                case 0:\n                    if (!Array.isArray(items)) {\n                        _ctx1.next = 5;\n                        break;\n                    }\n                    _ctx1.next = 3;\n                    return Promise.all(items.map(_asyncToGenerator(_Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(product) {\n                        return _Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    return _ctx.abrupt(\"return\", /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        name: product.name,\n                                        description: product.description,\n                                        price: product.price,\n                                        __source: {\n                                            fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                                            lineNumber: 15,\n                                            columnNumber: 11\n                                        },\n                                        __self: this\n                                    }, product.id));\n                                case 1:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee, this);\n                    }).bind(this)).bind(this)));\n                case 3:\n                    productComponents = _ctx1.sent;\n                    return _ctx1.abrupt(\"return\", productComponents);\n                case 5:\n                    return _ctx1.abrupt(\"return\", null);\n                case 6:\n                case \"end\":\n                    return _ctx1.stop();\n            }\n        }, _callee1, this);\n    }).bind(_this)).bind(_this);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var renderAndSetProducts = _asyncToGenerator(_Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var renderedProducts;\n            return _Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!items) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return renderList();\n                    case 3:\n                        renderedProducts = _ctx.sent;\n                        setProducts(renderedProducts);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        renderAndSetProducts();\n        console.log(renderedProducts);\n    }, [\n        items\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        container: true,\n        spacing: 3,\n        mt: 4,\n        __source: {\n            fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n            lineNumber: 41,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                    lineNumber: 42,\n                    columnNumber: 19\n                },\n                __self: _this,\n                children: \"Carregando dados...\"\n            }),\n            error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: error\n            }),\n            !error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                item: true,\n                xs: 12,\n                md: 12,\n                pt: 4,\n                __source: {\n                    fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: products\n            })\n        ]\n    }));\n};\n_s(ProductBasic, \"lynaPEFznrhMw4OdnT8eophLKe4=\", false, function() {\n    return [\n        _src_hooks_useFetch__WEBPACK_IMPORTED_MODULE_4__.useFetch\n    ];\n});\n_c = ProductBasic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductBasic);\nvar _c;\n$RefreshReg$(_c, \"ProductBasic\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvcHJvZHVjdHMvUHJvZHVjdEJhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTTtBQUNNO0FBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRELEdBQUssQ0FBQ0ssWUFBWSxHQUFHLFFBQ3JCLEdBRDJCLENBQUM7O0lBQzFCLEdBQUssQ0FBQ0MsR0FBRyxHQUFHLENBQXFDO0lBQ2pELEdBQUssQ0FBMkJKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBcENLLFFBQVEsR0FBaUJMLEdBQVksS0FBM0JNLFdBQVcsR0FBSU4sR0FBWTtJQUM1QyxHQUFLLENBQStDRSxJQUFhLEdBQWJBLDZEQUFRLENBQUNFLEdBQUcsR0FBbERHLEtBQUssR0FBaUNMLElBQWEsQ0FBekRNLElBQUksRUFBU0MsVUFBVSxHQUFxQlAsSUFBYSxDQUE1Q08sVUFBVSxFQUFFQyxPQUFPLEdBQVlSLElBQWEsQ0FBaENRLE9BQU8sRUFBRUMsS0FBSyxHQUFLVCxJQUFhLENBQXZCUyxLQUFLO0lBRS9DLEdBQUssQ0FBQ0MsVUFBVSw4S0FBRyxRQUFRLFlBQUksQ0FBQztZQUV0QkMsaUJBQWlCOzs7O3lCQURyQkMsS0FBSyxDQUFDQyxPQUFPLENBQUNSLEtBQUs7Ozs7OzJCQUNXUyxPQUFPLENBQUNDLEdBQUcsQ0FDekNWLEtBQUssQ0FBQ1csR0FBRyw0S0FBQyxRQUFRLFNBQURDLE9BQU87Ozs7c0lBQ3JCckIsZ0RBQU87d0NBRU5zQixJQUFJLEVBQUVELE9BQU8sQ0FBQ0MsSUFBSTt3Q0FDbEJDLFdBQVcsRUFBRUYsT0FBTyxDQUFDRSxXQUFXO3dDQUNoQ0MsS0FBSyxFQUFFSCxPQUFPLENBQUNHLEtBQUs7Ozs7Ozs7dUNBSGZILE9BQU8sQ0FBQ0ksRUFBRTs7Ozs7Ozs7b0JBSGZWLGlCQUFpQjtrREFVaEJBLGlCQUFpQjs7a0RBRW5CLElBQUk7Ozs7OztJQUNiLENBQUM7SUFFRFosZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUN1QixvQkFBb0IsOEtBQUcsUUFBUSxXQUFJLENBQUM7Z0JBRWhDQyxnQkFBZ0I7Ozs7NkJBRHBCbEIsS0FBSzs7Ozs7K0JBQ3dCSyxVQUFVOzt3QkFBbkNhLGdCQUFnQjt3QkFDdEJuQixXQUFXLENBQUNtQixnQkFBZ0I7Ozs7OztRQUVoQyxDQUFDO1FBRURELG9CQUFvQjtRQUNwQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLGdCQUFnQjtJQUM5QixDQUFDLEVBQUUsQ0FBQ2xCO1FBQUFBLEtBQUs7SUFBQSxDQUFDO0lBRVYsTUFBTSx1RUFDSFIsMERBQUk7UUFBQzZCLFNBQVM7UUFBQ0MsT0FBTyxFQUFFLENBQUM7UUFBRUMsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7O1lBQzlCcEIsT0FBTyx5RUFBS3FCLENBQUM7Ozs7Ozs7MEJBQUMsQ0FBbUI7O1lBQ2pDcEIsS0FBSyx5RUFBS29CLENBQUM7Ozs7Ozs7MEJBQUVwQixLQUFLOzthQUNqQkEsS0FBSyx5RUFDSlosMERBQUk7Z0JBQUNpQyxJQUFJO2dCQUFDQyxFQUFFLEVBQUUsRUFBRTtnQkFBRUMsRUFBRSxFQUFFLEVBQUU7Z0JBQUVDLEVBQUUsRUFBRSxDQUFDOzs7Ozs7OzBCQUM3QjlCLFFBQVE7Ozs7QUFLbkIsQ0FBQztHQTdDS0YsWUFBWTs7UUFHb0NELHlEQUFROzs7S0FIeERDLFlBQVk7QUErQ2xCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL3Byb2R1Y3RzL1Byb2R1Y3RCYXNpYy5qcz8wNTQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZldGNoIH0gZnJvbSAnLi4vLi4vLi4vc3JjL2hvb2tzL3VzZUZldGNoJztcblxuY29uc3QgUHJvZHVjdEJhc2ljID0gKCkgPT4ge1xuICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAvYXBpL3YxL3Byb2R1Y3RzXCI7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCB7IGRhdGE6IGl0ZW1zLCBodHRwQ29uZmlnLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlRmV0Y2godXJsKTtcblxuICBjb25zdCByZW5kZXJMaXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgY29uc3QgcHJvZHVjdENvbXBvbmVudHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgaXRlbXMubWFwKGFzeW5jIChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgPFByb2R1Y3RcbiAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cbiAgICAgICAgICAgIG5hbWU9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgcHJpY2U9e3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgICk7XG4gICAgICByZXR1cm4gcHJvZHVjdENvbXBvbmVudHM7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyQW5kU2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRQcm9kdWN0cyA9IGF3YWl0IHJlbmRlckxpc3QoKTtcbiAgICAgICAgc2V0UHJvZHVjdHMocmVuZGVyZWRQcm9kdWN0cyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlbmRlckFuZFNldFByb2R1Y3RzKCk7XG4gICAgY29uc29sZS5sb2cocmVuZGVyZWRQcm9kdWN0cyk7XG4gIH0sIFtpdGVtc10pO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IG10PXs0fT5cbiAgICAgIHtsb2FkaW5nICYmIDxwPkNhcnJlZ2FuZG8gZGFkb3MuLi48L3A+fVxuICAgICAge2Vycm9yICYmIDxwPntlcnJvcn08L3A+fVxuICAgICAgeyFlcnJvciAmJiAoXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9IHB0PXs0fT5cbiAgICAgICAgICB7cHJvZHVjdHN9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICl9XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEJhc2ljO1xuIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJHcmlkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VGZXRjaCIsIlByb2R1Y3RCYXNpYyIsInVybCIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJpdGVtcyIsImRhdGEiLCJodHRwQ29uZmlnIiwibG9hZGluZyIsImVycm9yIiwicmVuZGVyTGlzdCIsInByb2R1Y3RDb21wb25lbnRzIiwiQXJyYXkiLCJpc0FycmF5IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInByb2R1Y3QiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImlkIiwicmVuZGVyQW5kU2V0UHJvZHVjdHMiLCJyZW5kZXJlZFByb2R1Y3RzIiwiY29uc29sZSIsImxvZyIsImNvbnRhaW5lciIsInNwYWNpbmciLCJtdCIsInAiLCJpdGVtIiwieHMiLCJtZCIsInB0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/products/ProductBasic.js\n");

/***/ })

});