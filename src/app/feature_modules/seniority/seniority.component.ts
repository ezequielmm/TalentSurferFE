import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { EditSeniorityComponent } from './_components/edit-seniority/edit-seniority.component';
import { CreateSeniorityComponent } from './_components/create-seniority/create-seniority.component';
import { SeniorityService } from './seniority.service';
import { Seniority } from './seniority';
import { CONSTANTS } from '../../shared/constants/common.constants';

@Component({
  selector: "app-seniority",
  templateUrl: "./seniority.component.html",
  styleUrls: ["./seniority.component.scss"]
})

export class SeniorityComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'description',
    'archiving_flag',
    'comments',
    'action'
  ];
  seniorities: Seniority[] = [];
  loading: boolean = false;
  constants = CONSTANTS;

  constructor(
    private dialog: MatDialog,
    private seniorityService: SeniorityService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateSeniorityComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getSeniority();
    });
  }

  openEditSeniorityModal(seniority: Seniority) {
    const editmodal = this.dialog.open(EditSeniorityComponent, { data: seniority });
    editmodal.afterClosed().subscribe(result => {
      this.getSeniority();
    });
  }

  ngOnInit() {
    this.getSeniority();
  }

  getSeniority() {
    this.showLoader(true);
    this.seniorityService.getSeniorities().subscribe(
      response => {
        this.seniorities = [...response];
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
