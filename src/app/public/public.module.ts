import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import {PublicRoutingModule} from './public-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    PublicRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    SidenavListComponent,
    SignUpComponent,
    SignInComponent
  ]
})
export class PublicModule { }
