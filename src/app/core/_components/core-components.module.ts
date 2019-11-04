import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { NavbarComponent } from './navbar/navbar.component';
// Modules
import { MaterialModule } from '../_modules/material/material.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavbarComponent]
})

export class CoreComponentsModule { }
