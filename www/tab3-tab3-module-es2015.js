(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "0+Z/":
/*!********************************************!*\
  !*** ./src/app/services/stripe.service.ts ***!
  \********************************************/
/*! exports provided: StripeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeService", function() { return StripeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



const URL = 'https://carniceriaelroble.com/app/controllers';
let StripeService = class StripeService {
    constructor(http) {
        this.http = http;
    }
    getToken(orderTotal) {
        return this.http.get(`${URL}/stripe_token.php?orderTotal=${orderTotal}`);
    }
};
StripeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StripeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StripeService);



/***/ }),

/***/ "ADJJ":
/*!***************************************************!*\
  !*** ./src/app/pages/tab3/tab3-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "iBx5");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "HGan":
/*!*********************************************************************!*\
  !*** ./src/app/pages/explore-container/explore-container.module.ts ***!
  \*********************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "XnsX");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "iTUp");







let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ "O/F/":
/*!*********************************************!*\
  !*** ./src/app/pipes/dom-sanitizer.pipe.ts ***!
  \*********************************************/
/*! exports provided: DomSanitizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomSanitizerPipe", function() { return DomSanitizerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



let DomSanitizerPipe = class DomSanitizerPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(imageURL) {
        let domImage = `url('${imageURL}')`;
        return this.domSanitizer.bypassSecurityTrustStyle(domImage);
    }
};
DomSanitizerPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
DomSanitizerPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'domSanitizer'
    })
], DomSanitizerPipe);



/***/ }),

