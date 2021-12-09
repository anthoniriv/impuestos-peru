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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #203680;\n  --padding-bottom: 32px;\n  --padding-top: 32px;\n}\nion-content .labels {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 26px;\n  font-weight: bold;\n  color: #fff;\n  margin-left: 80px;\n}\nion-content .inputs {\n  background: #fff;\n  max-width: 80% !important;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 10px;\n  text-align: center;\n  font-size: 23px;\n  font-family: \"Montserrat\", sans-serif;\n}\nion-content .btn-save {\n  margin-top: 32px;\n  margin-left: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLXNhdmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRVI7QUFBSTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQUVSO0FBQUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBRVIiLCJmaWxlIjoibW9kYWwtc2F2ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogIzIwMzY4MDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAzMnB4O1xyXG4gICAgLmxhYmVsc3tcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tbGVmdDo4MHB4O1xyXG4gICAgfVxyXG4gICAgLmlucHV0c3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1zYXZle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG4gICAgfVxyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-label position=\"stacked\" class=\"labels\">Stacked Label</ion-label>\n  <ion-input type=\"number\" placeholder=\"Numero RUC\" [(ngModel)]=\"rucNumber\" class=\"inputs\" id=\"rucNumber\"></ion-input>\n  <ion-label position=\"stacked\" class=\"labels\">Stacked Label</ion-label>\n  <ion-input type=\"text\" placeholder=\"Nombre de la Empresa\" class=\"inputs\" [(ngModel)]=\"rucName\" id=\"rucName\"></ion-input>\n  <ion-button (click)=\"addData()\" color=\"light\" class=\"btn-save\">Guardar</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cronograma_modal-save_modal-save_module_ts.js.map