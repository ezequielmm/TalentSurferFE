import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PositionStatusService } from '../../position-status.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-position-status',
  templateUrl: './create-position-status.component.html',
  styleUrls: ['./create-position-status.component.scss']
})

export class CreatePositionStatusComponent implements OnInit {
  createPositionStatusForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreatePositionStatusComponent>,
    private statusService: PositionStatusService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createPositionStatusForm = this.formBuilder.group({
      sortOrder: [0, Validators.required],
      description: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
  }

  createPositionStatus() {
    this.statusService.createPositionStatus(this.createPositionStatusForm.value).subscribe(
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
