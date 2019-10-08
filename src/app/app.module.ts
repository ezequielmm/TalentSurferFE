import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
//import { OpportunityEditionComponent } from './opportunity/opportunity-edition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatToolbarComponent } from './core/_modules/material/mat-toolbar/mat-toolbar.component';
import { MaterialModule } from './core/_modules/material/material.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpportunityComponent,
    //OpportunityEditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule
  ],
  exports: [
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }