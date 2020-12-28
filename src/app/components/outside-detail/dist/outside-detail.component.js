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
exports.OutsideDetailComponent = void 0;
var core_1 = require("@angular/core");
var Done_1 = require("src/app/models/Done");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var OutsideDetailComponent = /** @class */ (function() {
    function OutsideDetailComponent(tutorialService, modalService, afStorage, cardDoneService) {
        this.tutorialService = tutorialService;
        this.modalService = modalService;
        this.afStorage = afStorage;
        this.cardDoneService = cardDoneService;
        this.refreshList = new core_1.EventEmitter();
        this.submitted = false;
        this.currentItem = null;
        this.doneCard = new Done_1["default"]();
        this.message = '';
        this.update = false;
        this.file = [];
        this.urlLength = [];
        this.tag = "";
        this.closeResult = '';
    }
    OutsideDetailComponent.prototype.onCloseModal = function(event) {
        this.submitted = true;
    };
    OutsideDetailComponent.prototype.ngOnInit = function() {
        this.message = '';
        for (var i = 0; i < this.currentItem.img.length; i++) {
            this.urlLength.push(this.getUrl(i));
            console.log(this.urlLength[i]);
        }
    };
    OutsideDetailComponent.prototype.getUrl = function(i) {
        this.fileRef = this.afStorage.ref(this.currentItem.img[i]);
        this.downloadURL = this.fileRef.getDownloadURL();
        return this.downloadURL;
    };
    OutsideDetailComponent.prototype.ngOnChanges = function() {
        this.message = '';
        this.currentItem = __assign({}, this.tutorial);
    };
    OutsideDetailComponent.prototype.updatePublished = function(status) {
        var _this = this;
        this.tutorialService.update(this.currentItem.id, { published: status })
            .then(function() {
                _this.currentItem.published = status;
                _this.message = 'The status was updated successfully!';
            })["catch"](function(err) { return console.log(err); });
    };
    OutsideDetailComponent.prototype.update = function() {
        var _this = this;
        var data = {
            TenMay: this.currentItem.TenMay,
            MaTaiSan: this.currentItem.MaTaiSan,
            MoTa: this.currentItem.MoTa,
            Tag: this.currentItem.Tag,
            img: this.currentItem.img,
            username: this.currentItem.username,
            time: this.currentItem.time,
            KetLuan: this.currentItem.KetLuan
        };
        this.update = true;
        this.tutorialService.update(this.currentItem.id, data)
            .then(function() { return _this.message = 'The tutorial was updated successfully!'; })["catch"](function(err) { return console.log(err); });
    };
    OutsideDetailComponent.prototype.uploadFile = function(event) {
        this.file = event.target.files;
        for (var _i = 0, _a = this.file; _i < _a.length; _i++) {
            var image = _a[_i];
            this.tutorial.img.push(image.name);
            this.afStorage.upload(image.name, image);
        }
    };
    OutsideDetailComponent.prototype.uploadImg = function() {};
    OutsideDetailComponent.prototype.removeImg = function() {
        while (this.currentItem.img.length) {
            this.urlLength.pop();
            this.currentItem.img.pop();
        }
    };
    OutsideDetailComponent.prototype.moveDone = function() {
        var _this = this;
        this.doneCard.TenMay = this.currentItem.TenMay;
        this.doneCard.published = this.currentItem.published;
        this.doneCard.MaTaiSan = this.currentItem.MaTaiSan;
        this.doneCard.MoTa = this.currentItem.MoTa;
        this.doneCard.Tag = this.currentItem.Tag;
        this.doneCard.img = this.currentItem.img;
        this.doneCard.username = this.currentItem.username;
        this.doneCard.mail = this.currentItem.mail;
        this.doneCard.time = this.currentItem.time;
        this.doneCard.timeFix = this.currentItem.timeFix;
        this.doneCard.timeDone = Date.now();
        this.doneCard.KetLuan = this.currentItem.KetLuan;
        this.cardDoneService.create(this.doneCard).then(function() {
            console.log('Created new item successfully!');
            _this.submitted = true;
        });
        this.deleteTutorial();
    };
    OutsideDetailComponent.prototype.deleteTutorial = function() {
        var _this = this;
        this.tutorialService["delete"](this.currentItem.id)
            .then(function() {
                _this.refreshList.emit('The tutorial was updated successfully!');
                _this.message = 'The tutorial was updated successfully!';
            })["catch"](function(err) { return console.log(err); });
    };
    OutsideDetailComponent.prototype.onAddTag_1 = function() {
        console.log(this.tag = "CPU");
        this.tutorial.Tag.push(this.tag);
    };
    OutsideDetailComponent.prototype.onAddTag = function() {
        console.log(this.tag = "Màn Hình");
        this.currentItem.Tag.push(this.tag);
    };
    OutsideDetailComponent.prototype.onAddTag = function() {
        console.log(this.tag = "Case");
        this.currentItem.Tag.push(this.tag);
    };
    OutsideDetailComponent.prototype.onAddTag = function() {
        console.log(this.tag = "Bàn Phím");
        this.currentItem.Tag.push(this.tag);
    };
    OutsideDetailComponent.prototype.onAddTag = function() {
        console.log(this.tag = "Nguồn");
        this.currentItem.Tag.push(this.tag);
    };
    OutsideDetailComponent.prototype.onAddTag = function() {
        console.log(this.tag = "Phần mềm");
        this.currentItem.Tag.push(this.tag);
    };
    OutsideDetailComponent.prototype.onAddTag = function() {
        console.log(this.tag = "RAM");
        this.tutorial.Tag.push(this.tag);
    };
    OutsideDetailComponent.prototype.onAddTag = function() {
        console.log(this.tag = "Main");
        this.tutorial.Tag.push(this.tag);
    };
    OutsideDetailComponent.prototype.onAddTag = function() {
        console.log(this.tag = "HDD");
        this.tutorial.Tag.push(this.tag);
    };
    OutsideDetailComponent.prototype.onAddTag = function() {
        console.log(this.tag = "HDMI");
        this.tutorial.Tag.push(this.tag);
    };
    OutsideDetailComponent.prototype.onAddTag = function() {
        console.log(this.tag = "SSD");
        this.tutorial.Tag.push(this.tag);
    };
    OutsideDetailComponent.prototype.onAddTag = function() {
        console.log(this.tag = "DVD");
        this.tutorial.Tag.push(this.tag);
    };
    OutsideDetailComponent.prototype.onRemove = function() {
        this.currentItem.Tag.pop();
    };
    OutsideDetailComponent.prototype.removeTag = function(value) {
        var index = this.tutorial.Tag.indexOf(value);
        this.tutorial.Tag.splice(index, 1);
    };
    OutsideDetailComponent.prototype.open = function(content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-TenMay' }).result.then(function(result) {
            _this.closeResult = "Closed with: " + result;
        }, function(reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    OutsideDetailComponent.prototype.getDismissReason = function(reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return "with: " + reason;
        }
    };
    __decorate([
        core_1.Input()
    ], OutsideDetailComponent.prototype, "tutorial");
    __decorate([
        core_1.Output()
    ], OutsideDetailComponent.prototype, "refreshList");
    OutsideDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-outside-detail',
            templateUrl: './outside-detail.component.html',
            styleUrls: ['./outside-detail.component.css']
        })
    ], OutsideDetailComponent);
    return OutsideDetailComponent;
}());
exports.OutsideDetailComponent = OutsideDetailComponent;
