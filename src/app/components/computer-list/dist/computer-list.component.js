"use strict";
var __assign = (this && this.__assign) || function() {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComputerListComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ComputerListComponent = /** @class */ (function() {
    function ComputerListComponent(tutorialService, modalService, cardErrorService, cardInsideService, cardDoneService, cardOutsideService, firebaseService) {
        this.tutorialService = tutorialService;
        this.modalService = modalService;
        this.cardErrorService = cardErrorService;
        this.cardInsideService = cardInsideService;
        this.cardDoneService = cardDoneService;
        this.cardOutsideService = cardOutsideService;
        this.firebaseService = firebaseService;
        this.isLogout = new core_1.EventEmitter();
        this.currentItem = null;
        this.currentIndex = -1;
        this.TenMay = '';
        this.closeResult = '';
    }
    ComputerListComponent.prototype.ngOnInit = function() {
        this.retrieveTutorials();
        this.retrieveDone();
        this.retrieveError();
        this.retrieveInside();
        this.retrieveOutside();
    };
    ComputerListComponent.prototype.OnLogout = function() {
        this.firebaseService.logout();
        this.isLogout.emit();
    };
    ComputerListComponent.prototype.refreshList = function() {
        this.currentItem = null;
        this.currentIndex = -1;
        this.retrieveTutorials();
        this.retrieveDone();
        this.retrieveError();
        this.retrieveInside();
        this.retrieveOutside();
    };
    ComputerListComponent.prototype.retrieveTutorials = function() {
        var _this = this;
        this.tutorialService.getAll().snapshotChanges().pipe(operators_1.map(function(changes) {
            return changes.map(function(c) {
                return (__assign({ id: c.payload.doc.id }, c.payload.doc.data()));
            });
        })).subscribe(function(data) {
            _this.tutorials = data;
        });
    };
    ComputerListComponent.prototype.retrieveError = function() {
        var _this = this;
        this.cardErrorService.getAll().snapshotChanges().pipe(operators_1.map(function(changes) {
            return changes.map(function(c) {
                return (__assign({ id: c.payload.doc.id }, c.payload.doc.data()));
            });
        })).subscribe(function(data) {
            _this.cardErrors = data;
        });
    };
    ComputerListComponent.prototype.retrieveInside = function() {
        var _this = this;
        this.cardInsideService.getAll().snapshotChanges().pipe(operators_1.map(function(changes) {
            return changes.map(function(c) {
                return (__assign({ id: c.payload.doc.id }, c.payload.doc.data()));
            });
        })).subscribe(function(data) {
            _this.cardInsides = data;
        });
    };
    ComputerListComponent.prototype.ActionLog = function(message) {
        console.log(message);
    };
    ComputerListComponent.prototype.retrieveOutside = function() {
        var _this = this;
        this.cardOutsideService.getAll().snapshotChanges().pipe(operators_1.map(function(changes) {
            return changes.map(function(c) {
                return (__assign({ id: c.payload.doc.id }, c.payload.doc.data()));
            });
        })).subscribe(function(data) {
            _this.cardOutsides = data;
        });
    };
    ComputerListComponent.prototype.retrieveDone = function() {
        var _this = this;
        this.cardDoneService.getAll().snapshotChanges().pipe(operators_1.map(function(changes) {
            return changes.map(function(c) {
                return (__assign({ id: c.payload.doc.id }, c.payload.doc.data()));
            });
        })).subscribe(function(data) {
            _this.cardDones = data;
        });
    };
    ComputerListComponent.prototype.setActiveTutorial = function(tutorial, index) {
        this.currentItem = tutorial;
        this.currentIndex = index;
    };
    ComputerListComponent.prototype.setActiveError = function(error, index) {
        this.currentItem = error;
        this.currentIndex = index;
    };
    ComputerListComponent.prototype.drop = function(event) {
        if (event.previousContainer === event.container) {
            drag_drop_1.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            drag_drop_1.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    ComputerListComponent.prototype.open = function(content) {
        var _this = this;
        this.modalService.open(content, { size: 'lg' }).result.then(function(result) {
            _this.closeResult = "Closed with: " + result;
        }, function(reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ComputerListComponent.prototype.getDismissReason = function(reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return "with: " + reason;
        }
    };
    ComputerListComponent.prototype.openLg = function(content) {
        this.modalService.open(content, { size: 'lg' });
    };
    __decorate([
        core_1.Output()
    ], ComputerListComponent.prototype, "isLogout");
    ComputerListComponent = __decorate([
        core_1.Component({
            selector: 'app-computer-list',
            templateUrl: './computer-list.component.html',
            styleUrls: ['./computer-list.component.css']
        })
    ], ComputerListComponent);
    return ComputerListComponent;
}());
exports.ComputerListComponent = ComputerListComponent;
