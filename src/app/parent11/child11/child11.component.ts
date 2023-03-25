import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child11',
  templateUrl: './child11.component.html',
  styleUrls: ['./child11.component.css']
})
export class Child11Component {

  @Output() genderEvent = new EventEmitter<String>;

  child11Value = '';
  gender:String = '';

  @Output() child11 = new EventEmitter<String>;

  @ViewChild('serverContentInput') serverContentInputt: ElementRef;

  // typeInputValue(){
  //   this.child11.emit(this.child11Value);
  // }

  typeInputValue(){
    this.child11.emit(this.serverContentInputt.nativeElement.value);
  }

  passData(){
    this.genderEvent.emit(this.gender);
    console.log("gender ::::",this.gender);
  }
}
