import { Component, Input } from '@angular/core';

// Interfaces 
import { Passenger } from '../../interfaces/passenger.interface';

@Component({
  /* Component properties */
  selector: 'passenger-form',                        // HTML-Element  
  templateUrl: './passenger-form.component.html',    // Content of the HTML-Element 
  styleUrls: [ './passenger-form.component.css' ]    // CSS-file for this Component  
})
export class PassengerFormComponent { 
  @Input()  // tells Angular that the property 'detail' is an Input-binding from the container <passenger-viewer>
  detail: Passenger;

  constructor() {}
}