// Angular Modules 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   // e.g. Directives (ngIf, ngFor) and Pipes 

// Containers / smart components 
import { PassengerDashboardComponent } from './containers/passenger-dashboard.component'; 

// Dumb components 
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component'; 
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component'; 

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ PassengerDashboardComponent, 
                  PassengerCountComponent, 
                  PassengerDetailComponent ],   
  exports:      [ PassengerDashboardComponent ]
})
export class PassengerDashboardModule { }
