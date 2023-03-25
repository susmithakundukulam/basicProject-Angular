import { Component } from '@angular/core';

@Component({
  selector: 'app-parent11',
  templateUrl: './parent11.component.html',
  styleUrls: ['./parent11.component.css']
})
export class Parent11Component {
  child11val:String = '';

  getValue(child11value : String){
    this.child11val = child11value;
    console.log("iiiiiiiiiiiiii", this.child11val);
  }

}
