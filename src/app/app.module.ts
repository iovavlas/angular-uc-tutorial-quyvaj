import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';   // e.g. Directives and Pipes 
import { FormsModule } from '@angular/forms';   // for 2 way Binding

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]    
})
export class AppModule { }
