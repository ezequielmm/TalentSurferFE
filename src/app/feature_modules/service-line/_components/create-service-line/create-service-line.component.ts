import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ServiceLineService } from '../../service-line.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-service-line',
  templateUrl: './create-service-line.component.html',
  styleUrls: ['./create-service-line.component.scss']
})

export class CreateServiceLineComponent implements OnInit {
  createServiceLineForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateServiceLineComponent>,
    private serviceLineService: ServiceLineService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createServiceLineForm = this.formBuilder.group({
      description: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
  }

  createServiceLine() {
    this.serviceLineService.createServiceLine(this.createServiceLineForm.value).subscribe(
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
