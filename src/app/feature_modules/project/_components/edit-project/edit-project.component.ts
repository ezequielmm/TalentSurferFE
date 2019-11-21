import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ProjectService } from '../../project.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})

export class EditProjectComponent implements OnInit {
  editProjectForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditProjectComponent>,
    private projectService: ProjectService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editProjectForm = this.formBuilder.group({
      id: [{ value: 0, disabled: true }, Validators.required],
      name: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
    this.editProjectForm.patchValue(this.dialogRef._containerInstance._config.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editProject() {
    this.projectService.updateProject(this.editProjectForm.getRawValue()).subscribe(
      res => {
        this.closeDialog();
      },
      error => console.log(error)
    );
  }
}
