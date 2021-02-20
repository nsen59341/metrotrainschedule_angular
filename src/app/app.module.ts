import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { LivestatusComponent } from './livestatus/livestatus.component';
import { SeatavailabilityComponent } from './seatavailability/seatavailability.component';
import { TrainfareComponent } from './trainfare/trainfare.component';
import { TrainscheduleComponent } from './trainschedule/trainschedule.component';
import { Error404Component } from './error404/error404.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvailabletrainsComponent } from './availabletrains/availabletrains.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LivestatusComponent,
    SeatavailabilityComponent,
    TrainfareComponent,
    TrainscheduleComponent,
    Error404Component,
    AvailabletrainsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'get-live-satus', component: LivestatusComponent },
      { path: 'get-available-trains', component: AvailabletrainsComponent },
      { path: 'get-train-fare', component: TrainfareComponent },
      { path: 'get-train-schedule', component: TrainscheduleComponent },
      { path: '**', component: Error404Component }
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
