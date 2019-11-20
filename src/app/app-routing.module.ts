import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/_guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./core/_modules/home/home.module').then(
      module => module.HomeModule,
    ),
     canActivate: [AuthGuard]
  },
  {
    path: 'service-line',
    loadChildren: () => import('./feature_modules/service-line/service-line.module').then(
      module => module.ServiceLineModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path: 'certainty',
    loadChildren: () => import('./feature_modules/certainty/certainty.module').then(
      module => module.CertaintyModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path: 'location',
    loadChildren: () => import('./feature_modules/location/location.module').then(
      module => module.LocationModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path: 'status',
    loadChildren: () => import('./feature_modules/status/status.module').then(
      module => module.StatusModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path: 'seniority',
    loadChildren: () => import('./feature_modules/seniority/seniority.module').then(
      module => module.SeniorityModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path: 'position-status',
    loadChildren: () => import('./feature_modules/position-status/position-status.module').then(
      module => module.PositionStatusModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path: 'sow',
    loadChildren: () => import('./feature_modules/sow/sow.module').then(
      module => module.SowModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path: 'opportunity',
    loadChildren: () => import('./feature_modules/opportunity/opportunity.module').then(
      module => module.OpportunityModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path: 'position',
    loadChildren: () => import('./feature_modules/position/position.module').then(
      module => module.PositionModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path: 'project',
    loadChildren: () => import('./feature_modules/project/project.module').then(
      module => module.ProjectModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
