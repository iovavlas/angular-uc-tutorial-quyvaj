// Angular Modules
import { Injectable } from '@angular/core'; 
import { Http, Response } from '@angular/http'; 

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 

// Interfaces 
import { Passenger } from './interfaces/passenger.interface';

const PASSENGER_API: string = '/api/passengers';  

// my Http-Service...
@Injectable()   // tells Angular, that we can inject things in the constructor...  
export class PassengerDashboardService {

  // Make the service a Http-service / Inject the Http-module into the Service-constructor 
  constructor(private http: Http) {
    console.log('Inside the service constructor...'); 
    console.log('...http', http);
  }

  /* Version without the actual Http-Request... 
  getPassengers(): Passenger[] {

    return [  
      { id: 66, fullname: 'Stephen', checkedIn: true, checkInDate: 1490742000000, 
        children: null }, 
      { id: 67, fullname: 'Rose', checkedIn: false, checkInDate: null, 
        children: [ { name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 } ] }, 
      { id: 68, fullname: 'James', checkedIn: true, checkInDate: 1491606000000, 
        children: [ { name: 'Jessica', age: 1 } ] }
    ];
  } */

  getPassengers(): Observable<Passenger[]> {
    return this.http
          .get(PASSENGER_API)
          .map( (response: Response) => response.json() );
  }
}