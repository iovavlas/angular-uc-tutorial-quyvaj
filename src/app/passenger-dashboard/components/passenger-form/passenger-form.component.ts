import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  genders = ['male', 'female'];

  @ViewChild('form') myForm: NgForm; // the Type here is NgForm instead of ElementRef

  constructor() {
    console.log('Inside PassengerFormComponent constructor...');
  }

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();   // ms 
    }
  }

  /* If we want to have access to the form, before we actually submit it, for example if we want to validate sth. before submitting, then we ca do this with @ViewChild, since we already have a #ref variable for the whole form -> '#form' 
  This way, we don't need to pass it into the method, as a parameter */  
  /* If we pass the whole form in to this method, instead of "form.value", then this argument is of type NgForm (not Passenger) */ 
  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      console.log("emitting event inside the 'handleSubmit' method...");
      this.update.emit(passenger); 
    }
    console.log('myForm', this.myForm.value);
  }

  getCurrentTS() {
    // patchValue -> set the value of a specific Input field / control
    // setValue --> set the values of the whole form 
    this.myForm.form.patchValue( {
      myGroup: {
        checkInDate : Date.now()   
      }
    } 
    );
  }

  resetForm() {
    this.myForm.reset();
  }
}