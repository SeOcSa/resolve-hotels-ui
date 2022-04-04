import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
  MatFormFieldModule,
} from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AlertDialogComponent } from "./dialogs/alert-dialog/alert-dialog.component";
import { FormlyMatDatepickerModule } from "@ngx-formly/material/datepicker";
import { MatIconModule } from "@angular/material/icon";
import {ConfirmDialogComponent} from "./dialogs/confirm-dialog/confirm-dialog.component";
import {HttpClient} from "@angular/common/http";


const matImports = [
  MatButtonModule,
  MatTableModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatIconModule,
];


const matFormFieldDefaultOptions: MatFormFieldDefaultOptions = { appearance: "outline" };

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    AlertDialogComponent,
  ],
  imports: [
    CommonModule,
    FormlyMaterialModule,
    ...matImports,
    FormsModule,
    ReactiveFormsModule,
    FormlyMatDatepickerModule
  ],
  exports: [
    ...matImports,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
  ],
  providers: [
    HttpClient,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: matFormFieldDefaultOptions,
    }
  ],
})
export class LibModule {
}
