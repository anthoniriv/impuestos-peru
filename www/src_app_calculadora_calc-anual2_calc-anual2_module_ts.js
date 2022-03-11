(self["webpackChunkcalculator_welquer_app"] = self["webpackChunkcalculator_welquer_app"] || []).push([["src_app_calculadora_calc-anual2_calc-anual2_module_ts"],{

/***/ 4390:
/*!***********************************************************************!*\
  !*** ./src/app/calculadora/calc-anual2/calc-anual2-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcAnual2PageRoutingModule": () => (/* binding */ CalcAnual2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _calc_anual2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-anual2.page */ 7874);




const routes = [
    {
        path: '',
        component: _calc_anual2_page__WEBPACK_IMPORTED_MODULE_0__.CalcAnual2Page
    }
];
let CalcAnual2PageRoutingModule = class CalcAnual2PageRoutingModule {
};
CalcAnual2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalcAnual2PageRoutingModule);



/***/ }),

/***/ 6623:
/*!***************************************************************!*\
  !*** ./src/app/calculadora/calc-anual2/calc-anual2.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcAnual2PageModule": () => (/* binding */ CalcAnual2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _calc_anual2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-anual2-routing.module */ 4390);
/* harmony import */ var _calc_anual2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-anual2.page */ 7874);







let CalcAnual2PageModule = class CalcAnual2PageModule {
};
CalcAnual2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _calc_anual2_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalcAnual2PageRoutingModule
        ],
        declarations: [_calc_anual2_page__WEBPACK_IMPORTED_MODULE_1__.CalcAnual2Page]
    })
], CalcAnual2PageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_calculadora_calc-anual2_calc-anual2_module_ts.js.map