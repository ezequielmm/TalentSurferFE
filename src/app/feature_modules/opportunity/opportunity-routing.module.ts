import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpportunityComponent } from './opportunity.component';
import { AddOpportunityManagementComponent } from './_components/add-opportunity/add-opportunity.component';
import { EditOpportunityManagementComponent } from './_components/edit-opportunity/edit-opportunity.component';
import { PreventUnsavedAddOpportunity } from './_guards/prevent-unsaved-add-opportunity.guard';
import { PreventUnsavedEditOpportunity } from './_guards/prevent-unsaved-edit-opportunity.guard';

const routes: Routes = [
  { path: '', component: OpportunityComponent },
  { path: 'add', component: AddOpportunityManagementComponent, canDeactivate: [PreventUnsavedAddOpportunity] },
  { path: 'edit/:id', component: EditOpportunityManagementComponent, canDeactivate:[PreventUnsavedEditOpportunity] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class OpportunityRoutingModule { }
