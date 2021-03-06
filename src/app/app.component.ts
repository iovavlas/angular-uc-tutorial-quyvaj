import { Component } from '@angular/core'; 

interface Nav {
  link: string,
  exact: boolean, 
  name: string  
}

@Component({
  /* Component properties */
  selector: 'my-app-root',        // CSS-Selector -> HTML-Element (template) in 'index.html' 
  templateUrl: './app.component.html',        // Content of HTML-Element 
  /*  template: '<h1 class="app"> Rendering App-root component... </h1>',  
      template: `               
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

  constructor() {
    this.title = 'Ultimate Angular'; 
    console.log('Inside AppComponent constructor...');
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

  nav: Nav[] = [
    {
      link: "/", 
      exact: true, 
      name: "Home"
    }, 
    {
      link: "/passengers", 
      exact: true, 
      name: "Passengers"
    },
    {
      link: "/oops", 
      exact: false, 
      name: "404"
    }
  ];
}
