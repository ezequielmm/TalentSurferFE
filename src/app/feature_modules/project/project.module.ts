// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { ProjectComponent } from './project.component';
import { CreateProjectComponent } from './_components/create-project/create-project.component';
import { EditProjectComponent } from './_components/edit-project/edit-project.component';
// Modules
import { MaterialModule } from '../../core/_modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectRoutingModule } from './project-routing.module';
// Services
import { ProjectService } from './project.service';

@NgModule({
    declarations: [
        ProjectComponent,
        CreateProjectComponent,
        EditProjectComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        ProjectRoutingModule
    ],
    exports: [
        ProjectComponent,
        CreateProjectComponent,
        EditProjectComponent
    ],
    entryComponents: [
        EditProjectComponent,
        CreateProjectComponent
    ],
    providers: [
        ProjectService
    ]
})

export class ProjectModule { }
