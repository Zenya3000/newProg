import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarsService } from '../../-service/cars.service';

@Component({
  selector: 'app-allcar',
  templateUrl: './allcar.component.html',
  styleUrls: ['./allcar.component.sass'],
  providers: [CarsService]

})
export class AllcarComponent implements OnInit {
  cars;
  @Input() mark;
  @Input() descr;
  @Input() price;
  @Input() id;
  @Input() liked;
  @Input() index;
  @Output() changeLike = new EventEmitter;
  
  constructor(
    private cs: CarsService
  ) { }

  ngOnInit() {
  }
  
  changeStat(event){

    let data = {
      index: this.index,
      id: this.id,
      price: this.price,
      descr: this.descr,
      mark: this.mark,
      status: event
    }
    this.changeLike.emit(data);
  }

}
