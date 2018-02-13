import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CarsService } from '../../-service/cars.service';
@Component({
  selector: 'app-favcar',
  templateUrl: './favcar.component.html',
  styleUrls: ['./favcar.component.sass'],
  providers: [CarsService]
})
export class FavcarComponent implements OnInit, OnChanges {
  @Input() cars;
  @Input() data;
  @Input() test;
  @Input() liked;

  // liked = [];
  constructor(
    private cs: CarsService
  ) { }

  ngOnInit(
  ) {
    console.log('!!', this.liked);
    // this.liked = this.cs.liked;
    // console.log('favLiked', this.liked);
    // this.cs.getFavCars();
    // this.cs.getCars();

  }
  ngOnChanges(){
    this.cs.getFavCars();
    // this.favorite();
    

  }
  check(data){
    console.log('check', data);
  }
  checkThumb(data){
    console.log('favthumb', data);
    this.liked.splice(data.index, 1);
    this.cs.changeStatusFromLiked(data);
  }

}
