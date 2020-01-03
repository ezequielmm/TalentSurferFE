import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpportunityComponent } from './opportunity.component';
import { AddOpportunityManagementComponent } from './_components/add-opportunity/add-opportunity.component';
import { EditOpportunityManagementComponent } from './_components/edit-opportunity/edit-opportunity.component';
import { PreventUnsavedAddOpportunity } from './_guards/prevent-unsaved-add-opportunity.guard';
import { PreventUnsavedEditOpportunity } from './_guards/prevent-unsaved-edit-opportunity.guard';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Opportunity Management'
    },
    children: [
      {
        path: '',
        component: OpportunityComponent,
        data: {
          breadcrumb: null,
        },
      },
      {
        path: 'add',
        component: AddOpportunityManagementComponent,
        canDeactivate: [PreventUnsavedAddOpportunity],
        data: {
          breadcrumb: 'Add'
        }
      },
      {
        path: 'edit/:id',
        component: EditOpportunityManagementComponent,
        canDeactivate: [PreventUnsavedEditOpportunity],
        data: {
          breadcrumb: 'Edit'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class OpportunityRoutingModule { }