/***/ "Praz":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab3/tab3.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"serverProcess == true\" class=\"ion-spinner-section\">\n    <ion-spinner color=\"primary\" name=\"lines\"></ion-spinner>\n</section>\n\n\n\n\n<ion-content mode=\"ios\">\n\n    <!-- <ion-header *ngIf=\"stripeOrderStep == 1\">\n        <ion-grid class=\"grid-container\">\n            <ion-row justify-content-around>\n                <ion-col size=\"12\" class=\"ion-text-right \">\n                    <ion-icon name=\"location-outline\" class=\"header-icons\" (click)=\"presentAlertConfirm()\"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-header>-->\n\n\n    <ion-card *ngIf=\"orderProductsArray.length > 0\" style=\"box-shadow: none !important;\">\n        <!--(click)=\"showDetails(work)\"-->\n\n        <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"12\">\n                <ion-label>\n                    <div class=\"align\">\n                        <p class=\"delivery-address-name\" (click)=\"openOrderCompletedComponent()\"> Productos</p>\n                    </div>\n                </ion-label>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-list class=\"ion-no-padding\">\n\n            <ion-item class=\"ion-no-padding\" *ngFor=\"let product of orderProductsArray\">\n                <ion-col size=\"3\" class=\"ion-no-margin\">\n                    <img class=\"border-radius image-work\" [src]=\" product.Photo | imageSanitizer\">\n                </ion-col>\n                <ion-col size=\"6\" class=\"ion-no-margin\">\n                    <ion-grid class=\"ion-no-padding ion-no-margin\">\n                        <ion-row>\n                            <ion-col size=\"12\" class=\"ion-text-left\">\n                                <div class=\"align\">\n                                    <p class=\"product-name ion-text-nowrap\">{{product.Name}}</p>\n                                    <p class=\"card-date ion-text-wrap ion-text-capitalize\">{{product.Price | currency : 'USD' : 'symbol' : '2.2-2' }} x {{product.Unit}}</p>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <ion-grid class=\"ion-no-padding ion-no-margin\">\n                        <ion-row>\n                            <ion-col size=\"12\" class=\"ion-text-left\">\n                                <ion-row class=\"product-qty-cart\">\n                                    <ion-col size=\"12\">\n                                        <ion-button *ngIf=\"stripeOrderStep == 1\" size=\"small\" color=\"primary\" (click)=\"remove(product)\">\n                                            <ion-icon name=\"remove-outline\"></ion-icon>\n                                        </ion-button>\n                                        <label class=\"single-product-qty\">{{product.Qty}}</label>\n                                        <ion-button *ngIf=\"stripeOrderStep == 1\" size=\"small\" color=\"primary\" (click)=\"add(product)\">\n                                            <ion-icon name=\"add-outline\"></ion-icon>\n                                        </ion-button>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-right ion-no-margin\">\n                    <label class=\"single-product-total-price\">{{product.Total | currency : 'USD' : 'symbol' : '2.2-2' }}</label>\n                </ion-col>\n                <label *ngIf=\"stripeOrderStep == 1\" class=\"delete-product-button\" (click)=\"delete(product)\">x</label>\n            </ion-item>\n\n\n\n        </ion-list>\n\n\n    </ion-card>\n\n\n    <ion-col *ngIf=\"orderProductsArray.length == 0\" size=\"12\" class=\"ion-text-center\">\n        <img src=\"../assets/svg/empty_cart.svg\" class=\"empty-cart-img\">\n        <p class=\"primary-color section-p-no-session-message\"> ¡Carrito vacio, agrega productos!</p>\n    </ion-col>\n\n\n\n</ion-content>\n\n\n<ion-footer no-border color=\"light\" mode=\"ios\">\n\n    <ion-card *ngIf=\"orderProductsArray.length > 0\" style=\"box-shadow: none !important;\">\n        <ion-list class=\"ion-no-padding\">\n            <ion-row class=\"ion-no-padding\">\n                <ion-col size=\"12\">\n                    <ion-label>\n                        <div class=\"align\">\n                            <p class=\"delivery-address-name\"> Datos de entrega</p>\n                        </div>\n                    </ion-label>\n                </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"!localUser\" class=\"ion-no-padding ion-text-center\" (click)=\"openLoginComponent()\">\n                <ion-col size=\"12\">\n                    <p>Sin datos para la entrega, inicia sesion</p>\n                </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"localUser\" class=\"ion-no-padding\">\n                <ion-col size=\"6\">\n                    <ion-label>\n                        <p class=\"delivery-address-text ion-text-wrap ion-text-capitalize\">{{user.Name}}</p>\n                        <p class=\"delivery-address-text  ion-text-wrap ion-text-capitalize\">{{user.Phone}}</p>\n                    </ion-label>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-label>\n                        <p class=\"delivery-address-text ion-text-wrap ion-text-capitalize\">{{user.Address}}</p>\n                        <p class=\"delivery-address-text  ion-text-wrap ion-text-capitalize\">Col. {{user.AddressColone}} c.p {{user.AddressZipCode}}</p>\n                        <p class=\"delivery-address-text  ion-text-wrap ion-text-capitalize\">{{user.AddressCity}} {{user.AddressState}}</p>\n                    </ion-label>\n                </ion-col>\n            </ion-row>\n\n\n        </ion-list>\n    </ion-card>\n\n\n\n\n    <ion-card id=\"payment-card\" *ngIf=\"stripeOrderStep == 2\">\n        <ion-list class=\"ion-no-padding\">\n            <ion-row class=\"ion-no-padding\">\n                <ion-col size=\"12\">\n                    <ion-label>\n                        <div class=\"align\">\n                            <p class=\"delivery-address-name\"> Tarjeta</p>\n                        </div>\n                    </ion-label>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class=\"ion-no-padding ion-text-center\" style=\"\n            margin-top: 15px;\n            margin-bottom: 10px;\">\n                <ion-col size=\"12\">\n\n                    <form action=\"/\" method=\"post\" id=\"payment-form\">\n                        <div class=\"form-row\">\n                            <div id=\"card-element\">\n                            </div>\n                            <div id=\"card-errors\" role=\"alert\"></div>\n                        </div>\n                    </form>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n    </ion-card>\n\n\n\n\n    <ion-grid class=\"ion-no-padding ion-no-margin\">\n        <div class=\"pay-total-amount-card\">\n            <ion-row>\n                <ion-col class=\"ion-text-center\">\n                    <ion-row class=\"product-qty-cart\">\n                        <ion-col>\n                            <h5 *ngIf=\"totalShipping == 0 && totalProductsOrderPrice > 0\" style=\"margin-top: 8px; font-size: 12px;\">Envio: Gratis</h5>\n                            <h5 *ngIf=\"totalShipping > 0 \" style=\"margin-top: 8px; font-size: 12px;\">Envio: {{totalShipping | currency : 'USD' : 'symbol' : '2.2-2' }}</h5>\n                            <h5 *ngIf=\"totalProductsOrderPrice > 0\" style=\"margin-top: 8px; font-size: 12px;\">Productos: {{totalProductsOrderPrice | currency : 'USD' : 'symbol' : '2.2-2' }}</h5>\n                            <h5 style=\"margin-top: 8px;\">Total:</h5>\n                            <h1 style=\"margin-bottom: 0px;\">{{totalProductsOrderPrice + totalShipping | currency : 'USD' : 'symbol' : '2.2-2' }}</h1>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-button *ngIf=\"stripeOrderStep == 1\" class=\"pay-button\" [disabled]=\"totalProductsOrderPrice <= 0\" (click)=\"goToPay()\">Generar orden</ion-button>\n                    <ion-button *ngIf=\"stripeOrderStep == 2\" class=\"pay-button\" id=\"payNowToStripe\">Pagar</ion-button>\n                </ion-col>\n            </ion-row>\n        </div>\n\n    </ion-grid>\n</ion-footer>");

