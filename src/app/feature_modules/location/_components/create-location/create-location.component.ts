import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { LocationService } from '../../location.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.scss']
})

export class CreateLocationComponent implements OnInit {
  createLocationForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateLocationComponent>,
    private locationService: LocationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createLocationForm = this.formBuilder.group({
      description: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
  }

  createLocation() {
    this.locationService.createLocation(this.createLocationForm.value).subscribe(
      res => {
        this.closeDialog();
      },
      error => console.log(error)
    );
  }
  closeDialog() {
    this.dialogRef.close();
    return;
  }
}
