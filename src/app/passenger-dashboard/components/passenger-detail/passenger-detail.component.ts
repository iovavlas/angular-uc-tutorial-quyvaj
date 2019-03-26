import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Input()  // pass data from the parent (container) into the child (subcomponent) 
  detail: Passenger; 

  @Output()  // pass data from the child (subcomponent) into the parent (container) 
  edit: EventEmitter<any> = new EventEmitter();
  
  @Output()  // pass data from the child (subcomponent) into the parent (container) 
  remove: EventEmitter<any> = new EventEmitter(); 

  editing: boolean = false; 

  constructor() {
    console.log('Inside PassengerDetailComponent constructor...'); 
  }

  onNameChange(value: string) {
    // console.log(value); 
    this.detail.fullname = value;    
  }

  toggleEdit() {
    if(this.editing) {
      this.edit.emit(this.detail);       
    }
    this.editing = !this.editing;
  }

  onRemove() {
    console.log('onRemove');
    this.remove.emit(this.detail);
  }
}
