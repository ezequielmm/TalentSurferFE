import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { LocationService } from '../../location.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.scss']
})

export class EditLocationComponent implements OnInit {
  editLocationForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditLocationComponent>,
    private locationService: LocationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editLocationForm = this.formBuilder.group({
      id: [{ value: 0, disabled: true }, Validators.required],
      description: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
    console.log(this.dialogRef._containerInstance._config.data);
    this.editLocationForm.patchValue(this.dialogRef._containerInstance._config.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editLocation() {
    this.locationService.updateLocation(this.editLocationForm.getRawValue()).subscribe(
      res => {
        this.closeDialog();
      },
      error => console.log(error)
    );
  }
}
