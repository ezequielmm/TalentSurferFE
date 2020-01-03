import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionStatusComponent } from './position-status.component';

const routes: Routes = [
  { path: '', component: PositionStatusComponent, data: { breadcrumb: 'Position Status' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class PositionStatusRoutingModule { }
