"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/LogoSign/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/LogoSign/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var src_components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Link */ \"./src/components/Link/index.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar LogoWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(src_components_Link__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(param) {\n    var theme = param.theme;\n    return \"\\n        color: \".concat(theme.palette.text.primary, \";\\n        display: flex;\\n        text-decoration: none;\\n        width: 53px;\\n        margin: 0 auto;\\n        font-weight: \").concat(theme.typography.fontWeightBold, \";\\n\");\n});\n_c = LogoWrapper;\nvar LogoSignWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(function() {\n    return \"\\n        width: 52px;\\n        height: 38px;\\n\";\n});\n_c1 = LogoSignWrapper;\nvar LogoSignInner = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(function(param) {\n    var theme = param.theme;\n    return \"\\n        width: 16px;\\n        height: 16px;\\n        position: absolute;\\n        top: 12px;\\n        left: 12px;\\n        z-index: 5;\\n        border-radius: \".concat(theme.general.borderRadiusSm, \";\\n        background: \").concat(theme.header.background, \";\\n\");\n});\nvar TooltipWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(function(_param) /*#__PURE__*/ {\n    var className = _param.className, props = _objectWithoutProperties(_param, [\n        \"className\"\n    ]);\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tooltip, _objectSpread({}, props, {\n        classes: {\n            popper: className\n        }\n    }), void 0, false, {\n        fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, _this);\n})(function(param) {\n    var theme = param.theme;\n    var _obj;\n    return _obj = {}, _defineProperty(_obj, \"& .\".concat(_mui_material__WEBPACK_IMPORTED_MODULE_3__.tooltipClasses.tooltip), {\n        backgroundColor: theme.colors.alpha.trueWhite[100],\n        color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),\n        fontSize: theme.typography.pxToRem(12),\n        fontWeight: \"bold\",\n        borderRadius: theme.general.borderRadiusSm,\n        boxShadow: \"0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)\"\n    }), _defineProperty(_obj, \"& .\".concat(_mui_material__WEBPACK_IMPORTED_MODULE_3__.tooltipClasses.arrow), {\n        color: theme.colors.alpha.trueWhite[100]\n    }), _obj;\n});\n_c2 = TooltipWrapper;\nfunction Logo() {\n    _s();\n    var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TooltipWrapper, {\n        title: \"Binderly\",\n        arrow: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoWrapper, {\n            href: \"/\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Badge, {\n                sx: {\n                    \".MuiBadge-badge\": {\n                        fontSize: theme.typography.pxToRem(11),\n                        right: -2,\n                        top: 8\n                    }\n                },\n                overlap: \"circular\",\n                color: \"success\",\n                badgeContent: \"1.0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoSignWrapper, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/static/images/logo/logo-no-background.png\",\n                        alt: \"Binderly\",\n                        width: 52\n                    }, void 0, false, {\n                        fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Logo, \"VrMvFCCB9Haniz3VCRPNUiCauHs=\", false, function() {\n    return [\n        _mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme\n    ];\n});\n_c3 = Logo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"LogoWrapper\");\n$RefreshReg$(_c1, \"LogoSignWrapper\");\n$RefreshReg$(_c2, \"TooltipWrapper\");\n$RefreshReg$(_c3, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dvU2lnbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdUI7QUFDZ0I7QUFDUjs7QUFFL0IsSUFBTVEsV0FBVyxHQUFHSixxREFBTSxDQUFDRSwyREFBSSxDQUFDLENBQzlCO1FBQUdHLEtBQUssU0FBTEEsS0FBSztXQUFPLG1CQUNGLENBS1FBLE1BQStCLENBTHJDQSxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEVBQUMsaUlBS3ZCLENBQWtDLE9BQ3ZELENBRHVCSCxLQUFLLENBQUNJLFVBQVUsQ0FBQ0MsY0FBYyxFQUFDLEtBQ3ZELENBQUM7Q0FBQSxDQUNBO0FBVEtOLEtBQUFBLFdBQVc7QUFXakIsSUFBTU8sZUFBZSxHQUFHWCxxREFBTSxDQUFDSiw4Q0FBRyxDQUFDLENBQ2pDO1dBQU8saURBR1Q7Q0FBQyxDQUNBO0FBTEtlLE1BQUFBLGVBQWU7QUFRckIsSUFBTUMsYUFBYSxHQUFHWixxREFBTSxDQUFDSiw4Q0FBRyxDQUFDLENBQy9CO1FBQUdTLEtBQUssU0FBTEEsS0FBSztXQUFPLG1LQU9NLENBQ0RBLE1BQXVCLENBRHBCQSxLQUFLLENBQUNRLE9BQU8sQ0FBQ0MsY0FBYyxFQUFDLHlCQUNsQyxDQUEwQixPQUM5QyxDQURzQlQsS0FBSyxDQUFDVSxNQUFNLENBQUNDLFVBQVUsRUFBQyxLQUM5QyxDQUFDO0NBQUEsQ0FDQTtBQUVELElBQU1DLGNBQWMsR0FBR2pCLHFEQUFNLENBQUMsK0JBQzVCO1FBRCtCa0IsU0FBUyxVQUFUQSxTQUFTLEVBQUtDLEtBQUs7UUFBbkJELFdBQVM7O1dBQ3hDLDhEQUFDckIsa0RBQU8sb0JBQUtzQixLQUFLO1FBQUVDLE9BQU8sRUFBRTtZQUFFQyxNQUFNLEVBQUVILFNBQVM7U0FBRTs7Ozs7YUFBSTtDQUFBLENBQ3RELENBQUM7UUFBR2IsS0FBSyxTQUFMQSxLQUFLO1FBQVEsSUFhbEI7V0Fia0IsSUFhbEIsT0FaQyxnQkFEaUIsSUFhbEIsRUFaRSxLQUFJLENBQXlCLE9BQXZCTixpRUFBc0IsQ0FBRSxFQUFHO1FBQ2hDd0IsZUFBZSxFQUFFbEIsS0FBSyxDQUFDbUIsTUFBTSxDQUFDQyxLQUFLLENBQUNDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDbERDLEtBQUssRUFBRXRCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDc0IsZUFBZSxDQUFDdkIsS0FBSyxDQUFDbUIsTUFBTSxDQUFDQyxLQUFLLENBQUNDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RUcsUUFBUSxFQUFFeEIsS0FBSyxDQUFDSSxVQUFVLENBQUNxQixPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3RDQyxVQUFVLEVBQUUsTUFBTTtRQUNsQkMsWUFBWSxFQUFFM0IsS0FBSyxDQUFDUSxPQUFPLENBQUNDLGNBQWM7UUFDMUNtQixTQUFTLEVBQ1Asa0VBQWtFO0tBQ3JFLEdBQ0QsZ0JBVmlCLElBYWxCLEVBSEUsS0FBSSxDQUF1QixPQUFyQmxDLCtEQUFvQixDQUFFLEVBQUc7UUFDOUI0QixLQUFLLEVBQUV0QixLQUFLLENBQUNtQixNQUFNLENBQUNDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDLEdBQUcsQ0FBQztLQUN6QyxHQVpnQixJQWFsQjtDQUFDLENBQUM7QUFmR1QsTUFBQUEsY0FBYztBQWlCcEIsU0FBU2tCLElBQUksR0FBRzs7SUFDZCxJQUFNOUIsS0FBSyxHQUFHSix1REFBUSxFQUFFO0lBRXhCLHFCQUNFLDhEQUFDZ0IsY0FBYztRQUNibUIsS0FBSyxFQUFDLFVBQVU7UUFDaEJGLEtBQUs7a0JBRUwsNEVBQUM5QixXQUFXO1lBQUNpQyxJQUFJLEVBQUMsR0FBRztzQkFDbkIsNEVBQUN2QyxnREFBSztnQkFDSndDLEVBQUUsRUFBRTtvQkFDRixpQkFBaUIsRUFBRTt3QkFDakJULFFBQVEsRUFBRXhCLEtBQUssQ0FBQ0ksVUFBVSxDQUFDcUIsT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFDdENTLEtBQUssRUFBRSxDQUFDLENBQUM7d0JBQ1RDLEdBQUcsRUFBRSxDQUFDO3FCQUNQO2lCQUNGO2dCQUNEQyxPQUFPLEVBQUMsVUFBVTtnQkFDbEJkLEtBQUssRUFBQyxTQUFTO2dCQUNmZSxZQUFZLEVBQUMsS0FBSzswQkFFbEIsNEVBQUMvQixlQUFlOzhCQUNkLDRFQUFDUixtREFBSzt3QkFDRndDLEdBQUcsRUFBQyw0Q0FBNEM7d0JBQ2hEQyxHQUFHLEVBQUMsVUFBVTt3QkFDZEMsS0FBSyxFQUFFLEVBQUU7Ozs7OzRCQUNYOzs7Ozt3QkFDYzs7Ozs7b0JBQ1o7Ozs7O2dCQUNJOzs7OztZQUNDLENBQ2pCO0NBQ0g7R0FoQ1FWLElBQUk7O1FBQ0dsQyxtREFBUTs7O0FBRGZrQyxNQUFBQSxJQUFJO0FBa0NiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9nb1NpZ24vaW5kZXgudHN4PzdkYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBUb29sdGlwLFxuICBCYWRnZSxcbiAgVG9vbHRpcFByb3BzLFxuICB0b29sdGlwQ2xhc3NlcyxcbiAgc3R5bGVkLFxuICB1c2VUaGVtZVxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBMaW5rIGZyb20gJ3NyYy9jb21wb25lbnRzL0xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBMb2dvV3JhcHBlciA9IHN0eWxlZChMaW5rKShcbiAgKHsgdGhlbWUgfSkgPT4gYFxuICAgICAgICBjb2xvcjogJHt0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeX07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgd2lkdGg6IDUzcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkfTtcbmBcbik7XG5cbmNvbnN0IExvZ29TaWduV3JhcHBlciA9IHN0eWxlZChCb3gpKFxuICAoKSA9PiBgXG4gICAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgICBoZWlnaHQ6IDM4cHg7XG5gXG4pO1xuXG5cbmNvbnN0IExvZ29TaWduSW5uZXIgPSBzdHlsZWQoQm94KShcbiAgKHsgdGhlbWUgfSkgPT4gYFxuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgbGVmdDogMTJweDtcbiAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5nZW5lcmFsLmJvcmRlclJhZGl1c1NtfTtcbiAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5oZWFkZXIuYmFja2dyb3VuZH07XG5gXG4pO1xuXG5jb25zdCBUb29sdGlwV3JhcHBlciA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFRvb2x0aXBQcm9wcykgPT4gKFxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cbikpKCh7IHRoZW1lIH0pID0+ICh7XG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuYWxwaGEudHJ1ZVdoaXRlWzEwMF0sXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLmNvbG9ycy5hbHBoYS50cnVlV2hpdGVbMTAwXSksXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMiksXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuZ2VuZXJhbC5ib3JkZXJSYWRpdXNTbSxcbiAgICBib3hTaGFkb3c6XG4gICAgICAnMCAuMnJlbSAuOHJlbSByZ2JhKDcsOSwyNSwuMTgpLCAwIC4wOHJlbSAuMTVyZW0gcmdiYSg3LDksMjUsLjE1KSdcbiAgfSxcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLmFycm93fWBdOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5hbHBoYS50cnVlV2hpdGVbMTAwXVxuICB9XG59KSk7XG5cbmZ1bmN0aW9uIExvZ28oKSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxUb29sdGlwV3JhcHBlclxuICAgICAgdGl0bGU9XCJCaW5kZXJseVwiXG4gICAgICBhcnJvd1xuICAgID5cbiAgICAgIDxMb2dvV3JhcHBlciBocmVmPVwiL1wiPlxuICAgICAgICA8QmFkZ2VcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgJy5NdWlCYWRnZS1iYWRnZSc6IHtcbiAgICAgICAgICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMSksXG4gICAgICAgICAgICAgIHJpZ2h0OiAtMixcbiAgICAgICAgICAgICAgdG9wOiA4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvdmVybGFwPVwiY2lyY3VsYXJcIlxuICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgYmFkZ2VDb250ZW50PVwiMS4wXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxMb2dvU2lnbldyYXBwZXI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvL2xvZ28tbm8tYmFja2dyb3VuZC5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkJpbmRlcmx5XCJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTG9nb1NpZ25XcmFwcGVyPlxuICAgICAgICA8L0JhZGdlPlxuICAgICAgPC9Mb2dvV3JhcHBlcj5cbiAgICA8L1Rvb2x0aXBXcmFwcGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xuIl0sIm5hbWVzIjpbIkJveCIsIlRvb2x0aXAiLCJCYWRnZSIsInRvb2x0aXBDbGFzc2VzIiwic3R5bGVkIiwidXNlVGhlbWUiLCJMaW5rIiwiSW1hZ2UiLCJMb2dvV3JhcHBlciIsInRoZW1lIiwicGFsZXR0ZSIsInRleHQiLCJwcmltYXJ5IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRCb2xkIiwiTG9nb1NpZ25XcmFwcGVyIiwiTG9nb1NpZ25Jbm5lciIsImdlbmVyYWwiLCJib3JkZXJSYWRpdXNTbSIsImhlYWRlciIsImJhY2tncm91bmQiLCJUb29sdGlwV3JhcHBlciIsImNsYXNzTmFtZSIsInByb3BzIiwiY2xhc3NlcyIsInBvcHBlciIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJhbHBoYSIsInRydWVXaGl0ZSIsImNvbG9yIiwiZ2V0Q29udHJhc3RUZXh0IiwiZm9udFNpemUiLCJweFRvUmVtIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImFycm93IiwiTG9nbyIsInRpdGxlIiwiaHJlZiIsInN4IiwicmlnaHQiLCJ0b3AiLCJvdmVybGFwIiwiYmFkZ2VDb250ZW50Iiwic3JjIiwiYWx0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/LogoSign/index.tsx\n");

/***/ })

});