import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { FavComponent } from './cars/fav/fav.component';
import { LikedComponent } from './liked/liked.component';
import { LikeComponent } from './liked/like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    FavComponent,
    LikedComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
