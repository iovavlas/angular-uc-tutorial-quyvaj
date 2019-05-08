import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { HttpServersService } from './http-servers.service';

@Component({
  selector: 'http-servers',
  templateUrl: './http-servers.component.html',
  styleUrls: [ './http-servers.component.css' ]
})
export class HttpServersComponent {

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
  constructor(private httpServersService: HttpServersService) {}

  appName = this.httpServersService.getAppName(); // if we didn't use the 'async' pipe in the HTML template, then we would have had to subscribe...

  onSave() {
    this.httpServersService.storeServers(this.servers)
      .subscribe(       // subscribe to the Observable
        (response) => console.log('response', response),
        //(response: Response) => console.log('response', response.json()),
        (error) => console.log('error', error)
      );
  }

  onGet() {
    this.httpServersService.getServers()
      .subscribe(       // subscribe to the Observable     
        (servers: any[]) => {
          this.servers = servers;
          console.log('servers', servers);
        },
        (error) => console.log(error)
      );
  }
}