/***/ }),

/***/ "XgaQ":
/*!*******************************************!*\
  !*** ./src/app/pages/tab3/tab3.module.ts ***!
  \*******************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "iBx5");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "HGan");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "ADJJ");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "iTUp");










let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "iBx5":
/*!*****************************************!*\
  !*** ./src/app/pages/tab3/tab3.page.ts ***!
  \*****************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "Praz");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "yxfH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/login/login.component */ "W3Zi");
/* harmony import */ var src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/interfaces/interfaces */ "IeiB");
/* harmony import */ var src_app_services_local_toasts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/local-toasts.service */ "qT/k");
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/orders.service */ "MOE4");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var src_app_services_stripe_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/stripe.service */ "0+Z/");
/* harmony import */ var src_app_components_checkout_order_completed_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/checkout/order-completed.component */ "5jn2");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/location.service */ "yHma");















let Tab3Page = class Tab3Page {
    /**Stripe */
    constructor(stripeService, ordersService, authService, sessionService, localToastsController, modalCtrl, alertController, router, location) {
        this.stripeService = stripeService;
        this.ordersService = ordersService;
        this.authService = authService;
        this.sessionService = sessionService;
        this.localToastsController = localToastsController;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.router = router;
        this.location = location;
        this.user = new src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_7__["UserModel"]();
        this.order = new src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_7__["OrderModel"]();
        this.serverProcess = false;
        this.currentUserLocationIntents = 0;
        this.orderProductsArray = [];
        this.totalProductsOrderPrice = 0;
        this.totalShipping = 0;
        this.totalOrderPrice = 0;
        /**Stripe */
        this.stripeOrderStep = 1;
        this.stripe = Stripe('pk_test_51H78EyJsj5b49qDk7Z6zTjTl4Vso5bMAves3g6vgbMmskLvgqmmmGJ2YVP2UGb9dp42c4Oklj5wk9gK7sDcPdWWG00Sc4BVcPC');
    }
    ionViewWillEnter() {
        this.stripeOrderStep = 1;
        console.log("ionViewWillEnter");
        this.validateUserSession();
    }
    validateUserSession() {
        this.serverProcess = true;
        setTimeout(() => {
            this.orderProductsArray = this.ordersService.getLocalOrder();
            this.localUser = this.sessionService.getLocalUser();
            if (this.localUser) {
                this.user = this.sessionService.getLocalUser();
            }
            this.calculateTotalPrice();
            this.serverProcess = false;
        }, 500);
    }
    remove(item) {
        let index = this.orderProductsArray.indexOf(item);
        if (item.Qty > 1) {
            item.Qty = item.Qty - 1;
            item.Total = item.Qty * item.Price;
            this.orderProductsArray[index] = item;
            this.calculateTotalPrice();
        }
    }
    add(item) {
        let index = this.orderProductsArray.indexOf(item);
        item.Qty = item.Qty + 1;
        item.Total = item.Qty * item.Price;
        this.orderProductsArray[index] = item;
        this.calculateTotalPrice();
    }
    delete(item) {
        let index = this.orderProductsArray.indexOf(item);
        this.orderProductsArray.splice(index, 1);
        this.calculateTotalPrice();
        this.localToastsController.presentToast("Producto eliminado");
    }
    calculateTotalPrice() {
        this.totalProductsOrderPrice = 0;
        this.orderProductsArray.forEach((product, index) => {
            this.totalProductsOrderPrice = this.totalProductsOrderPrice + product.Total;
        });
        if (this.location.getCurrentUserLocation() == "Delicias") {
            console.log(this.location.getCurrentUserLocation(), "0 de envio");
            this.totalShipping = 0;
        }
        else {
            console.log(this.location.getCurrentUserLocation(), "+500 de envio");
            if (this.totalProductsOrderPrice > 0) {
                this.totalShipping = 500;
            }
            else {
                this.totalShipping = 0;
            }
        }
        this.totalOrderPrice = this.totalProductsOrderPrice + this.totalShipping;
        this.ordersService.setLocalOrder(this.orderProductsArray);
        setTimeout(() => {
            this.serverProcess = false;
        }, 500);
    }
    goToPay() {
        if (this.localUser) {
            this.presentAlertConfirmPay();
        }
        else {
            this.openLoginComponent();
        }
    }
    presentAlertConfirmPay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Generar orden',
                message: 'Es necesario contar con tarjeta de debito o credito, ¿desea continuar?',
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
                            if (!this.user.Address || !this.user.AddressCity || !this.user.AddressColone || !this.user.AddressState || !this.user.AddressZipCode || !this.user.Phone) {
                                this.presentAlert("Error", "Faltan datos de completar en su perfil / dirección, no es posible completar esta orden.");
                            }
                            else {
                                console.log(this.user);
                            }
                            //this.setupStripe();
                        }
                    }
                ]
            });
            yield alert.present();
        });
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
    openOrderCompletedComponent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_checkout_order_completed_component__WEBPACK_IMPORTED_MODULE_13__["OrderCompletedComponent"],
                id: "OrderCompletedComponent"
            });
            modal.present();
        });
    }
    setupStripe() {
        console.log("setupStripe");
        this.serverProcess = true;
        this.stripeOrderStep = 2;
        setTimeout(() => {
            this.serverProcess = false;
            /** Original STRIPE  */
            this.elements = this.stripe.elements();
            var style = {
                base: {
                    color: '#303238',
                    fontSize: '16px',
                    fontFamily: '"Open Sans", sans-serif',
                    fontSmoothing: 'antialiased',
                    '::placeholder': {
                        color: '#CFD7DF',
                    },
                },
                invalid: {
                    color: '#e5424d',
                    ':focus': {
                        color: '#303238',
                    },
                },
            };
            this.card = this.elements.create('card', { style: style });
            this.card.mount("#card-element");
            this.card.addEventListener('change', event => {
                var displayError = document.getElementById('card-errors');
                if (event.error) {
                    displayError.textContent = event.error.message;
                }
                else {
                    displayError.textContent = '';
                }
            });
            var buttonPayNowToStripe = document.getElementById('payNowToStripe');
            buttonPayNowToStripe.addEventListener('click', event => {
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = "";
                event.preventDefault();
                this.serverProcess = true;
                // this.stripe.createToken(this.card)
                this.stripe.createToken(this.card).then(result => {
                    if (result.error) {
                        var errorElement = document.getElementById('card-errors');
                        errorElement.textContent = result.error.message;
                        this.serverProcess = false;
                    }
                    else {
                        this.totalOrderPrice = this.totalProductsOrderPrice + this.totalShipping;
                        this.totalOrderPrice = parseFloat(this.totalOrderPrice.toFixed(2));
                        try {
                            this.serverProcess = true;
                            var clientSecret = this.stripeService.getToken(this.totalOrderPrice).subscribe(resp => {
                                console.log(resp);
                                setTimeout(() => {
                                    this.serverProcess = false;
                                    if (resp.statusID == 200) {
                                        this.payWithCard(this.stripe, this.card, resp.clientSecret);
                                    }
                                    else {
                                        this.presentAlert(resp.statusName, resp.statusDescription);
                                    }
                                }, 1500);
                            });
                        }
                        catch (error) {
                            this.serverProcess = false;
                            this.presentAlert("Error", error);
                        }
                        console.log(result);
                    }
                });
            });
        }, 1000); //setTimeout(()=>{ 
    }
    payWithCard(stripe, card, clientSecret) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.serverProcess = true;
                this.stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: this.user.Name,
                            email: this.user.Email,
                            phone: this.user.Phone,
                            address: {
                                line1: this.user.Address + this.user.AddressColone + this.user.AddressZipCode,
                                city: this.user.AddressCity,
                                state: this.user.AddressState,
                                country: 'MX'
                            },
                        },
                    }
                }).then(result => {
                    this.serverProcess = false;
                    if (result.error) {
                        var errorElement = document.getElementById('card-errors');
                        errorElement.textContent = result.error.message;
                        // Show error to your customer
                        //showError(result.error.message);
                    }
                    else {
                        // The payment succeeded!
                        console.log(result.paymentIntent.id);
                        this.createOrderInDB(result.paymentIntent.id);
                    }
                });
            }
            catch (error) {
                this.serverProcess = false;
                this.presentAlert("Error", error);
            }
        });
    }
    createOrderInDB(StripeID) {
        this.serverProcess = true;
        this.order.ID_User = this.user.ID_User;
        this.order.Name = this.user.Name;
        this.order.Phone = this.user.Phone;
        this.order.Email = this.user.Email;
        this.order.Address = this.user.Address;
        this.order.AddressColone = this.user.AddressColone;
        this.order.AddressZipCode = this.user.AddressZipCode;
        this.order.AddressState = this.user.AddressState;
        this.order.AddressCity = this.user.AddressCity;
        this.order.orderProductsArray = this.ordersService.getLocalOrderString();
        this.order.StripeID = StripeID;
        this.ordersService.postOrder(this.order).subscribe(resp => {
            console.log(resp);
            setTimeout(() => {
                this.serverProcess = false;
                if (resp.statusID == 200) {
                    localStorage.setItem('LocalOrder', "[]");
                    this.validateUserSession();
                    this.openOrderCompletedComponent();
                }
                else {
                    this.presentAlert(resp.statusName, resp.statusDescription);
                }
            }, 1500);
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: src_app_services_stripe_service__WEBPACK_IMPORTED_MODULE_12__["StripeService"] },
    { type: src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_9__["OrdersService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"] },
    { type: src_app_services_local_toasts_service__WEBPACK_IMPORTED_MODULE_8__["LocalToastsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_14__["LocationService"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-sanitizer.pipe */ "O/F/");
/* harmony import */ var _image_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-sanitizer.pipe */ "vOE2");




let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__["DomSanitizerPipe"], _image_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_3__["ImageSanitizerPipe"]],
        exports: [_dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__["DomSanitizerPipe"], _image_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_3__["ImageSanitizerPipe"]]
    })
], PipesModule);



