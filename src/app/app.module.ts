import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularfireModule } from './angularfire.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    PublicModule,
    FlexLayoutModule,
    AngularfireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
