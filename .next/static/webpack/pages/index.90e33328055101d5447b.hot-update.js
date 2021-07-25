self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_www2_rafaelschwantes_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_MainGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/MainGrid */ "./src/components/MainGrid/index.js");
/* harmony import */ var _src_components_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Box */ "./src/components/Box/index.js");
/* harmony import */ var _src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/lib/AlurakutCommons */ "./src/lib/AlurakutCommons.js");
/* harmony import */ var _src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/ProfileRelations */ "./src/components/ProfileRelations/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\www2\\rafaelschwantes\\pages\\index.js",
    _s = $RefreshSig$();







function ProfileSidebar(propriedades) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_4__.default, {
    as: "aside",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "https://github.com/".concat(propriedades.githubUser, ".png"),
      style: {
        borderRadius: '100px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "boxLink",
        href: "https://github.com/".concat(propriedades.githubUser),
        target: "_blank",
        children: ["@", propriedades.githubUser]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_5__.AlurakutProfileSidebarMenuDefault, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = ProfileSidebar;

function ProfileRelationsBox(propriedades) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_6__.ProfileRelationsBoxWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "smallTitle",
      children: [propriedades.title, " (", propriedades.items.length, ")"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_c2 = ProfileRelationsBox;
function Home() {
  _s();

  var _this = this;

  var usuarioGithub = 'rafaelschwantes';
  console.log('teste1:', usuarioGithub);
  console.log('teste2:', "https://api.github.com/users/".concat(usuarioGithub));

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]),
      _React$useState2 = (0,C_www2_rafaelschwantes_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      comunidades = _React$useState2[0],
      setComunidades = _React$useState2[1]; // const comunidades = comunidades[0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];
  // const comunidades = ['Alurakut'];


  var pessoasFavoritas = [];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]),
      _React$useState4 = (0,C_www2_rafaelschwantes_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      seguidores = _React$useState4[0],
      setSeguidores = _React$useState4[1]; // 0 - Pegar o array de dados do github 


  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    // GET
    fetch('https://api.github.com/users/rafaelschwantes/followers').then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    }).then(function (respostaCompleta) {
      setSeguidores(respostaCompleta);
    }); // API GraphQL

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '2fd75aada8cd9c023063811bb6ef6c',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "query": "query {\n        allCommunities {\n          id \n          title\n          imageUrl\n          creatorSlug\n        }\n      }"
      })
    }).then(function (response) {
      return response.json();
    }) // Pega o retorno do response.json() e já retorna
    .then(function (respostaCompleta) {
      var comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
      console.log(comunidadesVindasDoDato);
      setComunidades(comunidadesVindasDoDato);
    }); // .then(function (response) {
    //   return response.json()
    // })
  }, []);

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]),
      _React$useState6 = (0,C_www2_rafaelschwantes_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState5, 2),
      myinfo = _React$useState6[0],
      setMyinfo = _React$useState6[1]; // 0 - Pegar o array de dados do github 


  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    // GET
    fetch('https://api.github.com/users/rafaelschwantes').then(function (respostaDoServidorMyinfo) {
      return respostaDoServidorMyinfo.json();
    }).then(function (respostaCompletaMyinfo) {
      setMyinfo(respostaCompletaMyinfo);
    }); // .then(function (response) {
    //   return response.json()
    // })
  }, []);
  console.log('Informações antes do return', myinfo); // 1 - Criar um box que vai ter um map, baseado nos items do array
  // que pegamos do GitHub

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_5__.AlurakutMenu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainGrid__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileArea",
        style: {
          gridArea: 'profileArea'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSidebar, {
          githubUser: usuarioGithub
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "welcomeArea",
        style: {
          gridArea: 'welcomeArea'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_4__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "title subPageTitle",
            children: myinfo.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: myinfo.bio
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "inConstruction",
            children: "IT professional for 20 years, with a degree in Systems Analysis and Development. My professional life includes several branches of computer science, beginning with the degree, parallel to the area of technical support, and consolidating in the area of development, area in which I found my true professional passion. I am currently focused on web development, working with the PHP language, JavaScript, Python and feeling comfortable to work with any other language, depending on the need and structure of the project."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "inConstruction",
            children: ["Blog: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://www.programadorxpto.com",
              target: "_blank",
              children: "programadorxpto.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 49
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_5__.OrkutNostalgicIconSet, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_4__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "title subPageTitle",
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Site Digita Rio Inform\xE1tica"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "inConstruction",
            children: ["Link: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://www.digitarioinformatica.com/",
              target: "_blank",
              children: "digitarioinformatica"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "regular",
            children: "Uma ag\xEAncia Web para cria\xE7\xE3o de Sites e solu\xE7\xF5es digitais, com 23 anos de experi\xEAncia na entrega de solu\xE7\xF5es tecnol\xF3gica, ajudando outras empresas e profissionais liberais a aumentarem seus faturamentos e visibilidade na internet."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Site Programador XPTO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "inConstruction",
            children: ["Link: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://www.programadorxpto.com/",
              target: "_blank",
              children: "programadorxpto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "inConstruction",
            children: "O objetivo deste projeto \xE9 entregar conte\xFAdo sobre programa\xE7\xE3o de forma did\xE1tica, clara e objetiva."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileRelationsArea",
        style: {
          gridArea: 'profileRelationsArea'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_6__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Last articles (", comunidades.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "inConstruction",
            children: "... under construction"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_6__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Last projects (", comunidades.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "inConstruction",
            children: "... under construction"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_6__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Programming language (", comunidades.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: comunidades.map(function (itemAtual) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "/communities/".concat(itemAtual.id),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: itemAtual.imageUrl
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 21
                }, _this)
              }, itemAtual.id, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "xT6XGhqRjGsgihXUm5MvdSpN5qE=");

_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "ProfileSidebar");
$RefreshReg$(_c2, "ProfileRelationsBox");
$RefreshReg$(_c3, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZVNpZGViYXIiLCJwcm9wcmllZGFkZXMiLCJnaXRodWJVc2VyIiwiYm9yZGVyUmFkaXVzIiwiUHJvZmlsZVJlbGF0aW9uc0JveCIsInRpdGxlIiwiaXRlbXMiLCJsZW5ndGgiLCJIb21lIiwidXN1YXJpb0dpdGh1YiIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsImNvbXVuaWRhZGVzIiwic2V0Q29tdW5pZGFkZXMiLCJwZXNzb2FzRmF2b3JpdGFzIiwic2VndWlkb3JlcyIsInNldFNlZ3VpZG9yZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb3N0YURvU2Vydmlkb3IiLCJqc29uIiwicmVzcG9zdGFDb21wbGV0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiY29tdW5pZGFkZXNWaW5kYXNEb0RhdG8iLCJkYXRhIiwiYWxsQ29tbXVuaXRpZXMiLCJteWluZm8iLCJzZXRNeWluZm8iLCJyZXNwb3N0YURvU2Vydmlkb3JNeWluZm8iLCJyZXNwb3N0YUNvbXBsZXRhTXlpbmZvIiwiZ3JpZEFyZWEiLCJuYW1lIiwiYmlvIiwibWFwIiwiaXRlbUF0dWFsIiwiaWQiLCJpbWFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxZQUF4QixFQUFzQztBQUNwQyxzQkFDRSw4REFBQyx3REFBRDtBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLCtCQUF3QkEsWUFBWSxDQUFDQyxVQUFyQyxTQUFSO0FBQStELFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixl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QTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTbUMsU0FBUyxDQUFDQyxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBUUQsYUFUQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9GRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBdUpEOztHQTFPdUJqQyxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkwZTMzMzI4MDU1MTAxZDU0NDdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbkdyaWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTWFpbkdyaWQnXHJcbmltcG9ydCBCb3ggZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQm94J1xyXG5pbXBvcnQgeyBBbHVyYWt1dE1lbnUsIEFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdCwgT3JrdXROb3N0YWxnaWNJY29uU2V0IH0gZnJvbSAnLi4vc3JjL2xpYi9BbHVyYWt1dENvbW1vbnMnO1xyXG5pbXBvcnQgeyBQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlciB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVSZWxhdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZVNpZGViYXIocHJvcHJpZWRhZGVzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJhc2lkZVwiPlxyXG4gICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb3ByaWVkYWRlcy5naXRodWJVc2VyfS5wbmdgfSBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICcxMDBweCcgfX0gLz5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIFxyXG4gICAgICA8cD5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJib3hMaW5rXCIgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb3ByaWVkYWRlcy5naXRodWJVc2VyfWB9IHRhcmdldD1cIl9ibGFua1wiID5cclxuICAgICAgICAgIEB7cHJvcHJpZWRhZGVzLmdpdGh1YlVzZXJ9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9wPlxyXG4gICAgICA8aHIgLz5cclxuXHJcbiAgICAgIDxBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQgLz5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gUHJvZmlsZVJlbGF0aW9uc0JveChwcm9wcmllZGFkZXMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwic21hbGxUaXRsZVwiPlxyXG4gICAgICAgIHtwcm9wcmllZGFkZXMudGl0bGV9ICh7cHJvcHJpZWRhZGVzLml0ZW1zLmxlbmd0aH0pXHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7Lyoge3NlZ3VpZG9yZXMubWFwKChpdGVtQXR1YWwpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW1BdHVhbH0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2l0ZW1BdHVhbH0ucG5nYH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbUF0dWFsLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW1BdHVhbC50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfSAqL31cclxuICAgICAgPC91bD5cclxuICAgIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBcclxuICBjb25zdCB1c3VhcmlvR2l0aHViID0gJ3JhZmFlbHNjaHdhbnRlcyc7XHJcbiAgY29uc29sZS5sb2coJ3Rlc3RlMTonLCB1c3VhcmlvR2l0aHViKTtcclxuICBjb25zb2xlLmxvZygndGVzdGUyOicsIGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXN1YXJpb0dpdGh1Yn1gKTtcclxuICBcclxuXHJcblxyXG5cclxuXHJcbiAgY29uc3QgW2NvbXVuaWRhZGVzLCBzZXRDb211bmlkYWRlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgLy8gY29uc3QgY29tdW5pZGFkZXMgPSBjb211bmlkYWRlc1swXTtcclxuICAvLyBjb25zdCBhbHRlcmFkb3JEZUNvbXVuaWRhZGVzL3NldENvbXVuaWRhZGVzID0gY29tdW5pZGFkZXNbMV07XHJcbiAgLy8gY29uc3QgY29tdW5pZGFkZXMgPSBbJ0FsdXJha3V0J107XHJcbiAgY29uc3QgcGVzc29hc0Zhdm9yaXRhcyA9IFtcclxuICAgIFxyXG4gIF1cclxuICBjb25zdCBbc2VndWlkb3Jlcywgc2V0U2VndWlkb3Jlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgLy8gMCAtIFBlZ2FyIG8gYXJyYXkgZGUgZGFkb3MgZG8gZ2l0aHViIFxyXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbigpIHtcclxuICAgIC8vIEdFVFxyXG4gICAgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvcmFmYWVsc2Nod2FudGVzL2ZvbGxvd2VycycpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9zdGFEb1NlcnZpZG9yKSB7XHJcbiAgICAgIHJldHVybiByZXNwb3N0YURvU2Vydmlkb3IuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3Bvc3RhQ29tcGxldGEpIHtcclxuICAgICAgc2V0U2VndWlkb3JlcyhyZXNwb3N0YUNvbXBsZXRhKTtcclxuICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAvLyBBUEkgR3JhcGhRTFxyXG4gICAgZmV0Y2goJ2h0dHBzOi8vZ3JhcGhxbC5kYXRvY21zLmNvbS8nLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnMmZkNzVhYWRhOGNkOWMwMjMwNjM4MTFiYjZlZjZjJyxcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXCJxdWVyeVwiOiBgcXVlcnkge1xyXG4gICAgICAgIGFsbENvbW11bml0aWVzIHtcclxuICAgICAgICAgIGlkIFxyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIGltYWdlVXJsXHJcbiAgICAgICAgICBjcmVhdG9yU2x1Z1xyXG4gICAgICAgIH1cclxuICAgICAgfWAgfSlcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gUGVnYSBvIHJldG9ybm8gZG8gcmVzcG9uc2UuanNvbigpIGUgasOhIHJldG9ybmFcclxuICAgIC50aGVuKChyZXNwb3N0YUNvbXBsZXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbXVuaWRhZGVzVmluZGFzRG9EYXRvID0gcmVzcG9zdGFDb21wbGV0YS5kYXRhLmFsbENvbW11bml0aWVzO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb211bmlkYWRlc1ZpbmRhc0RvRGF0bylcclxuICAgICAgc2V0Q29tdW5pZGFkZXMoY29tdW5pZGFkZXNWaW5kYXNEb0RhdG8pXHJcbiAgICB9KVxyXG4gICAgLy8gLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvLyAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgIC8vIH0pXHJcblxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBbbXlpbmZvLCBzZXRNeWluZm9dID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIC8vIDAgLSBQZWdhciBvIGFycmF5IGRlIGRhZG9zIGRvIGdpdGh1YiBcclxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBHRVRcclxuICAgIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3JhZmFlbHNjaHdhbnRlcycpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9zdGFEb1NlcnZpZG9yTXlpbmZvKSB7XHJcbiAgICAgIHJldHVybiByZXNwb3N0YURvU2Vydmlkb3JNeWluZm8uanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3Bvc3RhQ29tcGxldGFNeWluZm8pIHtcclxuICAgICAgc2V0TXlpbmZvKHJlc3Bvc3RhQ29tcGxldGFNeWluZm8pO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgLy8gfSlcclxuXHJcbiAgfSwgW10pXHJcbiAgY29uc29sZS5sb2coJ0luZm9ybWHDp8O1ZXMgYW50ZXMgZG8gcmV0dXJuJywgbXlpbmZvKTtcclxuXHJcbiAgLy8gMSAtIENyaWFyIHVtIGJveCBxdWUgdmFpIHRlciB1bSBtYXAsIGJhc2VhZG8gbm9zIGl0ZW1zIGRvIGFycmF5XHJcbiAgLy8gcXVlIHBlZ2Ftb3MgZG8gR2l0SHViXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBbHVyYWt1dE1lbnUgLz5cclxuICAgICAgPE1haW5HcmlkPlxyXG4gICAgICAgIHsvKiA8Qm94IHN0eWxlPVwiZ3JpZC1hcmVhOiBwcm9maWxlQXJlYTtcIj4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlQXJlYVwiIHN0eWxlPXt7IGdyaWRBcmVhOiAncHJvZmlsZUFyZWEnIH19PlxyXG4gICAgICAgICAgPFByb2ZpbGVTaWRlYmFyIGdpdGh1YlVzZXI9e3VzdWFyaW9HaXRodWJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lQXJlYVwiIHN0eWxlPXt7IGdyaWRBcmVhOiAnd2VsY29tZUFyZWEnIH19PlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIHN1YlBhZ2VUaXRsZVwiPlxyXG4gICAgICAgICAgICB7bXlpbmZvLm5hbWV9IFxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cD57bXlpbmZvLmJpb308L3A+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluQ29uc3RydWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgSVQgcHJvZmVzc2lvbmFsIGZvciAyMCB5ZWFycywgd2l0aCBhIGRlZ3JlZSBpbiBTeXN0ZW1zIEFuYWx5c2lzIGFuZCBEZXZlbG9wbWVudC4gTXkgcHJvZmVzc2lvbmFsIGxpZmUgaW5jbHVkZXMgc2V2ZXJhbCBicmFuY2hlcyBvZiBjb21wdXRlciBzY2llbmNlLCBiZWdpbm5pbmcgd2l0aCB0aGUgZGVncmVlLCBwYXJhbGxlbCB0byB0aGUgYXJlYSBvZiB0ZWNobmljYWwgc3VwcG9ydCwgYW5kIGNvbnNvbGlkYXRpbmcgaW4gdGhlIGFyZWEgb2YgZGV2ZWxvcG1lbnQsIGFyZWEgaW4gd2hpY2ggSSBmb3VuZCBteSB0cnVlIHByb2Zlc3Npb25hbCBwYXNzaW9uLiBJIGFtIGN1cnJlbnRseSBmb2N1c2VkIG9uIHdlYiBkZXZlbG9wbWVudCwgd29ya2luZyB3aXRoIHRoZSBQSFAgbGFuZ3VhZ2UsIEphdmFTY3JpcHQsIFB5dGhvbiBhbmQgZmVlbGluZyBjb21mb3J0YWJsZSB0byB3b3JrIHdpdGggYW55IG90aGVyIGxhbmd1YWdlLCBkZXBlbmRpbmcgb24gdGhlIG5lZWQgYW5kIHN0cnVjdHVyZSBvZiB0aGUgcHJvamVjdC5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbkNvbnN0cnVjdGlvblwiPkJsb2c6IDxhIGhyZWY9XCJodHRwczovL3d3dy5wcm9ncmFtYWRvcnhwdG8uY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgPnByb2dyYW1hZG9yeHB0by5jb208L2E+PC9wPlxyXG4gICAgICAgICAgICA8T3JrdXROb3N0YWxnaWNJY29uU2V0IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBzdWJQYWdlVGl0bGVcIj5cclxuICAgICAgICAgICAgUHJvamVjdHNcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxwPlNpdGUgRGlnaXRhIFJpbyBJbmZvcm3DoXRpY2E8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5Db25zdHJ1Y3Rpb25cIj5cclxuICAgICAgICAgICAgICBMaW5rOiA8YSBocmVmPSdodHRwczovL3d3dy5kaWdpdGFyaW9pbmZvcm1hdGljYS5jb20vJyB0YXJnZXQ9XCJfYmxhbmtcIj5kaWdpdGFyaW9pbmZvcm1hdGljYTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVndWxhclwiPlxyXG4gICAgICAgICAgICBVbWEgYWfDqm5jaWEgV2ViIHBhcmEgY3JpYcOnw6NvIGRlIFNpdGVzIGUgc29sdcOnw7VlcyBkaWdpdGFpcywgY29tIDIzIGFub3MgZGUgZXhwZXJpw6puY2lhIG5hIGVudHJlZ2EgZGUgc29sdcOnw7VlcyB0ZWNub2zDs2dpY2EsIGFqdWRhbmRvIG91dHJhcyBlbXByZXNhcyBlIHByb2Zpc3Npb25haXMgbGliZXJhaXMgYSBhdW1lbnRhcmVtIHNldXMgZmF0dXJhbWVudG9zIGUgdmlzaWJpbGlkYWRlIG5hIGludGVybmV0LlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxwPlNpdGUgUHJvZ3JhbWFkb3IgWFBUTzwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbkNvbnN0cnVjdGlvblwiPlxyXG4gICAgICAgICAgICAgIExpbms6IDxhIGhyZWY9J2h0dHBzOi8vd3d3LnByb2dyYW1hZG9yeHB0by5jb20vJyB0YXJnZXQ9XCJfYmxhbmtcIj5wcm9ncmFtYWRvcnhwdG88L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluQ29uc3RydWN0aW9uXCI+XHJcbiAgICAgICAgICAgIE8gb2JqZXRpdm8gZGVzdGUgcHJvamV0byDDqSBlbnRyZWdhciBjb250ZcO6ZG8gc29icmUgcHJvZ3JhbWHDp8OjbyBkZSBmb3JtYSBkaWTDoXRpY2EsIGNsYXJhIGUgb2JqZXRpdmEuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgey8qPEJveD5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YlRpdGxlXCI+TyBxdWUgdm9jw6ogZGVzZWphIGZhemVyPzwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmdW5jdGlvbiBoYW5kbGVDcmlhQ29tdW5pZGFkZShlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYWRvc0RvRm9ybSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvOiAnLCBkYWRvc0RvRm9ybS5nZXQoJ3RpdGxlJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvOiAnLCBkYWRvc0RvRm9ybS5nZXQoJ2ltYWdlJykpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXVuaWRhZGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYWRvc0RvRm9ybS5nZXQoJ3RpdGxlJyksXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlX3VybDogZGFkb3NEb0Zvcm0uZ2V0KCdpbWFnZScpLFxyXG4gICAgICAgICAgICAgICAgICBjcmVhdG9yX3NsdWc6IHVzdWFyaW9HaXRodWIsXHJcbiAgICAgICAgICAgICAgICAgIC8vaW1hZ2VVcmw6IGRhZG9zRG9Gb3JtLmdldCgnaW1hZ2UnKSxcclxuICAgICAgICAgICAgICAgICAgLy9jcmVhdG9yU2x1ZzogdXN1YXJpb0dpdGh1YixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZmV0Y2goJy9hcGkvY29tdW5pZGFkZXMnLCB7XHJcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29tdW5pZGFkZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZGFkb3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhZG9zLnJlZ2lzdHJvQ3JpYWRvKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgY29tdW5pZGFkZSA9IGRhZG9zLnJlZ2lzdHJvQ3JpYWRvO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjb211bmlkYWRlc0F0dWFsaXphZGFzID0gWy4uLmNvbXVuaWRhZGVzLCBjb211bmlkYWRlXTtcclxuICAgICAgICAgICAgICAgICAgc2V0Q29tdW5pZGFkZXMoY29tdW5pZGFkZXNBdHVhbGl6YWRhcylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWFsIHZhaSBzZXIgbyBub21lIGRhIHN1YSBjb211bmlkYWRlP1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJRdWFsIHZhaSBzZXIgbyBub21lIGRhIHN1YSBjb211bmlkYWRlP1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29sb3F1ZSB1bWEgVVJMIHBhcmEgdXNhcm1vcyBkZSBjYXBhXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNvbG9xdWUgdW1hIFVSTCBwYXJhIHVzYXJtb3MgZGUgY2FwYVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgQ3JpYXIgY29tdW5pZGFkZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L0JveD4qL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVSZWxhdGlvbnNBcmVhXCIgc3R5bGU9e3sgZ3JpZEFyZWE6ICdwcm9maWxlUmVsYXRpb25zQXJlYScgfX0+XHJcbiAgICAgICAgICB7Lyo8UHJvZmlsZVJlbGF0aW9uc0JveCB0aXRsZT1cIlNlZ3VpZG9yZXNcIiBpdGVtcz17c2VndWlkb3Jlc30gLz4qL31cclxuICAgICAgICAgIDxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNtYWxsVGl0bGVcIj5cclxuICAgICAgICAgICAgICBMYXN0IGFydGljbGVzICh7Y29tdW5pZGFkZXMubGVuZ3RofSlcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5Db25zdHJ1Y3Rpb25cIj4uLi4gdW5kZXIgY29uc3RydWN0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgPC9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cclxuICAgICAgICAgIDxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNtYWxsVGl0bGVcIj5cclxuICAgICAgICAgICAgICBMYXN0IHByb2plY3RzICh7Y29tdW5pZGFkZXMubGVuZ3RofSlcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5Db25zdHJ1Y3Rpb25cIj4uLi4gdW5kZXIgY29uc3RydWN0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgPC9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cclxuICAgICAgICAgIDxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNtYWxsVGl0bGVcIj5cclxuICAgICAgICAgICAgUHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgKHtjb211bmlkYWRlcy5sZW5ndGh9KVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge2NvbXVuaWRhZGVzLm1hcCgoaXRlbUF0dWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtQXR1YWwuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvY29tbXVuaXRpZXMvJHtpdGVtQXR1YWwuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbUF0dWFsLmltYWdlVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW1BdHVhbC50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cclxuICAgICAgICAgIHsvKjxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNtYWxsVGl0bGVcIj5cclxuICAgICAgICAgICAgICBQZXNzb2FzIGRhIGNvbXVuaWRhZGUgKHtwZXNzb2FzRmF2b3JpdGFzLmxlbmd0aH0pXHJcbiAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge3Blc3NvYXNGYXZvcml0YXMubWFwKChpdGVtQXR1YWwpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW1BdHVhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC91c2Vycy8ke2l0ZW1BdHVhbH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7aXRlbUF0dWFsfS5wbmdgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW1BdHVhbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L1Byb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPiovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01haW5HcmlkPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==