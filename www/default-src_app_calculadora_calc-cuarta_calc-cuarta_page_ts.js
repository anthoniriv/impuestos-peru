(self["webpackChunkcalculator_welquer_app"] = self["webpackChunkcalculator_welquer_app"] || []).push([["default-src_app_calculadora_calc-cuarta_calc-cuarta_page_ts"],{

/***/ 8779:
/*!*************************************************************!*\
  !*** ./src/app/calculadora/calc-cuarta/calc-cuarta.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcCuartaPage": () => (/* binding */ CalcCuartaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_calc_cuarta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./calc-cuarta.page.html */ 8675);
/* harmony import */ var _calc_cuarta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-cuarta.page.scss */ 947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CalcCuartaPage = class CalcCuartaPage {
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
        var igv = this.venta * 0.08;
        igv = this.round(igv);
        this.igv = igv;
    }
    changeIGV() {
        this.igv = 0;
    }
    calcTotal() {
        var total = this.venta - this.igv;
        this.total = total.toString();
        // this.total = this.venta += this.igv;
    }
    calcularValorBase() {
        var valorBase = this.total * 1.08;
        valorBase = this.round(valorBase);
        this.venta = valorBase.toString();
    }
    //Function to round the values witouth using toFixed
    round(value) {
        return Math.round(value * 100) / 100;
    }
    calcularValorBase2() {
        var valorBase = 100 * this.igv / 8;
        valorBase = this.round(valorBase);
        this.venta = valorBase;
    }
    cuartaCheck(e) {
        var checkbox = e.target;
        this.checked1 = checkbox.checked;
        if (this.checked1) {
            if (this.venta > 1500) {
                this.changeIGV();
                this.calcTotal();
            }
            if (this.venta < 1500) {
                this.changeIGV();
                this.calcTotal();
            }
            console.log("Estoy en true");
        }
        if (this.checked2 == true && this.checked1 == true) {
            this.calcIgv();
            this.calcTotal();
        }
        if (this.checked2 == false && this.checked1 == true) {
            if (this.venta > 1500) {
                this.changeIGV();
                this.calcTotal();
            }
            if (this.venta < 1500) {
                this.changeIGV();
                this.calcTotal();
            }
        }
        if (this.checked2 == false && this.checked1 == false) {
            if (this.venta > 1500) {
                this.calcIgv();
                this.calcTotal();
            }
            if (this.venta < 1500) {
                this.changeIGV();
                this.calcTotal();
            }
        }
        if (this.checked1 == false) {
            if (this.venta > 1500) {
                this.calcIgv();
                this.calcTotal();
            }
            if (this.venta < 1500) {
                this.changeIGV();
                this.calcTotal();
            }
        }
    }
    superarCheck(e) {
        var checkbox = e.target;
        this.checked2 = checkbox.checked;
        if (this.checked2) {
            this.calcIgv();
            this.calcTotal();
        }
        if (this.checked2 == true && this.checked1 == true) {
            console.log("Estamos en true y true");
        }
        if (this.checked2 == false && this.checked1 == true) {
            console.log("Estamos en false y true");
        }
        if (this.checked2 == false && this.checked1 == false) {
            if (this.venta > 1500) {
                this.calcIgv();
                this.calcTotal();
            }
            if (this.venta < 1500) {
                this.changeIGV();
                this.calcTotal();
            }
        }
        if (this.checked2 == false) {
            this.changeIGV();
            this.calcTotal();
        }
    }
};
CalcCuartaPage.ctorParameters = () => [];
CalcCuartaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-calc-cuarta',
        template: _raw_loader_calc_cuarta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calc_cuarta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CalcCuartaPage);



/***/ }),

