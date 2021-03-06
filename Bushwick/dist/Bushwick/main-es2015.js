(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<router-outlet>\n \n</router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>about works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm/confirm.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm/confirm.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>confirm works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/dialog.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/dialog.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{data.author}} needs help</h1>\n<div mat-dialog-content>\n  <h3>{{data.author}}: {{data.text}}</h3>\n  <p>we need this done by {{data.time}}</p>\n</div>\n<div mat-dialog-actions style=\"display:block !important;\">\n  <div>\n    <p>if you can help - confirm below {{data.author}} will be notified</p>\n  </div>\n  <div>\n    <button id={{data.id}} (click)=\"onNoClick($event.target.id)\">Ok</button>\n    <button style=\"background-color: green;\" [mat-dialog-close]=\"data.animal\" cdkFocusInitial>No Thanks</button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/feed/feed.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/feed/feed.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<section>\n  <div class=\"container grey\" *ngIf=\"this.feedState===0\">\n    <div class=\"post-buttons\">\n      <div> \n        <h3>Currently {{postsCount}} people in Bushwick needing help</h3>\n        <button mat-raised-button style=\"background-color:#01a6eb;\" class=\"help-button\" (click)=\"canHelp()\">I can\n          Help</button>\n        <h4>I can volunteer my time</h4>\n      </div>\n      <div> \n        <h3>We have {{userCount}} volunteers looking to help</h3>\n        <button mat-raised-button style=\"background-color:#f68000\" class=\"help-button\" (click)=\"needHelp()\">I Need\n          Help</button>\n        <h4>I or someone I know needs something done</h4>\n      </div>\n\n    </div>\n\n  </div>\n</section>\n\n<section>\n  <div class=\"container table-container grey\" *ngIf=\"this.feedState===1\" style=\"padding-bottom:0 !important\">\n    <div>\n      <div>\n        <h1>The following claims are open and need someone's assistance. </h1>\n      </div>\n      <mat-form-field style=\"width:80%\">\n        <mat-label>Serarch</mat-label>\n        <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Search the feed here\">\n      </mat-form-field>\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" class=\"feed-table\">\n\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"Task\">\n          <th mat-header-cell *matHeaderCellDef> Task </th>\n          <td mat-cell *matCellDef=\"let post\"> {{post.text}} </td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"Time\">\n          <th mat-header-cell *matHeaderCellDef> Date</th>\n          <td mat-cell *matCellDef=\"let post\"> {{post.time.toDate() | date: 'MM/dd/yyyy'}} </td>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"Location\">\n          <th mat-header-cell *matHeaderCellDef> Location </th>\n          <td mat-cell *matCellDef=\"let post\"> {{post.location}} </td>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"Claim\">\n          <th mat-header-cell *matHeaderCellDef> Claim </th>\n          <td mat-cell *matCellDef=\"let post\"> <button style=\"background-color:green\" id={{post.id}}\n              (click)=\"openDialog($event.target.id)\">claim</button> </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n  </div>\n  <div class=\"paginator-container\">\n    <mat-paginator #paginator id=\"paginator\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons class=\"paginator\">\n    </mat-paginator>\n  </div>\n\n</section>\n<section>\n  <div *ngIf=\"this.feedState===2\">\n    <app-post></app-post>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer-container container\">\n    <a href=\"cdc.gov\">The CDC</a> <p> is the best source of information on this current crisis</p> \n    <a routerLink=\"/terms\">Legal stuff here</a>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/join/join.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/join/join.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>join works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grey container\">\n  <div class=\"banner grey\">\n\n  </div>\n  <div class=\"content\">\n  <h3>Helping The vulnerable population of Bushwick during the COVID-19 pandemic</h3>\n  <br>\n  <p>We are a grassroots volunteer network based in Bushwick with the mission of helping those who are most vulnerable\n    during this pandemic.\n    If you or someone you know needs assistance during these trying times sign up below and post to the feed.</p>\n  <br>\n  <p>If you would like to volunteer time or resources or know someone who needs help click the sigin in with google\n    button.</p>\n    <h3>currently {{this.postCount}} tasks waiting to be done</h3>\n    <h3>currently {{this.userCount}} volunteers signed up </h3>\n    <h3></h3>\n    <div class=\"login-buttons\">\n  <button (click)=\"signUpGoogle()\">Sign up with google</button>\n  <button (click)=\"signUpFacebook()\">continue with facebook</button>\n</div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/legal/legal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/legal/legal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>legal works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>login works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <app-navbar></app-navbar>\n</div>\n<div class=\"map-container\">\n    <h1>Food Map</h1>\n    <h4>The following map is a list of all known free food banks from the greater Bushwick area.  Click on a tag fror more information.</h4>\n    <iframe src=\"https://www.google.com/maps/d/embed?mid=1X7U-HLaQSxdajFa1pkCRCVhnJiZo_ox3\" width=\"100%\" height=\"480\"></iframe>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mobile\" *ngIf=\"this.mobile\">\n  <mat-menu #appMenu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/profile\">{{currentUser.displayName}}</button>\n    <button mat-menu-item routerlink=\"/feed\">Feed</button>\n    <button mat-menu-item routerlink=\"/map\">Food Banks</button>\n    <button mat-menu-item routerlink=\" /resources\">Resources</button>\n    <button mat-menu-item routerlink=\"/support\">support</button>\n    <button mat-menu-item routerlink=\"/help\">help</button>\n    <button mat-menu-item (click)=\"onLogoutClicked()\">sign out</button>\n  </mat-menu>\n\n\n  <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n    <mat-icon>menu</mat-icon>\n  </button>\n</div>\n<div class=\"banner dark-grey container\"></div>\n\n\n<div class=\"notMobile\" *ngIf=\"!this.mobile\">\n  <mat-toolbar style=\"justify-content: space-evenly\" class=\"orange\">\n    <span style=\"justify-self: flex-start;\">Buswick Mutual Aid</span>\n    <br>\n    <br>\n    <div class=\"nav-links\">\n      <a routerLink=\"/profile\"><img src='{{currentUser.photoURL}}'\n          style=\"height:50px; width:50px; border-radius: 50%;\"></a>\n      <a routerLink=\"/profile\">{{currentUser.displayName}}</a>\n\n      <a routerLink=\"/feed\">feed</a>\n\n      <a routerLink=\"/map\">Food Banks</a>\n      <a routerLink=\"/resources\">Resources</a>\n\n\n      <a routerLink=\"/support\">support</a>\n      <a (click)=\"onLogoutClicked()\" routerLink=[]>sign out</a>\n      <a routerLink=\"/help\">help</a>\n    </div>\n  </mat-toolbar>\n</div>\n<div class=\"border-bottom-oj dark-grey\">\n  <h2>Please remember the following safety precautions:</h2>\n  <ul class=\"safety-list\" style=\"list-style-type: none;\">\n    <li>The CDC now reccomends wearing a mask when outside.</li>\n    <li>Do not enter a home when you are on a job under any circumstances</li>\n    <li>Check with your person to assess how mobile they are or if they need someone to come to the stoop or landing to\n      meet you</li>\n    <li>Try your best to not to beyond the front door. </li>\n    <li>Do not handle dirty laundry. Clean laundry is ok.</li>\n    <li>Ask your assigned person if they wouldn't mind being contaced every few days to check up.</li>\n    <li>Wash / sanitize your hadns after touching <strong>doorknobs, surfaces frequently when out on a job</strong></li>\n    <li>Try to shop early and avoid crowded shops.</li>\n    <li>Practice social distancing at all times.</li>\n    <li><strong>Use common sense.</strong> We are all figuring this out as we go.</li>\n  </ul>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-resource/post-resource.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-resource/post-resource.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"help-from-container\"> \n    <form class=\"help-form grey\" [formGroup]=\"inputForm\" (ngSubmit)=\"onSubmit()\">\n        <div>\n          <div>\n            <h3>What resources are you offering?</h3>\n          </div>\n          \n          <textarea formControlName='text' name=\"text\"  placeholder=\"Describe what you have to offer\"required></textarea>\n          <div *ngIf=\"!inputForm.controls.text.untouched && inputForm.controls.text.invalid && inputForm.controls.text.errors.required\" style=\"color:red\">\n            <p>Description must be 10 characters long </p>\n          </div>\n        </div>\n        <div>\n          <h3>When is this available?</h3>\n      \n          <mat-form-field>\n            <mat-label>Choose a date</mat-label>\n            <input  matInput [min]=\"minDate\" [matDatepicker]=\"date\" formControlName=\"date\">\n            <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\n            <mat-datepicker #date\n            ></mat-datepicker>\n          </mat-form-field>\n          <div *ngIf=\"!inputForm.controls.date.untouched && inputForm.controls.date.invalid && inputForm.controls.date.errors.required\" style=\"color:red\">\n            <p>Please select a date </p>\n          </div>\n        </div>\n        <div>\n          <h3>Where can people access this?</h3>\n      \n          <textarea formControlName='location' placeholder=\"Enter your address\"></textarea>\n          <div *ngIf=\" !inputForm.controls.location.untouched && inputForm.controls.location.invalid && inputForm.controls.location.errors.required\" style=\"color:red\">\n            <p>Please tell us where you're located </p>\n          </div>\n        </div>\n        <div>\n        <h3>How much of this do you have?</h3>\n      \n        <textarea formControlName='quantity' placeholder=\"Enter your address\"></textarea>\n        <div *ngIf=\"!inputForm.controls.quantity.untouched && inputForm.controls.quantity.invalid && inputForm.controls.quantity.errors.required\" style=\"color:red\">\n          <p>Please tell us where you're located </p>\n        </div>\n      </div>\n        \n        <div>\n          <h3>How do people contact you about this?</h3>\n          \n          <textarea formControlName='contact' placeholder=\"Enter your phone number or email if you prefer\"></textarea>\n      \n          <div *ngIf=\" !inputForm.controls.quantity.untouched  && inputForm.controls.contact.invalid && inputForm.controls.contact.errors.required\" style=\"color:red\">\n            <p>Please give us a contact phone number </p>\n          </div>\n          <button type=\"submit\" [disabled]=\"!inputForm.valid || inputForm.untouched\">Submit</button>\n        </div>\n      \n      </form>\n      \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"help-form grey\" [formGroup]=\"inputForm\" (ngSubmit)=\"onSubmit()\">\n  <div>\n    \n    <div>\n      <h3>What do you need done?</h3>\n    </div>\n    \n    <textarea formControlName='text' name=\"text\"  placeholder=\"Describe what you need\"required></textarea>\n    <div *ngIf=\"inputForm.controls.text.invalid && inputForm.controls.text.errors.required\" style=\"color:red\">\n      <p>Description must be 10 characters long </p>\n    </div>\n</div>\n  <div>\n    <h3>when do you need it done</h3>\n \n    <mat-form-field>\n      <mat-label>Choose a date</mat-label>\n      <input  matInput [min]=\"minDate\" [matDatepicker]=\"date\" formControlName=\"date\">\n      <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\n      <mat-datepicker #date\n      ></mat-datepicker>\n    </mat-form-field>\n    <div *ngIf=\"inputForm.controls.date.invalid && inputForm.controls.date.errors.required\" style=\"color:red\">\n      <p>Please select a date </p>\n    </div>\n  </div>\n  <div>\n    <h3>Where do you need this done?</h3>\n\n    <textarea formControlName='location' placeholder=\"Enter your address\"></textarea>\n    <div *ngIf=\"inputForm.controls.location.invalid && inputForm.controls.location.errors.required\" style=\"color:red\">\n      <p>Please tell us where you're located </p>\n    </div>\n  </div>\n  <div>\n    <h3>Please leave a contact number</h3>\n    \n    <textarea formControlName='contact' placeholder=\"Enter your phone number\"></textarea>\n\n    <div *ngIf=\"inputForm.controls.contact.invalid && inputForm.controls.contact.errors.required\" style=\"color:red\">\n      <p>Please give us a contact phone number </p>\n    </div>\n    <button type=\"submit\" [disabled]=\"!inputForm.valid || inputForm.untouched\">Submit</button>\n  </div>\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<section>\n    <div class=\"container grey profile-container\" >\n     \n        <div> \n            <!-- <mat-form-field>\n                <mat-label>Filter</mat-label>\n                <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\">\n              </mat-form-field> -->\n              <mat-label>\n                <h4>{{currentUser.displayName}} - Tasks you signed up for </h4></mat-label>\n              <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n              \n                <!-- Position Column -->\n                <ng-container matColumnDef=\"Task\">\n                  <th mat-header-cell *matHeaderCellDef> Task </th>\n                  <td mat-cell *matCellDef=\"let post\"> {{post.text}} </td>\n                </ng-container>\n              \n                <!-- Name Column -->\n                <ng-container matColumnDef=\"Time\">\n                  <th mat-header-cell *matHeaderCellDef> Time</th>\n                  <td mat-cell *matCellDef=\"let post\"> {{post.time}} </td>\n                </ng-container>\n              \n                <!-- Weight Column -->\n                <ng-container matColumnDef=\"Location\">\n                  <th mat-header-cell *matHeaderCellDef> Location </th>\n                  <td mat-cell *matCellDef=\"let post\"> {{post.location}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"Contact\">\n                  <th mat-header-cell *matHeaderCellDef> Contact </th>\n                  <td mat-cell *matCellDef=\"let post\"> {{post.contact}} </td>\n                </ng-container>\n              \n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"Cancel\">\n                  <th mat-header-cell *matHeaderCellDef> Cancel </th>\n                  <td mat-cell *matCellDef=\"let post\" > <button mat-button id = {{post.id}} (click)=\"cancelClicked($event.target.id)\">Cancel</button> </td>\n                </ng-container>\n              \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n        </div>\n        <div> \n            <!-- <mat-form-field>\n                <mat-label>Filter</mat-label>\n                <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\">\n              </mat-form-field> -->\n              <mat-label><h4>{{currentUser.displayName}}'s: Tasks you need done</h4></mat-label>\n              <table mat-table [dataSource]=\"publishedPosts\" class=\"mat-elevation-z8\">\n              \n                <!-- Position Column -->\n                <ng-container matColumnDef=\"Task\">\n                  <th mat-header-cell *matHeaderCellDef> No. </th>\n                  <td mat-cell *matCellDef=\"let post\"> {{post.text}} </td>\n                </ng-container>\n              \n                <!-- Name Column -->\n                <ng-container matColumnDef=\"Time\">\n                  <th mat-header-cell *matHeaderCellDef> Time</th>\n                  <td mat-cell *matCellDef=\"let post\"> {{post.time | date: 'dd/MM/yyyy'}} </td>\n                </ng-container>\n              \n                <!-- Weight Column -->\n                <ng-container matColumnDef=\"Location\">\n                  <th mat-header-cell *matHeaderCellDef> Location </th>\n                  <td mat-cell *matCellDef=\"let post\"> {{post.location}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"Contact\">\n                  <th mat-header-cell *matHeaderCellDef> Contact </th>\n                  <td mat-cell *matCellDef=\"let post\"> {{post.contact}} </td>\n                </ng-container>\n              \n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"Cancel\">\n                  <th mat-header-cell *matHeaderCellDef> Cancel </th>\n                  <td mat-cell *matCellDef=\"let post\" > <button mat-button id = {{post.id}} (click)=\"deleteClicked($event.target.id)\">Delete</button> </td>\n                </ng-container>\n\n              \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n        </div>\n        <div> \n      <!-- <mat-form-field>\n          <mat-label>Filter</mat-label>\n          <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\">\n        </mat-form-field> -->\n        <mat-label><h4>{{currentUser.displayName}}'s: Resources you are offering</h4></mat-label>\n        <table mat-table [dataSource]=\"userResources\" class=\"mat-elevation-z8\">\n        \n          <!-- Position Column -->\n          <ng-container matColumnDef=\"Task\">\n            <th mat-header-cell *matHeaderCellDef> No. </th>\n            <td mat-cell *matCellDef=\"let resource\"> {{resource.text}} </td>\n          </ng-container>\n        \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"Time\">\n            <th mat-header-cell *matHeaderCellDef> Date Available</th>\n            <td mat-cell *matCellDef=\"let resource\"> {{resource.date | date: \"MM/dd/yyy\"}}</td>\n          </ng-container>\n        \n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"Location\">\n            <th mat-header-cell *matHeaderCellDef> Location </th>\n            <td mat-cell *matCellDef=\"let resource\"> {{resource.location}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Contact\">\n            <th mat-header-cell *matHeaderCellDef> Contact </th>\n            <td mat-cell *matCellDef=\"let resource\"> {{resource.contact}} </td>\n          </ng-container>\n        \n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"Cancel\">\n            <th mat-header-cell *matHeaderCellDef> Cancel </th>\n            <td mat-cell *matCellDef=\"let resource\" > <button mat-button id = {{resource.id}} (click)=\"deleteClicked($event.target.id)\">Delete</button> </td>\n          </ng-container>\n\n        \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n  </div>\n  \n\n</div>\n\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resources/resources.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/resources/resources.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<section>\n  <div class=\"container grey \" *ngIf=\"this.feedState===0\">\n      <div>\n        <h3>We currently have {{resourceCount}} resources available to the community</h3>\n      </div>\n  <div class=\"post-buttons\">\n      <div>\n         \n        <button mat-raised-button style=\"background-color:#f68000\" class=\"help-button\" (click)=\"needResources()\">I need Resources</button>\n        <h4>Need help over a long period?  Check our Resources list for things that may help</h4>\n      </div>\n      <div> <button mat-raised-button style=\"background-color: #01a6eb\" class=\"help-button\" (click)=\"haveResources()\">I Have\n          Resources</button>\n        <h4>Making masks or giving out food?  List it here.</h4>\n      </div>\n    </div>\n\n  </div>\n</section>\n<section>\n  <div class=\"container table-container grey\" *ngIf=\"this.feedState===1\" style=\"padding-bottom:0 !important\">\n    <div>\n      <div>\n \n        <h3>We currently have {{resourceCount}} resources available to the community</h3>\n      </div>\n      <mat-form-field style=\"width:100%\">\n        <mat-label>Serarch</mat-label>\n        <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Search the feed here\">\n      </mat-form-field>\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" style=\"width:74%\"> \n\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"Resource\">\n          <th mat-header-cell *matHeaderCellDef> Resource </th>\n          <td mat-cell *matCellDef=\"let resource\"> {{resource.text}} </td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"Time\">\n          <th mat-header-cell *matHeaderCellDef> Time Available</th>\n          <td mat-cell *matCellDef=\"let resource\"> {{resource.time}}  </td>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"Location\">\n          <th mat-header-cell *matHeaderCellDef> Location </th>\n          <td mat-cell *matCellDef=\"let resource\"> {{resource.location}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Quantity\">\n          <th mat-header-cell *matHeaderCellDef> Number Available</th>\n          <td mat-cell *matCellDef=\"let resource\"> {{resource.quantity}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Available?\">\n          <th mat-header-cell *matHeaderCellDef> Available?</th>\n          <td mat-cell *matCellDef=\"let resource\"> {{resource.isAvailable}} </td>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"Request\">\n          <th mat-header-cell *matHeaderCellDef> Request</th>\n          <td mat-cell *matCellDef=\"let resource\"> <button style=\"background-color:green\" id={{resource.id}}\n              (click)=\"openDialog($event.target.id)\">Request</button> </td>\n        </ng-container>\n\n\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n  </div>\n  <mat-paginator #paginator id=\"paginator\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons class=\"paginator\"></mat-paginator>\n</section>\n\n<section>\n  <div *ngIf=\"this.feedState===2\"> \n  <app-post-resource></app-post-resource>\n</div>\n</section>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/terms/terms.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/terms/terms.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container\">\n    <h1>Privacy Policy</h1>\n\n\n    <p>Effective date: April 7, 2020</p>\n\n\n    <p>Bushwick Mutual Aid LLC (\"us\", \"we\", or \"our\") operates the hhttps://bushwickaid.firebaseapp.com/ website and the\n        Bushwick Mutual Aid mobile application (hereinafter referred to as the \"Service\").</p>\n\n    <p>This page informs you of our policies regarding the collection, use and disclosure of personal data when you use our\n        Service and the choices you have associated with that data.</p>\n\n    <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information\n        in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy\n        have the same meanings as in our Terms and Conditions.</p>\n\n    <h2>Definitions</h2>\n    <ul>\n        <li>\n            <p>\n                <strong>Service</strong>\n            </p>\n            <p>Service means the hhttps://bushwickaid.firebaseapp.com/ website and the Bushwick Mutual Aid mobile application\n                operated by Bushwick Mutual Aid LLC</p>\n        </li>\n        <li>\n            <p>\n                <strong>Personal Data</strong>\n            </p>\n            <p>Personal Data means data about a living individual who can be identified from those data (or from those and other\n                information either in our possession or likely to come into our possession).</p>\n        </li>\n        <li>\n            <p>\n                <strong>Usage Data</strong>\n            </p>\n            <p>Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure\n                itself (for example, the duration of a page visit).</p>\n        </li>\n        <li>\n            <p>\n                <strong>Cookies</strong>\n            </p>\n            <p>Cookies are small files stored on your device (computer or mobile device).</p>\n        </li>\n        <li>\n            <p>\n                <strong>Data Controller</strong>\n            </p>\n            <p>Data Controller means the natural or legal person who (either alone or jointly or in common with other persons)\n                determines the purposes for which and the manner in which any personal information are, or are to be, processed.</p>\n            <p>For the purpose of this Privacy Policy, we are a Data Controller of your Personal Data.</p>\n        </li>\n        <li>\n            <p>\n                <strong>Data Processors (or Service Providers)</strong>\n            </p>\n            <p>Data Processor (or Service Provider) means any natural or legal person who processes the data on behalf of the\n                Data Controller.</p>\n            <p>We may use the services of various Service Providers in order to process your data more effectively.</p>\n        </li>\n        <li>\n            <p>\n                <strong>Data Subject (or User)</strong>\n            </p>\n            <p>Data Subject is any living individual who is using our Service and is the subject of Personal Data.</p>\n        </li>\n    </ul>\n\n\n    <h2>Information Collection and Use</h2>\n    <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>\n\n    <h3>Types of Data Collected</h3>\n\n    <h4>Personal Data</h4>\n    <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used\n        to contact or identify you (\"Personal Data\"). Personally identifiable information may include, but is not limited\n        to:</p>\n\n    <ul>\n        <li>Email address</li>\n        <li>First name and last name</li>\n        <li>Phone number</li>\n        <li>Address, State, Province, ZIP/Postal code, City</li>\n        <li>Cookies and Usage Data</li>\n    </ul>\n\n    <p>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information\n        that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following\n        the unsubscribe link or the instructions provided in any email we send.</p>\n\n    <h4>Usage Data</h4>\n\n    <p>We may also collect information that your browser sends whenever you visit our Service or when you access the Service\n        by or through a mobile device (\"Usage Data\").</p>\n    <p>This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser\n        type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on\n        those pages, unique device identifiers and other diagnostic data.</p>\n    <p>When you access the Service with a mobile device, this Usage Data may include information such as the type of mobile\n        device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system,\n        the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</p>\n\n\n    <h4>Tracking & Cookies Data</h4>\n    <p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p>\n    <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your\n        browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags\n        and scripts to collect and track information and to improve and analyse our Service.</p>\n    <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not\n        accept cookies, you may not be able to use some portions of our Service.</p>\n    <p>Examples of Cookies we use:</p>\n    <ul>\n        <li>\n            <strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>\n        <li>\n            <strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>\n        <li>\n            <strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>\n    </ul>\n\n    <h2>Use of Data</h2>\n    <p>Bushwick Mutual Aid LLC uses the collected data for various purposes:</p>\n    <ul>\n        <li>To provide and maintain our Service</li>\n        <li>To notify you about changes to our Service</li>\n        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>\n        <li>To provide customer support</li>\n        <li>To gather analysis or valuable information so that we can improve our Service</li>\n        <li>To monitor the usage of our Service</li>\n        <li>To detect, prevent and address technical issues</li>\n        <li>To provide you with news, special offers and general information about other goods, services and events which we\n            offer that are similar to those that you have already purchased or enquired about unless you have opted not to\n            receive such information</li>\n    </ul>\n\n\n    <h2>Legal Basis for Processing Personal Data under the General Data Protection Regulation (GDPR)</h2>\n    <p>If you are from the European Economic Area (EEA), Bushwick Mutual Aid LLC legal basis for collecting and using the personal information\n        described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect\n        it.</p>\n    <p>Bushwick Mutual Aid LLC may process your Personal Data because:</p>\n    <ul>\n        <li>We need to perform a contract with you</li>\n        <li>You have given us permission to do so</li>\n        <li>The processing is in our legitimate interests and it is not overridden by your rights</li>\n        <li>To comply with the law</li>\n    </ul>\n\n\n    <h2>Retention of Data</h2>\n    <p>Bushwick Mutual Aid LLC will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy\n        Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for\n        example, if we are required to retain your data to comply with applicable laws), resolve disputes and enforce our\n        legal agreements and policies.</p>\n    <p>Bushwick Mutual Aid LLC will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter\n        period of time, except when this data is used to strengthen the security or to improve the functionality of our Service,\n        or we are legally obligated to retain this data for longer periods.</p>\n\n    <h2>Transfer of Data</h2>\n    <p>Your information, including Personal Data, may be transferred to - and maintained on - computers located outside of your\n        state, province, country or other governmental jurisdiction where the data protection laws may differ from those\n        of your jurisdiction.</p>\n    <p>If you are located outside United States and choose to provide information to us, please note that we transfer the data,\n        including Personal Data, to United States and process it there.</p>\n    <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that\n        transfer.</p>\n    <p>Bushwick Mutual Aid LLC will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance\n        with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless\n        there are adequate controls in place including the security of your data and other personal information.</p>\n\n    <h2>Disclosure of Data</h2>\n\n    <h3>Disclosure for Law Enforcement</h3>\n    <p>Under certain circumstances, Bushwick Mutual Aid LLC may be required to disclose your Personal Data if required to do so by law\n        or in response to valid requests by public authorities (e.g. a court or a government agency).</p>\n\n    <h3>Legal Requirements</h3>\n    <p>Bushwick Mutual Aid LLC may disclose your Personal Data in the good faith belief that such action is necessary to:</p>\n    <ul>\n        <li>To comply with a legal obligation</li>\n        <li>To protect and defend the rights or property of Bushwick Mutual Aid LLC</li>\n        <li>To prevent or investigate possible wrongdoing in connection with the Service</li>\n        <li>To protect the personal safety of users of the Service or the public</li>\n        <li>To protect against legal liability</li>\n    </ul>\n\n    <h2>Security of Data</h2>\n    <p>The security of your data is important to us but remember that no method of transmission over the Internet or method\n        of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal\n        Data, we cannot guarantee its absolute security.</p>\n\n    <h2>Our Policy on \"Do Not Track\" Signals under the California Online Protection Act (CalOPPA)</h2>\n    <p>We do not support Do Not Track (\"DNT\"). Do Not Track is a preference you can set in your web browser to inform websites\n        that you do not want to be tracked.</p>\n    <p>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>\n\n    <h2>Your Data Protection Rights under the General Data Protection Regulation (GDPR)</h2>\n    <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Bushwick Mutual Aid LLC aims\n        to take reasonable steps to allow you to correct, amend, delete or limit the use of your Personal Data.</p>\n    <p>If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems,\n        please contact us.</p>\n    <p>In certain circumstances, you have the following data protection rights:</p>\n    <ul>\n        <li>\n            <p>\n                <strong>The right to access, update or delete the information we have on you.</strong> Whenever made possible, you\n                can access, update or request deletion of your Personal Data directly within your account settings section.\n                If you are unable to perform these actions yourself, please contact us to assist you.</p>\n        </li>\n        <li>\n            <p>\n                <strong>The right of rectification.</strong> You have the right to have your information rectified if that information\n                is inaccurate or incomplete.</p>\n        </li>\n        <li>\n            <p>\n                <strong>The right to object.</strong> You have the right to object to our processing of your Personal Data.</p>\n        </li>\n        <li>\n            <p>\n                <strong>The right of restriction.</strong> You have the right to request that we restrict the processing of your\n                personal information.</p>\n        </li>\n        <li>\n            <p>\n                <strong>The right to data portability.</strong> You have the right to be provided with a copy of the information\n                we have on you in a structured, machine-readable and commonly used format.</p>\n        </li>\n        <li>\n            <p>\n                <strong>The right to withdraw consent.</strong> You also have the right to withdraw your consent at any time where\n                Bushwick Mutual Aid LLC relied on your consent to process your personal information.</p>\n        </li>\n    </ul>\n    <p>Please note that we may ask you to verify your identity before responding to such requests.</p>\n\n    <p>You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For\n        more information, please contact your local data protection authority in the European Economic Area (EEA).</p>\n\n    <h2>Service Providers</h2>\n    <p>We may employ third party companies and individuals to facilitate our Service (\"Service Providers\"), provide the Service\n        on our behalf, perform Service-related services or assist us in analysing how our Service is used.</p>\n    <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not\n        to disclose or use it for any other purpose.</p>\n\n\n\n\n\n\n\n    <h2>Links to Other Sites</h2>\n    <p>Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be\n        directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>\n    <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party\n        sites or services.</p>\n\n\n    <h2>Children's Privacy</h2>\n    <p>Our Service does not address anyone under the age of 18 (\"Children\").</p>\n    <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent\n        or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become\n        aware that we have collected Personal Data from children without verification of parental consent, we take steps\n        to remove that information from our servers.</p>\n\n\n    <h2>Changes to This Privacy Policy</h2>\n    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy\n        on this page.</p>\n    <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update\n        the \"effective date\" at the top of this Privacy Policy.</p>\n    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective\n        when they are posted on this page.</p>\n\n\n    <h2>Contact Us</h2>\n    <p>If you have any questions about this Privacy Policy, please contact us:</p>\n    <ul>\n        <li>By visiting this page on our website: https://bushwickaid.firebaseapp.com/terms</li>\n\n    </ul>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class =\"help-container content container\">\n    <h1>How does this work?</h1>\n    <h3>This is a platform for people who need help during the covid-19 epidemic.  If you or someone you know needs assitance duing these times, click <a routerLink=\"/feed\">feed</a>\n    and describe what you need.</h3>\n<br>\n<h3>If you have time to volunteer click <a routerLink=\"/feed\">feed</a> and browse the feed for some way to help those in need.</h3>\n<br>\n<h3>for those who have continutal resources to distribute like food banks, medical supplies, transportation etc  - click <a routerLink=\"/resources\">Resources</a>  and fill out the form.  </h3>\n<br>\n<h3>For those who have funds to disibute  click <a routerLink=\"/support\"> support</a>.  We could use all the funds we can get. </h3>\n<br>\n<h3>For those who need food assitance click <a routerLink=\"/map\">map</a> to access all known food pantry'ds and food banks in the Bushwick area</h3>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>support works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _components_terms_terms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/terms/terms.component */ "./src/app/components/terms/terms.component.ts");
/* harmony import */ var _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/resources/resources.component */ "./src/app/components/resources/resources.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _guards_guard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/guard.guard */ "./src/app/guards/guard.guard.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/feed/feed.component */ "./src/app/components/feed/feed.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_join_join_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/join/join.component */ "./src/app/components/join/join.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");













