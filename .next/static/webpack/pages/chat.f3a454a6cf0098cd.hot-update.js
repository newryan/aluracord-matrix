"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(''), 2), mensagem = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://img.wallpapersafari.com/desktop/1280/1024/82/76/PlbVW3.gif)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: true\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        listaDeMensagens.map(function(mensagemAtual) {\n                            console.log(mensagemAtual);\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: mensagemAtual\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                                lineNumber: 56,\n                                columnNumber: 19\n                            }, _this));\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem,\n                                onChange: function(event) {\n                                    var valor = event.target.value;\n                                    setMensagem(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === 'Enter') {\n                                        event.preventD;\n                                        console.log(event);\n                                        setListaDeMensagens(_toConsumableArray(listaDeMensagens).concat([\n                                            mensagem\n                                        ]));\n                                        setMensagem('');\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: \"100%\",\n                                    border: \"0\",\n                                    resize: \"none\",\n                                    borderRadius: \"5px\",\n                                    padding: \"6px 8px\",\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: \"12px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"TUh7UAFFqtouUCHTmXqiZHKdgTs=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    /* console.log(\"MessageList\", props); */ return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            tag: \"li\",\n            styleSheet: {\n                borderRadius: \"5px\",\n                padding: \"6px\",\n                marginBottom: \"12px\",\n                hover: {\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        marginBottom: \"8px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                            styleSheet: {\n                                width: \"20px\",\n                                height: \"20px\",\n                                borderRadius: \"50%\",\n                                display: \"inline-block\",\n                                marginRight: \"8px\"\n                            },\n                            src: \"https://github.com/vanessametonini.png\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 163,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            tag: \"strong\",\n                            children: mensagem.de\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 173,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            styleSheet: {\n                                fontSize: \"10px\",\n                                marginLeft: \"8px\",\n                                color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                            },\n                            tag: \"span\",\n                            children: new Date().toLocaleDateString()\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 174,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 158,\n                    columnNumber: 9\n                }, this),\n                mensagem.texto\n            ]\n        }, mensagem.id, true, {\n            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n            lineNumber: 146,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n        lineNumber: 135,\n        columnNumber: 5\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Z0JBR2pDaEUsUUFBUSxDQUFDaUUsS0FBSzs7V0F0Q1ZqRSxRQUFRLENBQUNrRSxFQUFFOzs7Ozs7Ozs7O0FBMEN4QixDQUFDO01BekRRdEMsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xpc3RhRGVNZW5zYWdlbnMsIHNldExpc3RhRGVNZW5zYWdlbnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly9pbWcud2FsbHBhcGVyc2FmYXJpLmNvbS9kZXNrdG9wLzEyODAvMTAyNC84Mi83Ni9QbGJWVzMuZ2lmKWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgIGJhY2tncm91bmRCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcclxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSlcIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgIG1heFdpZHRoOiBcIjk1JVwiLFxyXG4gICAgICAgICAgbWF4SGVpZ2h0OiBcIjk1dmhcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMzJweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE1lc3NhZ2VMaXN0IG1lbnNhZ2VucyAvPlxyXG4gICAgICAgICAge2xpc3RhRGVNZW5zYWdlbnMubWFwKChtZW5zYWdlbUF0dWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobWVuc2FnZW1BdHVhbCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtQXR1YWx9XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICB2YWx1ZT17bWVuc2FnZW19XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgc2V0TWVuc2FnZW0odmFsb3IpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldExpc3RhRGVNZW5zYWdlbnMoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmxpc3RhRGVNZW5zYWdlbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVuc2FnZW1cclxuICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0TWVuc2FnZW0oJycpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgc3VhIG1lbnNhZ2VtIGFxdWkuLi5cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjBcIixcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjZweCA4cHhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE2cHhcIixcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cImhlYWRpbmc1XCI+Q2hhdDwvVGV4dD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgY29sb3JWYXJpYW50PVwibmV1dHJhbFwiXHJcbiAgICAgICAgICBsYWJlbD1cIkxvZ291dFwiXHJcbiAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlTGlzdChwcm9wcykge1xyXG4gIC8qIGNvbnNvbGUubG9nKFwiTWVzc2FnZUxpc3RcIiwgcHJvcHMpOyAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHRhZz1cInVsXCJcclxuICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgIG92ZXJmbG93OiBcInNjcm9sbFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uLXJldmVyc2VcIixcclxuICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxUZXh0XHJcbiAgICAgICAga2V5PXttZW5zYWdlbS5pZH1cclxuICAgICAgICB0YWc9XCJsaVwiXHJcbiAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCI2cHhcIixcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMnB4XCIsXHJcbiAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjhweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vdmFuZXNzYW1ldG9uaW5pLnBuZ2B9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRleHQgdGFnPVwic3Ryb25nXCI+e21lbnNhZ2VtLmRlfTwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCI4cHhcIixcclxuICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0YWc9XCJzcGFuXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge25ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAge21lbnNhZ2VtLnRleHRvfVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJCdXR0b24iLCJSZWFjdCIsImFwcENvbmZpZyIsIkNoYXRQYWdlIiwidXNlU3RhdGUiLCJtZW5zYWdlbSIsInNldE1lbnNhZ2VtIiwibGlzdGFEZU1lbnNhZ2VucyIsInNldExpc3RhRGVNZW5zYWdlbnMiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJjb2xvciIsIm5ldXRyYWxzIiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInBhZGRpbmciLCJIZWFkZXIiLCJwb3NpdGlvbiIsIk1lc3NhZ2VMaXN0IiwibWVuc2FnZW5zIiwibWFwIiwibWVuc2FnZW1BdHVhbCIsImNvbnNvbGUiLCJsb2ciLCJsaSIsImFzIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidmFsb3IiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwia2V5IiwicHJldmVudEQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ3aWR0aCIsImJvcmRlciIsInJlc2l6ZSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yVmFyaWFudCIsImxhYmVsIiwiaHJlZiIsInByb3BzIiwidGFnIiwib3ZlcmZsb3ciLCJob3ZlciIsInNyYyIsImRlIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInRleHRvIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});