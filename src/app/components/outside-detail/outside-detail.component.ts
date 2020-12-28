import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CardDoneService} from 'src/app/services/computer.service';
import { CardOutsideService } from 'src/app/services/computer.service';
import Done from 'src/app/models/Done';
import Tutorial from 'src/app/models/cardOutside';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireStorage} from '@angular/fire/storage';



@Component({
  selector: 'app-outside-detail',
  templateUrl: './outside-detail.component.html',
  styleUrls: ['./outside-detail.component.css']
})
export class OutsideDetailComponent implements OnInit, OnChanges {

  @Input() tutorial: Tutorial;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  onCloseModal(event: any){
    this.submitted = true;
   }
  submitted = false;
  currentItem: Tutorial = null;
  doneCard: Done = new Done();
  message = '';

  constructor(private tutorialService: CardOutsideService, private modalService: NgbModal, private afStorage: AngularFireStorage, private cardDoneService: CardDoneService) { }

  updated = false;
  public file: File[] = [];

   fileRef: any;
   downloadURL: any;
   urlLength: any[] = [] ;


  ngOnInit(): void {
    this.message = '';
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
    this.message = '';
    this.currentItem = { ...this.tutorial };
  }

  updatePublished(status): void {
    this.tutorialService.update(this.currentItem.id, { published: status })
      .then(() => {
        this.currentItem.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
  }

  update(): void {
    const data = {
      TenMay: this.currentItem.TenMay,
      MaTaiSan: this.currentItem.MaTaiSan,
      MoTa: this.currentItem.MoTa,
      Tag: this.currentItem.Tag,
      img: this.currentItem.img,
      username: this.currentItem.username,
      time: this.currentItem.time,
      KetLuan: this.currentItem.KetLuan
    };

      this.updated = true;

    this.tutorialService.update(this.currentItem.id, data)
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

  uploadImg(){

  }

  removeImg(){
    while (this.currentItem.img.length) { this.urlLength.pop(); this.currentItem.img.pop()}
  }
  moveDone(): void {
    this.doneCard.TenMay = this.currentItem.TenMay ;
    this.doneCard.published = this.currentItem.published;
    this.doneCard.MaTaiSan = this.currentItem.MaTaiSan
    this.doneCard.MoTa = this.currentItem.MoTa
    this.doneCard. Tag = this.currentItem. Tag
    this.doneCard.img = this.currentItem.img
    this.doneCard.username = this.currentItem.username
    this.doneCard.mail = this.currentItem.mail
    this.doneCard.DonVi = this.currentItem.DonVi
    this.doneCard.time = this.currentItem.time
    this.doneCard.timeFix = this.currentItem.timeFix
    this.doneCard.timeDone = Date.now()
    this.doneCard.KetLuan = this.currentItem.KetLuan
    this.cardDoneService.create(this.doneCard).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
  });

  this.deleteTutorial();
  }
  deleteTutorial(): void {
    this.tutorialService.delete(this.currentItem.id)
      .then(() => {
        this.refreshList.emit('The tutorial was updated successfully!');
        this.message = 'The tutorial was updated successfully!';
      })
      .catch(err => console.log(err));
  }
  tag = "";
  onAddTag(item: string) {
    this.tutorial. Tag.push(item);
  }
  onRemove(){
    this.currentItem. Tag.pop();
  }
  removeTag(value){
    const index: number = this.tutorial. Tag.indexOf(value);
    this.tutorial. Tag.splice(index, 1);
  }
    closeResult = '';
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-TenMay'}).result.then((result) => {
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