const routes = [
    { path: '', component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_10__["LandingComponent"] },
    { path: 'join', component: _components_join_join_component__WEBPACK_IMPORTED_MODULE_9__["JoinComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'feed', component: _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"],
        canActivate: [_guards_guard_guard__WEBPACK_IMPORTED_MODULE_5__["GuardGuard"]] },
    { path: 'map', component: _components_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"],
        canActivate: [_guards_guard_guard__WEBPACK_IMPORTED_MODULE_5__["GuardGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        canActivate: [_guards_guard_guard__WEBPACK_IMPORTED_MODULE_5__["GuardGuard"]] },
    { path: 'resources', component: _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_2__["ResourcesComponent"],
        canActivate: [_guards_guard_guard__WEBPACK_IMPORTED_MODULE_5__["GuardGuard"]] },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"] },
    { path: 'terms', component: _components_terms_terms_component__WEBPACK_IMPORTED_MODULE_1__["TermsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Bushwick';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/resources/resources.component */ "./src/app/components/resources/resources.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email.service */ "./src/app/email.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/feed/feed.component */ "./src/app/components/feed/feed.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/confirm/confirm.component */ "./src/app/components/confirm/confirm.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_legal_legal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/legal/legal.component */ "./src/app/components/legal/legal.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_join_join_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/join/join.component */ "./src/app/components/join/join.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_post_resource_post_resource_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/post-resource/post-resource.component */ "./src/app/components/post-resource/post-resource.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _components_terms_terms_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/terms/terms.component */ "./src/app/components/terms/terms.component.ts");









// 1. Import the libs you need


































const firebaseConfig = {
    apiKey: "AIzaSyBX2A_gfZAxdGNlOoTb00scUL7ks8mrr4s",
    authDomain: "bushwickaid.firebaseapp.com",
    databaseURL: "https://bushwickaid.firebaseio.com",
    projectId: "bushwickaid",
    storageBucket: "bushwickaid.appspot.com",
    messagingSenderId: "782371018289",
    appId: "1:782371018289:web:83e0dce63ea6d502886710",
    measurementId: "G-M5M8ZJD8SD"
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
            _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_19__["FeedComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
            _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_22__["AboutComponent"],
            _components_legal_legal_component__WEBPACK_IMPORTED_MODULE_23__["LegalComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__["NavbarComponent"],
            _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_25__["LandingComponent"],
            _components_post_post_component__WEBPACK_IMPORTED_MODULE_26__["PostComponent"],
            _components_join_join_component__WEBPACK_IMPORTED_MODULE_27__["JoinComponent"],
            _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_35__["DialogComponent"],
            _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_2__["ResourcesComponent"],
            _support_support_component__WEBPACK_IMPORTED_MODULE_36__["SupportComponent"],
            _help_help_component__WEBPACK_IMPORTED_MODULE_37__["HelpComponent"],
            _components_map_map_component__WEBPACK_IMPORTED_MODULE_38__["MapComponent"],
            _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_2__["ResourcesComponent"],
            _components_post_resource_post_resource_component__WEBPACK_IMPORTED_MODULE_39__["PostResourceComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_40__["FooterComponent"],
            _components_terms_terms_component__WEBPACK_IMPORTED_MODULE_42__["TermsComponent"],
        ],
        imports: [
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(firebaseConfig),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_33__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatFormFieldModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatNativeDateModule"],
        ],
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_33__["MatCardModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatNativeDateModule"]
        ],
        providers: [_email_service__WEBPACK_IMPORTED_MODULE_4__["EmailService"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
        entryComponents: [
            _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_35__["DialogComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutComponent);



/***/ }),

/***/ "./src/app/components/confirm/confirm.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/confirm/confirm.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybS9jb25maXJtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/confirm/confirm.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/confirm/confirm.component.ts ***!
  \*********************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfirmComponent = class ConfirmComponent {
    constructor() { }
    ngOnInit() {
    }
};
ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm/confirm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm.component.css */ "./src/app/components/confirm/confirm.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ConfirmComponent);



/***/ }),

/***/ "./src/app/components/dialog/dialog.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/dialog/dialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../email.service */ "./src/app/email.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");





let DialogComponent = class DialogComponent {
    constructor(dialogRef, data, ps, email) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.ps = ps;
        this.email = email;
        this.currentUser = JSON.parse(localStorage.getItem('user'));
    }
    ngOnInit() {
        console.log(this.data);
    }
    onNoClick(id) {
        console.log("onNoClick firing");
        this.ps.updatePost(id, 2);
        console.log(this.data),
            this.data.claimedBy = this.currentUser.email;
        this.email.sendEmail(this.data).subscribe(data => {
            alert('claim confirmed - confirmation email sent.  Contact ' + this.data.name + " at " + this.data.contact);
            console.log(data);
            this.dialogRef.close();
        }, error => {
            console.log(JSON.stringify(error.json()));
        });
    }
};
DialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], DialogComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], DialogComponent.prototype, "time", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], DialogComponent.prototype, "location", void 0);
DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog.component.css */ "./src/app/components/dialog/dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"]])
], DialogComponent);



