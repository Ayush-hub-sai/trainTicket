/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2033:
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* reexport safe */ _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__.AppServerModule),
/* harmony export */   renderApplication: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_1__.renderApplication),
/* harmony export */   renderModule: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_1__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_1__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module */ 1463);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-server */ 7014);


  // EXPORTS added by @angular-devkit/build-angular
  
  

/***/ }),

/***/ 1838:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 8804);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 3783);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/search/search.component */ 6776);
/* harmony import */ var _pages_booking_booking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/booking/booking.component */ 5547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9936);






const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'search/:fromStation/:toStation/:date',
  component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent
}, {
  path: 'booking',
  component: _pages_booking_booking_component__WEBPACK_IMPORTED_MODULE_2__.BookingComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 6846:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8804);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ 2856);
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/header/header.component */ 886);




class AppComponent {
  constructor() {
    this.title = 'trainTicket';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 6,
    vars: 1,
    consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "ball-fussion", 3, "fullScreen"], [2, "color", "white"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ngx-spinner", 0)(3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Loading... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "router-outlet");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", false);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerComponent, _common_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 41:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 1081);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 1838);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6846);
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/header/header.component */ 886);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ 3783);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/search/search.component */ 6776);
/* harmony import */ var _pages_booking_booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/booking/booking.component */ 5547);
/* harmony import */ var _common_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/login/login.component */ 5473);
/* harmony import */ var _common_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/register/register.component */ 9355);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 6448);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8810);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 15);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 6449);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7378);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 2856);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 9936);




















function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http);
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient]
      }
    }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      closeButton: true
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _common_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _pages_search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent, _pages_booking_booking_component__WEBPACK_IMPORTED_MODULE_5__.BookingComponent, _common_login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent, _common_register_register_component__WEBPACK_IMPORTED_MODULE_7__.RegisterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule]
  });
})();

/***/ }),

/***/ 1463:
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* binding */ AppServerModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-server */ 7014);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 41);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9936);




class AppServerModule {
  static #_ = this.ɵfac = function AppServerModule_Factory(t) {
    return new (t || AppServerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppServerModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppServerModule, {
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
})();

/***/ }),

/***/ 886:
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login.component */ 5473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9936);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 337);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 15);
/* harmony import */ var src_app_services_railway_railway_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/railway/railway.service */ 3294);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8810);







function HeaderComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 9)(2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_ng_container_16_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.loginModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function HeaderComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 9)(2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 9)(5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_ng_container_17_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.LogOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.loginObj.firstName);
  }
}
// import { login, loginResponse } from 'src/app/interface/authInterface';
// import { LoginResponse } from 'src/app/interface/authInterface';
class HeaderComponent {
  constructor(modalService, _translateService, _railwayService) {
    this.modalService = modalService;
    this._translateService = _translateService;
    this._railwayService = _railwayService;
    this.switchLanguage = 'en';
    _translateService.addLangs(['en', 'hi']);
    _translateService.setDefaultLang('en');
    this._railwayService.myBehaviorSubject.subscribe(res => {
      _translateService.use(res);
    });
    const login = localStorage.getItem("loginUser");
    if (login != null) {
      this.loginObj = JSON.parse(login);
    }
  }
  changeLanguage(event) {
    const selectedLanguage = event.target.value;
    this._railwayService.myBehaviorSubject.next(selectedLanguage);
  }
  loginModal() {
    const modalRef = this.modalService.open(_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, {
      size: 'md',
      centered: true
    });
    modalRef.componentInstance.loginData.subscribe(res => {
      if (res) {
        this.loginObj = res;
      }
    });
  }
  LogOut() {
    localStorage.removeItem("loginUser");
    this.loginObj = undefined;
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_railway_railway_service__WEBPACK_IMPORTED_MODULE_1__.RailwayService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 24,
    vars: 2,
    consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "nav-yellow", "border-bottom", "border-top", "p-0"], [1, "container"], ["href", "#", 1, "navbar-brand", "fs-4", "fw-bold"], [1, "fa", "fa-cart-shopping", "fs-4", 2, "color", "#f54242"], [1, "text-white"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "mb-2", "mb-lg-0", "text-center"], [1, "nav-item"], ["href", "#", 1, "nav-link", "fw-semibold", "text-white", "me-1"], [4, "ngIf"], [1, "form-control", 3, "change"], ["value", "en"], ["value", "hi"], [1, "nav-link", "fw-semibold", "text-white", "me-1", 3, "click"], [1, "nav-link", "fw-semibold", "text-white", "me-1"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Railway ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 9)(14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Trains");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HeaderComponent_ng_container_16_Template, 4, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, HeaderComponent_ng_container_17_Template, 7, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li")(19, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HeaderComponent_Template_select_change_19_listener($event) {
          return ctx.changeLanguage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Hindi");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loginObj);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginObj);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"]],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5473:
/*!*************************************************!*\
  !*** ./src/app/common/login/login.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9936);
/* harmony import */ var src_app_interface_authInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interface/authInterface */ 8107);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../register/register.component */ 9355);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 337);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9972);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8810);







