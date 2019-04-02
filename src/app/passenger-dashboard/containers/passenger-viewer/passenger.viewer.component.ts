import { Component, OnInit } from '@angular/core';

// Interfaces 
import { Passenger } from '../../interfaces/passenger.interface';

// Services 
import { PassengerDashboardService } from '../passenger-dashboard.service'; 

@Component({
  /* Component properties */
  selector: 'passenger-dashboard',                    // HTML-Element in 'app.component.html' 
  templateUrl: './passenger-dashboard.component.html',    // Content of HTML-Element 
  styleUrls: [ './passenger-dashboard.component.css' ]    // CSS-file for this Component  
})
export class PassengerDashboardComponent implements OnInit {