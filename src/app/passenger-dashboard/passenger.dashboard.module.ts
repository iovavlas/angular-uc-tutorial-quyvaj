// Angular Modules 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   // e.g. Directives (ngIf, ngFor) and Pipes 

// custom Modules 

// Components 
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]    
})
export class PassengerDashboardModule { }
