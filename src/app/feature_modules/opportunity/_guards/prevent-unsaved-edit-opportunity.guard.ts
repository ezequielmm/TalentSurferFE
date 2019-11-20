import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditOpportunityManagementComponent  } from '../_components/edit-opportunity/edit-opportunity.component';

@Injectable()
export class PreventUnsavedEditOpportunity implements CanDeactivate<EditOpportunityManagementComponent> {
    canDeactivate(component: EditOpportunityManagementComponent){
        if(component.editOpportunityForm.dirty && !component.submitForm){
            return confirm("All unsaved data will be cleared. Is this what you want to do?")
        }
        return true;
    }
} 