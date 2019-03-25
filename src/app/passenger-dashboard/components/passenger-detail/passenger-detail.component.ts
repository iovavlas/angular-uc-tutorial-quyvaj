import { Component, Input } from '@angular/core';

// Interfaces 
import { Passenger } from '../../interfaces/passenger.interface';

@Component({
  /* Component properties */
  selector: 'passenger-detail',                        // HTML-Element  
  templateUrl: './passenger-detail.component.html',    // Content of HTML-Element 
  styleUrls: [ './passenger-detail.component.css',     // CSS-files for this Component
               '../../containers/passenger-dashboard.component.css' ]      
})
export class PassengerDetailComponent {
  @Input()  // tells Angular that the property 'detail' is an Input-binding from the container
  detail: Passenger; 

  constructor() {
    console.log('Inside PassengerDetailComponent constructor...'); 
  }
}
