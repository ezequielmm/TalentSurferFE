import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status.component';

const routes: Routes = [
  { path: '', component: StatusComponent,  data: { breadcrumb: 'Progress (Status)' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class StatusRoutingModule { }
