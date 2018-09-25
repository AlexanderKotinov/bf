import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule
  ],
  declarations: [],
  exports: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule
  ]
})
export class AngularfireModule { }
