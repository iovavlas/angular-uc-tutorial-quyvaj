import { Component, Input } from '@angular/core';

// Interfaces 
import { Passenger } from '../../interfaces/passenger.interface';

@Component({
  /* Component properties */
  selector: 'passenger-count',                        // HTML-Element  
  templateUrl: './passenger-count.component.html',    // Content of HTML-Element 
  styleUrls: ['./passenger-count.component.css']    // CSS-file for this Component  
})
export class PassengerCountComponent {
  @Input()   // tells Angular that the property 'items' is an Input-binding from the container
  items: Passenger[];

  constructor() {
    console.log('Inside PassengerCountComponent constructor...');
  }

  checkedInCount(): number {
    if (!this.items) return;  // if there are no passengers available... 

    /*          Array        Callback function(param)     return..                */
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }
}
