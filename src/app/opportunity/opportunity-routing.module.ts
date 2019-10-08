import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpportunityComponent } from './opportunity.component';
// import { TeamEditComponent } from './team-edit/team-edit.component';
// import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {
    path: 'opportunity',
    children: [
      { path: '', component: OpportunityComponent },
      // { path: ':id/edit', component: TeamEditComponent },
      // { path: 'manage', component: ManageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunityRoutingModule {}
