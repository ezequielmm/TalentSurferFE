import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CertaintyService } from '../../certainty.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-certainty',
  templateUrl: './edit-certainty.component.html',
  styleUrls: ['./edit-certainty.component.scss']
})

export class EditCertaintyComponent implements OnInit {
  editCertaintyForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditCertaintyComponent>,
    private certaintyService: CertaintyService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editCertaintyForm = this.formBuilder.group({
      id: [{ value: 0, disabled: true }, Validators.required],
      sortOrder: [0, Validators.required],
      description: ['', Validators.required],
      value: [0, Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['', Validators.required]
    });
    console.log(this.dialogRef._containerInstance._config.data);
    this.editCertaintyForm.patchValue(this.dialogRef._containerInstance._config.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editCertainty() {
    this.certaintyService.updateCertainty(this.editCertaintyForm.getRawValue()).subscribe(
      res => {
        this.closeDialog();
      },
      error => console.log(error)
    );
  }
}
