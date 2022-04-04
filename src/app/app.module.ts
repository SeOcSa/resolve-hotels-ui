import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./home/home.module";
import {LibModule} from "./lib/lib.module";
import { NavMenuContentComponent } from './layouts/nav-menu-content/nav-menu-content.component';
import {AuthModule} from "./auth/auth.module";
import {RouterModule} from "@angular/router";
import {HotelsModule} from "./hotels/hotels.module";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    HomeModule,
    LibModule,
    AuthModule,
    HotelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
