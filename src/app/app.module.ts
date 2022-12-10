import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { Home } from './app.home';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { ScheduledInspectionsComponent } from './scheduled-inspections/scheduled-inspections.component';
import { CompletedInspectionsComponent } from './completed-inspections/completed-inspections.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InspectionDetailsComponent } from './inspection-details/inspection-details.component';

@NgModule({
  declarations: [
    Home,
    ScheduledInspectionsComponent,
    CompletedInspectionsComponent,
    DashboardComponent,
    InspectionDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [Home]
})
export class AppModule { }

