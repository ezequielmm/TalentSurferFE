import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { OpportunityCertaintyComponent } from './opportunity-certainty/opportunity-certainty.component';
import { OpportunityLocationComponent } from './opportunity-location/opportunity-location.component';
import { PositionStatusComponent } from './position-status/position-status.component';
import { RolesComponent } from './roles/roles.component';
import { SeniorityComponent } from './seniority/seniority.component';
import { OpportunityStatusComponent } from './opportunity-status/opportunity-status.component';
import { BusinessUnitComponent } from './business-unit/business-unit.component';
// import { TeamEditComponent } from './opportunity/team-edit/team-edit.component';
// import { ManageComponent } from './opportunity/manage/manage.component';
// import { OpportunityEditionComponent } from './opportunity/opportunity-edition.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'business-unit', component: BusinessUnitComponent },
  { path: 'opportunity-certainty', component: OpportunityCertaintyComponent },
  { path: 'opportunity-location', component: OpportunityLocationComponent },
  { path: 'opportunity-status', component: OpportunityStatusComponent },
  { path: 'position-status', component: PositionStatusComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'seniority', component: SeniorityComponent }
  // { path: 'opportunity-edition', component: OpportunityEditionComponent },
  // { path: 'opportunity-edition/:id', component: OpportunityEditionComponent },
  // { path: 'entity', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'entity/:id', component: EntityComponent },
  // { path: 'entity-edition/:id', component: EntityEditionComponent }
  // { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