/***/ }),

/***/ "./src/app/components/feed/feed.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/feed/feed.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post-buttons{\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    padding:5% 10% 10% 10%;\n}\n.help-button{\n    width:200px;\n    height:200px;\n\n    font-size: 1.2em;\n\n\n}\n.safety-list{\n    list-style: none;\n    line-height: 1.2em;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWVkL2ZlZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixnQkFBZ0I7OztBQUdwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1idXR0b25ze1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgcGFkZGluZzo1JSAxMCUgMTAlIDEwJTtcbn1cbi5oZWxwLWJ1dHRvbntcbiAgICB3aWR0aDoyMDBweDtcbiAgICBoZWlnaHQ6MjAwcHg7XG5cbiAgICBmb250LXNpemU6IDEuMmVtO1xuXG5cbn1cbi5zYWZldHktbGlzdHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/components/feed/feed.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/feed/feed.component.ts ***!
  \***************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/resource.service */ "./src/app/services/resource.service.ts");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../email.service */ "./src/app/email.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");










let FeedComponent = class FeedComponent {
    constructor(ps, dialog, email, rs) {
        this.ps = ps;
        this.dialog = dialog;
        this.email = email;
        this.rs = rs;
        this.feedState = 0;
        this.displayedColumns = ["Task", "Location", "Time", "Claim"];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"];
    }
    ngOnInit() {
        this.ps.getPosts().subscribe(data => {
            let date = new _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]('en-US');
            this.openPosts = [];
            this.posts = data;
            this.postsCount = data.length;
            console.log(this.posts);
            for (let i = 0; i < this.posts.length; i++) {
                if (this.posts[i].claimedBy === "" && (this.posts[i].time.seconds * 1000) > Date.now() || this.posts[i].claimedBy === null && (this.posts[i].time.seconds * 1000) > Date.now()) {
                    this.openPosts.push(this.posts[i]);
                }
            }
            this.dataSource.data = this.openPosts;
            this.dataSource.paginator = this.paginator;
        });
        this.rs.getResources().subscribe(data => {
            this.resourcesCount = data.length;
        });
        this.ps.getUsers().subscribe(users => {
            this.userCount = users.length;
        });
    }
    ngAfterViewInit() {
        console.log("AFTER VIEW FIRING");
        console.log(this.dataSource);
    }
    canHelp() {
        console.log("can help");
        this.feedState = 1;
        document.getElementById('paginator').style.opacity = "1";
        this.dataSource.paginator = this.paginator;
    }
    needHelp() {
        this.feedState = 2;
    }
    goBack() {
        this.feedState = 0;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    claimClicked(id) {
        console.log(id);
        this.ps.updatePost(id, 2);
    }
    resources() {
        this.feedState = 3;
    }
    populate() {
        this.ps.populatePosts();
    }
    openDialog(id) {
        console.log(id);
        this.ps.getPost(id).subscribe(post => {
            this.currentPost = post;
            this.currentPost.id = id;
            console.log("open dialog being called");
            const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], {
                width: '50%',
                data: {
                    text: this.currentPost.text,
                    location: this.currentPost.location,
                    time: this.currentPost.time,
                    id: this.currentPost.id,
                    author: this.currentPost.author,
                    uid: this.currentPost.uid
                }
            });
        });
    }
};
FeedComponent.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"] },
    { type: _services_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], FeedComponent.prototype, "paginator", void 0);
FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-feed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/feed/feed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed.component.css */ "./src/app/components/feed/feed.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"], _services_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
], FeedComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-container{\n    background-color: #f07f0e;\n    height:150px;\n    padding: 2% 6% 0% 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwN2YwZTtcbiAgICBoZWlnaHQ6MTUwcHg7XG4gICAgcGFkZGluZzogMiUgNiUgMCUgNiU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/join/join.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/join/join.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9pbi9qb2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/join/join.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/join/join.component.ts ***!
  \***************************************************/
/*! exports provided: JoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinComponent", function() { return JoinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JoinComponent = class JoinComponent {
    constructor() { }
    ngOnInit() {
    }
};
JoinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-join',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./join.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/join/join.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./join.component.css */ "./src/app/components/join/join.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], JoinComponent);



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/landing/landing.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner{\n    background-image: url(/assets/BMA.jpg);\n    \n    width: 100%;\n    height: 414px;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNDQUFzQzs7SUFFdEMsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvQk1BLmpwZyk7XG4gICAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MTRweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let LandingComponent = class LandingComponent {
    constructor(auth, ps) {
        this.auth = auth;
        this.ps = ps;
    }
    ngOnInit() {
        this.ps.getUsers().subscribe(data => {
            this.userCount = data.length;
        });
        this.ps.getPosts().subscribe(posts => {
            this.postCount = posts.length;
        });
        this.ps.getUsers;
    }
    signUpGoogle() {
        this.auth.GoogleAuth();
    }
    signUpFacebook() {
        this.auth.FacebookAuth();
    }
};
LandingComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }
];
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.css */ "./src/app/components/landing/landing.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]])
], LandingComponent);



