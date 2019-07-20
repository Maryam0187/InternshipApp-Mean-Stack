import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroCombinedComponent }   from './hero-combined/hero-combined.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
//import {HomeComponent} from './home/home.component';
import { InternformComponent } from './internform/internform.component';
import {StudentComponent} from './student/student.component'
import { from } from 'rxjs';
import { SigninComponent } from './signin/signin.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';


const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'SignUp', component: StudentComponent },
  { path: 'SignIn', component: SigninComponent },
  { path: 'Apply', component: InternformComponent },
  { path: 'admin', component:AdminloginComponent}
];
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
