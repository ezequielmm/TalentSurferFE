import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionStatusComponent } from './position-status.component';

const routes: Routes = [
  { path: '', component: PositionStatusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class PositionStatusRoutingModule { }
