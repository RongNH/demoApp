import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import Tutorial from 'src/app/models/computer';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-HoaDon',
  templateUrl: './HoaDon.component.html',
  styleUrls: ['./HoaDon.component.css']
})
export class HoaDonComponent implements OnInit, OnChanges {

  @Input() tutorial: Tutorial;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentItem: Tutorial = null;
  message = '';
  constructor(private tutorialService: ComputerService, private modalService: NgbModal, private route: ActivatedRoute, private afStorage: AngularFireStorage) { }
  fileRef: any;
  downloadURL: any;
  Computer: string;
  MTS: string;
  Time: number;
  username: string;
  TinhTrang: string;
  KetLuan: string ;
  Img: any[] = [] ;
  Mail: any[] = [] ;
  UrlLength: any[] = [] ;
  totalPage: number = 2;
  DonVi: string;
  oddPage = false;
  date = new Date();

  getUrl(i) {
    this.fileRef = this.afStorage.ref(this.Img[i]);
    this.downloadURL = this.fileRef.getDownloadURL();
    return this.downloadURL
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
     console.log(params);
     this.Computer = params['TenMay'];
     this.username = params['username']
     this.MTS = params['MaTaiSan'];
     this.TinhTrang = params['MoTa'];
     this.KetLuan = params['KetLuan'];
     this.Img = params['img'];
     this.Mail = params['mail'];
     this.DonVi = params['DonVi'];
     this.Time = params['time'];

     this.checkNumber(this.Img.length)
     for(var i = 0; i < this.Img.length; i++){
      this.UrlLength.push(this.getUrl(i))
      console.log(this.Img[i])
     }
     console.log(this.Img);
     console.log(this.KetLuan);
  })

  }

  ngOnChanges(): void { }
 
  Export2Doc(element, filename = 'DanhGiaTinhTrang'+'_'+'HCM'+this.date.getFullYear()+ this.date.getMonth()+this.date.getDate() + ' ' + this.Computer+this.Mail+'-'+this.DonVi){
    var html = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'></head><body>";
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
  checkNumber(a){
    if (a % 2 == 0){
        this.totalPage = this.totalPage + (a/2);
        this.oddPage = true
        console.log(this.totalPage)
    }
    else{
       this.totalPage = this.totalPage + (a+1)/2;
       this.oddPage = false
       console.log(this.totalPage)
    }
    }
  counter(i: number) {
      return new Array(i);
    }
}
