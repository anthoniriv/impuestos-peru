(self["webpackChunkcalculator_welquer_app"] = self["webpackChunkcalculator_welquer_app"] || []).push([["default-src_app_calculadora_calc-anual2_calc-anual2_page_ts"],{

/***/ 7874:
/*!*************************************************************!*\
  !*** ./src/app/calculadora/calc-anual2/calc-anual2.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcAnual2Page": () => (/* binding */ CalcAnual2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_calc_anual2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./calc-anual2.page.html */ 1730);
/* harmony import */ var _calc_anual2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-anual2.page.scss */ 9277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CalcAnual2Page = class CalcAnual2Page {
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
};
CalcAnual2Page.ctorParameters = () => [];
CalcAnual2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-calc-anual2',
        template: _raw_loader_calc_anual2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calc_anual2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CalcAnual2Page);



/***/ }),

/***/ 9277:
/*!***************************************************************!*\
  !*** ./src/app/calculadora/calc-anual2/calc-anual2.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: #f4f5f8;\n  --padding-top: 64px;\n}\nion-content ion-text {\n  color: #203680;\n}\nion-content ion-text h1 {\n  margin: 0;\n  padding: 0;\n  padding-left: 26px;\n  font-size: 26px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content ion-text h2 {\n  padding-left: 26px;\n  font-size: 15px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content .main {\n  padding-bottom: 25px !important;\n}\nion-content .main ion-input {\n  width: 80%;\n  --border-color: var(--ion-color-danger, #f1453d);\n  --background: white;\n  font-size: 23px;\n  color: #4D4D4D;\n  border-radius: 25px !important;\n  padding-left: 25px !important;\n  margin-left: 25px !important;\n  margin-bottom: 25px !important;\n  border: solid 2px #20368038;\n}\nion-content .main2 {\n  padding-bottom: 25px !important;\n}\nion-content .main2 ion-input {\n  width: 80%;\n  --border-color: var(--ion-color-danger, #f1453d);\n  --background: white;\n  font-size: 23px;\n  color: #4D4D4D;\n  border-radius: 25px !important;\n  padding-left: 25px !important;\n  margin-left: 25px !important;\n  margin-bottom: 25px !important;\n  border: solid 2px #20368038;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtYW51YWwyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBRFE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtBQUdaO0FBRFE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7QUFHWjtBQUFJO0VBQ0ksK0JBQUE7QUFFUjtBQURRO0VBQ0ksVUFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUFHWjtBQUFJO0VBQ0ksK0JBQUE7QUFFUjtBQURRO0VBQ0ksVUFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUFHWiIsImZpbGUiOiJjYWxjLWFudWFsMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA2NHB4O1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgICAgY29sb3I6ICMyMDM2ODA7XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1haW57XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjE0NTNkKTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzRENEQ0RDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXIgOiBzb2xpZCAycHggIzIwMzY4MDM4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYWluMntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNmMTQ1M2QpO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNEQ0RDREO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlciA6IHNvbGlkIDJweCAjMjAzNjgwMzg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 1730:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora/calc-anual2/calc-anual2.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-text>\n    <h1>CALCULADORA</h1>\n  </ion-text>\n  <ion-text>\n    <h2>Lorem Ipsum Lorem Ipsum Lorem Ipsum</h2>\n  </ion-text>\n  <div class=\"main\">\n      <ion-text>\n        <h2>Total de Ventas</h2>\n      </ion-text>\n      <ion-input\n      id=\"input-venta\"\n      (ionFocus)=\"focusInputVenta('input-venta')\" \n      (ionBlur)=\"unfocusInputVenta('input-venta')\"\n      (input)=\"getVenta($event.target.value)\"\n      placeholder=\"S/.0\"\n      [value]=\"venta\"\n      ></ion-input>\n      <ion-text>\n        <h2>IGV</h2>\n      </ion-text>\n      <ion-input \n      id=\"input-igv\"\n      (ionFocus)=\"focusInputIgv('input-igv')\" \n      (ionBlur)=\"unfocusInputIgv('input-igv')\"\n      (input)='getIgv($event.target.value)'\n      placeholder=\"S/.0\"\n      [value]=\"igv\"\n      ></ion-input>\n      <ion-text>\n        <h2>Sub Total</h2>\n      </ion-text>\n      <ion-input \n      id=\"input-total\"\n      (ionFocus)=\"focusInputTotal('input-total')\" \n      (ionBlur)=\"unfocusInputTotal('input-total')\"\n      (input)='getTotal($event.target.value)'\n      placeholder=\"S/.0\"\n      [value]=\"total\"\n      ></ion-input>\n  </div>\n  <div class=\"main2\">\n    <ion-text>\n      <h2>Total de Compras</h2>\n    </ion-text>\n    <ion-input\n    id=\"input-venta\"\n    (ionFocus)=\"focusInputVenta('input-venta')\" \n    (ionBlur)=\"unfocusInputVenta('input-venta')\"\n    (input)=\"getVenta($event.target.value)\"\n    placeholder=\"S/.0\"\n    [value]=\"venta\"\n    ></ion-input>\n    <ion-text>\n      <h2>IGV/CRED. Fiscal</h2>\n    </ion-text>\n    <ion-input \n    id=\"input-igv\"\n    (ionFocus)=\"focusInputIgv('input-igv')\" \n    (ionBlur)=\"unfocusInputIgv('input-igv')\"\n    (input)='getIgv($event.target.value)'\n    placeholder=\"S/.0\"\n    [value]=\"igv\"\n    ></ion-input>\n    <ion-text>\n      <h2>Sub Total</h2>\n    </ion-text>\n    <ion-input \n    id=\"input-total\"\n    (ionFocus)=\"focusInputTotal('input-total')\" \n    (ionBlur)=\"unfocusInputTotal('input-total')\"\n    (input)='getTotal($event.target.value)'\n    placeholder=\"S/.0\"\n    [value]=\"total\"\n    ></ion-input>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_calculadora_calc-anual2_calc-anual2_page_ts.js.map