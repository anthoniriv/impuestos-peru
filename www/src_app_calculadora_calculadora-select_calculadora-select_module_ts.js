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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _calc_anual1_calc_anual1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calc-anual1/calc-anual1.page */ 9724);
/* harmony import */ var _calc_anual2_calc_anual2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calc-anual2/calc-anual2.page */ 7874);
/* harmony import */ var _calc_cuarta_calc_cuarta_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calc-cuarta/calc-cuarta.page */ 8779);
/* harmony import */ var _calc_unica_calc_unica_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calc-unica/calc-unica.page */ 5378);
/* harmony import */ var _calculadora_select_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculadora-select.page */ 6708);








const routes = [
    {
        path: '',
        component: _calculadora_select_page__WEBPACK_IMPORTED_MODULE_4__.CalculadoraSelectPage
    },
    {
        path: 'calc-unic',
        component: _calc_unica_calc_unica_page__WEBPACK_IMPORTED_MODULE_3__.CalcUnicaPage
    },
    {
        path: 'calc-anual1',
        component: _calc_anual1_calc_anual1_page__WEBPACK_IMPORTED_MODULE_0__.CalcAnual1Page
    },
    {
        path: 'calc-anual2',
        component: _calc_anual2_calc_anual2_page__WEBPACK_IMPORTED_MODULE_1__.CalcAnual2Page
    },
    {
        path: 'calc-cuarta',
        component: _calc_cuarta_calc_cuarta_page__WEBPACK_IMPORTED_MODULE_2__.CalcCuartaPage
    }
];
let CalculadoraSelectPageRoutingModule = class CalculadoraSelectPageRoutingModule {
};
CalculadoraSelectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
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
    constructor() {
        this.categorias = false;
        this.tipotercera = false;
        this.disabled = false;
    }
    ngOnInit() {
    }
    categoria_cambiada($event) {
        this.categorias = $event.detail.checked;
        console.log(this.categorias);
    }
    tipo_tercera_cambiada($event) {
        this.tipotercera = $event.detail.checked;
        this.disabled = this.tipotercera;
        console.log(this.tipotercera);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url('2.jpg') 0 0/100% 100% no-repeat;\n  --ion-background-color: #f4f5f8;\n}\nion-content .title {\n  padding-top: 105px;\n  color: #fff;\n  text-align: center;\n  padding-bottom: 115px;\n  font-size: 28px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content .sub_title {\n  padding-top: 20px;\n  color: #03335e;\n  text-align: center;\n  font-size: 19px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n}\nion-content .selections {\n  padding-top: 20px;\n  margin-left: -20px;\n  padding-bottom: 50px;\n}\nion-content .selections .categoria {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: center;\n  justify-content: space-evenly;\n}\nion-content .selections .categoria ion-text {\n  color: #03335e;\n}\nion-content .selections .categoria ion-text h3 {\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content .selections .categoria2 {\n  padding-left: 30px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: center;\n  justify-content: space-evenly;\n}\nion-content .selections .categoria2 ion-text {\n  color: #203680;\n}\nion-content .selections .categoria2 ion-text h3 {\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content .calculadoras-1 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\nion-content .calculadoras-1 .calculadora-unica {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 150px;\n  padding-top: 20px;\n  background: linear-gradient(45deg, #09529F, #4ABBD6);\n  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.281);\n  border-radius: 25px;\n}\nion-content .calculadoras-1 .calculadora-unica ion-icon {\n  color: white;\n  width: 50px;\n  height: 50px;\n}\nion-content .calculadoras-1 .calculadora-unica ion-text h3 {\n  font-size: 15px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  color: white;\n  text-align: center;\n}\nion-content .calculadoras-1 .calculadora-anual {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 150px;\n  padding-top: 20px;\n  background: linear-gradient(45deg, #09529F, #4ABBD6);\n  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.281);\n  border-radius: 25px;\n}\nion-content .calculadoras-1 .calculadora-anual ion-icon {\n  color: white;\n  width: 50px;\n  height: 50px;\n}\nion-content .calculadoras-1 .calculadora-anual ion-text h3 {\n  font-size: 15px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGFkb3JhLXNlbGVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrREFBQTtFQUNBLCtCQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0FBQ1I7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFDUjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQ1I7QUFBUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUVaO0FBRFk7RUFDSSxjQUFBO0FBR2hCO0FBRmdCO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0FBSXBCO0FBQVE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUVaO0FBRFk7RUFDSSxjQUFBO0FBR2hCO0FBRmdCO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0FBSXBCO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ1I7QUFBUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0RBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBRVo7QUFEWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdoQjtBQUFnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFcEI7QUFFUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0RBQUE7RUFFQSw0Q0FBQTtFQUNBLG1CQUFBO0FBRFo7QUFFWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFoQjtBQUdnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFEcEIiLCJmaWxlIjoiY2FsY3VsYWRvcmEtc2VsZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL3BuZy8yLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmODtcclxuICAgIC8vIC0tcGFkZGluZy10b3A6IDY0cHg7XHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICAgIC5zdWJfdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMzMzNWU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAuc2VsZWN0aW9uc3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgLmNhdGVnb3JpYXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgaW9uLXRleHR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAzMzM1ZTtcclxuICAgICAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhdGVnb3JpYTJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgaW9uLXRleHR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIwMzY4MDtcclxuICAgICAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FsY3VsYWRvcmFzLTF7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgLmNhbGN1bGFkb3JhLXVuaWNhe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDk1MjlGLCAjNEFCQkQ2KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI4MSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLXRleHR7XHJcbiAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGN1bGFkb3JhLWFudWFse1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDk1MjlGLCAjNEFCQkQ2KTtcclxuICAgICAgICAgICAgLy9TaGFkb3cgb24gdGhlIGJvdHRvbVxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjgxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tdGV4dHtcclxuICAgICAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <h1 class=\"title\">Calculadora</h1>\n  <h2 class=\"sub_title\">Calcula tus impuestos a pagar</h2>\n  <div class=\"selections\">\n    <div class=\"categoria\">\n      <ion-text><h3>Tercera<br>Categoría</h3></ion-text>\n      <ion-toggle \n      [disabled]=\"disabled\"\n      (ionChange)=\"categoria_cambiada($event)\" [(ngModel)]=\"categorias\" color=\"primary\"></ion-toggle>\n      <ion-text><h3>Cuarta<br>Categoría</h3></ion-text>\n    </div>\n  </div>\n  <div *ngIf=\"categorias==false\" class=\"calculadoras-1\">\n    <div *ngIf=\"categorias==false\" class=\"calculadora-unica\" [routerLink]=\"['calc-unic']\">\n      <ion-icon name=\"calculator\"></ion-icon>\n      <ion-text><h3>Calculadora<br>Unica</h3></ion-text>\n    </div>\n    <div *ngIf=\"tipotercera==false\" class=\"calculadora-anual\" [routerLink]=\"['calc-anual1']\">\n      <ion-icon name=\"calculator\"></ion-icon>\n      <ion-text><h3>Calculadora<br>Mensual</h3></ion-text>\n    </div>\n  </div>\n  <div class=\"calculadoras-1\">\n    <div *ngIf=\"tipotercera==true\" class=\"calculadora-anual\" [routerLink]=\"['calc-anual2']\">\n      <ion-icon name=\"calculator\"></ion-icon>\n      <ion-text><h3>Calculadora<br>Mensual</h3></ion-text>\n    </div>\n  </div>\n  <div *ngIf=\"categorias==true\" class=\"calculadoras-1\" [routerLink]=\"['calc-cuarta']\">\n    <div class=\"calculadora-unica\">\n      <ion-icon name=\"calculator\"></ion-icon>\n      <ion-text><h3>Calculadora<br>Unica</h3></ion-text>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_calculadora_calculadora-select_calculadora-select_module_ts.js.map