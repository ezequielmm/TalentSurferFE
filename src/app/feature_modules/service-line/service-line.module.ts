// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { ServiceLineComponent } from './service-line.component';
import { CreateServiceLineComponent } from './_components/create-service-line/create-service-line.component';
import { EditServiceLineComponent } from './_components/edit-service-line/edit-service-line.component';
// Modules
import { MaterialModule } from '../../core/_modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceLineRoutingModule } from './service-line-routing.module';
// Services
import { ServiceLineService } from './service-line.service';

@NgModule({
    declarations: [
        ServiceLineComponent,
        CreateServiceLineComponent,
        EditServiceLineComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        ServiceLineRoutingModule
    ],
    exports: [
        ServiceLineComponent,
        CreateServiceLineComponent,
        EditServiceLineComponent
    ],
    entryComponents: [
        EditServiceLineComponent,
        CreateServiceLineComponent
    ],
    providers: [
        ServiceLineService
    ]
})

export class ServiceLineModule { }
