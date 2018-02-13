import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarsService } from '../-service/cars.service';
import { MODEL } from '../MODEL';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.sass'],
  providers: [ CarsService ]
})
export class DashComponent implements OnInit, OnChanges {
  complexForm : FormGroup;

  cars;
  liked = [];
  models = [];
  constructor(
    private cs: CarsService,
    fb: FormBuilder
  ) { 
    this.complexForm = fb.group({
      // 'car': [null, Validators.required],
      'selectOption': [null, Validators.required],
      'price': [null, Validators.required],
      'descr': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
    })
  }
  ngOnChanges(){
  }
  ngOnInit() {
    this.getCars();
    this.getFavCars();
    this.getModels(MODEL);
  }



  getCars(){
    this.cars = this.cs.getCars();
  }
  getFavCars(){
    this.liked = this.cs.getFavCars();
  }
  
  getModels(MODEL){
    for (let i = 0; i < MODEL.length; i++) {
      this.models[i] = MODEL[i].mark; 
    }
  }
  toChangeLike(data){
    this.cs.changeStatus(data);
    console.log('dashLiked', this.liked);
    this.liked = this.cs.liked;
    console.log('afterDashLiked', this.liked);
  }
  


}
