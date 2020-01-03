import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security.component';
import { SecurityRoutingModule } from './security-routing.module';

// Modules
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Services
import { SecurityService } from './security.service';
import { EditSecurityComponent } from './_components/edit-security/edit-security.component';
import { CreateSecurityComponent } from './_components/create-security/create-security.component';



@NgModule({
  declarations: [
    SecurityComponent,
    EditSecurityComponent,
    CreateSecurityComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    EditSecurityComponent,
    CreateSecurityComponent
],
  providers: [
    SecurityService
    ]
})
export class SecurityModule { }
