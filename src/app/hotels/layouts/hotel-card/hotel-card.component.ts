import {Component, Input, OnInit} from '@angular/core';
import {HotelModel} from "../../models/hotel.model";

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  constructor() { }
  @Input()hotel: HotelModel | undefined;

  ngOnInit(): void {
  }

}
