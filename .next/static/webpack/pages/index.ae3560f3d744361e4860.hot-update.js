self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\hp\\Desktop\\portfolio_website-STARTER\\src\\components\\Projects\\Projects.js",
    _this = undefined;





var projectdemo = [{
  title: "Project 1",
  Description: "this is a really really long discription abbout this prooject"
}, {
  title: "Project 2",
  Description: "this is a really really long discription abbout this prooject"
}, {
  title: "Project 3",
  Description: "this is a really really long discription abbout this prooject"
}, {
  title: "Project 4",
  Description: "this is a really really long discription abbout this prooject"
}];

var Projects = function Projects() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "Project",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 1
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      main: true,
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 1
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.projects.map(function (project) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
              src: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.projects.image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 5
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 1
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, _this);
};

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsicHJvamVjdGRlbW8iLCJ0aXRsZSIsIkRlc2NyaXB0aW9uIiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsInByb2plY3QiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFdBQVcsR0FBRSxDQUFDO0FBQUNDLE9BQUssRUFBQyxXQUFQO0FBQ3BCQyxhQUFXLEVBQUU7QUFETyxDQUFELEVBQzJEO0FBQUNELE9BQUssRUFBQyxXQUFQO0FBQzlFQyxhQUFXLEVBQUU7QUFEaUUsQ0FEM0QsRUFFMkQ7QUFBQ0QsT0FBSyxFQUFDLFdBQVA7QUFDOUVDLGFBQVcsRUFBRTtBQURpRSxDQUYzRCxFQUcyRDtBQUFDRCxPQUFLLEVBQUMsV0FBUDtBQUM5RUMsYUFBVyxFQUFFO0FBRGlFLENBSDNELENBQW5COztBQU1BLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsc0JBQ2YsOERBQUMsNkRBQUQ7QUFBUyxNQUFFLEVBQUMsU0FBWjtBQUFBLDRCQUNGLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERSxlQUVGLDhEQUFDLGtFQUFEO0FBQWMsVUFBSSxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZFLGVBR0YsOERBQUMsMERBQUQ7QUFBQSxnQkFDR0MsOERBQUEsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsNEJBQ1o7QUFBQSxpQ0FDRSw4REFBQyxxREFBRDtBQUFBLG1DQUNFLDhEQUFDLGdEQUFEO0FBQUssaUJBQUcsRUFBRUQsZ0VBQWNFO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEWTtBQUFBLE9BQWI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGU7QUFBQSxDQUFqQjs7S0FBTUgsUTtBQW1CTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZTM1NjBmM2Q3NDQzNjFlNDg2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQmxvZ0NhcmQsIENhcmRJbmZvLCBFeHRlcm5hbExpbmtzLCBHcmlkQ29udGFpbmVyLCBIZWFkZXJUaHJlZSwgSHIsIFRhZywgVGFnTGlzdCwgVGl0bGVDb250ZW50LCBVdGlsaXR5TGlzdCwgSW1nIH0gZnJvbSAnLi9Qcm9qZWN0c1N0eWxlcyc7XG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcbmNvbnN0IHByb2plY3RkZW1vID1be3RpdGxlOlwiUHJvamVjdCAxXCIsXG5EZXNjcmlwdGlvbjogXCJ0aGlzIGlzIGEgcmVhbGx5IHJlYWxseSBsb25nIGRpc2NyaXB0aW9uIGFiYm91dCB0aGlzIHByb29qZWN0XCJ9LHt0aXRsZTpcIlByb2plY3QgMlwiLFxuRGVzY3JpcHRpb246IFwidGhpcyBpcyBhIHJlYWxseSByZWFsbHkgbG9uZyBkaXNjcmlwdGlvbiBhYmJvdXQgdGhpcyBwcm9vamVjdFwifSx7dGl0bGU6XCJQcm9qZWN0IDNcIixcbkRlc2NyaXB0aW9uOiBcInRoaXMgaXMgYSByZWFsbHkgcmVhbGx5IGxvbmcgZGlzY3JpcHRpb24gYWJib3V0IHRoaXMgcHJvb2plY3RcIn0se3RpdGxlOlwiUHJvamVjdCA0XCIsXG5EZXNjcmlwdGlvbjogXCJ0aGlzIGlzIGEgcmVhbGx5IHJlYWxseSBsb25nIGRpc2NyaXB0aW9uIGFiYm91dCB0aGlzIHByb29qZWN0XCJ9XVxuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IChcbiAgPFNlY3Rpb24gaWQ9XCJQcm9qZWN0XCI+XG48U2VjdGlvbkRpdmlkZXIgLz5cbjxTZWN0aW9uVGl0bGUgbWFpbj5Qcm9qZWN0czwvU2VjdGlvblRpdGxlPlxuPEdyaWRDb250YWluZXI+XG4gIHtwcm9qZWN0cy5tYXAoKHByb2plY3QpPT4oXG4gICAgPGRpdj5cbiAgICAgIDxCbG9nQ2FyZD5cbiAgICAgICAgPEltZyBzcmM9e3Byb2plY3RzLmltYWdlfS8+XG4gICAgICAgIFxuXG4gICAgICA8L0Jsb2dDYXJkPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICkpfVxuICA8L0dyaWRDb250YWluZXI+XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzOyJdLCJzb3VyY2VSb290IjoiIn0=