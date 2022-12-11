import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduledInspectionsComponent } from './scheduled-inspections/scheduled-inspections.component';
import { CompletedInspectionsComponent } from './completed-inspections/completed-inspections.component';
import { InspectionDetailsComponent } from './inspection-details/inspection-details.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { ApplicationSettingsComponent } from './application-settings/application-settings.component';
import { LoginComponent } from './login/login.component';
import { Home } from './app.home';

const routes: Routes = [
  { path: 'login-component', component: LoginComponent},
  { path: 'home-component', component: Home},
  { path: 'dashboard-component', component: DashboardComponent },
  { path: 'scheduled-inspections-component', component: ScheduledInspectionsComponent },
  { path: 'completed-inspections-component', component: CompletedInspectionsComponent },
  { path: 'inspection-details-component', component: InspectionDetailsComponent },
  { path: 'knowledge-base-component', component: KnowledgeBaseComponent },
  { path: 'application-settings-component', component: ApplicationSettingsComponent },
  { path: '', redirectTo: '/dashboard-component', pathMatch: 'full' }, // redirect to 'dashboard-component'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }