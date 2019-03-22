// Angular Modules 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   // e.g. Directives (ngIf, ngFor) and Pipes 

// Components 
import { PassengerDashboardComponent } from './passenger-dashboard.component'; 

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ PassengerDashboardComponent ],   
  exports:      [ PassengerDashboardComponent ]
})
export class PassengerDashboardModule { }
