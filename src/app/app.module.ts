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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';

import { ScheduledInspectionsComponent } from './scheduled-inspections/scheduled-inspections.component';
import { CompletedInspectionsComponent } from './completed-inspections/completed-inspections.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InspectionDetailsComponent } from './inspection-details/inspection-details.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { ApplicationSettingsComponent } from './application-settings/application-settings.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    Home,
    ScheduledInspectionsComponent,
    CompletedInspectionsComponent,
    DashboardComponent,
    InspectionDetailsComponent,
    KnowledgeBaseComponent,
    ApplicationSettingsComponent,
    LoginComponent
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
    MatSortModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSnackBarModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [Home]
})
export class AppModule { }

