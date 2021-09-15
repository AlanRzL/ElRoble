(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+PL+":
/*!*****************************************************!*\
  !*** ./src/app/components/start/start.component.ts ***!
  \*****************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_start_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./start.component.html */ "kPKb");
/* harmony import */ var _start_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start.component.scss */ "MNc6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/interfaces */ "IeiB");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "GGTb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let StartComponent = class StartComponent {
    constructor(sessionService, authService, router, facebook, alertController) {
        this.sessionService = sessionService;
        this.authService = authService;
        this.router = router;
        this.facebook = facebook;
        this.alertController = alertController;
        this.serverProcess = false;
        this.user = new src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_5__["UserModel"]();
    }
    ngOnInit() {
        this.user = this.sessionService.getLocalUser();
        console.log(this.user);
        if (this.user) {
            console.log("autenticado");
            this.authService.setAuth(true);
            this.router.navigateByUrl('/tabs/tab1');
        }
        else {
            console.log("no autenticado");
            this.authService.setAuth(false);
        }
    }
    loginFacebook() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.facebook.logout();
            this.facebook.login(['email', 'public_profile']).then((value) => {
                console.log("Login success", value);
                this.facebook.getCurrentProfile().then(profile => {
                    console.log(profile);
                });
                this.facebook.api('me?fields=id,name,email', []).then((pic) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log(pic);
                    /*const alert = await this.alertController.create({
                      message: JSON.stringify(pic)
                    })
                    alert.present();*/
                    //console.log(pic.name);
                    //alert(pic.name);
                    this.serverProcess = true;
                    let facebookSession = JSON.stringify(pic);
                    this.sessionService.getUserLoginWithFB(facebookSession).subscribe(resp => {
                        console.log(resp);
                        setTimeout(() => {
                            this.serverProcess = false;
                            if (resp.statusID == 200) {
                                setTimeout(() => {
                                    this.authService.setAuth(true);
                                    let autenticado = this.authService.isAuthFunction();
                                    console.log("autenticado");
                                    this.router.navigateByUrl('/tabs/tab1');
                                }, 500);
                            }
                            else {
                                this.presentAlert(resp.statusName, resp.statusDescription);
                            }
                        }, 1500);
                    });
                }));
            }).catch(err => {
                console.log("Acurrio un error al intertar logearse", err);
            });
            // this.authService.setAuth(true);
            // let autenticado = this.authService.isAuthFunction();
            // if(autenticado){
            //   console.log("autenticado");
            //   this.router.navigateByUrl('/tabs/tab1');
            // } else{
            //   console.log("no autenticado");
            // }
        });
    }
    loginGuest() {
        /*this.authService.setAuth(false);
        this.router.navigateByUrl('/tabs/tab1');*/
        this.authService.setAuth(true);
        let autenticado = this.authService.isAuthFunction();
        if (autenticado) {
            console.log("autenticado");
            this.router.navigateByUrl('/tabs/tab1');
        }
        else {
            console.log("no autenticado");
        }
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
};
StartComponent.ctorParameters = () => [
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] }
];
StartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-start',
        template: _raw_loader_start_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_start_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StartComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alanramirez/Desktop/ActivaMerca/GitHub/ElRoble/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IeiB":
/*!******************************************!*\
  !*** ./src/app/interfaces/interfaces.ts ***!
  \******************************************/
/*! exports provided: LocalOrder, UserModel, OrderModel, OrderHistory, UserNotificationsResponseData, UserNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalOrder", function() { return LocalOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModel", function() { return OrderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistory", function() { return OrderHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNotificationsResponseData", function() { return UserNotificationsResponseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNotifications", function() { return UserNotifications; });
class LocalOrder {
}
class UserModel {
}
class OrderModel {
}
class OrderHistory {
}
class UserNotificationsResponseData {
}
class UserNotifications {
}


/***/ }),

/***/ "IfdK":
/*!*********************************************!*\
  !*** ./src/app/services/session.service.ts ***!
  \*********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




const URL = 'https://carniceriaelroble.com/app/controllers';
let SessionService = class SessionService {
    constructor(http) {
        this.http = http;
    }
    postUser(user, action) {
        return this.http.post(`${URL}/service_session.php?action=${action}`, user, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            if (resp.statusID == 200) {
                this.setLocalUser(resp.data[0]);
            }
            return resp;
        })); //pipe
    }
    getUserLogin(loginUser) {
        return this.http.post(`${URL}/service_session.php?action=get`, loginUser, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            if (resp.statusID == 200) {
                this.setLocalUser(resp.data[0]);
            }
            return resp;
        })); //pipe
    }
    recoverPassword(email) {
        return this.http.get(`${URL}/service_recoverPassword.php?Action=send&email=${email}`);
    }
    /**
     * Local functions
     */
    setLocalUser(user) {
        let userArrayString = JSON.stringify(user);
        localStorage.setItem('userArray', userArrayString);
    }
    getLocalUser() {
        return JSON.parse(localStorage.getItem('userArray'));
    }
    closeLocalUser() {
        localStorage.removeItem('userArray');
    }
    getUserLoginWithFB(loginUser) {
        console.log(loginUser);
        return this.http.post(`${URL}/service_facebookLogin.php?`, loginUser, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            if (resp.statusID == 200) {
                this.setLocalUser(resp.data[0]);
            }
            return resp;
        })); //pipe
    }
};
SessionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SessionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SessionService);



