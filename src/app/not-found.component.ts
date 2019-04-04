import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div>
      Ooooooooppppssss! Not found... (404) --> go <a routerLink="/"> Home </a> ? 
    </div>
  `
})
export class NotFoundComponent {}
