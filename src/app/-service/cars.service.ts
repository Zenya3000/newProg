import { Injectable } from '@angular/core';
import { CARS } from '../CARS';

@Injectable()
export class CarsService {
  liked = [];
  constructor() { }

  getCars(){
    return CARS;
  }
  appData(data){
    CARS.push(data);
  }
  getFavCars(){
    this.liked = [];
    for (let i = 0, b = 0; i < CARS.length; i++) {
      const like = CARS[i];
      if(like.liked == true){
        this.liked[b] = like;
        b++;
      }
    }
    return this.liked;
  }
  changeStatus(data){
    console.log('dataFromAllCars', data);
    console.log('liked', this.liked);
    if(CARS[data.index].liked == false){
      console.log('add', data)
      CARS[data.index].liked = data.status;
      // for (let i = 0; i < this.liked.length; i++) {
      //   if(this.liked[i].liked == data.id){
      //     this.liked.splice(i, 1);
      //   }
        
      // }
    } else {
      CARS[data.index].liked = data.status;
      // console.log('delete', data)
      console.log('dataId', data.id);
      for (let i = 0; i < this.liked.length; i++) {
        console.log('i', i);
        console.log('delete_id',this.liked[i].id);
        
        if(this.liked[i].id == data.id){
          this.liked.splice(i, 1);
          console.log('success');
          console.log(this.liked);
        }
        
      }
    }
    CARS[data.index].liked = data.status;

    this.getFavCars();


  }
  changeStatusFromLiked(data){

    CARS[data.id -1].liked = data.status;
    
    
  }
}
