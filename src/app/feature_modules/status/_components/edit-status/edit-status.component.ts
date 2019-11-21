import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { StatusService } from '../../status.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrls: ['./edit-status.component.scss']
})

export class EditStatusComponent implements OnInit {
  editStatusForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditStatusComponent>,
    private statusService: StatusService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editStatusForm = this.formBuilder.group({
      id: [{ value: 0, disabled: true }, Validators.required],
      description: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
    console.log(this.dialogRef._containerInstance._config.data);
    this.editStatusForm.patchValue(this.dialogRef._containerInstance._config.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editStatus() {
    this.statusService.updateStatus(this.editStatusForm.getRawValue()).subscribe(
      res => {
        this.closeDialog();
      },
      error => console.log(error)
    );
  }
}
