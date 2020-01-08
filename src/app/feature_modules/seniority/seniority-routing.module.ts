import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeniorityComponent } from './seniority.component';

const routes: Routes = [
  { path: '', component: SeniorityComponent,  data: { breadcrumb: 'Seniority' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class SeniorityRoutingModule { }
