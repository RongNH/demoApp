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
exports.TestComponent = void 0;
var core_1 = require("@angular/core");
var TestComponent = /** @class */ (function() {
    function TestComponent() {
        this.today = Date.now();
    }
    TestComponent.prototype.exportHTML = function() {
        var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
            "xmlns:w='urn:schemas-microsoft-com:office:word' " +
            "xmlns='http://www.w3.org/TR/REC-html40'>" +
            "<head><meta charset='utf-8'><TenMay>Export HTML to Word Document with JavaScript</TenMay></head><body>";
        var footer = "<body>âsdasdasdasdasdasasdasdasdasdasdasdasdadasdadasdadasdasdasdasd</body></html>";
        var sourceHTML = header + document.getElementById("source-html").innerHTML + footer;
        var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        var fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'document.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
    };
    TestComponent.prototype.exportAsDoc = function() {
        var preHtml = '<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' ' + '' +
            ' xmlns:w=\'urn:schemas-microsoft-com:office:word\' xmlns=\'http://www.w3.org/TR/REC-html40\'><head><meta charset=\'utf-8\'>' +
            '<TenMay>Export HTML To Doc</TenMay></head><body>';
        var postHtml = '</body></html>';
        var innerHtml = '';
        // Specify file name
        var filename = this.respSheet.TenMay + '.doc';
        var respSheetKpis = this.respSheet.sheet_kpis;
        respSheetKpis.forEach(function(x) {
            var footer = '<p style="text-align: center">' + x.kpi.name + ' - ' + x.kpiValue + '</p>';
            innerHtml += footer;
            x.sheet_kpi_dimensions.forEach(function(dimension) {
                if (dimension.dimension !== undefined)
                    innerHtml += dimension.dimension.name;
                var table = '<table>\n' +
                    '  <tr>\n' +
                    '    <th>Istatistik adi</th>\n' +
                    '    <th>Degeri</th> \n' +
                    '  </tr>\n';
                var data = dimension.data;
                if (data !== undefined) {
                    for (var i = 0; i < data.length; i++) {
                        table += ' <tr>\n' +
                            '    <th>' + data[i].TenMay + '</th>\n' +
                            '    <th>' + data[i].value + '</th> \n' +
                            '  </tr>\n';
                    }
                    table += '</table>';
                    innerHtml += table;
                }
            });
        });
        var html = preHtml + innerHtml + postHtml;
        var blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });
        // Specify link url
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
        // Create download link element
        var downloadLink = document.createElement('a');
        document.body.appendChild(downloadLink);
        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            // Create a link to the file
            downloadLink.href = url;
            // Setting the file name
            downloadLink.download = filename;
            // triggering the function
            downloadLink.click();
        }
        document.body.removeChild(downloadLink);
    };
    TestComponent.prototype.Export2Doc = function(element, filename) {
        if (filename === void 0) { filename = ''; }
        var html = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><TenMay>Export HTML To Doc</TenMay></head><body>";
        var footer = "</body></html>";
        var html = html + document.getElementById(element).innerHTML + footer;
        //link url
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
        //file name
        filename = filename ? filename + '.doc' : 'document.doc';
        // Creates the  download link element dynamically
        var downloadLink = document.createElement("a");
        document.body.appendChild(downloadLink);
        //Link to the file
        downloadLink.href = url;
        //Setting up file name
        downloadLink.download = filename;
        //triggering the function
        downloadLink.click();
        //Remove the a tag after donwload starts.
        document.body.removeChild(downloadLink);
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: 'app-test',
            templateUrl: './test.component.html'
        })
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
