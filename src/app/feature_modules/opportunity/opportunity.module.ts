// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { OpportunityComponent } from './opportunity.component';
import { AddOpportunityManagementComponent } from './_components/add-opportunity/add-opportunity.component';
import { EditOpportunityManagementComponent } from './_components/edit-opportunity/edit-opportunity.component';
// Modules
import { MaterialModule } from '../../core/_modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpportunityRoutingModule } from './opportunity-routing.module';
// Services
import { OpportunityService } from './opportunity.service';
// Guards
import { PreventUnsavedAddOpportunity } from './_guards/prevent-unsaved-add-opportunity.guard';
import { PreventUnsavedEditOpportunity } from './_guards/prevent-unsaved-edit-opportunity.guard';

@NgModule({
  declarations: [
    OpportunityComponent,
    AddOpportunityManagementComponent,
    EditOpportunityManagementComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    OpportunityRoutingModule
  ],
  exports: [
    OpportunityComponent,
    AddOpportunityManagementComponent,
    EditOpportunityManagementComponent
  ],
  providers: [
    OpportunityService,
    PreventUnsavedAddOpportunity,
    PreventUnsavedEditOpportunity
  ]
})
export class OpportunityModule {}
