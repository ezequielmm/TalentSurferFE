import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SowService } from '../../sow.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-sow',
  templateUrl: './edit-sow.component.html',
  styleUrls: ['./edit-sow.component.scss']
})

export class EditSowComponent implements OnInit {
  editSowForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditSowComponent>,
    private sowService: SowService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editSowForm = this.formBuilder.group({
      id: [{ value: 0, disabled: true }, Validators.required],
      sortOrder: [0, Validators.required],
      name: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
    console.log(this.dialogRef._containerInstance._config.data);
    this.editSowForm.patchValue(this.dialogRef._containerInstance._config.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editSow() {
    this.sowService.updateSow(this.editSowForm.getRawValue()).subscribe(
      res => {
        this.closeDialog();
      },
      error => console.log(error)
    );
  }
}
