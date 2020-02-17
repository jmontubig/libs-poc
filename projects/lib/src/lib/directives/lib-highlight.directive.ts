import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[libHighlight]'
})
export class LibHighlightDirective {

  @Input('libHighlight') highlightColor: string;
  
  constructor(private el: ElementRef) { 
    el.nativeElement.style.backgroundColor = this.highlightColor;
  }

}
