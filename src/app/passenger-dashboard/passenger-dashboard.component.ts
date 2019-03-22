import { Component, OnInit } from '@angular/core';

// Interfaces 
import { Passenger } from './Interfaces/passenger.interface';

@Component({
  /* Component properties */
  selector: 'passenger-dashboard',                    // HTML-Element in 'app.component.html' 
  templateUrl: './passenger-dashboard.component.html',    // Content of HTML-Element 
  styleUrls: [ './passenger-dashboard.component.css' ]    // CSS-file for this Component  
})
export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];  

  // constructor() { }

  /* lifecycle hook => a function called by Angular, when something happens... */
  ngOnInit() {    // e.g. (dynamic) Data fetching, Initializing... 
    console.log('ngOnInit...');
    this.passengers = [
      { id: 66, fullname: 'Stephen', checkedIn: true, checkInDate: 1490742000000, 
        children: null }, 
      { id: 67, fullname: 'Rose', checkedIn: false, checkInDate: null, 
        children: [ { name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 } ] }, 
      { id: 68, fullname: 'James', checkedIn: true, checkInDate: 1491606000000, 
        children: [ { name: 'Jessica', age: 1 } ] }
    ];
  }
}
console.log('test Subcomponent', this);
