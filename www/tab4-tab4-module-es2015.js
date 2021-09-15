(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "/x3L":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab4/tab4.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"serverProcess == true\" class=\"ion-spinner-section\">\n    <ion-spinner color=\"primary\" name=\"lines\"></ion-spinner>\n</section>\n\n\n\n\n<ion-content mode=\"ios\">\n    <ion-header *ngIf=\"user\">\n        <ion-grid class=\"grid-container\">\n            <ion-row justify-content-around>\n\n                <ion-col size=\"12\" class=\"ion-text-right \">\n                    <ion-icon name=\"location-outline\" class=\"header-location-icon mr-15\" (click)=\"presentAlertLocationConfirm()\"></ion-icon>\n                    <ion-icon name=\"chevron-forward-outline\" class=\"header-location-icon\" (click)=\"presentAlertConfirm()\"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-header>\n\n\n\n\n\n\n    <!-- No session -->\n    <section *ngIf=\"!user\" class=\"ion-text-center tab-no-session-message\" (click)=\"openLoginComponent()\">\n        <ion-col size=\"12\" class=\"my_profile_no_session\">\n            <img src=\"../assets/svg/login.svg\">\n        </ion-col>\n        <p class=\"section-p-no-session-message\"> Inicia sesión o registrate para ver tu perfil y hacer pedidos</p>\n    </section>\n\n\n\n\n\n\n\n\n\n\n    <!-- session -->\n    <section *ngIf=\"user\" style=\"margin:5px;\">\n        <ion-col size=\"12\" class=\"my_profile\">\n            <img src=\"../assets/svg/my_profile.svg\">\n        </ion-col>\n\n\n        <ion-row justify-content-around style=\"margin: 5px 30px 30px 30px;\">\n            <ion-segment (ionChange)=\"userSegmentChanged($event)\" [(ngModel)]=\"segmentValue\">\n                <ion-segment-button value=\"profile\">\n                    <ion-label>Perfil</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"address\">\n                    <ion-label>Dirección</ion-label>\n                </ion-segment-button>\n                <!-- <ion-segment-button value=\"cards\">\n                    <ion-label>Tarjeta</ion-label>\n                </ion-segment-button>-->\n            </ion-segment>\n        </ion-row>\n\n\n        <ion-row justify-content-around class=\"segment-row\" *ngIf=\"segmentValue == 'profile' \">\n            <ion-col size=\"12\">\n                <ion-icon name=\"person-outline\"></ion-icon>\n                <ion-label class=\"form-label-text\">Nombre (s)</ion-label>\n                <ion-input [(ngModel)]=\"user.Name\" placeholder=\"Nombre (s)\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-icon name=\"mail-open-outline\"></ion-icon>\n                <ion-label class=\"form-label-text\">Email</ion-label>\n                <ion-input [(ngModel)]=\"user.Email\" placeholder=\"Email\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                <ion-label class=\"form-label-text\">Contraseña</ion-label>\n                <ion-input [(ngModel)]=\"user.Password\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-icon name=\"call-outline\"></ion-icon>\n                <ion-label class=\"form-label-text\">Celular</ion-label>\n                <ion-input [(ngModel)]=\"user.Phone\" placeholder=\"Celular\" clearInput></ion-input>\n            </ion-col>\n        </ion-row>\n\n\n\n        <ion-row justify-content-around class=\"segment-row\" *ngIf=\"segmentValue == 'address'\">\n            <ion-col size=\"12\">\n                <ion-icon name=\"location-outline\"></ion-icon>\n                <ion-label class=\"form-label-text\">Dirección</ion-label>\n                <ion-input [(ngModel)]=\"user.Address\" placeholder=\"Calle\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label class=\"form-label-text\">Colonia</ion-label>\n                <ion-input [(ngModel)]=\"user.AddressColone\" placeholder=\"Colonia\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label class=\"form-label-text\">Codigo postal</ion-label>\n                <ion-input [(ngModel)]=\"user.AddressZipCode\" placeholder=\"C.P\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label class=\"form-label-text\">Estado</ion-label>\n                <ion-input [(ngModel)]=\"user.AddressState\" placeholder=\"Estado\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label class=\"form-label-text\">Ciudad</ion-label>\n                <ion-input [(ngModel)]=\"user.AddressCity\" placeholder=\"Ciudad\" clearInput></ion-input>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row justify-content-around class=\"segment-row\" *ngIf=\"segmentValue == 'cards'\">\n            <ion-col size=\"12\">\n                <ion-icon name=\"card-outline\"></ion-icon>\n                <ion-label class=\"form-label-text\">Tarjeta</ion-label>\n                <ion-input [(ngModel)]=\"user.CardNumber\" placeholder=\"No. de la tarjeta\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label class=\"form-label-text\">Mes</ion-label>\n                <ion-input [(ngModel)]=\"user.CardMonth\" placeholder=\"Mes\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label class=\"form-label-text\">Año</ion-label>\n                <ion-input [(ngModel)]=\"user.CardYear\" placeholder=\"Año\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-label class=\"form-label-text\">Nombre</ion-label>\n                <ion-input [(ngModel)]=\"user.CardName\" placeholder=\"Nombre en la tarjeta\" clearInput></ion-input>\n            </ion-col>\n        </ion-row>\n\n\n    </section>\n\n    <section *ngIf=\"user\" style=\"padding:0px 15px; margin:10px;\">\n        <ion-button [disabled]=\"serverProcess == true\" expand=\"block\" (click)=\"updateUser()\">Guardar</ion-button>\n\n    </section>\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "7iO/":
/*!*******************************************!*\
  !*** ./src/app/pages/tab4/tab4.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  font-family: \"GilroyLight\";\n  background-position: left 8px center;\n  height: auto;\n  font-size: 1rem;\n  font-weight: 400;\n  color: #7f8490;\n  background-color: #fafbfc;\n  border-bottom: 1px solid #00000021;\n  --padding-start: 10px !important ;\n}\n\n.input-label-text {\n  font-family: \"GilroyLight\";\n  font-size: 0.7rem;\n  padding-bottom: 0px !important;\n}\n\n.form-label-text {\n  padding-left: 8px;\n}\n\nion-col {\n  margin-bottom: 14px;\n}\n\n.tab-no-session-message {\n  font-family: \"GilroyLight\";\n  height: auto;\n  /*font-size: 1.2rem;*/\n  font-weight: 400;\n  /*color: #7f8490 !important;*/\n  color: var(--ion-color-primary) !important;\n  padding: 10px;\n  margin-top: 20%;\n}\n\n.my_profile img {\n  width: 50%;\n  margin: auto;\n  display: block;\n  border-radius: 100%;\n  border: solid #8c715c 2px;\n}\n\n.my_profile_no_session img {\n  margin-top: 30% !important;\n  width: 50%;\n  margin: auto;\n  display: block;\n}\n\n.section-p-no-session-message {\n  padding: 0px 20px 0px 20px;\n}\n\n.segment-row {\n  margin: 20px 10px 10px 10px;\n}\n\nion-header {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  position: fixed;\n  padding: 5px 8px 0px 5px;\n}\n\n.header-icons {\n  font-size: 30px;\n  color: #f44336b5;\n}\n\n.header-location-icon {\n  /*font-size: 30px;\n  color: #f44336b5;    */\n  font-size: 30px;\n  color: #ffffff;\n  background-color: var(--ion-color-primary-shade);\n  border-radius: 100%;\n  padding: 5px;\n  box-shadow: #795548 0px 0px 20px;\n}\n\n.mr-15 {\n  margin-right: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUVBLGlCQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksMEJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUlJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQURSOztBQU1JO0VBQ0ksMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFIUjs7QUFPQTtFQUNJLDBCQUFBO0FBSko7O0FBT0E7RUFDSSwyQkFBQTtBQUpKOztBQU9BO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQUxKOztBQVFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBU0E7RUFDSTt3QkFBQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQU5KOztBQVNBO0VBQ0ksNkJBQUE7QUFOSiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiR2lscm95TGlnaHRcIjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDhweCBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjN2Y4NDkwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDAyMTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHggIWltcG9ydGFudFxufVxuXG4uaW5wdXQtbGFiZWwtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3lMaWdodCc7XG4gICAgLy9mb250LWZhbWlseTogJ0dpbHJveUV4dHJhQm9sZCc7XG4gICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWxhYmVsLXRleHQge1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG5pb24tY29sIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4udGFiLW5vLXNlc3Npb24tbWVzc2FnZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiR2lscm95TGlnaHRcIjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLypmb250LXNpemU6IDEuMnJlbTsqL1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLypjb2xvcjogIzdmODQ5MCAhaW1wb3J0YW50OyovXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG4ubXlfcHJvZmlsZSB7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAjOGM3MTVjIDJweDtcbiAgICB9XG59XG5cbi5teV9wcm9maWxlX25vX3Nlc3Npb24ge1xuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwJSAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLnNlY3Rpb24tcC1uby1zZXNzaW9uLW1lc3NhZ2Uge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4uc2VnbWVudC1yb3cge1xuICAgIG1hcmdpbjogMjBweCAxMHB4IDEwcHggMTBweDtcbn1cblxuaW9uLWhlYWRlciB7XG4gICAgLy9wYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcGFkZGluZzogNXB4IDhweCAwcHggNXB4O1xufVxuXG4uaGVhZGVyLWljb25zIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICNmNDQzMzZiNTtcbiAgICAvL2NvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG59XG5cbi5oZWFkZXItbG9jYXRpb24taWNvbiB7XG4gICAgLypmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICNmNDQzMzZiNTsgICAgKi9cbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJveC1zaGFkb3c6ICM3OTU1NDggMHB4IDBweCAyMHB4O1xufVxuXG4ubXItMTUge1xuICAgIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "8Rjo":
/*!***************************************************!*\
  !*** ./src/app/pages/tab4/tab4-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function() { return Tab4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab4.page */ "rcec");




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ "GXrT":
/*!*******************************************!*\
  !*** ./src/app/pages/tab4/tab4.module.ts ***!
  \*******************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab4-routing.module */ "8Rjo");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "rcec");







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab4PageRoutingModule"]
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "rcec":
/*!*****************************************!*\
  !*** ./src/app/pages/tab4/tab4.page.ts ***!
  \*****************************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab4.page.html */ "/x3L");
