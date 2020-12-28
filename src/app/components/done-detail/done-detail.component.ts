import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CardSaveService, ComputerService } from 'src/app/services/computer.service';
import { CardDoneService } from 'src/app/services/computer.service';
import Done from 'src/app/models/computer';
import Tutorial from 'src/app/models/Done';
import Save from 'src/app/models/cardSave';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireStorage } from '@angular/fire/storage';
 


@Component({
  selector: 'app-done-detail',
  templateUrl: './done-detail.component.html',
  styleUrls: ['./done-detail.component.css']
})
export class DoneDetailComponent implements OnInit, OnChanges {

  @Input() tutorial: Tutorial;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  onCloseModal(event: any){
    this.submitted = true;
   }
  submitted = false;
  currentItem: Tutorial = null;
  saveCard: Save = new Save();
  doneCard: Done = new Done();
  message = '';

  constructor(private tutorialService: CardDoneService, private modalService: NgbModal, private afStorage: AngularFireStorage, private cardDoneService: ComputerService,private cardSaveService: CardSaveService) { }

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
       Tag: this.currentItem. Tag,
      img: this.currentItem.img,
      time: this.currentItem.time,
      username: this.currentItem.username,
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
    this.doneCard.time = this.currentItem.time
    this.doneCard.DonVi = this.currentItem.DonVi
    this.doneCard.KetLuan = this.currentItem.KetLuan
    this.cardDoneService.create(this.doneCard).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
  });

    this.deleteTutorial();
  }
  moveSave(): void {
    this.saveCard.TenMay = this.currentItem.TenMay ;
    this.saveCard.published = this.currentItem.published;
    this.saveCard.MaTaiSan = this.currentItem.MaTaiSan
    this.saveCard.MoTa = this.currentItem.MoTa
    this.saveCard. Tag = this.currentItem. Tag
    this.saveCard.mail = this.currentItem.mail
    this.saveCard.img = this.currentItem.img
    this.saveCard.DonVi = this.currentItem.DonVi
    this.saveCard.username = this.currentItem.username
    this.saveCard.time = this.currentItem.time
    this.saveCard.KetLuan = this.currentItem.KetLuan
    this.cardSaveService.create(this.saveCard).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
  });
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

