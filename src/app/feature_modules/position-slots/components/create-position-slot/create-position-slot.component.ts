import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PositionSlotsService } from '../../position-slots.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Position } from 'src/app/feature_modules/position/position';
import { Seniority } from 'src/app/feature_modules/seniority/seniority';
import { Status } from 'src/app/feature_modules/status/status';
import { Location } from 'src/app/feature_modules/location/location';

@Component({
  selector: 'app-position-slot',
  templateUrl: './create-position-slot.component.html',
  styleUrls: ['./create-position-slot.component.scss']
})

export class CreatePositionSlotsComponent implements OnInit {
  createPositionSlotForm: FormGroup;
  positions: Position[];
  seniorities: Seniority[];
  statuses: Status[];
  locations: Location[];

  constructor(
    private dialogRef: MatDialogRef<PositionSlotsService>,
    private positionSlotsService: PositionSlotsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initializePositionSlotForm();
    this.getPositions();
    this.getSeniorities();
    this.getStatuses();
    this.getLocations();
  }

  initializePositionSlotForm() {
    this.createPositionSlotForm = this.formBuilder.group({
      position: ['', Validators.required],
      seniority: ['', Validators.required],
      primaryLocation: ['', Validators.required],
      additionalLocations: [''],
      tickets: [''],
      glober: [''],
      globerEmail: [''],
      nonGlober: [''],
      nonGloberEmail: [''],
      candidateSeniority: [''],
      candidateLocation: [''],
      status: [''],
    });
  }

  getPositions() {
    this.positionSlotsService.getPositions().subscribe(
      positions => this.positions = positions,
      error => console.log(error)
    );
  }

  getSeniorities() {
    this.positionSlotsService.getSeniorities().subscribe(
      seniorities => this.seniorities = seniorities,
      error => console.log(error)
    );
  }

  getStatuses() {
    this.positionSlotsService.getStatuses().subscribe(
      statuses => this.statuses = statuses,
      error => console.log(error)
    );
  }

  getLocations() {
    this.positionSlotsService.getLocations().subscribe(
      locations => this.locations = locations,
      error => console.log(error)
    );
  }

  createPositionSlot() {
    const createPositionObj = this.positionSlotsService.mapPositionSlot(this.createPositionSlotForm.value);
    this.positionSlotsService.createPositionSlot(createPositionObj).subscribe(
      () => this.closeDialog(),
      error => console.log(error)
    );
  }

  closeDialog() {
    this.dialogRef.close();
    return;
  }
}
