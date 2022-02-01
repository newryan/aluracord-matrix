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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY1ODg4MSwiZXhwIjoxOTU5MjM0ODgxfQ.MmossIJAP3_hNxrqMys0GfS_itJm8uEOpxdBW8XqqqY';\nvar SUPABASE_URL = 'https://snnjpvszllpibnwhijwb.supabase.co';\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);\nfunction ChatPage() {\n    var handleNovaMensagem = /*\r\n    // Usuario\r\n    - Usuario digita no campo textarea\r\n    - Aperta enter para enviar\r\n    - Tem que adicionar o texto na listagem\r\n\r\n    // Dev\r\n    - [X] Campo criado\r\n    - [X] Vamos usar o onChange usa o useState (ter if pra cado seja enter pra limpar a variavel)\r\n    - [X] Lista de mensagens\r\n    */ function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            id: listaDeMensagens.length + 1,\n            de: 'vanessametonini',\n            texto: novaMensagem\n        };\n        supabaseClient;\n        setListaDeMensagens([\n            mensagem, \n        ].concat(_toConsumableArray(listaDeMensagens)));\n        setMensagem('');\n    };\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(''), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function() {\n        supabaseClient.from('mensagens').select('*').then(function(param) {\n            var data = param.data;\n            console.log('Dados da consulta', data);\n            setListaDeMensagens(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://img.wallpapersafari.com/desktop/1280/1024/82/76/PlbVW3.gif)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaDeMensagens\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                onChange: function(event) {\n                                    var valor = event.target.value;\n                                    setMensagem(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === 'Enter') {\n                                        event.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: \"100%\",\n                                    border: \"0\",\n                                    resize: \"none\",\n                                    borderRadius: \"5px\",\n                                    padding: \"6px 8px\",\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: \"12px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"5NzR+Jyf7t+pkrBZ4a9a51tLhhk=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 157,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 158,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n            lineNumber: 148,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props.listaDeMensagens);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/\".concat(mensagem.de, \".png\")\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                                lineNumber: 202,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                                lineNumber: 212,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                                lineNumber: 215,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                        lineNumber: 197,\n                        columnNumber: 23\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n                lineNumber: 185,\n                columnNumber: 15\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"G:\\\\Documentos\\\\aluracord-matrix\\\\pages\\\\chat.js\",\n        lineNumber: 172,\n        columnNumber: 5\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dDQUdkWTtvQ0FDRW9ELE1BQUFBLDZEQUFnQjtvQ0FDaEJDLFVBQVU7b0NBQ1Z6QyxLQUFLLEVBQUVwQyxTQUFTLENBQUM2QjtnQ0FDbkIsQ0FBQztnQ0FDRDBDLEdBQUcsRUFBQyxDQUFNOzBDQUVULEdBQUcsQ0FBQ087Ozs7Ozs7Ozs7OztvQkFHVnRFLFFBQVEsQ0FBQ0ssS0FBSzs7ZUF4Q1JMLFFBQVEsQ0FBQ0MsRUFBRTs7Ozs7UUEyQ2hDLENBQUM7Ozs7OztBQUlQLENBQUM7TUFoRVF1QyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQuanM/NGNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gXCJAc2t5bmV4dWkvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuXHJcbmNvbnN0IFNVUEFCQVNFX0FOT05fS0VZID0gJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp5YjJ4bElqb2lZVzV2YmlJc0ltbGhkQ0k2TVRZME16WTFPRGc0TVN3aVpYaHdJam94T1RVNU1qTTBPRGd4ZlEuTW1vc3NJSkFQM19oTnhycU15czBHZlNfaXRKbTh1RU9weGRCVzhYcXFxWSdcclxuY29uc3QgU1VQQUJBU0VfVVJMID0gJ2h0dHBzOi8vc25uanB2c3psbHBpYm53aGlqd2Iuc3VwYWJhc2UuY28nXHJcbmNvbnN0IHN1cGFiYXNlQ2xpZW50ID0gY3JlYXRlQ2xpZW50KFNVUEFCQVNFX1VSTCwgU1VQQUJBU0VfQU5PTl9LRVkpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkgeyAgICBcclxuICAgIGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xpc3RhRGVNZW5zYWdlbnMsIHNldExpc3RhRGVNZW5zYWdlbnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHN1cGFiYXNlQ2xpZW50XHJcbiAgICAgICAgICAgIC5mcm9tKCdtZW5zYWdlbnMnKVxyXG4gICAgICAgICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RhZG9zIGRhIGNvbnN1bHRhJywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VucyhkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIC8qXHJcbiAgICAvLyBVc3VhcmlvXHJcbiAgICAtIFVzdWFyaW8gZGlnaXRhIG5vIGNhbXBvIHRleHRhcmVhXHJcbiAgICAtIEFwZXJ0YSBlbnRlciBwYXJhIGVudmlhclxyXG4gICAgLSBUZW0gcXVlIGFkaWNpb25hciBvIHRleHRvIG5hIGxpc3RhZ2VtXHJcblxyXG4gICAgLy8gRGV2XHJcbiAgICAtIFtYXSBDYW1wbyBjcmlhZG9cclxuICAgIC0gW1hdIFZhbW9zIHVzYXIgbyBvbkNoYW5nZSB1c2EgbyB1c2VTdGF0ZSAodGVyIGlmIHByYSBjYWRvIHNlamEgZW50ZXIgcHJhIGxpbXBhciBhIHZhcmlhdmVsKVxyXG4gICAgLSBbWF0gTGlzdGEgZGUgbWVuc2FnZW5zXHJcbiAgICAqL1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU5vdmFNZW5zYWdlbShub3ZhTWVuc2FnZW0pIHtcclxuICAgICAgICBjb25zdCBtZW5zYWdlbSA9IHtcclxuICAgICAgICAgICAgaWQ6IGxpc3RhRGVNZW5zYWdlbnMubGVuZ3RoICsgMSxcclxuICAgICAgICAgICAgZGU6ICd2YW5lc3NhbWV0b25pbmknLFxyXG4gICAgICAgICAgICB0ZXh0bzogbm92YU1lbnNhZ2VtLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN1cGFiYXNlQ2xpZW50XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHNldExpc3RhRGVNZW5zYWdlbnMoW1xyXG4gICAgICAgICAgICBtZW5zYWdlbSxcclxuICAgICAgICAgICAgLi4ubGlzdGFEZU1lbnNhZ2VucyxcclxuICAgICAgICBdKTtcclxuICAgICAgICBzZXRNZW5zYWdlbSgnJyk7XHJcbiAgICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vaW1nLndhbGxwYXBlcnNhZmFyaS5jb20vZGVza3RvcC8xMjgwLzEwMjQvODIvNzYvUGxiVlczLmdpZilgLFxyXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcbiAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgYm94U2hhZG93OiBcIjAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBtYXhXaWR0aDogXCI5NSVcIixcclxuICAgICAgICAgIG1heEhlaWdodDogXCI5NXZoXCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjMycHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCI4MCVcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzYwMF0sXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNZXNzYWdlTGlzdCBtZW5zYWdlbnM9e2xpc3RhRGVNZW5zYWdlbnN9Lz5cclxuICAgICAgICAgIHsvKiB7bGlzdGFEZU1lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtQXR1YWwpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXttZW5zYWdlbUF0dWFsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHttZW5zYWdlbUF0dWFsLmRlfToge21lbnNhZ2VtQXR1YWwudGV4dG99XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgIH0pfSAqL31cclxuXHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgIHNldE1lbnNhZ2VtKHZhbG9yKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZihldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOb3ZhTWVuc2FnZW0obWVuc2FnZW0pOyBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICByZXNpemU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHggOHB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJoZWFkaW5nNVwiPkNoYXQ8L1RleHQ+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgIGNvbG9yVmFyaWFudD1cIm5ldXRyYWxcIlxyXG4gICAgICAgICAgbGFiZWw9XCJMb2dvdXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5saXN0YURlTWVuc2FnZW5zKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICB0YWc9XCJ1bFwiXHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtbi1yZXZlcnNlXCIsXHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMubWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17bWVuc2FnZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWc9XCJsaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7bWVuc2FnZW0uZGV9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHRhZz1cInN0cm9uZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtLmRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtLnRleHRvfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgICBcclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIkJ1dHRvbiIsIlJlYWN0IiwiYXBwQ29uZmlnIiwiY3JlYXRlQ2xpZW50IiwiU1VQQUJBU0VfQU5PTl9LRVkiLCJTVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUNsaWVudCIsIkNoYXRQYWdlIiwiaGFuZGxlTm92YU1lbnNhZ2VtIiwibm92YU1lbnNhZ2VtIiwibWVuc2FnZW0iLCJpZCIsImxpc3RhRGVNZW5zYWdlbnMiLCJsZW5ndGgiLCJkZSIsInRleHRvIiwic2V0TGlzdGFEZU1lbnNhZ2VucyIsInNldE1lbnNhZ2VtIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmcm9tIiwic2VsZWN0IiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiY29sb3IiLCJuZXV0cmFscyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwiSGVhZGVyIiwicG9zaXRpb24iLCJNZXNzYWdlTGlzdCIsIm1lbnNhZ2VucyIsImFzIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidmFsb3IiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ3aWR0aCIsImJvcmRlciIsInJlc2l6ZSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yVmFyaWFudCIsImxhYmVsIiwiaHJlZiIsInByb3BzIiwidGFnIiwib3ZlcmZsb3ciLCJtYXAiLCJob3ZlciIsInNyYyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});