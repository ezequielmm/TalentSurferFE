import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponentsModule  } from './_components/core-components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreComponentsModule
  ],
  exports:[
    CoreComponentsModule
  ]
})
export class CoreModule { }
