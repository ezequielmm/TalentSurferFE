import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPositionComponent } from './_components/edit-position/edit-position.component';
import { CreatePositionComponent } from './_components/create-position/create-position.component';
import { PositionService } from './position.service';
import { Position } from './position';
import { CONSTANTS } from '../../shared/constants/common.constants';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})

export class PositionComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'description',
    'archiving_flag',
    'comments',
    'action'
  ];
  positions: Position[] = [];
  loading: boolean = false;
  constants = CONSTANTS;

  constructor(
    private dialog: MatDialog,
    private positionService: PositionService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreatePositionComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getPosition();
    });
  }

  openEditPositionModal(position: Position) {
    const editmodal = this.dialog.open(EditPositionComponent, { data: position });
    editmodal.afterClosed().subscribe(result => {
      this.getPosition();
    });
  }

  ngOnInit() {
    this.getPosition();
  }

  getPosition() {
    this.showLoader(true);
    this.positionService.getPositions().subscribe(
      response => {
        this.positions = [...response];
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
