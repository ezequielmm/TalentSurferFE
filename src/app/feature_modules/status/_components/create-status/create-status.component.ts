import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { StatusService } from '../../status.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-status',
  templateUrl: './create-status.component.html',
  styleUrls: ['./create-status.component.scss']
})

export class CreateStatusComponent implements OnInit {
  createStatusForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateStatusComponent>,
    private statusService: StatusService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createStatusForm = this.formBuilder.group({
      sortOrder: [0, Validators.required],
      description: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
  }

  createStatus() {
    this.statusService.createStatus(this.createStatusForm.value).subscribe(
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