class LoginComponent {
  constructor(activeModal, _authService, modalService) {
    this.activeModal = activeModal;
    this._authService = _authService;
    this.modalService = modalService;
    this.loginObj = new src_app_interface_authInterface__WEBPACK_IMPORTED_MODULE_0__.login();
    this.register = false;
    this.loginData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  login() {
    if (this.register) {
      this.activeModal.close();
    } else {
      this._authService.login(this.loginObj).subscribe(res => {
        this.loginObj = res.data;
        localStorage.setItem("loginUser", JSON.stringify(this.loginObj));
        this.loginData.emit(this.loginObj);
        this.activeModal.close();
      });
    }
  }
  registerModal() {
    this.register = true;
    this.login();
    const modalRef = this.modalService.open(_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent, {
      size: 'md',
      centered: true
    });
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    outputs: {
      loginData: "loginData"
    },
    decls: 24,
    vars: 2,
    consts: [[1, "modal-header"], [1, "modal-title"], [1, "pull-right"], ["type", "button ", 1, "pull-right", "close", "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col"], ["for", "phone"], ["type", "text", "name", "phone", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], [1, "fw-semibold", "me-1", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_5_listener() {
          return ctx.activeModal.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.loginObj.phone = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6)(15, "div", 7)(16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.loginObj.password = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12)(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_20_listener() {
          return ctx.registerModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.loginObj.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.loginObj.password);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9355:
/*!*******************************************************!*\
  !*** ./src/app/common/register/register.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var src_app_interface_authInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interface/authInterface */ 8107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9936);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 337);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9972);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8810);





class RegisterComponent {
  constructor(activeModal, _authService) {
    this.activeModal = activeModal;
    this._authService = _authService;
    this.registerObj = new src_app_interface_authInterface__WEBPACK_IMPORTED_MODULE_0__.Register();
  }
  ngOnInit() {}
  register() {
    this._authService.register(this.registerObj).subscribe(res => {
      this.activeModal.close();
    });
  }
  static #_ = this.ɵfac = function RegisterComponent_Factory(t) {
    return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RegisterComponent,
    selectors: [["app-register"]],
    decls: 35,
    vars: 5,
    consts: [[1, "modal-header"], [1, "modal-title"], [1, "pull-right"], ["type", "button ", 1, "pull-right", "close", "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-6"], ["for", "fname"], ["type", "text", "name", "fname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lname"], ["type", "text", "name", "lname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "mobile"], ["type", "text", "name", "mobile", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
    template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_5_listener() {
          return ctx.activeModal.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.registerObj.firstName = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7)(15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_17_listener($event) {
          return ctx.registerObj.lastName = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6)(19, "div", 7)(20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_22_listener($event) {
          return ctx.registerObj.email = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7)(24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_26_listener($event) {
          return ctx.registerObj.phone = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 6)(28, "div", 7)(29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_31_listener($event) {
          return ctx.registerObj.password = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 18)(33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_33_listener() {
          return ctx.register();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.registerObj.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.registerObj.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.registerObj.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.registerObj.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.registerObj.password);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1148:
/*!************************************!*\
  !*** ./src/app/constantApi/api.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONSTANT: () => (/* binding */ CONSTANT)
/* harmony export */ });
const CONSTANT = {
  ENDPOINTS: {
    GET_ALL_STATIONS: "GetAllStations",
    ADD_BULK_TRAIN_STATIONS: "AddBulkTrainStations",
    DELETE_STATION_BY_STATION_ID: "DeleteStationByStationId",
    LOGIN: "Login",
    GET_ALL_PASSENGERS: "GetAllPassengers",
    ADD_UPDATE_PASSENGERS: "AddUpdatePassengers",
    DELETE_PASSENGER_BY_PASSENGER_ID: "DeletePassengerByPassengerId",
    GET_ALL_TRAINS: "GetAllTrains",
    GET_TRAINS_BETWEEN_STATIONS: "GetTrainsBetweenStations",
    ADD_NEW_TRAIN: "AddNewTrain",
    DELETE_TRAIN_BY_TRAIN_ID: "DeleteTrainByTrainId",
    GET_TRAIN_BOOKINGS: "GetTrainBookings",
    GET_ALL_TRAINS_BOOKINGS_PASSENGER_LIST: "GetAllTrainsBookingsPassengerList",
    GET_TRAIN_BOOKING_PASSENGER_LIST_BY_TRAIN_ID: "GetTrainBookingPassengerListByTrainId",
    GET_BOOKING_BY_PASSENGER_ID: "GetBookingByPassengerId",
    BOOK_TRAIN: "BookTrain",
    CANCEL_BOOKING_BY_BOOKING_ID: "CancelBookingByBookingId"
  }
};

/***/ }),

/***/ 8107:
/*!********************************************!*\
  !*** ./src/app/interface/authInterface.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Register: () => (/* binding */ Register),
/* harmony export */   login: () => (/* binding */ login)
/* harmony export */ });
class Register {
  constructor() {
    this.passengerID = 0;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.password = '';
  }
}
class login {
  constructor() {
    this.phone = '';
    this.password = '';
  }
}
// export interface loginResponse {
//     message: string
//     result: boolean
//     data: Data
// }
// export interface Data {
//     passengerID: number
//     firstName: string
//     lastName: string
//     email: string
//     phone: string
//     password: string
// }

/***/ }),

