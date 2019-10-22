import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PositionStatusComponent } from './position-status/position-status.component';
import { RolesComponent } from './roles/roles.component';
import { SeniorityComponent } from './seniority/seniority.component';
import { OpportunityStatusComponent } from './opportunity-status/opportunity-status.component';
import { BusinessUnitComponent } from './business-unit/business-unit.component';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'business-unit', component: BusinessUnitComponent },
  { path: 'certainty',
    loadChildren: () => import('./feature_modules/certainty/certainty.module').then(
      module => module.CertaintyModule
  )},
  { path: 'location',
    loadChildren: () => import('./feature_modules/location/location.module').then(
      module => module.LocationModule
  )},
  { path: 'opportunity-status', component: OpportunityStatusComponent },
  { path: 'position-status', component: PositionStatusComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'seniority', component: SeniorityComponent },
  { path: 'management', component: ManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
