// Angular Modules 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';   // e.g. Directives (ngIf, ngFor) and Pipes 
import { FormsModule } from '@angular/forms';     // for 2 way Binding
import { RouterModule, Routes } from '@angular/router';   // for routing 

// custom Modules 
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module'; 

// Components 
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

// Routes
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, 
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports:      [ // Angular Modules 
                  BrowserModule, CommonModule, FormsModule, 
                  RouterModule.forRoot(routes),  
                  // custom Modules 
                  PassengerDashboardModule ],
  declarations: [ AppComponent, HomeComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent ]    
})
export class AppModule { }
