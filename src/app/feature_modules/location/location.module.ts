// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { LocationComponent } from './location.component';
import { CreateLocationComponent } from './_components/create-location/create-location.component';
import { EditLocationComponent } from './_components/edit-location/edit-location.component';
// Modules
import { MaterialModule } from '../../core/_modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationRoutingModule } from './location-routing.module';
// Services
import { LocationService } from './location.service';

@NgModule({
    declarations: [
        LocationComponent,
        CreateLocationComponent,
        EditLocationComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        LocationRoutingModule
    ],
    exports: [
        LocationComponent,
        CreateLocationComponent,
        EditLocationComponent
    ],
    entryComponents: [
        EditLocationComponent,
        CreateLocationComponent
    ],
    providers: [
        LocationService
    ]
})

export class LocationModule { }
