(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addpost/addpost.component.css":
/*!***********************************************!*\
  !*** ./src/app/addpost/addpost.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.example-card {\r\n    width: 400px;\r\n    margin: 10% auto;\r\n    }\r\n    .mat-card-title{\r\n    font-size: 16px;\r\n    }*/\r\n\r\n    .fill-remaining-space {\r\n        /* This fills the remaining space, by using flexbox. \r\n           Every toolbar row uses a flexbox row layout. */\r\n        flex: 1 1 auto;\r\n      }\r\n\r\n    .container {\r\n        padding: 10px;\r\n      }\r\n\r\n    .form {\r\n        min-width: 150px;\r\n        max-width: 500px;\r\n        width: 30%;\r\n      }\r\n\r\n    .form-element {\r\n        padding: 5px 0px 25px 2px;\r\n        width: 100%;\r\n      }\r\n\r\n    .button {\r\n        width: 80%;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcG9zdC9hZGRwb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztNQU1NOztJQUVGO1FBQ0k7eURBQ2lEO1FBQ2pELGNBQWM7TUFDaEI7O0lBRUE7UUFDRSxhQUFhO01BQ2Y7O0lBRUE7UUFDRSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLFVBQVU7TUFDWjs7SUFFQTtRQUNFLHlCQUF5QjtRQUN6QixXQUFXO01BQ2I7O0lBRUE7UUFDRSxVQUFVO01BQ1oiLCJmaWxlIjoic3JjL2FwcC9hZGRwb3N0L2FkZHBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmV4YW1wbGUtY2FyZCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLm1hdC1jYXJkLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfSovXHJcblxyXG4gICAgLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICAgICAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxyXG4gICAgICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5mb3JtIHtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZvcm0tZWxlbWVudCB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDBweCAyNXB4IDJweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/addpost/addpost.component.html":
/*!************************************************!*\
  !*** ./src/app/addpost/addpost.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n  \n      <mat-form-field floatLabel=\"never\" class=\"form-element\">\n        <input type=\"text\" matInput placeholder=\"Post Title\" formControlName=\"ptitle\">\n        <mat-error *ngIf=\"formGroup.controls['ptitle'].invalid\">\n          {{getError('ptitle')}}\n        </mat-error>\n      </mat-form-field>\n  \n\n      \n      <mat-form-field floatLabel=\"never\" class=\"form-element\">\n          <textarea matInput placeholder=\"Post Description\" formControlName=\"pdesc\"></textarea>\n        <mat-error *ngIf=\"!formGroup.controls['pdesc'].valid\">\n          {{getError('pdesc')}}\n        </mat-error>\n      </mat-form-field>\n  \n      <div class=\"form-element\">\n        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\" [disabled]=\"!formGroup.valid\"> Add Post</button>\n      </div>\n  \n    </form>\n  </div>\n\n  <div  *ngIf=\"isResult\">\n      Post added successfully\n    </div>"

/***/ }),

/***/ "./src/app/addpost/addpost.component.ts":
/*!**********************************************!*\
  !*** ./src/app/addpost/addpost.component.ts ***!
  \**********************************************/
/*! exports provided: AddpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpostComponent", function() { return AddpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_addpost_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/addpost.service */ "./src/app/service/addpost.service.ts");





