// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { SowComponent } from './sow.component';
import { CreateSowComponent } from './_components/create-sow/create-sow.component';
import { EditSowComponent } from './_components/edit-sow/edit-sow.component';
// Modules
import { MaterialModule } from '../../core/_modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SowRoutingModule } from './sow-routing.module';
// Services
import { SowService } from './sow.service';

@NgModule({
    declarations: [
        SowComponent,
        CreateSowComponent,
        EditSowComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        SowRoutingModule
    ],
    exports: [
        SowComponent,
        CreateSowComponent,
        EditSowComponent
    ],
    entryComponents: [
        EditSowComponent,
        CreateSowComponent
    ],
    providers: [
        SowService
    ]
})

export class SowModule { }
