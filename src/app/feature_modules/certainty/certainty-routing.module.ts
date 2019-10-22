import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertaintyComponent } from './certainty.component';

const routes: Routes = [
  { path: '', component: CertaintyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class CertaintyRoutingModule { }
