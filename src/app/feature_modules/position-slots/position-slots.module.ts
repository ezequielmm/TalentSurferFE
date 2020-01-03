// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { PositionSlotsComponent } from './position-slots.component';
import { CreatePositionSlotsComponent } from './components/create-position-slot/create-position-slot.component';
import { EditPositionSlotsComponent } from './components/edit-position-slot/edit-position-slot.component';
// Modules
import { MaterialModule } from '../../core/_modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PositionSlotsRoutingModule } from './position-slots-routing.module';
// Services
import { PositionSlotsService } from './position-slots.service';

@NgModule({
  declarations: [
    PositionSlotsComponent,
    CreatePositionSlotsComponent,
    EditPositionSlotsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    PositionSlotsRoutingModule
  ],
  exports: [
    PositionSlotsComponent
  ],
  entryComponents: [
    CreatePositionSlotsComponent,
    EditPositionSlotsComponent
  ],
  providers: [
    PositionSlotsService
  ]
})
export class PositionSlotsModule { }
