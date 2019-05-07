import { Component } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  // simulate a Http call, that gets the status of a server after 2 seconds ... 
  appStatus = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('stable');
    }, 2000);
  } );

  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'critical',
      started: new Date(15, 1, 2017)
    }
  ];

  filteredStatus = '';

  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'success': server.status === 'stable',
      'warning': server.status === 'offline',
      'danger': server.status === 'critical'
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
  }
}
