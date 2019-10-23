import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SeniorityService } from '../../seniority.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-seniority',
  templateUrl: './edit-seniority.component.html',
  styleUrls: ['./edit-seniority.component.scss']
})

export class EditSeniorityComponent implements OnInit {
  editSeniorityForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditSeniorityComponent>,
    private seniorityService: SeniorityService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editSeniorityForm = this.formBuilder.group({
      id: [{ value: 0, disabled: true }, Validators.required],
      sortOrder: [0, Validators.required],
      description: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
    console.log(this.dialogRef._containerInstance._config.data);
    this.editSeniorityForm.patchValue(this.dialogRef._containerInstance._config.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editSeniority() {
    this.seniorityService.updateSeniority(this.editSeniorityForm.getRawValue()).subscribe(
      res => {
        this.closeDialog();
      },
      error => console.log(error)
    );
  }
}
