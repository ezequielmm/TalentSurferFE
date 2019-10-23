// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { OpportunityComponent } from './opportunity.component';
// Modules
import { MaterialModule } from '../../core/_modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpportunityRoutingModule } from './opportunity-routing.module';
// Services
import { OpportunityService } from './opportunity.service';

@NgModule({
    declarations: [
        OpportunityComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        OpportunityRoutingModule
    ],
    exports: [
        OpportunityComponent,
    ],
    providers: [
        OpportunityService
    ]
})

export class OpportunityModule { }
