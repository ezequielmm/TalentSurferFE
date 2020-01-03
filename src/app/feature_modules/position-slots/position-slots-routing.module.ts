import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionSlotsComponent } from './position-slots.component';

const routes: Routes = [
  { path: '', component: PositionSlotsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class PositionSlotsRoutingModule { }
