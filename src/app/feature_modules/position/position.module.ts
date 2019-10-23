// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { PositionComponent } from './position.component';
import { CreatePositionComponent } from './_components/create-position/create-position.component';
import { EditPositionComponent } from './_components/edit-position/edit-position.component';
// Modules
import { MaterialModule } from '../../core/_modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PositionRoutingModule } from './position-routing.module';
// Services
import { PositionService } from './position.service';

@NgModule({
    declarations: [
        PositionComponent,
        CreatePositionComponent,
        EditPositionComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        PositionRoutingModule
    ],
    exports: [
        PositionComponent,
        CreatePositionComponent,
        EditPositionComponent
    ],
    entryComponents: [
        EditPositionComponent,
        CreatePositionComponent
    ],
    providers: [
        PositionService
    ]
})

export class PositionModule { }