var AddpostComponent = /** @class */ (function () {
    function AddpostComponent(_addpostService, router, formBuilder) {
        this._addpostService = _addpostService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.isValid = true;
        this.isResult = false;
    }
    AddpostComponent.prototype.createForm = function () {
        this.formGroup = this.formBuilder.group({
            'ptitle': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'pdesc': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.isResult = false;
    };
    AddpostComponent.prototype.getError = function (el) {
        switch (el) {
            case 'ptitle':
                if (this.formGroup.get('ptitle').hasError('required')) {
                    return 'Post Title required';
                    this.isResult = false;
                }
                break;
            case 'pdesc':
                if (this.formGroup.get('pdesc').hasError('required')) {
                    return 'Post Description required';
                    this.isResult = false;
                }
                break;
            default:
                return '';
        }
    };
    AddpostComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    AddpostComponent.prototype.onSubmit = function () {
        console.log(this.formGroup.get('ptitle').value);
        console.log(this.formGroup.get('pdesc').value);
        if (this.formGroup.get('ptitle').value != "" &&
            this.formGroup.get('pdesc').value != "") {
            if (this.isValid) {
                this._addpostService.addPost(this.formGroup.get('ptitle').value, this.formGroup.get('pdesc').value, localStorage.getItem('username')
                //,new Date(Date.now())
                );
                this.isResult = true;
                this.formGroup.reset();
            }
        }
        //if(this.formGroup.get('password').value == 'admin' && this.formGroup.get('password').value == 'admin'){
        this.router.navigate(["allpost"]);
        //}else {
        //  alert("inside onSubmit Invalid credentials");
        //  }
        // }
    };
    AddpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addpost',
            template: __webpack_require__(/*! ./addpost.component.html */ "./src/app/addpost/addpost.component.html"),
            styles: [__webpack_require__(/*! ./addpost.component.css */ "./src/app/addpost/addpost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_addpost_service__WEBPACK_IMPORTED_MODULE_4__["AddpostService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddpostComponent);
    return AddpostComponent;
}());



/***/ }),

/***/ "./src/app/allpost/allpost.component.css":
/*!***********************************************!*\
  !*** ./src/app/allpost/allpost.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n  th {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxscG9zdC9hbGxwb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9hbGxwb3N0L2FsbHBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/allpost/allpost.component.html":
/*!************************************************!*\
  !*** ./src/app/allpost/allpost.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n   Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" \n Name Column \n  <ng-container matColumnDef=\"PostTitle\">\n    <th mat-header-cell *matHeaderCellDef> PostTitle </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.ptitle}} </td>\n  </ng-container>\n\n   Weight Column\n  <ng-container matColumnDef=\"PostDescription\">\n    <th mat-header-cell *matHeaderCellDef> PostDescription </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.pdesc}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"Posted By\">\n      <th mat-header-cell *matHeaderCellDef> PostTitle </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.uname}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"Edit\">\n        <th mat-header-cell *matHeaderCellDef> PostTitle </th>\n        <td mat-cell *matCellDef=\"let element\"> <a mat-flat-button color=\"accent\" routerLink=\"/create\">\n          <mat-icon inline=true>add</mat-icon> Create</a>\n         </td>\n      </ng-container>\n    \n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"onRowClicked(row)\"></tr>\n  \n</table> -->\n<div  *ngIf=\"!isValid\">\n<table class=\"table-bordered\">\n    <tr><th>Post Title</th><th>Post Description</th><th>Posted By</th><th>Add</th><th>Edit</th><th>Delete</th></tr>\n    <tr *ngFor=\"let post of dataSource\">\n     \n      <td>{{post.ptitle}}</td>\n       <td> {{post.pdesc}}</td>\n       <td> {{post.uname}}</td>\n      <!-- <td><a [routerLink]=\"['/edit', post._id]\" mat-flat-button color=\"accent\" ><mat-icon inline=true>edit</mat-icon> Edit</a></td>-->\n      <td><a mat-flat-button color=\"accent\" type=\"submit\" (click) = \"addpost()\"><mat-icon inline=true>add</mat-icon> add</a></td>\n       <td><a mat-flat-button color=\"accent\" type=\"submit\" (click) = \"editpost(post)\"><mat-icon inline=true>edit</mat-icon> edit</a></td>\n     <td><a mat-flat-button color=\"accent\" type=\"submit\" (click) = \"deleteRouter(post._id)\"><mat-icon inline=true>delete</mat-icon> delete</a></td>\n    \n    </tr>\n    \n    </table>\n  </div>\n    <div  *ngIf=\"isValid\">\n        <app-edit [post]=\"postvariable\"(editDone)=\"editDone()\"></app-edit>\n      </div>\n   "

/***/ }),

/***/ "./src/app/allpost/allpost.component.ts":
/*!**********************************************!*\
  !*** ./src/app/allpost/allpost.component.ts ***!
  \**********************************************/
