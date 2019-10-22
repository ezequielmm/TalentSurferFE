import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { CoreComponentsModule } from '../core/_components/core-components.module';
import { ManagementRoutingModule } from './management-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    CoreComponentsModule,
    ManagementRoutingModule,
    MatTableModule
  ]
})
export class ManagementModule {}
