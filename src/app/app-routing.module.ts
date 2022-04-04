import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./home/home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {HotelDashboardComponent} from "./hotels/pages/hotel-dashboard/hotel-dashboard.component";
import {HotelDetailsComponent} from "./hotels/pages/hotel-details/hotel-details.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "auth",
    children:
    [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  },
  {
    path: "hotels",
    children:
    [
      {
        path: "dashboard",
        component: HotelDashboardComponent
      },
      {
        path: "details",
        component: HotelDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
