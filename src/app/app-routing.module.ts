import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompletedInspectionsComponent } from './completed-inspections/completed-inspections.component';
import { InspectionDetailsComponent } from './inspection-details/inspection-details.component';

const routes: Routes = [
  { path: 'dashboard-component', component: DashboardComponent },
  { path: 'completed-inspections-component', component: CompletedInspectionsComponent },
  { path: 'inspection-details-component', component: InspectionDetailsComponent },
  { path: '',   redirectTo: '/dashboard-component', pathMatch: 'full' }, // redirect to 'dashboard-component'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }