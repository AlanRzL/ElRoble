(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "2SFI":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product.component.html */ "lgGG");
/* harmony import */ var _product_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component.scss */ "iWmG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





//import { ServiceDetailsComponent } from '../service-details/service-details.component';
let ProductComponent = class ProductComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.product = {};
    }
    ngOnInit() { }
    showDetails(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.product);
            /*const modal = await this.modalCtrl.create({
              component: ServiceDetailsComponent,
              componentProps: {
                product
              }
            });
            modal.present();*/
        });
    }
};
ProductComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ProductComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product',
        template: _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductComponent);



/***/ }),

/***/ "6gHt":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-details/product-details.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content mode=\"ios\">\n\n    <ion-header>\n        <ion-grid class=\"grid-container\">\n            <ion-row justify-content-around>\n                <ion-col size=\"2\" class=\"ion-text-left\" (click)=\"closeModal()\">\n                    <ion-icon color=\"light\" name=\"chevron-back-outline\" class=\"header-icons\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"8\" class=\"ion-text-center col-category-name\">\n                    <label class=\"header-category-name\">{{Product.Name}}</label>\n                </ion-col>\n                <ion-col size=\"2\" class=\"ion-text-right\" (click)=\"goToCart()\">\n                    <ion-icon color=\"light\" name=\"cart-outline\" class=\"header-icons\"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-header>\n\n\n\n    <img class=\"details-image\" [src]=\"Product.Image | imageSanitizer\" *ngIf=\"Photo\">\n    <ion-grid class=\"ion-no-padding ion-no-margin\">\n        <ion-row justify-content-around class=\"round-section\">\n            <ion-col size=\"7\" class=\"left-col\">\n                <h1 class=\"product-name\">{{Product.Name}}</h1>\n            </ion-col>\n            <ion-col size=\"5\" class=\"right-col ion-text-center\">\n                <h1 class=\"product-price\">${{Product.Price}}</h1>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-grid class=\"ion-no-margin ion-no-padding\">\n        <ion-row>\n            <ion-col size=\"12\" class=\"product-description\">\n                <ion-label> {{Product.Description}}\n\n\n\n                </ion-label>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n\n<ion-footer no-border mode=\"ios\">\n\n    <ion-grid class=\"ion-no-padding ion-no-margin\">\n        <ion-row>\n            <ion-col size=\"6\" class=\"ion-text-center\">\n                <ion-row class=\"product-qty-cart\">\n                    <ion-col size=\"4\">\n                        <ion-button size=\"small\" color=\"primary\" (click)=\"remove()\">\n                            <ion-icon name=\"remove-outline\"></ion-icon>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size=\"4\" class=\"ion-text-center\">\n                        <label>{{productQty}}</label>\n                    </ion-col>\n                    <ion-col size=\"4\" class=\"ion-text-center\">\n                        <ion-button size=\"small\" color=\"primary\" (click)=\"add()\">\n                            <ion-icon name=\"add-outline\"></ion-icon>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-text-right\">\n                <ion-button color=\"primary\" (click)=\"addNewProduct()\">Agregar</ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>");

/***/ }),

