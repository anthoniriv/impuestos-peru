(self["webpackChunkcalculator_welquer_app"] = self["webpackChunkcalculator_welquer_app"] || []).push([["src_app_inicio-tabs_inicio-tabs_module_ts"],{

/***/ 4690:
/*!***********************************************************!*\
  !*** ./src/app/inicio-tabs/inicio-tabs-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioTabsPageRoutingModule": () => (/* binding */ InicioTabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _inicio_tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-tabs.page */ 9893);




const routes = [
    {
        path: '',
        component: _inicio_tabs_page__WEBPACK_IMPORTED_MODULE_0__.InicioTabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
            },
            {
                path: 'calculadora',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_calculadora_calculadora-select_calculadora-select_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../calculadora/calculadora-select/calculadora-select.module */ 4529)).then(m => m.CalculadoraSelectPageModule)
            },
            {
                path: 'cronograma',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cronograma_cronograma_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../cronograma/cronograma.module */ 6080)).then(m => m.CronogramaPageModule)
            },
            {
                path: '',
                redirectTo: '/inicio/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/inicio/home',
        pathMatch: 'full'
    }
];
let InicioTabsPageRoutingModule = class InicioTabsPageRoutingModule {
};
InicioTabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioTabsPageRoutingModule);



/***/ }),

/***/ 5097:
/*!***************************************************!*\
  !*** ./src/app/inicio-tabs/inicio-tabs.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioTabsPageModule": () => (/* binding */ InicioTabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _inicio_tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-tabs-routing.module */ 4690);
/* harmony import */ var _inicio_tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio-tabs.page */ 9893);







let InicioTabsPageModule = class InicioTabsPageModule {
};
InicioTabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio_tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioTabsPageRoutingModule
        ],
        declarations: [_inicio_tabs_page__WEBPACK_IMPORTED_MODULE_1__.InicioTabsPage]
    })
], InicioTabsPageModule);



/***/ }),

/***/ 9893:
/*!*************************************************!*\
  !*** ./src/app/inicio-tabs/inicio-tabs.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioTabsPage": () => (/* binding */ InicioTabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_inicio_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inicio-tabs.page.html */ 7790);
/* harmony import */ var _inicio_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio-tabs.page.scss */ 2173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let InicioTabsPage = class InicioTabsPage {
    constructor() { }
    ngOnInit() {
    }
};
InicioTabsPage.ctorParameters = () => [];
InicioTabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-inicio-tabs',
        template: _raw_loader_inicio_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inicio_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InicioTabsPage);



/***/ }),

/***/ 2173:
/*!***************************************************!*\
  !*** ./src/app/inicio-tabs/inicio-tabs.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmljaW8tdGFicy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 7790:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio-tabs/inicio-tabs.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"calculadora\">\n      <ion-icon name=\"calculator\"></ion-icon>\n      <ion-label>Calculadora</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"cronograma\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Cronograma</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ })

}]);
//# sourceMappingURL=src_app_inicio-tabs_inicio-tabs_module_ts.js.map