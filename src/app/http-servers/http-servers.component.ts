import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { HttpServersService } from './http-servers.service';

@Component({
  selector: 'http-servers',
  templateUrl: './http-servers.component.html',
  styleUrls: [ './http-servers.component.css' ]
})
export class HttpServersComponent {

  constructor(private httpServersService: HttpServersService) {}

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

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  appName = this.httpServersService.getAppName();

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    this.httpServersService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  onGet() {
    this.httpServersService.getServers()
      .subscribe(
        (servers: any[]) => this.servers = servers,
        (error) => console.log(error)
      );
  }
}