/***/ "8Ejy":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "EWkd":
/*!*******************************************************************************!*\
  !*** ./src/app/components/products-category/products-category.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-container {\n  padding: 0px 5px 0px 5px;\n}\n\n/*ion-card {\n    //background-color: var(--ion-color-primary);\n    //text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    //height: 185px;\n}*/\n\n.card-title {\n  /* margin-bottom: 10px; */\n  font-family: Acumin !important;\n  font-size: 11px;\n  color: var(--ion-color-primary);\n  /* width: 100%; */\n  background-color: white;\n  /* padding-top: 2px; */\n  /* border-radius: 8px;*/\n}\n\n.header-card {\n  --background: url(\"/assets/img/banner_1.png\") no-repeat 50% 50%;\n  height: 180px;\n}\n\n.product-name {\n  font-family: Acumin !important;\n}\n\n.product-price {\n  font-size: 10px;\n  margin-top: -2px;\n  margin-left: -5px;\n  font-weight: bold;\n}\n\nion-header {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  position: fixed;\n  color: white;\n  background-color: red;\n  padding: 10px 8px 0px 5px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%);\n}\n\n.col-category-name {\n  padding-top: 10px;\n}\n\n.header-category-name {\n  font-family: Acumin !important;\n  font-size: 21px;\n  color: white;\n}\n\n.header-icons {\n  font-size: 30px;\n}\n\n.ion-text-left {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2R1Y3RzLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUFDSjs7QUFHQTs7OztFQUFBOztBQU1BO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSwrREFBQTtFQUNBLGFBQUE7QUFESjs7QUFLQTtFQUNJLDhCQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBR0EscUZBQUE7QUFISjs7QUFNQTtFQUNJLGlCQUFBO0FBSEo7O0FBTUE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBSEoiLCJmaWxlIjoicHJvZHVjdHMtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcbn1cblxuXG4vKmlvbi1jYXJkIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAvL3RleHQtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIC8vaGVpZ2h0OiAxODVweDtcbn0qL1xuXG4uY2FyZC10aXRsZSB7XG4gICAgLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cbiAgICBmb250LWZhbWlseTogQWN1bWluICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLyogcGFkZGluZy10b3A6IDJweDsgKi9cbiAgICAvKiBib3JkZXItcmFkaXVzOiA4cHg7Ki9cbn1cblxuLmhlYWRlci1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvYmFubmVyXzEucG5nJykgbm8tcmVwZWF0IDUwJSA1MCU7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICAvLy0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvSU5JQ0lPX09QQUNJREFEODQucG5nXCIpIC8qNTUlIDUwJS8qLzE0NSUgMTAwJSBuby1yZXBlYXRcbn1cblxuLnByb2R1Y3QtbmFtZSB7XG4gICAgZm9udC1mYW1pbHk6IEFjdW1pbiAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdC1wcmljZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1oZWFkZXIge1xuICAgIC8vcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgcGFkZGluZzogMTBweCA4cHggMHB4IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMC42NSkgMCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDAuNjUpIDAlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC42NSkgMCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XG59XG5cbi5jb2wtY2F0ZWdvcnktbmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5oZWFkZXItY2F0ZWdvcnktbmFtZSB7XG4gICAgZm9udC1mYW1pbHk6IEFjdW1pbiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXItaWNvbnMge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmlvbi10ZXh0LWxlZnQge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "JGGF":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-container {\n  padding: 0px 5px 0px 5px;\n}\n\n.menu-card img {\n  width: 165px;\n}\n\n.card-title {\n  margin-bottom: 10px;\n  font-family: Acumin !important;\n  font-size: 17px;\n  color: var(--ion-color-primary);\n}\n\n.header-card {\n  --background: url(\"/assets/img/banner_1.png\") no-repeat 50% 50%;\n  height: 180px;\n}\n\nion-header {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  position: fixed;\n}\n\n.header-icons {\n  /*font-size: 30px;\n  color: #f44336b5;    */\n  font-size: 30px;\n  color: #ffffff;\n  background-color: var(--ion-color-primary-shade);\n  border-radius: 100%;\n  padding: 5px;\n  box-shadow: #795548 0px 0px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUFDSjs7QUFPQTtFQUNJLFlBQUE7QUFKSjs7QUFRQTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7RUFHQSxlQUFBO0VBRUEsK0JBQUE7QUFSSjs7QUFZQTtFQUNJLCtEQUFBO0VBQ0EsYUFBQTtBQVRKOztBQWFBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFYSjs7QUFlQTtFQUNJO3dCQUFBO0VBRUEsZUFBQTtFQUNBLGNBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBWkoiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC8vdGV4dC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5tZW51LWNhcmQgaW1nIHtcbiAgICB3aWR0aDogMTY1cHg7XG4gICAgLy9tYXJnaW4tdG9wOiA4JTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFjdW1pbiAhaW1wb3J0YW50O1xuICAgIC8vZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIC8vZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgLy9saW5lLWhlaWdodDogMzBweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC8vdGV4dC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5oZWFkZXItY2FyZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2Jhbm5lcl8xLnBuZycpIG5vLXJlcGVhdCA1MCUgNTAlO1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgLy8tLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL0lOSUNJT19PUEFDSURBRDg0LnBuZ1wiKSAvKjU1JSA1MCUvKi8xNDUlIDEwMCUgbm8tcmVwZWF0XG59XG5cbmlvbi1oZWFkZXIge1xuICAgIC8vcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIC8vcGFkZGluZzogNXB4IDhweCAwcHggNXB4O1xufVxuXG4uaGVhZGVyLWljb25zIHtcbiAgICAvKmZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogI2Y0NDMzNmI1OyAgICAqL1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm94LXNoYWRvdzogIzc5NTU0OCAwcHggMHB4IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "LhMw":
/*!*****************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.ts ***!
  \*****************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "p9Ql");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "JGGF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "tF4M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var src_app_components_products_category_products_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/products-category/products-category.component */ "Op0l");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/location.service */ "yHma");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "92l+");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");













