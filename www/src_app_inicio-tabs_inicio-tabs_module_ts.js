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
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_calculadora_calc-anual1_calc-anual1_page_ts"), __webpack_require__.e("default-src_app_calculadora_calc-cuarta_calc-cuarta_page_ts"), __webpack_require__.e("default-src_app_calculadora_calc-unica_calc-unica_page_ts"), __webpack_require__.e("default-src_app_calculadora_calc-anual2_calc-anual2_page_ts"), __webpack_require__.e("src_app_calculadora_calculadora-select_calculadora-select_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../calculadora/calculadora-select/calculadora-select.module */ 4529)).then(m => m.CalculadoraSelectPageModule)
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-tab-bar {\n  --color:#fff;\n  --color-selected: #3BD2DB !important;\n  background-color: #fff;\n  border-top-left-radius: 45px;\n  border-top-right-radius: 45px;\n  border: unset;\n}\n\nion-tab-button {\n  background-color: #01305C;\n}\n\nion-tabs {\n  background-color: rgba(8, 27, 61, 0.164);\n}\n\n#tab-button-tab1 {\n  border-top-left-radius: 45px;\n}\n\n#tab-button-tab4 {\n  border-top-right-radius: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby10YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDRTtFQUNFLHlCQUFBO0FBRUo7O0FBQ0U7RUFDRSx3Q0FBQTtBQUVKOztBQUNFO0VBQ0UsNEJBQUE7QUFFSjs7QUFDRTtFQUNFLDZCQUFBO0FBRUoiLCJmaWxlIjoiaW5pY2lvLXRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1iYXIgIHtcclxuICAgIC0tY29sb3I6I2ZmZjtcclxuICAgIC0tY29sb3Itc2VsZWN0ZWQ6ICMzQkQyREIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ1cHg7XHJcbiAgICBib3JkZXI6IHVuc2V0O1xyXG4gIH1cclxuICBpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzMDVDO1xyXG4gIH1cclxuICBcclxuICBpb24tdGFicyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDI3LCA2MSwgMC4xNjQpO1xyXG4gIH1cclxuICBcclxuICAjdGFiLWJ1dHRvbi10YWIxIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ1cHg7XHJcbiAgfVxyXG4gIFxyXG4gICN0YWItYnV0dG9uLXRhYjQge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ1cHg7XHJcbiAgfSJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"calculadora\">\n      <ion-icon name=\"calculator\"></ion-icon>\n      <ion-label>CALCULADORA</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>INICIO</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"cronograma\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>CRONOGRAMA</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ })

}]);
//# sourceMappingURL=src_app_inicio-tabs_inicio-tabs_module_ts.js.map