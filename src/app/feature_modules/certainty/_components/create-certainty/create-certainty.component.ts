import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CertaintyService } from '../../certainty.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-certainty',
  templateUrl: './create-certainty.component.html',
  styleUrls: ['./create-certainty.component.scss']
})

export class CreateCertaintyComponent implements OnInit {
  createCertaintyForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateCertaintyComponent>,
    private certaintyService: CertaintyService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createCertaintyForm = this.formBuilder.group({
      sortOrder: [0, Validators.required],
      description: ['', Validators.required],
      value: [0, Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
  }

  createCertainty() {
    this.certaintyService.createCertainty(this.createCertaintyForm.value).subscribe(
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