let Tab1Page = class Tab1Page {
    constructor(location, stripe, modalCtrl, productService, categoryService, loadingController, alertController, locationAccuracy, geolocation, androidPermissions) {
        this.location = location;
        this.stripe = stripe;
        this.modalCtrl = modalCtrl;
        this.productService = productService;
        this.categoryService = categoryService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.locationAccuracy = locationAccuracy;
        this.geolocation = geolocation;
        this.androidPermissions = androidPermissions;
        this.serverProcess = false;
        this.currentUserLocationIntents = 0;
        this.selecciondelroble = "https://carniceriaelroble.com/app/img/categories/elroble.png";
        //@ViewChild(IonContent, { static: false }) content: IonContent;
        this.categories = [];
        this.categoriesElRoble = [];
        this.categoriesElRobleNacional = [];
        this.isLoading = true;
    }
    ionViewWillEnter() {
        this.serverProcess = true;
        if (this.location.getCurrentUserLocation() == "") {
            this.checkPermission();
        }
        else {
            this.getCategories(this.location.getCurrentUserLocation());
        }
    }
    getCategories(type) {
        this.location.setCurrentUserLocation(type);
        this.serverProcess = true;
        this.isLoading = true;
        this.categories = [];
        this.categoriesElRoble = [];
        this.categoriesElRobleNacional = [];
        if (type == "Delicias") {
            this.categoryService.getCategories()
                .subscribe(response => {
                this.categories.push(...response.data);
                //ElRobleCategory
                this.categoryService.getCategoriesElRoble()
                    .subscribe(response => {
                    this.categoriesElRoble.push(...response.data);
                });
                setTimeout(() => {
                    this.isLoading = false;
                    this.serverProcess = false;
                }, 500);
            });
            console.log(this.categories);
        }
        else {
            //ElRobleCategory
            this.categoryService.getCategoriesElRoble()
                .subscribe(response => {
                this.categoriesElRobleNacional.push(...response.data);
            });
            setTimeout(() => {
                this.isLoading = false;
                this.serverProcess = false;
            }, 500);
            console.log(this.categories);
        }
    }
    openProductsCategory(ID_Category) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(ID_Category);
            const modal = yield this.modalCtrl.create({
                component: src_app_components_products_category_products_category_component__WEBPACK_IMPORTED_MODULE_7__["ProductsCategoryComponent"],
                componentProps: { ID_Category: ID_Category },
                id: "ProductsCategoryComponent"
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
    checkPermission() {
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
            this.presentAlert("checkPermission Error", "No pudimos acceder a tu ubicación, te mostraremos los productos disponibles a nivel nacional, para ver todos los productos disponibles enciende tu gps");
            this.getCategories("Nacional");
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
                    this.presentAlert("locationAccPermission Error", "No pudimos acceder a tu ubicación, te mostraremos los productos disponibles a nivel nacional, para ver todos los productos disponibles enciende tu gps");
                    this.getCategories("Nacional");
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
            this.presentAlert("enableGPS Error", "No pudimos acceder a tu ubicación, te mostraremos los productos disponibles a nivel nacional, para ver todos los productos disponibles enciende tu gps");
            this.getCategories("Nacional");
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
                    this.presentAlert("Exito", "Tu ubicacion actual en Delicias te permite comprar de todos los productos disponibles para envios locales y nacionales.");
                    this.getCategories("Delicias");
                }
                else {
                    this.getCategories("Nacional");
                    this.presentAlert("Exito", "Tu ubicacion actual te permite comprar productos disponibles para envios nacionales");
                }
                this.serverProcess = false;
            });
        }).catch((error) => {
            this.presentAlert("currentLocPosition Error", error);
            this.presentAlert("currentLocPosition Error", "No pudimos acceder a tu ubicación, te mostraremos los productos disponibles a nivel nacional, para ver todos los productos disponibles enciende tu gps");
            this.getCategories("Nacional");
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Activar GPS',
                message: '¿Quieres ver el catalogo de productos de acuerdo a tu ubicación?',
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
};
Tab1Page.ctorParameters = () => [
    { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"] },
    { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_4__["Stripe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] },
    { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_8__["CategoriesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_11__["LocationAccuracy"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__["AndroidPermissions"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "OHVX":
/*!***************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".details-image {\n  max-width: 100%;\n  border: 0;\n}\n\n.round-section {\n  margin-top: -15%;\n  background-color: white;\n}\n\n.left-col {\n  background-color: white;\n  border-radius: 30px 0px 0px 0px;\n}\n\n.right-col {\n  background-color: white;\n  border-radius: 0px 30px 0px 0px;\n}\n\n.product-name {\n  padding-left: 10%;\n  padding-top: 4%;\n}\n\n.product-price {\n  padding-left: 10%;\n  padding-top: 5%;\n}\n\n.product-description {\n  background-color: white;\n  padding-top: 0%;\n  font-size: 14px;\n  padding: 3px 7% 0px 7%;\n}\n\n.product-qty-cart {\n  padding-top: 5% !important;\n}\n\nion-footer {\n  padding-left: 7%;\n  padding-right: 7%;\n  padding-bottom: 2%;\n}\n\n@media screen and (max-height: 975px) {\n  .details-image {\n    margin-left: 0;\n  }\n}\n\nion-header {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  position: fixed;\n  color: white;\n  background-color: red;\n  padding: 5px 8px 0px 5px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%);\n}\n\n.col-category-name {\n  padding-top: 10px;\n}\n\n.header-category-name {\n  font-family: Acumin !important;\n  font-size: 25px;\n  color: white;\n}\n\n.header-icons {\n  font-size: 30px;\n}\n\n.ion-text-left {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLCtCQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLCtCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSwwQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNJLGNBQUE7RUFBTjtBQUNGOztBQUdBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUdBLHFGQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUZKIiwiZmlsZSI6InByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8vIDE1NSU7XG4gICAgYm9yZGVyOiAwO1xuICAgIC8vbWFyZ2luLWxlZnQ6IC0zMCU7XG59XG5cbi5yb3VuZC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAtMTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubGVmdC1jb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMHB4IDBweCAwcHg7XG59XG5cbi5yaWdodC1jb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAzMHB4IDBweCAwcHg7XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctdG9wOiA0JTtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogM3B4IDclIDBweCA3JTtcbn1cblxuLnByb2R1Y3QtcXR5LWNhcnQge1xuICAgIHBhZGRpbmctdG9wOiA1JSAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDclO1xuICAgIHBhZGRpbmctcmlnaHQ6IDclO1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6OTc1cHgpIHtcbiAgICAuZGV0YWlscy1pbWFnZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwOyAvLyAtMzAlO1xuICAgIH1cbn1cblxuaW9uLWhlYWRlciB7XG4gICAgLy9wYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBwYWRkaW5nOiA1cHggOHB4IDBweCA1cHg7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDAuNjUpIDAlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLCAwLCAwLCAwLjY1KSAwJSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNjUpIDAlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xufVxuXG4uY29sLWNhdGVnb3J5LW5hbWUge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uaGVhZGVyLWNhdGVnb3J5LW5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiBBY3VtaW4gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyLWljb25zIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5pb24tdGV4dC1sZWZ0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59Il19 */");

/***/ }),

/***/ "OnnP":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_products_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./products.component.html */ "x3mF");
/* harmony import */ var _products_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component.scss */ "8Ejy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProductsComponent = class ProductsComponent {
    constructor() {
        this.products = [];
    }
    ngOnInit() {
        console.log(this.products);
    }
};
ProductsComponent.ctorParameters = () => [];
ProductsComponent.propDecorators = {
    products: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-products',
        template: _raw_loader_products_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_products_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductsComponent);



/***/ }),

/***/ "Op0l":
/*!*****************************************************************************!*\
  !*** ./src/app/components/products-category/products-category.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductsCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCategoryComponent", function() { return ProductsCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_products_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./products-category.component.html */ "QtTw");
