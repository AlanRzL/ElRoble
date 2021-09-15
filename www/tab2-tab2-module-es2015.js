(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "0Mug":
/*!***************************************************!*\
  !*** ./src/app/pages/tab2/tab2-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "AEsy");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "AEsy":
/*!*****************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.ts ***!
  \*****************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "iTLA");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "Xbvs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/login/login.component */ "W3Zi");
/* harmony import */ var src_app_components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/order-details/order-details.component */ "pWPZ");
/* harmony import */ var src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/interfaces/interfaces */ "IeiB");
/* harmony import */ var src_app_services_local_toasts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/local-toasts.service */ "qT/k");
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/orders.service */ "MOE4");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");











let Tab2Page = class Tab2Page {
    constructor(modalCtrl, sessionService, ordersService, localToastsController, alertController) {
        this.modalCtrl = modalCtrl;
        this.sessionService = sessionService;
        this.ordersService = ordersService;
        this.localToastsController = localToastsController;
        this.alertController = alertController;
        this.ordersHistoryArray = [];
        this.serverProcess = false;
        this.user = new src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_7__["UserModel"]();
        this.Photo1 = "https://carniceriaelroble.com/app/img/splash_500.png";
    }
    ionViewWillEnter() {
        this.validateUserSession();
    }
    validateUserSession() {
        this.serverProcess = true;
        setTimeout(() => {
            this.user = this.sessionService.getLocalUser();
            this.serverProcess = false;
            if (this.user) {
                this.getOrdersHistory();
            }
            console.log(this.user);
        }, 500);
    }
    getOrdersHistory() {
        this.serverProcess = true;
        this.ordersService.getOrdersHistory(this.user.ID_User).subscribe(resp => {
            setTimeout(() => {
                this.serverProcess = false;
                if (resp.statusID == 200) {
                    this.ordersHistoryArray = resp.data;
                    console.log(this.ordersHistoryArray);
                }
                else {
                    this.ordersHistoryArray = [];
                    this.presentAlert(resp.statusName, resp.statusDescription);
                }
            }, 250);
        });
    }
    showOrderDetails(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsComponent"],
                componentProps: { Order: order },
                id: "OrderDetailsComponent"
            });
            modal.present();
            const data = yield modal.onWillDismiss();
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
    openLoginComponent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
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
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] },
    { type: src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_9__["OrdersService"] },
    { type: src_app_services_local_toasts_service__WEBPACK_IMPORTED_MODULE_8__["LocalToastsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "HJ/b":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.module.ts ***!
  \*******************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "AEsy");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "HGan");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "0Mug");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "iTUp");









