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
  MatTableModule,
  MatAutocompleteModule,
  MatStepperModule,
  MatGridListModule,
  MatDatepickerModule
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
    MatTableModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatDatepickerModule 
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
    MatTableModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatDatepickerModule 
  ]
})

export class MaterialModule { }
