import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//Components
import { NavbarComponent } from "./navbar/navbar.component";
//Modules
import { MaterialModule } from "../_modules/material/material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavbarComponent]
})
export class CoreComponentsModule {}
