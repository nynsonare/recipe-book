(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/iaH":
/*!*************************************************************!*\
  !*** ./src/app/shared/placeholder/placeholder.directive.ts ***!
  \*************************************************************/
/*! exports provided: PlaceholderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderDirective", function() { return PlaceholderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PlaceholderDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
PlaceholderDirective.ɵfac = function PlaceholderDirective_Factory(t) { return new (t || PlaceholderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
PlaceholderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PlaceholderDirective, selectors: [["", "appPlaceholder", ""]] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Nayanproject\recipeAngularzip\recipeBookAngular\src\main.ts */"zUnb");


/***/ }),

/***/ "3V6w":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DropdownDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.isOpen = false;
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownDirective, selectors: [["", "appDropdown", ""]], hostVars: 2, hostBindings: function DropdownDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownDirective_click_HostBindingHandler() { return ctx.toggleOpen(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isOpen);
    } } });


/***/ }),

/***/ "9rNa":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
class Ingredient {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}


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
    production: false,
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

/***/ "GXvH":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipes/recipe.service */ "ceC1");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");





class DataStorageService {
    constructor(http, recipeService, authService) {
        this.http = http;
        this.recipeService = recipeService;
        this.authService = authService;
    }
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http
            .put('https://ng-course-recipe-book-9453e-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe(response => {
            console.log(response);
        });
        // const recipes = this.recipeService.getRecipes();
        // this.http
        //   .put(
        //     'https://ng-course-recipe-book-9453e-default-rtdb.firebaseio.com/recipes.json',
        //     recipes
        //   )
        //   .subscribe(response => {
        //     console.log(response);
        //   });
    }
    fetchRecipes() {
        return this.http
            .get('https://ng-course-recipe-book-9453e-default-rtdb.firebaseio.com/recipes.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(recipes => {
            return recipes.map(recipe => {
                return Object.assign(Object.assign({}, recipe), { ingredients: recipe.ingredients ? recipe.ingredients : [] });
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(recipes => {
            this.recipeService.setRecipes(recipes);
        }));
    }
}
DataStorageService.ɵfac = function DataStorageService_Factory(t) { return new (t || DataStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_recipes_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
DataStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataStorageService, factory: DataStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/alert/alert.component */ "VYMa");
/* harmony import */ var _shared_placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/placeholder/placeholder.directive */ "/iaH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/loading-spinner/loading-spinner.component */ "zy28");









function AuthComponent_ng_template_0_Template(rf, ctx) { }
function AuthComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AuthComponent {
    constructor(authService, router, componentFactoryResolver) {
        this.authService = authService;
        this.router = router;
        this.componentFactoryResolver = componentFactoryResolver;
        this.isLoginMode = true;
        this.error = null;
        this.isLoading = false;
    }
    ngOnInit() { }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        let authObs;
        this.isLoading = true;
        if (this.isLoginMode) {
            authObs = this.authService.login(email, password);
        }
        else {
            authObs = this.authService.signup(email, password);
        }
        authObs.subscribe((resData) => {
            console.log(resData);
            this.isLoading = false;
            this.router.navigate(['/recipes']);
        }, (errorMessage) => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.showErrorAlert(errorMessage);
            this.isLoading = false;
        });
        form.reset();
        // console.log("working");
        // if (!form.valid) {
        //   return;
        // }
        // const email = form.value.email;
        // const password = form.value.password;
        // this.isLoading = true;
        // if (this.isLoginMode) {
        //   // ...
        // } else {
        //   this.authService.signup(email, password).subscribe(
        //     resData => {
        //       console.log(resData);
        //      this.isLoading = false;
        //     },
        //     errorMessage => {
        //       console.log(errorMessage);
        //       this.error = errorMessage;
        //       this.isLoading = false;
        //     }
        //   );
        // }
        // form.reset();
    }
    onHandleError() {
        this.error = null;
    }
    showErrorAlert(message) {
        // const alertCmp = new AlertComponent();
        const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();
        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
        componentRef.instance.message = message;
        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }
    ngOnDestroy() {
        if (this.closeSub) {
            this.closeSub.unsubscribe();
        }
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], viewQuery: function AuthComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_shared_placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_1__["PlaceholderDirective"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.alertHost = _t.first);
    } }, decls: 20, vars: 4, consts: [["appPlaceholder", ""], [1, "row"], [1, "col-xs-12", "col-md-6", "col-md-offset-3"], ["style", "text-align: center;", 4, "ngIf"], [3, "ngSubmit"], ["authForm", "ngForm"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "ngModel", "", "name", "email", "required", "", "email", "", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "ngModel", "", "name", "password", "required", "", "minlength", "6", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "btn", "btn-primary", 3, "click"], [2, "text-align", "center"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AuthComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AuthComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return ctx.onSubmit(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthComponent_Template_button_click_18_listener() { return ctx.onSwitchMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isLoginMode ? "Login" : "sign-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Switch to ", ctx.isLoginMode ? "Sign Up" : "Login", "");
    } }, directives: [_shared_placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_1__["PlaceholderDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"]], styles: ["input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n  border: 1px solid red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Nnf/":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "qXBG");




class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(user => {
            if (!user) {
                return next.handle(req);
            }
            const modifiedReq = req.clone({
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('auth', user.token)
            });
            return next.handle(modifiedReq);
        }));
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.directive */ "3V6w");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "zy28");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert/alert.component */ "VYMa");
/* harmony import */ var _placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeholder/placeholder.directive */ "/iaH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownDirective"],
        _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerComponent"],
        _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"],
        _placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_4__["PlaceholderDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownDirective"],
        _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerComponent"],
        _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"],
        _placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_4__["PlaceholderDirective"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "qXBG");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'recipeBookAngular';
    }
    ngOnInit() {
        this.authService.autoLogin();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "VYMa":
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AlertComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClose() {
        this.close.emit();
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], inputs: { message: "message" }, outputs: { close: "close" }, decls: 7, vars: 1, consts: [[1, "backdrop", 3, "click"], [1, "alert-box"], [1, "alert-box-actions"], [1, "btn", "btn-primary", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_div_click_0_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: [".backdrop[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.75);\r\n  z-index: 50;\r\n}\r\n\r\n.alert-box[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 30vh;\r\n  left: 20vw;\r\n  width: 60vw;\r\n  padding: 16px;\r\n  z-index: 100;\r\n  background: white;\r\n  box-shadow: 0 2px 8px rbga(0, 0, 0, 0.26);\r\n}\r\n\r\n.alert-box-actions[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIHotaW5kZXg6IDUwO1xyXG59XHJcblxyXG4uYWxlcnQtYm94IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzMHZoO1xyXG4gIGxlZnQ6IDIwdnc7XHJcbiAgd2lkdGg6IDYwdnc7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJiZ2EoMCwgMCwgMCwgMC4yNik7XHJcbn1cclxuXHJcbi5hbGVydC1ib3gtYWN0aW9ucyB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "LS6v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"] }]),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core.module */ "jbVo");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"]] }); })();


