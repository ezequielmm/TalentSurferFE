import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PositionSlotsService } from '../../position-slots.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Position } from 'src/app/feature_modules/position/position';
import { Seniority } from 'src/app/feature_modules/seniority/seniority';
import { Status } from 'src/app/feature_modules/status/status';
import { Location } from 'src/app/feature_modules/location/location';

@Component({
  selector: 'app-edit-position-slot',
  templateUrl: './edit-position-slot.component.html',
  styleUrls: ['./edit-position-slot.component.scss']
})

export class EditPositionSlotsComponent implements OnInit {
  editPositionSlotForm: FormGroup;
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
    this.editPositionSlotForm = this.formBuilder.group({
      id: [''],
      position: ['', Validators.required],
      seniority: ['', Validators.required],
      location: ['', Validators.required],
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
    this.editPositionSlotForm.patchValue(this.dialogRef._containerInstance._config.data);
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

  editPositionSlot() {
    const editPositionSlotObj = this.positionSlotsService.mapUpdatePositionSlot(this.editPositionSlotForm.value);
    editPositionSlotObj.id = this.dialogRef._containerInstance._config.data.id;
    this.positionSlotsService.updatePositionSlot(editPositionSlotObj).subscribe(
      () => this.closeDialog(),
      error => console.log(error)
    );
  }

  closeDialog() {
    this.dialogRef.close();
    return;
  }

  compareFn(obj1: Location, obj2: Location): boolean {
    return obj1 && obj2 && obj1.id === obj2.id ? true : false;
  }
}
