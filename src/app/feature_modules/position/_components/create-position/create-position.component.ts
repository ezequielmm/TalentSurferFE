import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PositionService } from '../../position.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-position',
  templateUrl: './create-position.component.html',
  styleUrls: ['./create-position.component.scss']
})

export class CreatePositionComponent implements OnInit {
  createPositionForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreatePositionComponent>,
    private positionService: PositionService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createPositionForm = this.formBuilder.group({
      description: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
  }

  createPosition() {
    this.positionService.createPosition(this.createPositionForm.value).subscribe(
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
