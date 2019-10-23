// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { SeniorityComponent } from './seniority.component';
import { CreateSeniorityComponent } from './_components/create-seniority/create-seniority.component';
import { EditSeniorityComponent } from './_components/edit-seniority/edit-seniority.component';
// Modules
import { MaterialModule } from '../../core/_modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeniorityRoutingModule } from './seniority-routing.module';
// Services
import { SeniorityService } from './seniority.service';

@NgModule({
    declarations: [
        SeniorityComponent,
        CreateSeniorityComponent,
        EditSeniorityComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        SeniorityRoutingModule
    ],
    exports: [
        SeniorityComponent,
        CreateSeniorityComponent,
        EditSeniorityComponent
    ],
    entryComponents: [
        EditSeniorityComponent,
        CreateSeniorityComponent
    ],
    providers: [
        SeniorityService
    ]
})

export class SeniorityModule { }
