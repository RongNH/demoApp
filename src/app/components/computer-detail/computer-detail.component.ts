import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CardInsideService, CardOutsideService, ComputerService } from 'src/app/services/computer.service';
import Computer from 'src/app/models/computer';
import CardInside from 'src/app/models/cardInside';
import Outside from 'src/app/models/cardOutside';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireStorage} from '@angular/fire/storage';



@Component({
  selector: 'app-computer-details',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.css']
})
export class ComputerDetailComponent implements OnInit, OnChanges {

  @Input() tutorial: Computer;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  onCloseModal(event: any){
    this.submitted = true;
   }


  constructor(
    private computerService: ComputerService, 
    private modalService: NgbModal,
    private afStorage: AngularFireStorage, 
    private cardInsideService: CardInsideService,  
    private cardOutsideService: CardOutsideService) { }
    
  updated = false;
  deleteDone = false;
  submitted = false;
  currentItem: Computer = null;
  message : string;
  cardInside: CardInside = new CardInside();
  outsideCard: Outside = new Outside();

  public file: File[] = [];
   fileRef: any;
   downloadURL: any;
   urlLength: any[] = [] ;


  ngOnInit(): void {
 
    for(var i = 0; i < this.currentItem.img.length; i++){
      this.urlLength.push(this.getUrl(i))
      console.log(this.urlLength[i])
     }
  }

  getUrl(i) {
    this.fileRef = this.afStorage.ref(this.currentItem.img[i]);
    this.downloadURL = this.fileRef.getDownloadURL();
    return this.downloadURL
  }

  ngOnChanges(): void {
    this.currentItem = { ...this.tutorial };
  }

  update(): void {
    const data = {
      TenMay: this.currentItem.TenMay,
      MaTaiSan: this.currentItem.MaTaiSan,
      MoTa: this.currentItem.MoTa,
      username: this.currentItem.username,
      img: this.currentItem.img,
      KetLuan: this.currentItem.KetLuan,
      Tag: this.currentItem.Tag,
      DonVi: this.currentItem.DonVi
    };
      location.reload
      this.updated = true;

    this.computerService.update(this.currentItem.id, data)
      .then(() => this.message = 'The tutorial was updated successfully!')
      .catch(err => console.log(err));
  }

  uploadFile(event) {
    this.file = event.target.files;
    for (let image of this.file){
      this.tutorial.img.push(image.name);
      this.afStorage.upload(image.name, image);
    }
  }

  removeImg(){
    while (this.currentItem.img.length) { this.urlLength.pop(); this.currentItem.img.pop()}
  }

  moveInside(): void {
    this.cardInside.TenMay = this.currentItem.TenMay;
    this.cardInside.published = this.currentItem.published
    this.cardInside.MaTaiSan = this.currentItem.MaTaiSan
    this.cardInside.MoTa = this.currentItem.MoTa
    this.cardInside.DonVi = this.currentItem.DonVi
    this.cardInside. Tag = this.currentItem. Tag
    this.cardInside.username = this.currentItem.username
    this.cardInside.KetLuan = this.currentItem.KetLuan
    this.cardInside.mail = this.currentItem.mail
    this.cardInside.time = this.currentItem.time
    this.cardInside.timeFix = Date.now();
    this.cardInsideService.create(this.cardInside).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
  });
  this.deleteCard();
  }

  moveOutside(): void {
    this.outsideCard.TenMay = this.currentItem.TenMay;
    this.outsideCard.published = this.currentItem.published
    this.outsideCard.MaTaiSan = this.currentItem.MaTaiSan
    this.outsideCard.DonVi = this.currentItem.DonVi
    this.outsideCard.MoTa = this.currentItem.MoTa
    this.outsideCard. Tag = this.currentItem. Tag
    this.outsideCard.img = this.currentItem.img
    this.outsideCard.mail = this.currentItem.mail
    this.outsideCard.KetLuan = this.currentItem.KetLuan
    this.outsideCard.username = this.currentItem.username
    this.outsideCard.time = this.currentItem.time
    this.outsideCard.timeFix = Date.now();
    this.outsideCard.KetLuan = this.currentItem.KetLuan
    this.cardOutsideService.create(this.outsideCard).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
  });
  this.deleteCard();
  }


  deleteCard(): void {
    this.computerService.delete(this.currentItem.id)
      .then(() => {
        this.refreshList.emit('The tutorial was updated successfully!');
        this.message = 'The tutorial was updated successfully!';

      })
      .catch(err => console.log(err));
      this.deleteDone = true;
  }
  tag = "";
  onAddTag(item) {
    this.currentItem. Tag.push(item);
  }
  onRemove(){
    this.currentItem. Tag.pop();
  }
  removeTag(value){
    const index: number = this.currentItem. Tag.indexOf(value);
    this.currentItem. Tag.splice(index, 1);
  }

  closeResult = '';

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-TenMay'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

