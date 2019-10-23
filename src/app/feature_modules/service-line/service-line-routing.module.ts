import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceLineComponent } from './service-line.component';

const routes: Routes = [
  { path: '', component: ServiceLineComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class ServiceLineRoutingModule { }
