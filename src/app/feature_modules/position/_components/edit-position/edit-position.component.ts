import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PositionService } from '../../position.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.scss']
})

export class EditPositionComponent implements OnInit {
  editPositionForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditPositionComponent>,
    private positionService: PositionService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editPositionForm = this.formBuilder.group({
      id: [{ value: 0, disabled: true }, Validators.required],
      sortOrder: [0, Validators.required],
      description: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
    console.log(this.dialogRef._containerInstance._config.data);
    this.editPositionForm.patchValue(this.dialogRef._containerInstance._config.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editPosition() {
    this.positionService.updatePosition(this.editPositionForm.getRawValue()).subscribe(
      res => {
        this.closeDialog();
      },
      error => console.log(error)
    );
  }
}
