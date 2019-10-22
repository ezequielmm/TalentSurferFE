import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatOptionModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatTableModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatTableModule
  ]
})

export class MaterialModule { }
