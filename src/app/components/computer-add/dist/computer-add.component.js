"use strict";
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
exports.ComputerAddComponent = void 0;
var core_1 = require("@angular/core");
var computer_1 = require("src/app/models/computer");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var ComputerAddComponent = /** @class */ (function() {
    function ComputerAddComponent(tutorialService, modalService, afStorage) {
        this.tutorialService = tutorialService;
        this.modalService = modalService;
        this.afStorage = afStorage;
        this.tutorial = new computer_1["default"]();
        this.submitted = false;
        this.tag = "";
        this.imgtest = "";
        this.files = [];
        this.closeResult = '';
        this.images = [];
        this.today = Date.now();
        this.myForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            file: new forms_1.FormControl('', [forms_1.Validators.required]),
            fileSource: new forms_1.FormControl('', [forms_1.Validators.required])
        });
        this.file = [];
    }
    ComputerAddComponent.prototype.ngOnInit = function() {};
    ComputerAddComponent.prototype.toggleHover = function(event) {
        this.isHovering = event;
    };
    ComputerAddComponent.prototype.getTime = function() {
        this.tutorial.time = this.today;
    };
    ComputerAddComponent.prototype.onDrop = function(files) {
        for (var i = 0; i < files.length; i++) {
            this.files.push(files.item(i));
        }
    };
    ComputerAddComponent.prototype.saveTutorial = function() {
        var _this = this;
        this.tutorialService.create(this.tutorial).then(function() {
            console.log('Created new item successfully!');
            _this.submitted = true;
        });
    };
    ComputerAddComponent.prototype.saveDone = function() {
        var _this = this;
        this.tutorialService.create(this.tutorial).then(function() {
            console.log('Created new item successfully!');
            _this.submitted = true;
        });
    };
    ComputerAddComponent.prototype.newTutorial = function() {
        this.submitted = false;
        this.tutorial = new computer_1["default"]();
    };
    ComputerAddComponent.prototype.open = function(content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-TenMay' }).result.then(function(result) {
            _this.closeResult = "Closed with: " + result;
        }, function(reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ComputerAddComponent.prototype.copyFbRecord = function(oldRef, newRef) {
        oldRef.once('value', function(snap) {
            newRef.set(snap.value(), function(error) {
                if (error && typeof(console) !== 'undefined' && console.error) {
                    console.error(error);
                }
            });
        });
    };
    ComputerAddComponent.prototype.getDismissReason = function(reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return "with: " + reason;
        }
    };
    Object.defineProperty(ComputerAddComponent.prototype, "f", {
        get: function() {
            return this.myForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ComputerAddComponent.prototype.onFileChange = function(event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (var i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = function(event) {
                    console.log(event.target.result);
                    _this.images.push(event.target.result);
                    _this.myForm.patchValue({
                        fileSource: _this.images
                    });
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    };
    ComputerAddComponent.prototype.uploadFile = function(event) {
        this.file = event.target.files;
        for (var _i = 0, _a = this.file; _i < _a.length; _i++) {
            var image = _a[_i];
            this.tutorial.img.push(image.name);
            this.afStorage.upload(image.name, image);
        }
    };
    ComputerAddComponent.prototype.uploadImg = function() {};
    ComputerAddComponent.prototype.onAddTag_1 = function() {
        console.log(this.tag = "CPU");
        this.tutorial.Tag.push(this.tag);
    };
    ComputerAddComponent.prototype.onAddTag = function() {
        console.log(this.tag = "Màn Hình");
        this.tutorial.Tag.push(this.tag);
    };
    ComputerAddComponent.prototype.onAddTag = function() {
        console.log(this.tag = "Case");
        this.tutorial.Tag.push(this.tag);
    };
    ComputerAddComponent.prototype.onAddTag = function() {
        console.log(this.tag = "Bàn Phím");
        this.tutorial.Tag.push(this.tag);
    };
    ComputerAddComponent.prototype.onAddTag = function() {
        console.log(this.tag = "Nguồn");
        this.tutorial.Tag.push(this.tag);
    };
    ComputerAddComponent.prototype.onAddTag = function() {
        console.log(this.tag = "Phần mềm");
        this.tutorial.Tag.push(this.tag);
    };
    ComputerAddComponent.prototype.onAddTag = function() {
        console.log(this.tag = "RAM");
        this.tutorial.Tag.push(this.tag);
    };
    ComputerAddComponent.prototype.onAddTag = function() {
        console.log(this.tag = "Main");
        this.tutorial.Tag.push(this.tag);
    };
    ComputerAddComponent.prototype.onAddTag = function() {
        console.log(this.tag = "HDD");
        this.tutorial.Tag.push(this.tag);
    };
    ComputerAddComponent.prototype.onAddTag = function() {
        console.log(this.tag = "HDMI");
        this.tutorial.Tag.push(this.tag);
    };
    ComputerAddComponent.prototype.onAddTag = function() {
        console.log(this.tag = "SSD");
        this.tutorial.Tag.push(this.tag);
    };
    ComputerAddComponent.prototype.onAddTag = function() {
        console.log(this.tag = "DVD");
        this.tutorial.Tag.push(this.tag);
    };
    ComputerAddComponent.prototype.removeTag = function(value) {
        var index = this.tutorial.Tag.indexOf(value);
        this.tutorial.Tag.splice(index, 1);
    };
    ComputerAddComponent.prototype.removeImg = function(value) {
        var index = this.tutorial.img.indexOf(value);
        this.tutorial.img.splice(index, 1);
    };
    ComputerAddComponent.prototype.preview = function(files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function(_event) {
            _this.imgURL = reader.result;
        };
    };
    ComputerAddComponent.prototype.onFileChanged = function(event) {
        var file = event.target.files[0];
    };
    ComputerAddComponent = __decorate([
        core_1.Component({
            selector: 'app-computer-add',
            templateUrl: './computer-add.component.html',
            styleUrls: ['./computer-add.component.css']
        })
    ], ComputerAddComponent);
    return ComputerAddComponent;
}());
exports.ComputerAddComponent = ComputerAddComponent;
