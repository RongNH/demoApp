"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = void 0 && (void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }

        return t;
    };

    return __assign.apply(this, arguments);
};

var __decorate = void 0 && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.HoaDonComponent = void 0;

var core_1 = require("@angular/core");

var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");

var HoaDonComponent =
    /** @class */
    function() {
        function HoaDonComponent(tutorialService, modalService, route, afStorage) {
            this.tutorialService = tutorialService;
            this.modalService = modalService;
            this.route = route;
            this.afStorage = afStorage;
            this.refreshList = new core_1.EventEmitter();
            this.currentItem = null;
            this.message = '';
            this.Img = [];
            this.Mail = [];
            this.UrlLangy = [];
            this.tag = "";
            this.closeResult = '';
        }

        HoaDonComponent.prototype.getUrl = function(i) {
            this.fileRef = this.afStorage.ref(this.Img[i]);
            this.downloadURL = this.fileRef.getDownloadURL();
            return this.downloadURL;
        };

        HoaDonComponent.prototype.ngOnInit = function() {
            var _this = this;

            this.route.queryParams.subscribe(function(params) {
                console.log(params);
                _this.Computer = params['TenMay'];
                _this.username = params['username'];
                _this.MTS = params['MaTaiSan'];
                _this.TinhTrang = params['MoTa'];
                _this.KetLuan = params['KetLuan'];
                _this.Img = params['img'];
                _this.Mail = params['mail'];
                _this.Time = params['time'];

                for (var i = 0; i < _this.Img.length; i++) {
                    _this.UrlLangy.push(_this.getUrl(i));

                    console.log(_this.Img[i]);
                }

                console.log(_this.Img);
                console.log(_this.KetLuan);
            });
            this.message = '';
        };

        HoaDonComponent.prototype.ngOnChanges = function() {
            this.message = '';
            this.currentItem = __assign({}, this.tutorial);
        };

        HoaDonComponent.prototype.updatePublished = function(status) {
            var _this = this;

            this.tutorialService.update(this.currentItem.id, {
                published: status
            }).then(function() {
                _this.currentItem.published = status;
                _this.message = 'The status was updated successfully!';
            })["catch"](function(err) {
                return console.log(err);
            });
        };

        HoaDonComponent.prototype.update = function() {
            var _this = this;

            var data = {
                TenMay: this.currentItem.TenMay,
                MaTaiSan: this.currentItem.MaTaiSan,
                MoTa: this.currentItem.MoTa,
                Tag: this.currentItem.Tag
            };
            this.tutorialService.update(this.currentItem.id, data).then(function() {
                return _this.message = 'The tutorial was updated successfully!';
            })["catch"](function(err) {
                return console.log(err);
            });
        };

        HoaDonComponent.prototype.deleteTutorial = function() {
            var _this = this;

            this.tutorialService["delete"](this.currentItem.id).then(function() {
                _this.refreshList.emit('The tutorial was updated successfully!');

                _this.message = 'The tutorial was updated successfully!';
            })["catch"](function(err) {
                return console.log(err);
            });
        };

        HoaDonComponent.prototype.Export2Doc = function(element, filename) {
            if (filename === void 0) {
                filename = this.MTS + '-' + this.Computer;
            }

            var html = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><TenMay>Export HTML To Doc</TenMay></head><body>";
            var footer = "</body></html>";
            var html = html + document.getElementById(element).innerHTML + footer; //link url

            var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html); //file name

            filename = filename ? filename + '.doc' : 'document.doc'; // Creates the  download link element dynamically

            var downloadLink = document.createElement("a");
            document.body.appendChild(downloadLink); //Link to the file

            downloadLink.href = url; //Setting up file name

            downloadLink.download = filename; //triggering the function

            downloadLink.click(); //Remove the a tag after donwload starts.

            document.body.removeChild(downloadLink);
        };

        HoaDonComponent.prototype.onAddTag_1 = function() {
            console.log(this.tag = "CPU");
            this.tutorial.Tag.push(this.tag);
        };

        HoaDonComponent.prototype.onAddTag = function() {
            console.log(this.tag = "Màn Hình");
            this.currentItem.Tag.push(this.tag);
        };

        HoaDonComponent.prototype.onAddTag = function() {
            console.log(this.tag = "Case");
            this.currentItem.Tag.push(this.tag);
        };

        HoaDonComponent.prototype.onAddTag = function() {
            console.log(this.tag = "Bàn Phím");
            this.currentItem.Tag.push(this.tag);
        };

        HoaDonComponent.prototype.onAddTag = function() {
            console.log(this.tag = "Nguồn");
            this.currentItem.Tag.push(this.tag);
        };

        HoaDonComponent.prototype.onAddTag = function() {
            console.log(this.tag = "Phần mềm");
            this.currentItem.Tag.push(this.tag);
        };

        HoaDonComponent.prototype.onRemove = function() {
            this.currentItem.Tag.pop();
        };

        HoaDonComponent.prototype.removeTag = function(value) {
            var index = this.tutorial.Tag.indexOf(value);
            this.tutorial.Tag.splice(index, 1);
        };

        HoaDonComponent.prototype.open = function(content) {
            var _this = this;

            this.modalService.open(content, {
                Times: Times,
                New: New,
                RomanabelledBy: 'modal-basic-TenMay'
            }).result.then(function(result) {
                _this.closeResult = "Closed with: " + result;
            }, function(reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        };

        HoaDonComponent.prototype.getDismissReason = function(reason) {
            if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
                return 'by pressing ESC';
            } else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
                return 'by clicking on a backdrop';
            } else {
                return "with: " + reason;
            }
        };

        __decorate([core_1.Input()], HoaDonComponent.prototype, "tutorial");

        __decorate([core_1.Output()], HoaDonComponent.prototype, "refreshList");

        HoaDonComponent = __decorate([core_1.Component({
            selector: 'app-HoaDon',
            templateUrl: './HoaDon.component.html',
            styleUrls: ['./HoaDon.component.css']
        })], HoaDonComponent);
        return HoaDonComponent;
    }();

exports.HoaDonComponent = HoaDonComponent;
