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

    /* use the Service to fetch the data, instead of hard-coding it here... */
    
    //this.passengers = this.passengerService.getPassengers();  // without a Http Request.. 

    this.passengerService
      .getPassengers()
      .subscribe( (data: Passenger[]) => this.passengers = data );
  }

  handleEdit(event: Passenger) {
    console.log('Inside handleEdit()...', event);

    function myFunction(passenger: Passenger) {
      if (passenger.id === event.id) {
        //passenger.fullname = event.fullname;
        //passenger = event;
        passenger = Object.assign({}, passenger, event );  // merge the changes...  
      }
      return passenger;
    }

    console.log(this.passengers);
  }

  handleRemove(event: Passenger) {
    console.log('Inside handleRemove()...', event); 

    this.passengers = this.passengers.filter( 
      (passenger: Passenger) => passenger.id !== event.id 
    );
  }
}
