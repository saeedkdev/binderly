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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var src_components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Link */ \"./src/components/Link/index.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar LogoWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(src_components_Link__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(param) {\n    var theme = param.theme;\n    return \"\\n        color: \".concat(theme.palette.text.primary, \";\\n        display: flex;\\n        text-decoration: none;\\n        width: 53px;\\n        margin: 0 auto;\\n        font-weight: \").concat(theme.typography.fontWeightBold, \";\\n\");\n});\n_c = LogoWrapper;\nvar LogoSignWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box)(function() {\n    return \"\\n        width: 52px;\\n        height: 38px;\\n\";\n});\n_c1 = LogoSignWrapper;\nvar LogoSign = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box)(function(param) {\n    var theme = param.theme;\n    return \"\\n        background: \".concat(theme.general.reactFrameworkColor, \";\\n        width: 18px;\\n        height: 18px;\\n        border-radius: \").concat(theme.general.borderRadiusSm, ';\\n        position: relative;\\n        transform: rotate(45deg);\\n        top: 3px;\\n        left: 17px;\\n\\n        &:after, \\n        &:before {\\n            content: \"\";\\n            display: block;\\n            width: 18px;\\n            height: 18px;\\n            position: absolute;\\n            top: -1px;\\n            right: -20px;\\n            transform: rotate(0deg);\\n            border-radius: ').concat(theme.general.borderRadiusSm, \";\\n        }\\n\\n        &:before {\\n            background: \").concat(theme.palette.primary.main, \";\\n            right: auto;\\n            left: 0;\\n            top: 20px;\\n        }\\n\\n        &:after {\\n            background: \").concat(theme.palette.secondary.main, \";\\n        }\\n\");\n});\n_c2 = LogoSign;\nvar LogoSignInner = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box)(function(param) {\n    var theme = param.theme;\n    return \"\\n        width: 16px;\\n        height: 16px;\\n        position: absolute;\\n        top: 12px;\\n        left: 12px;\\n        z-index: 5;\\n        border-radius: \".concat(theme.general.borderRadiusSm, \";\\n        background: \").concat(theme.header.background, \";\\n\");\n});\nvar TooltipWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(function(_param) /*#__PURE__*/ {\n    var className = _param.className, props = _objectWithoutProperties(_param, [\n        \"className\"\n    ]);\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Tooltip, _objectSpread({}, props, {\n        classes: {\n            popper: className\n        }\n    }), void 0, false, {\n        fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n        lineNumber: 81,\n        columnNumber: 3\n    }, _this);\n})(function(param) {\n    var theme = param.theme;\n    var _obj;\n    return _obj = {}, _defineProperty(_obj, \"& .\".concat(_mui_material__WEBPACK_IMPORTED_MODULE_2__.tooltipClasses.tooltip), {\n        backgroundColor: theme.colors.alpha.trueWhite[100],\n        color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),\n        fontSize: theme.typography.pxToRem(12),\n        fontWeight: \"bold\",\n        borderRadius: theme.general.borderRadiusSm,\n        boxShadow: \"0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)\"\n    }), _defineProperty(_obj, \"& .\".concat(_mui_material__WEBPACK_IMPORTED_MODULE_2__.tooltipClasses.arrow), {\n        color: theme.colors.alpha.trueWhite[100]\n    }), _obj;\n});\n_c3 = TooltipWrapper;\nfunction Logo() {\n    _s();\n    var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TooltipWrapper, {\n        title: \"Binderly\",\n        arrow: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoWrapper, {\n            href: \"/\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Badge, {\n                sx: {\n                    \".MuiBadge-badge\": {\n                        fontSize: theme.typography.pxToRem(11),\n                        right: -2,\n                        top: 8\n                    }\n                },\n                overlap: \"circular\",\n                color: \"success\",\n                badgeContent: \"1.0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoSignWrapper, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoSign, {}, void 0, false, {\n                        fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n            lineNumber: 105,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/skdev/Projects/personal/binderly/frontend/src/components/LogoSign/index.tsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, this);\n}\n_s(Logo, \"VrMvFCCB9Haniz3VCRPNUiCauHs=\", false, function() {\n    return [\n        _mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c4 = Logo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"LogoWrapper\");\n$RefreshReg$(_c1, \"LogoSignWrapper\");\n$RefreshReg$(_c2, \"LogoSign\");\n$RefreshReg$(_c3, \"TooltipWrapper\");\n$RefreshReg$(_c4, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dvU2lnbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXVCO0FBQ2dCOztBQUV2QyxJQUFNTyxXQUFXLEdBQUdILHFEQUFNLENBQUNFLDJEQUFJLENBQUMsQ0FDOUI7UUFBR0UsS0FBSyxTQUFMQSxLQUFLO1dBQU8sbUJBQ0YsQ0FLUUEsTUFBK0IsQ0FMckNBLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sRUFBQyxpSUFLdkIsQ0FBa0MsT0FDdkQsQ0FEdUJILEtBQUssQ0FBQ0ksVUFBVSxDQUFDQyxjQUFjLEVBQUMsS0FDdkQsQ0FBQztDQUFBLENBQ0E7QUFUS04sS0FBQUEsV0FBVztBQVdqQixJQUFNTyxlQUFlLEdBQUdWLHFEQUFNLENBQUNKLDhDQUFHLENBQUMsQ0FDakM7V0FBTyxpREFHVDtDQUFDLENBQ0E7QUFMS2MsTUFBQUEsZUFBZTtBQU9yQixJQUFNQyxRQUFRLEdBQUdYLHFEQUFNLENBQUNKLDhDQUFHLENBQUMsQ0FDMUI7UUFBR1EsS0FBSyxTQUFMQSxLQUFLO1dBQU8sd0JBQ0csQ0FHS0EsTUFBNEIsQ0FIL0JBLEtBQUssQ0FBQ1EsT0FBTyxDQUFDQyxtQkFBbUIsRUFBQyx5RUFHakMsQ0FBK0IsQ0FnQnpCVCxNQUE0QixDQWhCaENBLEtBQUssQ0FBQ1EsT0FBTyxDQUFDRSxjQUFjLEVBQUMsdVpBZ0IzQixDQUErQixDQUloQ1YsTUFBMEIsQ0FKdkJBLEtBQUssQ0FBQ1EsT0FBTyxDQUFDRSxjQUFjLEVBQUMsOERBSWxDLENBQTZCLENBTzNCVixNQUE0QixDQVA1QkEsS0FBSyxDQUFDQyxPQUFPLENBQUNFLE9BQU8sQ0FBQ1EsSUFBSSxFQUFDLHFJQU83QixDQUErQixPQUV2RCxDQUYwQlgsS0FBSyxDQUFDQyxPQUFPLENBQUNXLFNBQVMsQ0FBQ0QsSUFBSSxFQUFDLGdCQUV2RCxDQUFDO0NBQUEsQ0FDQTtBQW5DS0osTUFBQUEsUUFBUTtBQXFDZCxJQUFNTSxhQUFhLEdBQUdqQixxREFBTSxDQUFDSiw4Q0FBRyxDQUFDLENBQy9CO1FBQUdRLEtBQUssU0FBTEEsS0FBSztXQUFPLG1LQU9NLENBQ0RBLE1BQXVCLENBRHBCQSxLQUFLLENBQUNRLE9BQU8sQ0FBQ0UsY0FBYyxFQUFDLHlCQUNsQyxDQUEwQixPQUM5QyxDQURzQlYsS0FBSyxDQUFDYyxNQUFNLENBQUNDLFVBQVUsRUFBQyxLQUM5QyxDQUFDO0NBQUEsQ0FDQTtBQUVELElBQU1DLGNBQWMsR0FBR3BCLHFEQUFNLENBQUMsK0JBQzVCO1FBRCtCcUIsU0FBUyxVQUFUQSxTQUFTLEVBQUtDLEtBQUs7UUFBbkJELFdBQVM7O1dBQ3hDLDhEQUFDeEIsa0RBQU8sb0JBQUt5QixLQUFLO1FBQUVDLE9BQU8sRUFBRTtZQUFFQyxNQUFNLEVBQUVILFNBQVM7U0FBRTs7Ozs7YUFBSTtDQUFBLENBQ3RELENBQUM7UUFBR2pCLEtBQUssU0FBTEEsS0FBSztRQUFRLElBYWxCO1dBYmtCLElBYWxCLE9BWkMsZ0JBRGlCLElBYWxCLEVBWkUsS0FBSSxDQUF5QixPQUF2QkwsaUVBQXNCLENBQUUsRUFBRztRQUNoQzJCLGVBQWUsRUFBRXRCLEtBQUssQ0FBQ3VCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQ2xEQyxLQUFLLEVBQUUxQixLQUFLLENBQUNDLE9BQU8sQ0FBQzBCLGVBQWUsQ0FBQzNCLEtBQUssQ0FBQ3VCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkVHLFFBQVEsRUFBRTVCLEtBQUssQ0FBQ0ksVUFBVSxDQUFDeUIsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN0Q0MsVUFBVSxFQUFFLE1BQU07UUFDbEJDLFlBQVksRUFBRS9CLEtBQUssQ0FBQ1EsT0FBTyxDQUFDRSxjQUFjO1FBQzFDc0IsU0FBUyxFQUNQLGtFQUFrRTtLQUNyRSxHQUNELGdCQVZpQixJQWFsQixFQUhFLEtBQUksQ0FBdUIsT0FBckJyQywrREFBb0IsQ0FBRSxFQUFHO1FBQzlCK0IsS0FBSyxFQUFFMUIsS0FBSyxDQUFDdUIsTUFBTSxDQUFDQyxLQUFLLENBQUNDLFNBQVMsQ0FBQyxHQUFHLENBQUM7S0FDekMsR0FaZ0IsSUFhbEI7Q0FBQyxDQUFDO0FBZkdULE1BQUFBLGNBQWM7QUFpQnBCLFNBQVNrQixJQUFJLEdBQUc7O0lBQ2QsSUFBTWxDLEtBQUssR0FBR0gsdURBQVEsRUFBRTtJQUV4QixxQkFDRSw4REFBQ21CLGNBQWM7UUFDYm1CLEtBQUssRUFBQyxVQUFVO1FBQ2hCRixLQUFLO2tCQUVMLDRFQUFDbEMsV0FBVztZQUFDcUMsSUFBSSxFQUFDLEdBQUc7c0JBQ25CLDRFQUFDMUMsZ0RBQUs7Z0JBQ0oyQyxFQUFFLEVBQUU7b0JBQ0YsaUJBQWlCLEVBQUU7d0JBQ2pCVCxRQUFRLEVBQUU1QixLQUFLLENBQUNJLFVBQVUsQ0FBQ3lCLE9BQU8sQ0FBQyxFQUFFLENBQUM7d0JBQ3RDUyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3dCQUNUQyxHQUFHLEVBQUUsQ0FBQztxQkFDUDtpQkFDRjtnQkFDREMsT0FBTyxFQUFDLFVBQVU7Z0JBQ2xCZCxLQUFLLEVBQUMsU0FBUztnQkFDZmUsWUFBWSxFQUFDLEtBQUs7MEJBRWxCLDRFQUFDbkMsZUFBZTs4QkFDZCw0RUFBQ0MsUUFBUTs7Ozs0QkFDRTs7Ozs7d0JBQ0s7Ozs7O29CQUNaOzs7OztnQkFDSTs7Ozs7WUFDQyxDQUNqQjtDQUNIO0dBN0JRMkIsSUFBSTs7UUFDR3JDLG1EQUFROzs7QUFEZnFDLE1BQUFBLElBQUk7QUErQmIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Mb2dvU2lnbi9pbmRleC50c3g/N2RiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIFRvb2x0aXAsXG4gIEJhZGdlLFxuICBUb29sdGlwUHJvcHMsXG4gIHRvb2x0aXBDbGFzc2VzLFxuICBzdHlsZWQsXG4gIHVzZVRoZW1lXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IExpbmsgZnJvbSAnc3JjL2NvbXBvbmVudHMvTGluayc7XG5cbmNvbnN0IExvZ29XcmFwcGVyID0gc3R5bGVkKExpbmspKFxuICAoeyB0aGVtZSB9KSA9PiBgXG4gICAgICAgIGNvbG9yOiAke3RoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5fTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB3aWR0aDogNTNweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGR9O1xuYFxuKTtcblxuY29uc3QgTG9nb1NpZ25XcmFwcGVyID0gc3R5bGVkKEJveCkoXG4gICgpID0+IGBcbiAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgIGhlaWdodDogMzhweDtcbmBcbik7XG5cbmNvbnN0IExvZ29TaWduID0gc3R5bGVkKEJveCkoXG4gICh7IHRoZW1lIH0pID0+IGBcbiAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5nZW5lcmFsLnJlYWN0RnJhbWV3b3JrQ29sb3J9O1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLmdlbmVyYWwuYm9yZGVyUmFkaXVzU219O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgIGxlZnQ6IDE3cHg7XG5cbiAgICAgICAgJjphZnRlciwgXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICAgICAgcmlnaHQ6IC0yMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLmdlbmVyYWwuYm9yZGVyUmFkaXVzU219O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn07XG4gICAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbn07XG4gICAgICAgIH1cbmBcbik7XG5cbmNvbnN0IExvZ29TaWduSW5uZXIgPSBzdHlsZWQoQm94KShcbiAgKHsgdGhlbWUgfSkgPT4gYFxuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgbGVmdDogMTJweDtcbiAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5nZW5lcmFsLmJvcmRlclJhZGl1c1NtfTtcbiAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5oZWFkZXIuYmFja2dyb3VuZH07XG5gXG4pO1xuXG5jb25zdCBUb29sdGlwV3JhcHBlciA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFRvb2x0aXBQcm9wcykgPT4gKFxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cbikpKCh7IHRoZW1lIH0pID0+ICh7XG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuYWxwaGEudHJ1ZVdoaXRlWzEwMF0sXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLmNvbG9ycy5hbHBoYS50cnVlV2hpdGVbMTAwXSksXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMiksXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuZ2VuZXJhbC5ib3JkZXJSYWRpdXNTbSxcbiAgICBib3hTaGFkb3c6XG4gICAgICAnMCAuMnJlbSAuOHJlbSByZ2JhKDcsOSwyNSwuMTgpLCAwIC4wOHJlbSAuMTVyZW0gcmdiYSg3LDksMjUsLjE1KSdcbiAgfSxcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLmFycm93fWBdOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5hbHBoYS50cnVlV2hpdGVbMTAwXVxuICB9XG59KSk7XG5cbmZ1bmN0aW9uIExvZ28oKSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxUb29sdGlwV3JhcHBlclxuICAgICAgdGl0bGU9XCJCaW5kZXJseVwiXG4gICAgICBhcnJvd1xuICAgID5cbiAgICAgIDxMb2dvV3JhcHBlciBocmVmPVwiL1wiPlxuICAgICAgICA8QmFkZ2VcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgJy5NdWlCYWRnZS1iYWRnZSc6IHtcbiAgICAgICAgICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMSksXG4gICAgICAgICAgICAgIHJpZ2h0OiAtMixcbiAgICAgICAgICAgICAgdG9wOiA4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvdmVybGFwPVwiY2lyY3VsYXJcIlxuICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgYmFkZ2VDb250ZW50PVwiMS4wXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxMb2dvU2lnbldyYXBwZXI+XG4gICAgICAgICAgICA8TG9nb1NpZ24+XG4gICAgICAgICAgICA8L0xvZ29TaWduPlxuICAgICAgICAgIDwvTG9nb1NpZ25XcmFwcGVyPlxuICAgICAgICA8L0JhZGdlPlxuICAgICAgPC9Mb2dvV3JhcHBlcj5cbiAgICA8L1Rvb2x0aXBXcmFwcGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xuIl0sIm5hbWVzIjpbIkJveCIsIlRvb2x0aXAiLCJCYWRnZSIsInRvb2x0aXBDbGFzc2VzIiwic3R5bGVkIiwidXNlVGhlbWUiLCJMaW5rIiwiTG9nb1dyYXBwZXIiLCJ0aGVtZSIsInBhbGV0dGUiLCJ0ZXh0IiwicHJpbWFyeSIsInR5cG9ncmFwaHkiLCJmb250V2VpZ2h0Qm9sZCIsIkxvZ29TaWduV3JhcHBlciIsIkxvZ29TaWduIiwiZ2VuZXJhbCIsInJlYWN0RnJhbWV3b3JrQ29sb3IiLCJib3JkZXJSYWRpdXNTbSIsIm1haW4iLCJzZWNvbmRhcnkiLCJMb2dvU2lnbklubmVyIiwiaGVhZGVyIiwiYmFja2dyb3VuZCIsIlRvb2x0aXBXcmFwcGVyIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJjbGFzc2VzIiwicG9wcGVyIiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImFscGhhIiwidHJ1ZVdoaXRlIiwiY29sb3IiLCJnZXRDb250cmFzdFRleHQiLCJmb250U2l6ZSIsInB4VG9SZW0iLCJmb250V2VpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiYXJyb3ciLCJMb2dvIiwidGl0bGUiLCJocmVmIiwic3giLCJyaWdodCIsInRvcCIsIm92ZXJsYXAiLCJiYWRnZUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/LogoSign/index.tsx\n");

/***/ })

});