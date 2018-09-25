import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PublicModule } from './public/public.module';

const routes: Routes = [
  { path: '', loadChildren: './public/public.module#PublicModule'},
  { path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PublicModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
