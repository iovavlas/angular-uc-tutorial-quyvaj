import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'not-found',
  template: `
    <div>
      Ooooooooppppssss! Not found... (404) --> go <a routerLink="/"> Home </a> ? 
      <br/>
      {{ errorMessage }}
    </div>
  `
})
export class NotFoundComponent implements OnInit{
  errorMessage: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.errorMessage = this.route.snapshot.data['message'];

    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message']; 
      }
    )
  }
}