/***/ 4055:
/*!************************************************!*\
  !*** ./src/app/interface/railywayInterface.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookTicket: () => (/* binding */ BookTicket),
/* harmony export */   TrainAppBookingPassenger: () => (/* binding */ TrainAppBookingPassenger)
/* harmony export */ });
class BookTicket {
  constructor() {
    this.bookingId = 0;
    this.trainId = 0;
    this.passengerId = 0;
    this.travelDate = '';
    this.bookingDate = new Date();
    this.totalSeats = 0;
    this.TrainAppBookingPassengers = [];
  }
}
class TrainAppBookingPassenger {
  constructor() {
    this.bookingPassengerId = 0;
    this.bookingId = 0;
    this.passengerName = '';
    this.seatNo = 0;
    this.age = 0;
  }
}

/***/ }),

/***/ 5547:
/*!****************************************************!*\
  !*** ./src/app/pages/booking/booking.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingComponent: () => (/* binding */ BookingComponent)
/* harmony export */ });
/* harmony import */ var src_app_interface_railywayInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interface/railywayInterface */ 4055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9936);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 337);
/* harmony import */ var src_app_services_railway_railway_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/railway/railway.service */ 3294);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8810);






function BookingComponent_table_35_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td")(8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookingComponent_table_35_tr_12_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const i_r4 = restoredCtx.index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.remove(i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](passenger_r3.passengerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](passenger_r3.age);
  }
}
function BookingComponent_table_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 21)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Sr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Passenger Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BookingComponent_table_35_tr_12_Template, 10, 3, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.passengerList);
  }
}
function BookingComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No Records Found...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class BookingComponent {
  ngOnInit() {
    const login = localStorage.getItem("loginUser");
    if (login != null) {
      this.loginObj = JSON.parse(login);
    }
  }
  constructor(activeModal, _railwayService) {
    this.activeModal = activeModal;
    this._railwayService = _railwayService;
    this.ticketBook = new src_app_interface_railywayInterface__WEBPACK_IMPORTED_MODULE_0__.BookTicket();
    this.bookPassenger = new src_app_interface_railywayInterface__WEBPACK_IMPORTED_MODULE_0__.TrainAppBookingPassenger();
    this.passengerList = [];
  }
  AddPassenger() {
    const passenger = {
      ...this.bookPassenger
    };
    this.passengerList.push(passenger);
  }
  BookTicket() {
    let ticket = this.ticketBook;
    ticket.passengerId = this.loginObj.passengerID;
    ticket.totalSeats = this.passengerList.length;
    ticket.trainId = this.trainData.trainId;
    ticket.TrainAppBookingPassengers = this.passengerList;
    ticket.travelDate = this.trainData.departureDate;
    this._railwayService.bookTicket(ticket).subscribe(res => {
      this.activeModal.dismiss();
    });
  }
  remove(index) {
    this.passengerList.splice(index, 1);
  }
  static #_ = this.ɵfac = function BookingComponent_Factory(t) {
    return new (t || BookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_railway_railway_service__WEBPACK_IMPORTED_MODULE_1__.RailwayService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BookingComponent,
    selectors: [["app-booking"]],
    decls: 43,
    vars: 6,
    consts: [[1, "modal-header"], [1, "modal-title"], [1, "pull-right"], ["type", "button ", 1, "pull-right", "close", "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-6"], [1, "col-6", "text-end"], [1, "col-5"], ["for", "passengerName"], ["type", "text", "name", "passengerName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "age"], ["type", "text", "name", "age", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-2", "text-end"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "table table-bordered", 4, "ngIf"], [1, "container"], ["class", "text-center", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "text-center"]],
    template: function BookingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Book Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookingComponent_Template_button_click_5_listener() {
          return ctx.activeModal.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Train: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span")(13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span")(19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6)(22, "div", 9)(23, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Passenger Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_input_ngModelChange_25_listener($event) {
          return ctx.bookPassenger.passengerName = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 9)(27, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_input_ngModelChange_29_listener($event) {
          return ctx.bookPassenger.age = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 14)(31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookingComponent_Template_button_click_31_listener() {
          return ctx.AddPassenger();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, BookingComponent_table_35_Template, 13, 1, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "section")(38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, BookingComponent_div_39_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 19)(41, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookingComponent_Template_button_click_41_listener() {
          return ctx.BookTicket();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Book Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.trainData.trainName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("u");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.bookPassenger.passengerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.bookPassenger.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passengerList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passengerList.length == 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3783:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9936);
/* harmony import */ var src_app_services_railway_railway_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/railway/railway.service */ 3294);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 15);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 2856);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 868);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8810);








function HomeComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const station_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", station_r2.stationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", station_r2.stationName, " ");
  }
}
function HomeComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const station_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", station_r3.stationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", station_r3.stationName, " ");
  }
}
class HomeComponent {
  constructor(_railwayservice, router, _translateService, spinner, toastr) {
    this._railwayservice = _railwayservice;
    this.router = router;
    this._translateService = _translateService;
    this.spinner = spinner;
    this.toastr = toastr;
    this.stationList = [];
    this.fromStationId = 'From Station'; // Set the default placeholder
    this.toStationId = 'To Station';
    this._railwayservice.myBehaviorSubject.subscribe(res => {
      _translateService.use(res);
    });
  }
  ngOnInit() {
    this.getAllStations();
  }
  getAllStations() {
    this._railwayservice.getAllStations().subscribe(res => {
      this.stationList = res.data;
    });
  }
  search() {
    this.router.navigate(['search', this.fromStationId, this.toStationId, this.traveldate]);
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_railway_railway_service__WEBPACK_IMPORTED_MODULE_0__.RailwayService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 36,
    vars: 8,
    consts: [[1, "container"], [1, "row", "d-flex", "justify-content-center", "align-items-center"], [1, "col-lg-12", "col-xl-11"], [1, "text-black"], [1, ""], [1, "text-center", "h1", "fw-bold", "mb-2", "mx-1", "mx-md-4", "mt-1"], [1, "row", "justify-content-center"], [1, "col-md-10", "col-lg-6", "col-xl-5", "order-2", "order-lg-1"], [1, "mx-1", "mx-md-4", "pt-5"], [1, "row"], [1, "col-6"], ["for", "fromStation", 1, "form-label"], ["id", "fromStation", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "From Station"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "toStation", 1, "form-label"], ["id", "toStation", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "To Station"], [1, "row", "pt-3"], ["for", "form3Example4c", 1, "form-label"], ["type", "date", "id", "form3Example4c", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-center", "mt-4", "mx-4", "mb-3", "mb-lg-4"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "col-md-10", "pt-3", "col-lg-6", "col-xl-7", "d-flex", "align-items-center", "order-1", "order-lg-2"], ["src", "assets\\images\\banner-2.png", "alt", "Sample image", 1, "img-fluid"], [3, "value"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "From Station");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_select_ngModelChange_15_listener($event) {
          return ctx.fromStationId = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "From Station");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HomeComponent_option_18_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10)(20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "To Station");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_select_ngModelChange_22_listener($event) {
          return ctx.toStationId = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Select To Station");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HomeComponent_option_25_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18)(27, "div", 10)(28, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Date Of Travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_30_listener($event) {
          return ctx.traveldate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_32_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, "Book_Ticket"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.fromStationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stationList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toStationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stationList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.traveldate);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6776:
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../booking/booking.component */ 5547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9936);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 337);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 8804);
/* harmony import */ var src_app_services_railway_railway_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/railway/railway.service */ 3294);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8810);







