(self["webpackChunkcalculator_welquer_app"] = self["webpackChunkcalculator_welquer_app"] || []).push([["default-src_app_calculadora_calc-unica_calc-unica_page_ts"],{

/***/ 5378:
/*!***********************************************************!*\
  !*** ./src/app/calculadora/calc-unica/calc-unica.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcUnicaPage": () => (/* binding */ CalcUnicaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_calc_unica_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./calc-unica.page.html */ 8736);
/* harmony import */ var _calc_unica_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-unica.page.scss */ 6922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CalcUnicaPage = class CalcUnicaPage {
    constructor() {
        this.isTouchedVenta = false;
        this.isTouchedIgv = false;
        this.isTouchedTotal = false;
    }
    ngOnInit() {
        this.clearAll();
    }
    //Use clearall function to clear all the values in the calculator
    //Function to clear all the values
    clearAll() {
        this.venta = '';
        this.igv = '';
        this.total = '';
    }
    //Get Data Functions
    getVenta(valor) {
        // eslint-disable-next-line no-cond-assign
        if (this.isTouchedVenta = true) {
            console.log('Estoy calculando en venta');
            this.venta = parseFloat(valor);
            this.calcIgv();
            this.calcTotal();
            //Conditional to check if venta is NaN
            if (isNaN(this.venta)) {
                this.igv = '';
                this.total = '';
                this.venta = '';
            }
            console.log(this.venta);
        }
    }
    getIgv(valor) {
        // eslint-disable-next-line no-cond-assign
        if (this.isTouchedIgv = true) {
            console.log('Estoy calculando en igv');
            this.igv = parseFloat(valor);
            this.calcularValorBase2();
            this.calcTotal();
            //Conditional to check if venta is NaN
            if (isNaN(this.igv)) {
                this.venta = '';
                this.total = '';
                this.igv = '';
            }
            console.log(this.igv);
        }
    }
    getTotal(valor) {
        // eslint-disable-next-line no-cond-assign
        if (this.isTouchedTotal = true) {
            console.log('Estoy calculando en total');
            this.total = parseFloat(valor);
            this.calcularValorBase();
            this.calcIgv();
            //Conditional to check if venta is NaN
            if (isNaN(this.total)) {
                this.venta = '';
                this.igv = '';
                this.total = '';
            }
            console.log(this.total);
        }
    }
    //Change Color Functions
    focusInputVenta(input) {
        this.isTouchedIgv = false;
        this.isTouchedTotal = false;
        this.isTouchedVenta = true;
        console.log(`${this.isTouchedVenta} es verdadero ahora`);
        document.getElementById(`${input}`).style.border = 'solid 2px #203680';
    }
    focusInputIgv(input) {
        this.isTouchedIgv = true;
        this.isTouchedTotal = false;
        this.isTouchedVenta = false;
        console.log(`${this.isTouchedIgv} es verdadero ahora`);
        document.getElementById(`${input}`).style.border = 'solid 2px #203680';
    }
    focusInputTotal(input) {
        this.isTouchedTotal = true;
        this.isTouchedVenta = false;
        this.isTouchedIgv = false;
        console.log(`${this.isTouchedTotal} es verdadero ahora`);
        document.getElementById(`${input}`).style.border = 'solid 2px #203680';
    }
    unfocusInputVenta(input) {
        this.isTouchedVenta = false;
        console.log(`${this.isTouchedVenta} es falso ahora`);
        document.getElementById(`${input}`).style.border = 'solid 1px #20368038';
    }
    unfocusInputIgv(input) {
        this.isTouchedIgv = false;
        console.log(`${this.isTouchedVenta} es falso ahora`);
        document.getElementById(`${input}`).style.border = 'solid 1px #20368038';
    }
    unfocusInputTotal(input) {
        this.isTouchedTotal = false;
        console.log(`${this.isTouchedVenta} es falso ahora`);
        document.getElementById(`${input}`).style.border = 'solid 1px #20368038';
    }
    //Calculator Functions
    calcIgv() {
        let igv = this.venta * 0.18;
        igv = this.round(igv);
        this.igv = igv;
    }
    calcTotal() {
        const total = this.venta + this.igv;
        this.total = total.toString();
        // this.total = this.venta += this.igv;
    }
    calcularValorBase() {
        let valorBase = this.total / 1.18;
        valorBase = this.round(valorBase);
        this.venta = valorBase.toString();
    }
    //Function to round the values witouth using toFixed
    round(value) {
        return Math.round(value * 100) / 100;
    }
    calcularValorBase2() {
        let valorBase = 100 * this.igv / 18;
        valorBase = this.round(valorBase);
        this.venta = valorBase;
    }
    //Function to reset
    reset() {
        this.clearAll();
    }
};
CalcUnicaPage.ctorParameters = () => [];
CalcUnicaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-calc-unica',
        template: _raw_loader_calc_unica_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calc_unica_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CalcUnicaPage);



/***/ }),

