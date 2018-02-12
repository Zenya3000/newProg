import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.sass']
})
export class ThumbComponent implements OnInit {
  @Input() liked; 
  @Input() id;

  @Output() newThumb = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  toDislike(){
    this.liked = !this.liked;
    let data = {
      id: this.id,
      status: this.liked,
    }
    this.newThumb.emit(data);

  }
}
