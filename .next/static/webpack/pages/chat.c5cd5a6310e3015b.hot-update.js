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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var _this = this;\n    var handleNNovaMensagem = function handleNNovaMensagem() {};\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(''), 2), mensagem = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://img.wallpapersafari.com/desktop/1280/1024/82/76/PlbVW3.gif)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: true\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        listaDeMensagens.map(function(mensagemAtual) {\n                            console.log(mensagemAtual);\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: mensagemAtual\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                                lineNumber: 58,\n                                columnNumber: 19\n                            }, _this));\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem,\n                                onChange: function(event) {\n                                    var valor = event.target.value;\n                                    setMensagem(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === 'Enter') {\n                                        event.preventDefault();\n                                        setListaDeMensagens(_toConsumableArray(listaDeMensagens).concat([\n                                            mensagem\n                                        ]));\n                                        setMensagem('');\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: \"100%\",\n                                    border: \"0\",\n                                    resize: \"none\",\n                                    borderRadius: \"5px\",\n                                    padding: \"6px 8px\",\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: \"12px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"TUh7UAFFqtouUCHTmXqiZHKdgTs=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    /* console.log(\"MessageList\", props); */ return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            tag: \"li\",\n            styleSheet: {\n                borderRadius: \"5px\",\n                padding: \"6px\",\n                marginBottom: \"12px\",\n                hover: {\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        marginBottom: \"8px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                            styleSheet: {\n                                width: \"20px\",\n                                height: \"20px\",\n                                borderRadius: \"50%\",\n                                display: \"inline-block\",\n                                marginRight: \"8px\"\n                            },\n                            src: \"https://github.com/vanessametonini.png\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 164,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            tag: \"strong\",\n                            children: mensagem.de\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 174,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            styleSheet: {\n                                fontSize: \"10px\",\n                                marginLeft: \"8px\",\n                                color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                            },\n                            tag: \"span\",\n                            children: new Date().toLocaleDateString()\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 175,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 159,\n                    columnNumber: 9\n                }, this),\n                mensagem.texto\n            ]\n        }, mensagem.id, true, {\n            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n            lineNumber: 147,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n        lineNumber: 136,\n        columnNumber: 5\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNPLElBQUksR0FBR0Msa0JBQWtCOzs7Ozs7Ozs7Ozs7Z0JBR2pDaEUsUUFBUSxDQUFDaUUsS0FBSzs7V0F0Q1ZqRSxRQUFRLENBQUNrRSxFQUFFOzs7Ozs7Ozs7O0FBMEN4QixDQUFDO01BekRRdEMsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xpc3RhRGVNZW5zYWdlbnMsIHNldExpc3RhRGVNZW5zYWdlbnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlTk5vdmFNZW5zYWdlbSgpIHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vaW1nLndhbGxwYXBlcnNhZmFyaS5jb20vZGVza3RvcC8xMjgwLzEwMjQvODIvNzYvUGxiVlczLmdpZilgLFxyXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcbiAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgYm94U2hhZG93OiBcIjAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBtYXhXaWR0aDogXCI5NSVcIixcclxuICAgICAgICAgIG1heEhlaWdodDogXCI5NXZoXCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjMycHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCI4MCVcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzYwMF0sXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNZXNzYWdlTGlzdCBtZW5zYWdlbnMgLz5cclxuICAgICAgICAgIHtsaXN0YURlTWVuc2FnZW5zLm1hcCgobWVuc2FnZW1BdHVhbCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lbnNhZ2VtQXR1YWwpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIHttZW5zYWdlbUF0dWFsfVxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgIHNldE1lbnNhZ2VtKHZhbG9yKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZihldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRMaXN0YURlTWVuc2FnZW5zKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5saXN0YURlTWVuc2FnZW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnNhZ2VtXHJcbiAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE1lbnNhZ2VtKCcnKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICByZXNpemU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHggOHB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJoZWFkaW5nNVwiPkNoYXQ8L1RleHQ+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgIGNvbG9yVmFyaWFudD1cIm5ldXRyYWxcIlxyXG4gICAgICAgICAgbGFiZWw9XCJMb2dvdXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcclxuICAvKiBjb25zb2xlLmxvZyhcIk1lc3NhZ2VMaXN0XCIsIHByb3BzKTsgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICB0YWc9XCJ1bFwiXHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtbi1yZXZlcnNlXCIsXHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8VGV4dFxyXG4gICAgICAgIGtleT17bWVuc2FnZW0uaWR9XHJcbiAgICAgICAgdGFnPVwibGlcIlxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiNnB4XCIsXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTJweFwiLFxyXG4gICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI4cHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tL3ZhbmVzc2FtZXRvbmluaS5wbmdgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0IHRhZz1cInN0cm9uZ1wiPnttZW5zYWdlbS5kZX08L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdGFnPVwic3BhblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIHttZW5zYWdlbS50ZXh0b31cclxuICAgICAgPC9UZXh0PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiQnV0dG9uIiwiUmVhY3QiLCJhcHBDb25maWciLCJDaGF0UGFnZSIsImhhbmRsZU5Ob3ZhTWVuc2FnZW0iLCJ1c2VTdGF0ZSIsIm1lbnNhZ2VtIiwic2V0TWVuc2FnZW0iLCJsaXN0YURlTWVuc2FnZW5zIiwic2V0TGlzdGFEZU1lbnNhZ2VucyIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwibmV1dHJhbHMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwiTWVzc2FnZUxpc3QiLCJtZW5zYWdlbnMiLCJtYXAiLCJtZW5zYWdlbUF0dWFsIiwiY29uc29sZSIsImxvZyIsImxpIiwiYXMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWxvciIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJocmVmIiwicHJvcHMiLCJ0YWciLCJvdmVyZmxvdyIsImhvdmVyIiwic3JjIiwiZGUiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidGV4dG8iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});