/*! exports provided: AllpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllpostComponent", function() { return AllpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_getpost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/getpost.service */ "./src/app/service/getpost.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




/**
 * @title Basic use of `<table mat-table>`
 */
var AllpostComponent = /** @class */ (function () {
    function AllpostComponent(_getpostService, _router, _activatedRoute) {
        this._getpostService = _getpostService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        //displayedColumns: string[] = ['PostTitle', 'PostDescription','Posted By'];
        //dataSource = ELEMENT_DATA;
        this.dataSource = [];
        this.isLoading = false;
        this.isValid = false;
    }
    AllpostComponent.prototype.ngOnInit = function () {
        this.getAllPost();
    };
    AllpostComponent.prototype.getAllPost = function () {
        var _this = this;
        this._getpostService.getAllposts()
            .subscribe(function (data) {
            _this.dataSource = data;
            console.log(_this.dataSource);
        });
    };
    AllpostComponent.prototype.deleteRouter = function (_id) {
        var _this = this;
        this._getpostService.deleteRouter(_id).subscribe(function (res) {
            _this._router.navigate(['/user']);
            console.log('Deleted');
            _this.getAllPost();
        });
    };
    AllpostComponent.prototype.addpost = function () {
        this._router.navigate(['/add']);
    };
    AllpostComponent.prototype.editpost = function (post) {
        this.postvariable = post;
        this.isValid = true;
    };
    AllpostComponent.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row);
    };
    AllpostComponent.prototype.editDone = function () {
        this.isValid = false;
        this.getAllPost();
    };
    AllpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allpost',
            template: __webpack_require__(/*! ./allpost.component.html */ "./src/app/allpost/allpost.component.html"),
            styles: [__webpack_require__(/*! ./allpost.component.css */ "./src/app/allpost/allpost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_getpost_service__WEBPACK_IMPORTED_MODULE_2__["GetpostService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AllpostComponent);
    return AllpostComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _addpost_addpost_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addpost/addpost.component */ "./src/app/addpost/addpost.component.ts");
/* harmony import */ var _allpost_allpost_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./allpost/allpost.component */ "./src/app/allpost/allpost.component.ts");











