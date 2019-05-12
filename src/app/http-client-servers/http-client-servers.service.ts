import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import 'rxjs/Rx';

@Injectable() // we need this, in order to be able to inject the 'HttpClient' service into this service (constructor)...
export class HttpClientServersService {

  constructor(private httpClient: HttpClient) {
    // console.log('...httpClient', httpClient);
  }

  // Note: the extension '.json' at the end of the URL is very important, otherwise it won't work !!!

  storeServers(servers: any[]) {
    /* For Firebase case, the 'post' method will merge the new data with the existing ones, 
    whereas the 'put' method will overwrite any existing data. This depends on the backend */ 
    /* return this.httpClient.put('https://udemy-ng-http-acb9a.firebaseio.com/data.json',
      servers); */                  // The request is an Observable{}. We have to subscribe to it, either here, or there where we make the call... 
    /*
    return this.httpClient.put('https://udemy-ng-http-acb9a.firebaseio.com/data.json',
      servers, {
        // observe: 'events'   // to observe events, instead of the response 
        observe: 'body'
        // headers: new HttpHeaders().set('.....').append('.....')
        // params: new HttpParams().set('.....').append('.....') // eg. Query parameters
      } );   
    */

    // In order to monitor the progress of our request (eg. for files), we can use following:
    const req = new HttpRequest('PUT', 'https://udemy-ng-http-acb9a.firebaseio.com/data.json',
      servers, {reportProgress: true} ); 
    return this.httpClient.request(req);  // Progress = (loaded / total) 
  }

  getServers() {
    // The response is an Observable{}. We have to subscribe to it, either here, or there where we make the call...
    // By default the httpClient will automatically extract the body of the response. We don't need the json() method anymore. By default we get the data in json format...
    // We define the type of the data either at the get method (get<Type>), or at the (data: Type) like usual... 
    // return this.httpClient.get<any>('https://udemy-ng-http-acb9a.firebaseio.com/data.json') 
    return this.httpClient.get<any>('https://udemy-ng-http-acb9a.firebaseio.com/data.json', 
      { 
        // observe: 'response',  // to get the full response, not only the body. Default: 'body'
        observe: 'body',
        // responseType: 'text'  // to get the data in text format. Default: 'json'. Other options: 'blob' for files etc.
        responseType: 'json'
      } )
      .map(   // transform the response data with the map() operator...
        // (servers: any) => {
        (servers) => {
          console.log('response Client', servers);
          
          for (const server of servers) {
            server.name = 'FETCHED_' + server.name;
          }
          return servers;
        }
      );
  }

  getAppName() {
    return this.httpClient.get('https://udemy-ng-http-acb9a.firebaseio.com/appName2.json') 
      .map(
        (appName) => {
          return appName;
        }
      );
  }
}
