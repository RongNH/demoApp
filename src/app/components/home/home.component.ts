import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() email : any;
  mail: any;


  constructor(private firebaseService: FirebaseService) { }

  @Output() isLogout = new EventEmitter<void>()

  ngOnInit(): void {
  }
  OnLogout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }
  ngOnChanges(): void {

    this.mail = { ...this.email };
  }


}
