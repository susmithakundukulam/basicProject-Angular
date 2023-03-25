import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {

  child1name: String = '';

  getChildDetails(child1 : String){
    this.child1name = child1;
    console.log("parent child 1 : ", this.child1name)
  }
}
