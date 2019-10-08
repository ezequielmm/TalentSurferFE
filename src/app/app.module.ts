import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
// import { OpportunityEditionComponent } from './opportunity/opportunity-edition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarComponent } from './core/_modules/material/mat-toolbar/mat-toolbar.component';
import { MaterialModule } from './core/_modules/material/material.module';
import { CoreModule } from './core/core.module';
import { OpportunityLocationComponent } from './opportunity-location/opportunity-location.component';
import { OpportunityCertaintyComponent } from './opportunity-certainty/opportunity-certainty.component';
import { SeniorityComponent } from './seniority/seniority.component';
import { BusinessUnitComponent } from './business-unit/business-unit.component';
import { OpportunityStatusComponent } from './opportunity-status/opportunity-status.component';
import { RolesComponent } from './roles/roles.component';
import { PositionStatusComponent } from './position-status/position-status.component';
import { OpportunityModule } from './opportunity/opportunity.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpportunityLocationComponent,
    OpportunityCertaintyComponent,
    SeniorityComponent,
    BusinessUnitComponent,
    OpportunityStatusComponent,
    RolesComponent,
    PositionStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    OpportunityModule
  ],
  exports: [CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
