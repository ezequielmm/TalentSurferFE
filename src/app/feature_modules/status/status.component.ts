import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { EditStatusComponent } from './_components/edit-status/edit-status.component';
import { CreateStatusComponent } from './_components/create-status/create-status.component';
import { StatusService } from './status.service';
import { Status } from './status';

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"]
})

export class StatusComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'description',
    'archiving_flag',
    'comments',
    'action'
  ];
  statuses: Status[] = [];
  loading: boolean = false;

  constructor(
    private dialog: MatDialog,
    private statusService: StatusService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateStatusComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getStatus();
    });
  }

  openEditStatusModal(status: Status) {
    const editmodal = this.dialog.open(EditStatusComponent, { data: status });
    editmodal.afterClosed().subscribe(result => {
      this.getStatus();
    });
  }

  ngOnInit() {
    this.getStatus();
  }

  getStatus() {
    this.showLoader(true);
    this.statusService.getStatuses().subscribe(
      response => {
        this.statuses = [...response];
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