/* harmony import */ var _products_category_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-category.component.scss */ "EWkd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-details/product-details.component */ "ZQA1");







let ProductsCategoryComponent = class ProductsCategoryComponent {
    constructor(modalCtrl, navController, productService) {
        this.modalCtrl = modalCtrl;
        this.navController = navController;
        this.productService = productService;
        this.products = [];
        this.isLoading = true;
        this.Photo1 = "https://eventserp.com/elroble/img/1.png";
        this.Photo2 = "https://eventserp.com/elroble/img/2.png";
        this.Photo3 = "https://eventserp.com/elroble/img/3.png";
        this.Photo4 = "https://eventserp.com/elroble/img/4.png";
        this.Photo5 = "https://eventserp.com/elroble/img/5.png";
        this.Photo6 = "https://eventserp.com/elroble/img/6.png";
        this.Photo7 = "https://eventserp.com/elroble/img/7.png";
        this.Photo8 = "https://eventserp.com/elroble/img/8.png";
        this.Photo9 = "https://eventserp.com/elroble/img/9.png";
    }
    ngOnInit() {
        this.getProductsByCategoryID(this.ID_Category);
        //this.getProducts();
    }
    getProductsByCategoryID(ID_Category) {
        this.isLoading = true;
        this.productService.getProductsByCategoryID(ID_Category)
            .subscribe(response => {
            this.products.push(...response.data);
            this.ID_CategoryName = this.products[0].ID_CategoryName;
            console.log(this.ID_CategoryName);
            this.isLoading = false;
        });
        console.log(this.products);
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }
    openProductDetails(Product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsComponent"],
                componentProps: { Product: Product },
                id: "ProductDetailsComponent"
            });
            modal.present();
            const data = yield modal.onWillDismiss();
            /*if(data.data != "null"){
              this.checkSession();
            }*/
        });
    }
    goToCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modalCtrl.dismiss(null, null, "ProductsCategoryComponent");
            this.navController.navigateRoot('/tabs/tab3');
        });
    }
};
ProductsCategoryComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] }
];
ProductsCategoryComponent.propDecorators = {
    ID_Category: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductsCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-products-category',
        template: _raw_loader_products_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_products_category_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductsCategoryComponent);



