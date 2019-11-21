import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PositionStatusService } from '../../position-status.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-position-status',
  templateUrl: './edit-position-status.component.html',
  styleUrls: ['./edit-position-status.component.scss']
})

export class EditPositionStatusComponent implements OnInit {
  editPositionStatusForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditPositionStatusComponent>,
    private positionStatusService: PositionStatusService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editPositionStatusForm = this.formBuilder.group({
      id: [{ value: 0, disabled: true }, Validators.required],
      description: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
    console.log(this.dialogRef._containerInstance._config.data);
    this.editPositionStatusForm.patchValue(this.dialogRef._containerInstance._config.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editPositionStatus() {
    this.positionStatusService.updatePositionStatus(this.editPositionStatusForm.getRawValue()).subscribe(
      res => {
        this.closeDialog();
      },
      error => console.log(error)
    );
  }
}
