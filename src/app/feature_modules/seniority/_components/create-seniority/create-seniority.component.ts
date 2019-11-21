import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SeniorityService } from '../../seniority.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-seniority',
  templateUrl: './create-seniority.component.html',
  styleUrls: ['./create-seniority.component.scss']
})

export class CreateSeniorityComponent implements OnInit {
  createSeniorityForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateSeniorityComponent>,
    private seniorityService: SeniorityService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createSeniorityForm = this.formBuilder.group({
      description: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
  }

  createSeniority() {
    this.seniorityService.createSeniority(this.createSeniorityForm.value).subscribe(
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