/***/ }),

/***/ "QtTw":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products-category/products-category.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content mode=\"ios\">\n\n    <ion-header>\n        <ion-grid class=\"grid-container\">\n            <ion-row justify-content-around>\n                <ion-col size=\"3\" class=\"ion-text-left\" (click)=\"closeModal()\">\n                    <ion-icon color=\"light\" name=\"chevron-back-outline\" class=\"header-icons\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"6\" class=\"ion-text-center col-category-name\">\n                    <label class=\"header-category-name\">{{ID_CategoryName}}</label>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-right\" (click)=\"goToCart()\">\n                    <ion-icon color=\"light\" name=\"cart-outline\" class=\"header-icons\"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-header>\n\n\n    <ion-grid class=\"grid-container\" style=\"margin-top: 15%;\">\n    </ion-grid>\n\n\n\n\n\n\n    <!--<app-products [products]=\"products\"></app-products>-->\n\n\n\n\n    <ion-grid class=\"grid-container\" *ngIf=\"isLoading == true\">\n        <ion-row>\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n\n        </ion-row>\n    </ion-grid>\n\n\n\n\n    <ion-grid class=\"grid-container\" *ngIf=\"isLoading == false\">\n        <ion-row>\n            <ion-col size=\"6\" *ngFor=\"let product of products\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\" (click)=\"openProductDetails(product)\">\n                    <img [src]=\"product.Image | imageSanitizer\" />\n                    <div class=\"card-title\">\n\n                        <ion-grid class=\"grid-container\">\n                            <ion-row justify-content-around>\n                                <ion-col size=\"8\" class=\"ion-text-left product-name ion-text-nowrap\">\n                                    {{product.Name}}\n                                </ion-col>\n                                <ion-col size=\"4\" class=\"ion-text-right product-price\">\n                                    $ {{product.Price}}\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n\n                    </div>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n\n</ion-content>");

/***/ }),

/***/ "S3Px":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



const URL = 'https://carniceriaelroble.com/app/controllers';
let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
    }
    getProducts() {
        return this.http.get(`${URL}/service_products.php?action=listAll`);
    }
    getProductsByCategoryID(ID_Category) {
        return this.http.get(`${URL}/service_products.php?action=listAllByCategoryID&ID_Category=${ID_Category}`);
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ "ZQA1":
/*!*************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-details.component.html */ "6gHt");
/* harmony import */ var _product_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details.component.scss */ "OHVX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/interfaces */ "IeiB");
/* harmony import */ var src_app_services_local_toasts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/local-toasts.service */ "qT/k");
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/orders.service */ "MOE4");








