import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RolesComponent } from './roles/roles.component';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'service-line',
    loadChildren: () => import('./feature_modules/service-line/service-line.module').then(
      module => module.ServiceLineModule
    )
  },
  {
    path: 'certainty',
    loadChildren: () => import('./feature_modules/certainty/certainty.module').then(
      module => module.CertaintyModule
    )
  },
  {
    path: 'location',
    loadChildren: () => import('./feature_modules/location/location.module').then(
      module => module.LocationModule
    )
  },
  {
    path: 'status',
    loadChildren: () => import('./feature_modules/status/status.module').then(
      module => module.StatusModule
    )
  },
  {
    path: 'seniority',
    loadChildren: () => import('./feature_modules/seniority/seniority.module').then(
      module => module.SeniorityModule
    )
  },
  {
    path: 'position-status',
    loadChildren: () => import('./feature_modules/position-status/position-status.module').then(
      module => module.PositionStatusModule
    )
  },
  {
    path: 'sow',
    loadChildren: () => import('./feature_modules/sow/sow.module').then(
      module => module.SowModule
    )
  },
  { path: 'roles', component: RolesComponent },
  { path: 'management', component: ManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
