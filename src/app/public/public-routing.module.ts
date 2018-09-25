import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

const publicRoutes: Routes = [
  { path: '', component: MainComponent,
    children: [
      { path: 'signup', component: SignUpComponent },
      { path: 'signin', component: SignInComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(publicRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule { }
