import { Component } from '@angular/core';

interface Passenger {     // custom Type (Description) 
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  /* Component properties */
  selector: 'my-app-root',            // CSS-Selector -> HTML-Element (template) in 'index.html' 
  templateUrl: './app.component.html',        // Content of HTML-Element 
  /*  template: '<h1 class="app"> Rendering App-root component... </h1>',  
      template: `               
          <div class="app"> 
            <h1> Rendering App-root component... </h1> 
            <p> Hello... {{ title }} !</p>
          </div>` , */
  styleUrls: [ './app.component.css' ]  // CSS-file for this Component  
})
export class AppComponent {
  title: string = ''; 
  Num1: number = 1;
  isHappy: boolean = true;
  inputText: string = 'Enter some Text...';
  eventInputText: string = 'Event...'
  inputText2: string = '';
  inputText3: string = '2 way databinding...';
  inputText4: string = '#ref...';
  inputText5: string = 'ngif...';

  constructor() {
    this.title = 'Ultimate Angular'; 
  }

  handleInput(event: any) :void {
    this.eventInputText = event.target.value;
  }

  handleClickDelete() :void {
    this.eventInputText = '';
  }

  handleChange(value: string) :void {
    this.inputText2 = value; 
  }

  handleClickGet(value: string) :void {
    console.log(value);
    this.inputText4 = value; 
  }

  passengers: Passenger[] = [
    { id: 66, fullname: 'Stephen', checkedIn: true }, 
    { id: 67, fullname: 'Rose', checkedIn: false }, 
    { id: 68, fullname: 'James', checkedIn: true }
  ];
}
console.log('test', this);
