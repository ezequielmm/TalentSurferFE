import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location.component';

const routes: Routes = [
  { path: '', component: LocationComponent, data: { breadcrumb: 'Location'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class LocationRoutingModule { }
