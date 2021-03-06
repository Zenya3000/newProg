import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarsService } from '../-service/cars.service';
import { MODEL } from '../MODEL';
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
  models = [];
  constructor(
    private cc: CarsService,
    fb: FormBuilder
  ) { 
    this.complexForm = fb.group({
      // 'car': [null, Validators.required],
      'selectOption': [null, Validators.required],
      'price': [null, Validators.required],
      'descr': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
    })
   }
   

 
  ngOnInit() {
    this.getCars();
    this.getModels(MODEL);
  }
  ngOnChanges(){
    
  }
  getModels(MODEL){
    for (let i = 0; i < MODEL.length; i++) {
      this.models[i] = MODEL[i].mark; 
      
    }
    
  }
  getCars(){
    this.cars = this.cc.getCars();
    this.getLiked();
  }

  getLiked(){

    for (let i = 0, b = 0; i < this.cc.getCars().length; i++) {
      const like = this.cc.getCars()[i];
      if(like.liked == true){
        this.liked[b] = like;
        b++;
      }

    }
  }

  addCar(marka, price, textarea, formSelect){
    console.log('count', this.cars.length +1);
    let newID =  this.cars.length +1;
    let data = {
      id: newID,
      mark: formSelect.activeOption.text,
      price: '$'+price.value,
      descr: textarea.value,
      liked: false
    }

    this.cc.appData(data);
    
  }
  change(data){
    let i = this.findInArr('id', this.cars, data.id);
    this.cars[i].liked = data.liked;

  }
  
  findInArr(key, arr, val){
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if(val === el[key]){
        return i;
      }
      return -1;
    }
  }

public items = this.models;

private value:any = {};
private _disabledV:string = '0';
private disabled:boolean = false;

private get disabledV():string {
  return this._disabledV;
}

private set disabledV(value:string) {
  this._disabledV = value;
  this.disabled = this._disabledV === '1';
}

public selected(value:any):void {
  console.log('Selected value is: ', value);
}

public removed(value:any):void {
  console.log('Removed value is: ', value);
}

public typed(value:any):void {
  console.log('New search input: ', value);
}

public refreshValue(value:any):void {
  this.value = value;
}
}