/***/ }),

/***/ "./src/app/components/legal/legal.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/legal/legal.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGVnYWwvbGVnYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/legal/legal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/legal/legal.component.ts ***!
  \*****************************************************/
/*! exports provided: LegalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalComponent", function() { return LegalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LegalComponent = class LegalComponent {
    constructor() { }
    ngOnInit() {
    }
};
LegalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-legal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./legal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/legal/legal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./legal.component.css */ "./src/app/components/legal/legal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LegalComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/map/map.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/map/map.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map-container{\n    padding: 5% 5% 10% 5%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiA1JSA1JSAxMCUgNSVcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MapComponent = class MapComponent {
    constructor() { }
    ngOnInit() {
    }
};
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.css */ "./src/app/components/map/map.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MapComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width:400px ){\n    .banner{\n        height: 200px;\n        background-position-x: 99%;\n    }\n    .mobile{\n        display:block;\n        background-color: #f07f0f;;\n    }\n    .notMobile{\n        display:none;\n    }\n    }\n.border-bottom-oj{\n    border-bottom: 2px solid orange;\n    margin-top:-20px;\n    color:white;\n    padding:25px\n}\n.nav-links{\n    display: -webkit-box;\n    display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  width: 85%;\n  height:80px\n}\n.mat-toolbar{\n    height:90px !important;\n\n}\n.mobile-menu{\n    background-color: orange;\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGFBQWE7UUFDYiwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGFBQWE7UUFDYix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtBQUNKO0lBQ0ksK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1g7QUFDSjtBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0VBQ2YscUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Y7QUFDRjtBQUNBO0lBQ0ksc0JBQXNCOztBQUUxQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQwMHB4ICl7XG4gICAgLmJhbm5lcntcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA5OSU7XG4gICAgfVxuICAgIC5tb2JpbGV7XG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDdmMGY7O1xuICAgIH1cbiAgICAubm90TW9iaWxle1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIH1cbi5ib3JkZXItYm90dG9tLW9qe1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBvcmFuZ2U7XG4gICAgbWFyZ2luLXRvcDotMjBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOjI1cHhcbn1cblxuLm5hdi1saW5rc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogODUlO1xuICBoZWlnaHQ6ODBweFxufVxuLm1hdC10b29sYmFye1xuICAgIGhlaWdodDo5MHB4ICFpbXBvcnRhbnQ7XG5cbn1cbi5tb2JpbGUtbWVudXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");




