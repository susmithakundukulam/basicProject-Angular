import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {
  constructor(private elementRef: ElementRef, private renderer : Renderer2) { }

  ngOnInit(){
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.renderer.setStyle(this.elementRef.nativeElement,"background-color","blue");
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement,"background-color","blue");
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement,"background-color","green");
  }
  

}
