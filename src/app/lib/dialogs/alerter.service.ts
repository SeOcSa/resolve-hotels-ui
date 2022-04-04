import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmDialogComponent, ConfirmDialogData} from "./index";
import {AlertDialogComponent} from "./alert-dialog/alert-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class AlerterService {
  constructor(private matDialog: MatDialog) {
  }

  public async confirm(data: ConfirmDialogData): Promise<boolean> {
    const dialog = this.matDialog.open(ConfirmDialogComponent, {
      data: data,
      disableClose: true,
    });
    return dialog.afterClosed().toPromise();
  }

  public alert(data: ConfirmDialogData): MatDialogRef<AlertDialogComponent> {
    return this.matDialog.open(AlertDialogComponent, {
      data: data,
      disableClose: false,
    });
  }
}

