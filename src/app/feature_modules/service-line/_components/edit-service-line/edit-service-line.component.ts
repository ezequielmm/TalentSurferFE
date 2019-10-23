import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ServiceLineService } from '../../service-line.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-service-line',
  templateUrl: './edit-service-line.component.html',
  styleUrls: ['./edit-service-line.component.scss']
})

export class EditServiceLineComponent implements OnInit {
  editServiceLineForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditServiceLineComponent>,
    private serviceLineService: ServiceLineService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editServiceLineForm = this.formBuilder.group({
      id: [{ value: 0, disabled: true }, Validators.required],
      sortOrder: [0, Validators.required],
      description: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
    console.log(this.dialogRef._containerInstance._config.data);
    this.editServiceLineForm.patchValue(this.dialogRef._containerInstance._config.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editServiceLine() {
    this.serviceLineService.updateServiceLine(this.editServiceLineForm.getRawValue()).subscribe(
      res => {
        this.closeDialog();
      },
      error => console.log(error)
    );
  }
}