/***/ 6922:
/*!*************************************************************!*\
  !*** ./src/app/calculadora/calc-unica/calc-unica.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top2 {\n  background: #e4ecf7;\n}\n\nion-content {\n  --background: url('base.png') 0 0/100% 100% no-repeat;\n  --ion-background-color: #f4f5f8;\n}\n\nion-content ion-item {\n  --background: rgba(32, 54, 128, 0);\n  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.178));\n}\n\nion-content .title {\n  color: #fff;\n  padding-top: 105px;\n  padding-bottom: 230px;\n  text-align: center;\n  font-size: 30px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\n\nion-content .sub_title {\n  color: #03335e;\n  text-align: center;\n  margin-top: 20px;\n  padding-bottom: 20px;\n  font-size: 19px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nion-content .main {\n  height: 80%;\n  --background:rgba(255, 255, 255, 0);\n}\n\nion-content .main .labels {\n  margin: 0;\n  color: #03335e;\n  font-size: 16px;\n  padding-left: 45px;\n  font-weight: 400;\n}\n\nion-content .main .inputs {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 15px;\n}\n\nion-content .main .inputs ion-input {\n  --border-color: var(--ion-color-danger, #f1453d);\n  --background: white;\n  font-size: 23px;\n  color: #4D4D4D;\n  border-radius: 18px !important;\n  padding-left: 35px !important;\n  margin-left: -30px !important;\n  border: solid 2px #20368038;\n  z-index: 0;\n}\n\nion-content .button {\n  margin-top: 20px !important;\n  padding: auto;\n  margin: auto;\n  width: 80%;\n  --background: linear-gradient(90deg, #0D2B56, #005AA3) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtdW5pY2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNJLHFEQUFBO0VBQ0EsK0JBQUE7QUFFSjs7QUFESTtFQUNJLGtDQUFBO0VBQ0EscURBQUE7QUFHUjs7QUFESTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0FBR1I7O0FBREk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFHUjs7QUFESTtFQUNJLFdBQUE7RUFDQSxtQ0FBQTtBQUdSOztBQUZRO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUlaOztBQUZRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUlaOztBQUhZO0VBQ0ksZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRUEsMkJBQUE7RUFDQSxVQUFBO0FBSWhCOztBQUFJO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpRUFBQTtBQUVSIiwiZmlsZSI6ImNhbGMtdW5pY2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcDJ7XHJcbiAgYmFja2dyb3VuZDogI2U0ZWNmNztcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLy4uLy4uLy4uL2Fzc2V0cy9wbmcvYmFzZS5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMzIsIDU0LCAxMjgsIDApO1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE3OCkpO1xyXG4gICAgICB9XHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICAgIC5zdWJfdGl0bGV7XHJcbiAgICAgICAgY29sb3I6ICMwMzMzNWU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC5tYWlue1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgICAgIC5sYWJlbHN7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMzMzNWU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXRze1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjE0NTNkKTtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRENEQ0RDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXIgOiBzb2xpZCAycHggIzIwMzY4MDM4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwRDJCNTYsICMwMDVBQTMpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 8736:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora/calc-unica/calc-unica.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"top2\">\r\n  <img src=\"./../../../assets/png/top2.png\" alt=\"\">\r\n</div>\r\n<ion-content>\r\n  <!-- <h1 class=\"title\">CALCULADORA</h1> -->\r\n  <!-- <h2 class=\"sub_title\">Calcula tus impuestos a pagar</h2> -->\r\n  <ion-content class=\"main\">\r\n    <h2 class=\"labels\">Sub Total </h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-label\r\n      position=\"start\"\r\n      style=\"z-index: 1;margin-left: 1rem;\"\r\n      >S/</ion-label>\r\n      <ion-input\r\n      inputmode=\"numeric\"\r\n      position=\"floating\"\r\n      id=\"input-venta\"\r\n      (ionFocus)=\"focusInputVenta('input-venta')\"\r\n      (ionBlur)=\"unfocusInputVenta('input-venta')\"\r\n      (input)=\"getVenta($event.target.value)\"\r\n      [value]=\"venta\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <h2 class=\"labels\">IGV</h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-label\r\n      position=\"start\"\r\n      style=\"z-index: 1;margin-left: 1rem;\"\r\n      >S/</ion-label>\r\n      <ion-input\r\n      inputmode=\"numeric\"\r\n      position=\"floating\"\r\n      id=\"input-igv\"\r\n      (ionFocus)=\"focusInputIgv('input-igv')\"\r\n      (ionBlur)=\"unfocusInputIgv('input-igv')\"\r\n      (input)='getIgv($event.target.value)'\r\n      [value]=\"igv\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <h2 class=\"labels\">Total de Ventas</h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-label\r\n      position=\"start\"\r\n      style=\"z-index: 1;margin-left: 1rem;\"\r\n      >S/</ion-label>\r\n      <ion-input\r\n      inputmode=\"numeric\"\r\n      id=\"input-total\"\r\n      position=\"floating\"\r\n      (ionFocus)=\"focusInputTotal('input-total')\"\r\n      (ionBlur)=\"unfocusInputTotal('input-total')\"\r\n      (input)='getTotal($event.target.value)'\r\n      [value]=\"total\"\r\n      ></ion-input>\r\n    </ion-item>\r\n  </ion-content>\r\n  <ion-button class=\"button\"  expand=\"block\" (click)=\"reset()\">Reiniciar</ion-button>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_calculadora_calc-unica_calc-unica_page_ts.js.map