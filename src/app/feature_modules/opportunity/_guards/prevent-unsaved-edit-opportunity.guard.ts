import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditOpportunityManagementComponent  } from '../_components/edit-opportunity/edit-opportunity.component';

@Injectable()
export class PreventUnsavedEditOpportunity implements CanDeactivate<EditOpportunityManagementComponent> {
    canDeactivate(component: EditOpportunityManagementComponent) {
        if (component.editOpportunityForm.dirty && !component.submitForm) {
            return confirm('You have unsaved changes that will be lost if you decide to continue. Are you sure want to continue?');
        }
        return true;
    }
}
