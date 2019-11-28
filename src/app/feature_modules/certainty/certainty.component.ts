import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { EditCertaintyComponent } from './_components/edit-certainty/edit-certainty.component';
import { CreateCertaintyComponent } from './_components/create-certainty/create-certainty.component';
import { CertaintyService } from './certainty.service';
import { Certainty } from './certainty';
import { CONSTANTS } from '../../shared/constants/common.constants';

@Component({
  selector: "app-certainty",
  templateUrl: "./certainty.component.html",
  styleUrls: ["./certainty.component.scss"]
})

export class CertaintyComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'description',
    'value',
    'archiving_flag',
    'comments',
    'action'
  ];
  certainties: Certainty[] = [];
  loading: boolean = false;
  constants = CONSTANTS;

  constructor(
    private dialog: MatDialog,
    private certaintyService: CertaintyService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCertaintyComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getCertainty();
    });
  }

  openEditCertaintyModal(certainty: Certainty) {
    const editmodal = this.dialog.open(EditCertaintyComponent, { data: certainty });
    editmodal.afterClosed().subscribe(result => {
      this.getCertainty();
    });
  }

  ngOnInit() {
    this.getCertainty();
  }

  getCertainty() {
    this.showLoader(true);
    this.certaintyService.getCertainties().subscribe(
      response => {
        this.certainties = [...response];
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
