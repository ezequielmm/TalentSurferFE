import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatButtonModule, MatToolbarModule, MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
