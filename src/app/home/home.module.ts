import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule
  ]
})
export class HomeModule { }