let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(modalCtrl, navController, ordersService, localToastsController) {
        this.modalCtrl = modalCtrl;
        this.navController = navController;
        this.ordersService = ordersService;
        this.localToastsController = localToastsController;
        this.orderProductsArray = [];
        this.Photo = "https://i1.wp.com/prime-13.com/wp-content/uploads/2019/10/36848073_s.jpg";
        this.productQty = 1;
        this.productTotal = 0;
    }
    ionViewWillEnter() {
        if (this.ordersService.getLocalOrder()) {
            this.orderProductsArray = this.ordersService.getLocalOrder();
            console.log(this.orderProductsArray);
        }
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }
    add() {
        this.productQty += 1;
    }
    remove() {
        if (this.productQty > 1) {
            this.productQty -= 1;
        }
    }
    addNewProduct() {
        //console.log(this.name,this.empoloyeeID);
        let newProduct = new src_app_interfaces_interfaces__WEBPACK_IMPORTED_MODULE_5__["LocalOrder"]();
        newProduct.ID_Product = this.Product.ID_Product;
        newProduct.Name = this.Product.Name;
        newProduct.Photo = this.Product.Image;
        newProduct.Unit = this.Product.Unit;
        newProduct.Price = Number(this.Product.Price);
        newProduct.Qty = Number(this.productQty);
        newProduct.Total = Number(this.productQty) * Number(this.Product.Price);
        this.orderProductsArray.push(newProduct);
        this.ordersService.setLocalOrder(this.orderProductsArray);
        this.localToastsController.presentToast('El producto ' + this.Product.Name + ' fue agregado al carrito');
    }
    goToCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modalCtrl.dismiss(null, null, "ProductDetailsComponent");
            this.modalCtrl.dismiss(null, null, "ProductsCategoryComponent");
            this.navController.navigateRoot('/tabs/tab3');
        });
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_7__["OrdersService"] },
    { type: src_app_services_local_toasts_service__WEBPACK_IMPORTED_MODULE_6__["LocalToastsService"] }
];
ProductDetailsComponent.propDecorators = {
    Product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-details',
        template: _raw_loader_product_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductDetailsComponent);



/***/ }),

