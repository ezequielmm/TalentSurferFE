import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SowService } from '../../sow.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-sow',
  templateUrl: './create-sow.component.html',
  styleUrls: ['./create-sow.component.scss']
})

export class CreateSowComponent implements OnInit {
  createSowForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateSowComponent>,
    private sowService: SowService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createSowForm = this.formBuilder.group({
      sortOrder: [0, Validators.required],
      description: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
  }

  createSow() {
    this.sowService.createSow(this.createSowForm.value).subscribe(
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
