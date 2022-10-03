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
            _calculadora_select_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalculadoraSelectPageRoutingModule,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top1 {\n  background: #e4ecf7;\n}\n\nion-content {\n  --ion-background-color: #e4ecf7;\n}\n\nion-content .title {\n  padding-top: 105px;\n  color: #fff;\n  text-align: center;\n  padding-bottom: 230px;\n  font-size: 28px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\n\nion-content .sub_title {\n  padding-top: 30px;\n  color: #03335e;\n  text-align: center;\n  font-size: 19px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nion-content .selections {\n  padding-top: 10%;\n  margin-left: -20px;\n  padding-bottom: 50px;\n}\n\nion-content .selections .categoria {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: center;\n  justify-content: space-evenly;\n}\n\nion-content .selections .categoria ion-text {\n  color: #03335e;\n}\n\nion-content .selections .categoria ion-text h3 {\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\n\nion-content .selections .categoria2 {\n  padding-left: 30px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: center;\n  justify-content: space-evenly;\n}\n\nion-content .selections .categoria2 ion-text {\n  color: #203680;\n}\n\nion-content .selections .categoria2 ion-text h3 {\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\n\nion-content .calculadoras-1 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nion-content .calculadoras-1 .calculadora-unica {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 150px;\n  padding-top: 20px;\n  background: linear-gradient(45deg, #09529F, #4ABBD6);\n  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.281);\n  border-radius: 25px;\n}\n\nion-content .calculadoras-1 .calculadora-unica ion-icon {\n  color: white;\n  width: 50px;\n  height: 50px;\n}\n\nion-content .calculadoras-1 .calculadora-unica ion-text h3 {\n  font-size: 15px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  color: white;\n  text-align: center;\n}\n\nion-content .calculadoras-1 .calculadora-anual {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 150px;\n  padding-top: 20px;\n  background: linear-gradient(45deg, #09529F, #4ABBD6);\n  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.281);\n  border-radius: 25px;\n}\n\nion-content .calculadoras-1 .calculadora-anual ion-icon {\n  color: white;\n  width: 50px;\n  height: 50px;\n}\n\nion-content .calculadoras-1 .calculadora-anual ion-text h3 {\n  font-size: 15px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGFkb3JhLXNlbGVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUNBO0VBRUksK0JBQUE7QUFDSjs7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FBQ1I7O0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFDUjs7QUFBUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUVaOztBQURZO0VBQ0ksY0FBQTtBQUdoQjs7QUFGZ0I7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7QUFJcEI7O0FBQVE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUVaOztBQURZO0VBQ0ksY0FBQTtBQUdoQjs7QUFGZ0I7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7QUFJcEI7O0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ1I7O0FBQVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9EQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQUVaOztBQURZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR2hCOztBQUFnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFcEI7O0FBRVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9EQUFBO0VBRUEsNENBQUE7RUFDQSxtQkFBQTtBQURaOztBQUVZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQWhCOztBQUdnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFEcEIiLCJmaWxlIjoiY2FsY3VsYWRvcmEtc2VsZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Axe1xyXG4gIGJhY2tncm91bmQ6ICNlNGVjZjc7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvcG5nLzIuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZTRlY2Y3O1xyXG4gICAgLy8gLS1wYWRkaW5nLXRvcDogNjRweDtcclxuICAgIC50aXRsZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgLnN1Yl90aXRsZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICBjb2xvcjogIzAzMzM1ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC5zZWxlY3Rpb25ze1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIC5jYXRlZ29yaWF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIGlvbi10ZXh0e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMzMzNWU7XHJcbiAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXRlZ29yaWEye1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIGlvbi10ZXh0e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMDM2ODA7XHJcbiAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhbGN1bGFkb3Jhcy0xe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIC5jYWxjdWxhZG9yYS11bmljYXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA5NTI5RiwgIzRBQkJENik7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yODEpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi10ZXh0e1xyXG4gICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxjdWxhZG9yYS1hbnVhbHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA5NTI5RiwgIzRBQkJENik7XHJcbiAgICAgICAgICAgIC8vU2hhZG93IG9uIHRoZSBib3R0b21cclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI4MSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLXRleHR7XHJcbiAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"top1\">\r\n  <img src=\"./../../../assets/png/top1.png\" alt=\"\">\r\n</div>\r\n<ion-content>\r\n  <!-- <h1 class=\"title\">Calculadora</h1> -->\r\n  <!-- <h2 class=\"sub_title\">Calcula tus impuestos a pagar</h2> -->\r\n  <div class=\"selections\">\r\n    <div class=\"categoria\">\r\n      <ion-text><h3>Tercera<br>Categoría</h3></ion-text>\r\n      <ion-toggle\r\n      [disabled]=\"disabled\"\r\n      (ionChange)=\"categoria_cambiada($event)\" [(ngModel)]=\"categorias\" color=\"primary\"></ion-toggle>\r\n      <ion-text><h3>Cuarta<br>Categoría</h3></ion-text>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"categorias===false\" class=\"calculadoras-1\">\r\n    <div *ngIf=\"categorias===false\" class=\"calculadora-unica\" [routerLink]=\"['calc-unic']\">\r\n      <ion-icon name=\"calculator\"></ion-icon>\r\n      <ion-text><h3>Calculadora<br>Unica</h3></ion-text>\r\n    </div>\r\n    <div *ngIf=\"tipotercera===false\" class=\"calculadora-anual\" [routerLink]=\"['calc-anual1']\">\r\n      <ion-icon name=\"calculator\"></ion-icon>\r\n      <ion-text><h3>Calculadora<br>Mensual</h3></ion-text>\r\n    </div>\r\n  </div>\r\n  <div class=\"calculadoras-1\">\r\n    <div *ngIf=\"tipotercera===true\" class=\"calculadora-anual\" [routerLink]=\"['calc-anual2']\">\r\n      <ion-icon name=\"calculator\"></ion-icon>\r\n      <ion-text><h3>Calculadora<br>Mensual</h3></ion-text>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"categorias===true\" class=\"calculadoras-1\" [routerLink]=\"['calc-cuarta']\">\r\n    <div class=\"calculadora-unica\">\r\n      <ion-icon name=\"calculator\"></ion-icon>\r\n      <ion-text><h3>Calculadora<br>Unica</h3></ion-text>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_calculadora_calculadora-select_calculadora-select_module_ts.js.map