import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  @Output()   // pass data from the child (subcomponent) into the parent (container)
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  constructor() {
    console.log('Inside PassengerFormComponent constructor...');
  }

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();   // ms 
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      console.log("emitting event inside the 'handleSubmit' method...");
      this.update.emit(passenger); 
    }
  }
}