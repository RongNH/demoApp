"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.AppRoutingModule = void 0;

var core_1 = require("@angular/core");

var router_1 = require("@angular/router");

var computer_list_component_1 = require("./components/computer-list/computer-list.component");

var computer_add_component_1 = require("./components/computer-add/computer-add.component");

var test_component_1 = require("./test/test.component");

var HoaDon_component_1 = require("./components/HoaDon/HoaDon.component");

var computer_detail_component_1 = require("./components/computer-detail/computer-detail.component");

var login_component_1 = require("./components/login/login.component");

var routes = [{
  path: '',
  redirectTo: 'App',
  pathMatch: 'full'
}, {
  path: 'App',
  component: login_component_1.LoginComponent
}, {
  path: 'Computer',
  component: computer_list_component_1.ComputerListComponent
}, {
  path: 'AddComputer',
  component: computer_add_component_1.ComputerAddComponent
}, {
  path: 'test',
  component: test_component_1.TestComponent
}, {
  path: 'App/bill',
  component: HoaDon_component_1.HoaDonComponent
}, {
  path: 'detail',
  component: computer_detail_component_1.ComputerDetailComponent
}, {
  path: 'test',
  component: test_component_1.TestComponent
}];

var AppRoutingModule =
/** @class */
function () {
  function AppRoutingModule() {}

  AppRoutingModule = __decorate([core_1.NgModule({
    imports: [router_1.RouterModule.forRoot(routes)],
    exports: [router_1.RouterModule]
  })], AppRoutingModule);
  return AppRoutingModule;
}();

exports.AppRoutingModule = AppRoutingModule;