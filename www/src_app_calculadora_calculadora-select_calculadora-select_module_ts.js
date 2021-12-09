(self["webpackChunkcalculator_welquer_app"] = self["webpackChunkcalculator_welquer_app"] || []).push([["src_app_calculadora_calculadora-select_calculadora-select_module_ts"],{

/***/ 2530:
/*!*************************************************************************************!*\
  !*** ./src/app/calculadora/calculadora-select/calculadora-select-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculadoraSelectPageRoutingModule": () => (/* binding */ CalculadoraSelectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _calculadora_select_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculadora-select.page */ 6708);




const routes = [
    {
        path: '',
        component: _calculadora_select_page__WEBPACK_IMPORTED_MODULE_0__.CalculadoraSelectPage
    }
];
let CalculadoraSelectPageRoutingModule = class CalculadoraSelectPageRoutingModule {
};
CalculadoraSelectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalculadoraSelectPageRoutingModule);



/***/ }),

/***/ 4529:
/*!*****************************************************************************!*\
  !*** ./src/app/calculadora/calculadora-select/calculadora-select.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculadoraSelectPageModule": () => (/* binding */ CalculadoraSelectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _calculadora_select_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculadora-select-routing.module */ 2530);
/* harmony import */ var _calculadora_select_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculadora-select.page */ 6708);







let CalculadoraSelectPageModule = class CalculadoraSelectPageModule {
};
CalculadoraSelectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _calculadora_select_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalculadoraSelectPageRoutingModule
        ],
        declarations: [_calculadora_select_page__WEBPACK_IMPORTED_MODULE_1__.CalculadoraSelectPage]
    })
], CalculadoraSelectPageModule);



/***/ }),

/***/ 6708:
/*!***************************************************************************!*\
  !*** ./src/app/calculadora/calculadora-select/calculadora-select.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculadoraSelectPage": () => (/* binding */ CalculadoraSelectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_calculadora_select_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./calculadora-select.page.html */ 8346);
/* harmony import */ var _calculadora_select_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculadora-select.page.scss */ 1174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CalculadoraSelectPage = class CalculadoraSelectPage {
    constructor() { }
    ngOnInit() {
    }
};
CalculadoraSelectPage.ctorParameters = () => [];
CalculadoraSelectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-calculadora-select',
        template: _raw_loader_calculadora_select_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calculadora_select_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CalculadoraSelectPage);



/***/ }),

/***/ 1174:
/*!*****************************************************************************!*\
  !*** ./src/app/calculadora/calculadora-select/calculadora-select.page.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxjdWxhZG9yYS1zZWxlY3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 8346:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora/calculadora-select/calculadora-select.page.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>calculadora-select</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_calculadora_calculadora-select_calculadora-select_module_ts.js.map