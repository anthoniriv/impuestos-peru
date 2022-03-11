(self["webpackChunkcalculator_welquer_app"] = self["webpackChunkcalculator_welquer_app"] || []).push([["default-src_app_calculadora_calc-anual1_calc-anual1_page_ts"],{

/***/ 9724:
/*!*************************************************************!*\
  !*** ./src/app/calculadora/calc-anual1/calc-anual1.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcAnual1Page": () => (/* binding */ CalcAnual1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_calc_anual1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./calc-anual1.page.html */ 8524);
/* harmony import */ var _calc_anual1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-anual1.page.scss */ 549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CalcAnual1Page = class CalcAnual1Page {
    constructor() {
        this.isTouchedVenta = false;
        this.isTouchedIgv = false;
        this.isTouchedTotal = false;
        this.isTouchedCompras = false;
        this.isTouchedCredt = false;
        this.options = [
            {
                "regimen": "Régimen Especial de Renta"
            },
            {
                "regimen": "Régimen MYPE Tributario"
            },
            {
                "regimen": "Régimen General"
            }
        ];
    }
    ngOnInit() {
        this.clearAll();
    }
    //
    clearAll() {
        this.venta = "";
        this.igv = "";
        this.total = "";
        this.compras = "";
        this.creditofiscal = "";
        this.total_compras = "";
        this.credito_mesanterior = "";
    }
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
    getCompra(valor) {
        if (this.isTouchedCompras = true) {
            console.log("Estoy calculando en compras");
            this.compras = parseFloat(valor);
            this.calcCredito();
            this.calcTotalCompras();
            this.calcIgvPagar();
            //Conditional to check if venta is NaN
            if (isNaN(this.compras)) {
                this.creditofiscal = "";
                this.total_compras = "";
                this.compras = "";
            }
            console.log(this.compras);
        }
    }
    getCredtMes(valor) {
        if (this.isTouchedCredt = true) {
            console.log("Estoy calculando en credmes");
            this.credito_mesanterior = parseFloat(valor);
            this.calcIgvPagar();
            //Conditional to check if venta is NaN
            if (isNaN(this.credito_mesanterior)) {
                this.credito_mesanterior = "";
            }
            console.log(this.credito_mesanterior);
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
    focusInputCompras(input) {
        this.isTouchedTotal = false;
        this.isTouchedVenta = false;
        this.isTouchedIgv = false;
        this.isTouchedCompras = true;
        console.log(`${this.isTouchedTotal} es verdadero ahora`);
        document.getElementById(`${input}`).style.border = "solid 2px #203680";
    }
    focusInputCredt(input) {
        this.isTouchedTotal = false;
        this.isTouchedVenta = false;
        this.isTouchedIgv = false;
        this.isTouchedCompras = false;
        this.isTouchedCredt = true;
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
    unfocusInputCompras(input) {
        this.isTouchedCompras = false;
        console.log(`${this.isTouchedVenta} es falso ahora`);
        document.getElementById(`${input}`).style.border = "solid 1px #20368038";
    }
    unfocusInputCredt(input) {
        this.isTouchedCredt = false;
        document.getElementById(`${input}`).style.border = "solid 1px #20368038";
    }
    //Calculator Functions
    calcIgv() {
        var igv = this.venta * 0.18;
        igv = this.round(igv);
        this.igv = igv;
    }
    calcCredito() {
        var credito = this.compras * 0.18;
        credito = this.round(credito);
        this.creditofiscal = credito;
    }
    calcTotal() {
        var total = this.venta + this.igv;
        this.total = total.toString();
        // this.total = this.venta += this.igv;
    }
    calcTotalCompras() {
        var comprasTotal = this.compras - this.creditofiscal;
        this.total_compras = comprasTotal.toString();
        // this.total = this.venta += this.igv;
    }
    calcularValorBase() {
        var valorBase = this.total / 1.18;
        valorBase = this.round(valorBase);
        this.venta = valorBase.toString();
    }
    calcIgvPagar() {
        var igv_pagar = this.total - this.total_compras;
        if (isNaN(this.credito_mesanterior)) {
            igv_pagar = this.round(igv_pagar);
            this.igv_pagar = igv_pagar.toString();
        }
        else {
            var igv_pagar = this.total - this.total_compras - this.credito_mesanterior;
            igv_pagar = this.round(igv_pagar);
            this.igv_pagar = igv_pagar.toString();
        }
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
    reiniciar() {
        this.venta = "";
        this.igv = "";
        this.total = "";
        this.compras = "";
        this.creditofiscal = "";
        this.total_compras = "";
        this.igv_pagar = "";
        this.isTouchedVenta = false;
        this.isTouchedIgv = false;
        this.isTouchedTotal = false;
        this.isTouchedCompras = false;
        this.isTouchedCredt = false;
        this.selected = "default";
    }
    //get the 1.5 of a value
    get1_5() {
        var valor = this.venta * 0.015;
        valor = this.round(valor);
        return valor;
    }
    get1() {
        var valor = this.venta * 0.01;
        valor = this.round(valor);
        return valor;
    }
    regimenChange($event) {
        this.selected = $event.target.value;
        console.log(this.selected);
        if (this.selected == "RER") {
            this.regimen = this.get1_5();
        }
        if (this.selected == "RMT") {
            this.regimen = this.get1();
        }
        if (this.selected == "RG") {
            this.regimen = this.get1_5();
        }
        if (this.selected == "default") {
            this.regimen = "";
        }
    }
};
CalcAnual1Page.ctorParameters = () => [];
CalcAnual1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-calc-anual1',
        template: _raw_loader_calc_anual1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calc_anual1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CalcAnual1Page);



/***/ }),

/***/ 549:
/*!***************************************************************!*\
  !*** ./src/app/calculadora/calc-anual1/calc-anual1.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: #f4f5f8;\n  --padding-top: 64px;\n}\nion-content ion-text {\n  color: #203680;\n}\nion-content ion-text h1 {\n  margin: 0;\n  padding: 0;\n  padding-left: 26px;\n  font-size: 26px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content ion-text h2 {\n  padding-top: 20px;\n  padding-left: 26px;\n  font-size: 15px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content .main {\n  padding-bottom: 25px !important;\n}\nion-content .main ion-input {\n  width: 80%;\n  --border-color: var(--ion-color-danger, #f1453d);\n  --background: white;\n  font-size: 23px;\n  color: #4D4D4D;\n  border-radius: 25px !important;\n  margin-bottom: 25px !important;\n  border: solid 2px #20368038;\n  padding-left: 35px !important;\n  margin-left: -40px !important;\n  z-index: 0;\n}\nion-content .main2 {\n  padding-bottom: 25px !important;\n}\nion-content .main2 ion-input {\n  width: 80%;\n  --border-color: var(--ion-color-danger, #f1453d);\n  --background: white;\n  font-size: 23px;\n  color: #4D4D4D;\n  border-radius: 25px !important;\n  margin-bottom: 25px !important;\n  border: solid 2px #20368038;\n  padding-left: 35px !important;\n  margin-left: -40px !important;\n  z-index: 0;\n}\nion-content .main3 {\n  padding-bottom: 25px !important;\n}\nion-content .main3 ion-input {\n  width: 80%;\n  --border-color: var(--ion-color-danger, #f1453d);\n  --background: white;\n  font-size: 23px;\n  color: #4D4D4D;\n  border-radius: 25px !important;\n  margin-bottom: 25px !important;\n  border: solid 2px #20368038;\n  padding-left: 35px !important;\n  margin-left: -40px !important;\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtYW51YWwxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBRFE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtBQUdaO0FBRFE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtBQUdaO0FBQUk7RUFDSSwrQkFBQTtBQUVSO0FBRFE7RUFDSSxVQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFHWjtBQUFJO0VBQ0ksK0JBQUE7QUFFUjtBQURRO0VBQ0ksVUFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBR1o7QUFDSTtFQUNJLCtCQUFBO0FBQ1I7QUFBUTtFQUNJLFVBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQUVaIiwiZmlsZSI6ImNhbGMtYW51YWwxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmODtcclxuICAgIC0tcGFkZGluZy10b3A6IDY0cHg7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgICBjb2xvcjogIzIwMzY4MDtcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1haW57XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjE0NTNkKTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzRENEQ0RDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlciA6IHNvbGlkIDJweCAjMjAzNjgwMzg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTQwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWFpbjJ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjE0NTNkKTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzRENEQ0RDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlciA6IHNvbGlkIDJweCAjMjAzNjgwMzg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTQwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1haW4ze1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2YxNDUzZCk7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgY29sb3I6ICM0RDRENEQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXIgOiBzb2xpZCAycHggIzIwMzY4MDM4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 8524:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora/calc-anual1/calc-anual1.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-text>\n    <h1>CALCULADORA</h1>\n  </ion-text>\n  <ion-text>\n  </ion-text>\n  <div class=\"main\">\n    <ion-text>\n      <h2>Sub Total(Ventas)</h2>\n    </ion-text>\n    <ion-item lines=\"none\">\n      <ion-label\n      position=\"start\"\n      style=\"z-index: 1;margin-left: 1rem;margin-top: -11px;\"\n      >S/</ion-label>\n      <ion-input\n      id=\"input-venta\"\n      (ionFocus)=\"focusInputVenta('input-venta')\" \n      (ionBlur)=\"unfocusInputVenta('input-venta')\"\n      (input)=\"getVenta($event.target.value)\"\n      [value]=\"venta\"\n      ></ion-input>\n    </ion-item>\n      <ion-text>\n      <h2>IGV</h2>\n    </ion-text>\n    <ion-item lines=\"none\">\n      <ion-label\n      position=\"start\"\n      style=\"z-index: 1;margin-left: 1rem;margin-top: -11px;\"\n      >S/</ion-label>\n      <ion-input \n      id=\"input-igv\"\n      (ionFocus)=\"focusInputIgv('input-igv')\" \n      (ionBlur)=\"unfocusInputIgv('input-igv')\"\n      (input)='getIgv($event.target.value)'\n      [value]=\"igv\"\n      ></ion-input>\n    </ion-item>\n    <ion-text>\n      <h2>Total de Ventas</h2>\n    </ion-text>\n    <ion-item>\n      <ion-label\n      position=\"start\"\n      style=\"z-index: 1;margin-left: 1rem;margin-top: -11px;\"\n      >S/</ion-label>\n      <ion-input \n      id=\"input-total\"\n      (ionFocus)=\"focusInputTotal('input-total')\" \n      (ionBlur)=\"unfocusInputTotal('input-total')\"\n      (input)='getTotal($event.target.value)'\n      [value]=\"total\"\n      ></ion-input>\n    </ion-item>\n  </div>\n  <div class=\"main2\">\n    <ion-text>\n      <h2>Sub Total(Compras)</h2>\n    </ion-text>\n    <ion-item lines=\"none\">\n      <ion-label\n      position=\"start\"\n      style=\"z-index: 1;margin-left: 1rem;margin-top: -11px;\"\n      >S/</ion-label>\n    <ion-input \n    id=\"input-compra\"\n    (ionFocus)=\"focusInputCompras('input-compra')\" \n    (ionBlur)=\"unfocusInputCompras('input-compra')\"\n    (input)=\"getCompra($event.target.value)\"\n    [value]=\"compras\"\n    ></ion-input>\n    </ion-item>\n    <ion-text>\n      <h2>IGV/CRED. Fiscal</h2>\n    </ion-text>\n    <ion-item lines=\"none\">\n      <ion-label\n      position=\"start\"\n      style=\"z-index: 1;margin-left: 1rem;margin-top: -11px;\"\n      >S/</ion-label>\n    <ion-input \n    id=\"input-igv\"\n    (ionFocus)=\"focusInputIgv('input-igv')\" \n    (ionBlur)=\"unfocusInputIgv('input-igv')\"\n    (input)='getCreditoFiscal($event.target.value)'\n    [value]=\"creditofiscal\"\n    disabled=\"true\"\n    ></ion-input>\n    </ion-item>\n    <ion-text>\n      <h2>Total de Compras</h2>\n    </ion-text>\n    <ion-item>\n      <ion-label\n      position=\"start\"\n      style=\"z-index: 1;margin-left: 1rem;margin-top: -11px;\"\n      >S/</ion-label>\n    <ion-input \n    id=\"input-total\"\n    [value]=\"total_compras\"\n    disabled=\"true\"\n    ></ion-input>\n    </ion-item>\n  </div>\n  <div class=\"main3\">\n    <ion-text>\n      <h2>Credito Fiscal Mes Anterior</h2>\n    </ion-text>\n    <ion-item>\n      <ion-label\n      position=\"start\"\n      style=\"z-index: 1;margin-left: 1rem;margin-top: -11px;\"\n      >S/</ion-label>\n    <ion-input\n    id=\"input-credt\"\n    (ionFocus)=\"focusInputCredt('input-credt')\" \n    (ionBlur)=\"unfocusInputCredt('input-credt')\"\n    (input)=\"getCredtMes($event.target.value)\"\n    placeholder=\"0\"\n    [value]=\"credito_mesanterior\"\n    ></ion-input>\n    </ion-item>\n    <ion-text>\n      <h2>IGV a Pagar</h2>\n    </ion-text>\n    <ion-item>\n      <ion-label\n      position=\"start\"\n      style=\"z-index: 1;margin-left: 1rem;margin-top: -11px;\"\n      >S/</ion-label>\n    <ion-input\n    id=\"input-venta\"\n    [value]=\"igv_pagar\"\n    disabled=\"true\"\n    ></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label>Tipo de Regimen</ion-label>\n      <ion-select [value]=\"selected\" interface=\"action-sheet\" okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"regimenChange($event)\">\n        <ion-select-option value=\"default\"></ion-select-option>\n        <ion-select-option value=\"RER\">Régimen Especial de Renta</ion-select-option>\n        <ion-select-option value=\"RMT\">Régimen MYPE Tributario</ion-select-option>\n        <ion-select-option value=\"RG\">Régimen General</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label>{{regimen}}</ion-label>\n    </ion-item>\n  </div>\n  <ion-button  expand=\"block\" (click)=\"reiniciar()\">Reinicar</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_calculadora_calc-anual1_calc-anual1_page_ts.js.map