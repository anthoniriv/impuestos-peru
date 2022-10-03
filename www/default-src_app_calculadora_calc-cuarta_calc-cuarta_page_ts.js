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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top2 {\n  background: #e4ecf7;\n}\n\nion-content {\n  --background: url('base.png') 0 0/100% 100% no-repeat;\n  --ion-background-color: #f4f5f8;\n}\n\nion-content ion-item {\n  color: #03335e;\n  --background: rgba(255, 255, 255, 0) !important;\n  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.178));\n}\n\nion-content .title {\n  color: #fff;\n  padding-top: 105px;\n  padding-bottom: 230px;\n  text-align: center;\n  font-size: 30px;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\n\nion-content .sub_title {\n  color: #03335e;\n  text-align: center;\n  margin-top: 20px;\n  padding-bottom: 20px;\n  font-size: 19px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nion-content .main .labels {\n  margin: 0;\n  color: #03335e;\n  font-size: 16px;\n  padding-left: 45px;\n  font-weight: 400;\n}\n\nion-content .main .inputs {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 15px;\n}\n\nion-content .main .inputs ion-input {\n  --border-color: var(--ion-color-danger, #f1453d);\n  --background: white;\n  font-size: 23px;\n  color: #4D4D4D;\n  border-radius: 18px !important;\n  padding-left: 35px !important;\n  border: solid 2px #20368038;\n  z-index: 0;\n}\n\nion-content .main .select {\n  background: linear-gradient(90deg, #0D2B56, #005AA3) !important;\n  color: #fff;\n  width: 80%;\n  height: 35px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-bottom: 10px;\n  border-radius: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtY3VhcnRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxxREFBQTtFQUNBLCtCQUFBO0FBRUo7O0FBREk7RUFDSSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxxREFBQTtBQUdSOztBQURJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7QUFHUjs7QUFESTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQUdSOztBQUFRO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUVaOztBQUFRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVaOztBQURZO0VBQ0ksZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUVBLDJCQUFBO0VBQ0EsVUFBQTtBQUVoQjs7QUFDUTtFQUNJLCtEQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNaIiwiZmlsZSI6ImNhbGMtY3VhcnRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Aye1xyXG4gIGJhY2tncm91bmQ6ICNlNGVjZjc7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvcG5nL2Jhc2UucG5nJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4O1xyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgY29sb3I6ICMwMzMzNWU7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTc4KSk7XHJcbiAgICB9XHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICAgIC5zdWJfdGl0bGV7XHJcbiAgICAgICAgY29sb3I6ICMwMzMzNWU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC5tYWlue1xyXG4gICAgICAgIC5sYWJlbHN7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMzMzNWU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXRze1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjE0NTNkKTtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRENEQ0RDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyIDogc29saWQgMnB4ICMyMDM2ODAzODtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlbGVjdHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMEQyQjU2LCAjMDA1QUEzKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"top2\">\r\n  <img src=\"./../../../assets/png/top2.png\" alt=\"\">\r\n</div>\r\n<ion-content>\r\n  <!-- <h1 class=\"title\">CALCULADORA</h1> -->\r\n  <!-- <h2 class=\"sub_title\">Calcula tus impuestos a pagar</h2> -->\r\n  <div class=\"main\">\r\n    <h2 class=\"labels\">Total de Recibos por Honorarios</h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-input\r\n      inputmode=\"numeric\"\r\n      id=\"input-venta\"\r\n      (ionFocus)=\"focusInputVenta('input-venta')\"\r\n      (ionBlur)=\"unfocusInputVenta('input-venta')\"\r\n      (input)=\"getVenta($event.target.value)\"\r\n      placeholder=\"S/.0\"\r\n      [value]=\"venta\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <h2 class=\"labels\">Retencion</h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-input\r\n      inputmode=\"numeric\"\r\n      id=\"input-igv\"\r\n      (ionFocus)=\"focusInputIgv('input-igv')\"\r\n      (ionBlur)=\"unfocusInputIgv('input-igv')\"\r\n      (input)='getIgv($event.target.value)'\r\n      placeholder=\"S/.0\"\r\n      [value]=\"igv\"\r\n      disabled=\"true\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <h2 class=\"labels\">Neto a pagar</h2>\r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-input\r\n      inputmode=\"numeric\"\r\n      id=\"input-total\"\r\n      (ionFocus)=\"focusInputTotal('input-total')\"\r\n      (ionBlur)=\"unfocusInputTotal('input-total')\"\r\n      (input)='getTotal($event.target.value)'\r\n      placeholder=\"S/.0\"\r\n      [value]=\"total\"\r\n      disabled=\"true\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <div class=\"select\" lines=\"none\">\r\n      <ion-label>Hice mi suspension de renta cuarta.</ion-label>\r\n      <ion-checkbox slot=\"end\" color=\"primary\" (ionChange)=\"cuartaCheck($event)\"></ion-checkbox>\r\n    </div>\r\n    <div class=\"select\" lines=\"none\">\r\n      <ion-label>Supere los 32000.</ion-label>\r\n      <ion-checkbox slot=\"end\" color=\"primary\" (ionChange)=\"superarCheck($event)\"></ion-checkbox>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_calculadora_calc-cuarta_calc-cuarta_page_ts.js.map