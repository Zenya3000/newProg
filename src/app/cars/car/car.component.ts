import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.sass']
})
export class CarComponent implements OnInit {
  @Input() mark;
  @Input() descr;
  @Input() liked;
  @Input() price;
  @Input() id;
  @Input() index;
  @Output() changeStatus = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }


}