/***/ 947:
/*!***************************************************************!*\
  !*** ./src/app/calculadora/calc-cuarta/calc-cuarta.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url('3.jpg') 0 0/100% 100% no-repeat;\n  --ion-background-color: #f4f5f8;\n}\nion-content ion-item {\n  color: #03335e;\n  --background: rgba(255, 255, 255, 0) !important;\n  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.178));\n}\nion-content .title {\n  color: #fff;\n  padding-top: 105px;\n  padding-bottom: 115px;\n  text-align: center;\n  font-size: 30px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content .sub_title {\n  color: #03335e;\n  text-align: center;\n  margin-top: 20px;\n  padding-bottom: 20px;\n  font-size: 19px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n}\nion-content .main .labels {\n  margin: 0;\n  color: #03335e;\n  font-size: 16px;\n  padding-left: 45px;\n  font-weight: 400;\n}\nion-content .main .inputs {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 15px;\n}\nion-content .main .inputs ion-input {\n  --border-color: var(--ion-color-danger, #f1453d);\n  --background: white;\n  font-size: 23px;\n  color: #4D4D4D;\n  border-radius: 18px !important;\n  padding-left: 35px !important;\n  border: solid 2px #20368038;\n  z-index: 0;\n}\nion-content .main .select {\n  background: linear-gradient(90deg, #0D2B56, #005AA3) !important;\n  color: #fff;\n  width: 80%;\n  height: 35px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-bottom: 10px;\n  border-radius: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtY3VhcnRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtEQUFBO0VBQ0EsK0JBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtFQUNBLCtDQUFBO0VBQ0EscURBQUE7QUFFUjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7QUFFUjtBQUFJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FBRVI7QUFDUTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDWjtBQUNRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNaO0FBQVk7RUFDSSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBRUEsMkJBQUE7RUFDQSxVQUFBO0FBQ2hCO0FBRVE7RUFDSSwrREFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBWiIsImZpbGUiOiJjYWxjLWN1YXJ0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLy4uLy4uLy4uL2Fzc2V0cy9wbmcvMy5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBjb2xvcjogIzAzMzM1ZTtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgIWltcG9ydGFudDtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNzgpKTtcclxuICAgIH1cclxuICAgIC50aXRsZXtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDExNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgLnN1Yl90aXRsZXtcclxuICAgICAgICBjb2xvcjogIzAzMzM1ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLm1haW57XHJcbiAgICAgICAgLmxhYmVsc3tcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAzMzM1ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dHN7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNmMTQ1M2QpO1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNEQ0RDREO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXIgOiBzb2xpZCAycHggIzIwMzY4MDM4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VsZWN0e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwRDJCNTYsICMwMDVBQTMpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 8675:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora/calc-cuarta/calc-cuarta.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <h1 class=\"title\">CALCULADORA</h1>\n  <h2 class=\"sub_title\">Calcula tus impuestos a pagar</h2>\n  <div class=\"main\">\n    <h2 class=\"labels\">Total de Recibos por Honorarios</h2>\n    <ion-item class=\"inputs\" lines=\"none\">\n      <ion-input\n      inputmode=\"numeric\"\n      id=\"input-venta\"\n      (ionFocus)=\"focusInputVenta('input-venta')\" \n      (ionBlur)=\"unfocusInputVenta('input-venta')\"\n      (input)=\"getVenta($event.target.value)\"\n      placeholder=\"S/.0\"\n      [value]=\"venta\"\n      ></ion-input>\n    </ion-item>\n    <h2 class=\"labels\">Retencion</h2>\n    <ion-item class=\"inputs\" lines=\"none\">\n      <ion-input \n      inputmode=\"numeric\"\n      id=\"input-igv\"\n      (ionFocus)=\"focusInputIgv('input-igv')\" \n      (ionBlur)=\"unfocusInputIgv('input-igv')\"\n      (input)='getIgv($event.target.value)'\n      placeholder=\"S/.0\"\n      [value]=\"igv\"\n      disabled=\"true\"\n      ></ion-input>\n    </ion-item>\n    <h2 class=\"labels\">Neto a pagar</h2>\n    <ion-item class=\"inputs\" lines=\"none\">\n      <ion-input \n      inputmode=\"numeric\"\n      id=\"input-total\"\n      (ionFocus)=\"focusInputTotal('input-total')\" \n      (ionBlur)=\"unfocusInputTotal('input-total')\"\n      (input)='getTotal($event.target.value)'\n      placeholder=\"S/.0\"\n      [value]=\"total\"\n      disabled=\"true\"\n      ></ion-input>\n    </ion-item>\n    <div class=\"select\" lines=\"none\">\n      <ion-label>Hice mi suspension de renta cuarta.</ion-label>\n      <ion-checkbox slot=\"end\" color=\"primary\" (ionChange)=\"cuartaCheck($event)\"></ion-checkbox>\n    </div>\n    <div class=\"select\" lines=\"none\">\n      <ion-label>Supere los 32000.</ion-label>\n      <ion-checkbox slot=\"end\" color=\"primary\" (ionChange)=\"superarCheck($event)\"></ion-checkbox>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_calculadora_calc-cuarta_calc-cuarta_page_ts.js.map