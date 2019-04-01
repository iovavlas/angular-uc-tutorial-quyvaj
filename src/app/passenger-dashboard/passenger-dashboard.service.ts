// Angular Modules
import { Injectable } from '@angular/core'; 
import { Http, Response } from '@angular/http'; 

// RxJS
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map'; 

// Interfaces 
import { Passenger } from './interfaces/passenger.interface';

//const PASSENGER_API: string = '/api/passengers';    // siehe 'webpack.config.js' ... 
const PASSENGER_API: string = 'https://raw.githubusercontent.com/iovavlas/angular-uc-tutorial-quyvaj/master/src/db.json'; 

// my Http-Service...
@Injectable()   // tells Angular, that we can inject things in the constructor...  
export class PassengerDashboardService {

  // Make the service a Http-service / Inject the Http-module into the Service-constructor 
  constructor(private http: Http) {
    console.log('Inside the service constructor...'); 
    console.log('...http', http);
  }

  // Version without the actual Http-Request... 
  /*getPassengers(): Passenger[] {
    return [  
      { id: 66, fullname: 'Stephen', checkedIn: true, checkInDate: 1490742000000, 
        children: null }, 
      { id: 67, fullname: 'Rose', checkedIn: false, checkInDate: null, 
        children: [ { name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 } ] }, 
      { id: 68, fullname: 'James', checkedIn: true, checkInDate: 1491606000000, 
        children: [ { name: 'Jessica', age: 1 } ] }
    ];
  }*/ 

  // Http-Request <- GET
  getPassengers(): Observable<Passenger[]> {
    return this.http            // Http {}
          .get(PASSENGER_API)   // Observable {} (it's like a Data stream)
          .map( (response: Response) => {     // response = Observable {}
            console.log('...response GET', response);     
            return response.json().passengers   // 'passengers' is the [property] of the JSON-Object in 'db.json' in line #2 
          } );   
  }

  // Http-Request -> PUT
  updatePassenger(passenger: Passenger): Observable<Passenger> {
    // return this.http
    //         .put(`${PASSENGER_API}/${passenger.id}`, passenger)  
    //         .map( (response: Response) => { 
    //           console.log('...response PUT', response);     
    //           return response.json();
    //         } );   
    return of(passenger); 
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    /*return this.http
            .delete(`${PASSENGER_API}/${passenger.id}`)  
            .map( (response: Response) => { 
              console.log('...response DELETE', response);     
              return response.json();
            } );  */ 
    return of(passenger);
  }
}