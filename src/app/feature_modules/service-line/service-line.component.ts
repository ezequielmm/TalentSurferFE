import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { EditServiceLineComponent } from './_components/edit-service-line/edit-service-line.component';
import { CreateServiceLineComponent } from './_components/create-service-line/create-service-line.component';
import { ServiceLineService } from './service-line.service';
import { ServiceLine } from './service-line';

@Component({
  selector: "app-service-line",
  templateUrl: "./service-line.component.html",
  styleUrls: ["./service-line.component.scss"]
})

export class ServiceLineComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'order',
    'description',
    'archiving_flag',
    'comments',
    'action'
  ];
  serviceLines: ServiceLine[] = [];
  loading: boolean = false;

  constructor(
    private dialog: MatDialog,
    private serviceLineService: ServiceLineService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateServiceLineComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getServiceLine();
    });
  }

  openEditServiceLineModal(serviceLine: ServiceLine) {
    const editmodal = this.dialog.open(EditServiceLineComponent, { data: serviceLine });
    editmodal.afterClosed().subscribe(result => {
      this.getServiceLine();
    });
  }

  ngOnInit() {
    this.getServiceLine();
  }

  getServiceLine() {
    this.showLoader(true);
    this.serviceLineService.getServiceLines().subscribe(
      response => {
        this.serviceLines = [...response];
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
