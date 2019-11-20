import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddOpportunityManagementComponent } from '../_components/add-opportunity/add-opportunity.component';

@Injectable()
export class PreventUnsavedAddOpportunity
  implements CanDeactivate<AddOpportunityManagementComponent> {
  canDeactivate(component: AddOpportunityManagementComponent) {
    if (component.addOpportunityForm.dirty && !component.submitForm) {
      return confirm(
        'All unsaved data will be cleared. Is this what you want to do?'
      );
    }
    return true;
  }
}