/***/ "iWmG":
/*!***********************************************************!*\
  !*** ./src/app/components/product/product.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-title {\n  font-size: 0.83rem !important;\n  font-family: \"GilroyExtraBold\";\n}\n\n.card-date {\n  font-size: 0.63rem !important;\n  line-height: 11pt;\n  font-weight: bold;\n  font-style: italic;\n  margin-top: -4px;\n}\n\n.card-address {\n  font-size: 0.75rem !important;\n  line-height: 9pt;\n}\n\n.card-status-recibida {\n  font-size: 0.8rem !important;\n  color: #5c90bd !important;\n  position: absolute;\n  bottom: 0px !important;\n  right: 0px;\n  background-color: #dbe9ff;\n  border-radius: 9px;\n  padding: 0px 6px;\n  width: 85px;\n  text-align: center;\n}\n\n.card-status-proceso {\n  font-size: 0.8rem !important;\n  color: #bd9b5c !important;\n  position: absolute;\n  bottom: 0px !important;\n  right: 0px;\n  background-color: #fff1db;\n  border-radius: 9px;\n  padding: 0px 6px;\n  width: 85px;\n  text-align: center;\n}\n\n.card-status-demora {\n  font-size: 0.8rem !important;\n  color: #bd5c5c !important;\n  position: absolute;\n  bottom: 0px !important;\n  right: 0px;\n  background-color: #ffdbde;\n  border-radius: 9px;\n  padding: 0px 6px;\n  width: 85px;\n  text-align: center;\n}\n\n.card-status-finalizada {\n  font-size: 0.8rem !important;\n  color: #5cbd68 !important;\n  position: absolute;\n  bottom: 0px !important;\n  right: 0px;\n  background-color: #dcffdb;\n  border-radius: 9px;\n  padding: 0px 6px;\n  width: 85px;\n  text-align: center;\n}\n\n.card-status-cancelada {\n  font-size: 0.8rem !important;\n  color: #868686 !important;\n  position: absolute;\n  bottom: 0px !important;\n  right: 0px;\n  background-color: #adabab87;\n  border-radius: 9px;\n  padding: 0px 6px;\n  width: 85px;\n  text-align: center;\n}\n\nion-avatar img {\n  border-radius: 5%;\n}\n\n.image-work {\n  border-radius: 5%;\n  width: 80px;\n  height: 80px;\n  /* Full height */\n  /* Imagen centrada y colocada de forma elegante */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.aligname {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.aligname {\n  display: inline-block;\n  vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUVBLGlEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBREoiLCJmaWxlIjoicHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IC44M3JlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95RXh0cmFCb2xkJztcbn1cblxuLmNhcmQtZGF0ZSB7XG4gICAgZm9udC1zaXplOiAwLjYzcmVtICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDExcHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG59XG5cbi5jYXJkLWFkZHJlc3Mge1xuICAgIGZvbnQtc2l6ZTogLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDlwdDtcbn1cblxuLmNhcmQtc3RhdHVzLXJlY2liaWRhIHtcbiAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNWM5MGJkICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlOWZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQtc3RhdHVzLXByb2Nlc28ge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNiZDliNWMgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICByaWdodDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYxZGI7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIHBhZGRpbmc6IDBweCA2cHg7XG4gICAgd2lkdGg6IDg1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC1zdGF0dXMtZGVtb3JhIHtcbiAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjYmQ1YzVjICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkYmRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQtc3RhdHVzLWZpbmFsaXphZGEge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM1Y2JkNjggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICByaWdodDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2ZmZGI7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIHBhZGRpbmc6IDBweCA2cHg7XG4gICAgd2lkdGg6IDg1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC1zdGF0dXMtY2FuY2VsYWRhIHtcbiAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjODY4Njg2ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRhYmFiODc7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIHBhZGRpbmc6IDBweCA2cHg7XG4gICAgd2lkdGg6IDg1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYXZhdGFyIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG59XG5cbi5pbWFnZS13b3JrIHtcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgLy8gaGVpZ2h0OiAxMDAlOyBcbiAgICAvKiBJbWFnZW4gY2VudHJhZGEgeSBjb2xvY2FkYSBkZSBmb3JtYSBlbGVnYW50ZSAqL1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5hbGlnbmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5hbGlnbmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59Il19 */");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start/start.component */ "+PL+");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "OnnP");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "2SFI");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _products_category_products_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-category/products-category.component */ "Op0l");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-details/product-details.component */ "ZQA1");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-details/order-details.component */ "pWPZ");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "W3Zi");
/* harmony import */ var _checkout_order_completed_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checkout/order-completed.component */ "5jn2");














let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _checkout_order_completed_component__WEBPACK_IMPORTED_MODULE_13__["OrderCompletedComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
            _products_category_products_category_component__WEBPACK_IMPORTED_MODULE_8__["ProductsCategoryComponent"],
            _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"],
            _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_11__["OrderDetailsComponent"]
        ],
        declarations: [
            _checkout_order_completed_component__WEBPACK_IMPORTED_MODULE_13__["OrderCompletedComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
            _products_category_products_category_component__WEBPACK_IMPORTED_MODULE_8__["ProductsCategoryComponent"],
            _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"],
            _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_11__["OrderDetailsComponent"]
        ],
        exports: [
            _checkout_order_completed_component__WEBPACK_IMPORTED_MODULE_13__["OrderCompletedComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
            _products_category_products_category_component__WEBPACK_IMPORTED_MODULE_8__["ProductsCategoryComponent"],
            _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"],
            _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_11__["OrderDetailsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "lgGG":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card style=\"box-shadow: none !important;\">\n    <ion-list class=\"ion-no-padding\">\n        <ion-item class=\"ion-no-padding\">\n            <ion-col size=\"4\" style=\"padding-bottom: 1px;\">\n                <!-- <img class=\"border-radius image-work\" [style.background-image]=\" service.Photo | domSanitizer\"> -->\n            </ion-col>\n            <ion-col size=\"8\">\n                <ion-label style=\"height:75px; margin-left: -15px;\">\n                    <div class=\"align\">\n                        <p class=\"card-title\"> {{product.Name}}</p>\n                    </div>\n                    <!-- <p class=\"card-date ion-text-wrap ion-text-capitalize\">{{ service.Day | date:'fullDate'}} {{service.RequestTime}}</p>\n                    <p class=\"card-address ion-text-wrap ion-text-capitalize\">{{ service.Address }} #{{ service.AddressNumber }}</p>\n                    <p class=\"card-address ion-text-wrap ion-text-capitalize\">{{ service.AddressSuburb }}</p>\n\n                    <p *ngIf=\"service.Status == 'Recibida'\" class=\"card-status-recibida\">{{service.Status}}</p>\n                    <p *ngIf=\"service.Status == 'Proceso'\" class=\"card-status-proceso\">{{service.Status}}</p>\n                    <p *ngIf=\"service.Status == 'Demora'\" class=\"card-status-demora\">{{service.Status}}</p>\n                    <p *ngIf=\"service.Status == 'Finalizada'\" class=\"card-status-finalizada\">{{service.Status}}</p>\n                    <p *ngIf=\"service.Status == 'Cancelada'\" class=\"card-status-cancelada\">{{service.Status}}</p>-->\n                </ion-label>\n            </ion-col>\n        </ion-item>\n    </ion-list>\n</ion-card>");

/***/ }),

/***/ "mV/h":
/*!***************************************************!*\
  !*** ./src/app/pages/tab1/tab1-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "LhMw");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "p9Ql":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"serverProcess == true\" class=\"ion-spinner-section\">\n    <ion-spinner color=\"primary\" name=\"lines\"></ion-spinner>\n</section>\n\n\n\n<ion-content color=\"light\" mode=\"ios\">\n    <ion-grid class=\"grid-container\" style=\"margin-top: 5px;\" (click)=\"stripe()\">\n        <ion-row>\n            <ion-col>\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card header-card\">\n                    <img src=\"assets/img/logo.png\" style=\"width: 180px; margin-bottom: 6px; margin-top: 8%;\" />\n                </ion-card>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-grid class=\"grid-container\" *ngIf=\"isLoading == false\">\n        <ion-row>\n            <ion-col size=\"6\" *ngFor=\"let category of categories\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\" (click)=\"openProductsCategory(category.ID_Category)\">\n                    <img [src]=\" category.Image | imageSanitizer\">\n                    <div class=\"card-title\">{{category.Name}}</div>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n    <ion-grid class=\"grid-container\" *ngIf=\"isLoading == false\">\n        <ion-row>\n            <ion-col size=\"12\" *ngFor=\"let category of categoriesElRoble\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\" (click)=\"openProductsCategory(category.ID_Category)\">\n                    <img [src]=\" selecciondelroble | imageSanitizer\">\n                    <div class=\"card-title\">{{category.Name}}</div>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n    <ion-grid class=\"grid-container\" *ngIf=\"isLoading == false\">\n        <ion-row>\n            <ion-col size=\"12\" *ngFor=\"let category of categoriesElRobleNacional\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center\" (click)=\"openProductsCategory(category.ID_Category)\">\n                    <img [src]=\" category.Image | imageSanitizer\">\n                    <!--<div class=\"card-title\">{{category.Name}}</div>-->\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n\n    <!--<app-product *ngFor=\"let product of products\" [product]=\"product\"></app-product>-->\n\n    <!--<app-products [products]=\"products\"></app-products>-->\n\n\n\n\n    <ion-grid class=\"grid-container\" *ngIf=\"isLoading == true\">\n        <ion-row>\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-card class=\"ion-no-padding ion-no-margin ion-text-center menu-card\">\n                    <ion-list-header style=\"padding: 10px;\">\n                        <ion-skeleton-text animated style=\"\n                        margin: 5%;\n                        width: 90%;\n                        height: 110px;\"></ion-skeleton-text>\n                    </ion-list-header>\n                    <ion-label>\n                        <h3 style=\"\n                        margin-top: -5%;\n                        margin-left: 10%;\n                        margin-bottom: 10%;\">\n                            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                        </h3>\n                    </ion-label>\n                </ion-card>\n            </ion-col>\n\n\n        </ion-row>\n    </ion-grid>\n\n\n\n</ion-content>");

/***/ }),

/***/ "uMfO":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.module.ts ***!
  \*******************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "LhMw");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "HGan");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "mV/h");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "iTUp");










let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "x3mF":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-product *ngFor=\"let product of products\" [product]=\"product\"></app-product>");

/***/ }),

/***/ "ycII":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



const URL = 'https://carniceriaelroble.com/app/controllers';
let CategoriesService = class CategoriesService {
    constructor(http) {
        this.http = http;
    }
    getCategories() {
        return this.http.get(`${URL}/service_categories.php?action=listAll`);
    }
    getCategoriesElRoble() {
        return this.http.get(`${URL}/service_categories.php?action=listAllElRoble`);
    }
};
CategoriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoriesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriesService);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map