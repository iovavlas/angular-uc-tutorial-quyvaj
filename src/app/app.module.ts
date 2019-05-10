// Angular Modules 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';   // e.g. Directives (ngIf, ngFor) and Pipes 
import { FormsModule } from '@angular/forms';     // for 2 way Binding
import { RouterModule, Routes } from '@angular/router';   // for routing 

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// custom Modules 
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module'; 

// Components 
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipesComponent } from './pipes/pipes.component'; 
import { HttpServersComponent } from './http-servers/http-servers.component';
import { HttpClientServersComponent } from './http-client-servers/http-client-servers.component'; 

// Services
import { HttpServersService } from './http-servers/http-servers.service'; 
import { HttpClientServersService } from './http-client-servers/http-client-servers.service'; 

// custom Pipes
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SortPipe } from './pipes/sort.pipe';

// Routes (e.g. when we type something manually in the URL)
const routes: Routes = [
  // path: follows the domain in URL... e.g. domain/passengers
  { path: '', component: HomeComponent, pathMatch: 'full' }, 
  /*{ path: '**',   redirectTo: '/oops' },*/ 
  { path: '**', component: NotFoundComponent, data: {message: 'This page does not exist!'} }
];

@NgModule({
  imports:      [ // Angular Modules 
                  BrowserModule, CommonModule, FormsModule, 
                  RouterModule.forRoot(routes, { useHash: false }), 
                  HttpModule, ReactiveFormsModule, HttpClientModule, 
                  // custom Modules 
                  PassengerDashboardModule ],
  declarations: [ AppComponent, HomeComponent, NotFoundComponent, ReactiveFormComponent, 
                  PipesComponent, ShortenPipe, FilterPipe, ReversePipe, SortPipe,
                  HttpServersComponent, HttpClientServersComponent ],
  providers:    [ HttpServersService, HttpClientServersService ],
  bootstrap:    [ AppComponent ]    // Bootstrapping 'AppComponent'   
})
export class AppModule { }