/***/ }),

/***/ "KWWs":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



const URL = 'https://carniceriaelroble.com/app/controllers';
let NotificationsService = class NotificationsService {
    constructor(http) {
        this.http = http;
    }
    getNotifications(ID_User) {
        return this.http.get(`${URL}/service_notifications.php?action=listAllByUserID&ID_User=${ID_User}`);
    }
};
NotificationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NotificationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationsService);



/***/ }),

/***/ "MNc6":
/*!*******************************************************!*\
  !*** ./src/app/components/start/start.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  margin-left: -15px;\n  padding: 145px 30px 0px 30px;\n  width: 65%;\n}\n\nh3 {\n  padding: 25px 30px 0px 30px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 40px;\n  text-align: center;\n  color: var(--ion-color-primary-shade);\n}\n\n.container-button {\n  padding: 5px 55px 0px 55px;\n}\n\n.container-button-fb {\n  padding: 45px 55px 0px 55px;\n}\n\n/*@media screen and (max-height:775px) {\n    img {\n        width: 60%;\n    }\n    h3 {\n        font-size: 25px;\n    }\n}/*\n\n\n/*ion-content {\n    --background: url('/assets/img/INICIO_OPACIDAD84.png') no-repeat 40% 50%;\n    background-size: 300px 100px !important\n}*/\n\nion-content.background {\n  --background: url(\"/assets/img/INICIO_OPACIDAD84.png\") no-repeat 40% 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUdBOzs7Ozs7Ozs7Ozs7O0VBQUE7O0FBZUE7RUFDSSx3RUFBQTtBQURKIiwiZmlsZSI6InN0YXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgcGFkZGluZzogMTQ1cHggMzBweCAwcHggMzBweDtcbiAgICB3aWR0aDogNjUlO1xufVxuXG5oMyB7XG4gICAgcGFkZGluZzogMjVweCAzMHB4IDBweCAzMHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbn1cblxuLmNvbnRhaW5lci1idXR0b24ge1xuICAgIHBhZGRpbmc6IDVweCA1NXB4IDBweCA1NXB4O1xufVxuXG4uY29udGFpbmVyLWJ1dHRvbi1mYiB7XG4gICAgcGFkZGluZzogNDVweCA1NXB4IDBweCA1NXB4O1xufVxuXG5cbi8qQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6Nzc1cHgpIHtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG59LypcblxuXG4vKmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvSU5JQ0lPX09QQUNJREFEODQucG5nJykgbm8tcmVwZWF0IDQwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMDBweCAxMDBweCAhaW1wb3J0YW50XG59Ki9cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0lOSUNJT19PUEFDSURBRDg0LnBuZycpIG5vLXJlcGVhdCA0MCUgNTAlO1xuICAgIC8vLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9JTklDSU9fT1BBQ0lEQUQ4NC5wbmdcIikgLyo1NSUgNTAlLyovMTQ1JSAxMDAlIG5vLXJlcGVhdFxufSJdfQ== */");

/***/ }),

