import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SelectModule } from 'ng2-select';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { FavComponent } from './cars/fav/fav.component';
import { LikedComponent } from './liked/liked.component';
import { LikeComponent } from './liked/like/like.component';
import { DashComponent } from './dash/dash.component';
import { AddcarComponent } from './dash/addcar/addcar.component';
import { AllcarComponent } from './dash/allcar/allcar.component';
import { FavcarComponent } from './dash/favcar/favcar.component';
import { OnefavcanComponent } from './dash/favcar/onefavcan/onefavcan.component';
import { SelectedComponent } from './dash/allcar/selected/selected.component';
import { ThumbComponent } from './favcar/onefavcan/thumb/thumb.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    FavComponent,
    LikedComponent,
    LikeComponent,
    DashComponent,
    AddcarComponent,
    AllcarComponent,
    FavcarComponent,
    OnefavcanComponent,
    SelectedComponent,
    ThumbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
