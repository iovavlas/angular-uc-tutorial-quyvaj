import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable() // we need this, in order to be able to inject the 'Http' service into this service (constructor)...
export class HttpServersService {

  constructor(private http: Http) {
    // console.log('...http vol. 2', http);
  }

  // Note: the extension '.json' at the end of the URL is very important, otherwise it won't work !!!

  storeServers(servers: any[]) {
    const myCustomHeaders = new Headers({'Content-Type': 'application/json'});  // optional...

    /* For Firebase case, the 'post' method will merge the new data with the existing ones, 
    whereas the 'put' method will overwrite any existing data. This depends on the backend */ 
    /* return this.http.post('https://udemy-ng-http-acb9a.firebaseio.com/data.json',
       servers,
       {headers: headers}); */
    return this.http.put('https://udemy-ng-http-acb9a.firebaseio.com/data.json',
      servers,                    // The request is an Observable{}. We have to subscribe to it, either here, or there where we make the call... 
      {headers: myCustomHeaders});   
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-acb9a.firebaseio.com/data.json')   // The response is an Observable{}. We have to subscribe to it, either here, or there where we make the call...
      .map(   // transform the response data with the map() operator...
        (response: Response) => {
          // the json() method unwraps the response body...
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data; 
        }
      ) 
      .catch( 
        (error: Response) => {
          return Observable.throw('Something went wrong');  // we must return an Observable...
          // return Observable.throw(error);
          // return Observable.throw(error.json());
        }
      );
  }

  getAppName() {
    return this.http.get('https://udemy-ng-http-acb9a.firebaseio.com/appName.json') 
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
