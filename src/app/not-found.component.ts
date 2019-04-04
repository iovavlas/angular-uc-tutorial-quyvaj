import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div>
      Ooooooooppppssss! Not found... (404) --> <a routerLink="/"> go home </a> ? 
    </div>
  `
})
export class NotFoundComponent {}
