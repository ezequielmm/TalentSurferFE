import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddOpportunityManagementComponent } from '../_components/add-opportunity/add-opportunity.component';

@Injectable()
export class PreventUnsavedAddOpportunity
  implements CanDeactivate<AddOpportunityManagementComponent> {

  canDeactivate(component: AddOpportunityManagementComponent) {
    if (component.addOpportunityForm.dirty && !component.submitForm) {
      return confirm('You have unsaved changes that will be lost if you decide to continue. Are you sure want to continue?');
    }
    return true;
  }
}
