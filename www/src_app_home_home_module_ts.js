(self["webpackChunkcalculator_welquer_app"] = self["webpackChunkcalculator_welquer_app"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HomePage = class HomePage {
    constructor() { }
    //go to google website
    contact() {
        window.open('https://wa.link/wo5m8u', '_system', 'location=yes');
        return false;
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".main {\n  --background: url('1.png') 0 0/100% 95% no-repeat;\n  background-size: cover;\n  --padding-top: 80px;\n}\n.main .content {\n  padding-left: 30px;\n}\n.main .content h2 {\n  font-size: 34px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0);\n}\n.main .content h1 {\n  margin-top: 29px;\n  max-width: 82%;\n  font-size: 50px;\n  font-weight: bold;\n  color: #41d1d900;\n  font-family: \"Montserrat\", sans-serif;\n}\n.main .content p {\n  margin-top: 30px;\n  max-width: 50%;\n  font-size: 13px;\n  font-weight: 500;\n  color: white;\n  font-family: \"Montserrat\", sans-serif;\n}\n.main .content ion-button {\n  margin-top: 14px;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n}\n.main .content .info-button {\n  --color:black;\n  --background: #fff;\n  --border-radius: 13px;\n}\n.main .content .info {\n  color: #238cb5;\n  line-height: 16px;\n  max-width: 38%;\n  margin-top: 22px;\n  font-size: 10px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaURBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0FBRUo7QUFESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBR047QUFESTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFHTjtBQURJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FBR047QUFESTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7QUFHTjtBQURJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFHTjtBQURJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFHTiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xuICAtLWJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi9hc3NldHMvcG5nLzEucG5nJykgMCAwLzEwMCUgOTUlIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLS1wYWRkaW5nLXRvcDogODBweDtcbiAgLmNvbnRlbnR7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGgye1xuICAgICAgZm9udC1zaXplOjM0cHg7XG4gICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgIH1cbiAgICBoMXtcbiAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICBtYXgtd2lkdGg6IDgyJTtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICM0MWQxZDkwMDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgfVxuICAgIHB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIH1cbiAgICAuaW5mby1idXR0b257XG4gICAgICAtLWNvbG9yOmJsYWNrO1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgIH1cbiAgICAuaW5mb3tcbiAgICAgIGNvbG9yOiAjMjM4Y2I1O1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICBtYXgtd2lkdGg6IDM4JTtcbiAgICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICB9XG4gIH1cblxufSJdfQ== */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"main\" [fullscreen]=\"true\">\n  <div class=\"content\">\n    <h2>Bienvenidos a</h2>\n    <h1>IMPUESTOS PERÚ</h1>\n    <p>\n      Somos un estudio contable tributario y legal que ha desarrollado esta app útil para ti.\n    </p>\n    <ion-button expand=\"large\" class=\"info-button\" (click)=\"contact()\">\n      CONTACTANOS\n    </ion-button>\n    <p class=\"info\">*Presione aqui para obtener asesoria gratuita en temas de contabilidad tributación, constitución de empresas, temas societarios y mas...</p>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map