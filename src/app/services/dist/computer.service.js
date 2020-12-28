"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.cardSaveService = exports.CardDoneService = exports.CardOutsideService = exports.CardInsideService = exports.CardErrorService = exports.ComputerService = exports.TutorialService = void 0;
var core_1 = require("@angular/core");
var TutorialService = /** @class */ (function () {
    function TutorialService(db) {
        this.db = db;
        this.dbPath = '/tutorials';
        this.tutorialsRef = null;
        this.tutorialsRef = db.collection(this.dbPath);
    }
    TutorialService.prototype.getAll = function () {
        return this.tutorialsRef;
    };
    TutorialService.prototype.create = function (tutorial) {
        return this.tutorialsRef.add(__assign({}, tutorial));
    };
    TutorialService.prototype.update = function (id, data) {
        return this.tutorialsRef.doc(id).update(data);
    };
    TutorialService.prototype["delete"] = function (id) {
        return this.tutorialsRef.doc(id)["delete"]();
    };
    TutorialService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TutorialService);
    return TutorialService;
}());
exports.TutorialService = TutorialService;
var ComputerService = /** @class */ (function () {
    function ComputerService(db) {
        this.db = db;
        this.dbPath = '/computers';
        this.tutorialsRef = null;
        this.tutorialsRef = db.collection(this.dbPath);
    }
    ComputerService.prototype.updateSortAdminMateriTopicLesson = function (materiSlug, state) {
        throw new Error('Method not implemented.');
    };
    ComputerService.prototype.getAll = function () {
        return this.tutorialsRef;
    };
    ComputerService.prototype.create = function (tutorial) {
        return this.tutorialsRef.add(__assign({}, tutorial));
    };
    ComputerService.prototype.update = function (id, data) {
        return this.tutorialsRef.doc(id).update(data);
    };
    ComputerService.prototype["delete"] = function (id) {
        return this.tutorialsRef.doc(id)["delete"]();
    };
    ComputerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ComputerService);
    return ComputerService;
}());
exports.ComputerService = ComputerService;
var CardErrorService = /** @class */ (function () {
    function CardErrorService(db) {
        this.db = db;
        this.dbPath = '/cardError';
        this.ErrorsRef = null;
        this.ErrorsRef = db.collection(this.dbPath);
    }
    CardErrorService.prototype.getAll = function () {
        return this.ErrorsRef;
    };
    CardErrorService.prototype.create = function (cardError) {
        return this.ErrorsRef.add(__assign({}, cardError));
    };
    CardErrorService.prototype.update = function (id, data) {
        return this.ErrorsRef.doc(id).update(data);
    };
    CardErrorService.prototype["delete"] = function (id) {
        return this.ErrorsRef.doc(id)["delete"]();
    };
    CardErrorService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CardErrorService);
    return CardErrorService;
}());
exports.CardErrorService = CardErrorService;
var CardInsideService = /** @class */ (function () {
    function CardInsideService(db) {
        this.db = db;
        this.dbPath = '/cardInside';
        this.cardInsidesRef = null;
        this.cardInsidesRef = db.collection(this.dbPath);
    }
    CardInsideService.prototype.getAll = function () {
        return this.cardInsidesRef;
    };
    CardInsideService.prototype.create = function (tutorial) {
        return this.cardInsidesRef.add(__assign({}, tutorial));
    };
    CardInsideService.prototype.update = function (id, data) {
        return this.cardInsidesRef.doc(id).update(data);
    };
    CardInsideService.prototype["delete"] = function (id) {
        return this.cardInsidesRef.doc(id)["delete"]();
    };
    CardInsideService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CardInsideService);
    return CardInsideService;
}());
exports.CardInsideService = CardInsideService;
var CardOutsideService = /** @class */ (function () {
    function CardOutsideService(db) {
        this.db = db;
        this.dbPath = '/cardOutside';
        this.cardOutsidesRef = null;
        this.cardOutsidesRef = db.collection(this.dbPath);
    }
    CardOutsideService.prototype.getAll = function () {
        return this.cardOutsidesRef;
    };
    CardOutsideService.prototype.create = function (tutorial) {
        return this.cardOutsidesRef.add(__assign({}, tutorial));
    };
    CardOutsideService.prototype.update = function (id, data) {
        return this.cardOutsidesRef.doc(id).update(data);
    };
    CardOutsideService.prototype["delete"] = function (id) {
        return this.cardOutsidesRef.doc(id)["delete"]();
    };
    CardOutsideService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CardOutsideService);
    return CardOutsideService;
}());
exports.CardOutsideService = CardOutsideService;
var CardDoneService = /** @class */ (function () {
    function CardDoneService(db) {
        this.db = db;
        this.dbPath = '/cardDone';
        this.cardDonesRef = null;
        this.cardDonesRef = db.collection(this.dbPath);
    }
    CardDoneService.prototype.getAll = function () {
        return this.cardDonesRef;
    };
    CardDoneService.prototype.create = function (tutorial) {
        return this.cardDonesRef.add(__assign({}, tutorial));
    };
    CardDoneService.prototype.update = function (id, data) {
        return this.cardDonesRef.doc(id).update(data);
    };
    CardDoneService.prototype["delete"] = function (id) {
        return this.cardDonesRef.doc(id)["delete"]();
    };
    CardDoneService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CardDoneService);
    return CardDoneService;
}());
exports.CardDoneService = CardDoneService;
var cardSaveService = /** @class */ (function () {
    function cardSaveService(db) {
        this.db = db;
        this.dbPath = '/cardSave';
        this.tutorialsRef = null;
        this.tutorialsRef = db.collection(this.dbPath);
    }
    cardSaveService.prototype.getAll = function () {
        return this.tutorialsRef;
    };
    cardSaveService.prototype.create = function (tutorial) {
        return this.tutorialsRef.add(__assign({}, tutorial));
    };
    cardSaveService.prototype.update = function (id, data) {
        return this.tutorialsRef.doc(id).update(data);
    };
    cardSaveService.prototype["delete"] = function (id) {
        return this.tutorialsRef.doc(id)["delete"]();
    };
    cardSaveService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], cardSaveService);
    return cardSaveService;
}());
exports.cardSaveService = cardSaveService;