let NavbarComponent = class NavbarComponent {
    constructor(as, BreakpointObserver) {
        this.as = as;
        this.BreakpointObserver = BreakpointObserver;
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.links = ["profile", "feed", "info", "support"];
    }
    ngOnInit() {
        this.BreakpointObserver.observe([
            '(min-width: 400px)'
        ])
            .subscribe((state) => {
            if (state.matches) {
                this.mobile = true;
            }
            else {
                this.mobile = false;
            }
        });
        if (window.screen.width < 480) {
            this.mobile = true;
        }
        console.log(this.currentUser);
    }
    onLogoutClicked() {
        this.as.SignOut();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/post-resource/post-resource.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/post-resource/post-resource.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1yZXNvdXJjZS9wb3N0LXJlc291cmNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/post-resource/post-resource.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/post-resource/post-resource.component.ts ***!
  \*********************************************************************/
/*! exports provided: PostResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostResourceComponent", function() { return PostResourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/resource.service */ "./src/app/services/resource.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let PostResourceComponent = class PostResourceComponent {
    constructor(rs) {
        this.rs = rs;
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.minDate = (new Date()).toISOString();
    }
    ngOnInit() {
        this.minDate;
        console.log("date is " + this.minDate);
        this.inputForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'text': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]),
            'location': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'quantity': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'contact': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9) || _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])
        });
    }
    onSubmit() {
        let newResource = Object.assign(this.inputForm.value);
        console.log(newResource);
        this.rs.createResource(newResource);
    }
};
PostResourceComponent.ctorParameters = () => [
    { type: _services_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"] }
];
PostResourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-post-resource',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-resource.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-resource/post-resource.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-resource.component.css */ "./src/app/components/post-resource/post-resource.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
], PostResourceComponent);



