import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityComponent } from './opportunity.component';
import { CoreComponentsModule } from '../core/_components/core-components.module';
// import { TeamEditComponent } from './team-edit/team-edit.component';
// import { ManageComponent } from './manage/manage.component';
import { OpportunityRoutingModule } from './opportunity-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [OpportunityComponent/*, TeamEditComponent, ManageComponent*/],
  imports: [
    CommonModule,
    CoreComponentsModule,
    OpportunityRoutingModule,
    MatTableModule
  ]
})
export class OpportunityModule {}
