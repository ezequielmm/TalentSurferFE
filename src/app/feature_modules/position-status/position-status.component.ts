import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { EditPositionStatusComponent } from './_components/edit-position-status/edit-position-status.component';
import { CreatePositionStatusComponent } from './_components/create-position-status/create-position-status.component';
import { PositionStatusService } from './position-status.service';
import { PositionStatus } from './position-status';

@Component({
  selector: "app-position-status",
  templateUrl: "./position-status.component.html",
  styleUrls: ["./position-status.component.scss"]
})

export class PositionStatusComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'order',
    'description',
    'archiving_flag',
    'comments',
    'action'
  ];
  positionStatuses: PositionStatus[] = [];
  loading: boolean = false;

  constructor(
    private dialog: MatDialog,
    private positionStatusService: PositionStatusService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreatePositionStatusComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getPositionStatus();
    });
  }

  openEditPositionStatusModal(positionStatus: PositionStatus) {
    const editmodal = this.dialog.open(EditPositionStatusComponent, { data: positionStatus });
    editmodal.afterClosed().subscribe(result => {
      this.getPositionStatus();
    });
  }

  ngOnInit() {
    this.getPositionStatus();
  }

  getPositionStatus() {
    this.showLoader(true);
    this.positionStatusService.getPositionStatuses().subscribe(
      response => {
        this.positionStatuses = [...response];
        this.showLoader(false);
      },
      error => {
        console.log(error);
        this.showLoader(false);
      }
    );
  }

  showLoader(isSpinnerVisible) {
    this.loading = isSpinnerVisible;
  }
}
