import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserApiService } from "./providers/user-api.service";
import {LoginComponent} from "./login/login.component";
import {FormlyModule} from "@ngx-formly/core";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LocalStorageService} from "ngx-webstorage";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormlyModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    UserApiService,
    HttpClient,
    LocalStorageService
  ],
  exports: [
    LoginComponent,
  ]
})
export class AuthModule {}
