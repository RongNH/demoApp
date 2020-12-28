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
exports.AppModule = void 0;

var platform_browser_1 = require("@angular/platform-browser");

var core_1 = require("@angular/core");

var forms_1 = require("@angular/forms");

var drag_drop_1 = require("@angular/cdk/drag-drop");

var fire_1 = require("@angular/fire");

var firestore_1 = require("@angular/fire/firestore");

var environment_1 = require("../environments/environment");

var app_routing_module_1 = require("./app-routing.module");

var app_component_1 = require("./app.component");

var animations_1 = require("@angular/platform-browser/animations");

var computer_list_component_1 = require("./components/computer-list/computer-list.component");

var computer_add_component_1 = require("./components/computer-add/computer-add.component");

var computer_detail_component_1 = require("./components/computer-detail/computer-detail.component");

var test_component_1 = require("./test/test.component");

var http_1 = require("@angular/common/http");

var HoaDon_component_1 = require("./components/HoaDon/HoaDon.component");

var ngx_print_1 = require("ngx-print");

var done_detail_component_1 = require("./components/done-detail/done-detail.component");

var inside_detail_component_1 = require("./components/inside-detail/inside-detail.component");

var outside_detail_component_1 = require("./components/outside-detail/outside-detail.component");

var login_component_1 = require("./components/login/login.component");

var home_component_1 = require("./components/home/home.component");

var firebase_service_1 = require("./services/firebase.service");

var AppModule =
/** @class */
function () {
  function AppModule() {}

  AppModule = __decorate([core_1.NgModule({
    declarations: [app_component_1.AppComponent, computer_list_component_1.ComputerListComponent, computer_add_component_1.ComputerAddComponent, computer_detail_component_1.ComputerDetailComponent, test_component_1.TestComponent, HoaDon_component_1.HoaDonComponent, done_detail_component_1.DoneDetailComponent, inside_detail_component_1.InsideDetailComponent, outside_detail_component_1.OutsideDetailComponent, login_component_1.LoginComponent, home_component_1.HomeComponent],
    imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, forms_1.FormsModule, fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase), firestore_1.AngularFirestoreModule, animations_1.BrowserAnimationsModule, drag_drop_1.DragDropModule, http_1.HttpClientModule, forms_1.ReactiveFormsModule, ngx_print_1.NgxPrintModule],
    providers: [firebase_service_1.FirebaseService],
    bootstrap: [app_component_1.AppComponent, computer_list_component_1.ComputerListComponent]
  })], AppModule);
  return AppModule;
}();

exports.AppModule = AppModule;