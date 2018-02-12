import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarsService } from '../../-service/cars.service';
import { MODEL } from '../../MODEL';
@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.sass'],
  providers: [CarsService]
})
export class AddcarComponent implements OnInit {
  
  models = [];
  cars;
  complexForm : FormGroup;
  constructor(
    private fb: FormBuilder,
    private cs: CarsService
  ) { 
    this.complexForm = fb.group({
      // 'car': [null, Validators.required],
      'selectOption': [null, Validators.required],
      'price': [null, Validators.required],
      'descr': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
    })
  }
  submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }
  ngOnInit() {
    this.getModels(MODEL);
    this.cars = this.cs.getCars;
  }

  getModels(MODEL){
    for (let i = 0; i < MODEL.length; i++) {
      this.models[i] = MODEL[i].mark;
    }
  }
  addCar(price, textarea, formSelect){
    console.log('bla', price.value, textarea.value, formSelect.activeOption.text);
    let newID =  this.cs.getCars().length +1;
    let data = {
      id: newID,
      mark: formSelect.activeOption.text,
      price: '$'+price.value,
      descr: textarea.value,
      liked: false
    }
    // console.log('data', data);

    this.cs.appData(data);
    
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
