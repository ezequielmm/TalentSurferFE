import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionComponent } from './position.component';

const routes: Routes = [
  { path: '', component: PositionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class PositionRoutingModule { }
