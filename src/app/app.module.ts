import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComputerListComponent } from './components/computer-list/computer-list.component';
import { ComputerAddComponent } from './components/computer-add/computer-add.component';
import { ComputerDetailComponent } from './components/computer-detail/computer-detail.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule} from '@angular/common/http';
import { HoaDonComponent } from './components/HoaDon/HoaDon.component';
import { NgxPrintModule} from 'ngx-print';
import { DoneDetailComponent } from "./components/done-detail/done-detail.component";
import { InsideDetailComponent } from "./components/inside-detail/inside-detail.component";
import { OutsideDetailComponent } from "./components/outside-detail/outside-detail.component";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FirebaseService } from './services/firebase.service';
import { LogoutComponent } from './components/logout/logout.component';





@NgModule({
  declarations: [
    AppComponent,
    ComputerListComponent,
    ComputerAddComponent,
    ComputerDetailComponent,
    TestComponent,
    HoaDonComponent,
    DoneDetailComponent,
    InsideDetailComponent,
    OutsideDetailComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule, // for firestore
    DragDropModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPrintModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent,
  ComputerListComponent]
})
export class AppModule { }
