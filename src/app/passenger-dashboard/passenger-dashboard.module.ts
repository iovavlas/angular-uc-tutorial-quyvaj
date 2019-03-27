// Angular Modules 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   // e.g. Directives (ngIf, ngFor) and Pipes 

// Containers / smart components 
import { PassengerDashboardComponent } from './containers/passenger-dashboard.component'; 

// Dumb components 
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component'; 
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component'; 

// Services 
import { PassengerDashboardService } from './passenger-dashboard.service';  

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ PassengerDashboardComponent, 
                  PassengerCountComponent, 
                  PassengerDetailComponent ],   
  exports:      [ PassengerDashboardComponent ],
  providers:    [ PassengerDashboardService ]
})
export class PassengerDashboardModule { }
