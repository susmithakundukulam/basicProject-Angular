import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  child1name = '';

  @Output() childName = new  EventEmitter<String>;


  setChildDetils(){
    this.childName.emit(this.child1name);
  }



}
