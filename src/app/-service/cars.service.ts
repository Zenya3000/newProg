import { Injectable } from '@angular/core';
import { CARS } from '../CARS';

@Injectable()
export class CarsService {

  constructor() { }

  getCars(){
    return CARS.reverse();
  }
  appData(data){
    CARS.push(data);
  }
  changeStatus(data){
    // CARS[data[0].id].liked = data[0].status;
    // console.log('cars', CARS);
  }
}
