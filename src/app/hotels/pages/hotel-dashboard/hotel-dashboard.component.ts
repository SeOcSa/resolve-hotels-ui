import { Component, OnInit } from '@angular/core';
import {HotelModel} from "../../models/hotel.model";
import {HotelApiService} from "../../services/hotels.service";

@Component({
  selector: 'app-hotel-dashboard',
  templateUrl: './hotel-dashboard.component.html',
  styleUrls: ['./hotel-dashboard.component.css']
})
export class HotelDashboardComponent implements OnInit {
  hotels: HotelModel[] | undefined;

  constructor(private hotelService: HotelApiService) { }

  ngOnInit(): void {
    this.hotelService.fetchHotels().subscribe((hotels: HotelModel[]) => {
      return this.hotels = hotels;
    })
  }

}
