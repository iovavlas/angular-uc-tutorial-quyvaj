import { Component, OnInit } from '@angular/core';

// Interfaces 
import { Passenger } from '../interfaces/passenger.interface';

// Services 
import { PassengerDashboardService } from '../passenger-dashboard.service'; 

@Component({
  /* Component properties */
  selector: 'passenger-dashboard',                    // HTML-Element in 'app.component.html' 
  templateUrl: './passenger-dashboard.component.html',    // Content of HTML-Element 
  styleUrls: [ './passenger-dashboard.component.css' ]    // CSS-file for this Component  
})
export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];  

  // Depedency Injection: Inject the Service into the component-constructor... 
  constructor(private passengerService: PassengerDashboardService) {
    // automatically:   this.passengerService = PassengerDashboardService; 
    console.log('Inside PassengerDashboardComponent constructor...'); 
    console.log('...Service: ', passengerService);
  }

  /* lifecycle hook => a function called by Angular, when something happens... */
  ngOnInit() {    // e.g. (dynamic) Data fetching, Initializing... 
    console.log('Inside ngOnInit in PassengerDashboardComponent...');
    
    // this.passengers = this.passengerService.getPassengers();  // without a Http Request.. 

    /* use the Service to fetch the data, instead of hard-coding it here... */
    this.passengerService
      .getPassengers()                          // Observable {}
      .subscribe( (data: Passenger[]) => {      // Subscriber {} gets the response/data 
        console.log('...data', data);           // Array[] of Passengers 
        return this.passengers = data;          // here the assignment... 
      } );
  }

  handleEdit(event: Passenger) {
    console.log('Inside handleEdit()...', event);

    this.passengers = this.passengers.map( (passenger: Passenger) => {
        if (passenger.id === event.id) {
          //passenger = event;  (via Reference...) 
          passenger = Object.assign( {}, passenger, event );  // merge the changes in a new Object...  
        }
        return passenger;
      }
    );
    console.log(this.passengers);
  }

  handleRemove(event: Passenger) {
    console.log('Inside handleRemove()...', event); 

    this.passengers = this.passengers.filter( 
      (passenger: Passenger) => passenger.id !== event.id 
    );
  }
}
