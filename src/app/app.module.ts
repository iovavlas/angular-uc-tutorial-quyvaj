// Angular Modules 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';   // e.g. Directives (ngIf, ngFor) and Pipes 
import { FormsModule } from '@angular/forms';   // for 2 way Binding

// custom Modules 
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module'; 

// Components 
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ // Angular Modules 
                  BrowserModule, CommonModule, FormsModule, 
                  // custom Modules 
                  PassengerDashboardModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]    
})
export class AppModule { }
