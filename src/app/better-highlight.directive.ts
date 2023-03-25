import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @Input() genderVal : String;
  color : String;

  
  @HostBinding('style.backgroundColor') backgroundColor: String;

  constructor() { }

  @HostListener('mouseenter') mouseover(data: Event){
    console.log("mouseneter :::" ,this.genderVal);
    if(this.genderVal === "male"){ 
      this.backgroundColor = 'blue';
    }else{
      this.backgroundColor = 'red';
    }
     
    // this.backgroundColor =this.color;
  }

  @HostListener('mouseleave') mouseleave(data: Event){
    if(this.genderVal === "male"){ 
      this.backgroundColor = 'white';
    }else{
      this.backgroundColor = 'white';
    }
  }

}
