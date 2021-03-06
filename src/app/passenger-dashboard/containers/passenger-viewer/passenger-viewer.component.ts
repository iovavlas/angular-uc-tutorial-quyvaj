import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';   // for routing 

import 'rxjs/add/operator/switchMap'; 

// Interfaces 
import { Passenger } from '../../interfaces/passenger.interface';

// Services 
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  /* Component properties */
  selector: 'passenger-viewer',                         // HTML-Element  
  templateUrl: './passenger-viewer.component.html',     // Content of the HTML-Element 
  styleUrls: ['./passenger-viewer.component.css']       // CSS-file for this Component  
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  // Depedency Injection: Inject the Service into the component-constructor... 
  constructor( 
    private passengerService: PassengerDashboardService, 
    private router: Router, 
    private route: ActivatedRoute 
    ) {
    // automatically:   this.passengerService = PassengerDashboardService; 
    console.log('Inside PassengerViewerComponent constructor...');
    console.log('...Service: ', passengerService);
    console.log('...route: ', route);
  }

  /* lifecycle hook => a function called by Angular, when something happens... */
  ngOnInit() {        // e.g. (dynamic) Data fetching, Initializing... 
    console.log('Inside ngOnInit in PassengerViewerComponent...');

    /* without a Http Request... */  
    //this.passenger = this.passengerService.getPassenger(1);  

    /* using the Service to fetch the data, instead of hard-coding it here... */
    /*this.passengerService
      .getPassenger(4)       // Observable {}
      .subscribe((data: Passenger) => {        // Subscriber {} gets the response/data 
        console.log('...data (viewer)', data);
        return this.passenger = data;           // here the assignment... 
      }); */
    
    /* using the Service and the Router to fetch the data dynamically... */
    this.route.params                           // Observable 
      .switchMap( (data: Passenger) => {       // the actual Passenger id from the URL Address
          console.log('...data (route)', data);
          return this.passengerService.getPassenger(data.id);   // Observable   
        }
      ) 
      .subscribe( (data: Passenger) => {            // Response        
          console.log('...data (viewer)', data);
          return this.passenger = data;            
        }
      ); 
    
    /* We can also use the route.snapshot.params method to get the id from the URL Address... 
      Also for the queryParams and the fragment, if we use any... */ 
    console.log('Snapshot params', this.route.snapshot.params);
    console.log('Snapshot queryParams', this.route.snapshot.queryParams);
    console.log('Snapshot fragment', this.route.snapshot.fragment);
    this.route.params                       // Observable. Get informed when the URL-parameters change
      .subscribe( (params: Params) => {     // We can do the same thing (subscribe) for the queryParams          
          console.log('...URL parameters', params);                     // and the fragment as well
          console.log('...Observable', this.passengerService.getPassenger(params.id).subscribe);
        }
      );   
  }

  onUpdatePassenger(event: Passenger) {
    console.log('Inside onUpdatePassenger()...', event);  

    // the actual updatePassenger() method inside the Service is not working...   
    /* 
    this.passengerService.updatePassenger(event)
    .subscribe((data: Passenger) => {         
      this.passenger = Object.assign( {}, this.passenger, data );  
    });
    */
    this.passenger = event; // the Property-sequence inside the Passenger-object doesn't matter
  }

  goBack() {
    this.router.navigate(['/passengers']);
    
    //this.router.navigate(['passengers'], {relativeTo: this.route}); 
    // This way, we would navigate relativ to the current active Route -> URL 'DOMAIN/passengers/id/passengers'
    // Here we can also use '[queryParams]' and 'fragment', if we wanted to... 
    // With queryParamsHandling: 'preserve', we can maintain the queryParams in the URL, even if we jump somewhere else 
  }
}