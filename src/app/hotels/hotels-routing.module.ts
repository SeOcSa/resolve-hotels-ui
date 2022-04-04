import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HotelDashboardComponent} from "./pages/hotel-dashboard/hotel-dashboard.component";
import {HotelDetailsComponent} from "./pages/hotel-details/hotel-details.component";

const routes: Routes = [
  {
  path: "dashboard",
  component: HotelDashboardComponent,
  },
  {
    path: "details",
    component: HotelDetailsComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelsRoutingModule {
}
