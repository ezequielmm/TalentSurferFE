import { Component, OnInit } from '@angular/core';
import { PositionSlotsService } from './position-slots.service';
import { ReadPositionSlot, PositionSlot } from './position-slots';
import { MatDialog } from '@angular/material';
import { CreatePositionSlotsComponent } from './components/create-position-slot/create-position-slot.component';
import { EditPositionSlotsComponent } from './components/edit-position-slot/edit-position-slot.component';

import { CONSTANTS } from 'src/app/shared/constants/common.constants';

import { Position } from 'src/app/feature_modules/position/position';
import { Seniority } from 'src/app/feature_modules/seniority/seniority';
import { Status } from 'src/app/feature_modules/status/status';
import { Location } from 'src/app/feature_modules/location/location';

@Component({
  selector: 'app-position-slots',
  templateUrl: './position-slots.component.html',
  styleUrls: ['./position-slots.component.scss']
})

export class PositionSlotsComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'neededSeniority',
    'primaryLocation',
    'additionalLocation',
    'tkt',
    'glober',
    'globerEmail',
    'nonGlober',
    'nonGloberEmail',
    'candidateSeniority',
    'candidateLocation',
    'status',
    'action'
  ];
  readPositionSlots: ReadPositionSlot[] = [];
  positionSlots: PositionSlot[] = [];
  loading: boolean = false;
  constants = CONSTANTS;
  positions: Position[];
  statuses: Status[];
  locations: Location[];
  seniorities: Seniority[];

  constructor(
    private dialog: MatDialog,
    private positionSlotService: PositionSlotsService
  ) { }

  ngOnInit() {
    Promise.all([
      this.getLocations(),
      this.getPositions(),
      this.getSeniorities(),
      this.getStatuses()
    ]).then(() => {
      this.getPositionSlots();
    });
  }

  getPositionSlots() {
    this.showLoader(true);
    this.positionSlotService.getPositionSlots().subscribe(
      response => {
        this.readPositionSlots = [...response];
        this.positionSlots = [
          ...this.positionSlotService.mapReadPositionSlots(
            response,
            this.locations,
            this.seniorities,
            this.positions,
            this.statuses
          )
        ];
        this.showLoader(false);
      },
      error => {
        console.log(error);
        this.showLoader(false);
      }
    );
  }


  getLocations() {
    return new Promise((resolve, reject) => {
      this.positionSlotService.getLocations()
        .subscribe(
          locations => {
            this.locations = locations;
            resolve();
          },
          error => {
            console.log(error);
            reject();
          });
    });
  }

  getPositions() {
    return new Promise((resolve, reject) => {
      this.positionSlotService.getPositions()
        .subscribe(
          positions => {
            this.positions = positions;
            resolve();
          },
          error => {
            console.log(error);
            reject();
          });
    });
  }

  getStatuses() {
    return new Promise((resolve, reject) => {
      this.positionSlotService.getStatuses()
        .subscribe(
          statuses => {
            this.statuses = statuses;
            resolve();
          },
          error => {
            console.log(error);
            reject();
          }
        );
    });
  }

  getSeniorities() {
    return new Promise((resolve, reject) => {
      this.positionSlotService.getSeniorities()
        .subscribe(
          seniorities => {
            this.seniorities = seniorities;
            resolve();
          },
          error => {
            console.log(error);
            reject();
          });
    });
  }

  showLoader(isSpinnerVisible: boolean) {
    this.loading = isSpinnerVisible;
  }

  openAddPositionSlotDialog() {
    const dialogRef = this.dialog.open(CreatePositionSlotsComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getPositionSlots();
    });
  }

  openEditPositionSlotDialog(positionSlot: PositionSlot) {
    const dialogRef = this.dialog.open(EditPositionSlotsComponent,  { data: positionSlot });
    dialogRef.afterClosed().subscribe(result => {
      this.getPositionSlots();
    });
  }
}