/***/ "MOE4":
/*!********************************************!*\
  !*** ./src/app/services/orders.service.ts ***!
  \********************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




const URL = 'https://carniceriaelroble.com/app/controllers';
let OrdersService = class OrdersService {
    constructor(http) {
        this.http = http;
    }
    getProducts() {
        return this.http.get(`${URL}/service_products.php?action=listAll`);
    }
    getProductsByCategoryID(ID_Category) {
        return this.http.get(`${URL}/service_products.php?action=listAllByCategoryID&ID_Category=${ID_Category}`);
    }
    postOrder(order) {
        console.log(order);
        return this.http.post(`${URL}/service_orders.php?action=create`, order, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            return resp;
        })); //pipe
    }
    getOrdersHistory(ID_User) {
        return this.http.get(`${URL}/service_orders.php?action=listAllByUserID&ID_User=${ID_User}`);
    }
    /*getWorksByID_Work(ID_Work:Number){
      return this.http.get<ResponseProduct>(`${URL}/get_works.php?ID_Work=${ID_Work}`);
     }
    
     getWorksByCategory(Category:String){
      return this.http.get<ResponseProduct>(`${URL}/get_works.php?Category=${Category}`);
     }*/
    /**
     * Local functions
     */
    setLocalOrder(LocalOrder) {
        LocalOrder = JSON.stringify(LocalOrder);
        localStorage.setItem('LocalOrder', LocalOrder);
    }
    getLocalOrder() {
        let LocalOrder = JSON.parse(localStorage.getItem('LocalOrder'));
        if (LocalOrder) {
            return LocalOrder;
        }
        else {
            this.setLocalOrder([]);
            return JSON.parse(localStorage.getItem('LocalOrder'));
        }
    }
    getLocalOrderString() {
        return localStorage.getItem('LocalOrder');
    }
};
OrdersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrdersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrdersService);



/***/ }),

/***/ "O5bD":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"serverProcess == true\" class=\"ion-spinner-section\">\n    <ion-spinner color=\"primary\" name=\"lines\"></ion-spinner>\n</section>\n\n<ion-content mode=\"ios\">\n    <ion-header *ngIf=\"serverProcess==false\">\n        <ion-grid class=\"grid-container\">\n            <ion-row justify-content-around>\n                <ion-col size=\"12\" class=\"ion-text-left \">\n                    <ion-icon name=\"close-circle-outline\" class=\"header-icons\" (click)=\"closeLoginComponent()\"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-header>\n\n\n\n\n    <section style=\"margin:5px;\">\n\n        <ion-col size=\"12\" class=\"login_img\">\n            <img src=\"../assets/svg/login.svg\">\n        </ion-col>\n\n\n\n        <ion-row justify-content-around class=\"segment-row\" *ngIf=\"segmentValue == 'login' \">\n            <ion-col size=\"12\">\n                <h2>Login</h2>\n                <ion-label class=\"form-label-text\">Email</ion-label>\n                <ion-input [(ngModel)]=\"loginEmail\" placeholder=\"Email\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-label class=\"form-label-text\">Contraseña</ion-label>\n                <ion-input type=\"password\" [(ngModel)]=\"loginPassword\" placeholder=\"Celular\" clearInput></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\">\n                <ion-button [disabled]=\"loginEmail == '' ||  loginPassword == ''  || serverProcess == true\" expand=\"block\" (click)=\"login()\">Login</ion-button>\n            </ion-col>\n\n\n            <ion-col size=\"12\" class=\"ion-text-center\">\n                <p class=\"ion-no-margin\" (click)=\"userSegmentChanged('register')\"> ¿No tienes una cuenta? registrate</p>\n                <p class=\"ion-no-margin\"> ó </p>\n                <p class=\"ion-no-margin\" (click)=\"userSegmentChanged('recovery')\"> ¿Olvidaste tu contraseña? recuperala</p>\n            </ion-col>\n        </ion-row>\n\n\n\n        <ion-row justify-content-around class=\"segment-row\" *ngIf=\"segmentValue == 'register'\">\n            <ion-col size=\"12\">\n                <h2>Registrarse</h2>\n                <ion-label class=\"form-label-text\">Nombre (s)</ion-label>\n                <ion-input [(ngModel)]=\"user.Name\" placeholder=\"Nombre (s)\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-label class=\"form-label-text\">Dirección</ion-label>\n                <ion-input [(ngModel)]=\"user.Address\" placeholder=\"Calle y Número\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label class=\"form-label-text\">Estado</ion-label>\n                <ion-input [(ngModel)]=\"user.AddressState\" placeholder=\"Estado\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label class=\"form-label-text\">Ciudad</ion-label>\n                <ion-input [(ngModel)]=\"user.AddressCity\" placeholder=\"Ciudad\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label class=\"form-label-text\">Email</ion-label>\n                <ion-input [(ngModel)]=\"user.Email\" placeholder=\"Email\" clearInput></ion-input>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-label class=\"form-label-text\">Contraseña</ion-label>\n                <ion-input type=\"password\" [(ngModel)]=\"user.Password\" placeholder=\"Password\" clearInput></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\">\n                <ion-button [disabled]=\"user.Name == '' ||  user.Address == ''  ||  user.AddressState == ''   ||  user.AddressCity == ''   ||  user.Email == ''  ||  user.Password == ''  || serverProcess == true\" expand=\"block\" (click)=\"register()\">Registrarse</ion-button>\n            </ion-col>\n\n\n            <ion-col size=\"12\" class=\"ion-text-center\">\n                <p class=\"ion-no-margin\" (click)=\"userSegmentChanged('login')\"> ¿Ya tienes una cuenta? inicia sesion</p>\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row justify-content-around class=\"segment-row\" *ngIf=\"segmentValue == 'recovery' \">\n            <ion-col size=\"12\">\n                <h2>Recuperar</h2>\n                <ion-label class=\"form-label-text\">Email</ion-label>\n                <ion-input [(ngModel)]=\"recoveryEmail\" placeholder=\"Email\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-button [disabled]=\"recoveryEmail == ''  || serverProcess == true\" expand=\"block\" (click)=\"recovery()\">Recuperar</ion-button>\n            </ion-col>\n\n\n            <ion-col size=\"12\" class=\"ion-text-center\">\n                <p class=\"ion-no-margin\" (click)=\"userSegmentChanged('login')\"> ¿Ya tienes una cuenta? inicia sesion</p>\n            </ion-col>\n        </ion-row>\n\n\n\n\n\n\n\n    </section>\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "1xeP");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "Bg0J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interfaces/interfaces */ "IeiB");
/* harmony import */ var _ionic_native_power_management_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/power-management/ngx */ "VWz1");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/notifications.service */ "KWWs");











let AppComponent = class AppComponent {
    constructor(localNotifications, sessionService, backgroundMode, platform, powerManagement, notificationsService) {
        this.localNotifications = localNotifications;
        this.sessionService = sessionService;
        this.backgroundMode = backgroundMode;
        this.platform = platform;
        this.powerManagement = powerManagement;
        this.notificationsService = notificationsService;
        this.window = "";
        this.number = 1;
        this.user = new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_8__["UserModel"]();
        this.notifications = [];
        this.initializeApp();
    }
    initializeApp() {
        /*setInterval(()=>{
        this.user = this.sessionService.getLocalUser();
        if(this.user){
          this.notificationsService.getNotifications(this.user.ID_User)
          .subscribe(response => {
            this.notifications = response.data[0].Notifications;
            if(this.notifications){
              this.notifications.forEach(function(notification) {
                    console.log(notification.ID_Notification)
                    console.log(notification.Message)
                  
              });
            }
          })
        }else{
          alert("Not_user");
        }
      },15000);*/
        this.platform.ready().then(() => {
            // Enable Background
            //this.backgroundMode.disable();
            this.backgroundMode.disableWebViewOptimizations();
            this.backgroundMode.disableBatteryOptimizations();
            this.powerManagement.acquire()
                .then(function () {
                //alert('powerManagement acquired');
            }).catch(function () {
                //alert('Failed to powerManagement acquired');
            });
            this.powerManagement.dim()
                .then(function () {
                //alert('powerManagement dim');
            }).catch(function () {
                // alert('Failed to powerManagement dim');
            });
            this.powerManagement.setReleaseOnPause(false)
                .then(function () {
                //alert('powerManagement setReleaseOnPause');
            }).catch(function () {
                //alert('Failed to powerManagement setReleaseOnPause');
            });
            setInterval(() => {
                this.backgroundMode.wakeUp();
                this.backgroundMode.moveToForeground();
                this.user = this.sessionService.getLocalUser();
                if (this.user) {
                    this.notificationsService.getNotifications(this.user.ID_User)
                        .subscribe(response => {
                        this.notifications = response.data[0].Notifications;
                        if (this.notifications) {
                            for (let i = 0; i < this.notifications.length; i++) {
                                this.localNotifications.schedule({
                                    id: this.notifications[i].ID_Notification,
                                    text: this.notifications[i].Message,
                                    data: { secret: 'Hello' }
                                });
                            }
                        }
                    });
                }
                else {
                    //alert("Not_user");
                }
            }, 10000);
        });
    } //this.initializeApp();
};
AppComponent.ctorParameters = () => [
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_4__["BackgroundMode"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_power_management_ngx__WEBPACK_IMPORTED_MODULE_9__["PowerManagement"] },
    { type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_10__["NotificationsService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        let autenticado = this.authService.isAuthFunction();
        if (autenticado) {
            return autenticado;
        }
        else {
            this.router.navigateByUrl('/start');
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "O5bD");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "Yz0z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/interfaces/interfaces */ "IeiB");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");








let LoginComponent = class LoginComponent {
    constructor(modalCtrl, navController, router, sessionService, loadingController, alertController) {
        this.modalCtrl = modalCtrl;
        this.navController = navController;
        this.router = router;
        this.sessionService = sessionService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.user = new src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_6__["UserModel"]();
        this.loginEmail = "";
        this.loginPassword = "";
        this.recoveryEmail = "";
        this.serverProcess = false;
        this.segmentValue = "login";
    }
    ionViewWillEnter() {
        this.user = new src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_6__["UserModel"]();
        this.user.Address = "";
        this.user.AddressCity = "";
        this.user.AddressState = "";
        this.user.Email = "";
        this.user.Name = "";
        this.user.Password = "";
        console.log(this.user.Name);
    }
    ngOnInit() {
    }
    userSegmentChanged(event) {
        console.log(event);
        this.segmentValue = event;
    }
    login() {
        this.serverProcess = true;
        console.log("Login");
        let loginUser = new src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_6__["UserModel"]();
        loginUser.Email = this.loginEmail;
        loginUser.Password = this.loginPassword;
        console.log(loginUser);
        this.sessionService.getUserLogin(loginUser).subscribe(resp => {
            console.log(resp);
            setTimeout(() => {
                this.serverProcess = false;
                if (resp.statusID == 200) {
                    this.closeLoginComponent("refresh");
                }
                else {
                    this.presentAlert(resp.statusName, resp.statusDescription);
                }
            }, 1500);
        });
    }
    register() {
        this.serverProcess = true;
        this.sessionService.postUser(this.user, "create").subscribe(resp => {
            console.log(resp);
            setTimeout(() => {
                this.serverProcess = false;
                if (resp.statusID == 200) {
                    this.closeLoginComponent("refresh");
                }
                else {
                    this.presentAlert(resp.statusName, resp.statusDescription);
                }
            }, 1500);
        });
    }
    recovery() {
        this.serverProcess = true;
        this.sessionService.recoverPassword(this.recoveryEmail).subscribe(resp => {
            console.log(resp);
            setTimeout(() => {
                this.serverProcess = false;
                if (resp.statusID == 200) {
                    this.presentAlert(resp.statusName, resp.statusDescription);
                    this.recoveryEmail = "";
                }
                else {
                    this.presentAlert(resp.statusName, resp.statusDescription);
                }
            }, 1500);
        });
    }
    closeLoginComponent(data = null) {
        this.modalCtrl.dismiss(data, null, "LoginComponent");
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
};
LoginComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "XnsX":
/*!************************************************************************!*\
  !*** ./src/app/pages/explore-container/explore-container.component.ts ***!
  \************************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./explore-container.component.html */ "aRCn");
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-container.component.scss */ "hTsW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_local_toasts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-toasts.service */ "qT/k");
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/orders.service */ "MOE4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let ExploreContainerComponent = class ExploreContainerComponent {
    constructor(ordersService, localToastsController, router) {
        this.ordersService = ordersService;
        this.localToastsController = localToastsController;
        this.router = router;
        this.orderProductsArray = [];
        this.totalOrderPrice = 0;
    }
    ionViewWillEnter() {
        this.orderProductsArray = this.ordersService.getLocalOrder();
        console.log(this.orderProductsArray);
        this.calculateTotalPrice();
    }
    closeModal() {
        console.log("autenticado");
        this.router.navigateByUrl('/tabs/tab3');
    }
    calculateTotalPrice() {
        this.totalOrderPrice = 0;
        this.orderProductsArray.forEach((product, index) => {
            this.totalOrderPrice = this.totalOrderPrice + product.Total;
        });
        this.ordersService.setLocalOrder(this.orderProductsArray);
    }
};
ExploreContainerComponent.ctorParameters = () => [
    { type: src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] },
    { type: src_app_services_local_toasts_service__WEBPACK_IMPORTED_MODULE_4__["LocalToastsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
};
ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-explore-container',
        template: _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExploreContainerComponent);



/***/ }),

/***/ "Yz0z":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  font-family: \"GilroyLight\";\n  background-position: left 8px center;\n  height: auto;\n  font-size: 1rem;\n  font-weight: 400;\n  color: #7f8490;\n  background-color: #fafbfc;\n  border-bottom: 1px solid #00000021;\n  --padding-start: 10px !important ;\n}\n\n.input-label-text {\n  font-family: \"GilroyLight\";\n  font-size: 0.7rem;\n  padding-bottom: 0px !important;\n}\n\nion-col {\n  margin-bottom: 14px;\n}\n\n.tab-no-session-message {\n  font-family: \"GilroyLight\";\n  height: auto;\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: #7f8490 !important;\n  padding: 10px;\n  margin-top: 20%;\n}\n\n.login_img img {\n  width: 50%;\n  margin: auto;\n  display: block;\n  margin-top: 30px;\n}\n\n.segment-row {\n  margin: 0px 10px 10px 10px;\n}\n\nion-header {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  position: fixed;\n  padding: 5px 8px 0px 5px;\n}\n\n.header-icons {\n  font-size: 30px;\n  color: var(--ion-color-primary-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUVBLGlCQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFPQTtFQUNJLG1CQUFBO0FBSko7O0FBT0E7RUFDSSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUpKOztBQVFJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFMUjs7QUFTQTtFQUNJLDBCQUFBO0FBTko7O0FBU0E7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBUEo7O0FBVUE7RUFDSSxlQUFBO0VBRUEscUNBQUE7QUFSSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiR2lscm95TGlnaHRcIjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDhweCBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjN2Y4NDkwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDAyMTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHggIWltcG9ydGFudFxufVxuXG4uaW5wdXQtbGFiZWwtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3lMaWdodCc7XG4gICAgLy9mb250LWZhbWlseTogJ0dpbHJveUV4dHJhQm9sZCc7XG4gICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWxhYmVsLXRleHQge1xuICAgIC8vcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbmlvbi1jb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi50YWItbm8tc2Vzc2lvbi1tZXNzYWdlIHtcbiAgICBmb250LWZhbWlseTogXCJHaWxyb3lMaWdodFwiO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjN2Y4NDkwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG59XG5cbi5sb2dpbl9pbWcge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxufVxuXG4uc2VnbWVudC1yb3cge1xuICAgIG1hcmdpbjogMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG5pb24taGVhZGVyIHtcbiAgICAvL3BhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwYWRkaW5nOiA1cHggOHB4IDBweCA1cHg7XG59XG5cbi5oZWFkZXItaWNvbnMge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAvL2NvbG9yOiAjZjQ0MzM2YjU7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbn0iXX0= */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "tF4M");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "92l+");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "Bg0J");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "1xeP");
/* harmony import */ var _ionic_native_power_management_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/power-management/ngx */ "VWz1");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "GGTb");
















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({ hardwareBackButton: false }), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
        providers: [_ionic_native_power_management_ngx__WEBPACK_IMPORTED_MODULE_14__["PowerManagement"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_8__["Stripe"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_10__["LocationAccuracy"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__["AndroidPermissions"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_12__["LocalNotifications"], _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_13__["BackgroundMode"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_15__["Facebook"], { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "aRCn":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore-container/explore-container.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"light\" mode=\"ios\">\n\n    <ion-header>\n        <ion-grid class=\"grid-container\">\n            <ion-row justify-content-around>\n                <ion-col size=\"2\" class=\"ion-text-left\" (click)=\"closeModal()\">\n                    <ion-icon color=\"light\" name=\"chevron-back-outline\" class=\"header-icons\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"8\" class=\"ion-text-center col-category-name\">\n                    <label class=\"header-category-name\"></label>\n                </ion-col>\n                <ion-col size=\"2\" class=\"ion-text-right\" (click)=\"goToCart()\">\n\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-header>\n\n\n\n    <ion-grid class=\"grid-container\" style=\"margin-top: 10%;\">\n    </ion-grid>\n\n\n\n    <ion-card style=\"box-shadow: none !important;\">\n        <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"12\">\n                <ion-label>\n                    <div class=\"align\">\n                        <p class=\"delivery-address-name\"> Tarjeta de pago</p>\n                    </div>\n                </ion-label>\n            </ion-col>\n        </ion-row>\n\n        <ion-row justify-content-around>\n            <ion-col size=\"12\">\n                <ion-label class=\"form-label-text\">Tarjeta</ion-label>\n                <ion-input [(ngModel)]=\"customerCardNumber\" placeholder=\"No. de la tarjeta\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label class=\"form-label-text\">Mes</ion-label>\n                <ion-input [(ngModel)]=\"customerCardNumberMonth\" placeholder=\"Mes\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label class=\"form-label-text\">Año</ion-label>\n                <ion-input [(ngModel)]=\"customerCardNumberYear\" placeholder=\"Año\" clearInput></ion-input>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-label class=\"form-label-text\">Nombre</ion-label>\n                <ion-input [(ngModel)]=\"customerCardNumberName\" placeholder=\"Nombre en la tarjeta\" clearInput></ion-input>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n\n    <ion-card style=\"box-shadow: none !important;\">\n        <ion-list class=\"ion-no-padding\">\n            <ion-row class=\"ion-no-padding\">\n                <ion-col size=\"12\">\n                    <ion-label>\n                        <div class=\"align\">\n                            <p class=\"delivery-address-name\"> Datos de entrega</p>\n                        </div>\n                    </ion-label>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class=\"ion-no-padding\">\n                <ion-col size=\"6\">\n                    <ion-label>\n                        <p class=\"delivery-address-text ion-text-wrap ion-text-capitalize\">Alan Ramirez Lugo</p>\n                        <p class=\"delivery-address-text  ion-text-wrap ion-text-capitalize\">6141656220</p>\n                    </ion-label>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-label>\n                        <p class=\"delivery-address-text ion-text-wrap ion-text-capitalize\">Rep. de venezuela #20</p>\n                        <p class=\"delivery-address-text  ion-text-wrap ion-text-capitalize\">Col. CTM c.p 31500</p>\n                        <p class=\"delivery-address-text  ion-text-wrap ion-text-capitalize\">Cuauhtémoc Chihuahua</p>\n                    </ion-label>\n                </ion-col>\n                <ion-col size=\"12\">\n                    <ion-label>\n                        <p class=\"delivery-address-text ion-text-wrap ion-text-capitalize\">Casa color amarillo, con lona de cabina fotogrfica en el exterior</p>\n                    </ion-label>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n    </ion-card>\n\n\n\n\n\n    <ion-card style=\"box-shadow: none !important;\">\n        <!--(click)=\"showDetails(work)\"-->\n\n        <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"12\">\n                <ion-label>\n                    <div class=\"align\">\n                        <p class=\"delivery-address-name\"> Productos</p>\n                    </div>\n                </ion-label>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-list class=\"ion-no-padding\">\n\n            <ion-item class=\"ion-no-padding\" *ngFor=\"let product of orderProductsArray\">\n                <ion-col size=\"6\" class=\"ion-no-margin\">\n                    <ion-grid class=\"ion-no-padding ion-no-margin\">\n                        <ion-row>\n                            <ion-col size=\"12\" class=\"ion-text-left\">\n                                <div class=\"align\">\n                                    <p class=\"product-name ion-text-nowrap\">{{product.Name}}</p>\n                                    <p class=\"card-date ion-text-wrap ion-text-capitalize\">${{product.Price}} x {{product.Unit}}</p>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-no-margin\">\n                    <label class=\"single-product-qty\">{{product.Qty}}{{product.Unit}}</label>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-center ion-no-margin\">\n                    <label class=\"single-product-total-price\">${{product.Total}}</label>\n                </ion-col>\n            </ion-item>\n\n\n\n        </ion-list>\n    </ion-card>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n<ion-footer no-border color=\"light\" mode=\"ios\">\n\n\n\n\n\n\n    <ion-grid class=\"ion-no-padding ion-no-margin\">\n        <div class=\"pay-total-amount-card\">\n            <ion-row>\n                <ion-col class=\"ion-text-center\">\n                    <ion-row class=\"product-qty-cart\">\n                        <ion-col>\n                            <h5 style=\"margin-top: 8px;\">Total:</h5>\n                            <h1 style=\"margin-bottom: 0px;\">${{totalOrderPrice}}</h1>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-button class=\"pay-button\" [disabled]=\"totalOrderPrice <= 0\" (click)=\"goToPay()\">Pagar</ion-button>\n                </ion-col>\n            </ion-row>\n        </div>\n\n    </ion-grid>\n</ion-footer>");

/***/ }),

/***/ "hTsW":
/*!**************************************************************************!*\
  !*** ./src/app/pages/explore-container/explore-container.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  position: fixed;\n  color: white;\n  background-color: red;\n  padding: 0px 8px 0px 5px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%);\n}\n\n.header-icons {\n  font-size: 30px;\n}\n\n.card-date {\n  font-size: 0.63rem !important;\n  line-height: 11pt;\n  font-weight: bold;\n  font-style: italic;\n  margin-top: -4px;\n}\n\nion-avatar img {\n  border-radius: 5%;\n}\n\n.image-work {\n  border-radius: 5%;\n  width: 75px;\n  height: 75px;\n  /* Full height */\n  /* Imagen centrada y colocada de forma elegante */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.aligname {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.aligname {\n  display: inline-block;\n  vertical-align: top;\n}\n\nion-card {\n  margin: 10px 10px 0px 10px;\n  padding: 5px;\n}\n\n.delivery-address-name {\n  margin-bottom: 10px;\n  font-family: Acumin !important;\n  font-size: 22px;\n  color: var(--ion-color-primary);\n}\n\n.delivery-addres-icon {\n  font-size: 40px;\n}\n\n.delivery-address-text {\n  font-size: 12px;\n  line-height: 11pt;\n  font-weight: bold;\n  font-style: italic;\n  color: var(--ion-color-primary) !important;\n}\n\nion-footer {\n  background-color: #f4f5f8 !important;\n}\n\nion-footer ion-grid {\n  background-color: #f4f5f8 !important;\n}\n\nion-footer h1 {\n  margin-top: 5px;\n}\n\nion-footer h5 {\n  margin-bottom: 0px;\n}\n\n.pay-total-amount-card {\n  margin: 10px;\n  background-color: white;\n  border-radius: 8px;\n}\n\n.pay-button {\n  --border-radius: 0px 0px 8px 8px;\n  width: 100%;\n}\n\n.product-name {\n  margin: 0px;\n  font-size: 15px;\n}\n\n.single-product-total-price {\n  font-size: 15px;\n}\n\n.single-product-qty {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.form-label-text {\n  color: black;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUdBLHFGQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBRUEsaURBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFLQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLQTtFQUNJLDBCQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBRko7O0FBV0E7RUFDSSxvQ0FBQTtBQVJKOztBQVNJO0VBQ0ksb0NBQUE7QUFQUjs7QUFTSTtFQUNJLGVBQUE7QUFQUjs7QUFTSTtFQUNJLGtCQUFBO0FBUFI7O0FBV0E7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVdBO0VBQ0ksZ0NBQUE7RUFDQSxXQUFBO0FBUko7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtBQVJKOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFSSiIsImZpbGUiOiJleHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIC8vcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgcGFkZGluZzogMHB4IDhweCAwcHggNXB4O1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLCAwLCAwLCAwLjY1KSAwJSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMC42NSkgMCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjY1KSAwJSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcbn1cblxuLmhlYWRlci1pY29ucyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uY2FyZC1kYXRlIHtcbiAgICBmb250LXNpemU6IDAuNjNyZW0gIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMTFwdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luLXRvcDogLTRweDtcbn1cblxuaW9uLWF2YXRhciBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4uaW1hZ2Utd29yayB7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAvKiBGdWxsIGhlaWdodCAqL1xuICAgIC8vIGhlaWdodDogMTAwJTsgXG4gICAgLyogSW1hZ2VuIGNlbnRyYWRhIHkgY29sb2NhZGEgZGUgZm9ybWEgZWxlZ2FudGUgKi9cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYWxpZ25hbWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYWxpZ25hbWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5pb24tY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uZGVsaXZlcnktYWRkcmVzcy1uYW1lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBY3VtaW4gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmRlbGl2ZXJ5LWFkZHJlcy1pY29uIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5kZWxpdmVyeS1hZGRyZXNzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTFwdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmOCAhaW1wb3J0YW50O1xuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmOCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gICAgaDUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxufVxuXG4ucGF5LXRvdGFsLWFtb3VudC1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ucGF5LWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHggMHB4IDhweCA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnNpbmdsZS1wcm9kdWN0LXRvdGFsLXByaWNlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5zaW5nbGUtcHJvZHVjdC1xdHkge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uZm9ybS1sYWJlbC10ZXh0IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kPKb":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"serverProcess == true\" class=\"ion-spinner-section\">\n    <ion-spinner color=\"primary\" name=\"lines\"></ion-spinner>\n</section>\n\n<ion-content padding class=\"background\" mode=\"ios\">\n    <div class=\"container ion-text-center\">\n        <img src=\"../assets/img/personaje.png\">\n        <div class=\"container-button-fb\" (click)=\"loginFacebook()\">\n            <ion-button expand=\"block\" fill=\"outline\" color=\"light\">Iniciar con facebook</ion-button>\n        </div>\n        <div class=\"container-button\" (click)=\"loginGuest()\">\n            <ion-button expand=\"block\" fill=\"outline\" color=\"light\">Iniciar como invitado</ion-button>\n        </div>\n    </div>\n\n\n</ion-content>");

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AuthService = class AuthService {
    constructor() {
        this.isAuth = false;
    }
    isAuthFunction() {
        return this.isAuth;
        console.log("isAuthFunction", this.isAuth);
    }
    setAuth(auth) {
        this.isAuth = auth;
        console.log("setAuth", this.isAuth);
    }
};
AuthService.ctorParameters = () => [];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "qT/k":
/*!**************************************************!*\
  !*** ./src/app/services/local-toasts.service.ts ***!
  \**************************************************/
/*! exports provided: LocalToastsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalToastsService", function() { return LocalToastsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let LocalToastsService = class LocalToastsService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                animated: true,
                duration: 2000
            });
            toast.present();
        });
    }
};
LocalToastsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
LocalToastsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocalToastsService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/start/start.component */ "+PL+");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _pages_explore_container_explore_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/explore-container/explore-container.component */ "XnsX");







const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-tabs-tabs-module */ "pages-tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./pages/tabs/tabs.module */ "qiIP")).then(m => m.TabsPageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'start', component: _components_start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"]
    }, {
        path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'ExploreContainer', component: _pages_explore_container_explore_container_component__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponent"]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map