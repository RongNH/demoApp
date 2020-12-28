import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ComputerListComponent } from "./components/computer-list/computer-list.component";
import { ComputerAddComponent } from './components/computer-add/computer-add.component';
import { TestComponent } from './test/test.component';
import { HoaDonComponent } from './components/HoaDon/HoaDon.component';
import { ComputerDetailComponent } from './components/computer-detail/computer-detail.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: 'App', pathMatch: 'full' },
  { path: 'App', component: LoginComponent},
  { path: 'Computer', component: ComputerListComponent},
  { path: 'AddComputer', component: ComputerAddComponent },
  { path: 'test', component: TestComponent },
  { path: 'App/bill', component: HoaDonComponent },
  { path: 'detail', component: ComputerDetailComponent},
  { path: 'Logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
