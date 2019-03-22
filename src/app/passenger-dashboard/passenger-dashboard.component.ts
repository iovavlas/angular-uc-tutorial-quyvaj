import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number  
}

interface Passenger {     // custom Type (Description) 
  id: number,
  fullname: string,
  checkedIn: boolean, 
  checkInDate: number | null,     
  children: Child[] | null
}

@Component({
  /* Component properties */
  selector: 'passenger-dashboard',                    // HTML-Element in 'app.component.html' 
  templateUrl: './passenger-dashboard.component.html',    // Content of HTML-Element 
  styleUrls: [ './passenger-dashboard.component.css' ]    // CSS-file for this Component  
})
export class PassengerDashboardComponent {
  
  // constructor() { }

  passengers: Passenger[] = [
    { id: 66, fullname: 'Stephen', checkedIn: true, checkInDate: 1490742000000, 
      children: null }, 
    { id: 67, fullname: 'Rose', checkedIn: false, checkInDate: null, 
      children: [ { name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 } ] }, 
    { id: 68, fullname: 'James', checkedIn: true, checkInDate: 1491606000000, 
      children: [ { name: 'Jessica', age: 1 } ] }
  ];
}
console.log('test Subcomponent', this);
