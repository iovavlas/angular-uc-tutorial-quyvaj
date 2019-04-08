import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

// Interfaces 
import { Passenger } from '../../interfaces/passenger.interface';

@Component({
  /* Component properties */
  selector: 'passenger-detail',                        // HTML-Element  
  templateUrl: './passenger-detail.component.html',    // Content of HTML-Element 
  styleUrls: [ './passenger-detail.component.css',     // CSS-files for this Component
               '../../containers/passenger-dashboard/passenger-dashboard.component.css' ]  
})
export class PassengerDetailComponent implements OnChanges {
  @Input()  // pass data from the parent (container) into the child (subcomponent) 
  detail: Passenger; 

  @Output()  // pass data from the child (subcomponent) into the parent (container) 
  //edit: EventEmitter<any> = new EventEmitter();
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  
  @Output()  // pass data from the child (subcomponent) into the parent (container) 
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>(); 

  @Output()  // pass data from the child (subcomponent) into the parent (container) 
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>(); 

  editing: boolean = false; 

  constructor() {
    console.log('Inside PassengerDetailComponent constructor...'); 
  }

  // in order to break the binding between the parent and the child component... 
  ngOnChanges(changeObj) {    // executed before ngOnInit()...
    console.log('Inside ngOnChanges...', changeObj);

    if (changeObj.detail.currentValue) {
      //this.detail = changeObj.detail.currentValue;  // via reference... 
      this.detail = Object.assign( {}, changeObj.detail.currentValue ); // merge the changes
    }
  }

  onNameChange(value: string) {
    // console.log(value); 
    this.detail.fullname = value;    
  }

  toggleEdit() {
    console.log('editing:', this.editing);
    
    if (this.editing) {
      this.edit.emit(this.detail);       
    }
    this.editing = !this.editing;
  }

  onRemove() {
    console.log('onRemove...');
    this.remove.emit(this.detail);
  }

  goToPassenger() {
    console.log('goToPassenger...');
    this.view.emit(this.detail); 
  }
}