/* harmony import */ var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4.page.scss */ "7iO/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/login/login.component */ "W3Zi");
/* harmony import */ var src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/interfaces/interfaces */ "IeiB");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/location.service */ "yHma");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "92l+");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");














let Tab4Page = class Tab4Page {
    constructor(navController, authService, modalCtrl, sessionService, alertController, router, location, locationAccuracy, geolocation, androidPermissions) {
        this.navController = navController;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.sessionService = sessionService;
        this.alertController = alertController;
        this.router = router;
        this.location = location;
        this.locationAccuracy = locationAccuracy;
        this.geolocation = geolocation;
        this.androidPermissions = androidPermissions;
        this.user = new src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_7__["UserModel"]();
        this.serverProcess = false;
        this.segmentValue = "profile";
        this.currentUserLocationIntents = 0;
    }
    ionViewWillEnter() {
        console.log("ionViewWillEnter");
        this.validateUserSession();
    }
    validateUserSession() {
        this.serverProcess = true;
        setTimeout(() => {
            this.user = this.sessionService.getLocalUser();
            this.serverProcess = false;
            if (this.user) {
            }
            else {
                this.openLoginComponent();
            }
        }, 500);
    }
    updateUser() {
        if (!this.user.Name || !this.user.Phone || !this.user.Email || !this.user.Password) {
            this.presentAlert("Error", "Es necesario completar la información para continuar");
        }
        else {
            this.serverProcess = true;
            this.sessionService.postUser(this.user, "update").subscribe(resp => {
                console.log(resp);
                setTimeout(() => {
                    this.serverProcess = false;
                    if (resp.statusID == 200) {
                        this.presentAlert(resp.statusName, resp.statusDescription);
                    }
                    else {
                        this.presentAlert(resp.statusName, resp.statusDescription);
                    }
                }, 1500);
            });
        }
    }
    userSegmentChanged(event) {
        console.log(event.detail.value);
        this.segmentValue = event.detail.value;
    }
    openLoginComponent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                id: "LoginComponent"
            });
            modal.onDidDismiss().then((data) => {
                console.log(data);
                if (data.data == "refresh") {
                    this.validateUserSession();
                }
            });
            modal.present();
            const data = yield modal.onWillDismiss();
            /*if(data.data != "null"){
              this.checkSession();
            }*/
        });
    }
    presentAlert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Salir',
                message: '¿Seguro que desea cerrar su sesion?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Salir',
                        handler: () => {
                            this.serverProcess = true;
                            setTimeout(() => {
                                this.authService.setAuth(false);
                                this.sessionService.closeLocalUser();
                                this.router.navigateByUrl('/start');
                            }, 500);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertLocationConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Activar GPS',
                message: '¿Activa tu GPS para ver todos los producto y obtener envio gratis?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.serverProcess = true;
                            setTimeout(() => {
                                this.checkPermission();
                            }, 500);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    checkPermission() {
        this.currentUserLocationIntents = this.currentUserLocationIntents + 1;
        console.log(this.currentUserLocationIntents);
        if (this.currentUserLocationIntents % 2 == 0) {
            this.presentAlert("Modo de prueba", "Ubicacíon de prueba: Cd. Delicias");
            this.location.setCurrentUserLocation("Delicias");
            this.serverProcess = false;
            return;
        }
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(result => {
            if (result.hasPermission) {
                this.enableGPS();
            }
            else {
                this.locationAccPermission();
            }
        }, error => {
            //console.log("checkPermission Error", error);
            //this.presentAlert("checkPermission Error", error);
            this.presentAlert("checkPermission Error", "No pudimos acceder a tu ubicación,  si estas en Cd. Delicias enciende tu gps y tu envio sera gratis");
            this.location.setCurrentUserLocation("Nacional");
            this.serverProcess = false;
        });
    }
    locationAccPermission() {
        this.locationAccuracy.canRequest().then((canRequest) => {
            if (canRequest) {
            }
            else {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then(() => {
                    this.enableGPS();
                }, error => {
                    //console.log("locationAccPermission Error", error);
                    //this.presentAlert("locationAccPermission Error", error);
                    this.presentAlert("locationAccPermission Error", "No pudimos acceder a tu ubicación, si estas en Cd. Delicias enciende tu gps y tu envio sera gratis");
                    this.location.setCurrentUserLocation("Nacional");
                    this.serverProcess = false;
                });
            }
        });
    }
    enableGPS() {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
            this.currentLocPosition();
        }, error => {
            let stringifyError = JSON.stringify(error);
            //console.log("enableGPS Error", error);
            //this.presentAlert("enableGPS Error", stringifyError); 
            this.presentAlert("enableGPS Error", "No pudimos acceder a tu ubicación, si estas en Cd. Delicias enciende tu gps y tu envio sera gratis");
            this.location.setCurrentUserLocation("Nacional");
            this.serverProcess = false;
        });
    }
    currentLocPosition() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log(resp);
            resp.coords.latitude;
            resp.coords.longitude;
            this.location.getUserLocation(resp.coords.latitude, resp.coords.longitude)
                .subscribe(response => {
                console.log(response);
                if (response.statusID == 200) {
                    this.location.setCurrentUserLocation("Delicias");
                    this.presentAlert("Exito", "Tu ubicacion actual en de Cd. Delicias te da servicio a domicilio gratis");
                }
                else {
                    this.location.setCurrentUserLocation("Nacional");
                    this.presentAlert("Exito", "Tu ubicacion actual fuera de Cd. Delicias no cuenta con la promoción de envio gratis");
                }
                this.serverProcess = false;
            });
        }).catch((error) => {
            this.presentAlert("currentLocPosition Error", error);
            this.presentAlert("currentLocPosition Error", "No pudimos acceder a tu ubicación, si estas en Cd. Delicias enciende tu gps y tu envio sera gratis");
            this.location.setCurrentUserLocation("Nacional");
            this.serverProcess = false;
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_11__["LocationService"] },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_12__["LocationAccuracy"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"] }
];
Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab4Page);



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module-es2015.js.map