import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ProjectService } from '../../project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})

export class CreateProjectComponent implements OnInit {
  createProjectForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateProjectComponent>,
    private projectService: ProjectService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createProjectForm = this.formBuilder.group({
      name: ['', Validators.required],
      archivingFlag: [false, Validators.required],
      comments: ['']
    });
  }

  createProject() {
    this.projectService.createProject(this.createProjectForm.value).subscribe(
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