let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "Xbvs":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-date {\n  font-size: 0.63rem !important;\n  line-height: 11pt;\n  font-weight: bold;\n  font-style: italic;\n  margin-top: -4px;\n}\n\nion-avatar img {\n  border-radius: 5%;\n}\n\n.image-work {\n  border-radius: 5%;\n  width: 75px;\n  height: 75px;\n  /* Full height */\n  /* Imagen centrada y colocada de forma elegante */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.aligname {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.aligname {\n  display: inline-block;\n  vertical-align: top;\n}\n\nion-card {\n  margin: 10px 10px 0px 10px;\n  padding: 5px;\n}\n\n.delivery-address-name {\n  margin-bottom: 10px;\n  font-family: Acumin !important;\n  font-size: 22px;\n  color: var(--ion-color-primary);\n}\n\n.delivery-addres-icon {\n  font-size: 40px;\n}\n\n.delivery-address-text {\n  font-size: 12px;\n  line-height: 11pt;\n  font-weight: bold;\n  font-style: italic;\n  color: var(--ion-color-primary) !important;\n}\n\nion-footer {\n  background-color: #f4f5f8 !important;\n}\n\nion-footer ion-grid {\n  background-color: #f4f5f8 !important;\n}\n\nion-footer h1 {\n  margin-top: 5px;\n}\n\nion-footer h5 {\n  margin-bottom: 0px;\n}\n\n.pay-total-amount-card {\n  margin: 10px;\n  background-color: white;\n  border-radius: 8px;\n}\n\n.pay-button {\n  --border-radius: 0px 0px 8px 8px;\n  width: 100%;\n}\n\n.order-created {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.order-total-price {\n  font-size: 20px;\n  font-weight: bold;\n  color: var(--ion-color-primary) !important;\n}\n\n.single-product-qty {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.nm-b {\n  margin-bottom: 0px !important;\n}\n\n.tab-no-session-message {\n  font-family: \"GilroyLight\";\n  height: auto;\n  /*font-size: 1.2rem;*/\n  font-weight: 400;\n  /*color: #7f8490 !important;*/\n  color: var(--ion-color-primary) !important;\n  padding: 10px;\n  margin-top: 20%;\n}\n\n.my_orders_no_session img {\n  margin-top: 30% !important;\n  width: 50%;\n  margin: auto;\n  display: block;\n}\n\n.section-p-no-session-message {\n  padding: 0px 20px 0px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUVBLGlEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSwwQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQURKOztBQVVBO0VBQ0ksb0NBQUE7QUFQSjs7QUFRSTtFQUNJLG9DQUFBO0FBTlI7O0FBUUk7RUFDSSxlQUFBO0FBTlI7O0FBUUk7RUFDSSxrQkFBQTtBQU5SOztBQVVBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFVQTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtBQVBKOztBQVVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVBKOztBQVVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUFQSjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVQTtFQUNJLDZCQUFBO0FBUEo7O0FBVUE7RUFDSSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBUEo7O0FBV0k7RUFDSSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQVJSOztBQVlBO0VBQ0ksMEJBQUE7QUFUSiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWRhdGUge1xuICAgIGZvbnQtc2l6ZTogMC42M3JlbSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxMXB0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuXG5pb24tYXZhdGFyIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG59XG5cbi5pbWFnZS13b3JrIHtcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgLy8gaGVpZ2h0OiAxMDAlOyBcbiAgICAvKiBJbWFnZW4gY2VudHJhZGEgeSBjb2xvY2FkYSBkZSBmb3JtYSBlbGVnYW50ZSAqL1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5hbGlnbmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5hbGlnbmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHggMTBweCAwcHggMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5kZWxpdmVyeS1hZGRyZXNzLW5hbWUge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFjdW1pbiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uZGVsaXZlcnktYWRkcmVzLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmRlbGl2ZXJ5LWFkZHJlc3MtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMXB0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4ICFpbXBvcnRhbnQ7XG4gICAgaW9uLWdyaWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGgxIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgICBoNSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG59XG5cbi5wYXktdG90YWwtYW1vdW50LWNhcmQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5wYXktYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweCAwcHggOHB4IDhweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm9yZGVyLWNyZWF0ZWQge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9yZGVyLXRvdGFsLXByaWNlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4uc2luZ2xlLXByb2R1Y3QtcXR5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLm5tLWIge1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGFiLW5vLXNlc3Npb24tbWVzc2FnZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiR2lscm95TGlnaHRcIjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLypmb250LXNpemU6IDEuMnJlbTsqL1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLypjb2xvcjogIzdmODQ5MCAhaW1wb3J0YW50OyovXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG4ubXlfb3JkZXJzX25vX3Nlc3Npb24ge1xuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwJSAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLnNlY3Rpb24tcC1uby1zZXNzaW9uLW1lc3NhZ2Uge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "iTLA":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab2/tab2.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"serverProcess == true\" class=\"ion-spinner-section\">\n    <ion-spinner color=\"primary\" name=\"lines\"></ion-spinner>\n</section>\n\n\n<ion-content mode=\"ios\">\n\n    <!-- No session -->\n    <section *ngIf=\"!user\" class=\"ion-text-center tab-no-session-message\" (click)=\"openLoginComponent()\">\n        <ion-col size=\"12\" class=\"my_orders_no_session\">\n            <img src=\"../assets/svg/orders.svg\">\n        </ion-col>\n        <p class=\"section-p-no-session-message\"> Inicia sesión o registrate para ver tu historial de pedidos</p>\n    </section>\n\n\n    <ion-card style=\"box-shadow: none !important;\">\n        <!--(click)=\"showDetails(work)\"-->\n\n        <ion-row *ngIf=\"user\" class=\"ion-no-padding\">\n            <ion-col size=\"12\">\n                <ion-label>\n                    <div class=\"align\">\n                        <p class=\"delivery-address-name\"> Tus pedidos</p>\n                    </div>\n                </ion-label>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-list class=\"ion-no-padding\">\n\n            <ion-item class=\"ion-no-padding\" (click)=\"showOrderDetails(order)\" *ngFor=\"let order of ordersHistoryArray\">\n                <ion-col size=\"3\" class=\"ion-no-margin\">\n                    <img class=\"border-radius image-work\" [src]=\" Photo1 | imageSanitizer\">\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-no-margin\">\n                    <ion-grid class=\"ion-no-padding ion-no-margin\">\n                        <ion-row>\n                            <ion-col size=\"12\" class=\"ion-text-left\">\n                                <div class=\"align\">\n                                    <p class=\"order-created ion-text-nowrap\">{{order.Created}}</p>\n                                    <p class=\"card-date ion-text-wrap ion-text-capitalize nm-b\">{{order.Status}}</p>\n                                    <p class=\"card-date ion-text-wrap ion-text-capitalize\">Productos: {{order.TotalProducts}}</p>\n                                    <p class=\"card-date ion-text-wrap ion-text-capitalize \">Orden no. {{order.ID_Order}}</p>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-col>\n                <ion-col size=\"5\" class=\"ion-text-right ion-no-margin\">\n                    <label class=\"order-total-price\">{{order.Total | currency : 'USD' : 'symbol' : '2.2-2' }}</label>\n                </ion-col>\n            </ion-item>\n\n\n\n        </ion-list>\n    </ion-card>\n\n\n\n\n\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map