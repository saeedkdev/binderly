"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboards/crypto",{

/***/ "./src/components/LogoSign/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/LogoSign/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var src_components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Link */ \"./src/components/Link/index.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar LogoWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(src_components_Link__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(param) {\n    var theme = param.theme;\n    return \"\\n        color: \".concat(theme.palette.text.primary, \";\\n        display: flex;\\n        text-decoration: none;\\n        margin: 0 0 0 3.5rem;\\n        font-weight: \").concat(theme.typography.fontWeightBold, \";\\n\");\n});\n_c = LogoWrapper;\nvar LogoSignWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(function() {\n    return \"\\n        width: auto;\\n        height: 70px;\\n        text-align: center;\\n\";\n});\n_c1 = LogoSignWrapper;\nvar LogoSignInner = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(function(param) {\n    var theme = param.theme;\n    return \"\\n        width: 16px;\\n        height: 16px;\\n        position: absolute;\\n        top: 12px;\\n        left: 12px;\\n        z-index: 5;\\n        border-radius: \".concat(theme.general.borderRadiusSm, \";\\n        background: \").concat(theme.header.background, \";\\n\");\n});\nvar TooltipWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(function(_param) /*#__PURE__*/ {\n    var className = _param.className, props = _objectWithoutProperties(_param, [\n        \"className\"\n    ]);\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tooltip, _objectSpread({}, props, {\n        classes: {\n            popper: className\n        }\n    }), void 0, false, {\n        fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, _this);\n})(function(param) {\n    var theme = param.theme;\n    var _obj;\n    return _obj = {}, _defineProperty(_obj, \"& .\".concat(_mui_material__WEBPACK_IMPORTED_MODULE_3__.tooltipClasses.tooltip), {\n        backgroundColor: theme.colors.alpha.trueWhite[100],\n        color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),\n        fontSize: theme.typography.pxToRem(12),\n        fontWeight: \"bold\",\n        borderRadius: theme.general.borderRadiusSm,\n        boxShadow: \"0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)\"\n    }), _defineProperty(_obj, \"& .\".concat(_mui_material__WEBPACK_IMPORTED_MODULE_3__.tooltipClasses.arrow), {\n        color: theme.colors.alpha.trueWhite[100]\n    }), _obj;\n});\n_c2 = TooltipWrapper;\nfunction Logo() {\n    _s();\n    var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TooltipWrapper, {\n        title: \"Binderly\",\n        arrow: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoWrapper, {\n            href: \"/\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Badge, {\n                sx: {\n                    \".MuiBadge-badge\": {\n                        fontSize: theme.typography.pxToRem(11),\n                        right: -2,\n                        top: 25\n                    }\n                },\n                overlap: \"circular\",\n                color: \"success\",\n                badgeContent: \"Beta\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoSignWrapper, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/static/images/logo/logo-no-background.png\",\n                        alt: \"Binderly\",\n                        width: 150,\n                        height: 100\n                    }, void 0, false, {\n                        fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Logo, \"VrMvFCCB9Haniz3VCRPNUiCauHs=\", false, function() {\n    return [\n        _mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme\n    ];\n});\n_c3 = Logo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"LogoWrapper\");\n$RefreshReg$(_c1, \"LogoSignWrapper\");\n$RefreshReg$(_c2, \"TooltipWrapper\");\n$RefreshReg$(_c3, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dvU2lnbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdUI7QUFDZ0I7QUFDUjs7QUFFL0IsSUFBTVEsV0FBVyxHQUFHSixxREFBTSxDQUFDRSwyREFBSSxDQUFDLENBQzlCO1FBQUdHLEtBQUssU0FBTEEsS0FBSztXQUFPLG1CQUNGLENBSVFBLE1BQStCLENBSnJDQSxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEVBQUMsaUhBSXZCLENBQWtDLE9BQ3ZELENBRHVCSCxLQUFLLENBQUNJLFVBQVUsQ0FBQ0MsY0FBYyxFQUFDLEtBQ3ZELENBQUM7Q0FBQSxDQUNBO0FBUktOLEtBQUFBLFdBQVc7QUFVakIsSUFBTU8sZUFBZSxHQUFHWCxxREFBTSxDQUFDSiw4Q0FBRyxDQUFDLENBQ2pDO1dBQU8sOEVBSVQ7Q0FBQyxDQUNBO0FBTktlLE1BQUFBLGVBQWU7QUFTckIsSUFBTUMsYUFBYSxHQUFHWixxREFBTSxDQUFDSiw4Q0FBRyxDQUFDLENBQy9CO1FBQUdTLEtBQUssU0FBTEEsS0FBSztXQUFPLG1LQU9NLENBQ0RBLE1BQXVCLENBRHBCQSxLQUFLLENBQUNRLE9BQU8sQ0FBQ0MsY0FBYyxFQUFDLHlCQUNsQyxDQUEwQixPQUM5QyxDQURzQlQsS0FBSyxDQUFDVSxNQUFNLENBQUNDLFVBQVUsRUFBQyxLQUM5QyxDQUFDO0NBQUEsQ0FDQTtBQUVELElBQU1DLGNBQWMsR0FBR2pCLHFEQUFNLENBQUMsK0JBQzVCO1FBRCtCa0IsU0FBUyxVQUFUQSxTQUFTLEVBQUtDLEtBQUs7UUFBbkJELFdBQVM7O1dBQ3hDLDhEQUFDckIsa0RBQU8sb0JBQUtzQixLQUFLO1FBQUVDLE9BQU8sRUFBRTtZQUFFQyxNQUFNLEVBQUVILFNBQVM7U0FBRTs7Ozs7YUFBSTtDQUFBLENBQ3RELENBQUM7UUFBR2IsS0FBSyxTQUFMQSxLQUFLO1FBQVEsSUFhbEI7V0Fia0IsSUFhbEIsT0FaQyxnQkFEaUIsSUFhbEIsRUFaRSxLQUFJLENBQXlCLE9BQXZCTixpRUFBc0IsQ0FBRSxFQUFHO1FBQ2hDd0IsZUFBZSxFQUFFbEIsS0FBSyxDQUFDbUIsTUFBTSxDQUFDQyxLQUFLLENBQUNDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDbERDLEtBQUssRUFBRXRCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDc0IsZUFBZSxDQUFDdkIsS0FBSyxDQUFDbUIsTUFBTSxDQUFDQyxLQUFLLENBQUNDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RUcsUUFBUSxFQUFFeEIsS0FBSyxDQUFDSSxVQUFVLENBQUNxQixPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3RDQyxVQUFVLEVBQUUsTUFBTTtRQUNsQkMsWUFBWSxFQUFFM0IsS0FBSyxDQUFDUSxPQUFPLENBQUNDLGNBQWM7UUFDMUNtQixTQUFTLEVBQ1Asa0VBQWtFO0tBQ3JFLEdBQ0QsZ0JBVmlCLElBYWxCLEVBSEUsS0FBSSxDQUF1QixPQUFyQmxDLCtEQUFvQixDQUFFLEVBQUc7UUFDOUI0QixLQUFLLEVBQUV0QixLQUFLLENBQUNtQixNQUFNLENBQUNDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDLEdBQUcsQ0FBQztLQUN6QyxHQVpnQixJQWFsQjtDQUFDLENBQUM7QUFmR1QsTUFBQUEsY0FBYztBQWlCcEIsU0FBU2tCLElBQUksR0FBRzs7SUFDZCxJQUFNOUIsS0FBSyxHQUFHSix1REFBUSxFQUFFO0lBRXhCLHFCQUNFLDhEQUFDZ0IsY0FBYztRQUNibUIsS0FBSyxFQUFDLFVBQVU7UUFDaEJGLEtBQUs7a0JBRUwsNEVBQUM5QixXQUFXO1lBQUNpQyxJQUFJLEVBQUMsR0FBRztzQkFDbkIsNEVBQUN2QyxnREFBSztnQkFDSndDLEVBQUUsRUFBRTtvQkFDRixpQkFBaUIsRUFBRTt3QkFDakJULFFBQVEsRUFBRXhCLEtBQUssQ0FBQ0ksVUFBVSxDQUFDcUIsT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFDdENTLEtBQUssRUFBRSxDQUFDLENBQUM7d0JBQ1RDLEdBQUcsRUFBRSxFQUFFO3FCQUNSO2lCQUNGO2dCQUNEQyxPQUFPLEVBQUMsVUFBVTtnQkFDbEJkLEtBQUssRUFBQyxTQUFTO2dCQUNmZSxZQUFZLEVBQUMsTUFBTTswQkFFbkIsNEVBQUMvQixlQUFlOzhCQUNkLDRFQUFDUixtREFBSzt3QkFDRndDLEdBQUcsRUFBQyw0Q0FBNEM7d0JBQ2hEQyxHQUFHLEVBQUMsVUFBVTt3QkFDZEMsS0FBSyxFQUFFLEdBQUc7d0JBQ1ZDLE1BQU0sRUFBRSxHQUFHOzs7Ozs0QkFDYjs7Ozs7d0JBQ2M7Ozs7O29CQUNaOzs7OztnQkFDSTs7Ozs7WUFDQyxDQUNqQjtDQUNIO0dBakNRWCxJQUFJOztRQUNHbEMsbURBQVE7OztBQURma0MsTUFBQUEsSUFBSTtBQW1DYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xvZ29TaWduL2luZGV4LnRzeD83ZGI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgVG9vbHRpcCxcbiAgQmFkZ2UsXG4gIFRvb2x0aXBQcm9wcyxcbiAgdG9vbHRpcENsYXNzZXMsXG4gIHN0eWxlZCxcbiAgdXNlVGhlbWVcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgTGluayBmcm9tICdzcmMvY29tcG9uZW50cy9MaW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgTG9nb1dyYXBwZXIgPSBzdHlsZWQoTGluaykoXG4gICh7IHRoZW1lIH0pID0+IGBcbiAgICAgICAgY29sb3I6ICR7dGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnl9O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMCAwIDAgMy41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkfTtcbmBcbik7XG5cbmNvbnN0IExvZ29TaWduV3JhcHBlciA9IHN0eWxlZChCb3gpKFxuICAoKSA9PiBgXG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbmBcbik7XG5cblxuY29uc3QgTG9nb1NpZ25Jbm5lciA9IHN0eWxlZChCb3gpKFxuICAoeyB0aGVtZSB9KSA9PiBgXG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLmdlbmVyYWwuYm9yZGVyUmFkaXVzU219O1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmhlYWRlci5iYWNrZ3JvdW5kfTtcbmBcbik7XG5cbmNvbnN0IFRvb2x0aXBXcmFwcGVyID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogVG9vbHRpcFByb3BzKSA9PiAoXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5hbHBoYS50cnVlV2hpdGVbMTAwXSxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5nZXRDb250cmFzdFRleHQodGhlbWUuY29sb3JzLmFscGhhLnRydWVXaGl0ZVsxMDBdKSxcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDEyKSxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5nZW5lcmFsLmJvcmRlclJhZGl1c1NtLFxuICAgIGJveFNoYWRvdzpcbiAgICAgICcwIC4ycmVtIC44cmVtIHJnYmEoNyw5LDI1LC4xOCksIDAgLjA4cmVtIC4xNXJlbSByZ2JhKDcsOSwyNSwuMTUpJ1xuICB9LFxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMuYXJyb3d9YF06IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmFscGhhLnRydWVXaGl0ZVsxMDBdXG4gIH1cbn0pKTtcblxuZnVuY3Rpb24gTG9nbygpIHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPFRvb2x0aXBXcmFwcGVyXG4gICAgICB0aXRsZT1cIkJpbmRlcmx5XCJcbiAgICAgIGFycm93XG4gICAgPlxuICAgICAgPExvZ29XcmFwcGVyIGhyZWY9XCIvXCI+XG4gICAgICAgIDxCYWRnZVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAnLk11aUJhZGdlLWJhZGdlJzoge1xuICAgICAgICAgICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDExKSxcbiAgICAgICAgICAgICAgcmlnaHQ6IC0yLFxuICAgICAgICAgICAgICB0b3A6IDI1XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvdmVybGFwPVwiY2lyY3VsYXJcIlxuICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgYmFkZ2VDb250ZW50PVwiQmV0YVwiXG4gICAgICAgID5cbiAgICAgICAgICA8TG9nb1NpZ25XcmFwcGVyPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbG9nby9sb2dvLW5vLWJhY2tncm91bmQucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJCaW5kZXJseVwiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezE1MH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Mb2dvU2lnbldyYXBwZXI+XG4gICAgICAgIDwvQmFkZ2U+XG4gICAgICA8L0xvZ29XcmFwcGVyPlxuICAgIDwvVG9vbHRpcFdyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287XG4iXSwibmFtZXMiOlsiQm94IiwiVG9vbHRpcCIsIkJhZGdlIiwidG9vbHRpcENsYXNzZXMiLCJzdHlsZWQiLCJ1c2VUaGVtZSIsIkxpbmsiLCJJbWFnZSIsIkxvZ29XcmFwcGVyIiwidGhlbWUiLCJwYWxldHRlIiwidGV4dCIsInByaW1hcnkiLCJ0eXBvZ3JhcGh5IiwiZm9udFdlaWdodEJvbGQiLCJMb2dvU2lnbldyYXBwZXIiLCJMb2dvU2lnbklubmVyIiwiZ2VuZXJhbCIsImJvcmRlclJhZGl1c1NtIiwiaGVhZGVyIiwiYmFja2dyb3VuZCIsIlRvb2x0aXBXcmFwcGVyIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJjbGFzc2VzIiwicG9wcGVyIiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImFscGhhIiwidHJ1ZVdoaXRlIiwiY29sb3IiLCJnZXRDb250cmFzdFRleHQiLCJmb250U2l6ZSIsInB4VG9SZW0iLCJmb250V2VpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiYXJyb3ciLCJMb2dvIiwidGl0bGUiLCJocmVmIiwic3giLCJyaWdodCIsInRvcCIsIm92ZXJsYXAiLCJiYWRnZUNvbnRlbnQiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/LogoSign/index.tsx\n");

/***/ })

});