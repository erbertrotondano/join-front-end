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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ \"./src/views/products/Product.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_hooks_useFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/hooks/useFetch */ \"./src/hooks/useFetch.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductBasic = function() {\n    _s();\n    var url = \"http://localhost:80/api/v1/products\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), products = ref[0], setProducts = ref[1];\n    var ref1 = (0,_src_hooks_useFetch__WEBPACK_IMPORTED_MODULE_4__.useFetch)(url), items = ref1.data, httpConfig = ref1.httpConfig, loading = ref1.loading, error = ref1.error;\n    var renderList = _asyncToGenerator(_Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n        var productComponents;\n        return _Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n            while(1)switch(_ctx1.prev = _ctx1.next){\n                case 0:\n                    if (!Array.isArray(items)) {\n                        _ctx1.next = 6;\n                        break;\n                    }\n                    console.log(13);\n                    _ctx1.next = 4;\n                    return Promise.all(items.map(_asyncToGenerator(_Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(product) {\n                        return _Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    return _ctx.abrupt(\"return\", /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        name: product.name,\n                                        description: product.description,\n                                        price: product.price,\n                                        __source: {\n                                            fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                                            lineNumber: 16,\n                                            columnNumber: 11\n                                        },\n                                        __self: this\n                                    }, product.id));\n                                case 1:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee, this);\n                    }).bind(this)).bind(this)));\n                case 4:\n                    productComponents = _ctx1.sent;\n                    return _ctx1.abrupt(\"return\", productComponents);\n                case 6:\n                    return _ctx1.abrupt(\"return\", null);\n                case 7:\n                case \"end\":\n                    return _ctx1.stop();\n            }\n        }, _callee1, this);\n    }).bind(_this)).bind(_this);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        console.log(30);\n        var renderAndSetProducts = _asyncToGenerator(_Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var renderedProducts;\n            return _Users_erbertrotondano_Projetos_join_front_end_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!items) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return renderList();\n                    case 3:\n                        renderedProducts = _ctx.sent;\n                        setProducts(renderedProducts);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        renderAndSetProducts();\n        console.log(products);\n    }, [\n        items\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        container: true,\n        spacing: 3,\n        mt: 4,\n        __source: {\n            fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n            lineNumber: 43,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                    lineNumber: 44,\n                    columnNumber: 19\n                },\n                __self: _this,\n                children: \"Carregando dados...\"\n            }),\n            error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: error\n            }),\n            !error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                item: true,\n                xs: 12,\n                md: 12,\n                pt: 4,\n                __source: {\n                    fileName: \"/Users/erbertrotondano/Projetos/join/front-end/src/views/products/ProductBasic.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: products\n            })\n        ]\n    }));\n};\n_s(ProductBasic, \"lynaPEFznrhMw4OdnT8eophLKe4=\", false, function() {\n    return [\n        _src_hooks_useFetch__WEBPACK_IMPORTED_MODULE_4__.useFetch\n    ];\n});\n_c = ProductBasic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductBasic);\nvar _c;\n$RefreshReg$(_c, \"ProductBasic\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvcHJvZHVjdHMvUHJvZHVjdEJhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTTtBQUNNO0FBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRELEdBQUssQ0FBQ0ssWUFBWSxHQUFHLFFBQ3JCLEdBRDJCLENBQUM7O0lBQzFCLEdBQUssQ0FBQ0MsR0FBRyxHQUFHLENBQXFDO0lBQ2pELEdBQUssQ0FBMkJKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBcENLLFFBQVEsR0FBaUJMLEdBQVksS0FBM0JNLFdBQVcsR0FBSU4sR0FBWTtJQUM1QyxHQUFLLENBQStDRSxJQUFhLEdBQWJBLDZEQUFRLENBQUNFLEdBQUcsR0FBbERHLEtBQUssR0FBaUNMLElBQWEsQ0FBekRNLElBQUksRUFBU0MsVUFBVSxHQUFxQlAsSUFBYSxDQUE1Q08sVUFBVSxFQUFFQyxPQUFPLEdBQVlSLElBQWEsQ0FBaENRLE9BQU8sRUFBRUMsS0FBSyxHQUFLVCxJQUFhLENBQXZCUyxLQUFLO0lBRS9DLEdBQUssQ0FBQ0MsVUFBVSw4S0FBRyxRQUFRLFlBQUksQ0FBQztZQUd0QkMsaUJBQWlCOzs7O3lCQUZyQkMsS0FBSyxDQUFDQyxPQUFPLENBQUNSLEtBQUs7Ozs7b0JBQ3RCUyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxFQUFFOzsyQkFDbUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUN6Q1osS0FBSyxDQUFDYSxHQUFHLDRLQUFDLFFBQVEsU0FBREMsT0FBTzs7OztzSUFDckJ2QixnREFBTzt3Q0FFTndCLElBQUksRUFBRUQsT0FBTyxDQUFDQyxJQUFJO3dDQUNsQkMsV0FBVyxFQUFFRixPQUFPLENBQUNFLFdBQVc7d0NBQ2hDQyxLQUFLLEVBQUVILE9BQU8sQ0FBQ0csS0FBSzs7Ozs7Ozt1Q0FIZkgsT0FBTyxDQUFDSSxFQUFFOzs7Ozs7OztvQkFIZlosaUJBQWlCO2tEQVVoQkEsaUJBQWlCOztrREFFbkIsSUFBSTs7Ozs7O0lBQ2IsQ0FBQztJQUVEWixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNoQmUsT0FBTyxDQUFDQyxHQUFHLENBQUMsRUFBRTtRQUNiLEdBQUssQ0FBQ1Msb0JBQW9CLDhLQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUVoQ0MsZ0JBQWdCOzs7OzZCQURwQnBCLEtBQUs7Ozs7OytCQUN3QkssVUFBVTs7d0JBQW5DZSxnQkFBZ0I7d0JBQ3RCckIsV0FBVyxDQUFDcUIsZ0JBQWdCOzs7Ozs7UUFFaEMsQ0FBQztRQUVERCxvQkFBb0I7UUFDcEJWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixRQUFRO0lBQ3RCLENBQUMsRUFBRSxDQUFDRTtRQUFBQSxLQUFLO0lBQUEsQ0FBQztJQUVWLE1BQU0sdUVBQ0hSLDBEQUFJO1FBQUM2QixTQUFTO1FBQUNDLE9BQU8sRUFBRSxDQUFDO1FBQUVDLEVBQUUsRUFBRSxDQUFDOzs7Ozs7OztZQUM5QnBCLE9BQU8seUVBQUtxQixDQUFDOzs7Ozs7OzBCQUFDLENBQW1COztZQUNqQ3BCLEtBQUsseUVBQUtvQixDQUFDOzs7Ozs7OzBCQUFFcEIsS0FBSzs7YUFDakJBLEtBQUsseUVBQ0paLDBEQUFJO2dCQUFDaUMsSUFBSTtnQkFBQ0MsRUFBRSxFQUFFLEVBQUU7Z0JBQUVDLEVBQUUsRUFBRSxFQUFFO2dCQUFFQyxFQUFFLEVBQUUsQ0FBQzs7Ozs7OzswQkFDN0I5QixRQUFROzs7O0FBS25CLENBQUM7R0EvQ0tGLFlBQVk7O1FBR29DRCx5REFBUTs7O0tBSHhEQyxZQUFZO0FBaURsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy92aWV3cy9wcm9kdWN0cy9Qcm9kdWN0QmFzaWMuanM/MDU0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGZXRjaCB9IGZyb20gJy4uLy4uLy4uL3NyYy9ob29rcy91c2VGZXRjaCc7XG5cbmNvbnN0IFByb2R1Y3RCYXNpYyA9ICgpID0+IHtcbiAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwL2FwaS92MS9wcm9kdWN0c1wiO1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgeyBkYXRhOiBpdGVtcywgaHR0cENvbmZpZywgbG9hZGluZywgZXJyb3IgfSA9IHVzZUZldGNoKHVybCk7XG5cbiAgY29uc3QgcmVuZGVyTGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICBcdGNvbnNvbGUubG9nKDEzKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RDb21wb25lbnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIGl0ZW1zLm1hcChhc3luYyAocHJvZHVjdCkgPT4gKFxuICAgICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICBuYW1lPXtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHByb2R1Y3RDb21wb25lbnRzO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICBcdGNvbnNvbGUubG9nKDMwKVxuICAgIGNvbnN0IHJlbmRlckFuZFNldFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkUHJvZHVjdHMgPSBhd2FpdCByZW5kZXJMaXN0KCk7XG4gICAgICAgIHNldFByb2R1Y3RzKHJlbmRlcmVkUHJvZHVjdHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXJBbmRTZXRQcm9kdWN0cygpO1xuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcbiAgfSwgW2l0ZW1zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gbXQ9ezR9PlxuICAgICAge2xvYWRpbmcgJiYgPHA+Q2FycmVnYW5kbyBkYWRvcy4uLjwvcD59XG4gICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yfTwvcD59XG4gICAgICB7IWVycm9yICYmIChcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0gcHQ9ezR9PlxuICAgICAgICAgIHtwcm9kdWN0c31cbiAgICAgICAgPC9HcmlkPlxuICAgICAgKX1cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0QmFzaWM7XG4iXSwibmFtZXMiOlsiUHJvZHVjdCIsIkdyaWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUZldGNoIiwiUHJvZHVjdEJhc2ljIiwidXJsIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsIml0ZW1zIiwiZGF0YSIsImh0dHBDb25maWciLCJsb2FkaW5nIiwiZXJyb3IiLCJyZW5kZXJMaXN0IiwicHJvZHVjdENvbXBvbmVudHMiLCJBcnJheSIsImlzQXJyYXkiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInByb2R1Y3QiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImlkIiwicmVuZGVyQW5kU2V0UHJvZHVjdHMiLCJyZW5kZXJlZFByb2R1Y3RzIiwiY29udGFpbmVyIiwic3BhY2luZyIsIm10IiwicCIsIml0ZW0iLCJ4cyIsIm1kIiwicHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/products/ProductBasic.js\n");

/***/ })

});