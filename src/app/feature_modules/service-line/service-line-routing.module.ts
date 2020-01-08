import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceLineComponent } from './service-line.component';

const routes: Routes = [
  { path: '', component: ServiceLineComponent, data: { breadcrumb: 'Service Line' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class ServiceLineRoutingModule { }
