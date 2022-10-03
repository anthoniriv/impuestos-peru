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
    goToTiktok() {
        window.open('https://www.tiktok.com/@welguzcri6?_t=8W4rlMeXmYH&_r=1', '_system', 'location=yes');
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".main {\n  --background: url('1.png') 0 0/100% 95% no-repeat;\n  background-size: cover;\n  --padding-top: 80px;\n}\n.main .content {\n  padding-left: 30px;\n}\n.main .content h2 {\n  font-size: 34px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0);\n}\n.main .content h1 {\n  margin-top: 29px;\n  max-width: 82%;\n  font-size: 50px;\n  font-weight: bold;\n  color: #41d1d900;\n  font-family: \"Montserrat\", sans-serif;\n}\n.main .content .divisor {\n  margin-top: 50%;\n  width: 50px;\n  height: 5px;\n  background: #3fd2da;\n}\n.main .content p {\n  margin-top: 20px;\n  max-width: 50%;\n  font-size: 13px;\n  font-weight: 500;\n  color: white;\n  font-family: \"Montserrat\", sans-serif;\n}\n.main .content ion-button {\n  margin-top: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n}\n.main .content .info-button {\n  --color:black;\n  --background: #fff;\n  --border-radius: 13px;\n}\n.main .content .tiktok-button {\n  --color:#fff;\n  --background: #3fd2da;\n  --border-radius: 13px;\n}\n.main .content .info {\n  color: #238cb5;\n  line-height: 16px;\n  max-width: 38%;\n  margin-top: 10px;\n  font-size: 10px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaURBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0FBRUo7QUFESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBR047QUFESTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFHTjtBQURJO0VBRUUsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FBRU47QUFBSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7QUFFTjtBQUFJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFFTjtBQUFJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFFTjtBQUFJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFFTiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKCcuLy4uLy4uL2Fzc2V0cy9wbmcvMS5wbmcnKSAwIDAvMTAwJSA5NSUgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLS1wYWRkaW5nLXRvcDogODBweDtcclxuICAuY29udGVudHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIGgye1xyXG4gICAgICBmb250LXNpemU6MzRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI5cHg7XHJcbiAgICAgIG1heC13aWR0aDogODIlO1xyXG4gICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogIzQxZDFkOTAwO1xyXG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmRpdmlzb3J7XHJcbiAgICAgIC8vIGEgYmx1ZSBsaW5lIHdpdGggIzNmZDJkYVxyXG4gICAgICBtYXJnaW4tdG9wOiA1MCU7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgYmFja2dyb3VuZDogIzNmZDJkYTtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmluZm8tYnV0dG9ue1xyXG4gICAgICAtLWNvbG9yOmJsYWNrO1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIH1cclxuICAgIC50aWt0b2stYnV0dG9ue1xyXG4gICAgICAtLWNvbG9yOiNmZmY7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogIzNmZDJkYTtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgfVxyXG4gICAgLmluZm97XHJcbiAgICAgIGNvbG9yOiAjMjM4Y2I1O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgbWF4LXdpZHRoOiAzOCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"main\" [fullscreen]=\"true\">\r\n  <div class=\"content\">\r\n    <!-- <h2>Bienvenidos a</h2> -->\r\n    <!-- <h1>IMPUESTOS PERÚ</h1> -->\r\n    <div class=\"divisor\"></div>\r\n    <p>\r\n      Somos un estudio contable tributario y legal que ha desarrollado esta app útil para ti.\r\n    </p>\r\n    <ion-button expand=\"large\" class=\"info-button\" (click)=\"contact()\">\r\n      CONTACTANOS\r\n    </ion-button>\r\n    <br>\r\n    <ion-button expand=\"large\" class=\"tiktok-button\" (click)=\"goToTiktok()\">\r\n      SIGUENOS EN TIKTOK\r\n    </ion-button>\r\n    <p class=\"info\">*Presione aqui para obtener asesoria gratuita en temas de contabilidad tributación, constitución de empresas, temas societarios y mas...</p>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map