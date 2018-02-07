import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.sass']
})
export class LikeComponent implements OnInit {
  @Input() like;
  @Output() changeLike = new EventEmitter
  constructor() { }

  ngOnInit() {
  }
  check(){
    this.like = !this.like;
    this.changeLike.emit(this.like);

  }
}
