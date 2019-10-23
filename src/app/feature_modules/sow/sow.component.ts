import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditSowComponent } from './_components/edit-sow/edit-sow.component';
import { CreateSowComponent } from './_components/create-sow/create-sow.component';
import { SowService } from './sow.service';
import { Sow } from './sow';

@Component({
  selector: 'app-sow',
  templateUrl: './sow.component.html',
  styleUrls: ['./sow.component.scss']
})

export class SowComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'order',
    'description',
    'archiving_flag',
    'comments',
    'action'
  ];
  sows: Sow[] = [];
  loading: boolean = false;

  constructor(
    private dialog: MatDialog,
    private sowService: SowService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateSowComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getSow();
    });
  }

  openEditSowModal(sow: Sow) {
    const editmodal = this.dialog.open(EditSowComponent, { data: sow });
    editmodal.afterClosed().subscribe(result => {
      this.getSow();
    });
  }

  ngOnInit() {
    this.getSow();
  }

  getSow() {
    this.showLoader(true);
    this.sowService.getSows().subscribe(
      response => {
        this.sows = [...response];
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
