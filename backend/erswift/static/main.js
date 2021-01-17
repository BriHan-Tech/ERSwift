(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/brihan/Desktop/ERSwift/frontend/erswift/src/main.ts */"zUnb");


/***/ }),

/***/ "18gs":
/*!******************************************************************!*\
  !*** ./src/app/error-pages/bad-request/bad-request.component.ts ***!
  \******************************************************************/
/*! exports provided: BadRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadRequestComponent", function() { return BadRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return [""]; };
class BadRequestComponent {
    constructor() { }
    ngOnInit() {
    }
}
BadRequestComponent.ɵfac = function BadRequestComponent_Factory(t) { return new (t || BadRequestComponent)(); };
BadRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadRequestComponent, selectors: [["app-bad-request"]], decls: 11, vars: 2, consts: [[1, "bad-request"], [1, "bad-request__main"], [1, "bad-request__sub-text"], [1, "bad-request__info"], [1, "bad-request__button", "btn", "btn--blue", 3, "routerLink"]], template: function BadRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Uh-Oh!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "This Was A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Bad Request!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go Back Home!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.4rem;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.2) scaleY(1.6);\n  opacity: 0;\n}\n\n.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(-1px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n\n.btn--blue[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  color: #fff;\n}\n\n.btn--blue[_ngcontent-%COMP%]::after {\n  background-color: #2876b1;\n}\n\n.btn--red[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #fff;\n}\n\n.btn--red[_ngcontent-%COMP%]::after {\n  background-color: red;\n}\n\n.btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated[_ngcontent-%COMP%] {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.bad-request[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  top: -25px;\n}\n\n.bad-request__main[_ngcontent-%COMP%] {\n  color: #2876b1;\n  font-size: 200px;\n}\n\n.bad-request__sub-text[_ngcontent-%COMP%] {\n  margin-top: -40px;\n  color: #2876b1;\n  font-size: 80px;\n  margin-bottom: 10px;\n}\n\n.bad-request__info[_ngcontent-%COMP%] {\n  color: #23689c;\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 30px;\n}\n\n.bad-request__button[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px;\n  text-align: center;\n  width: 320px;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYmFzZS9fYmFzZS5zY3NzIiwic3JjL2FwcC9lcnJvci1wYWdlcy9iYWQtcmVxdWVzdC9iYWQtcmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvYmFzZS9fdHlwb2dyYXBoeS5zY3NzIiwic3JjL3N0eWxlcy9jb21wb25lbnRzL19idXR0b24uc2NzcyIsInNyYy9zdHlsZXMvYWJzdHJhY3QvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBQ0pBO0VBQ0ksaUNBQUE7QURPSjs7QUVQSTtFQUdJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxZQUFBO0VBQ0EsZUFBQTtBRk1SOztBRUhJO0VBQ0ksMkJBQUE7RUFDQSwwQ0FBQTtBRktSOztBRUhRO0VBQ0ksa0NBQUE7RUFDQSxVQUFBO0FGS1o7O0FFREk7RUFFSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtBRkVSOztBRUNJO0VBQ0kseUJDcENRO0VEcUNSLFdDbENNO0FIbUNkOztBRUNRO0VBQ0kseUJDeENJO0FIeUNoQjs7QUVHSTtFQUNJLHFCQUFBO0VBQ0EsV0MzQ007QUgwQ2Q7O0FFR1E7RUFDSSxxQkFBQTtBRkRaOztBRUtJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUZIUjs7QUVNSTtFQUNJLDJDQUFBO0VBQ0EsOEJBQUE7QUZKUjs7QUE5REE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFpRUo7O0FBL0RJO0VBQ0ksY0diUTtFSGNSLGdCQUFBO0FBaUVSOztBQTlESTtFQUNJLGlCQUFBO0VBQ0EsY0duQlE7RUhvQlIsZUFBQTtFQUNBLG1CQUFBO0FBZ0VSOztBQTdESTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQStEUjs7QUE1REk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FBNkRSIiwiZmlsZSI6InNyYy9hcHAvZXJyb3ItcGFnZXMvYmFkLXJlcXVlc3QvYmFkLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcblxuLmJhZC1yZXF1ZXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRvcDogLTI1cHg7XG5cbiAgICAmX19tYWluIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBmb250LXNpemU6IDIwMHB4O1xuICAgIH1cblxuICAgICZfX3N1Yi10ZXh0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgICZfX2luZm8ge1xuICAgICAgICBjb2xvcjogZGFya2VuKCRjb2xvci1wcmltYXJ5LCA1JSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMzIwcHg7XG5cbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbn0iLCJib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59IiwiLmJ0biB7XG4gICAgJixcbiAgICAmOmxpbmssXG4gICAgJjp2aXNpdGVkIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuXG4gICAgICAgIC8vQ2hhbmdlIGZvciB0aGUgPGJ1dHRvbj4gZWxlbWVudFxuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgkY29sb3ItYmxhY2ssLjIpO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMikgc2NhbGVZKDEuNik7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKCRjb2xvci1ibGFjaywuMik7XG4gICAgfVxuICAgIFxuICAgICYtLWJsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXJlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XG4gICAgfVxuICAgIFxuICAgICYtLWFuaW1hdGVkIHtcbiAgICAgICAgYW5pbWF0aW9uOiBtb3ZlSW5Cb3R0b20gLjVzIGVhc2Utb3V0IC43NXM7XG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcbiAgICB9XG59IiwiJGNvbG9yLXByaW1hcnk6ICMyODc2YjE7XG5cbiRjb2xvci1ibGFjazogIzAwMDA7XG4kY29sb3Itd2hpdGU6ICNmZmY7XG5cbiRjb2xvci1kdWxsLXdoaXRlOiByZ2IoMjEyLCAyMTIsIDIxMik7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BadRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bad-request',
                templateUrl: './bad-request.component.html',
                styleUrls: ['./bad-request.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_http_get_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http-get.service */ "q5kq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function HomeComponent_h1_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome! ", ctx_r0.username, "");
} }
function HomeComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " At ERSwift our goal is to improve the speed at which emergency rooms operate. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Check in to an emergency room and reduce the unnecessary anxiety of a waiting area. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Using our automated triage system, patients are put in queue in the most optimal positions, to ensure maximum efficiency. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/emergency-check-in"]; };
function HomeComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Emergency Check-In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/check-in"]; };
function HomeComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Check-In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/queue-position"]; };
function HomeComponent_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Queue Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["/doctor/login"]; };
function HomeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_11_div_1_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_11_div_2_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_11_div_3_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Doctor Log In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c3));
} }
const _c4 = function () { return ["/doctor/dashboard"]; };
function HomeComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_12_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Log Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
} }
class HomeComponent {
    constructor(authService, httpGetService) {
        this.authService = authService;
        this.httpGetService = httpGetService;
    }
    ngOnInit() {
        this.user_id = +localStorage.getItem("user_id");
        this.triage = +localStorage.getItem("triage");
        this.username = localStorage.getItem("username");
        this.checkUser();
    }
    checkUser() {
        // If Patient is Dismissed, we Remove the user_id
        if (this.user_id) {
            if (this.triage == 1) {
                this.httpGetService.verifyPriorityPatient(this.user_id).subscribe();
            }
            else {
                this.httpGetService.verifyPatientList(this.user_id).subscribe();
            }
        }
    }
    logout() {
        this.authService.logout();
        window.location.reload();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_get_service__WEBPACK_IMPORTED_MODULE_2__["HttpGetService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 4, consts: [[1, "home"], [1, "home__header"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "305", "height", "324", "viewBox", "0 0 305 324", 1, "home__header__logo"], ["x", "2", "y", "64", "width", "301", "height", "198", 0, "xlink", "href", "data:img/png;base64,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"], ["x", "58", "y", "134", "width", "131", "height", "58", 0, "xlink", "href", "data:img/png;base64,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"], ["x", "95", "y", "204", "width", "133", "height", "58", 0, "xlink", "href", "data:img/png;base64,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"], [1, "home__header__title"], [4, "ngIf"], [1, "home__info"], ["class", "", 4, "ngIf"], ["class", "home__button-list", 4, "ngIf"], [1, ""], [1, "home__button-list"], ["class", "home__button-list__button btn btn--blue", 3, "routerLink", 4, "ngIf"], [1, "home__button-list__button", "btn", "btn--blue", 3, "routerLink"], [1, "home__button-list__button", "btn", "btn--blue", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "image", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "image", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "image", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ERSwift");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_h1_8_Template, 2, 1, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_span_10_Template, 7, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_11_Template, 6, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_12_Template, 5, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.4rem;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.2) scaleY(1.6);\n  opacity: 0;\n}\n\n.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(-1px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n\n.btn--blue[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  color: #fff;\n}\n\n.btn--blue[_ngcontent-%COMP%]::after {\n  background-color: #2876b1;\n}\n\n.btn--red[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #fff;\n}\n\n.btn--red[_ngcontent-%COMP%]::after {\n  background-color: red;\n}\n\n.btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated[_ngcontent-%COMP%] {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.home[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #2876b1;\n}\n\n.home__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.home__header__logo[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n  position: relative;\n  left: -10px;\n}\n\n.home__info[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: center;\n  font-size: 15px;\n}\n\n.home__button-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.home__button-list__button[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-align: center;\n  width: 80%;\n}\n\n@media screen and (min-width: 481px) {\n  .home__info[_ngcontent-%COMP%] {\n    width: 75%;\n    font-size: 18px;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .home__button-list__button[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .home[_ngcontent-%COMP%] {\n    top: 45%;\n  }\n  .home__button-list[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n  .home__button-list__button[_ngcontent-%COMP%] {\n    padding: 10px 30px 10px 30px;\n    margin: 10px;\n    margin-top: 30px;\n    margin-bottom: 0px;\n    width: auto;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .home__info[_ngcontent-%COMP%] {\n    width: 800px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYmFzZS9fYmFzZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL2Jhc2UvX3R5cG9ncmFwaHkuc2NzcyIsInNyYy9zdHlsZXMvY29tcG9uZW50cy9fYnV0dG9uLnNjc3MiLCJzcmMvc3R5bGVzL2Fic3RyYWN0L192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QUNKQTtFQUNJLGlDQUFBO0FET0o7O0FFUEk7RUFHSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBR0EsWUFBQTtFQUNBLGVBQUE7QUZNUjs7QUVISTtFQUNJLDJCQUFBO0VBQ0EsMENBQUE7QUZLUjs7QUVIUTtFQUNJLGtDQUFBO0VBQ0EsVUFBQTtBRktaOztBRURJO0VBRUksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNENBQUE7QUZFUjs7QUVDSTtFQUNJLHlCQ3BDUTtFRHFDUixXQ2xDTTtBSG1DZDs7QUVDUTtFQUNJLHlCQ3hDSTtBSHlDaEI7O0FFR0k7RUFDSSxxQkFBQTtFQUNBLFdDM0NNO0FIMENkOztBRUdRO0VBQ0kscUJBQUE7QUZEWjs7QUVLSTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FGSFI7O0FFTUk7RUFDSSwyQ0FBQTtFQUNBLDhCQUFBO0FGSlI7O0FBOURBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0dQWTtBSHdFaEI7O0FBOURJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFnRVI7O0FBOURRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFnRVo7O0FBNURJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQThEUjs7QUEzREk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUE2RFI7O0FBM0RRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUE2RFo7O0FBdkRBO0VBRVE7SUFDSSxVQUFBO0lBQ0EsZUFBQTtJQUVBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLDJCQUFBO0VBd0RWO0VBcERVO0lBQ0ksVUFBQTtFQXNEZDtBQUNGOztBQWhEQTtFQUNJO0lBQ0ksUUFBQTtFQWtETjtFQWhETTtJQUNJLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQWtEVjtFQWhEVTtJQUNJLDRCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VBa0RkO0FBQ0Y7O0FBM0NBO0VBRVE7SUFDSSxZQUFBO0VBNENWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xufSIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG4uaG9tZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG5cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgJl9fbG9nbyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19pbmZvIHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uLWxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmX19idXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xuICAgIC5ob21lIHtcbiAgICAgICAgJl9faW5mbyB7XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAmX19idXR0b24tbGlzdCB7XG4gICAgICAgICAgICAmX19idXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgIC5ob21lIHtcbiAgICAgICAgdG9wOiA0NSU7XG5cbiAgICAgICAgJl9fYnV0dG9uLWxpc3Qge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICAgICAgICAgICZfX2J1dHRvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG4gICAgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5ob21lIHtcbiAgICAgICAgJl9faW5mbyB7XG4gICAgICAgICAgICB3aWR0aDogODAwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59IiwiYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufSIsIi5idG4ge1xuICAgICYsXG4gICAgJjpsaW5rLFxuICAgICY6dmlzaXRlZCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcblxuICAgICAgICAvL0NoYW5nZSBmb3IgdGhlIDxidXR0b24+IGVsZW1lbnRcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoJGNvbG9yLWJsYWNrLC4yKTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjIpIHNjYWxlWSgxLjYpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgkY29sb3ItYmxhY2ssLjIpO1xuICAgIH1cbiAgICBcbiAgICAmLS1ibHVlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1yZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgIH1cbiAgICBcbiAgICAmLS1hbmltYXRlZCB7XG4gICAgICAgIGFuaW1hdGlvbjogbW92ZUluQm90dG9tIC41cyBlYXNlLW91dCAuNzVzO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XG4gICAgfVxufSIsIiRjb2xvci1wcmltYXJ5OiAjMjg3NmIxO1xuXG4kY29sb3ItYmxhY2s6ICMwMDAwO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuXG4kY29sb3ItZHVsbC13aGl0ZTogcmdiKDIxMiwgMjEyLCAyMTIpOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_http_get_service__WEBPACK_IMPORTED_MODULE_2__["HttpGetService"] }]; }, null); })();


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

/***/ "HF9R":
/*!**************************************************************!*\
  !*** ./src/app/error-pages/forbidden/forbidden.component.ts ***!
  \**************************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/home"]; };
class ForbiddenComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForbiddenComponent.ɵfac = function ForbiddenComponent_Factory(t) { return new (t || ForbiddenComponent)(); };
ForbiddenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForbiddenComponent, selectors: [["app-forbidden"]], decls: 11, vars: 2, consts: [[1, "forbidden"], [1, "forbidden__main"], [1, "forbidden__sub-text"], [1, "forbidden__info"], [1, "forbidden__button", "btn", "btn--blue", 3, "routerLink"]], template: function ForbiddenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "403");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Uh-Oh!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "There is a Wall! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " (Permission Denied) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go Back Home!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.4rem;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.2) scaleY(1.6);\n  opacity: 0;\n}\n\n.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(-1px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n\n.btn--blue[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  color: #fff;\n}\n\n.btn--blue[_ngcontent-%COMP%]::after {\n  background-color: #2876b1;\n}\n\n.btn--red[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #fff;\n}\n\n.btn--red[_ngcontent-%COMP%]::after {\n  background-color: red;\n}\n\n.btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated[_ngcontent-%COMP%] {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.forbidden[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  top: -25px;\n}\n\n.forbidden__main[_ngcontent-%COMP%] {\n  color: #2876b1;\n  font-size: 200px;\n}\n\n.forbidden__sub-text[_ngcontent-%COMP%] {\n  margin-top: -40px;\n  color: #2876b1;\n  font-size: 80px;\n  margin-bottom: 10px;\n}\n\n.forbidden__info[_ngcontent-%COMP%] {\n  color: #23689c;\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 30px;\n}\n\n.forbidden__button[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px;\n  text-align: center;\n  width: 320px;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYmFzZS9fYmFzZS5zY3NzIiwic3JjL2FwcC9lcnJvci1wYWdlcy9mb3JiaWRkZW4vZm9yYmlkZGVuLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9iYXNlL190eXBvZ3JhcGh5LnNjc3MiLCJzcmMvc3R5bGVzL2NvbXBvbmVudHMvX2J1dHRvbi5zY3NzIiwic3JjL3N0eWxlcy9hYnN0cmFjdC9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FDSkE7RUFDSSxpQ0FBQTtBRE9KOztBRVBJO0VBR0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUdBLFlBQUE7RUFDQSxlQUFBO0FGTVI7O0FFSEk7RUFDSSwyQkFBQTtFQUNBLDBDQUFBO0FGS1I7O0FFSFE7RUFDSSxrQ0FBQTtFQUNBLFVBQUE7QUZLWjs7QUVESTtFQUVJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0FGRVI7O0FFQ0k7RUFDSSx5QkNwQ1E7RURxQ1IsV0NsQ007QUhtQ2Q7O0FFQ1E7RUFDSSx5QkN4Q0k7QUh5Q2hCOztBRUdJO0VBQ0kscUJBQUE7RUFDQSxXQzNDTTtBSDBDZDs7QUVHUTtFQUNJLHFCQUFBO0FGRFo7O0FFS0k7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBRkhSOztBRU1JO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtBRkpSOztBQTlEQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQWlFSjs7QUEvREk7RUFDSSxjR2JRO0VIY1IsZ0JBQUE7QUFpRVI7O0FBOURJO0VBQ0ksaUJBQUE7RUFDQSxjR25CUTtFSG9CUixlQUFBO0VBQ0EsbUJBQUE7QUFnRVI7O0FBN0RJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBK0RSOztBQTVESTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7QUE2RFIiLCJmaWxlIjoic3JjL2FwcC9lcnJvci1wYWdlcy9mb3JiaWRkZW4vZm9yYmlkZGVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbi5mb3JiaWRkZW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAtMjVweDtcblxuICAgICZfX21haW4ge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gICAgfVxuXG4gICAgJl9fc3ViLXRleHQge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgJl9faW5mbyB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDUlKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzMjBweDtcblxuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufSIsImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn0iLCIuYnRuIHtcbiAgICAmLFxuICAgICY6bGluayxcbiAgICAmOnZpc2l0ZWQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG5cbiAgICAgICAgLy9DaGFuZ2UgZm9yIHRoZSA8YnV0dG9uPiBlbGVtZW50XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKCRjb2xvci1ibGFjaywuMik7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4yKSBzY2FsZVkoMS42KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoJGNvbG9yLWJsYWNrLC4yKTtcbiAgICB9XG4gICAgXG4gICAgJi0tYmx1ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cztcbiAgICB9XG4gICAgXG4gICAgJi0tYW5pbWF0ZWQge1xuICAgICAgICBhbmltYXRpb246IG1vdmVJbkJvdHRvbSAuNXMgZWFzZS1vdXQgLjc1cztcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xuICAgIH1cbn0iLCIkY29sb3ItcHJpbWFyeTogIzI4NzZiMTtcblxuJGNvbG9yLWJsYWNrOiAjMDAwMDtcbiRjb2xvci13aGl0ZTogI2ZmZjtcblxuJGNvbG9yLWR1bGwtd2hpdGU6IHJnYigyMTIsIDIxMiwgMjEyKTsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForbiddenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forbidden',
                templateUrl: './forbidden.component.html',
                styleUrls: ['./forbidden.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "N7r8":
/*!******************************************************************!*\
  !*** ./src/app/back-button-shell/back-button-shell.component.ts ***!
  \******************************************************************/
/*! exports provided: BackButtonShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButtonShellComponent", function() { return BackButtonShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return [""]; };
class BackButtonShellComponent {
    constructor() { }
    ngOnInit() {
    }
}
BackButtonShellComponent.ɵfac = function BackButtonShellComponent_Factory(t) { return new (t || BackButtonShellComponent)(); };
BackButtonShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackButtonShellComponent, selectors: [["app-back-button-shell"]], decls: 4, vars: 2, consts: [[1, "back-button", 3, "routerLink"]], template: function BackButtonShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2039");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.4rem;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.2) scaleY(1.6);\n  opacity: 0;\n}\n\n.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(-1px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n\n.btn--blue[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  color: #fff;\n}\n\n.btn--blue[_ngcontent-%COMP%]::after {\n  background-color: #2876b1;\n}\n\n.btn--red[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #fff;\n}\n\n.btn--red[_ngcontent-%COMP%]::after {\n  background-color: red;\n}\n\n.btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated[_ngcontent-%COMP%] {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  height: 50px;\n  width: 50px;\n  position: relative;\n  top: 20px;\n  left: 20px;\n  border-radius: 50px;\n}\n\n.back-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.back-button[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: inline-block;\n  padding: 0px 15px;\n  position: relative;\n  top: -8px;\n  font-size: 50px;\n  color: white;\n}\n\n.back-button[_ngcontent-%COMP%]:hover {\n  background-color: #1f5a87;\n}\n\n@media screen and (min-width: 481px) {\n  .back-button[_ngcontent-%COMP%] {\n    top: 30px;\n    left: 30px;\n  }\n}\n\n@media screen and (min-width: 770px) {\n  .back-button[_ngcontent-%COMP%] {\n    top: 30px;\n    left: 50px;\n  }\n}\n\n@media screen and (min-width: 1025px) {\n  .back-button[_ngcontent-%COMP%] {\n    top: 40px;\n    left: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYmFzZS9fYmFzZS5zY3NzIiwic3JjL2FwcC9iYWNrLWJ1dHRvbi1zaGVsbC9iYWNrLWJ1dHRvbi1zaGVsbC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvYmFzZS9fdHlwb2dyYXBoeS5zY3NzIiwic3JjL3N0eWxlcy9jb21wb25lbnRzL19idXR0b24uc2NzcyIsInNyYy9zdHlsZXMvYWJzdHJhY3QvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9hYnN0cmFjdC9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FDSkE7RUFDSSxpQ0FBQTtBRE9KOztBRVBJO0VBR0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUdBLFlBQUE7RUFDQSxlQUFBO0FGTVI7O0FFSEk7RUFDSSwyQkFBQTtFQUNBLDBDQUFBO0FGS1I7O0FFSFE7RUFDSSxrQ0FBQTtFQUNBLFVBQUE7QUZLWjs7QUVESTtFQUVJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0FGRVI7O0FFQ0k7RUFDSSx5QkNwQ1E7RURxQ1IsV0NsQ007QUhtQ2Q7O0FFQ1E7RUFDSSx5QkN4Q0k7QUh5Q2hCOztBRUdJO0VBQ0kscUJBQUE7RUFDQSxXQzNDTTtBSDBDZDs7QUVHUTtFQUNJLHFCQUFBO0FGRFo7O0FFS0k7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBRkhSOztBRU1JO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtBRkpSOztBQTlEQTtFQUNJLHlCR0hZO0VISVosWUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFnRUo7O0FJekVJO0VBQ0ksYUFBQTtBSjJFUjs7QUEvREk7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQWlFUjs7QUE5REk7RUFDSSx5QkFBQTtBQWdFUjs7QUEzREE7RUFDSTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VBOEROO0FBQ0Y7O0FBM0RBO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsVUFBQTtFQTZETjtBQUNGOztBQTFEQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFVBQUE7RUE0RE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JhY2stYnV0dG9uLXNoZWxsL2JhY2stYnV0dG9uLXNoZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuLmJhY2stYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcblxuICAgIEBpbmNsdWRlIG5vLXNlbGVjdC1pbnB1dCgpO1xuXG4gICAgaDEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtOHB4O1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCUpXG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDgxcHgpIHtcbiAgICAuYmFjay1idXR0b24ge1xuICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgIGxlZnQ6IDMwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc3MHB4KSB7XG4gICAgLmJhY2stYnV0dG9uIHtcbiAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICBsZWZ0OiA1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI1cHgpIHtcbiAgICAuYmFjay1idXR0b24ge1xuICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgfVxufSIsImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn0iLCIuYnRuIHtcbiAgICAmLFxuICAgICY6bGluayxcbiAgICAmOnZpc2l0ZWQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG5cbiAgICAgICAgLy9DaGFuZ2UgZm9yIHRoZSA8YnV0dG9uPiBlbGVtZW50XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKCRjb2xvci1ibGFjaywuMik7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4yKSBzY2FsZVkoMS42KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoJGNvbG9yLWJsYWNrLC4yKTtcbiAgICB9XG4gICAgXG4gICAgJi0tYmx1ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cztcbiAgICB9XG4gICAgXG4gICAgJi0tYW5pbWF0ZWQge1xuICAgICAgICBhbmltYXRpb246IG1vdmVJbkJvdHRvbSAuNXMgZWFzZS1vdXQgLjc1cztcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xuICAgIH1cbn0iLCIkY29sb3ItcHJpbWFyeTogIzI4NzZiMTtcblxuJGNvbG9yLWJsYWNrOiAjMDAwMDtcbiRjb2xvci13aGl0ZTogI2ZmZjtcblxuJGNvbG9yLWR1bGwtd2hpdGU6IHJnYigyMTIsIDIxMiwgMjEyKTsiLCJAbWl4aW4gbm8tc2VsZWN0LWlucHV0IHtcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG59XG5cbkBtaXhpbiBmb3Jtc01peGluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB9XG5cbiAgICAmX19mb3JtIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgICAmX19zZWN0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAmX19sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX2ZpZWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG5vLXNlbGVjdC1pbnB1dCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGV4dGFyZWEge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX19zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaXMtaW52YWxpZCB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ4MXB4KSB7XG4gICAgICAgICZfX2Zvcm0ge1xuICAgIFxuICAgICAgICAgICAgJl9fc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgJl9fc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NzBweCkge1xuICAgIFxuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJl9fZm9ybSB7XG4gICAgXG4gICAgICAgICAgICAmX19zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG5cbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgJl9fc3VibWl0LWJ1dHRvbiB7XG4gICAgXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjVweCkge1xuICAgICAgICAmX19mb3JtIHtcbiAgICAgICAgICAgICZfX3NlY3Rpb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJl9fc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMDBweCkge1xuICAgICAgICAmX19mb3JtIHtcbiAgICAgICAgICAgICZfX3NlY3Rpb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmX19zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackButtonShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-back-button-shell',
                templateUrl: './back-button-shell.component.html',
                styleUrls: ['./back-button-shell.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Rdo/":
/*!************************************************************!*\
  !*** ./src/app/queue-position/queue-position.component.ts ***!
  \************************************************************/
/*! exports provided: QueuePositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueuePositionComponent", function() { return QueuePositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_http_get_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http-get.service */ "q5kq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function QueuePositionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Queue Position for: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You are currently:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Amount of People ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Ahead of You:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.hospitalArea.area);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r0.queueNumber(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r0.queueNumber() - 1, "");
} }
class QueuePositionComponent {
    constructor(httpGetService, router) {
        this.httpGetService = httpGetService;
        this.router = router;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(3000).subscribe(x => {
            this.getQueue(this.hospital_area_id);
        });
    }
    ngOnInit() {
        this.hospital_area_id = +localStorage.getItem("hospital_area");
        this.user_id = localStorage.getItem("user_id");
        this.triage = +localStorage.getItem("triage");
        this.getQueue(this.hospital_area_id);
    }
    getQueue(id) {
        if (this.triage == 1) {
            this.httpGetService.getPriorityQueue(id).subscribe(hospital_area => {
                this.hospitalArea = hospital_area;
            });
        }
        else {
            this.httpGetService.getPatientQueue(id).subscribe(hospital_area => {
                this.hospitalArea = hospital_area;
            });
        }
    }
    queueNumber() {
        let queueList = this.hospitalArea.priority_patients;
        let queueInList = false;
        if (this.triage == 1) {
            queueList = this.hospitalArea.priority_patients;
        }
        else {
            queueList = this.hospitalArea.patients;
        }
        for (let i = 0; i < queueList.length; i++) {
            if (this.user_id == queueList[i].id) {
                queueInList = true;
                return i + 1;
            }
        }
        if (queueInList == false) {
            localStorage.removeItem("user_id");
            localStorage.removeItem("triage");
            localStorage.removeItem("hospital_area");
            this.router.navigate(['']);
        }
    }
}
QueuePositionComponent.ɵfac = function QueuePositionComponent_Factory(t) { return new (t || QueuePositionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_get_service__WEBPACK_IMPORTED_MODULE_2__["HttpGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
QueuePositionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QueuePositionComponent, selectors: [["app-queue-position"]], decls: 1, vars: 1, consts: [["class", "queue-position", 4, "ngIf"], [1, "queue-position"], [1, "queue-position__head"], [1, "queue-position__head__title"], [1, "queue-position__head__sub"], [1, "queue-position__head__number"]], template: function QueuePositionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QueuePositionComponent_div_0_Template, 16, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hospitalArea);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.4rem;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.2) scaleY(1.6);\n  opacity: 0;\n}\n\n.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(-1px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n\n.btn--blue[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  color: #fff;\n}\n\n.btn--blue[_ngcontent-%COMP%]::after {\n  background-color: #2876b1;\n}\n\n.btn--red[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #fff;\n}\n\n.btn--red[_ngcontent-%COMP%]::after {\n  background-color: red;\n}\n\n.btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated[_ngcontent-%COMP%] {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.queue-position[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  top: 15%;\n}\n\n.queue-position__head[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #2876b1;\n  text-align: center;\n}\n\n.queue-position__head__title[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.queue-position__head__sub[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  font-size: 20px;\n  margin-bottom: 5px;\n}\n\n.queue-position__head__number[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n\n@media screen and (min-width: 481px) {\n  .queue-position[_ngcontent-%COMP%] {\n    top: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYmFzZS9fYmFzZS5zY3NzIiwic3JjL2FwcC9xdWV1ZS1wb3NpdGlvbi9xdWV1ZS1wb3NpdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvYmFzZS9fdHlwb2dyYXBoeS5zY3NzIiwic3JjL3N0eWxlcy9jb21wb25lbnRzL19idXR0b24uc2NzcyIsInNyYy9zdHlsZXMvYWJzdHJhY3QvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBQ0pBO0VBQ0ksaUNBQUE7QURPSjs7QUVQSTtFQUdJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxZQUFBO0VBQ0EsZUFBQTtBRk1SOztBRUhJO0VBQ0ksMkJBQUE7RUFDQSwwQ0FBQTtBRktSOztBRUhRO0VBQ0ksa0NBQUE7RUFDQSxVQUFBO0FGS1o7O0FFREk7RUFFSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtBRkVSOztBRUNJO0VBQ0kseUJDcENRO0VEcUNSLFdDbENNO0FIbUNkOztBRUNRO0VBQ0kseUJDeENJO0FIeUNoQjs7QUVHSTtFQUNJLHFCQUFBO0VBQ0EsV0MzQ007QUgwQ2Q7O0FFR1E7RUFDSSxxQkFBQTtBRkRaOztBRUtJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUZIUjs7QUVNSTtFQUNJLDJDQUFBO0VBQ0EsOEJBQUE7QUZKUjs7QUE5REE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBaUVKOztBQS9ESTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0dkUTtFSGVSLGtCQUFBO0FBZ0VSOztBQTlEUTtFQUNJLGFBQUE7QUFnRVo7O0FBN0RRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUErRFo7O0FBNURRO0VBQ0ksZUFBQTtBQThEWjs7QUF6REE7RUFDSTtJQUNJLFFBQUE7RUE0RE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3F1ZXVlLXBvc2l0aW9uL3F1ZXVlLXBvc2l0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuLnF1ZXVlLXBvc2l0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNSU7XG5cbiAgICAmX19oZWFkIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmX19zdWIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX251bWJlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDgxcHgpIHtcbiAgICAucXVldWUtcG9zaXRpb24ge1xuICAgICAgICB0b3A6IDIwJTtcbiAgICB9XG59IiwiYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufSIsIi5idG4ge1xuICAgICYsXG4gICAgJjpsaW5rLFxuICAgICY6dmlzaXRlZCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcblxuICAgICAgICAvL0NoYW5nZSBmb3IgdGhlIDxidXR0b24+IGVsZW1lbnRcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoJGNvbG9yLWJsYWNrLC4yKTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjIpIHNjYWxlWSgxLjYpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgkY29sb3ItYmxhY2ssLjIpO1xuICAgIH1cbiAgICBcbiAgICAmLS1ibHVlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1yZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgIH1cbiAgICBcbiAgICAmLS1hbmltYXRlZCB7XG4gICAgICAgIGFuaW1hdGlvbjogbW92ZUluQm90dG9tIC41cyBlYXNlLW91dCAuNzVzO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XG4gICAgfVxufSIsIiRjb2xvci1wcmltYXJ5OiAjMjg3NmIxO1xuXG4kY29sb3ItYmxhY2s6ICMwMDAwO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuXG4kY29sb3ItZHVsbC13aGl0ZTogcmdiKDIxMiwgMjEyLCAyMTIpOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueuePositionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-queue-position',
                templateUrl: './queue-position.component.html',
                styleUrls: ['./queue-position.component.scss']
            }]
    }], function () { return [{ type: _services_http_get_service__WEBPACK_IMPORTED_MODULE_2__["HttpGetService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'erswift';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".outlet[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGxldCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "VVPI":
/*!**************************************************************!*\
  !*** ./src/app/error-pages/not-found/not-found.component.ts ***!
  \**************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return [""]; };
class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 11, vars: 2, consts: [[1, "not-found"], [1, "not-found__main"], [1, "not-found__sub-text"], [1, "not-found__info"], [1, "not-found__button", "btn", "btn--blue", 3, "routerLink"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Uh-Oh!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "This Page Does ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Not Exist!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go Back Home!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.4rem;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.2) scaleY(1.6);\n  opacity: 0;\n}\n\n.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(-1px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n\n.btn--blue[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  color: #fff;\n}\n\n.btn--blue[_ngcontent-%COMP%]::after {\n  background-color: #2876b1;\n}\n\n.btn--red[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #fff;\n}\n\n.btn--red[_ngcontent-%COMP%]::after {\n  background-color: red;\n}\n\n.btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated[_ngcontent-%COMP%] {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.not-found[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  top: -25px;\n}\n\n.not-found__main[_ngcontent-%COMP%] {\n  color: #2876b1;\n  font-size: 200px;\n}\n\n.not-found__sub-text[_ngcontent-%COMP%] {\n  margin-top: -40px;\n  color: #2876b1;\n  font-size: 80px;\n  margin-bottom: 10px;\n}\n\n.not-found__info[_ngcontent-%COMP%] {\n  color: #23689c;\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 30px;\n}\n\n.not-found__button[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px;\n  text-align: center;\n  width: 320px;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYmFzZS9fYmFzZS5zY3NzIiwic3JjL2FwcC9lcnJvci1wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9iYXNlL190eXBvZ3JhcGh5LnNjc3MiLCJzcmMvc3R5bGVzL2NvbXBvbmVudHMvX2J1dHRvbi5zY3NzIiwic3JjL3N0eWxlcy9hYnN0cmFjdC9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FDSkE7RUFDSSxpQ0FBQTtBRE9KOztBRVBJO0VBR0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUdBLFlBQUE7RUFDQSxlQUFBO0FGTVI7O0FFSEk7RUFDSSwyQkFBQTtFQUNBLDBDQUFBO0FGS1I7O0FFSFE7RUFDSSxrQ0FBQTtFQUNBLFVBQUE7QUZLWjs7QUVESTtFQUVJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0FGRVI7O0FFQ0k7RUFDSSx5QkNwQ1E7RURxQ1IsV0NsQ007QUhtQ2Q7O0FFQ1E7RUFDSSx5QkN4Q0k7QUh5Q2hCOztBRUdJO0VBQ0kscUJBQUE7RUFDQSxXQzNDTTtBSDBDZDs7QUVHUTtFQUNJLHFCQUFBO0FGRFo7O0FFS0k7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBRkhSOztBRU1JO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtBRkpSOztBQTlEQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQWlFSjs7QUEvREk7RUFDSSxjR2JRO0VIY1IsZ0JBQUE7QUFpRVI7O0FBOURJO0VBQ0ksaUJBQUE7RUFDQSxjR25CUTtFSG9CUixlQUFBO0VBQ0EsbUJBQUE7QUFnRVI7O0FBN0RJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBK0RSOztBQTVESTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7QUE2RFIiLCJmaWxlIjoic3JjL2FwcC9lcnJvci1wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbi5ub3QtZm91bmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAtMjVweDtcblxuICAgICZfX21haW4ge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gICAgfVxuXG4gICAgJl9fc3ViLXRleHQge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgJl9faW5mbyB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDUlKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzMjBweDtcblxuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufSIsImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn0iLCIuYnRuIHtcbiAgICAmLFxuICAgICY6bGluayxcbiAgICAmOnZpc2l0ZWQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG5cbiAgICAgICAgLy9DaGFuZ2UgZm9yIHRoZSA8YnV0dG9uPiBlbGVtZW50XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKCRjb2xvci1ibGFjaywuMik7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4yKSBzY2FsZVkoMS42KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoJGNvbG9yLWJsYWNrLC4yKTtcbiAgICB9XG4gICAgXG4gICAgJi0tYmx1ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cztcbiAgICB9XG4gICAgXG4gICAgJi0tYW5pbWF0ZWQge1xuICAgICAgICBhbmltYXRpb246IG1vdmVJbkJvdHRvbSAuNXMgZWFzZS1vdXQgLjc1cztcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xuICAgIH1cbn0iLCIkY29sb3ItcHJpbWFyeTogIzI4NzZiMTtcblxuJGNvbG9yLWJsYWNrOiAjMDAwMDtcbiRjb2xvci13aGl0ZTogI2ZmZjtcblxuJGNvbG9yLWR1bGwtd2hpdGU6IHJnYigyMTIsIDIxMiwgMjEyKTsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Yr/A":
/*!********************************************************************!*\
  !*** ./src/app/error-pages/server-error/server-error.component.ts ***!
  \********************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return [""]; };
class ServerErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServerErrorComponent.ɵfac = function ServerErrorComponent_Factory(t) { return new (t || ServerErrorComponent)(); };
ServerErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerErrorComponent, selectors: [["app-server-error"]], decls: 11, vars: 2, consts: [[1, "server-error"], [1, "server-error__main"], [1, "server-error__sub-text"], [1, "server-error__info"], [1, "server-error__button", "btn", "btn--blue", 3, "routerLink"]], template: function ServerErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our Bad!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "There is Currently");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "a Server Error!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go Back Home!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.4rem;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.2) scaleY(1.6);\n  opacity: 0;\n}\n\n.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(-1px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n\n.btn--blue[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  color: #fff;\n}\n\n.btn--blue[_ngcontent-%COMP%]::after {\n  background-color: #2876b1;\n}\n\n.btn--red[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #fff;\n}\n\n.btn--red[_ngcontent-%COMP%]::after {\n  background-color: red;\n}\n\n.btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated[_ngcontent-%COMP%] {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.server-error[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  top: -25px;\n}\n\n.server-error__main[_ngcontent-%COMP%] {\n  color: #2876b1;\n  font-size: 200px;\n}\n\n.server-error__sub-text[_ngcontent-%COMP%] {\n  margin-top: -40px;\n  color: #2876b1;\n  font-size: 80px;\n  margin-bottom: 10px;\n}\n\n.server-error__info[_ngcontent-%COMP%] {\n  color: #23689c;\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 30px;\n}\n\n.server-error__button[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px;\n  text-align: center;\n  width: 320px;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYmFzZS9fYmFzZS5zY3NzIiwic3JjL2FwcC9lcnJvci1wYWdlcy9zZXJ2ZXItZXJyb3Ivc2VydmVyLWVycm9yLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9iYXNlL190eXBvZ3JhcGh5LnNjc3MiLCJzcmMvc3R5bGVzL2NvbXBvbmVudHMvX2J1dHRvbi5zY3NzIiwic3JjL3N0eWxlcy9hYnN0cmFjdC9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FDSkE7RUFDSSxpQ0FBQTtBRE9KOztBRVBJO0VBR0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUdBLFlBQUE7RUFDQSxlQUFBO0FGTVI7O0FFSEk7RUFDSSwyQkFBQTtFQUNBLDBDQUFBO0FGS1I7O0FFSFE7RUFDSSxrQ0FBQTtFQUNBLFVBQUE7QUZLWjs7QUVESTtFQUVJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0FGRVI7O0FFQ0k7RUFDSSx5QkNwQ1E7RURxQ1IsV0NsQ007QUhtQ2Q7O0FFQ1E7RUFDSSx5QkN4Q0k7QUh5Q2hCOztBRUdJO0VBQ0kscUJBQUE7RUFDQSxXQzNDTTtBSDBDZDs7QUVHUTtFQUNJLHFCQUFBO0FGRFo7O0FFS0k7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBRkhSOztBRU1JO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtBRkpSOztBQTlEQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQWlFSjs7QUEvREk7RUFDSSxjR2JRO0VIY1IsZ0JBQUE7QUFpRVI7O0FBOURJO0VBQ0ksaUJBQUE7RUFDQSxjR25CUTtFSG9CUixlQUFBO0VBQ0EsbUJBQUE7QUFnRVI7O0FBN0RJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBK0RSOztBQTVESTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7QUE2RFIiLCJmaWxlIjoic3JjL2FwcC9lcnJvci1wYWdlcy9zZXJ2ZXItZXJyb3Ivc2VydmVyLWVycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbi5zZXJ2ZXItZXJyb3Ige1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAtMjVweDtcblxuICAgICZfX21haW4ge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gICAgfVxuXG4gICAgJl9fc3ViLXRleHQge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgJl9faW5mbyB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDUlKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzMjBweDtcblxuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufSIsImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn0iLCIuYnRuIHtcbiAgICAmLFxuICAgICY6bGluayxcbiAgICAmOnZpc2l0ZWQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG5cbiAgICAgICAgLy9DaGFuZ2UgZm9yIHRoZSA8YnV0dG9uPiBlbGVtZW50XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKCRjb2xvci1ibGFjaywuMik7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4yKSBzY2FsZVkoMS42KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoJGNvbG9yLWJsYWNrLC4yKTtcbiAgICB9XG4gICAgXG4gICAgJi0tYmx1ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cztcbiAgICB9XG4gICAgXG4gICAgJi0tYW5pbWF0ZWQge1xuICAgICAgICBhbmltYXRpb246IG1vdmVJbkJvdHRvbSAuNXMgZWFzZS1vdXQgLjc1cztcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xuICAgIH1cbn0iLCIkY29sb3ItcHJpbWFyeTogIzI4NzZiMTtcblxuJGNvbG9yLWJsYWNrOiAjMDAwMDtcbiRjb2xvci13aGl0ZTogI2ZmZjtcblxuJGNvbG9yLWR1bGwtd2hpdGU6IHJnYigyMTIsIDIxMiwgMjEyKTsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-server-error',
                templateUrl: './server-error.component.html',
                styleUrls: ['./server-error.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _emergency_check_in_emergency_check_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emergency-check-in/emergency-check-in.component */ "f2IB");
/* harmony import */ var _queue_position_queue_position_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./queue-position/queue-position.component */ "Rdo/");
/* harmony import */ var _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./check-in/check-in.component */ "qPHa");
/* harmony import */ var _back_button_shell_back_button_shell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./back-button-shell/back-button-shell.component */ "N7r8");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-pages/not-found/not-found.component */ "VVPI");
/* harmony import */ var _error_pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error-pages/server-error/server-error.component */ "Yr/A");
/* harmony import */ var _error_pages_bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./error-pages/bad-request/bad-request.component */ "18gs");
/* harmony import */ var _error_pages_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./error-pages/forbidden/forbidden.component */ "HF9R");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _emergency_check_in_emergency_check_in_component__WEBPACK_IMPORTED_MODULE_7__["EmergencyCheckInComponent"],
        _queue_position_queue_position_component__WEBPACK_IMPORTED_MODULE_8__["QueuePositionComponent"],
        _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_9__["CheckInComponent"],
        _back_button_shell_back_button_shell_component__WEBPACK_IMPORTED_MODULE_10__["BackButtonShellComponent"],
        _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
        _error_pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_13__["ServerErrorComponent"],
        _error_pages_bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_14__["BadRequestComponent"],
        _error_pages_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_15__["ForbiddenComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _emergency_check_in_emergency_check_in_component__WEBPACK_IMPORTED_MODULE_7__["EmergencyCheckInComponent"],
                    _queue_position_queue_position_component__WEBPACK_IMPORTED_MODULE_8__["QueuePositionComponent"],
                    _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_9__["CheckInComponent"],
                    _back_button_shell_back_button_shell_component__WEBPACK_IMPORTED_MODULE_10__["BackButtonShellComponent"],
                    _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                    _error_pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_13__["ServerErrorComponent"],
                    _error_pages_bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_14__["BadRequestComponent"],
                    _error_pages_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_15__["ForbiddenComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                providers: [
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "f2IB":
/*!********************************************************************!*\
  !*** ./src/app/emergency-check-in/emergency-check-in.component.ts ***!
  \********************************************************************/
/*! exports provided: EmergencyCheckInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyCheckInComponent", function() { return EmergencyCheckInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function EmergencyCheckInComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Field is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmergencyCheckInComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Your First Name Can Not Be Longer Than 26 Characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmergencyCheckInComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Field is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmergencyCheckInComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Your Last Name Can Not Be Longer Than 50 Characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmergencyCheckInComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Field is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmergencyCheckInComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Field is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class EmergencyCheckInComponent {
    constructor(fb, el, http, router) {
        this.fb = fb;
        this.el = el;
        this.http = http;
        this.router = router;
        this.erswiftAPIUrl = "http://127.0.0.1:8000/api/patients/min-priority_patient/";
    }
    ngOnInit() {
        this.emergencyCheckInForm = this.fb.group({
            first_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(26)]],
            last_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            date_of_birth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            emer_reasoning: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            extra_information: [""]
        });
    }
    save() {
        if (this.emergencyCheckInForm.valid) {
            const formData = new FormData();
            formData.append('first_name', this.emergencyCheckInForm.get('first_name').value);
            formData.append('last_name', this.emergencyCheckInForm.get('last_name').value);
            formData.append('date_of_birth', this.emergencyCheckInForm.get('date_of_birth').value);
            formData.append('emer_reasoning', this.emergencyCheckInForm.get('emer_reasoning').value);
            formData.append('extra_information', this.emergencyCheckInForm.get('extra_information').value);
            this.http.post(this.erswiftAPIUrl, formData).subscribe((res) => this.storeResult(res), (err) => console.log(err));
        }
        else {
            this.validateAllFormFields(this.emergencyCheckInForm);
        }
    }
    storeResult(result) {
        localStorage.setItem("hospital_area", result.hospital_area);
        localStorage.setItem("user_id", result.id);
        localStorage.setItem("triage", "1");
        this.navigateToQueue();
    }
    navigateToQueue() {
        this.router.navigate(['queue-position']);
    }
    // If the form does not submit, this would inform the user on the errors on the form.
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                this.validateAllFormFields(control);
            }
        });
        setTimeout(() => this.scrollIfFormHasErrors(formGroup).then(() => { }), 25);
    }
    scrollTo(el) {
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    scrollToError() {
        const firstElementWithError = this.el.nativeElement.querySelector('.is-invalid');
        this.scrollTo(firstElementWithError);
    }
    scrollIfFormHasErrors(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield form.invalid;
            this.scrollToError();
        });
    }
}
EmergencyCheckInComponent.ɵfac = function EmergencyCheckInComponent_Factory(t) { return new (t || EmergencyCheckInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EmergencyCheckInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmergencyCheckInComponent, selectors: [["app-emergency-check-in"]], decls: 47, vars: 19, consts: [[1, "emergency-check-in"], [1, "emergency-check-in__title"], [1, "emergency-check-in__form", 3, "formGroup", "ngSubmit"], [1, "emergency-check-in__form__section"], [1, "emergency-check-in__form__section__label"], ["type", "text", "formControlName", "first_name", 1, "emergency-check-in__form__section__field", 3, "ngClass"], ["class", "is-invalid", 4, "ngIf"], ["type", "text", "formControlName", "last_name", 1, "emergency-check-in__form__section__field", 3, "ngClass"], ["type", "date", "formControlName", "date_of_birth", 1, "emergency-check-in__form__section__field", 3, "ngClass"], ["formControlName", "emer_reasoning", 1, "emergency-check-in__form__section__field", 3, "ngClass"], ["value", "breathing"], ["value", "fatal-wounds"], ["value", "coma"], ["value", "shock"], ["value", "dehydration"], ["value", "other"], ["type", "text", "formControlName", "extra_information", 1, "emergency-check-in__form__section__field", "textarea"], [1, "emergency-check-in__form__submit-button"], ["type", "submit", 1, "btn", "btn--blue"], [1, "is-invalid"]], template: function EmergencyCheckInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Emergency ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Check In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmergencyCheckInComponent_Template_form_ngSubmit_5_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EmergencyCheckInComponent_span_10_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EmergencyCheckInComponent_span_11_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EmergencyCheckInComponent_span_16_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, EmergencyCheckInComponent_span_17_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Date of Birth:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, EmergencyCheckInComponent_span_22_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Injury/Symptoms:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Breathing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Fatal Wounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Coma");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Signs of Shock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Severe Signs of Dehydration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, EmergencyCheckInComponent_span_39_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Additional Information (Optional):");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.emergencyCheckInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, (ctx.emergencyCheckInForm.get("first_name").touched || ctx.emergencyCheckInForm.get("first_name").dirty) && !ctx.emergencyCheckInForm.get("first_name").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.emergencyCheckInForm.get("first_name").errors == null ? null : ctx.emergencyCheckInForm.get("first_name").errors.required) && ctx.emergencyCheckInForm.get("first_name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.emergencyCheckInForm.get("first_name").errors == null ? null : ctx.emergencyCheckInForm.get("first_name").errors.maxlength) && ctx.emergencyCheckInForm.get("first_name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, (ctx.emergencyCheckInForm.get("last_name").touched || ctx.emergencyCheckInForm.get("last_name").dirty) && !ctx.emergencyCheckInForm.get("last_name").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.emergencyCheckInForm.get("last_name").errors == null ? null : ctx.emergencyCheckInForm.get("last_name").errors.required) && ctx.emergencyCheckInForm.get("last_name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.emergencyCheckInForm.get("last_name").errors == null ? null : ctx.emergencyCheckInForm.get("last_name").errors.maxlength) && ctx.emergencyCheckInForm.get("last_name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, (ctx.emergencyCheckInForm.get("date_of_birth").touched || ctx.emergencyCheckInForm.get("date_of_birth").dirty) && !ctx.emergencyCheckInForm.get("date_of_birth").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.emergencyCheckInForm.get("date_of_birth").errors == null ? null : ctx.emergencyCheckInForm.get("date_of_birth").errors.required) && ctx.emergencyCheckInForm.get("date_of_birth").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, (ctx.emergencyCheckInForm.get("emer_reasoning").touched || ctx.emergencyCheckInForm.get("emer_reasoning").dirty) && !ctx.emergencyCheckInForm.get("emer_reasoning").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.emergencyCheckInForm.get("emer_reasoning").errors == null ? null : ctx.emergencyCheckInForm.get("emer_reasoning").errors.required) && ctx.emergencyCheckInForm.get("emer_reasoning").touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.4rem;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.2) scaleY(1.6);\n  opacity: 0;\n}\n\n.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(-1px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n\n.btn--blue[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  color: #fff;\n}\n\n.btn--blue[_ngcontent-%COMP%]::after {\n  background-color: #2876b1;\n}\n\n.btn--red[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #fff;\n}\n\n.btn--red[_ngcontent-%COMP%]::after {\n  background-color: red;\n}\n\n.btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated[_ngcontent-%COMP%] {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.emergency-check-in[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\n.emergency-check-in__title[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #2876b1;\n  font-size: 35px;\n}\n\n.emergency-check-in__form[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.emergency-check-in__form__section[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\n.emergency-check-in__form__section__label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.emergency-check-in__form__section__field[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  padding: 5px;\n  font-size: 15px;\n  border: 1px solid black;\n  background-color: white;\n}\n\n.emergency-check-in__form__section__field[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.emergency-check-in__form__section[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.emergency-check-in__form__submit-button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.emergency-check-in__form__submit-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 75%;\n  padding: 8px;\n  margin-top: 20px;\n}\n\n.emergency-check-in__form[_ngcontent-%COMP%]   .is-invalid[_ngcontent-%COMP%] {\n  color: red;\n  border-color: red;\n}\n\n@media screen and (min-width: 481px) {\n  .emergency-check-in__form__section[_ngcontent-%COMP%] {\n    margin-left: 50px;\n    margin-right: 50px;\n  }\n  .emergency-check-in__form__submit-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 80%;\n    padding: 10px;\n  }\n}\n\n@media screen and (min-width: 770px) {\n  .emergency-check-in__title[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #2876b1;\n    font-size: 35px;\n  }\n  .emergency-check-in__form__section[_ngcontent-%COMP%] {\n    margin: 20px 0px 0px 0px;\n    width: 60%;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .emergency-check-in__form__submit-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 60%;\n    padding: 10px;\n    margin-top: 30px;\n  }\n}\n\n@media screen and (min-width: 1025px) {\n  .emergency-check-in__form__section[_ngcontent-%COMP%] {\n    margin: 20px 0px 0px 0px;\n    width: 50%;\n  }\n  .emergency-check-in__form__submit-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .emergency-check-in__form__section[_ngcontent-%COMP%] {\n    margin: 20px 0px 0px 0px;\n    width: 600px;\n  }\n  .emergency-check-in__form__submit-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYmFzZS9fYmFzZS5zY3NzIiwic3JjL2FwcC9lbWVyZ2VuY3ktY2hlY2staW4vZW1lcmdlbmN5LWNoZWNrLWluLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9iYXNlL190eXBvZ3JhcGh5LnNjc3MiLCJzcmMvc3R5bGVzL2NvbXBvbmVudHMvX2J1dHRvbi5zY3NzIiwic3JjL3N0eWxlcy9hYnN0cmFjdC9fdmFyaWFibGVzLnNjc3MiLCJzcmMvc3R5bGVzL2Fic3RyYWN0L19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QUNKQTtFQUNJLGlDQUFBO0FET0o7O0FFUEk7RUFHSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBR0EsWUFBQTtFQUNBLGVBQUE7QUZNUjs7QUVISTtFQUNJLDJCQUFBO0VBQ0EsMENBQUE7QUZLUjs7QUVIUTtFQUNJLGtDQUFBO0VBQ0EsVUFBQTtBRktaOztBRURJO0VBRUksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNENBQUE7QUZFUjs7QUVDSTtFQUNJLHlCQ3BDUTtFRHFDUixXQ2xDTTtBSG1DZDs7QUVDUTtFQUNJLHlCQ3hDSTtBSHlDaEI7O0FFR0k7RUFDSSxxQkFBQTtFQUNBLFdDM0NNO0FIMENkOztBRUdRO0VBQ0kscUJBQUE7QUZEWjs7QUVLSTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FGSFI7O0FFTUk7RUFDSSwyQ0FBQTtFQUNBLDhCQUFBO0FGSlI7O0FBOURBO0VJS0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUo2REo7O0FJM0RJO0VBQ0ksa0JBQUE7RUFDQSxjRGJRO0VDY1IsZUFBQTtBSjZEUjs7QUkxREk7RUFDSSxnQkFBQTtBSjREUjs7QUkxRFE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FKNERaOztBSTFEWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBSjREaEI7O0FJekRZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBSjJEaEI7O0FJN0ZJO0VBQ0ksYUFBQTtBSitGUjs7QUl6RFk7RUFDSSxhQUFBO0FKMkRoQjs7QUl2RFE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FKeURaOztBSXZEWTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUp5RGhCOztBSXJEUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBSnVEWjs7QUluREk7RUFHUTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUptRGQ7RUkvQ2M7SUFDSSxVQUFBO0lBQ0EsYUFBQTtFSmlEbEI7QUFDRjs7QUk1Q0k7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsY0RwRkk7SUNxRkosZUFBQTtFSjZDVjtFSXhDVTtJQUNJLHdCQUFBO0lBRUEsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLDJCQUFBO0VKeUNkO0VJcENjO0lBQ0ksVUFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFSnNDbEI7QUFDRjs7QUlqQ0k7RUFFUTtJQUNJLHdCQUFBO0lBQ0EsVUFBQTtFSmtDZDtFSS9CYztJQUNJLFVBQUE7RUppQ2xCO0FBQ0Y7O0FJNUJJO0VBRVE7SUFDSSx3QkFBQTtJQUNBLFlBQUE7RUo2QmQ7RUkxQmM7SUFDSSxZQUFBO0VKNEJsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZW1lcmdlbmN5LWNoZWNrLWluL2VtZXJnZW5jeS1jaGVjay1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbi5lbWVyZ2VuY3ktY2hlY2staW4ge1xuICAgIEBpbmNsdWRlIGZvcm1zTWl4aW4oKTtcbn0iLCJib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59IiwiLmJ0biB7XG4gICAgJixcbiAgICAmOmxpbmssXG4gICAgJjp2aXNpdGVkIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuXG4gICAgICAgIC8vQ2hhbmdlIGZvciB0aGUgPGJ1dHRvbj4gZWxlbWVudFxuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgkY29sb3ItYmxhY2ssLjIpO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMikgc2NhbGVZKDEuNik7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKCRjb2xvci1ibGFjaywuMik7XG4gICAgfVxuICAgIFxuICAgICYtLWJsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXJlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XG4gICAgfVxuICAgIFxuICAgICYtLWFuaW1hdGVkIHtcbiAgICAgICAgYW5pbWF0aW9uOiBtb3ZlSW5Cb3R0b20gLjVzIGVhc2Utb3V0IC43NXM7XG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcbiAgICB9XG59IiwiJGNvbG9yLXByaW1hcnk6ICMyODc2YjE7XG5cbiRjb2xvci1ibGFjazogIzAwMDA7XG4kY29sb3Itd2hpdGU6ICNmZmY7XG5cbiRjb2xvci1kdWxsLXdoaXRlOiByZ2IoMjEyLCAyMTIsIDIxMik7IiwiQG1peGluIG5vLXNlbGVjdC1pbnB1dCB7XG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxufVxuXG5AbWl4aW4gZm9ybXNNaXhpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgfVxuXG4gICAgJl9fZm9ybSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICAgJl9fc2VjdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgJl9fbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX19maWVsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBuby1zZWxlY3QtaW5wdXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJl9fc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmlzLWludmFsaWQge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0ODFweCkge1xuICAgICAgICAmX19mb3JtIHtcbiAgICBcbiAgICAgICAgICAgICZfX3NlY3Rpb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICZfX3N1Ym1pdC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzcwcHgpIHtcbiAgICBcbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgICZfX2Zvcm0ge1xuICAgIFxuICAgICAgICAgICAgJl9fc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xuXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICZfX3N1Ym1pdC1idXR0b24ge1xuICAgIFxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI1cHgpIHtcbiAgICAgICAgJl9fZm9ybSB7XG4gICAgICAgICAgICAmX19zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZfX3N1Ym1pdC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjAwcHgpIHtcbiAgICAgICAgJl9fZm9ybSB7XG4gICAgICAgICAgICAmX19zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJl9fc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmergencyCheckInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-emergency-check-in',
                templateUrl: './emergency-check-in.component.html',
                styleUrls: ['./emergency-check-in.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService, AuthInterceptor, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");



// Using import jwt_decode from 'jwt-decode'; instead of import * as jwtDecode from 'jwt-decode';




class AuthService {
    constructor(http) {
        this.http = http;
        this.apiRoot = 'http://127.0.0.1:8000/auth/';
    }
    setSession(authResult) {
        const token = authResult.token;
        const payload = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
        const expiresAt = moment__WEBPACK_IMPORTED_MODULE_3__["unix"](payload.exp);
        localStorage.setItem('token', authResult.token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
        localStorage.setItem('username', authResult.username);
    }
    get token() {
        return localStorage.getItem('token');
    }
    get username() {
        return localStorage.getItem('username');
    }
    login(username, password) {
        return this.http.post(this.apiRoot.concat('login/'), { username, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(response => this.setSession(response)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('username');
    }
    refreshToken() {
        if (moment__WEBPACK_IMPORTED_MODULE_3__().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {
            return this.http.post(this.apiRoot.concat('refresh-token/'), { token: this.token }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(response => this.setSession(response)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])()).subscribe();
        }
    }
    getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment__WEBPACK_IMPORTED_MODULE_3__(expiresAt);
    }
    isLoggedIn() {
        return moment__WEBPACK_IMPORTED_MODULE_3__().isBefore(this.getExpiration());
    }
    isLoggedOut() {
        return !this.isLoggedIn();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class AuthInterceptor {
    intercept(req, next) {
        const token = localStorage.getItem('token');
        if (token) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization', 'JWT '.concat(token))
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isLoggedIn()) {
            this.authService.refreshToken();
            return true;
        }
        else {
            this.authService.logout();
            this.router.navigate(['/doctor/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: AuthService }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "q5kq":
/*!**********************************************!*\
  !*** ./src/app/services/http-get.service.ts ***!
  \**********************************************/
/*! exports provided: HttpGetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpGetService", function() { return HttpGetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class HttpGetService {
    constructor(http) {
        this.http = http;
        this.erswiftAPIUrl = "http://127.0.0.1:8000/api/";
    }
    getPriorityQueue(id) {
        return this.http.get(this.erswiftAPIUrl + "hospital-areas/min-hospital-priority-areas/" + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getPatientQueue(id) {
        return this.http.get(this.erswiftAPIUrl + "hospital-areas/min-hospital-areas/" + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    verifyPatientList(id) {
        return this.http.get(this.erswiftAPIUrl + "patients/verify-patient/" + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.doesNotExist));
    }
    verifyPriorityPatient(id) {
        return this.http.get(this.erswiftAPIUrl + "patients/verify-priority_patient/" + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.doesNotExist));
    }
    /* The rest need Authentication */
    getPriorityAreas() {
        return this.http.get(this.erswiftAPIUrl + "hospital-areas/hospital-priority-areas/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getHospitalAreas() {
        return this.http.get(this.erswiftAPIUrl + "hospital-areas/hospital-areas/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getPatientFromPriority(id) {
        return this.http.get(this.erswiftAPIUrl + "patients/priority_patient/" + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getPatientFromNormal(id) {
        return this.http.get(this.erswiftAPIUrl + "patients/patient/" + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = "";
        if (err.error instanceof ErrorEvent) {
            errorMessage = "An error has occured: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + " error message is " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
    doesNotExist(err) {
        let errorMessage = "";
        if (err.status == 404) {
            localStorage.removeItem("hospital_area");
            localStorage.removeItem("triage");
            localStorage.removeItem("user_id");
        }
        if (err.error instanceof ErrorEvent) {
            errorMessage = "An error has occured: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + " error message is " + err.message;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
HttpGetService.ɵfac = function HttpGetService_Factory(t) { return new (t || HttpGetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
HttpGetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpGetService, factory: HttpGetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpGetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "qPHa":
/*!************************************************!*\
  !*** ./src/app/check-in/check-in.component.ts ***!
  \************************************************/
/*! exports provided: CheckInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInComponent", function() { return CheckInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CheckInComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Field is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CheckInComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Your First Name Can Not Be Longer Than 26 Characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CheckInComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Field is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CheckInComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Your Last Name Can Not Be Longer Than 26 Characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CheckInComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Field is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CheckInComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Field is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CheckInComponent_div_40_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Field is Required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function CheckInComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Head");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Neck");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Torso");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Arms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Legs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CheckInComponent_div_40_span_14_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, (ctx_r6.checkInForm.get("cut_location").touched || ctx_r6.checkInForm.get("cut_location").dirty) && !ctx_r6.checkInForm.get("cut_location").valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r6.checkInForm.get("cut_location").errors == null ? null : ctx_r6.checkInForm.get("cut_location").errors.required) && ctx_r6.checkInForm.get("cut_location").touched);
} }
class CheckInComponent {
    constructor(fb, el, http, router) {
        this.fb = fb;
        this.el = el;
        this.http = http;
        this.router = router;
        this.erswiftAPIUrl = "http://127.0.0.1:8000/api/patients/min-patient/";
    }
    ngOnInit() {
        this.checkInForm = this.fb.group({
            first_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(26)]],
            last_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            date_of_birth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            reasoning: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cut_location: [""],
            extra_information: [""]
        });
        this.checkInForm.get('reasoning').valueChanges.subscribe(value => this.setCutValidators(value));
    }
    setCutValidators(reason) {
        const cut_location = this.checkInForm.get("cut_location");
        if (reason == "cut") {
            cut_location.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        }
        else {
            cut_location.clearValidators();
        }
        cut_location.updateValueAndValidity();
    }
    save() {
        if (this.checkInForm.valid) {
            const formData = new FormData();
            formData.append('first_name', this.checkInForm.get('first_name').value);
            formData.append('last_name', this.checkInForm.get('last_name').value);
            formData.append('date_of_birth', this.checkInForm.get('date_of_birth').value);
            formData.append('reasoning', this.checkInForm.get('reasoning').value);
            if (this.checkInForm.get('reasoning').value == "cut") {
                formData.append('cut_location', this.checkInForm.get('cut_location').value);
            }
            formData.append('extra_information', this.checkInForm.get('extra_information').value);
            this.http.post(this.erswiftAPIUrl, formData).subscribe((res) => this.storeResult(res), (err) => console.log(err));
        }
        else {
            this.validateAllFormFields(this.checkInForm);
        }
    }
    storeResult(result) {
        localStorage.setItem("hospital_area", result.hospital_area);
        localStorage.setItem("user_id", result.id);
        localStorage.setItem("triage", "2");
        this.navigateToQueue();
    }
    navigateToQueue() {
        this.router.navigate(['queue-position']);
    }
    // If the form does not submit, this wsould inform the user on the errors on the form.
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                this.validateAllFormFields(control);
            }
        });
        setTimeout(() => this.scrollIfFormHasErrors(formGroup).then(() => { }), 25);
    }
    scrollTo(el) {
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    scrollToError() {
        const firstElementWithError = this.el.nativeElement.querySelector('.is-invalid');
        this.scrollTo(firstElementWithError);
    }
    scrollIfFormHasErrors(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield form.invalid;
            this.scrollToError();
        });
    }
}
CheckInComponent.ɵfac = function CheckInComponent_Factory(t) { return new (t || CheckInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CheckInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckInComponent, selectors: [["app-check-in"]], decls: 48, vars: 20, consts: [[1, "check-in"], [1, "check-in__title"], [1, "check-in__form", 3, "formGroup", "ngSubmit"], [1, "check-in__form__section"], [1, "check-in__form__section__label"], ["type", "text", "formControlName", "first_name", 1, "check-in__form__section__field", 3, "ngClass"], ["class", "is-invalid", 4, "ngIf"], ["type", "text", "formControlName", "last_name", 1, "check-in__form__section__field", 3, "ngClass"], ["type", "date", "formControlName", "date_of_birth", 1, "check-in__form__section__field", 3, "ngClass"], ["formControlName", "reasoning", 1, "check-in__form__section__field", 3, "ngClass"], ["value", "sick"], ["value", "temperature"], ["value", "cut"], ["value", "trauma"], ["value", "poisoning"], ["value", "burns"], ["value", "other"], ["class", "check-in__form__section", 4, "ngIf"], ["type", "text", "formControlName", "extra_information", 1, "check-in__form__section__field", "textarea"], [1, "check-in__form__submit-button"], ["type", "submit", 1, "btn", "btn--blue"], [1, "is-invalid"], ["formControlName", "cut_location", 1, "check-in__form__section__field", 3, "ngClass"], ["value", "head"], ["value", "neck"], ["value", "torso"], ["value", "arms"], ["value", "legs"]], template: function CheckInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Check In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CheckInComponent_Template_form_ngSubmit_3_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CheckInComponent_span_8_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CheckInComponent_span_9_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CheckInComponent_span_14_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CheckInComponent_span_15_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CheckInComponent_span_20_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Injury/Symptoms:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Sick");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Temperature");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Cut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Trauma");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Poisoning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Burns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, CheckInComponent_span_39_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, CheckInComponent_div_40_Template, 15, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Additional Information (Optional):");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.checkInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, (ctx.checkInForm.get("first_name").touched || ctx.checkInForm.get("first_name").dirty) && !ctx.checkInForm.get("first_name").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.checkInForm.get("first_name").errors == null ? null : ctx.checkInForm.get("first_name").errors.required) && ctx.checkInForm.get("first_name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.checkInForm.get("first_name").errors == null ? null : ctx.checkInForm.get("first_name").errors.maxlength) && ctx.checkInForm.get("first_name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, (ctx.checkInForm.get("last_name").touched || ctx.checkInForm.get("last_name").dirty) && !ctx.checkInForm.get("last_name").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.checkInForm.get("last_name").errors == null ? null : ctx.checkInForm.get("last_name").errors.required) && ctx.checkInForm.get("last_name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.checkInForm.get("last_name").errors == null ? null : ctx.checkInForm.get("last_name").errors.maxlength) && ctx.checkInForm.get("last_name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c0, (ctx.checkInForm.get("date_of_birth").touched || ctx.checkInForm.get("date_of_birth").dirty) && !ctx.checkInForm.get("date_of_birth").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.checkInForm.get("date_of_birth").errors == null ? null : ctx.checkInForm.get("date_of_birth").errors.required) && ctx.checkInForm.get("date_of_birth").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, (ctx.checkInForm.get("reasoning").touched || ctx.checkInForm.get("reasoning").dirty) && !ctx.checkInForm.get("reasoning").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.checkInForm.get("reasoning").errors == null ? null : ctx.checkInForm.get("reasoning").errors.required) && ctx.checkInForm.get("reasoning").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkInForm.get("reasoning").value == "cut");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.4rem;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.2) scaleY(1.6);\n  opacity: 0;\n}\n\n.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(-1px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n\n.btn--blue[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  color: #fff;\n}\n\n.btn--blue[_ngcontent-%COMP%]::after {\n  background-color: #2876b1;\n}\n\n.btn--red[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #fff;\n}\n\n.btn--red[_ngcontent-%COMP%]::after {\n  background-color: red;\n}\n\n.btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated[_ngcontent-%COMP%] {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.check-in[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\n.check-in__title[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #2876b1;\n  font-size: 35px;\n}\n\n.check-in__form[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.check-in__form__section[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\n.check-in__form__section__label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.check-in__form__section__field[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  padding: 5px;\n  font-size: 15px;\n  border: 1px solid black;\n  background-color: white;\n}\n\n.check-in__form__section__field[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.check-in__form__section[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.check-in__form__submit-button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.check-in__form__submit-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 75%;\n  padding: 8px;\n  margin-top: 20px;\n}\n\n.check-in__form[_ngcontent-%COMP%]   .is-invalid[_ngcontent-%COMP%] {\n  color: red;\n  border-color: red;\n}\n\n@media screen and (min-width: 481px) {\n  .check-in__form__section[_ngcontent-%COMP%] {\n    margin-left: 50px;\n    margin-right: 50px;\n  }\n  .check-in__form__submit-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 80%;\n    padding: 10px;\n  }\n}\n\n@media screen and (min-width: 770px) {\n  .check-in__title[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #2876b1;\n    font-size: 35px;\n  }\n  .check-in__form__section[_ngcontent-%COMP%] {\n    margin: 20px 0px 0px 0px;\n    width: 60%;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .check-in__form__submit-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 60%;\n    padding: 10px;\n    margin-top: 30px;\n  }\n}\n\n@media screen and (min-width: 1025px) {\n  .check-in__form__section[_ngcontent-%COMP%] {\n    margin: 20px 0px 0px 0px;\n    width: 50%;\n  }\n  .check-in__form__submit-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .check-in__form__section[_ngcontent-%COMP%] {\n    margin: 20px 0px 0px 0px;\n    width: 600px;\n  }\n  .check-in__form__submit-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYmFzZS9fYmFzZS5zY3NzIiwic3JjL2FwcC9jaGVjay1pbi9jaGVjay1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvYmFzZS9fdHlwb2dyYXBoeS5zY3NzIiwic3JjL3N0eWxlcy9jb21wb25lbnRzL19idXR0b24uc2NzcyIsInNyYy9zdHlsZXMvYWJzdHJhY3QvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9hYnN0cmFjdC9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FDSkE7RUFDSSxpQ0FBQTtBRE9KOztBRVBJO0VBR0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUdBLFlBQUE7RUFDQSxlQUFBO0FGTVI7O0FFSEk7RUFDSSwyQkFBQTtFQUNBLDBDQUFBO0FGS1I7O0FFSFE7RUFDSSxrQ0FBQTtFQUNBLFVBQUE7QUZLWjs7QUVESTtFQUVJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0FGRVI7O0FFQ0k7RUFDSSx5QkNwQ1E7RURxQ1IsV0NsQ007QUhtQ2Q7O0FFQ1E7RUFDSSx5QkN4Q0k7QUh5Q2hCOztBRUdJO0VBQ0kscUJBQUE7RUFDQSxXQzNDTTtBSDBDZDs7QUVHUTtFQUNJLHFCQUFBO0FGRFo7O0FFS0k7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBRkhSOztBRU1JO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtBRkpSOztBQTlEQTtFSUtJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FKNkRKOztBSTNESTtFQUNJLGtCQUFBO0VBQ0EsY0RiUTtFQ2NSLGVBQUE7QUo2RFI7O0FJMURJO0VBQ0ksZ0JBQUE7QUo0RFI7O0FJMURRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBSjREWjs7QUkxRFk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUo0RGhCOztBSXpEWTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUoyRGhCOztBSTdGSTtFQUNJLGFBQUE7QUorRlI7O0FJekRZO0VBQ0ksYUFBQTtBSjJEaEI7O0FJdkRRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBSnlEWjs7QUl2RFk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FKeURoQjs7QUlyRFE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUp1RFo7O0FJbkRJO0VBR1E7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VKbURkO0VJL0NjO0lBQ0ksVUFBQTtJQUNBLGFBQUE7RUppRGxCO0FBQ0Y7O0FJNUNJO0VBRUk7SUFDSSxrQkFBQTtJQUNBLGNEcEZJO0lDcUZKLGVBQUE7RUo2Q1Y7RUl4Q1U7SUFDSSx3QkFBQTtJQUVBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtFSnlDZDtFSXBDYztJQUNJLFVBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUpzQ2xCO0FBQ0Y7O0FJakNJO0VBRVE7SUFDSSx3QkFBQTtJQUNBLFVBQUE7RUprQ2Q7RUkvQmM7SUFDSSxVQUFBO0VKaUNsQjtBQUNGOztBSTVCSTtFQUVRO0lBQ0ksd0JBQUE7SUFDQSxZQUFBO0VKNkJkO0VJMUJjO0lBQ0ksWUFBQTtFSjRCbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrLWluL2NoZWNrLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuLmNoZWNrLWluIHtcbiAgICBAaW5jbHVkZSBmb3Jtc01peGluKCk7XG59IiwiYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufSIsIi5idG4ge1xuICAgICYsXG4gICAgJjpsaW5rLFxuICAgICY6dmlzaXRlZCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcblxuICAgICAgICAvL0NoYW5nZSBmb3IgdGhlIDxidXR0b24+IGVsZW1lbnRcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoJGNvbG9yLWJsYWNrLC4yKTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjIpIHNjYWxlWSgxLjYpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgkY29sb3ItYmxhY2ssLjIpO1xuICAgIH1cbiAgICBcbiAgICAmLS1ibHVlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1yZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgIH1cbiAgICBcbiAgICAmLS1hbmltYXRlZCB7XG4gICAgICAgIGFuaW1hdGlvbjogbW92ZUluQm90dG9tIC41cyBlYXNlLW91dCAuNzVzO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XG4gICAgfVxufSIsIiRjb2xvci1wcmltYXJ5OiAjMjg3NmIxO1xuXG4kY29sb3ItYmxhY2s6ICMwMDAwO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuXG4kY29sb3ItZHVsbC13aGl0ZTogcmdiKDIxMiwgMjEyLCAyMTIpOyIsIkBtaXhpbiBuby1zZWxlY3QtaW5wdXQge1xuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbn1cblxuQG1peGluIGZvcm1zTWl4aW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgIH1cblxuICAgICZfX2Zvcm0ge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICAgICZfX3NlY3Rpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICZfX2xhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJl9fZmllbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbm8tc2VsZWN0LWlucHV0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX3N1Ym1pdC1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pcy1pbnZhbGlkIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDgxcHgpIHtcbiAgICAgICAgJl9fZm9ybSB7XG4gICAgXG4gICAgICAgICAgICAmX19zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAmX19zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc3MHB4KSB7XG4gICAgXG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAmX19mb3JtIHtcbiAgICBcbiAgICAgICAgICAgICZfX3NlY3Rpb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcblxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAmX19zdWJtaXQtYnV0dG9uIHtcbiAgICBcbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNXB4KSB7XG4gICAgICAgICZfX2Zvcm0ge1xuICAgICAgICAgICAgJl9fc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmX19zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIwMHB4KSB7XG4gICAgICAgICZfX2Zvcm0ge1xuICAgICAgICAgICAgJl9fc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZfX3N1Ym1pdC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-check-in',
                templateUrl: './check-in.component.html',
                styleUrls: ['./check-in.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _back_button_shell_back_button_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-button-shell/back-button-shell.component */ "N7r8");
/* harmony import */ var _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-in/check-in.component */ "qPHa");
/* harmony import */ var _emergency_check_in_emergency_check_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emergency-check-in/emergency-check-in.component */ "f2IB");
/* harmony import */ var _error_pages_bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-pages/bad-request/bad-request.component */ "18gs");
/* harmony import */ var _error_pages_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-pages/forbidden/forbidden.component */ "HF9R");
/* harmony import */ var _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-pages/not-found/not-found.component */ "VVPI");
/* harmony import */ var _error_pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error-pages/server-error/server-error.component */ "Yr/A");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _queue_position_queue_position_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./queue-position/queue-position.component */ "Rdo/");













const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    {
        path: "",
        component: _back_button_shell_back_button_shell_component__WEBPACK_IMPORTED_MODULE_2__["BackButtonShellComponent"],
        children: [
            { path: "emergency-check-in", component: _emergency_check_in_emergency_check_in_component__WEBPACK_IMPORTED_MODULE_4__["EmergencyCheckInComponent"] },
            { path: "check-in", component: _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_3__["CheckInComponent"] },
            { path: "queue-position", component: _queue_position_queue_position_component__WEBPACK_IMPORTED_MODULE_10__["QueuePositionComponent"] },
        ]
    },
    {
        path: "doctor",
        loadChildren: () => __webpack_require__.e(/*! import() | doctor-doctor-module */ "doctor-doctor-module").then(__webpack_require__.bind(null, /*! ./doctor/doctor.module */ "0Flv")).then(m => m.DoctorModule)
    },
    { path: "404", component: _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"] },
    { path: "500", component: _error_pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_8__["ServerErrorComponent"] },
    { path: "400", component: _error_pages_bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_5__["BadRequestComponent"] },
    { path: "403", component: _error_pages_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_6__["ForbiddenComponent"] },
    { path: "**", redirectTo: "404", pathMatch: "full" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map