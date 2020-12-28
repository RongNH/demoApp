import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal,  } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private firebaseService: FirebaseService, private modalService: NgbModal) { }
   get_mail : any;
   closeResult = '';

  ngOnInit(): void {
    if(localStorage.getItem('user')!==null){
      this.isSignedIn= true
    }
    else
    this.isSignedIn = false
  }

  isSignedIn = false


  logout(){
    this.firebaseService.logout();
  }
  async OnSignup(email: string, password: string){
    await this.firebaseService.signup(email, password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true


  }
    open(content) {
    this.modalService.open(content, { size: 'md' }).result.then((result) => {
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
  async OnSignin(email: string, password: string){
    await this.firebaseService.signin(email, password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    this.get_mail = email
  }
  handleLogout(){
    this.firebaseService.isLoggedIn = false
  }

}
