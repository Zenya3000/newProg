import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarsService } from '../-service/cars.service';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass'],
  providers: [ CarsService ]
})
export class CarsComponent implements OnInit {
  @Input() changingStatus
  cars;
  constructor(
    private cc: CarsService
  ) { }

  ngOnInit() {
    this.getCars();
  }
  
  getCars(){
    this.cars = this.cc.getCars();
  }
  change(data){
    // this.cc.changeStatus(data);

    // console.log('data', data);
    // console.log('data0st', data[0].status);
    // this.cars[id.data[0]].liked = data[0].status;
    // console.log("est! from cars", this.cars[0]);

    let i = this.findInArr('id', this.cars, data.id);
    this.cars[i].liked = data.liked;
    console.log(this.cars[0]);
  }

  findInArr(key, arr, val){
    // console.log('!!!'+ arr[0][key])
    // console.log('!!!!!'+ val)
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if(val === el[key]){
        return i;
      }
      return -1;
    }
  }
}
