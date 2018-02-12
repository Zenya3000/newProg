import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.sass']
})
export class SelectedComponent implements OnInit {
  @Input() selected;
  @Output() changeStat = new EventEmitter  

  constructor() { }

  ngOnInit() {
  }
  toChange(){
    this.selected = !this.selected;
    this.changeStat.emit(this.selected);
  }
}
