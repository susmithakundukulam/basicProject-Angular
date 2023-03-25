import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSuperHighlight]'
})
export class SuperHighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: String;
  @Input() color: String;

  constructor() { }

  @HostListener('mouseenter') mouseovers(data : Event){
    this.backgroundColor = this.color;
  }

  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = 'transparent';
  }

}
