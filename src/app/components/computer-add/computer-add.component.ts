import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import Computer from 'src/app/models/computer';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireStorage } from '@angular/fire/storage';
 
@Component({
  selector: 'app-computer-add',
  templateUrl: './computer-add.component.html',
  styleUrls: ['./computer-add.component.css']
})

export class ComputerAddComponent implements OnInit {
  Computer: Computer = new Computer();
  submitted = false;
  files: File[] = [];
  closeResult = '';
  today: number = Date.now();
  public file: File[] = [];
 
  constructor(private ComputerService: ComputerService, 
    private modalService: NgbModal, 
    private afStorage: AngularFireStorage,) { }

  ngOnInit(): void {
  }
 
  getTime(): void{
    this.Computer.time = this.today;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }
  saveComputer(): void {
    this.ComputerService.create(this.Computer).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }
 
  newComputer(): void {
    this.submitted = false;
    this.Computer = new Computer();
  }

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
 

uploadFile(event) {
  this.file = event.target.files;
  for (let image of this.file){
    this.Computer.img.push(image.name);
    this.afStorage.upload(image.name, image);
  }
}

onAddTag(item: string) {
  this.Computer. Tag.push(item);
}

removeTag    (value){
    const index: number = this.Computer. Tag.indexOf(value);
    this.Computer. Tag.splice(index, 1);
}
removeImg     (value){
    const index: number = this.Computer.img.indexOf(value);
    this.Computer.img.splice(index, 1);
}
 
}
