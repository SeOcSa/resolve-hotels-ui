import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelDashboardComponent } from './pages/hotel-dashboard/hotel-dashboard.component';
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';
import { HotelCardComponent } from './layouts/hotel-card/hotel-card.component';
import {MatCardModule} from "@angular/material/card";
import {HttpClient} from "@angular/common/http";
import {HotelApiService} from "./services/hotels.service";

@NgModule({
  declarations: [
    HotelDashboardComponent,
    HotelDetailsComponent,
    HotelCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers: [
    HttpClient,
    HotelApiService
  ]
})
export class HotelsModule { }
