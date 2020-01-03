import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
// Modules
import { MaterialModule } from '../_modules/material/material.module';

@NgModule({
  declarations: [NavbarComponent, BreadcrumbComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavbarComponent, BreadcrumbComponent]
})

export class CoreComponentsModule { }