/***/ }),

/***/ "./src/app/components/post/post.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/post/post.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let PostComponent = class PostComponent {
    constructor(ps) {
        this.ps = ps;
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.minDate = (new Date()).toISOString();
    }
    ngOnInit() {
        this.inputForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'text': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Description', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]),
            'location': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Location', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('When do you need this', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'contact': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Contact', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
        });
        console.log(this.inputForm);
    }
    logPost() {
        console.log(new Date(this.inputForm.value.date));
    }
    onSubmit() {
        let newPost = {
            text: this.inputForm.value.text,
            time: this.inputForm.value.date,
            location: this.inputForm.value.location,
            author: this.currentUser.displayName,
            contact: this.inputForm.value.contact
        };
        console.log(newPost);
        this.ps.createPost(newPost);
    }
};
PostComponent.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }
];
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.component.css */ "./src/app/components/post/post.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]])
], PostComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-label{\n    text-align: left !important;\n    padding:20px !important\n}\n\n.profile-container{\ndisplay:grid;\n    grid-template-columns: 1fr ;\n    gap:2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQjtBQUNKOztBQUVBO0FBQ0EsWUFBWTtJQUNSLDJCQUEyQjtJQUMzQixNQUFNO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWxhYmVse1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOjIwcHggIWltcG9ydGFudFxufVxuXG4ucHJvZmlsZS1jb250YWluZXJ7XG5kaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgO1xuICAgIGdhcDoyJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/resource.service */ "./src/app/services/resource.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");





let ProfileComponent = class ProfileComponent {
    constructor(ps, rs) {
        this.ps = ps;
        this.rs = rs;
        this.displayedColumns = ["Task", "Location", "Time", "Contact", "Cancel"];
        this.resourceTableColumns = ["Resource", "Location", "Available Time", "Contact", "Quantity", "Delete"];
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.currentTime = new Date();
    }
    ngOnInit() {
        // get users posts they've agreed to help with
        this.ps.getUserPosts().subscribe(data => {
            console.log(data);
            data.forEach(post => {
                console.log("firing");
                // parse date to human format
                console.log(post.time);
            });
            console.log(data);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        });
        // get users posts they have published
        this.ps.getUserPublishedPosts().subscribe(data => {
            console.log(data);
            data.forEach(post => {
                post.time = post.time.toDate();
            });
            this.publishedPosts = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        });
        // get user's resources they have on the open feed
        this.rs.getUserPublishedResources().subscribe(data => {
            console.log(data);
            data.forEach(post => {
                //  parse date
                post.date = post.date.toDate();
            });
            this.userResources = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            console.log(this.userResources);
        });
    }
    deleteClicked(id) {
        this.ps.deletePost(id);
    }
    cancelClicked(id) {
        console.log(id);
        this.ps.updatePost(id, 1);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _services_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _services_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/resources/resources.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/resources/resources.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post-buttons{\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    padding:5% 10% 10% 10%;\n}\n.help-button{\n    width:200px;\n    height:200px;\n\n    font-size: 1.2em;\n\n\n}\n.safety-list{\n    list-style: none;\n    line-height: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZXMvcmVzb3VyY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0lBRVosZ0JBQWdCOzs7QUFHcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc291cmNlcy9yZXNvdXJjZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWJ1dHRvbnN7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBwYWRkaW5nOjUlIDEwJSAxMCUgMTAlO1xufVxuLmhlbHAtYnV0dG9ue1xuICAgIHdpZHRoOjIwMHB4O1xuICAgIGhlaWdodDoyMDBweDtcblxuICAgIGZvbnQtc2l6ZTogMS4yZW07XG5cblxufVxuLnNhZmV0eS1saXN0e1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/resources/resources.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/resources/resources.component.ts ***!
  \*************************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../email.service */ "./src/app/email.service.ts");
/* harmony import */ var _services_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/resource.service */ "./src/app/services/resource.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");









let ResourcesComponent = class ResourcesComponent {
    constructor(router, rs, dialog, email) {
        this.router = router;
        this.rs = rs;
        this.dialog = dialog;
        this.email = email;
        this.feedState = 0;
        this.displayedColumns = ["Resource", "Time", "Location", "Quantity", "Available?", "Request"];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"];
    }
    ngOnInit() {
        this.rs.getResources().subscribe(data => {
            this.openResources = [];
            this.resources = data;
            this.resourceCount = data.length;
            console.log(this.resources);
            for (let i = 0; i < this.resources.length; i++) {
                if (this.resources[i].claimedBy === "" || this.resources[i].claimedBy === null) {
                    let formattedTime = new Date(this.resources[i].time);
                    this.resources[i].time = formattedTime;
                    this.openResources.push(this.resources[i]);
                }
            }
            this.dataSource.data = this.openResources;
            this.dataSource.paginator = this.paginator;
        });
    }
    needResources() {
        this.feedState = 1;
        document.getElementById('paginator').style.opacity = "1";
        this.dataSource.paginator = this.paginator;
    }
    haveResources() {
        this.feedState = 2;
    }
    startOver() {
        this.feedState = 0;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    populate() {
        this.rs.populateResources();
    }
    openDialog(id) {
        console.log(id);
        this.rs.getResource(id).subscribe(resource => {
            this.currentResource = resource;
            this.currentResource.id = id;
            console.log("open dialog being called");
            const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], {
                width: '50%',
                data: {
                    text: this.currentResource.text,
                    location: this.currentResource.location,
                    time: this.currentResource.time,
                    id: this.currentResource.id,
                    author: this.currentResource.author,
                    uid: this.currentResource.uid
                }
            });
        });
    }
};
ResourcesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], ResourcesComponent.prototype, "paginator", void 0);
ResourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-resources',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resources.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resources/resources.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resources.component.css */ "./src/app/components/resources/resources.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"]])
], ResourcesComponent);



/***/ }),

/***/ "./src/app/components/terms/terms.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/terms/terms.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVybXMvdGVybXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/terms/terms.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/terms/terms.component.ts ***!
  \*****************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TermsComponent = class TermsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./terms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/terms/terms.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./terms.component.css */ "./src/app/components/terms/terms.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TermsComponent);



/***/ }),

/***/ "./src/app/email.service.ts":
/*!**********************************!*\
  !*** ./src/app/email.service.ts ***!
  \**********************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EmailService = class EmailService {
    constructor(http) {
        this.http = http;
    }
    extractData(res) {
        let body = res.json();
        return body || {};
    }
    handleErrorPromise(error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
    sendEmail(details) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post("https://us-central1-bushwickaid.cloudfunctions.net/contactUs", JSON.stringify(details));
    }
};
EmailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], EmailService);



/***/ }),

/***/ "./src/app/guards/guard.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/guard.guard.ts ***!
  \***************************************/
/*! exports provided: GuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardGuard", function() { return GuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GuardGuard = class GuardGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        else {
            return this.router.navigate(['/help']);
        }
    }
};
GuardGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], GuardGuard);



/***/ }),

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".help-container{\n    margin: 5% 25% 10% 25% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9oZWxwL2hlbHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWxwLWNvbnRhaW5lcntcbiAgICBtYXJnaW46IDUlIDI1JSAxMCUgMjUlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelpComponent = class HelpComponent {
    constructor() { }
    ngOnInit() {
    }
};
HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HelpComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);






