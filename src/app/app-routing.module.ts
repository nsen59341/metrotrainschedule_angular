import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailabletrainsComponent } from './availabletrains/availabletrains.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { LivestatusComponent } from './livestatus/livestatus.component';
import { SeatavailabilityComponent } from './seatavailability/seatavailability.component';
import { TrainfareComponent } from './trainfare/trainfare.component';
import { TrainscheduleComponent } from './trainschedule/trainschedule.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'get-live-satus',
    component: LivestatusComponent
  },
  {
    path: 'get-available-trains',
    component: AvailabletrainsComponent
  },
  {
    path: 'get-train-fare',
    component: TrainfareComponent
  },
  {
    path: 'get-train-schedule',
    component: TrainscheduleComponent
  },
  {
    path: '**',
    component: Error404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