/***/ }),

/***/ "vOE2":
/*!***********************************************!*\
  !*** ./src/app/pipes/image-sanitizer.pipe.ts ***!
  \***********************************************/
/*! exports provided: ImageSanitizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSanitizerPipe", function() { return ImageSanitizerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



let ImageSanitizerPipe = class ImageSanitizerPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(imageURL) {
        return this.domSanitizer.bypassSecurityTrustUrl(imageURL);
    }
};
ImageSanitizerPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
ImageSanitizerPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'imageSanitizer'
    })
], ImageSanitizerPipe);



/***/ }),

/***/ "yxfH":
/*!*******************************************!*\
  !*** ./src/app/pages/tab3/tab3.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-date {\n  font-size: 0.63rem !important;\n  line-height: 11pt;\n  font-weight: bold;\n  font-style: italic;\n  margin-top: -4px;\n}\n\nion-avatar img {\n  border-radius: 5%;\n}\n\n.image-work {\n  border-radius: 5%;\n  width: 75px;\n  height: 75px;\n  /* Full height */\n  /* Imagen centrada y colocada de forma elegante */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.aligname {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.aligname {\n  display: inline-block;\n  vertical-align: top;\n}\n\nion-card {\n  margin: 10px 10px 0px 10px;\n  padding: 5px;\n}\n\n.delivery-address-name {\n  margin-bottom: 10px;\n  font-family: Acumin !important;\n  font-size: 22px;\n  color: var(--ion-color-primary);\n}\n\n.delivery-addres-icon {\n  font-size: 40px;\n}\n\n.delivery-address-text {\n  font-size: 12px;\n  line-height: 11pt;\n  font-weight: bold;\n  font-style: italic;\n  color: var(--ion-color-primary) !important;\n}\n\nion-footer {\n  background-color: #f4f5f8 !important;\n}\n\nion-footer ion-grid {\n  background-color: #f4f5f8 !important;\n}\n\nion-footer h1 {\n  margin-top: 5px;\n}\n\nion-footer h5 {\n  margin-bottom: 0px;\n}\n\n.pay-total-amount-card {\n  margin: 10px;\n  background-color: white;\n  border-radius: 8px;\n}\n\n.pay-button {\n  --border-radius: 0px 0px 8px 8px;\n  width: 100%;\n}\n\n.product-name {\n  margin: 0px;\n  font-size: 15px;\n}\n\n.single-product-total-price {\n  font-size: 15px;\n}\n\n.single-product-qty {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.delete-product-button {\n  position: absolute;\n  top: 0px;\n  right: 10px;\n  color: gray;\n}\n\n#card-errors {\n  color: red;\n  margin-top: 18px;\n}\n\n#payment-card {\n  box-shadow: none !important;\n  border: 2px solid red;\n}\n\n#payment-card:hover {\n  box-shadow: none !important;\n  border: none !important;\n}\n\n.empty-cart-img {\n  width: 50%;\n  margin: auto;\n  display: block;\n  margin-top: 30%;\n}\n\n.section-p-no-session-message {\n  padding: 0px 20px 0px 20px !important;\n}\n\nion-header {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  position: fixed;\n}\n\n.header-icons {\n  /*font-size: 30px;\n  color: #f44336b5;    */\n  font-size: 30px;\n  color: #ffffff;\n  background-color: var(--ion-color-primary-shade);\n  border-radius: 100%;\n  padding: 5px;\n  margin-top: -5px;\n  box-shadow: #795548 0px 0px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUVBLGlEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSwwQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQURKOztBQVVBO0VBQ0ksb0NBQUE7QUFQSjs7QUFRSTtFQUNJLG9DQUFBO0FBTlI7O0FBUUk7RUFDSSxlQUFBO0FBTlI7O0FBUUk7RUFDSSxrQkFBQTtBQU5SOztBQVVBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFVQTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtBQVBKOztBQVVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFQSjs7QUFVQTtFQUNJLGVBQUE7QUFQSjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBUEo7O0FBVUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFVQTtFQUNJLDJCQUFBO0VBQ0EscUJBQUE7QUFQSjs7QUFVQTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7QUFQSjs7QUFVQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFQSjs7QUFVQTtFQUNJLHFDQUFBO0FBUEo7O0FBVUE7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVlBO0VBQ0k7d0JBQUE7RUFFQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQVRKIiwiZmlsZSI6InRhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZGF0ZSB7XG4gICAgZm9udC1zaXplOiAwLjYzcmVtICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDExcHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG59XG5cbmlvbi1hdmF0YXIgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuLmltYWdlLXdvcmsge1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgLyogRnVsbCBoZWlnaHQgKi9cbiAgICAvLyBoZWlnaHQ6IDEwMCU7IFxuICAgIC8qIEltYWdlbiBjZW50cmFkYSB5IGNvbG9jYWRhIGRlIGZvcm1hIGVsZWdhbnRlICovXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmFsaWduYW1lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFsaWduYW1lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmRlbGl2ZXJ5LWFkZHJlc3MtbmFtZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LWZhbWlseTogQWN1bWluICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5kZWxpdmVyeS1hZGRyZXMtaWNvbiB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uZGVsaXZlcnktYWRkcmVzcy10ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDExcHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3Qge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY1ZjggIWltcG9ydGFudDtcbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY1ZjggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaDEge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuICAgIGg1IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbn1cblxuLnBheS10b3RhbC1hbW91bnQtY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnBheS1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4IDBweCA4cHggOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdC1uYW1lIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5zaW5nbGUtcHJvZHVjdC10b3RhbC1wcmljZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uc2luZ2xlLXByb2R1Y3QtcXR5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmRlbGV0ZS1wcm9kdWN0LWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4jY2FyZC1lcnJvcnMge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbn1cblxuI3BheW1lbnQtY2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cblxuI3BheW1lbnQtY2FyZDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZW1wdHktY2FydC1pbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbn1cblxuLnNlY3Rpb24tcC1uby1zZXNzaW9uLW1lc3NhZ2Uge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1oZWFkZXIge1xuICAgIC8vcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIC8vcGFkZGluZzogNXB4IDhweCAwcHggNXB4O1xufVxuXG4uaGVhZGVyLWljb25zIHtcbiAgICAvKmZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogI2Y0NDMzNmI1OyAgICAqL1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICBib3gtc2hhZG93OiAjNzk1NTQ4IDBweCAwcHggMjBweDtcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map