let AuthService = class AuthService {
    constructor(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.loggedin = false;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(user => {
            if (user) {
                console.log("user logged in");
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
                console.log("user populated");
                console.log(localStorage.getItem('user'));
                console.log(this.isLoggedIn);
            }
            else {
                localStorage.setItem('user', null);
            }
        });
    }
    // Sign in with email/password
    SignIn(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            console.log('sign in call back firing');
            this.ngZone.run(() => {
                console.log("ng zone firing");
                this.router.navigate(['feed']);
            });
            this.SetUserData(result.user);
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    // Sign up with email/password
    SignUp(email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            this.SendVerificationMail();
            this.SetUserData(result.user);
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    // Send email verfificaiton when new user sign up
    SendVerificationMail() {
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(() => {
            this.router.navigate(['verify-email']);
        });
    }
    // Reset Forggot password
    ForgotPassword(passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
            window.alert('Password reset email sent, check your inbox.');
        }).catch((error) => {
            window.alert(error);
        });
    }
    // Returns ID of logged in user
    // Returns true when user is looged in and email is verified
    get isLoggedIn() {
        let x;
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null) ? true : false;
    }
    // Sign in with Google
    GoogleAuth() {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider());
    }
    FacebookAuth() {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider());
    }
    get authenticated() {
        return this.afAuth.authState !== null;
    }
    // Auth logic to run auth providers
    AuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .then((result) => {
            console.log(result);
            console.log(this.isLoggedIn);
            this.ngZone.run(() => {
                console.log(this.isLoggedIn);
                setTimeout(() => {
                    console.log(this.isLoggedIn);
                    this.router.navigate(['/help'])
                        .catch((err) => window.alert(err));
                }, 1000);
                this.router.navigate(['/help']);
            });
            this.SetUserData(result.user);
        }).catch((error) => {
            window.alert(error);
        });
    }
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
        };
        return userRef.set(userData, {
            merge: true
        });
    }
    // Sign out 
    SignOut() {
        console.log('signout called');
        return this.afAuth.auth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['']);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] // NgZone service to remove outside scope warning
     }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] // NgZone service to remove outside scope warning
    ])
], AuthService);



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let PostService = class PostService {
    constructor(router, afs) {
        this.router = router;
        this.afs = afs;
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.documentToDomainObject = _ => {
            const object = _.payload.doc.data();
            object.id = _.payload.doc.id;
            return object;
        };
        this.postsCollection = afs.collection("Posts");
        this.users =
            this.afs.collection('users').snapshotChanges();
        this.posts =
            this.afs.collection('Posts').snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(this.documentToDomainObject)));
    }
    populatePosts() {
        let names = ["mr joe", "ms baker", "earl swetshirt", "old man jenkins", "carl carlson", "mr doobles"];
        let needs = ["can someone get my laundry", "can someone walk my dog", "can someone buy me food", "can someone call my house"];
        let contact = "123456789";
        let time = Date.now();
        let location = "bushwick brooklyn";
        for (let i = 0; i < 50; i++) {
            let num1 = (Math.floor(Math.random() * (5 - 0 + 1)) + 0);
            let num2 = (Math.floor(Math.random() * (3 - 0 + 1)) + 0);
            console.log(num1, num2);
            let post = {
                author: names[num1],
                text: needs[num2],
                contact: contact,
                time: Date.now(),
                location: location,
            };
            console.log(post);
            this.createPost(post);
        }
    }
    createPost(post) {
        console.log(this.currentUser);
        post.uid = this.currentUser['uid'];
        post.claimedBy = "";
        this.postsCollection.add(post).then(() => this.router.navigate(['/profile']));
    }
    deletePost(id) {
        this.afs.doc('Posts/' + id).delete();
    }
    getUsers() {
        return this.users;
    }
    getPosts() {
        return this.afs.collection('Posts').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(this.documentToDomainObject)));
    }
    getPost(id) {
        return this.afs.doc('Posts/' + id).valueChanges();
    }
    getUserPosts() {
        return this.afs.collection('Posts', ref => ref.where('claimedBy', '==', `${this.currentUser.uid}`)).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(this.documentToDomainObject)));
    }
    getUserPublishedPosts() {
        return this.afs.collection('Posts', ref => ref.where('uid', '==', `${this.currentUser.uid}`)).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(this.documentToDomainObject)));
    }
    updatePost(id, num) {
        console.log("updating post");
        console.log(id, num);
        this.postDoc = this.afs.doc('Posts/' + `${id}`);
        if (num === 1) {
            this.postDoc.update({ claimedBy: null });
        }
        if (num === 2) {
            this.postDoc.update({ claimedBy: this.currentUser.uid });
        }
    }
};
PostService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
], PostService);



/***/ }),

/***/ "./src/app/services/resource.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/resource.service.ts ***!
  \**********************************************/
/*! exports provided: ResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceService", function() { return ResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ResourceService = class ResourceService {
    constructor(router, afs) {
        this.router = router;
        this.afs = afs;
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.documentToDomainObject = _ => {
            const object = _.payload.doc.data();
            object.id = _.payload.doc.id;
            return object;
        };
        this.resourceCollection = afs.collection("Resources");
        this.resources =
            this.afs.collection("Resources").snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(this.documentToDomainObject)));
    }
    createResource(resource) {
        alert("Resource created: " + resource);
        resource.uid = this.currentUser['uid'];
        resource.claimedBy = "";
        this.resourceCollection.add(resource)
            .then((resource) => this.router.navigate(['/profile'])).then();
    }
    deleteResource(id) {
        this.afs.doc('Resources/' + id).delete();
    }
    getResources() {
        return this.afs.collection('Resources').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(this.documentToDomainObject)));
    }
    getResource(id) {
        return this.afs.doc('Resources/' + id).valueChanges();
    }
    getUserResources() {
        return this.afs.collection('Resources', ref => ref.where('claimedBy', '==', `${this.currentUser.uid}`)).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(this.documentToDomainObject)));
    }
    getUserPublishedResources() {
        return this.afs.collection('Resources', ref => ref.where('uid', '==', `${this.currentUser.uid}`)).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(this.documentToDomainObject)));
    }
    updateResource(id, num) {
        console.log("updating post");
        console.log(id, num);
        this.resourceDoc = this.afs.doc('Resources/' + `${id}`);
        if (num === 1) {
            this.resourceDoc.update({ claimedBy: null });
        }
        if (num === 2) {
            this.resourceDoc.update({ claimedBy: this.currentUser.uid });
        }
    }
    populateResources() {
        let names = ["mr joe", "ms baker", "earl swetshirt", "old man jenkins", "carl carlson", "mr doobles", "Mike Bloomberg"];
        let needs = ["I have a food bank", "I have medical supplies", "I can walk dogs", "I can dishes", "I can translate spanish"];
        let contact = "123456789";
        let time = Date.now();
        let location = "bushwick brooklyn";
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                console.log("waiting .2 seconds"), 200;
            });
            let num1 = Math.floor((Math.random() * 6));
            let num2 = Math.floor((Math.random() * 4));
            console.log(num1, num2);
            let resource = {
                author: names[num1],
                text: needs[num2],
                contact: contact,
                time: Date.now(),
                location: location,
                numberAvailable: Math.floor((Math.random() * 100)),
                isAvailable: true
            };
            console.log(resource);
            this.createResource(resource);
        }
    }
};
ResourceService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], ResourceService);



/***/ }),

/***/ "./src/app/support/support.component.css":
/*!***********************************************!*\
  !*** ./src/app/support/support.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SupportComponent = class SupportComponent {
    constructor() { }
    ngOnInit() {
    }
};
SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-support',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./support.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./support.component.css */ "./src/app/support/support.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SupportComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/timmckiernan/Desktop/Bushwick/Bushwick/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map