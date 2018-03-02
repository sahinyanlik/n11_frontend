import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { BooksComponent } from './books/books.component';
import { DataService } from './shared/services/data.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
