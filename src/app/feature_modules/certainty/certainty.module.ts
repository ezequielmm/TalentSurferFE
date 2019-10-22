// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { CertaintyComponent } from './certainty.component';
import { CreateCertaintyComponent } from './_components/create-certainty/create-certainty.component';
import { EditCertaintyComponent } from './_components/edit-certainty/edit-certainty.component';
// Modules
import { MaterialModule } from '../../core/_modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertaintyRoutingModule } from './certainty-routing.module';
// Services
import { CertaintyService } from './certainty.service';

@NgModule({
    declarations: [
        CertaintyComponent,
        CreateCertaintyComponent,
        EditCertaintyComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        CertaintyRoutingModule
    ],
    exports: [
        CertaintyComponent,
        CreateCertaintyComponent,
        EditCertaintyComponent
    ],
    entryComponents: [
        EditCertaintyComponent,
        CreateCertaintyComponent
    ],
    providers: [
        CertaintyService
    ]
})

export class CertaintyModule { }
