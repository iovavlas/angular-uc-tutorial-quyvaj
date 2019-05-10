import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { HttpEvent } from '@angular/common/http';

import { HttpClientServersService } from './http-client-servers.service'; 

@Component({
  selector: 'http-client-servers',
  templateUrl: './http-client-servers.component.html',
  styleUrls: [ './http-client-servers.component.css' ]
})
export class HttpClientServersComponent {

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ]; 

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  // Inject the service...
  constructor(private httpClientServersService: HttpClientServersService) {}

  appName = this.httpClientServersService.getAppName(); // if we didn't use the 'async' pipe in the HTML template, then we would have had to subscribe...

  onSave() {
    this.httpClientServersService.storeServers(this.servers)
      .subscribe(       // subscribe to the Observable
        (response) => console.log('response', response),
        // (response: Response) => console.log('response', response.json()),
        // (response: HttpEvent<Object>) => console.log('response Event', response),
        // headers: new HttpHeaders().set('.....').append('.....');
        (error) => console.log('error', error)
      );
  }

  onGet() {
    this.httpClientServersService.getServers()
      .subscribe(       // subscribe to the Observable     
        (servers: any[]) => {
          this.servers = servers;
          console.log('servers', servers);
        },
        (error) => console.log(error)
      );
  }
}
