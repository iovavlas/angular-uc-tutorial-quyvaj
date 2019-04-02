// Angular Modules 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   // e.g. Directives (ngIf, ngFor) and Pipes 
import { HttpModule } from '@angular/http';       // for http-requests via a service 
import { FormsModule } from '@angular/forms';     // e.g. for 2 way Binding and forms

// Containers / smart components 
import { PassengerDashboardComponent } from './containers/passenger-dashboard.component'; 
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// Dumb components 
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component'; 
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component'; 
import { PassengerFormComponent } from 
'./components/passenger-form/passenger-form.component';

// Services 
import { PassengerDashboardService } from './passenger-dashboard.service';  

@NgModule({
  imports:      [ CommonModule,
                  HttpModule, 
                  FormsModule ],
  declarations: [ PassengerDashboardComponent, 
                  PassengerViewerComponent,
                  PassengerCountComponent, 
                  PassengerDetailComponent, 
                  PassengerFormComponent ],   
  exports:      [ PassengerDashboardComponent,
                  PassengerViewerComponent ],
  providers:    [ PassengerDashboardService ]
})
export class PassengerDashboardModule { }
