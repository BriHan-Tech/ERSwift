(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-doctor-module"],{

/***/ "0Flv":
/*!*****************************************!*\
  !*** ./src/app/doctor/doctor.module.ts ***!
  \*****************************************/
/*! exports provided: DoctorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorModule", function() { return DoctorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "I5lE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-info/patient-info.component */ "nLxM");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "o78c");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _back_button_shell_back_button_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./back-button-shell/back-button-shell.component */ "0dCg");











class DoctorModule {
}
DoctorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DoctorModule });
DoctorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DoctorModule_Factory(t) { return new (t || DoctorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _back_button_shell_back_button_shell_component__WEBPACK_IMPORTED_MODULE_8__["BackButtonShellComponent"],
                    children: [
                        { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                        { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                        { path: 'patient-info/:id', component: _patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_5__["PatientInfoComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                    ]
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DoctorModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_5__["PatientInfoComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _back_button_shell_back_button_shell_component__WEBPACK_IMPORTED_MODULE_8__["BackButtonShellComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_5__["PatientInfoComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _back_button_shell_back_button_shell_component__WEBPACK_IMPORTED_MODULE_8__["BackButtonShellComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _back_button_shell_back_button_shell_component__WEBPACK_IMPORTED_MODULE_8__["BackButtonShellComponent"],
                            children: [
                                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                                { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                                { path: 'patient-info/:id', component: _patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_5__["PatientInfoComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                            ]
                        }
                    ])
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "0dCg":
/*!*************************************************************************!*\
  !*** ./src/app/doctor/back-button-shell/back-button-shell.component.ts ***!
  \*************************************************************************/
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.4rem;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.2) scaleY(1.6);\n  opacity: 0;\n}\n\n.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(-1px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n\n.btn--blue[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  color: #fff;\n}\n\n.btn--blue[_ngcontent-%COMP%]::after {\n  background-color: #2876b1;\n}\n\n.btn--red[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #fff;\n}\n\n.btn--red[_ngcontent-%COMP%]::after {\n  background-color: red;\n}\n\n.btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated[_ngcontent-%COMP%] {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  height: 50px;\n  width: 50px;\n  z-index: 5000000;\n  position: relative;\n  top: 20px;\n  left: 20px;\n  border-radius: 50px;\n}\n\n.back-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.back-button[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: inline-block;\n  padding: 0px 15px;\n  position: relative;\n  top: -8px;\n  font-size: 50px;\n  color: white;\n}\n\n.back-button[_ngcontent-%COMP%]:hover {\n  background-color: #1f5a87;\n}\n\n@media screen and (min-width: 481px) {\n  .back-button[_ngcontent-%COMP%] {\n    top: 30px;\n    left: 30px;\n  }\n}\n\n@media screen and (min-width: 770px) {\n  .back-button[_ngcontent-%COMP%] {\n    top: 30px;\n    left: 50px;\n  }\n}\n\n@media screen and (min-width: 1025px) {\n  .back-button[_ngcontent-%COMP%] {\n    top: 40px;\n    left: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYmFzZS9fYmFzZS5zY3NzIiwic3JjL2FwcC9kb2N0b3IvYmFjay1idXR0b24tc2hlbGwvYmFjay1idXR0b24tc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL2Jhc2UvX3R5cG9ncmFwaHkuc2NzcyIsInNyYy9zdHlsZXMvY29tcG9uZW50cy9fYnV0dG9uLnNjc3MiLCJzcmMvc3R5bGVzL2Fic3RyYWN0L192YXJpYWJsZXMuc2NzcyIsInNyYy9zdHlsZXMvYWJzdHJhY3QvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBQ0pBO0VBQ0ksaUNBQUE7QURPSjs7QUVQSTtFQUdJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxZQUFBO0VBQ0EsZUFBQTtBRk1SOztBRUhJO0VBQ0ksMkJBQUE7RUFDQSwwQ0FBQTtBRktSOztBRUhRO0VBQ0ksa0NBQUE7RUFDQSxVQUFBO0FGS1o7O0FFREk7RUFFSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtBRkVSOztBRUNJO0VBQ0kseUJDcENRO0VEcUNSLFdDbENNO0FIbUNkOztBRUNRO0VBQ0kseUJDeENJO0FIeUNoQjs7QUVHSTtFQUNJLHFCQUFBO0VBQ0EsV0MzQ007QUgwQ2Q7O0FFR1E7RUFDSSxxQkFBQTtBRkRaOztBRUtJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUZIUjs7QUVNSTtFQUNJLDJDQUFBO0VBQ0EsOEJBQUE7QUZKUjs7QUE5REE7RUFDSSx5QkdIWTtFSElaLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFnRUo7O0FJMUVJO0VBQ0ksYUFBQTtBSjRFUjs7QUEvREk7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQWlFUjs7QUE5REk7RUFDSSx5QkFBQTtBQWdFUjs7QUEzREE7RUFDSTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VBOEROO0FBQ0Y7O0FBM0RBO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsVUFBQTtFQTZETjtBQUNGOztBQTFEQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFVBQUE7RUE0RE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci9iYWNrLWJ1dHRvbi1zaGVsbC9iYWNrLWJ1dHRvbi1zaGVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHotaW5kZXg6IDUwMDAwMDA7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcblxuICAgIEBpbmNsdWRlIG5vLXNlbGVjdC1pbnB1dCgpO1xuXG4gICAgaDEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtOHB4O1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCUpXG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDgxcHgpIHtcbiAgICAuYmFjay1idXR0b24ge1xuICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgIGxlZnQ6IDMwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc3MHB4KSB7XG4gICAgLmJhY2stYnV0dG9uIHtcbiAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICBsZWZ0OiA1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI1cHgpIHtcbiAgICAuYmFjay1idXR0b24ge1xuICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgfVxufSIsImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn0iLCIuYnRuIHtcbiAgICAmLFxuICAgICY6bGluayxcbiAgICAmOnZpc2l0ZWQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG5cbiAgICAgICAgLy9DaGFuZ2UgZm9yIHRoZSA8YnV0dG9uPiBlbGVtZW50XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKCRjb2xvci1ibGFjaywuMik7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4yKSBzY2FsZVkoMS42KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoJGNvbG9yLWJsYWNrLC4yKTtcbiAgICB9XG4gICAgXG4gICAgJi0tYmx1ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cztcbiAgICB9XG4gICAgXG4gICAgJi0tYW5pbWF0ZWQge1xuICAgICAgICBhbmltYXRpb246IG1vdmVJbkJvdHRvbSAuNXMgZWFzZS1vdXQgLjc1cztcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xuICAgIH1cbn0iLCIkY29sb3ItcHJpbWFyeTogIzI4NzZiMTtcblxuJGNvbG9yLWJsYWNrOiAjMDAwMDtcbiRjb2xvci13aGl0ZTogI2ZmZjtcblxuJGNvbG9yLWR1bGwtd2hpdGU6IHJnYigyMTIsIDIxMiwgMjEyKTsiLCJAbWl4aW4gbm8tc2VsZWN0LWlucHV0IHtcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG59XG5cbkBtaXhpbiBmb3Jtc01peGluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB9XG5cbiAgICAmX19mb3JtIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgICAmX19zZWN0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAmX19sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX2ZpZWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG5vLXNlbGVjdC1pbnB1dCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGV4dGFyZWEge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX19zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaXMtaW52YWxpZCB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ4MXB4KSB7XG4gICAgICAgICZfX2Zvcm0ge1xuICAgIFxuICAgICAgICAgICAgJl9fc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgJl9fc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NzBweCkge1xuICAgIFxuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJl9fZm9ybSB7XG4gICAgXG4gICAgICAgICAgICAmX19zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG5cbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgJl9fc3VibWl0LWJ1dHRvbiB7XG4gICAgXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjVweCkge1xuICAgICAgICAmX19mb3JtIHtcbiAgICAgICAgICAgICZfX3NlY3Rpb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJl9fc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMDBweCkge1xuICAgICAgICAmX19mb3JtIHtcbiAgICAgICAgICAgICZfX3NlY3Rpb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmX19zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackButtonShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-back-button-shell',
                templateUrl: './back-button-shell.component.html',
                styleUrls: ['./back-button-shell.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4HH/":
/*!****************************************************!*\
  !*** ./src/app/doctor/dashboard/filter.service.ts ***!
  \****************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterService {
    constructor() { }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(); };
FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "I5lE":
/*!*********************************************************!*\
  !*** ./src/app/doctor/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.service */ "4HH/");
/* harmony import */ var src_app_services_http_get_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http-get.service */ "q5kq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








function DashboardComponent_div_0_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const area_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", area_r3.area);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r3.area);
} }
const _c0 = function () { return { triage: "priority" }; };
const _c1 = function (a0, a1) { return [a0, a1]; };
function DashboardComponent_div_0_div_7_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patient_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, "/doctor/patient-info/" + patient_r8.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Name: ", patient_r8.first_name, " ", patient_r8.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date of Birth: ", patient_r8.date_of_birth, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patient_r8.emer_reasoning, " ");
} }
function DashboardComponent_div_0_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_7_div_1_div_1_Template, 6, 9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const area_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", area_r4.priority_patients);
} }
const _c2 = function () { return { triage: "urgent" }; };
function DashboardComponent_div_0_div_7_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patient_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, "/doctor/patient-info/" + patient_r11.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Name: ", patient_r11.first_name, " ", patient_r11.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date of Birth: ", patient_r11.date_of_birth, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patient_r11.reasoning, " ");
} }
function DashboardComponent_div_0_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_7_div_2_div_1_Template, 6, 9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const area_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", area_r4.patients);
} }
function DashboardComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_7_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_0_div_7_div_2_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const area_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", area_r4.priority_patients);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", area_r4.patients);
} }
function DashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_0_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.areaFilter = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_0_option_6_Template, 2, 2, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_0_div_7_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.areaFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.hospital_areas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filtered_areas);
} }
class DashboardComponent {
    constructor(filterService, httpGetService) {
        this.filterService = filterService;
        this.httpGetService = httpGetService;
        this.hospital_areas = [];
        this.filtered_areas = [];
    }
    get areaFilter() {
        return this.filterService.filterBy;
    }
    set areaFilter(value) {
        this.filterService.filterBy = value;
        this.filtered_areas = this.areaFilter ? this.performFilter(this.areaFilter) : this.hospital_areas;
    }
    ngOnInit() {
        // Combines the Observables
        const hospitalAreas = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([
            this.httpGetService.getPriorityAreas().pipe(),
            this.httpGetService.getHospitalAreas().pipe()
        ]).subscribe(areas => {
            this.sortAreas(areas);
            this.filterOnInit();
            console.log(areas);
        });
    }
    // After Combining the Observables, the Observables look like:
    // [[{}{}{}][{}{}]]
    // Therefore, we for loop over the lists, and combine the 5 objects
    // into one big list.
    sortAreas(area) {
        for (let i = 0; i < area.length; i++) {
            for (let j = 0; j < area[i].length; j++) {
                this.hospital_areas.push(area[i][j]);
            }
        }
    }
    filterOnInit() {
        if (this.filterService.filterBy) {
            this.filtered_areas = this.performFilter(this.filterService.filterBy);
        }
        else {
            this.filtered_areas = this.hospital_areas;
        }
    }
    performFilter(filterBy) {
        return this.hospital_areas.filter((area) => area.area.indexOf(filterBy) !== -1);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_get_service__WEBPACK_IMPORTED_MODULE_3__["HttpGetService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 1, vars: 1, consts: [["class", "dashboard", 4, "ngIf"], [1, "dashboard"], [1, "dashboard__header"], [1, "dashboard__dropdown", 3, "ngModel", "ngModelChange"], ["selected", "", "value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "dashboard__list", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "dashboard__list"], ["class", "dashboard__list__patients-list", 4, "ngIf"], [1, "dashboard__list__patients-list"], ["class", "dashboard__list__patients-list__patient", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "dashboard__list__patients-list__patient", 3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 8, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hospital_areas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.4rem;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.2) scaleY(1.6);\n  opacity: 0;\n}\n\n.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(-1px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n\n.btn--blue[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  color: #fff;\n}\n\n.btn--blue[_ngcontent-%COMP%]::after {\n  background-color: #2876b1;\n}\n\n.btn--red[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #fff;\n}\n\n.btn--red[_ngcontent-%COMP%]::after {\n  background-color: red;\n}\n\n.btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated[_ngcontent-%COMP%] {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-bottom: 30px;\n}\n\n.dashboard__header[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  text-align: center;\n  font-size: 50px;\n  color: #2876b1;\n}\n\n.dashboard__dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 15px;\n  margin-bottom: 30px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 5px;\n  font-size: 20px;\n  width: 80%;\n}\n\n.dashboard__list__patients-list__patient[_ngcontent-%COMP%] {\n  padding: 18px;\n  margin: 12px;\n  border-radius: 15px;\n  background-color: #2876b1;\n  color: #d4d4d4;\n}\n\n@media screen and (min-width: 481px) {\n  .dashboard__dropdown[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  .dashboard__list__patients-list[_ngcontent-%COMP%] {\n    width: 80%;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n\n@media screen and (min-width: 770px) {\n  .dashboard__dropdown[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n  .dashboard__list__patients-list[_ngcontent-%COMP%] {\n    width: 530px;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYmFzZS9fYmFzZS5zY3NzIiwic3JjL2FwcC9kb2N0b3IvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvYmFzZS9fdHlwb2dyYXBoeS5zY3NzIiwic3JjL3N0eWxlcy9jb21wb25lbnRzL19idXR0b24uc2NzcyIsInNyYy9zdHlsZXMvYWJzdHJhY3QvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBQ0pBO0VBQ0ksaUNBQUE7QURPSjs7QUVQSTtFQUdJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxZQUFBO0VBQ0EsZUFBQTtBRk1SOztBRUhJO0VBQ0ksMkJBQUE7RUFDQSwwQ0FBQTtBRktSOztBRUhRO0VBQ0ksa0NBQUE7RUFDQSxVQUFBO0FGS1o7O0FFREk7RUFFSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtBRkVSOztBRUNJO0VBQ0kseUJDcENRO0VEcUNSLFdDbENNO0FIbUNkOztBRUNRO0VBQ0kseUJDeENJO0FIeUNoQjs7QUVHSTtFQUNJLHFCQUFBO0VBQ0EsV0MzQ007QUgwQ2Q7O0FFR1E7RUFDSSxxQkFBQTtBRkRaOztBRUtJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUZIUjs7QUVNSTtFQUNJLDJDQUFBO0VBQ0EsOEJBQUE7QUZKUjs7QUE5REE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQWlFSjs7QUEvREk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNHWFE7QUg0RWhCOztBQTlESTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQStEUjs7QUExRFk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJHaENBO0VIaUNBLGNHNUJHO0FId0ZuQjs7QUF0REE7RUFHUTtJQUNJLFVBQUE7RUF1RFY7RUFuRFU7SUFDSSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7RUFxRGQ7QUFDRjs7QUFoREE7RUFHUTtJQUNJLFlBQUE7RUFnRFY7RUE1Q1U7SUFDSSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7RUE4Q2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuLmRhc2hib2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuXG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICB9XG5cbiAgICAmX19kcm9wZG93biB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuXG4gICAgJl9fbGlzdCB7XG4gICAgICAgICZfX3BhdGllbnRzLWxpc3Qge1xuICAgICAgICAgICAgJl9fcGF0aWVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMThweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWR1bGwtd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDgxcHgpIHtcbiAgICAuZGFzaGJvYXJkIHtcblxuICAgICAgICAmX19kcm9wZG93biB7XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fbGlzdCB7XG4gICAgICAgICAgICAmX19wYXRpZW50cy1saXN0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc3MHB4KSB7XG4gICAgLmRhc2hib2FyZCB7XG5cbiAgICAgICAgJl9fZHJvcGRvd24ge1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fbGlzdCB7XG4gICAgICAgICAgICAmX19wYXRpZW50cy1saXN0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTMwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufSIsIi5idG4ge1xuICAgICYsXG4gICAgJjpsaW5rLFxuICAgICY6dmlzaXRlZCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcblxuICAgICAgICAvL0NoYW5nZSBmb3IgdGhlIDxidXR0b24+IGVsZW1lbnRcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoJGNvbG9yLWJsYWNrLC4yKTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjIpIHNjYWxlWSgxLjYpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgkY29sb3ItYmxhY2ssLjIpO1xuICAgIH1cbiAgICBcbiAgICAmLS1ibHVlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1yZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgIH1cbiAgICBcbiAgICAmLS1hbmltYXRlZCB7XG4gICAgICAgIGFuaW1hdGlvbjogbW92ZUluQm90dG9tIC41cyBlYXNlLW91dCAuNzVzO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XG4gICAgfVxufSIsIiRjb2xvci1wcmltYXJ5OiAjMjg3NmIxO1xuXG4kY29sb3ItYmxhY2s6ICMwMDAwO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuXG4kY29sb3ItZHVsbC13aGl0ZTogcmdiKDIxMiwgMjEyLCAyMTIpOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss'],
            }]
    }], function () { return [{ type: _filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"] }, { type: src_app_services_http_get_service__WEBPACK_IMPORTED_MODULE_3__["HttpGetService"] }]; }, null); })();


/***/ }),

/***/ "nLxM":
/*!***************************************************************!*\
  !*** ./src/app/doctor/patient-info/patient-info.component.ts ***!
  \***************************************************************/
/*! exports provided: PatientInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientInfoComponent", function() { return PatientInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_http_get_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http-get.service */ "q5kq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PatientInfoComponent_div_0_h3_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cause: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.patient.emer_reasoning, "");
} }
function PatientInfoComponent_div_0_h3_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cause: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.patient.reasoning, "");
} }
function PatientInfoComponent_div_0_h3_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Extra Information: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.patient.extra_inforamtion, "");
} }
function PatientInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Patient ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Patient Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Full Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Date of Birth:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sign Up Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cause of Visit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PatientInfoComponent_div_0_h3_33_Template, 5, 1, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PatientInfoComponent_div_0_h3_34_Template, 5, 1, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PatientInfoComponent_div_0_h3_36_Template, 5, 1, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientInfoComponent_div_0_Template_div_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Dismiss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.patient.first_name, " ", ctx_r0.patient.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 7, ctx_r0.patient.date_of_birth), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 9, ctx_r0.patient.current_time, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.patient.emer_reasoning);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.patient.reasoning);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.patient.extra_inforamtion);
} }
class PatientInfoComponent {
    constructor(route, router, httpGetService, http) {
        this.route = route;
        this.router = router;
        this.httpGetService = httpGetService;
        this.http = http;
        this.erswiftAPIUrl = "http://127.0.0.1:8000/api/";
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.patient_id = +params.get('id');
            this.triage = params.get('triage');
            this.getPatient(this.patient_id);
        });
    }
    getPatient(id) {
        if (this.triage == "priority") {
            this.httpGetService.getPatientFromPriority(id).subscribe(patient => {
                this.patient = patient;
                console.log(this.patient);
            });
        }
        else if (this.triage == "urgent") {
            this.httpGetService.getPatientFromNormal(id).subscribe(patient => {
                this.patient = patient;
            });
        }
    }
    delete() {
        if (this.triage == "priority") {
            const url = this.erswiftAPIUrl + "patients/priority_patient/" + this.patient.id + "/";
            if (confirm("Is the Patient Dismissed?")) {
                this.http.delete(url).subscribe((res) => this.router.navigate(['/doctor/dashboard']));
            }
        }
        else if (this.triage == "urgent") {
            const url = this.erswiftAPIUrl + "patients/patient/" + this.patient.id + "/";
            if (confirm("Is the Patient Dismissed?")) {
                this.http.delete(url).subscribe((res) => this.router.navigate(['/doctor/dashboard']));
            }
        }
    }
    goToDashBoard() {
    }
}
PatientInfoComponent.ɵfac = function PatientInfoComponent_Factory(t) { return new (t || PatientInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_get_service__WEBPACK_IMPORTED_MODULE_2__["HttpGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PatientInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientInfoComponent, selectors: [["app-patient-info"]], decls: 1, vars: 1, consts: [["class", "patient-info", 4, "ngIf"], [1, "patient-info"], [1, "patient-info__title"], [1, "patient-info__dash"], [1, "patient-info__body"], [1, "patient-info__body__section-header"], [1, "patient-info__body__field"], ["class", "patient-info__body__field", 4, "ngIf"], [1, "patient-info__center"], [1, "patient-info__center__dismiss-button", "btn", "btn--blue", 3, "click"]], template: function PatientInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PatientInfoComponent_div_0_Template, 40, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.patient);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.4rem;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.2) scaleY(1.6);\n  opacity: 0;\n}\n\n.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(-1px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n\n.btn--blue[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  color: #fff;\n}\n\n.btn--blue[_ngcontent-%COMP%]::after {\n  background-color: #2876b1;\n}\n\n.btn--red[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #fff;\n}\n\n.btn--red[_ngcontent-%COMP%]::after {\n  background-color: red;\n}\n\n.btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated[_ngcontent-%COMP%] {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.patient-info[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  padding-bottom: 30px;\n}\n\n.patient-info__title[_ngcontent-%COMP%] {\n  color: #2876b1;\n  padding-top: 50px;\n  font-size: 40px;\n  text-align: center;\n}\n\n.patient-info__dash[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 300px;\n  height: 5px;\n  background-color: #2876b1;\n}\n\n.patient-info__body[_ngcontent-%COMP%] {\n  width: 300px;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.patient-info__body__section-header[_ngcontent-%COMP%] {\n  color: #2876b1;\n  margin-top: 20px;\n}\n\n.patient-info__body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #2876b1;\n}\n\n.patient-info__center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.patient-info__center__dismiss-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 300px;\n  padding: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYmFzZS9fYmFzZS5zY3NzIiwic3JjL2FwcC9kb2N0b3IvcGF0aWVudC1pbmZvL3BhdGllbnQtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvYmFzZS9fdHlwb2dyYXBoeS5zY3NzIiwic3JjL3N0eWxlcy9jb21wb25lbnRzL19idXR0b24uc2NzcyIsInNyYy9zdHlsZXMvYWJzdHJhY3QvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBQ0pBO0VBQ0ksaUNBQUE7QURPSjs7QUVQSTtFQUdJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxZQUFBO0VBQ0EsZUFBQTtBRk1SOztBRUhJO0VBQ0ksMkJBQUE7RUFDQSwwQ0FBQTtBRktSOztBRUhRO0VBQ0ksa0NBQUE7RUFDQSxVQUFBO0FGS1o7O0FFREk7RUFFSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtBRkVSOztBRUNJO0VBQ0kseUJDcENRO0VEcUNSLFdDbENNO0FIbUNkOztBRUNRO0VBQ0kseUJDeENJO0FIeUNoQjs7QUVHSTtFQUNJLHFCQUFBO0VBQ0EsV0MzQ007QUgwQ2Q7O0FFR1E7RUFDSSxxQkFBQTtBRkRaOztBRUtJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUZIUjs7QUVNSTtFQUNJLDJDQUFBO0VBQ0EsOEJBQUE7QUZKUjs7QUE5REE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQWlFSjs7QUEvREk7RUFDSSxjR1ZRO0VIV1IsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFpRVI7O0FBOURJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5Qkd4QlE7QUh3RmhCOztBQTdESTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQStEUjs7QUE3RFE7RUFDSSxjR2xDSTtFSG1DSixnQkFBQTtBQStEWjs7QUE1RFE7RUFDSSxjR3ZDSTtBSHFHaEI7O0FBMURJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBNERSOztBQTFEUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQTREWiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci9wYXRpZW50LWluZm8vcGF0aWVudC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbi5wYXRpZW50LWluZm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgICZfX2Rhc2gge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICB9XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG4gICAgICAgICZfX3NlY3Rpb24taGVhZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2NlbnRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICZfX2Rpc21pc3MtYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59IiwiLmJ0biB7XG4gICAgJixcbiAgICAmOmxpbmssXG4gICAgJjp2aXNpdGVkIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuXG4gICAgICAgIC8vQ2hhbmdlIGZvciB0aGUgPGJ1dHRvbj4gZWxlbWVudFxuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgkY29sb3ItYmxhY2ssLjIpO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMikgc2NhbGVZKDEuNik7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKCRjb2xvci1ibGFjaywuMik7XG4gICAgfVxuICAgIFxuICAgICYtLWJsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXJlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XG4gICAgfVxuICAgIFxuICAgICYtLWFuaW1hdGVkIHtcbiAgICAgICAgYW5pbWF0aW9uOiBtb3ZlSW5Cb3R0b20gLjVzIGVhc2Utb3V0IC43NXM7XG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcbiAgICB9XG59IiwiJGNvbG9yLXByaW1hcnk6ICMyODc2YjE7XG5cbiRjb2xvci1ibGFjazogIzAwMDA7XG4kY29sb3Itd2hpdGU6ICNmZmY7XG5cbiRjb2xvci1kdWxsLXdoaXRlOiByZ2IoMjEyLCAyMTIsIDIxMik7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patient-info',
                templateUrl: './patient-info.component.html',
                styleUrls: ['./patient-info.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_http_get_service__WEBPACK_IMPORTED_MODULE_2__["HttpGetService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "o78c":
/*!*************************************************!*\
  !*** ./src/app/doctor/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoginComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There appears to have been an error! Please check over your login information!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    save() {
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.get("username").value, this.loginForm.get("password").value).subscribe(success => this.router.navigate(['']), error => this.error = error);
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 10, consts: [[1, "login"], [1, "login__header"], [1, "login__form", 3, "formGroup", "ngSubmit"], [1, "login__form__field"], [1, "login__form__field__label"], ["type", "text", "placeholder", "Enter Username", "formControlName", "username", "autocomplete", "username", 1, "login__form__field__input", 3, "ngClass"], ["class", "is-invalid", 4, "ngIf"], ["type", "password", "placeholder", "Enter Password", "formControlName", "password", "autocomplete", "current-password", 1, "login__form__field__input", 3, "ngClass"], ["type", "submit", 1, "btn", "btn--blue", "login__form__submit"], ["class", "login__check-info", 4, "ngIf"], [1, "is-invalid"], [1, "login__check-info"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log In!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_p_10_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_p_16_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, (ctx.loginForm.get("username").touched || ctx.loginForm.get("username").dirty) && !ctx.loginForm.get("username").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loginForm.get("username").errors == null ? null : ctx.loginForm.get("username").errors.required) && ctx.loginForm.get("username").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, (ctx.loginForm.get("password").touched || ctx.loginForm.get("password").dirty) && !ctx.loginForm.get("password").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loginForm.get("password").errors == null ? null : ctx.loginForm.get("password").errors.required) && ctx.loginForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.4rem;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.2) scaleY(1.6);\n  opacity: 0;\n}\n\n.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(-1px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n\n.btn--blue[_ngcontent-%COMP%] {\n  background-color: #2876b1;\n  color: #fff;\n}\n\n.btn--blue[_ngcontent-%COMP%]::after {\n  background-color: #2876b1;\n}\n\n.btn--red[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #fff;\n}\n\n.btn--red[_ngcontent-%COMP%]::after {\n  background-color: red;\n}\n\n.btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated[_ngcontent-%COMP%] {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.login[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.login__header[_ngcontent-%COMP%] {\n  color: #2876b1;\n  font-size: 30px;\n}\n\n.login__form[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.login__form[_ngcontent-%COMP%]   .is-invalid[_ngcontent-%COMP%] {\n  color: red;\n  border-color: red;\n}\n\n.login__form__field[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.login__form__field__label[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.login__form__field__input[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 97%;\n  margin-top: 5px;\n  font-size: 20px;\n  font-weight: 500;\n  border: 1px solid black;\n}\n\n.login__form__field__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.login__form__submit[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding: 10px;\n}\n\n.login__check-info[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 10px;\n}\n\n.login__check-info[_ngcontent-%COMP%]   .is-invalid[_ngcontent-%COMP%] {\n  color: red;\n  border-color: red;\n}\n\n@media screen and (min-width: 770px) {\n  .back-button[_ngcontent-%COMP%] {\n    top: 30px;\n    left: 50px;\n  }\n}\n\n@media screen and (min-width: 1025px) {\n  .back-button[_ngcontent-%COMP%] {\n    top: 40px;\n    left: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYmFzZS9fYmFzZS5zY3NzIiwic3JjL2FwcC9kb2N0b3IvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL2Jhc2UvX3R5cG9ncmFwaHkuc2NzcyIsInNyYy9zdHlsZXMvY29tcG9uZW50cy9fYnV0dG9uLnNjc3MiLCJzcmMvc3R5bGVzL2Fic3RyYWN0L192YXJpYWJsZXMuc2NzcyIsInNyYy9zdHlsZXMvYWJzdHJhY3QvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBQ0pBO0VBQ0ksaUNBQUE7QURPSjs7QUVQSTtFQUdJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxZQUFBO0VBQ0EsZUFBQTtBRk1SOztBRUhJO0VBQ0ksMkJBQUE7RUFDQSwwQ0FBQTtBRktSOztBRUhRO0VBQ0ksa0NBQUE7RUFDQSxVQUFBO0FGS1o7O0FFREk7RUFFSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtBRkVSOztBRUNJO0VBQ0kseUJDcENRO0VEcUNSLFdDbENNO0FIbUNkOztBRUNRO0VBQ0kseUJDeENJO0FIeUNoQjs7QUVHSTtFQUNJLHFCQUFBO0VBQ0EsV0MzQ007QUgwQ2Q7O0FFR1E7RUFDSSxxQkFBQTtBRkRaOztBRUtJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUZIUjs7QUVNSTtFQUNJLDJDQUFBO0VBQ0EsOEJBQUE7QUZKUjs7QUE5REE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWdFSjs7QUE5REk7RUFDSSxjR2JRO0VIY1IsZUFBQTtBQWdFUjs7QUE3REk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQStEUjs7QUE3RFE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUErRFo7O0FBNURRO0VBQ0ksZ0JBQUE7QUE4RFo7O0FBNURZO0VBQ0ksZUFBQTtBQThEaEI7O0FBM0RZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsdUJBQUE7QUE0RGhCOztBSXBHSTtFQUNJLGFBQUE7QUpzR1I7O0FBekRRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBMkRaOztBQXZESTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUF5RFI7O0FBdkRRO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBeURaOztBQXBEQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFVBQUE7RUF1RE47QUFDRjs7QUFwREE7RUFDSTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VBc0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kb2N0b3IvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG4ubG9naW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwJTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgJl9fZm9ybSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLmlzLWludmFsaWQge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fZmllbGQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJl9fbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJl9faW5wdXQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTclOyAvLyBTaW5jZSB0aGVyZSBpcyBhIHBhZGRpbmcgb2YgNXB4LCB0aGUgd2lkdGggY2FuIG5vdCBiZSAxMDAlLlxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbm8tc2VsZWN0LWlucHV0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX19zdWJtaXQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jaGVjay1pbmZvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgICAgICAuaXMtaW52YWxpZCB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzcwcHgpIHtcbiAgICAuYmFjay1idXR0b24ge1xuICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjVweCkge1xuICAgIC5iYWNrLWJ1dHRvbiB7XG4gICAgICAgIHRvcDogNDBweDtcbiAgICAgICAgbGVmdDogNTBweDtcbiAgICB9XG59XG5cbiIsImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn0iLCIuYnRuIHtcbiAgICAmLFxuICAgICY6bGluayxcbiAgICAmOnZpc2l0ZWQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG5cbiAgICAgICAgLy9DaGFuZ2UgZm9yIHRoZSA8YnV0dG9uPiBlbGVtZW50XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKCRjb2xvci1ibGFjaywuMik7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4yKSBzY2FsZVkoMS42KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoJGNvbG9yLWJsYWNrLC4yKTtcbiAgICB9XG4gICAgXG4gICAgJi0tYmx1ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cztcbiAgICB9XG4gICAgXG4gICAgJi0tYW5pbWF0ZWQge1xuICAgICAgICBhbmltYXRpb246IG1vdmVJbkJvdHRvbSAuNXMgZWFzZS1vdXQgLjc1cztcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xuICAgIH1cbn0iLCIkY29sb3ItcHJpbWFyeTogIzI4NzZiMTtcblxuJGNvbG9yLWJsYWNrOiAjMDAwMDtcbiRjb2xvci13aGl0ZTogI2ZmZjtcblxuJGNvbG9yLWR1bGwtd2hpdGU6IHJnYigyMTIsIDIxMiwgMjEyKTsiLCJAbWl4aW4gbm8tc2VsZWN0LWlucHV0IHtcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG59XG5cbkBtaXhpbiBmb3Jtc01peGluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB9XG5cbiAgICAmX19mb3JtIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgICAmX19zZWN0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAmX19sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX2ZpZWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG5vLXNlbGVjdC1pbnB1dCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGV4dGFyZWEge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX19zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaXMtaW52YWxpZCB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ4MXB4KSB7XG4gICAgICAgICZfX2Zvcm0ge1xuICAgIFxuICAgICAgICAgICAgJl9fc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgJl9fc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NzBweCkge1xuICAgIFxuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJl9fZm9ybSB7XG4gICAgXG4gICAgICAgICAgICAmX19zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG5cbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgJl9fc3VibWl0LWJ1dHRvbiB7XG4gICAgXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjVweCkge1xuICAgICAgICAmX19mb3JtIHtcbiAgICAgICAgICAgICZfX3NlY3Rpb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJl9fc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMDBweCkge1xuICAgICAgICAmX19mb3JtIHtcbiAgICAgICAgICAgICZfX3NlY3Rpb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmX19zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=doctor-doctor-module.js.map