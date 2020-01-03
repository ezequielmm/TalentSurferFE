import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectComponent } from './_components/edit-project/edit-project.component';
import { CreateProjectComponent } from './_components/create-project/create-project.component';
import { ProjectService } from './project.service';
import { Project } from './project';
import { CONSTANTS } from '../../shared/constants/common.constants';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'archiving_flag',
    'comments',
    'action'
  ];
  projects: Project[] = [];
  loading: boolean = false;
  constants = CONSTANTS;

  constructor(
    private dialog: MatDialog,
    private projectService: ProjectService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateProjectComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getProject();
    });
  }

  openEditProjectModal(project: Project) {
    const editmodal = this.dialog.open(EditProjectComponent, { data: project });
    editmodal.afterClosed().subscribe(result => {
      this.getProject();
    });
  }

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    this.showLoader(true);
    this.projectService.getProjects().subscribe(
      response => {
        this.projects = [...response];
        this.showLoader(false);
      },
      error => {
        console.log(error);
        this.showLoader(false);
      }
    );
  }

  showLoader(isSpinnerVisible) {
    this.loading = isSpinnerVisible;
  }
}
