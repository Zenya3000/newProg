import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-onefavcan',
  templateUrl: './onefavcan.component.html',
  styleUrls: ['./onefavcan.component.sass']
})
export class OnefavcanComponent implements OnInit {
  @Input() liked;
  @Input() onecar;
  @Output() checkTrue = new EventEmitter;
  @Output() thumb = new EventEmitter;

  // @Input() descr;
  // @Input() price;
  // @Input() id;
  // @Input() liked;
  @Input() index;
  constructor() { }

  ngOnInit() {
    
  }
  ngOnChanges(){
    this.checkCar();
  }
  
  checkCar(){
    let data = {
      liked: this.onecar.liked,
      id: this.onecar.id,
      index: this.index
    }
    this.checkTrue.emit(data);
    console.log('est', data);
  }
  newThumb(data){
    let nData = {
      status: data.status,
      id: data.id,
      index: this.index
    }
    this.thumb.emit(nData);
  }
}
