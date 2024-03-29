import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SowComponent } from './sow.component';

const routes: Routes = [
  { path: '', component: SowComponent,  data: { breadcrumb: 'SOW' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class SowRoutingModule { }
