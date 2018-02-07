import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarsService } from '../-service/cars.service';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass'],
  providers: [ CarsService ]
})
export class CarsComponent implements OnInit {

  complexForm : FormGroup;

  @Input() changingStatus
  cars;
  liked = [];
  constructor(
    private cc: CarsService,
    fb: FormBuilder
  ) { 
    this.complexForm = fb.group({
      'car': [null, Validators.required],
      'price': [null, Validators.required],
      'descr': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
    })
   }
   
  submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }
  ngOnInit() {
    this.getCars();
    
  }
  
  getCars(){
    this.cars = this.cc.getCars();
    this.getLiked();
  }
  getLiked(){
    console.log('cars', this.cars);
    console.log('liked', this.liked);
    for (let i = 0, b = 0; i < this.cc.getCars().length; i++) {
      const like = this.cc.getCars()[i];
      console.log('i', like);
      if(like.liked == true){
        this.liked[b] = like;
        b++;
      }

    }
    console.log("liked", this.liked);
  }
  addCar(marka, price, textarea){
    let newID =  this.cars.length +1;
    console.log('newID', newID);
    let data = {
      id: newID,
      mark: marka.value,
      price: '$'+price.value,
      descr: textarea.value,
      liked: false
    }
    this.cc.appData(data);
    
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
