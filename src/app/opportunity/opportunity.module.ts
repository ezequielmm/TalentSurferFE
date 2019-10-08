import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityComponent } from './opportunity.component'
import { CoreComponentsModule } from '../core/_components/core-components.module';


@NgModule({
  declarations: [
    OpportunityComponent
  ],
  imports: [
    CommonModule,
    CoreComponentsModule
  ]
})
export class OpportunityModule { }
