import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.sass']
})
export class LikedComponent implements OnInit {
  @Input() mark;
  @Input() descr;
  @Input() price;
  @Input() liked;
  @Input() index;
  @Input() id;
  constructor() { }

  ngOnInit() {
  }

}
