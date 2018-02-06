import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.sass']
})
export class FavComponent implements OnInit {
  @Input() fav;
  @Input() id;
  @Output() changingStatus = new EventEmitter
  constructor() { }
  
  ngOnInit() {
  }

  changeStatus(){
    
    this.fav = !this.fav;
    this.changingStatus.emit(this.fav);

    
  }

}
