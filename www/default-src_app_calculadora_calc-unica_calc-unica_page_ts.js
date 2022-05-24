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
        this.venta = "";
        this.igv = "";
        this.total = "";
    }
    //Get Data Functions
    getVenta(valor) {
        if (this.isTouchedVenta = true) {
            console.log("Estoy calculando en venta");
            this.venta = parseFloat(valor);
            this.calcIgv();
            this.calcTotal();
            //Conditional to check if venta is NaN
            if (isNaN(this.venta)) {
                this.igv = "";
                this.total = "";
                this.venta = "";
            }
            console.log(this.venta);
        }
    }
    getIgv(valor) {
        if (this.isTouchedIgv = true) {
            console.log("Estoy calculando en igv");
            this.igv = parseFloat(valor);
            this.calcularValorBase2();
            this.calcTotal();
            //Conditional to check if venta is NaN
            if (isNaN(this.igv)) {
                this.venta = "";
                this.total = "";
                this.igv = "";
            }
            console.log(this.igv);
        }
    }
    getTotal(valor) {
        if (this.isTouchedTotal = true) {
            console.log("Estoy calculando en total");
            this.total = parseFloat(valor);
            this.calcularValorBase();
            this.calcIgv();
            //Conditional to check if venta is NaN
            if (isNaN(this.total)) {
                this.venta = "";
                this.igv = "";
                this.total = "";
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
        document.getElementById(`${input}`).style.border = "solid 2px #203680";
    }
    focusInputIgv(input) {
        this.isTouchedIgv = true;
        this.isTouchedTotal = false;
        this.isTouchedVenta = false;
        console.log(`${this.isTouchedIgv} es verdadero ahora`);
        document.getElementById(`${input}`).style.border = "solid 2px #203680";
    }
    focusInputTotal(input) {
        this.isTouchedTotal = true;
        this.isTouchedVenta = false;
        this.isTouchedIgv = false;
        console.log(`${this.isTouchedTotal} es verdadero ahora`);
        document.getElementById(`${input}`).style.border = "solid 2px #203680";
    }
    unfocusInputVenta(input) {
        this.isTouchedVenta = false;
        console.log(`${this.isTouchedVenta} es falso ahora`);
        document.getElementById(`${input}`).style.border = "solid 1px #20368038";
    }
    unfocusInputIgv(input) {
        this.isTouchedIgv = false;
        console.log(`${this.isTouchedVenta} es falso ahora`);
        document.getElementById(`${input}`).style.border = "solid 1px #20368038";
    }
    unfocusInputTotal(input) {
        this.isTouchedTotal = false;
        console.log(`${this.isTouchedVenta} es falso ahora`);
        document.getElementById(`${input}`).style.border = "solid 1px #20368038";
    }
    //Calculator Functions
    calcIgv() {
        var igv = this.venta * 0.18;
        igv = this.round(igv);
        this.igv = igv;
    }
    calcTotal() {
        var total = this.venta + this.igv;
        this.total = total.toString();
        // this.total = this.venta += this.igv;
    }
    calcularValorBase() {
        var valorBase = this.total / 1.18;
        valorBase = this.round(valorBase);
        this.venta = valorBase.toString();
    }
    //Function to round the values witouth using toFixed
    round(value) {
        return Math.round(value * 100) / 100;
    }
    calcularValorBase2() {
        var valorBase = 100 * this.igv / 18;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url('3.jpg') 0 0/100% 100% no-repeat;\n  --ion-background-color: #f4f5f8;\n}\nion-content ion-item {\n  --background: rgba(32, 54, 128, 0);\n  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.178));\n}\nion-content .title {\n  color: #fff;\n  padding-top: 105px;\n  padding-bottom: 115px;\n  text-align: center;\n  font-size: 30px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content .sub_title {\n  color: #03335e;\n  text-align: center;\n  margin-top: 20px;\n  padding-bottom: 20px;\n  font-size: 19px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n}\nion-content .main {\n  height: 36%;\n  --background:rgba(255, 255, 255, 0);\n}\nion-content .main .labels {\n  margin: 0;\n  color: #03335e;\n  font-size: 16px;\n  padding-left: 45px;\n  font-weight: 400;\n}\nion-content .main .inputs {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 15px;\n}\nion-content .main .inputs ion-input {\n  --border-color: var(--ion-color-danger, #f1453d);\n  --background: white;\n  font-size: 23px;\n  color: #4D4D4D;\n  border-radius: 18px !important;\n  padding-left: 35px !important;\n  margin-left: -30px !important;\n  border: solid 2px #20368038;\n  z-index: 0;\n}\nion-content .button {\n  margin-top: 20px !important;\n  padding: auto;\n  margin: auto;\n  width: 80%;\n  --background: linear-gradient(90deg, #0D2B56, #005AA3) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtdW5pY2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0RBQUE7RUFDQSwrQkFBQTtBQUNKO0FBQUk7RUFDSSxrQ0FBQTtFQUNBLHFEQUFBO0FBRVI7QUFBSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0FBRVI7QUFBSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0VBQ0EsbUNBQUE7QUFFUjtBQURRO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBR1o7QUFGWTtFQUNJLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDJCQUFBO0VBQ0EsVUFBQTtBQUdoQjtBQUNJO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpRUFBQTtBQUNSIiwiZmlsZSI6ImNhbGMtdW5pY2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvcG5nLzMuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4O1xyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDMyLCA1NCwgMTI4LCAwKTtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNzgpKTtcclxuICAgICAgfVxyXG4gICAgLnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTE1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICAuc3ViX3RpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjMDMzMzVlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAubWFpbntcclxuICAgICAgICBoZWlnaHQ6IDM2JTtcclxuICAgICAgICAtLWJhY2tncm91bmQ6cmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgICAgICAubGFiZWxze1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDMzMzVlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucHV0c3tcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2YxNDUzZCk7XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM0RDRENEQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyIDogc29saWQgMnB4ICMyMDM2ODAzODtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMEQyQjU2LCAjMDA1QUEzKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <h1 class=\"title\">CALCULADORA</h1>\n  <h2 class=\"sub_title\">Calcula tus impuestos a pagar</h2>\n  <ion-content class=\"main\">\n    <h2 class=\"labels\">Sub Total </h2>\n    <ion-item class=\"inputs\" lines=\"none\">\n      <ion-label\n      position=\"start\"\n      style=\"z-index: 1;margin-left: 1rem;\"\n      >S/</ion-label>\n      <ion-input\n      inputmode=\"numeric\"\n      position=\"floating\"\n      id=\"input-venta\"\n      (ionFocus)=\"focusInputVenta('input-venta')\" \n      (ionBlur)=\"unfocusInputVenta('input-venta')\"\n      (input)=\"getVenta($event.target.value)\"\n      [value]=\"venta\"\n      ></ion-input>\n    </ion-item>\n    <h2 class=\"labels\">IGV</h2>\n    <ion-item class=\"inputs\" lines=\"none\">\n      <ion-label\n      position=\"start\"\n      style=\"z-index: 1;margin-left: 1rem;\"\n      >S/</ion-label>\n      <ion-input \n      inputmode=\"numeric\"\n      position=\"floating\"\n      id=\"input-igv\"\n      (ionFocus)=\"focusInputIgv('input-igv')\" \n      (ionBlur)=\"unfocusInputIgv('input-igv')\"\n      (input)='getIgv($event.target.value)'\n      [value]=\"igv\"\n      ></ion-input>\n    </ion-item>\n    <h2 class=\"labels\">Total de Ventas</h2>\n    <ion-item class=\"inputs\" lines=\"none\">\n      <ion-label\n      position=\"start\"\n      style=\"z-index: 1;margin-left: 1rem;\"\n      >S/</ion-label>\n      <ion-input \n      inputmode=\"numeric\"\n      id=\"input-total\"\n      position=\"floating\"\n      (ionFocus)=\"focusInputTotal('input-total')\" \n      (ionBlur)=\"unfocusInputTotal('input-total')\"\n      (input)='getTotal($event.target.value)'\n      [value]=\"total\"\n      ></ion-input>\n    </ion-item>\n  </ion-content>\n  <ion-button class=\"button\"  expand=\"block\" (click)=\"reset()\">Reiniciar</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_calculadora_calc-unica_calc-unica_page_ts.js.map