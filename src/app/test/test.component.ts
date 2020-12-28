import { Component} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent {
  today: number = Date.now();
  respSheet: any;
  exportHTML() {
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
}
  exportAsDoc() {

    const preHtml = '<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' ' + '' +
            ' xmlns:w=\'urn:schemas-microsoft-com:office:word\' xmlns=\'http://www.w3.org/TR/REC-html40\'><head><meta charset=\'utf-8\'>' +
            '<TenMay>Export HTML To Doc</TenMay></head><body>';
    const postHtml = '</body></html>';

    let innerHtml = '';
    // Specify file name
    const filename = this.respSheet.TenMay + '.doc';
    const respSheetKpis = this.respSheet.sheet_kpis;
    respSheetKpis.forEach(x => {
      const footer = '<p style="text-align: center">' + x.kpi.name + ' - ' + x.kpiValue + '</p>';
      innerHtml += footer;
      x.sheet_kpi_dimensions.forEach(dimension => {
        if (dimension.dimension !== undefined) innerHtml += dimension.dimension.name;
        let table = '<table>\n' +
                '  <tr>\n' +
                '    <th>Istatistik adi</th>\n' +
                '    <th>Degeri</th> \n' +
                '  </tr>\n';
        const data = dimension.data;
        if (data !== undefined) {
          for ( let i = 0 ; i < data.length ; i ++ ) {
            table += ' <tr>\n' +
                    '    <th>' + data[ i ].TenMay + '</th>\n' +
                    '    <th>' + data[ i ].value + '</th> \n' +
                    '  </tr>\n';
          }
          table += '</table>';
          innerHtml += table;
        }
      })
    });
    const html = preHtml + innerHtml + postHtml;

    const blob = new Blob(['\ufeff', html], {
      type: 'application/msword'
    });

    // Specify link url
    const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

    // Create download link element
    const downloadLink = document.createElement('a');

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob ) {
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
}
Export2Doc(element, filename = ''){
  var html = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><TenMay>Export HTML To Doc</TenMay></head><body>";
  var footer = "</body></html>";
  var html = html+document.getElementById(element).innerHTML+footer;


  //link url
  var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

  //file name
  filename = filename?filename+'.doc':'document.doc';

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
}

}
