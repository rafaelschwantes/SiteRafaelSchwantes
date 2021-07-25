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
            className: "regular",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZVNpZGViYXIiLCJwcm9wcmllZGFkZXMiLCJnaXRodWJVc2VyIiwiYm9yZGVyUmFkaXVzIiwiUHJvZmlsZVJlbGF0aW9uc0JveCIsInRpdGxlIiwiaXRlbXMiLCJsZW5ndGgiLCJIb21lIiwidXN1YXJpb0dpdGh1YiIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsImNvbXVuaWRhZGVzIiwic2V0Q29tdW5pZGFkZXMiLCJwZXNzb2FzRmF2b3JpdGFzIiwic2VndWlkb3JlcyIsInNldFNlZ3VpZG9yZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb3N0YURvU2Vydmlkb3IiLCJqc29uIiwicmVzcG9zdGFDb21wbGV0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiY29tdW5pZGFkZXNWaW5kYXNEb0RhdG8iLCJkYXRhIiwiYWxsQ29tbXVuaXRpZXMiLCJteWluZm8iLCJzZXRNeWluZm8iLCJyZXNwb3N0YURvU2Vydmlkb3JNeWluZm8iLCJyZXNwb3N0YUNvbXBsZXRhTXlpbmZvIiwiZ3JpZEFyZWEiLCJuYW1lIiwiYmlvIiwibWFwIiwiaXRlbUF0dWFsIiwiaWQiLCJpbWFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxZQUF4QixFQUFzQztBQUNwQyxzQkFDRSw4REFBQyx3REFBRDtBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLCtCQUF3QkEsWUFBWSxDQUFDQyxVQUFyQyxTQUFSO0FBQStELFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUlFO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFDLFNBQWI7QUFBdUIsWUFBSSwrQkFBd0JGLFlBQVksQ0FBQ0MsVUFBckMsQ0FBM0I7QUFBOEUsY0FBTSxFQUFDLFFBQXJGO0FBQUEsd0JBQ0lELFlBQVksQ0FBQ0MsVUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLGVBWUUsOERBQUMsdUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztLQWpCUUYsYzs7QUFtQlQsU0FBU0ksbUJBQVQsQ0FBNkJILFlBQTdCLEVBQTJDO0FBQ3pDLHNCQUNFLDhEQUFDLHdGQUFEO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsWUFBZDtBQUFBLGlCQUNHQSxZQUFZLENBQUNJLEtBRGhCLFFBQ3lCSixZQUFZLENBQUNLLEtBQWIsQ0FBbUJDLE1BRDVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztNQXBCUUgsbUI7QUFzQk0sU0FBU0ksSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUc3QixNQUFNQyxhQUFhLEdBQUcsaUJBQXRCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJGLGFBQXZCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVoseUNBQXVERixhQUF2RDs7QUFMNkIsd0JBV1NHLHFEQUFBLENBQWUsRUFBZixDQVhUO0FBQUE7QUFBQSxNQVd0QkMsV0FYc0I7QUFBQSxNQVdUQyxjQVhTLHdCQVk3QjtBQUNBO0FBQ0E7OztBQUNBLE1BQU1DLGdCQUFnQixHQUFHLEVBQXpCOztBQWY2Qix5QkFrQk9ILHFEQUFBLENBQWUsRUFBZixDQWxCUDtBQUFBO0FBQUEsTUFrQnRCSSxVQWxCc0I7QUFBQSxNQWtCVkMsYUFsQlUsd0JBbUI3Qjs7O0FBQ0FMLHdEQUFBLENBQWdCLFlBQVc7QUFDekI7QUFDQU0sU0FBSyxDQUFDLHdEQUFELENBQUwsQ0FDQ0MsSUFERCxDQUNNLFVBQVVDLGtCQUFWLEVBQThCO0FBQ2xDLGFBQU9BLGtCQUFrQixDQUFDQyxJQUFuQixFQUFQO0FBQ0QsS0FIRCxFQUlDRixJQUpELENBSU0sVUFBU0csZ0JBQVQsRUFBMkI7QUFDL0JMLG1CQUFhLENBQUNLLGdCQUFELENBQWI7QUFDRCxLQU5ELEVBRnlCLENBWXpCOztBQUNBSixTQUFLLENBQUMsOEJBQUQsRUFBaUM7QUFDcENLLFlBQU0sRUFBRSxNQUQ0QjtBQUVwQ0MsYUFBTyxFQUFFO0FBQ1AseUJBQWlCLGdDQURWO0FBRVAsd0JBQWdCLGtCQUZUO0FBR1Asa0JBQVU7QUFISCxPQUYyQjtBQU9wQ0MsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFO0FBQUYsT0FBZjtBQVA4QixLQUFqQyxDQUFMLENBZ0JDUixJQWhCRCxDQWdCTSxVQUFDUyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDUCxJQUFULEVBQWQ7QUFBQSxLQWhCTixFQWdCcUM7QUFoQnJDLEtBaUJDRixJQWpCRCxDQWlCTSxVQUFDRyxnQkFBRCxFQUFzQjtBQUMxQixVQUFNTyx1QkFBdUIsR0FBR1AsZ0JBQWdCLENBQUNRLElBQWpCLENBQXNCQyxjQUF0RDtBQUNBckIsYUFBTyxDQUFDQyxHQUFSLENBQVlrQix1QkFBWjtBQUNBZixvQkFBYyxDQUFDZSx1QkFBRCxDQUFkO0FBQ0QsS0FyQkQsRUFieUIsQ0FtQ3pCO0FBQ0E7QUFDQTtBQUVELEdBdkNELEVBdUNHLEVBdkNIOztBQXBCNkIseUJBNkREakIscURBQUEsQ0FBZSxFQUFmLENBN0RDO0FBQUE7QUFBQSxNQTZEdEJvQixNQTdEc0I7QUFBQSxNQTZEZEMsU0E3RGMsd0JBOEQ3Qjs7O0FBQ0FyQix3REFBQSxDQUFnQixZQUFXO0FBQ3pCO0FBQ0FNLFNBQUssQ0FBQyw4Q0FBRCxDQUFMLENBQ0NDLElBREQsQ0FDTSxVQUFVZSx3QkFBVixFQUFvQztBQUN4QyxhQUFPQSx3QkFBd0IsQ0FBQ2IsSUFBekIsRUFBUDtBQUNELEtBSEQsRUFJQ0YsSUFKRCxDQUlNLFVBQVNnQixzQkFBVCxFQUFpQztBQUNyQ0YsZUFBUyxDQUFDRSxzQkFBRCxDQUFUO0FBQ0QsS0FORCxFQUZ5QixDQVV6QjtBQUNBO0FBQ0E7QUFFRCxHQWRELEVBY0csRUFkSDtBQWVBekIsU0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVosRUFBMkNxQixNQUEzQyxFQTlFNkIsQ0FnRjdCO0FBQ0E7O0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyw2REFBRDtBQUFBLDhCQUVFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQTZCLGFBQUssRUFBRTtBQUFFSSxrQkFBUSxFQUFFO0FBQVosU0FBcEM7QUFBQSwrQkFDRSw4REFBQyxjQUFEO0FBQWdCLG9CQUFVLEVBQUUzQjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBS0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBNkIsYUFBSyxFQUFFO0FBQUUyQixrQkFBUSxFQUFFO0FBQVosU0FBcEM7QUFBQSxnQ0FDRSw4REFBQyx3REFBRDtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxvQkFBZDtBQUFBLHNCQUNDSixNQUFNLENBQUNLO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQUEsc0JBQUlMLE1BQU0sQ0FBQ007QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQU1FO0FBQUsscUJBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEYsZUFVRTtBQUFHLHFCQUFTLEVBQUMsZ0JBQWI7QUFBQSw4Q0FBb0M7QUFBRyxrQkFBSSxFQUFDLGlDQUFSO0FBQTBDLG9CQUFNLEVBQUMsUUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRixlQVdFLDhEQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBY0UsOERBQUMsd0RBQUQ7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsZUFNRTtBQUFLLHFCQUFTLEVBQUMsZ0JBQWY7QUFBQSw4Q0FDUTtBQUFHLGtCQUFJLEVBQUMsdUNBQVI7QUFBZ0Qsb0JBQU0sRUFBQyxRQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsZUFTRTtBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURixlQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkYsZUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRixlQWNFO0FBQUsscUJBQVMsRUFBQyxnQkFBZjtBQUFBLDhDQUNRO0FBQUcsa0JBQUksRUFBQyxrQ0FBUjtBQUEyQyxvQkFBTSxFQUFDLFFBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkRixlQWlCRTtBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqQkYsZUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBK0ZFO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFzQyxhQUFLLEVBQUU7QUFBRUYsa0JBQVEsRUFBRTtBQUFaLFNBQTdDO0FBQUEsZ0NBRUUsOERBQUMsd0ZBQUQ7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsWUFBZDtBQUFBLDBDQUNrQnZCLFdBQVcsQ0FBQ04sTUFEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFBTSxxQkFBUyxFQUFDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFRRSw4REFBQyx3RkFBRDtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxZQUFkO0FBQUEsMENBQ2tCTSxXQUFXLENBQUNOLE1BRDlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQU0scUJBQVMsRUFBQyxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLGVBY0UsOERBQUMsd0ZBQUQ7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsWUFBZDtBQUFBLGlEQUN1Qk0sV0FBVyxDQUFDTixNQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFBLHNCQUNHTSxXQUFXLENBQUMwQixHQUFaLENBQWdCLFVBQUNDLFNBQUQsRUFBZTtBQUM5QixrQ0FDRTtBQUFBLHVDQUNFO0FBQUcsc0JBQUkseUJBQWtCQSxTQUFTLENBQUNDLEVBQTVCLENBQVA7QUFBQSwwQ0FDRTtBQUFLLHVCQUFHLEVBQUVELFNBQVMsQ0FBQ0U7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUEsOEJBQU9GLFNBQVMsQ0FBQ25DO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQVNtQyxTQUFTLENBQUNDLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFRRCxhQVRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0ZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUF1SkQ7O0dBMU91QmpDLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGI4MDc2NTUwOGM1ODAyMzkxNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluR3JpZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NYWluR3JpZCdcclxuaW1wb3J0IEJveCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Cb3gnXHJcbmltcG9ydCB7IEFsdXJha3V0TWVudSwgQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0LCBPcmt1dE5vc3RhbGdpY0ljb25TZXQgfSBmcm9tICcuLi9zcmMvbGliL0FsdXJha3V0Q29tbW9ucyc7XHJcbmltcG9ydCB7IFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZVJlbGF0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlU2lkZWJhcihwcm9wcmllZGFkZXMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cImFzaWRlXCI+XHJcbiAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7cHJvcHJpZWRhZGVzLmdpdGh1YlVzZXJ9LnBuZ2B9IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzEwMHB4JyB9fSAvPlxyXG4gICAgICA8aHIgLz5cclxuICAgICAgXHJcbiAgICAgIDxwPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJveExpbmtcIiBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7cHJvcHJpZWRhZGVzLmdpdGh1YlVzZXJ9YH0gdGFyZ2V0PVwiX2JsYW5rXCIgPlxyXG4gICAgICAgICAgQHtwcm9wcmllZGFkZXMuZ2l0aHViVXNlcn1cclxuICAgICAgICAgXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxociAvPlxyXG5cclxuICAgICAgPEFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdCAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlUmVsYXRpb25zQm94KHByb3ByaWVkYWRlcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+XHJcbiAgICAgICAge3Byb3ByaWVkYWRlcy50aXRsZX0gKHtwcm9wcmllZGFkZXMuaXRlbXMubGVuZ3RofSlcclxuICAgICAgPC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHsvKiB7c2VndWlkb3Jlcy5tYXAoKGl0ZW1BdHVhbCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGtleT17aXRlbUF0dWFsfT5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7aXRlbUF0dWFsfS5wbmdgfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtQXR1YWwuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbUF0dWFsLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9ICovfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIFxyXG4gIGNvbnN0IHVzdWFyaW9HaXRodWIgPSAncmFmYWVsc2Nod2FudGVzJztcclxuICBjb25zb2xlLmxvZygndGVzdGUxOicsIHVzdWFyaW9HaXRodWIpO1xyXG4gIGNvbnNvbGUubG9nKCd0ZXN0ZTI6JywgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c3VhcmlvR2l0aHVifWApO1xyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuICBjb25zdCBbY29tdW5pZGFkZXMsIHNldENvbXVuaWRhZGVzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICAvLyBjb25zdCBjb211bmlkYWRlcyA9IGNvbXVuaWRhZGVzWzBdO1xyXG4gIC8vIGNvbnN0IGFsdGVyYWRvckRlQ29tdW5pZGFkZXMvc2V0Q29tdW5pZGFkZXMgPSBjb211bmlkYWRlc1sxXTtcclxuICAvLyBjb25zdCBjb211bmlkYWRlcyA9IFsnQWx1cmFrdXQnXTtcclxuICBjb25zdCBwZXNzb2FzRmF2b3JpdGFzID0gW1xyXG4gICAgXHJcbiAgXVxyXG4gIGNvbnN0IFtzZWd1aWRvcmVzLCBzZXRTZWd1aWRvcmVzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICAvLyAwIC0gUGVnYXIgbyBhcnJheSBkZSBkYWRvcyBkbyBnaXRodWIgXHJcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gR0VUXHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9yYWZhZWxzY2h3YW50ZXMvZm9sbG93ZXJzJylcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb3N0YURvU2Vydmlkb3IpIHtcclxuICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2aWRvci5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9zdGFDb21wbGV0YSkge1xyXG4gICAgICBzZXRTZWd1aWRvcmVzKHJlc3Bvc3RhQ29tcGxldGEpO1xyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIC8vIEFQSSBHcmFwaFFMXHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9ncmFwaHFsLmRhdG9jbXMuY29tLycsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQXV0aG9yaXphdGlvbic6ICcyZmQ3NWFhZGE4Y2Q5YzAyMzA2MzgxMWJiNmVmNmMnLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcInF1ZXJ5XCI6IGBxdWVyeSB7XHJcbiAgICAgICAgYWxsQ29tbXVuaXRpZXMge1xyXG4gICAgICAgICAgaWQgXHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgaW1hZ2VVcmxcclxuICAgICAgICAgIGNyZWF0b3JTbHVnXHJcbiAgICAgICAgfVxyXG4gICAgICB9YCB9KVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKSAvLyBQZWdhIG8gcmV0b3JubyBkbyByZXNwb25zZS5qc29uKCkgZSBqw6EgcmV0b3JuYVxyXG4gICAgLnRoZW4oKHJlc3Bvc3RhQ29tcGxldGEpID0+IHtcclxuICAgICAgY29uc3QgY29tdW5pZGFkZXNWaW5kYXNEb0RhdG8gPSByZXNwb3N0YUNvbXBsZXRhLmRhdGEuYWxsQ29tbXVuaXRpZXM7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbXVuaWRhZGVzVmluZGFzRG9EYXRvKVxyXG4gICAgICBzZXRDb211bmlkYWRlcyhjb211bmlkYWRlc1ZpbmRhc0RvRGF0bylcclxuICAgIH0pXHJcbiAgICAvLyAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgLy8gfSlcclxuXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IFtteWluZm8sIHNldE15aW5mb10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgLy8gMCAtIFBlZ2FyIG8gYXJyYXkgZGUgZGFkb3MgZG8gZ2l0aHViIFxyXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbigpIHtcclxuICAgIC8vIEdFVFxyXG4gICAgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvcmFmYWVsc2Nod2FudGVzJylcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb3N0YURvU2Vydmlkb3JNeWluZm8pIHtcclxuICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2aWRvck15aW5mby5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9zdGFDb21wbGV0YU15aW5mbykge1xyXG4gICAgICBzZXRNeWluZm8ocmVzcG9zdGFDb21wbGV0YU15aW5mbyk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgLy8gICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAvLyB9KVxyXG5cclxuICB9LCBbXSlcclxuICBjb25zb2xlLmxvZygnSW5mb3JtYcOnw7VlcyBhbnRlcyBkbyByZXR1cm4nLCBteWluZm8pO1xyXG5cclxuICAvLyAxIC0gQ3JpYXIgdW0gYm94IHF1ZSB2YWkgdGVyIHVtIG1hcCwgYmFzZWFkbyBub3MgaXRlbXMgZG8gYXJyYXlcclxuICAvLyBxdWUgcGVnYW1vcyBkbyBHaXRIdWJcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEFsdXJha3V0TWVudSAvPlxyXG4gICAgICA8TWFpbkdyaWQ+XHJcbiAgICAgICAgey8qIDxCb3ggc3R5bGU9XCJncmlkLWFyZWE6IHByb2ZpbGVBcmVhO1wiPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVBcmVhXCIgc3R5bGU9e3sgZ3JpZEFyZWE6ICdwcm9maWxlQXJlYScgfX0+XHJcbiAgICAgICAgICA8UHJvZmlsZVNpZGViYXIgZ2l0aHViVXNlcj17dXN1YXJpb0dpdGh1Yn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVBcmVhXCIgc3R5bGU9e3sgZ3JpZEFyZWE6ICd3ZWxjb21lQXJlYScgfX0+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgc3ViUGFnZVRpdGxlXCI+XHJcbiAgICAgICAgICAgIHtteWluZm8ubmFtZX0gXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwPntteWluZm8uYmlvfTwvcD5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5Db25zdHJ1Y3Rpb25cIj5cclxuICAgICAgICAgICAgICBJVCBwcm9mZXNzaW9uYWwgZm9yIDIwIHllYXJzLCB3aXRoIGEgZGVncmVlIGluIFN5c3RlbXMgQW5hbHlzaXMgYW5kIERldmVsb3BtZW50LiBNeSBwcm9mZXNzaW9uYWwgbGlmZSBpbmNsdWRlcyBzZXZlcmFsIGJyYW5jaGVzIG9mIGNvbXB1dGVyIHNjaWVuY2UsIGJlZ2lubmluZyB3aXRoIHRoZSBkZWdyZWUsIHBhcmFsbGVsIHRvIHRoZSBhcmVhIG9mIHRlY2huaWNhbCBzdXBwb3J0LCBhbmQgY29uc29saWRhdGluZyBpbiB0aGUgYXJlYSBvZiBkZXZlbG9wbWVudCwgYXJlYSBpbiB3aGljaCBJIGZvdW5kIG15IHRydWUgcHJvZmVzc2lvbmFsIHBhc3Npb24uIEkgYW0gY3VycmVudGx5IGZvY3VzZWQgb24gd2ViIGRldmVsb3BtZW50LCB3b3JraW5nIHdpdGggdGhlIFBIUCBsYW5ndWFnZSwgSmF2YVNjcmlwdCwgUHl0aG9uIGFuZCBmZWVsaW5nIGNvbWZvcnRhYmxlIHRvIHdvcmsgd2l0aCBhbnkgb3RoZXIgbGFuZ3VhZ2UsIGRlcGVuZGluZyBvbiB0aGUgbmVlZCBhbmQgc3RydWN0dXJlIG9mIHRoZSBwcm9qZWN0LlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluQ29uc3RydWN0aW9uXCI+QmxvZzogPGEgaHJlZj1cImh0dHBzOi8vd3d3LnByb2dyYW1hZG9yeHB0by5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiA+cHJvZ3JhbWFkb3J4cHRvLmNvbTwvYT48L3A+XHJcbiAgICAgICAgICAgIDxPcmt1dE5vc3RhbGdpY0ljb25TZXQgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIHN1YlBhZ2VUaXRsZVwiPlxyXG4gICAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPHA+U2l0ZSBEaWdpdGEgUmlvIEluZm9ybcOhdGljYTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbkNvbnN0cnVjdGlvblwiPlxyXG4gICAgICAgICAgICAgIExpbms6IDxhIGhyZWY9J2h0dHBzOi8vd3d3LmRpZ2l0YXJpb2luZm9ybWF0aWNhLmNvbS8nIHRhcmdldD1cIl9ibGFua1wiPmRpZ2l0YXJpb2luZm9ybWF0aWNhPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWd1bGFyXCI+XHJcbiAgICAgICAgICAgIFVtYSBhZ8OqbmNpYSBXZWIgcGFyYSBjcmlhw6fDo28gZGUgU2l0ZXMgZSBzb2x1w6fDtWVzIGRpZ2l0YWlzLCBjb20gMjMgYW5vcyBkZSBleHBlcmnDqm5jaWEgbmEgZW50cmVnYSBkZSBzb2x1w6fDtWVzIHRlY25vbMOzZ2ljYSwgYWp1ZGFuZG8gb3V0cmFzIGVtcHJlc2FzIGUgcHJvZmlzc2lvbmFpcyBsaWJlcmFpcyBhIGF1bWVudGFyZW0gc2V1cyBmYXR1cmFtZW50b3MgZSB2aXNpYmlsaWRhZGUgbmEgaW50ZXJuZXQuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPHA+U2l0ZSBQcm9ncmFtYWRvciBYUFRPPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluQ29uc3RydWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgTGluazogPGEgaHJlZj0naHR0cHM6Ly93d3cucHJvZ3JhbWFkb3J4cHRvLmNvbS8nIHRhcmdldD1cIl9ibGFua1wiPnByb2dyYW1hZG9yeHB0bzwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVndWxhclwiPlxyXG4gICAgICAgICAgICBPIG9iamV0aXZvIGRlc3RlIHByb2pldG8gw6kgZW50cmVnYXIgY29udGXDumRvIHNvYnJlIHByb2dyYW1hw6fDo28gZGUgZm9ybWEgZGlkw6F0aWNhLCBjbGFyYSBlIG9iamV0aXZhLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIHsvKjxCb3g+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJUaXRsZVwiPk8gcXVlIHZvY8OqIGRlc2VqYSBmYXplcj88L2gyPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZnVuY3Rpb24gaGFuZGxlQ3JpYUNvbXVuaWRhZGUoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGFkb3NEb0Zvcm0gPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wbzogJywgZGFkb3NEb0Zvcm0uZ2V0KCd0aXRsZScpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wbzogJywgZGFkb3NEb0Zvcm0uZ2V0KCdpbWFnZScpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb211bmlkYWRlID0ge1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogZGFkb3NEb0Zvcm0uZ2V0KCd0aXRsZScpLFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZV91cmw6IGRhZG9zRG9Gb3JtLmdldCgnaW1hZ2UnKSxcclxuICAgICAgICAgICAgICAgICAgY3JlYXRvcl9zbHVnOiB1c3VhcmlvR2l0aHViLFxyXG4gICAgICAgICAgICAgICAgICAvL2ltYWdlVXJsOiBkYWRvc0RvRm9ybS5nZXQoJ2ltYWdlJyksXHJcbiAgICAgICAgICAgICAgICAgIC8vY3JlYXRvclNsdWc6IHVzdWFyaW9HaXRodWIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZldGNoKCcvYXBpL2NvbXVuaWRhZGVzJywge1xyXG4gICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbXVuaWRhZGUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhZG9zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYWRvcy5yZWdpc3Ryb0NyaWFkbyk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXVuaWRhZGUgPSBkYWRvcy5yZWdpc3Ryb0NyaWFkbztcclxuICAgICAgICAgICAgICAgICAgY29uc3QgY29tdW5pZGFkZXNBdHVhbGl6YWRhcyA9IFsuLi5jb211bmlkYWRlcywgY29tdW5pZGFkZV07XHJcbiAgICAgICAgICAgICAgICAgIHNldENvbXVuaWRhZGVzKGNvbXVuaWRhZGVzQXR1YWxpemFkYXMpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUXVhbCB2YWkgc2VyIG8gbm9tZSBkYSBzdWEgY29tdW5pZGFkZT9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUXVhbCB2YWkgc2VyIG8gbm9tZSBkYSBzdWEgY29tdW5pZGFkZT9cIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbG9xdWUgdW1hIFVSTCBwYXJhIHVzYXJtb3MgZGUgY2FwYVwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDb2xvcXVlIHVtYSBVUkwgcGFyYSB1c2FybW9zIGRlIGNhcGFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIENyaWFyIGNvbXVuaWRhZGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9Cb3g+Ki99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlUmVsYXRpb25zQXJlYVwiIHN0eWxlPXt7IGdyaWRBcmVhOiAncHJvZmlsZVJlbGF0aW9uc0FyZWEnIH19PlxyXG4gICAgICAgICAgey8qPFByb2ZpbGVSZWxhdGlvbnNCb3ggdGl0bGU9XCJTZWd1aWRvcmVzXCIgaXRlbXM9e3NlZ3VpZG9yZXN9IC8+Ki99XHJcbiAgICAgICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgTGFzdCBhcnRpY2xlcyAoe2NvbXVuaWRhZGVzLmxlbmd0aH0pXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluQ29uc3RydWN0aW9uXCI+Li4uIHVuZGVyIGNvbnN0cnVjdGlvbjwvc3Bhbj5cclxuICAgICAgICAgIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XHJcbiAgICAgICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgTGFzdCBwcm9qZWN0cyAoe2NvbXVuaWRhZGVzLmxlbmd0aH0pXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluQ29uc3RydWN0aW9uXCI+Li4uIHVuZGVyIGNvbnN0cnVjdGlvbjwvc3Bhbj5cclxuICAgICAgICAgIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XHJcbiAgICAgICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+XHJcbiAgICAgICAgICAgIFByb2dyYW1taW5nIGxhbmd1YWdlICh7Y29tdW5pZGFkZXMubGVuZ3RofSlcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtjb211bmlkYWRlcy5tYXAoKGl0ZW1BdHVhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbUF0dWFsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL2NvbW11bml0aWVzLyR7aXRlbUF0dWFsLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1BdHVhbC5pbWFnZVVybH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWwudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XHJcbiAgICAgICAgICB7Lyo8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgUGVzc29hcyBkYSBjb211bmlkYWRlICh7cGVzc29hc0Zhdm9yaXRhcy5sZW5ndGh9KVxyXG4gICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtwZXNzb2FzRmF2b3JpdGFzLm1hcCgoaXRlbUF0dWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtQXR1YWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvdXNlcnMvJHtpdGVtQXR1YWx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2l0ZW1BdHVhbH0ucG5nYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj4qL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9NYWluR3JpZD5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=