(self["webpackChunkcalculator_welquer_app"] = self["webpackChunkcalculator_welquer_app"] || []).push([["src_app_calculadora_calc-anual1_calc-anual1_module_ts"],{

/***/ 2672:
/*!***********************************************************************!*\
  !*** ./src/app/calculadora/calc-anual1/calc-anual1-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcAnual1PageRoutingModule": () => (/* binding */ CalcAnual1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _calc_anual1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-anual1.page */ 9724);




const routes = [
    {
        path: '',
        component: _calc_anual1_page__WEBPACK_IMPORTED_MODULE_0__.CalcAnual1Page
    }
];
let CalcAnual1PageRoutingModule = class CalcAnual1PageRoutingModule {
};
CalcAnual1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalcAnual1PageRoutingModule);



/***/ }),

/***/ 8153:
/*!***************************************************************!*\
  !*** ./src/app/calculadora/calc-anual1/calc-anual1.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcAnual1PageModule": () => (/* binding */ CalcAnual1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _calc_anual1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-anual1-routing.module */ 2672);
/* harmony import */ var _calc_anual1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-anual1.page */ 9724);







let CalcAnual1PageModule = class CalcAnual1PageModule {
};
CalcAnual1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _calc_anual1_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalcAnual1PageRoutingModule
        ],
        declarations: [_calc_anual1_page__WEBPACK_IMPORTED_MODULE_1__.CalcAnual1Page]
    })
], CalcAnual1PageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_calculadora_calc-anual1_calc-anual1_module_ts.js.map