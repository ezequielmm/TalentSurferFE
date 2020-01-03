import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  { path: '', component: ProjectComponent, data: { breadcrumb: 'Project' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class ProjectRoutingModule { }
