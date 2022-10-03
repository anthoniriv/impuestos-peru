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
        this.isTouchedtotal_mesanteriorTot = false;
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
        this.total_mesanteriorTot = "";
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
            // this.calcCredito();
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
            this.calcTotalMesAnterior1();
            if (isNaN(this.credito_mesanterior)) {
                this.credito_mesanterior = "";
                this.total_mesanteriorTot = "";
            }
            console.log(this.credito_mesanterior);
        }
    }
    calcTotalMesAnterior1() {
        if (this.isTouchedCredt = true) {
            console.log('Total numero mes anterior');
            var numTotal = (this.credito_mesanterior * 100) / 18;
            numTotal = numTotal + this.credito_mesanterior;
            numTotal = this.round(numTotal);
            this.total_mesanteriorTot = numTotal;
            console.log(this.total_mesanteriorTot);
        }
    }
    calcTotalMesAnterior2(valor) {
        if (this.isTouchedtotal_mesanteriorTot = true) {
            console.log('Total numero mes anterior');
            this.total_mesanteriorTot = parseFloat(valor);
            var numIGV = this.total_mesanteriorTot * 0.18;
            numIGV = this.round(numIGV);
            this.credito_mesanterior = numIGV;
            this.calcIgvPagar();
            if (isNaN(this.total_mesanteriorTot)) {
                this.credito_mesanterior = "";
                this.total_mesanteriorTot = "";
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
    focusInputCredtTot(input) {
        this.isTouchedTotal = false;
        this.isTouchedVenta = false;
        this.isTouchedIgv = false;
        this.isTouchedCompras = false;
        this.isTouchedCredt = false;
        this.isTouchedtotal_mesanteriorTot = true;
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
    unfocusInputCredtTot(input) {
        this.total_mesanteriorTot = false;
        document.getElementById(`${input}`).style.border = "solid 1px #20368038";
    }
    //Calculator Functions
    calcIgv() {
        var igv = this.venta * 0.18;
        igv = this.round(igv);
        this.igv = igv;
    }
    calcCredito() {
        console.log('❤❤❤');
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
        var comprasTotal = this.compras / 1.18;
        var creditoFiscal1 = comprasTotal * 0.18;
        this.creditofiscal = this.round(creditoFiscal1);
        comprasTotal = this.round(comprasTotal);
        this.total_compras = comprasTotal.toString();
        // this.total = this.venta += this.igv;
    }
    calcularValorBase() {
        var valorBase = this.total / 1.18;
        valorBase = this.round(valorBase);
        this.venta = valorBase.toString();
    }
    calcIgvPagar() {
        var igv_pagar = this.igv - this.creditofiscal;
        if (isNaN(this.credito_mesanterior)) {
            igv_pagar = this.round(igv_pagar);
            this.igv_pagar = igv_pagar.toString();
        }
        else {
            var igv_pagar = this.igv - this.creditofiscal - this.credito_mesanterior;
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
        this.credito_mesanterior = "";
        this.total_mesanteriorTot = "";
        this.isTouchedVenta = false;
        this.isTouchedIgv = false;
        this.isTouchedTotal = false;
        this.isTouchedCompras = false;
        this.isTouchedCredt = false;
        this.isTouchedtotal_mesanteriorTot = false;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top2 {\n  background: #e4ecf7;\n}\n\nion-item {\n  --background: rgba(32, 54, 128, 0);\n  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.178));\n}\n\n.main {\n  --background: url('base.png') 0 0/100% 100% no-repeat;\n  --ion-background-color: #f4f5f8;\n}\n\n.main .title {\n  color: #fff;\n  padding-top: 105px;\n  padding-bottom: 230px;\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\n\n.main .sub_title {\n  color: #03335e;\n  text-align: center;\n  margin-top: 20px;\n  font-size: 19px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.main .labels {\n  margin: 0;\n  color: #03335e;\n  font-size: 16px;\n  padding-left: 45px;\n  font-weight: 400;\n}\n\n.main .inputs {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 15px;\n}\n\n.main .inputs ion-input {\n  --border-color: var(--ion-color-danger, #f1453d);\n  --background: white;\n  font-size: 23px;\n  color: #4D4D4D;\n  border-radius: 18px !important;\n  padding-left: 35px !important;\n  margin-left: -40px !important;\n  border: solid 2px #20368038;\n  z-index: 0;\n}\n\n.main .selector-tipo {\n  width: 80%;\n  margin: auto;\n  margin-top: 25px;\n  padding-left: 10px;\n  padding-right: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 12px;\n  color: #fff;\n  background: linear-gradient(90deg, #0D2B56, #005AA3);\n}\n\n.main .button {\n  margin-top: 20px !important;\n  margin-bottom: 20px !important;\n  margin: auto;\n  width: 80%;\n  --background: linear-gradient(90deg, #0D2B56, #005AA3) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtYW51YWwxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxrQ0FBQTtFQUNBLHFEQUFBO0FBRUo7O0FBQUE7RUFDSSxxREFBQTtFQUNBLCtCQUFBO0FBR0o7O0FBQUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtBQUVSOztBQUFJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQUVSOztBQUFJO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUVSOztBQUFJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVSOztBQURRO0VBQ0ksZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRUEsMkJBQUE7RUFDQSxVQUFBO0FBRVo7O0FBQ0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvREFBQTtBQUNSOztBQUNJO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUVBQUE7QUFDUiIsImZpbGUiOiJjYWxjLWFudWFsMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wMntcclxuICBiYWNrZ3JvdW5kOiAjZTRlY2Y3O1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDMyLCA1NCwgMTI4LCAwKTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE3OCkpO1xyXG59XHJcbi5tYWlue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL3BuZy9iYXNlLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmODtcclxuICAgIC5tYWluMntcclxuICAgIH1cclxuICAgIC50aXRsZXtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIzMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgLnN1Yl90aXRsZXtcclxuICAgICAgICBjb2xvcjogIzAzMzM1ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmxhYmVsc3tcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICMwMzMzNWU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgLmlucHV0c3tcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNmMTQ1M2QpO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNEQ0RDREO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTQwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXIgOiBzb2xpZCAycHggIzIwMzY4MDM4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWxlY3Rvci10aXBve1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMEQyQjU2LCAjMDA1QUEzKTtcclxuICAgIH1cclxuICAgIC5idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzBEMkI1NiwgIzAwNUFBMykgIWltcG9ydGFudDtcclxufVxyXG59XHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"top2\">\r\n  <img src=\"./../../../assets/png/top2.png\" alt=\"\">\r\n</div>\r\n<ion-content class=\"main\">\r\n  <!-- <h1 class=\"title\">CALCULADORA</h1> -->\r\n  <!-- <h2 class=\"sub_title\">Calcula tus impuestos a pagar</h2> -->\r\n<!-- <ion-content class=\"main2\" style=\"height: 40%;--background: rgba(255, 255, 255, 0);\"> -->\r\n  <div class=\"main2\">\r\n\r\n    <h2 class=\"labels\">Total de Ventas</h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-label\r\n      position=\"start\"\r\n      style=\"z-index: 1;margin-left: 1rem;\"\r\n      >S/</ion-label>\r\n      <ion-input\r\n      inputmode=\"numeric\"\r\n      id=\"input-total\"\r\n      (ionFocus)=\"focusInputTotal('input-total')\"\r\n      (ionBlur)=\"unfocusInputTotal('input-total')\"\r\n      (input)='getTotal($event.target.value)'\r\n      [value]=\"total\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <h2 class=\"labels\">IGV a Pagar (Ventas)</h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-label\r\n      position=\"start\"\r\n      style=\"z-index: 1;margin-left: 1rem;\"\r\n      >S/</ion-label>\r\n      <ion-input\r\n      inputmode=\"numeric\"\r\n      id=\"input-igv\"\r\n      (ionFocus)=\"focusInputIgv('input-igv')\"\r\n      (ionBlur)=\"unfocusInputIgv('input-igv')\"\r\n      (input)='getIgv($event.target.value)'\r\n      [value]=\"igv\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <h2 class=\"labels\">Sub Total (Ventas)</h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-label\r\n      position=\"start\"\r\n      style=\"z-index: 1;margin-left: 1rem;\"\r\n      >S/</ion-label>\r\n      <ion-input\r\n      inputmode=\"numeric\"\r\n      id=\"input-venta\"\r\n      (ionFocus)=\"focusInputVenta('input-venta')\"\r\n      (ionBlur)=\"unfocusInputVenta('input-venta')\"\r\n      (input)=\"getVenta($event.target.value)\"\r\n      [value]=\"venta\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <h2 class=\"labels\">Total de Compras</h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-label\r\n      position=\"start\"\r\n      style=\"z-index: 1;margin-left: 1rem;\"\r\n      >S/</ion-label>\r\n    <ion-input\r\n    inputmode=\"numeric\"\r\n    id=\"input-compra\"\r\n    (ionFocus)=\"focusInputCompras('input-compra')\"\r\n    (ionBlur)=\"unfocusInputCompras('input-compra')\"\r\n    (input)=\"getCompra($event.target.value)\"\r\n    [value]=\"compras\"\r\n    ></ion-input>\r\n    </ion-item>\r\n    <h2 class=\"labels\">IGV/CRED. Fiscal</h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-label\r\n      position=\"start\"\r\n      style=\"z-index: 1;margin-left: 1rem;\"\r\n      >S/</ion-label>\r\n    <ion-input\r\n    inputmode=\"numeric\"\r\n    id=\"input-igv\"\r\n    (ionFocus)=\"focusInputIgv('input-igv')\"\r\n    (ionBlur)=\"unfocusInputIgv('input-igv')\"\r\n    [value]=\"creditofiscal\"\r\n    disabled=\"true\"\r\n    ></ion-input>\r\n    </ion-item>\r\n    <h2 class=\"labels\">Sub Total de Compras</h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-label\r\n      position=\"start\"\r\n      style=\"z-index: 1;margin-left: 1rem;\"\r\n      >S/</ion-label>\r\n    <ion-input\r\n    inputmode=\"numeric\"\r\n    id=\"input-total\"\r\n    [value]=\"total_compras\"\r\n    disabled=\"true\"\r\n    ></ion-input>\r\n    </ion-item>\r\n    <h2 class=\"labels\">Credito Fiscal Mes Anterior</h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-label\r\n      position=\"start\"\r\n      style=\"z-index: 1;margin-left: 1rem;\"\r\n      >S/</ion-label>\r\n    <ion-input\r\n    inputmode=\"numeric\"\r\n    id=\"input-credt\"\r\n    (ionFocus)=\"focusInputCredt('input-credt')\"\r\n    (ionBlur)=\"unfocusInputCredt('input-credt')\"\r\n    (input)=\"getCredtMes($event.target.value)\"\r\n    placeholder=\"0\"\r\n    [value]=\"credito_mesanterior\"\r\n    ></ion-input>\r\n    </ion-item>\r\n    <h2 class=\"labels\">Compras que representan el total<br>  del credito fiscal anterior</h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-label\r\n      position=\"start\"\r\n      style=\"z-index: 1;margin-left: 1rem;\"\r\n      >S/</ion-label>\r\n    <ion-input\r\n    inputmode=\"numeric\"\r\n    id=\"input-credtTot\"\r\n    (ionFocus)=\"focusInputCredtTot('input-credtTot')\"\r\n    (ionBlur)=\"unfocusInputCredtTot('input-credtTot')\"\r\n    (input)=\"calcTotalMesAnterior2($event.target.value)\"\r\n    placeholder=\"0\"\r\n    [value]=\"total_mesanteriorTot\"\r\n    ></ion-input>\r\n    </ion-item>\r\n    <h2 class=\"labels\">IGV a Pagar</h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-label\r\n      position=\"start\"\r\n      style=\"z-index: 1;margin-left: 1rem;\"\r\n      >S/</ion-label>\r\n    <ion-input\r\n    inputmode=\"numeric\"\r\n    id=\"input-venta\"\r\n    [value]=\"igv_pagar\"\r\n    disabled=\"true\"\r\n    ></ion-input>\r\n    </ion-item>\r\n  <!-- </ion-content> -->\r\n<div class=\"selector-tipo\">\r\n  <ion-label>Tipo de Regimen</ion-label>\r\n  <ion-select [value]=\"selected\" interface=\"action-sheet\" okText=\"Elegir\" cancelText=\"Cancelar\" (ionChange)=\"regimenChange($event)\">\r\n    <ion-select-option value=\"default\"></ion-select-option>\r\n    <ion-select-option value=\"RER\">Régimen Especial de Renta</ion-select-option>\r\n    <ion-select-option value=\"RMT\">Régimen MYPE Tributario</ion-select-option>\r\n    <ion-select-option value=\"RG\">Régimen General</ion-select-option>\r\n  </ion-select>\r\n</div>\r\n<ion-item style=\"padding-left: 30px;font-size: 24px;color: #03335e;\" lines=\"none\">\r\n  <ion-label>{{regimen}}</ion-label>\r\n</ion-item>\r\n</div>\r\n\r\n<!-- <ion-button class=\"button\"  expand=\"block\" (click)=\"reiniciar()\">Reiniciar</ion-button> -->\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_calculadora_calc-anual1_calc-anual1_page_ts.js.map