function SearchComponent_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const station_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", station_r3.stationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", station_r3.stationName, " ");
  }
}
function SearchComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const station_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", station_r4.stationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", station_r4.stationName, " ");
  }
}
function SearchComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 19)(5, "div", 20)(6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " 15:05 hrs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_div_30_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const train_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.bookNow(train_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Book Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Check Availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const train_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", train_r5.trainName, " (", train_r5.trainNo, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", train_r5.departureTime, " | ", train_r5.departureStationName, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 7, train_r5.departureDate, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", train_r5.arrivalTime, " | ", train_r5.arrivalStationName, " ");
  }
}
class SearchComponent {
  constructor(modalService, activateUrl, _railwayService) {
    this.modalService = modalService;
    this.activateUrl = activateUrl;
    this._railwayService = _railwayService;
    this.trainList = [];
    this.stationList = [];
    this.activateUrl?.params?.subscribe(res => {
      this.fromStationId = res?.fromStation;
      this.toStationId = res?.toStation;
      this.searchDate = res?.date;
    });
  }
  ngOnInit() {
    this.getAllStations();
    this.getTrainsBetweenStation();
  }
  getAllStations() {
    this._railwayService.getAllStations().subscribe(res => {
      this.stationList = res.data;
    });
  }
  getTrainsBetweenStation() {
    this._railwayService.getAllTrainBetweenStations(this.fromStationId, this.toStationId, this.searchDate).subscribe(res => {
      this.trainList = res.data;
    });
  }
  search() {
    this.getTrainsBetweenStation();
  }
  getFromStation() {
    return this.trainList[0]?.departureStationName;
  }
  getToStation() {
    return this.trainList[0]?.arrivalStationName;
  }
  bookNow(train) {
    const modalRef = this.modalService.open(_booking_booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent, {
      size: 'lg',
      centered: true
    });
    modalRef.componentInstance.trainData = train;
  }
  static #_ = this.ɵfac = function SearchComponent_Factory(t) {
    return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_railway_railway_service__WEBPACK_IMPORTED_MODULE_1__.RailwayService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SearchComponent,
    selectors: [["app-search"]],
    decls: 31,
    vars: 13,
    consts: [[1, "container-fluid", "bg-secondary", "p-4"], [1, "row"], [1, "col-4", "px-4"], ["id", "fromStation", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "From Station"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "toStation", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "To Station"], [1, "col-2", "px-2"], ["type", "date", "id", "form3Example4c", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-2", "text-end"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "container-fluid", "pt-2"], [2, "border", "1px solid", "padding", "5px", "margin-top", "5px"], ["class", "col-6 mt-2", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-6", "mt-2"], [1, "card"], [1, "card-header", "bg-secondary", "text-white"], [1, "card-body"], [1, "row", "pb-2"], [1, "col-5"], [1, "col-2"], [1, "col-5", "text-end"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "btn", "btn-secondary", "btn-sm"]],
    template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_select_ngModelChange_3_listener($event) {
          return ctx.fromStationId = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "From Station");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SearchComponent_option_6_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2)(8, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_select_ngModelChange_8_listener($event) {
          return ctx.toStationId = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Select To Station");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SearchComponent_option_11_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.searchDate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_15_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Modify Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12)(18, "p", 13)(19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Result Found For ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, SearchComponent_div_30_Template, 18, 10, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.fromStationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.stationList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.toStationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.stationList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.trainList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getFromStation());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getToStation());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](28, 10, ctx.searchDate, "dd-MM-yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.trainList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9972:
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var src_app_constantApi_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constantApi/api */ 1148);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 6316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9936);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6448);




class AuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    this.apiEndPoint = src_app_constantApi_api__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.ENDPOINTS;
  }
  login(obj) {
    return this.http.post(`${this.apiUrl}${this.apiEndPoint.LOGIN}`, obj);
  }
  register(obj) {
    return this.http.post(`${this.apiUrl}${this.apiEndPoint.ADD_UPDATE_PASSENGERS}`, obj);
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3294:
/*!*****************************************************!*\
  !*** ./src/app/services/railway/railway.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RailwayService: () => (/* binding */ RailwayService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6448);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5028);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_constantApi_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constantApi/api */ 1148);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 6316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 9936);






class RailwayService {
  constructor(http) {
    this.http = http;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    this.apiEndPoint = src_app_constantApi_api__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.ENDPOINTS;
    this.myBehaviorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('en');
  }
  getAllStations() {
    return this.http.get(`${this.apiUrl}${this.apiEndPoint.GET_ALL_STATIONS}`);
  }
  getAllTrainBetweenStations(departureStationId, arrivalStationId, departureDate) {
    const url = `${this.apiUrl}${this.apiEndPoint.GET_TRAINS_BETWEEN_STATIONS}`;
    // Set up the query parameters
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('departureStationId', departureStationId.toString()).set('arrivalStationId', arrivalStationId.toString()).set('departureDate', departureDate);
    // Make the GET request with the constructed URL and query parameters
    return this.http.get(url, {
      params
    });
  }
  bookTicket(obj) {
    return this.http.post(`${this.apiUrl}${this.apiEndPoint.BOOK_TRAIN}`, obj);
  }
  static #_ = this.ɵfac = function RailwayService_Factory(t) {
    return new (t || RailwayService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: RailwayService,
    factory: RailwayService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6316:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'https://freeapi.miniprojectideas.com/api/TrainApp/'
};

/***/ }),

/***/ 3685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 2037:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 7310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(6394)))
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(3507)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(2033)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + (chunkId === 736 ? "vendor" : chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(736);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map