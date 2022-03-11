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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: #f4f5f8;\n  --padding-top: 64px;\n}\nion-content ion-text {\n  color: #203680;\n}\nion-content ion-text h1 {\n  margin: 0;\n  padding: 0;\n  padding-left: 26px;\n  font-size: 26px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content ion-text h2 {\n  padding-left: 26px;\n  font-size: 15px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content .selections {\n  padding-top: 20px;\n  margin-left: -20px;\n  padding-bottom: 50px;\n}\nion-content .selections .categoria {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: center;\n  justify-content: space-evenly;\n}\nion-content .selections .categoria ion-text {\n  color: #203680;\n}\nion-content .selections .categoria ion-text h3 {\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content .selections .categoria2 {\n  padding-left: 30px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: center;\n  justify-content: space-evenly;\n}\nion-content .selections .categoria2 ion-text {\n  color: #203680;\n}\nion-content .selections .categoria2 ion-text h3 {\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content .calculadoras-1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\nion-content .calculadoras-1 .calculadora-unica {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 150px;\n  padding-top: 20px;\n  background-color: #203680;\n  border-radius: 25px;\n  margin-bottom: 35px;\n}\nion-content .calculadoras-1 .calculadora-unica ion-icon {\n  color: white;\n  width: 50px;\n  height: 50px;\n}\nion-content .calculadoras-1 .calculadora-unica ion-text h3 {\n  font-size: 15px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  color: white;\n  text-align: center;\n}\nion-content .calculadoras-1 .calculadora-anual {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 150px;\n  padding-top: 20px;\n  background-color: #203680;\n  border-radius: 25px;\n}\nion-content .calculadoras-1 .calculadora-anual ion-icon {\n  color: white;\n  width: 50px;\n  height: 50px;\n}\nion-content .calculadoras-1 .calculadora-anual ion-text h3 {\n  font-size: 15px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGFkb3JhLXNlbGVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGNBQUE7QUFFUjtBQURRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7QUFHWjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0FBR1o7QUFBSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFHWjtBQUZZO0VBQ0ksY0FBQTtBQUloQjtBQUhnQjtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtBQUtwQjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFHWjtBQUZZO0VBQ0ksY0FBQTtBQUloQjtBQUhnQjtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtBQUtwQjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUdaO0FBRlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJaEI7QUFEZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBR3BCO0FBQ1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUFZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRWhCO0FBQ2dCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNwQiIsImZpbGUiOiJjYWxjdWxhZG9yYS1zZWxlY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogNjRweDtcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICAgIGNvbG9yOiAjMjAzNjgwO1xyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWxlY3Rpb25ze1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICAuY2F0ZWdvcmlhe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICBpb24tdGV4dHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjAzNjgwO1xyXG4gICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2F0ZWdvcmlhMntcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICBpb24tdGV4dHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjAzNjgwO1xyXG4gICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYWxjdWxhZG9yYXMtMXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAuY2FsY3VsYWRvcmEtdW5pY2F7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzNjgwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi10ZXh0e1xyXG4gICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxjdWxhZG9yYS1hbnVhbHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDM2ODA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLXRleHR7XHJcbiAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-text><h1>Calculadora</h1></ion-text>\n  <ion-text><h2>Calcula tus impuestos a pagar</h2></ion-text>\n  <div class=\"selections\">\n    <div class=\"categoria\">\n      <ion-text><h3>Tercera<br>Categoría</h3></ion-text>\n      <ion-toggle \n      [disabled]=\"disabled\"\n      (ionChange)=\"categoria_cambiada($event)\" [(ngModel)]=\"categorias\" color=\"primary\"></ion-toggle>\n      <ion-text><h3>Cuarta<br>Categoría</h3></ion-text>\n    </div>\n    <!-- <div class=\"categoria\">\n      <ion-text><h3>Tercera Categoría</h3></ion-text>\n      <ion-toggle color=\"primary\"></ion-toggle>\n      <ion-text><h3>Cuarta Categoría</h3></ion-text>\n    </div> -->\n  </div>\n  <div *ngIf=\"categorias==false\" class=\"calculadoras-1\">\n    <div *ngIf=\"categorias==false\" class=\"calculadora-unica\" [routerLink]=\"['calc-unic']\">\n      <ion-icon name=\"calculator\"></ion-icon>\n      <ion-text><h3>Calculadora<br>Unica</h3></ion-text>\n    </div>\n    <div *ngIf=\"tipotercera==false\" class=\"calculadora-anual\" [routerLink]=\"['calc-anual1']\">\n      <ion-icon name=\"calculator\"></ion-icon>\n      <ion-text><h3>Calculadora<br>Mensual</h3></ion-text>\n    </div>\n  </div>\n  <div class=\"calculadoras-1\">\n    <!-- <div class=\"calculadora-unica\" [routerLink]=\"['calc-unic']\">\n      <ion-icon name=\"calculator\"></ion-icon>\n      <ion-text><h3>Calculadora<br>Unica</h3></ion-text>\n    </div> -->\n    <div *ngIf=\"tipotercera==true\" class=\"calculadora-anual\" [routerLink]=\"['calc-anual2']\">\n      <ion-icon name=\"calculator\"></ion-icon>\n      <ion-text><h3>Calculadora<br>Mensual</h3></ion-text>\n    </div>\n  </div>\n  <div *ngIf=\"categorias==true\" class=\"calculadoras-1\" [routerLink]=\"['calc-cuarta']\">\n    <div class=\"calculadora-unica\">\n      <ion-icon name=\"calculator\"></ion-icon>\n      <ion-text><h3>Calculadora<br>Unica</h3></ion-text>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_calculadora_calculadora-select_calculadora-select_module_ts.js.map