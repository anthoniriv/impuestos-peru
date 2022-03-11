(self["webpackChunkcalculator_welquer_app"] = self["webpackChunkcalculator_welquer_app"] || []).push([["src_app_cronograma_modal-save_modal-save_module_ts"],{

/***/ 632:
/*!********************************************************************!*\
  !*** ./src/app/cronograma/modal-save/modal-save-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSavePageRoutingModule": () => (/* binding */ ModalSavePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _modal_save_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-save.page */ 2951);




const routes = [
    {
        path: '',
        component: _modal_save_page__WEBPACK_IMPORTED_MODULE_0__.ModalSavePage
    }
];
let ModalSavePageRoutingModule = class ModalSavePageRoutingModule {
};
ModalSavePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalSavePageRoutingModule);



/***/ }),

/***/ 6631:
/*!************************************************************!*\
  !*** ./src/app/cronograma/modal-save/modal-save.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSavePageModule": () => (/* binding */ ModalSavePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modal_save_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-save-routing.module */ 632);
/* harmony import */ var _modal_save_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-save.page */ 2951);







let ModalSavePageModule = class ModalSavePageModule {
};
ModalSavePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_save_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalSavePageRoutingModule
        ],
        declarations: [_modal_save_page__WEBPACK_IMPORTED_MODULE_1__.ModalSavePage]
    })
], ModalSavePageModule);



/***/ }),

/***/ 2951:
/*!**********************************************************!*\
  !*** ./src/app/cronograma/modal-save/modal-save.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSavePage": () => (/* binding */ ModalSavePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modal_save_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal-save.page.html */ 7173);
/* harmony import */ var _modal_save_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-save.page.scss */ 3339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_save_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/save-data.service */ 4355);







let ModalSavePage = class ModalSavePage {
    constructor(modalCtrl, router, saveDataService) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.saveDataService = saveDataService;
    }
    ngOnInit() {
    }
    saveData(rucID, nameRuc) {
        console.log('Datos Guardados', rucID, nameRuc);
        this.modalCtrl.dismiss();
        //Router to cronograma
        this.router.navigate(['/cronograma']);
    }
    addData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //pass to string rucNumber
            this.rucNumber = this.rucNumber.toString();
            //pass to string rucName
            this.rucName = this.rucName.toString();
            //save data
            this.savedRuc = "true";
            console.log('Datos Guardados', this.rucNumber + ' ' + this.rucName + this.savedRuc);
            const data = {
                rucNumber: this.rucNumber,
                rucName: this.rucName,
                savedRuc: this.savedRuc
            };
            this.saveDataService.addData(data);
            this.modalCtrl.dismiss();
            //Router to cronograma
            this.router.navigate(['/inicio']);
        });
    }
};
ModalSavePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_save_data_service__WEBPACK_IMPORTED_MODULE_2__.SaveDataService }
];
ModalSavePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-modal-save',
        template: _raw_loader_modal_save_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_save_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalSavePage);



/***/ }),

/***/ 3339:
/*!************************************************************!*\
  !*** ./src/app/cronograma/modal-save/modal-save.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #203680;\n  --padding-bottom: 24px;\n  --padding-top: 32px;\n}\nion-content .labels {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 26px;\n  font-weight: bold;\n  color: #fff;\n  margin-left: 60px;\n}\nion-content .inputs {\n  background: #fff;\n  max-width: 80% !important;\n  margin-left: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-right: auto;\n  border-radius: 10px;\n  text-align: center;\n  font-size: 23px;\n  font-family: \"Montserrat\", sans-serif;\n}\nion-content .btn-save {\n  margin-top: 12px;\n  margin-left: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLXNhdmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRVI7QUFBSTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUFFUjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUVSIiwiZmlsZSI6Im1vZGFsLXNhdmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMDM2ODA7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMzJweDtcclxuICAgIC5sYWJlbHN7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NjBweDtcclxuICAgIH1cclxuICAgIC5pbnB1dHN7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAuYnRuLXNhdmV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 7173:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cronograma/modal-save/modal-save.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-label position=\"stacked\" class=\"labels\">Numero de RUC</ion-label>\n  <ion-input type=\"number\" placeholder=\"Numero RUC\" [(ngModel)]=\"rucNumber\" class=\"inputs\" id=\"rucNumber\"></ion-input>\n  <ion-label position=\"stacked\" class=\"labels\">Nombre Empresa</ion-label>\n  <ion-input type=\"text\" placeholder=\"Nombre de la Empresa\" class=\"inputs\" [(ngModel)]=\"rucName\" id=\"rucName\"></ion-input>\n  <ion-button (click)=\"addData()\" color=\"light\" class=\"btn-save\">Guardar</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cronograma_modal-save_modal-save_module_ts.js.map