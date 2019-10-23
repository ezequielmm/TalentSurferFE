// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { StatusComponent } from './status.component';
import { CreateStatusComponent } from './_components/create-status/create-status.component';
import { EditStatusComponent } from './_components/edit-status/edit-status.component';
// Modules
import { MaterialModule } from '../../core/_modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusRoutingModule } from './status-routing.module';
// Services
import { StatusService } from './status.service';

@NgModule({
    declarations: [
        StatusComponent,
        CreateStatusComponent,
        EditStatusComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        StatusRoutingModule
    ],
    exports: [
        StatusComponent,
        CreateStatusComponent,
        EditStatusComponent
    ],
    entryComponents: [
        EditStatusComponent,
        CreateStatusComponent
    ],
    providers: [
        StatusService
    ]
})

export class StatusModule { }