var routes = [
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"] },
    { path: 'edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"] },
    { path: 'add', component: _addpost_addpost_component__WEBPACK_IMPORTED_MODULE_9__["AddpostComponent"] },
    { path: 'allpost', component: _allpost_allpost_component__WEBPACK_IMPORTED_MODULE_10__["AllpostComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TechMBookM';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-bootstrap-form-validation */ "./node_modules/ng-bootstrap-form-validation/fesm5/ng-bootstrap-form-validation.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _validation_custom_error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./validation/custom-error */ "./src/app/validation/custom-error.ts");
/* harmony import */ var _addpost_addpost_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./addpost/addpost.component */ "./src/app/addpost/addpost.component.ts");
/* harmony import */ var _allpost_allpost_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./allpost/allpost.component */ "./src/app/allpost/allpost.component.ts");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/login.service */ "./src/app/service/login.service.ts");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service/register.service */ "./src/app/service/register.service.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _service_addpost_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/addpost.service */ "./src/app/service/addpost.service.ts");
/* harmony import */ var _service_getpost_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/getpost.service */ "./src/app/service/getpost.service.ts");
/* harmony import */ var _service_edit_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/edit.service */ "./src/app/service/edit.service.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
                _addpost_addpost_component__WEBPACK_IMPORTED_MODULE_16__["AddpostComponent"],
                _allpost_allpost_component__WEBPACK_IMPORTED_MODULE_17__["AllpostComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_20__["ErrorComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_24__["EditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _core_material_module__WEBPACK_IMPORTED_MODULE_6__["CustomMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_4__["NgBootstrapFormValidationModule"].forRoot(),
                ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_4__["NgBootstrapFormValidationModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [_service_login_service__WEBPACK_IMPORTED_MODULE_18__["LoginService"], _service_register_service__WEBPACK_IMPORTED_MODULE_19__["RegisterService"], _service_addpost_service__WEBPACK_IMPORTED_MODULE_21__["AddpostService"], _service_getpost_service__WEBPACK_IMPORTED_MODULE_22__["GetpostService"], _service_edit_service__WEBPACK_IMPORTED_MODULE_23__["EditService"], {
                    provide: ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ERROR_MESSAGES"],
                    useValue: _validation_custom_error__WEBPACK_IMPORTED_MODULE_15__["CUSTOM_ERRORS"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.example-card {\r\n    width: 400px;\r\n    margin: 10% auto;\r\n    }\r\n    .mat-card-title{\r\n    font-size: 16px;\r\n    }*/\r\n\r\n    .fill-remaining-space {\r\n        /* This fills the remaining space, by using flexbox. \r\n           Every toolbar row uses a flexbox row layout. */\r\n        flex: 1 1 auto;\r\n      }\r\n\r\n    .container {\r\n        padding: 10px;\r\n      }\r\n\r\n    .form {\r\n        min-width: 150px;\r\n        max-width: 500px;\r\n        width: 30%;\r\n      }\r\n\r\n    .form-element {\r\n        padding: 5px 0px 25px 2px;\r\n        width: 100%;\r\n      }\r\n\r\n    .button {\r\n        width: 100%;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztNQU1NOztJQUVGO1FBQ0k7eURBQ2lEO1FBQ2pELGNBQWM7TUFDaEI7O0lBRUE7UUFDRSxhQUFhO01BQ2Y7O0lBRUE7UUFDRSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLFVBQVU7TUFDWjs7SUFFQTtRQUNFLHlCQUF5QjtRQUN6QixXQUFXO01BQ2I7O0lBRUE7UUFDRSxXQUFXO01BQ2IiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmV4YW1wbGUtY2FyZCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLm1hdC1jYXJkLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfSovXHJcblxyXG4gICAgLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICAgICAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxyXG4gICAgICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5mb3JtIHtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZvcm0tZWxlbWVudCB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDBweCAyNXB4IDJweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\"> \n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n      <!-- <mat-form-field floatLabel=\"never\" class=\"form-element\">\n            <input type=\"text\" matInput placeholder={{post._id}} formControlName=\"id\" >\n           <mat-error *ngIf=\"formGroup.controls['ptitle'].invalid\">\n              {{getError('ptitle')}}\n            </mat-error>\n          </mat-form-field>-->\n      <mat-form-field floatLabel=\"never\" class=\"form-element\">\n        <input type=\"text\" matInput placeholder={{post.ptitle}} formControlName=\"ptitle\">\n        <!--<mat-error *ngIf=\"formGroup.controls['ptitle'].invalid\">\n          {{getError('ptitle')}}\n        </mat-error>-->\n      </mat-form-field>\n  \n\n      \n      <mat-form-field floatLabel=\"never\" class=\"form-element\">\n          <textarea matInput placeholder={{post.pdesc}} formControlName=\"pdesc\"></textarea>\n        <!-- <mat-error *ngIf=\"!formGroup.controls['pdesc'].valid\">\n          {{getError('pdesc')}}\n        </mat-error>-->\n      </mat-form-field>\n  \n      <div class=\"form-element\">\n        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\"> Updatepost</button>\n      </div>\n  \n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/edit.service */ "./src/app/service/edit.service.ts");





var EditComponent = /** @class */ (function () {
    function EditComponent(_editService, _router, _activatedRoute, formBuilder) {
        this._editService = _editService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.formBuilder = formBuilder;
        this.isValid = true;
        this.editDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log('inside the Edit');
    }
    EditComponent.prototype.ngOnChanges = function () {
        console.log(this.post);
        this.id = this.post._id;
    };
    EditComponent.prototype.createForm = function () {
        this.formGroup = this.formBuilder.group({
            'ptitle': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'pdesc': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'id': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        //console.log(this.post);
        this.createForm();
    };
    EditComponent.prototype.onSubmit = function () {
        //console.log(this.formGroup.get('ptitle').value);
        var _this = this;
        //console.log(this.formGroup.get('pdesc').value);
        var obj = {
            ptitle: this.formGroup.get('ptitle').value,
            pdesc: this.formGroup.get('pdesc').value,
            uname: localStorage.getItem('username')
            //date: date
        };
        if (this.formGroup.get('ptitle').value != "" &&
            this.formGroup.get('pdesc').value != "") {
            if (this.isValid) {
                this._editService.updatePost(this.id, obj).subscribe(function (res) {
                    _this.editDone.emit();
                }, function (error) {
                    console.log(error);
                });
                //this.editDone.emit();
                /*this._editService.updatePost(this.id,obj
                  //this.formGroup.get('id').value,
                //this.formGroup.get('ptitle').value,
                //this.formGroup.get('pdesc').value,localStorage.getItem('username')
                //,new Date(Date.now())
                );*/
                // this.editDone.emit();
            }
            //.subscribe(res => console.log('Done'));
            //this.formGroup.reset();
            // this._router.navigate(["user"]);
            //this.editDone.emit();
        }
        //if(this.formGroup.get('password').value == 'admin' && this.formGroup.get('password').value == 'admin'){
        //this.router.navigate(["user"]);
        //}else {
        //  alert("inside onSubmit Invalid credentials");
        //  }
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditComponent.prototype, "editDone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditComponent.prototype, "post", void 0);
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_edit_service__WEBPACK_IMPORTED_MODULE_4__["EditService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Please check your user id and password/ Register to login the application.\n</p>\n<app-login></app-login>"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n  <span>TechM Book</span>\n      <span class=\"example-fill-remaining-space\"></span>\n      <span class=\"align-center\"></span>\n      <span class=\"example-spacer\"></span>\n      <button mat-button routerLink=\"/home\">Home</button>\n      <button mat-button routerLink=\"/login\">Login</button>\n      <button mat-button routerLink=\"/signup\">Registration</button>\n      <!--  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n<mat-menu #menu=\"matMenu\">\n    <button mat-menu-item>\n      <mat-icon>dialpad</mat-icon>\n      <span>Redial</span>\n    </button>\n    <button mat-menu-item disabled>\n      <mat-icon>voicemail</mat-icon>\n      <span>Check voicemail</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon>\n      <span>Disable alerts</span>\n    </button>\n  </mat-menu>-->\n   </mat-toolbar-row>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>\n  <img  class=\"homepic\" src=\"assets/img/website.png\" alt=\"Logo\" style=\"width:100%;\">\n</p>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  /*.example-card {\r\n      width: 400px;\r\n      margin: 10% auto;\r\n      }\r\n      .mat-card-title{\r\n      font-size: 16px;\r\n      }*/\r\n\r\n      .fill-remaining-space {\r\n          /* This fills the remaining space, by using flexbox. \r\n            Every toolbar row uses a flexbox row layout. */\r\n          flex: 1 1 auto;\r\n        }\r\n\r\n      .container {\r\n          padding: 10px;\r\n        }\r\n\r\n      .form {\r\n          min-width: 150px;\r\n          max-width: 500px;\r\n          width: 10%;\r\n        }\r\n\r\n      .form-element {\r\n          padding: 5px 0px 25px 2px;\r\n          width: 100%;\r\n        }\r\n\r\n      .button {\r\n          width: 80%;\r\n        }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTs7Ozs7O1FBTU07O01BRUY7VUFDSTswREFDZ0Q7VUFDaEQsY0FBYztRQUNoQjs7TUFFQTtVQUNFLGFBQWE7UUFDZjs7TUFFQTtVQUNFLGdCQUFnQjtVQUNoQixnQkFBZ0I7VUFDaEIsVUFBVTtRQUNaOztNQUVBO1VBQ0UseUJBQXlCO1VBQ3pCLFdBQVc7UUFDYjs7TUFFQTtVQUNFLFVBQVU7UUFDWiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC8qLmV4YW1wbGUtY2FyZCB7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgbWFyZ2luOiAxMCUgYXV0bztcclxuICAgICAgfVxyXG4gICAgICAubWF0LWNhcmQtdGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfSovXHJcblxyXG4gICAgICAuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gICAgICAgICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICAgICAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cclxuICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmZvcm0tZWxlbWVudCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDI1cHggMnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n    <mat-form-field floatLabel=\"never\" class=\"form-element\">\n      <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"username\">\n      <mat-error *ngIf=\"formGroup.controls['username'].invalid\">\n        {{getError('user')}}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field floatLabel=\"never\" class=\"form-element\">\n      <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid\">\n        {{getError('pass')}}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\" [disabled]=\"!formGroup.valid\">Submit Form</button>\n    </div>\n\n  </form>\n  \n</div>\n<div  *ngIf=\"isFormValid\">\n    <h5 class=\"text-center text-primary\">Please check your user id and password/ Register to login the application. </h5>\n  </div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/login.service */ "./src/app/service/login.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_loginService, _router, _activatedRoute, formBuilder) {
        this._loginService = _loginService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.formBuilder = formBuilder;
        this.isFormValid = true;
    }
    LoginComponent.prototype.createForm = function () {
        this.formGroup = this.formBuilder.group({
            'username': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.isFormValid = false;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    LoginComponent.prototype.login = function () {
        if (this.username == 'admin' && this.password == 'admin') {
            this._router.navigate(["allpost"]);
        }
        else {
            alert("Invalid credentials");
        }
    };
    LoginComponent.prototype.getError = function (el) {
        switch (el) {
            case 'user':
                if (this.formGroup.get('username').hasError('required')) {
                    return 'Username required';
                }
                break;
            case 'pass':
                if (this.formGroup.get('password').hasError('required')) {
                    return 'Password required';
                }
                break;
            default:
                return '';
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        /* alert(this.formGroup.get('password').value);
         console.log(this.formGroup.get('password').value);
     
         if(this.formGroup.get('password').value == 'admin' && this.formGroup.get('password').value == 'admin'){
          this.router.navigate(["user"]);
         }else {
           alert("inside onSubmit Invalid credentials");
         }*/
        console.log('onSubmit');
        this.isFormValid = true;
        console.log(this.formGroup.get('password').value);
        console.log(this.formGroup.get('username').value);
        if (this.isFormValid) {
            var user_1 = {
                username: this.formGroup.get('username').value,
                password: this.formGroup.get('password').value // Password input field
            };
            console.log('Form valid');
            console.log(user_1.username + '  ' + user_1.password);
            console.log('Formgroup value :' + this.formGroup.value);
            //this._loginService.login(this.formGroup.value).subscribe(data => {
            this._loginService.login(user_1).subscribe(function (data) {
                localStorage.setItem('token', data.toString());
                console.log(' Storage : ' + localStorage.getItem('token'));
                localStorage.setItem("username", user_1.username);
                console.log(' username : ' + localStorage.getItem('username'));
                // this.sto = true;
                _this._router.navigate(['/allpost']);
            }, function (error) {
                console.log('Error ');
                // this._router.navigate(['/error']);
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/service/addpost.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/addpost.service.ts ***!
  \********************************************/
/*! exports provided: AddpostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpostService", function() { return AddpostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common//http */ "./node_modules/@angular/common/fesm5/http.js");



var AddpostService = /** @class */ (function () {
    function AddpostService(http) {
        this.http = http;
        this.uri = 'http://localhost:3000/api';
    }
    //addUser(first_Name, last_Name, e_mail,pass_word,confirm_Password) {
    AddpostService.prototype.addPost = function (ptitle, pdesc, username
    //, date
    ) {
        console.log('inside the registeration service');
        var obj = {
            ptitle: ptitle,
            pdesc: pdesc,
            uname: username
            //date: date
        };
        console.log(obj);
        this.http.post(this.uri + "/addpost", obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    AddpostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddpostService);
    return AddpostService;
}());



/***/ }),

/***/ "./src/app/service/edit.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/edit.service.ts ***!
  \*****************************************/
/*! exports provided: EditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditService", function() { return EditService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common//http */ "./node_modules/@angular/common/fesm5/http.js");



var EditService = /** @class */ (function () {
    function EditService(http) {
        this.http = http;
        this.uri = 'http://localhost:3000/api';
    }
    //addUser(first_Name, last_Name, e_mail,pass_word,confirm_Password) {
    /* updatePost(id,obj
       //ptitle, pdesc,username
       //, date
       ) {
       console.log('inside the registeration service');
 
    /* const obj = {
       id:id,
       ptitle: ptitle,
       pdesc: pdesc,
       uname :username
       //date: date
     };*/
    /* console.log(obj);
     this.http.post(`${this.uri}/update/${id}`, obj)
         .subscribe(res => console.log('Done'));
       }*/
    EditService.prototype.updatePost = function (id, obj) {
        return this.http.post(this.uri + "/update/" + id, obj);
    };
    EditService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EditService);
    return EditService;
}());



/***/ }),

/***/ "./src/app/service/getpost.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/getpost.service.ts ***!
  \********************************************/
/*! exports provided: GetpostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetpostService", function() { return GetpostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common//http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GetpostService = /** @class */ (function () {
    function GetpostService(http, router) {
        this.http = http;
        this.router = router;
        this.uri = 'http://localhost:3000/api/getpost';
    }
    GetpostService.prototype.getAllposts = function () {
        return this.http.get("" + this.uri);
    };
    GetpostService.prototype.deleteRouter = function (id) {
        return this.http.delete("http://localhost:3000/api/delete/" + id);
    };
    GetpostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GetpostService);
    return GetpostService;
}());



/***/ }),

/***/ "./src/app/service/login.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
    }
    LoginService.prototype.login = function (body) {
        return this._http.post('http://localhost:3000/api/login', body, {
            observe: 'body'
        });
    };
    LoginService.prototype.getUserName = function () {
        return this._http.get('http://localhost:3000/api/username', {
            observe: 'body',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('token', localStorage.getItem('token'))
        });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/service/register.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/register.service.ts ***!
  \*********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common//http */ "./node_modules/@angular/common/fesm5/http.js");



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.uri = 'http://localhost:3000/api';
    }
    //addUser(first_Name, last_Name, e_mail,pass_word,confirm_Password) {
    RegisterService.prototype.addUser = function (fname, lname, address, email, uname, pwd) {
        console.log('inside the registeration service');
        var obj = {
            firstName: fname,
            lastName: lname,
            address: address,
            email: email,
            uname: uname,
            password: pwd
        };
        console.log(obj);
        this.http.post(this.uri + "/add", obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n  </button>\n  <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n    <mat-step [stepControl]=\"firstFormGroup\">\n      <form [formGroup]=\"firstFormGroup\" (ngSubmit)=\"onSubmit(firstFormGroup.value)\" class=\"form\" >\n        <ng-template matStepLabel>Fill out your name</ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"First name\" formControlName=\"firstname\" required>\n        </mat-form-field>\n        <div>\n        <mat-form-field>\n            <input matInput placeholder=\"Last name\" formControlName=\"lastname\" required>\n          </mat-form-field>\n        </div>\n        <div>\n          <button mat-button  matStepperNext class=\"button\" [disabled]=\"!firstFormGroup.valid\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\">\n      <form [formGroup]=\"secondFormGroup\" (ngSubmit)=\"onSubmit(secondFormGroup.value)\" class=\"form\">\n        <ng-template matStepLabel>Fill out your address</ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"Address\" formControlName=\"address\" required>\n        </mat-form-field>\n        <div>\n        <mat-form-field>\n            <input matInput placeholder=\"email\" formControlName=\"email\" required>\n          </mat-form-field>\n        </div>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button  mat-button matStepperNext class=\"button\" [disabled]=\"!secondFormGroup.valid\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>Done</ng-template>\n      <form [formGroup]=\"thirdFormGroup\" (ngSubmit)=\"onSubmit(thirdFormGroup.value)\" class=\"form\">\n          <ng-template matStepLabel>Fill out your address</ng-template>\n          <mat-form-field>\n            <input matInput placeholder=\"UserID\" formControlName=\"userid\" required>\n          </mat-form-field>\n          <div>\n          <mat-form-field>\n              <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" required>\n            </mat-form-field>\n          </div>\n  \n        </form>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button (click)=\"stepper.reset()\">Reset</button>\n        <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"onSubmit()\" class=\"button\" [disabled]=\"!thirdFormGroup.valid\">submit</button>\n      </div>\n    </mat-step>\n    \n  </mat-horizontal-stepper>\n  <div  *ngIf=\"isValid\">\n      <h5 class=\"text-center text-primary\">Registration Successfull</h5>\n    </div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/register.service */ "./src/app/service/register.service.ts");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(_registerService, _formBuilder) {
        this._registerService = _registerService;
        this._formBuilder = _formBuilder;
        this.isLinear = false;
        this.isValid = true;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            userid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.isValid = false;
    };
    SignupComponent.prototype.onReset = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        /* alert(this.formGroup.get('password').value);
         console.log(this.formGroup.get('password').value);
     
         if(this.formGroup.get('password').value == 'admin' && this.formGroup.get('password').value == 'admin'){
          this.router.navigate(["user"]);
         }else {
           alert("inside onSubmit Invalid credentials");
         }*/
        console.log('onSubmit');
        console.log(this.firstFormGroup.get('firstname').value);
        console.log(this.firstFormGroup.get('lastname').value);
        console.log(this.secondFormGroup.get('address').value);
        console.log(this.secondFormGroup.get('email').value);
        console.log(this.thirdFormGroup.get('userid').value);
        console.log(this.thirdFormGroup.get('password').value);
        if (this.firstFormGroup.get('firstname').value != "" &&
            this.firstFormGroup.get('lastname').value != "" &&
            this.secondFormGroup.get('address').value != "" &&
            this.secondFormGroup.get('email').value != "" &&
            this.thirdFormGroup.get('userid').value != "" &&
            this.thirdFormGroup.get('password').value != "") {
            this.isValid = true;
            if (this.isValid) {
                this._registerService.addUser(this.firstFormGroup.get('firstname').value, this.firstFormGroup.get('lastname').value, this.secondFormGroup.get('address').value, this.secondFormGroup.get('email').value, this.thirdFormGroup.get('userid').value, this.thirdFormGroup.get('password').value);
            }
            this.firstFormGroup.reset();
            this.secondFormGroup.reset();
            this.thirdFormGroup.reset();
        }
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    \n      <!--<mat-tab label=\"Add Post\"> \n        <app-addpost></app-addpost> \n      <app-allpost></app-allpost>\n  </mat-tab>-->\n  <mat-tab label=\"Post Details\"> \n      <app-allpost></app-allpost>\n  </mat-tab>\n   <!-- <mat-tab label=\"update\"> Content 3 </mat-tab>\n    <mat-tab label=\"Delete\"> Content 3 </mat-tab>-->\n  </mat-tab-group>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/validation/custom-error.ts":
/*!********************************************!*\
  !*** ./src/app/validation/custom-error.ts ***!
  \********************************************/
/*! exports provided: CUSTOM_ERRORS, requiredFormat, emailFormat, passwordConfirmPasswordFormatEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_ERRORS", function() { return CUSTOM_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFormat", function() { return requiredFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailFormat", function() { return emailFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordConfirmPasswordFormatEqual", function() { return passwordConfirmPasswordFormatEqual; });
var CUSTOM_ERRORS = [
    {
        error: 'required',
        format: requiredFormat
    }, {
        error: 'email',
        format: emailFormat
    }, {
        error: 'passwordValidator',
        format: passwordConfirmPasswordFormatEqual
    }
];
function requiredFormat(label, error) {
    return label + " IS MOST DEFINITELY REQUIRED!";
}
function emailFormat(label, error) {
    return label + " doesn't look like a valid email address.";
}
function passwordConfirmPasswordFormatEqual(label, error) {
    return label + " doesn't match passwords.";
}


/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FullStack\TechmBookProject\TechMBookM\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map