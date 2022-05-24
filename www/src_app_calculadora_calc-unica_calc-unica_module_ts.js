(self["webpackChunkcalculator_welquer_app"] = self["webpackChunkcalculator_welquer_app"] || []).push([["src_app_calculadora_calc-unica_calc-unica_module_ts"],{

/***/ 6665:
/*!*********************************************************************!*\
  !*** ./src/app/calculadora/calc-unica/calc-unica-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcUnicaPageRoutingModule": () => (/* binding */ CalcUnicaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _calc_unica_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-unica.page */ 5378);




const routes = [
    {
        path: '',
        component: _calc_unica_page__WEBPACK_IMPORTED_MODULE_0__.CalcUnicaPage
    }
];
let CalcUnicaPageRoutingModule = class CalcUnicaPageRoutingModule {
};
CalcUnicaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalcUnicaPageRoutingModule);



/***/ }),

/***/ 5666:
/*!*************************************************************!*\
  !*** ./src/app/calculadora/calc-unica/calc-unica.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcUnicaPageModule": () => (/* binding */ CalcUnicaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _calc_unica_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-unica-routing.module */ 6665);
/* harmony import */ var _calc_unica_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-unica.page */ 5378);







let CalcUnicaPageModule = class CalcUnicaPageModule {
};
CalcUnicaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _calc_unica_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalcUnicaPageRoutingModule
        ],
        declarations: [_calc_unica_page__WEBPACK_IMPORTED_MODULE_1__.CalcUnicaPage]
    })
], CalcUnicaPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_calculadora_calc-unica_calc-unica_module_ts.js.map