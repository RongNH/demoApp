import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ComputerService, CardInsideService, CardDoneService, CardOutsideService } from 'src/app/services/computer.service';
import { map } from 'rxjs/operators';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Tutorial from 'src/app/models/computer';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css']
})
export class ComputerListComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>();
  tutorial: Tutorial;
  tutorials: any;
  cardErrors: any;
  cardDones: any;
  cardInsides: any;
  cardOutsides: any;
  currentItem = null;
  currentIndex = -1;
  TenMay = '';
  actionLog

  constructor(private tutorialService: ComputerService, private modalService: NgbModal, 
    private cardInsideService: CardInsideService, private cardDoneService: CardDoneService, private cardOutsideService: CardOutsideService, private firebaseService: FirebaseService
    ) { }


  ngOnInit(): void {
    this.retrieveTutorials();
    this.retrieveDone();
 
    this.retrieveInside();
    this.retrieveOutside();

  }
  OnLogout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

  refreshList(): void {
    this.currentItem = null;
    this.currentIndex = -1;
    this.retrieveTutorials();
    this.retrieveDone();
 
    this.retrieveInside();
    this.retrieveOutside();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tutorials = data;
    });
  }
 
  retrieveInside(): void {
    this.cardInsideService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.cardInsides = data;
    });
  }
  ActionLog(message): void{
    console.log(message);
  }
  retrieveOutside(): void {
    this.cardOutsideService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.cardOutsides = data;
    });
  }
  retrieveDone(): void {
    this.cardDoneService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.cardDones = data;
    });
  }
  setActiveTutorial(tutorial, index): void {
    this.currentItem = tutorial;
    this.currentIndex = index;
  }
  setActiveError(error, index): void {
    this.currentItem = error;
    this.currentIndex = index;
  }

  closeResult = '';
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  open(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
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
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}
