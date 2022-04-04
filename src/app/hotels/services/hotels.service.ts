import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {HotelModel} from "../models/hotel.model";
import {Observable} from "rxjs";

@Injectable()
export class HotelApiService {
  constructor(@Inject("BASE_API_URL") private baseUrl: string,
              private http: HttpClient) {
  }

  public fetchHotels(): Observable<HotelModel[]> {
    const url = `${this.baseUrl}/hotel/getAll`;
    return this.http.get<any>(url);
  }

  public fetchHotel(id: string): Observable<HotelModel> {
    const url = `${this.baseUrl}hotel/get?id=` + id;
    return this.http.get<any>(url);
  }
}