/***/ }),

/***/ "ceC1":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipe.service.ts ***!
  \*******************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "ozzT");



class RecipeService {
    constructor(slService) {
        this.slService = slService;
        this.recipeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        // recipes: Recipe[] = [
        //   new Recipe(
        //     'Pizza',
        //     'very testy',
        //     'https://c.ndtvimg.com/2019-06/go4418h8_garlic-recipes-mushrooms-in-garlic-sauce_625x300_20_June_19.jpg',
        //     [new Ingredient('noodles', 1), new Ingredient('veg kothe', 2)]
        //   ),
        //   new Recipe(
        //     'veg kothe',
        //     'very yummy',
        //     'http://thetastyroom.com/wp-content/uploads/2015/01/veg_kothe2-1024x959.jpg',
        //     [new Ingredient('noodles', 1), new Ingredient('veg kothe', 2)]
        //   ),
        // ];
        this.recipes = [];
    }
    setRecipes(recipes) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients) {
        this.slService.addIngredients(ingredients);
    }
    addRecipe(recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(index, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}
RecipeService.ɵfac = function RecipeService_Factory(t) { return new (t || RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"])); };
RecipeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RecipeService, factory: RecipeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ckZ1":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data-storage.service */ "GXvH");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dropdown.directive */ "3V6w");






function HeaderComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
} }
function HeaderComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Authenticate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onLogOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_19_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSaveData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_19_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onFetchData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fetch Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [1, 2, 3]; };
class HeaderComponent {
    constructor(dataStorageService, authService) {
        this.dataStorageService = dataStorageService;
        this.authService = authService;
        this.collapsed = true;
        this.isAuthenticated = false;
    }
    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);
        });
    }
    onLogOut() {
        this.authService.logout();
    }
    onSaveData() {
        this.dataStorageService.storeRecipes();
    }
    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 6, consts: [[1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", 1, "navbar-toggle", 3, "click"], ["class", "icon-bar", 4, "ngFor", "ngForOf"], ["routerLink", "/", 1, "navbar-brand"], [1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active", "routerLink", "/recipes", 4, "ngIf"], ["routerLinkActive", "active"], ["routerLink", "/auth", 4, "ngIf"], ["routerLinkActive", "active", "routerLink", "/shopping-list"], [1, "nav", "navbar-nav", "navbar-right"], ["style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["class", "dropdown", "appDropdown", "", 4, "ngIf"], [1, "icon-bar"], ["routerLinkActive", "active", "routerLink", "/recipes"], ["routerLink", "/auth"], [2, "cursor", "pointer", 3, "click"], ["appDropdown", "", 1, "dropdown"], ["role", "button", "role", "button", 1, "dropdown-toggle"], [1, "caret"], [1, "dropdown-menu"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.collapsed = !ctx.collapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_span_4_Template, 1, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Recipe Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_a_10_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_a_12_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_a_18_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_li_19_Template, 11, 0, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "jbVo":
/*!********************************!*\
  !*** ./src/app/core.module.ts ***!
  \********************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ "Nnf/");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes/recipe.service */ "ceC1");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-list/shopping-list.service */ "ozzT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"], _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptorService"],
            multi: true
        }
    ] });


