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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: #f4f5f8;\n  --padding-top: 64px;\n}\nion-content ion-text {\n  color: #203680;\n}\nion-content ion-text h1 {\n  margin: 0;\n  padding: 0;\n  padding-left: 26px;\n  font-size: 26px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content ion-text h2 {\n  padding-left: 26px;\n  font-size: 15px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\nion-content .main ion-input {\n  width: 80%;\n  --border-color: var(--ion-color-danger, #f1453d);\n  --background: white;\n  font-size: 23px;\n  color: #4D4D4D;\n  border-radius: 25px !important;\n  padding-left: 25px !important;\n  margin-left: 25px !important;\n  margin-bottom: 25px !important;\n  border: solid 2px #20368038;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtY3VhcnRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBRFE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtBQUdaO0FBRFE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7QUFHWjtBQUNRO0VBQ0ksVUFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUFDWiIsImZpbGUiOiJjYWxjLWN1YXJ0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA2NHB4O1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgICAgY29sb3I6ICMyMDM2ODA7XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1haW57XHJcbiAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2YxNDUzZCk7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgY29sb3I6ICM0RDRENEQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyIDogc29saWQgMnB4ICMyMDM2ODAzODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-text>\n    <h1>CALCULADORA</h1>\n  </ion-text>\n  <ion-text>\n  </ion-text>\n  <div class=\"main\">\n    <ion-text>\n      <h2>Total de Recibos por Honorarios</h2>\n    </ion-text>\n    <ion-input\n    id=\"input-venta\"\n    (ionFocus)=\"focusInputVenta('input-venta')\" \n    (ionBlur)=\"unfocusInputVenta('input-venta')\"\n    (input)=\"getVenta($event.target.value)\"\n    placeholder=\"S/.0\"\n    [value]=\"venta\"\n    ></ion-input>\n    <ion-text>\n      <h2>Retencion</h2>\n    </ion-text>\n    <ion-input \n    id=\"input-igv\"\n    (ionFocus)=\"focusInputIgv('input-igv')\" \n    (ionBlur)=\"unfocusInputIgv('input-igv')\"\n    (input)='getIgv($event.target.value)'\n    placeholder=\"S/.0\"\n    [value]=\"igv\"\n    disabled=\"true\"\n    ></ion-input>\n    <ion-text>\n      <h2>Neto a pagar</h2>\n    </ion-text>\n    <ion-input \n    id=\"input-total\"\n    (ionFocus)=\"focusInputTotal('input-total')\" \n    (ionBlur)=\"unfocusInputTotal('input-total')\"\n    (input)='getTotal($event.target.value)'\n    placeholder=\"S/.0\"\n    [value]=\"total\"\n    disabled=\"true\"\n    ></ion-input>\n    <ion-item lines=\"none\">\n      <ion-label>Hice mi suspension de renta cuarta.</ion-label>\n      <ion-checkbox slot=\"end\" color=\"primary\" (ionChange)=\"cuartaCheck($event)\"></ion-checkbox>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label>Supere los 32000.</ion-label>\n      <ion-checkbox slot=\"end\" color=\"primary\" (ionChange)=\"superarCheck($event)\"></ion-checkbox>\n    </ion-item>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_calculadora_calc-cuarta_calc-cuarta_page_ts.js.map