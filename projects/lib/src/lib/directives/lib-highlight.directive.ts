import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[libHighlight]'
})
export class LibHighlightDirective implements OnInit {
 

  @Input('libHighlight') highlightColor: string;
  
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    console.log(this.highlightColor);
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }
}
