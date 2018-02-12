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

  liked = [];
  constructor(
    private cs: CarsService
  ) { }

  ngOnInit(
  ) {
    this.liked = this.cs.getFavCars();
    // this.cs.getFavCars();
    // this.cs.getCars();

  }
  ngOnChanges(){
    // this.cs.getCars();
    // this.cs.getFavCars();
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
  favorite(){
   for (let i = 0, b = 0; i < this.test.length; i++) {
        // const like = this.cs.getCars()[i];
        if(this.test[i].liked == true){
          this.liked[b] = this.test[i];
          b++
        }
    }

  // fav(cars){
  //   for (let i = 0, b = 0; i < cars.length; i++) {
  //     const like = cars[i];
  //     if(like.liked == true){
  //       this.liked[b] = like;
  //       b++;
  //     }

  //   }
  //   console.log('!!!', this.liked);
  // }
  // console.log('!!', this.liked);
  }
}
