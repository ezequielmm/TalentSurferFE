import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/_modules/material/material.module';
import { CoreModule } from './core/core.module';
import { SeniorityComponent } from './seniority/seniority.component';
import { BusinessUnitComponent } from './business-unit/business-unit.component';
import { RolesComponent } from './roles/roles.component';
import { PositionStatusComponent } from './position-status/position-status.component';
import { ManagementModule } from './management/management.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './_service/in-memory-data.service';
import { CertaintyModule } from './feature_modules/certainty/certainty.module';
import { LocationModule } from './feature_modules/location/location.module';
import { StatusModule } from './feature_modules/status/status.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeniorityComponent,
    BusinessUnitComponent,
    RolesComponent,
    PositionStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CertaintyModule,
    LocationModule,
    StatusModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    CoreModule,
    ManagementModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests. => in development with a real API
    // please remove HttpClientInMemoryWebApiModule => 
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    )
  ],
  exports: [
    CoreModule,
    CertaintyModule
  ],
  providers: [
    InMemoryDataService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