/***/ }),

/***/ "ozzT":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ingredient.model */ "9rNa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ShoppingListService {
    constructor() {
        this.ingredientsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Apples', 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Tomatoes', 10),
        ];
    }
    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredient(index) {
        return this.ingredients[index];
    }
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
ShoppingListService.ɵfac = function ShoppingListService_Factory(t) { return new (t || ShoppingListService)(); };
ShoppingListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ShoppingListService, factory: ShoppingListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "ckZ1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    signup(email, password) {
        return this.http
            .post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC7TX4ZvPvATIH3EHGNVDMVfoguxiB8ux4', {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    login(email, password) {
        return this.http
            .post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC7TX4ZvPvATIH3EHGNVDMVfoguxiB8ux4', {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    autoLogin() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() -
                new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }
    logout() {
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }
    autoLogout(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }
    handleAuthentication(email, userId, token, expiresIn) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](email, userId, token, expirationDate);
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }
    handleError(errorRes) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: "recipes",
        loadChildren: () => __webpack_require__.e(/*! import() | recipes-recipes-module */ "recipes-recipes-module").then(__webpack_require__.bind(null, /*! ./recipes/recipes.module */ "7Lvj")).then(m => m.RecipesModule)
    },
    {
        path: "shopping-list",
        loadChildren: () => __webpack_require__.e(/*! import() | shopping-list-shopping-list-module */ "shopping-list-shopping-list-module").then(__webpack_require__.bind(null, /*! ./shopping-list/shopping-list.module */ "CXQP")).then(m => m.ShoppingListModule)
    },
    {
        path: "auth",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"] })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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

/***/ }),

/***/ "zy28":
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingSpinnerComponent {
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 5, vars: 0, consts: [[1, "lds-ring"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lds-ring[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  position: absolute;\r\n  width: 51px;\r\n  height: 51px;\r\n  margin: 6px;\r\n  border: 6px solid #2102cf;\r\n  border-radius: 50%;\r\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  border-color: #2102cf transparent transparent transparent;\r\n}\r\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n  animation-delay: -0.45s;\r\n}\r\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n  animation-delay: -0.3s;\r\n}\r\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n  animation-delay: -0.15s;\r\n}\r\n@keyframes lds-ring {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDhEQUE4RDtFQUM5RCx5REFBeUQ7QUFDM0Q7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJsb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZHMtcmluZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuLmxkcy1yaW5nIGRpdiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDUxcHg7XHJcbiAgaGVpZ2h0OiA1MXB4O1xyXG4gIG1hcmdpbjogNnB4O1xyXG4gIGJvcmRlcjogNnB4IHNvbGlkICMyMTAyY2Y7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogIzIxMDJjZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40NXM7XHJcbn1cclxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbn1cclxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMykge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLXJpbmcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map