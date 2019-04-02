import { Component, OnInit } from '@angular/core';

// Interfaces 
import { Passenger } from '../../interfaces/passenger.interface';

// Services 
import { PassengerDashboardService } from '../../passenger-dashboard.service'; 

@Component({
  /* Component properties */
  selector: 'passenger-viewer',                        // HTML-Element  
  templateUrl: './passenger-viewer.component.html',    // Content of the HTML-Element 
  styleUrls: [ './passenger-viewer.component.css' ]    // CSS-file for this Component  
})
export class PassengerViewerComponent implements OnInit { 
  passenger: Passenger;

  // Depedency Injection: Inject the Service into the component-constructor... 
  constructor(private passengerService: PassengerDashboardService) {
    // automatically:   this.passengerService = PassengerDashboardService; 
    console.log('Inside PassengerViewerComponent constructor...'); 
    console.log('...Service: ', passengerService);
  }

  /* lifecycle hook => a function called by Angular, when something happens... */
  ngOnInit() {        // e.g. (dynamic) Data fetching, Initializing... 
    console.log('Inside ngOnInit in PassengerViewerComponent...');

    //this.passenger = this.passengerService.getPassenger(1);  // without a Http Request.. 

    /* using the Service to fetch the data, instead of hard-coding it here... */
    this.passengerService
      .getPassenger(5)       // Observable {}
      .subscribe( (data: Passenger) => {        // Subscriber {} gets the response/data 
        console.log('...data (viewer)', data);            
        return this.passenger = data;           // here the assignment... 
      } ); 
  }
}