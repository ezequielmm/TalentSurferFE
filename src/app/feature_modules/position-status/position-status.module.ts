// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { PositionStatusComponent } from './position-status.component';
import { CreatePositionStatusComponent } from './_components/create-position-status/create-position-status.component';
import { EditPositionStatusComponent } from './_components/edit-position-status/edit-position-status.component';
// Modules
import { MaterialModule } from '../../core/_modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PositionStatusRoutingModule } from './position-status-routing.module';
// Services
import { PositionStatusService } from './position-status.service';

@NgModule({
    declarations: [
        PositionStatusComponent,
        CreatePositionStatusComponent,
        EditPositionStatusComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        PositionStatusRoutingModule
    ],
    exports: [
        PositionStatusComponent,
        CreatePositionStatusComponent,
        EditPositionStatusComponent
    ],
    entryComponents: [
        EditPositionStatusComponent,
        CreatePositionStatusComponent
    ],
    providers: [
        PositionStatusService
    ]
})

export class PositionStatusModule { }
