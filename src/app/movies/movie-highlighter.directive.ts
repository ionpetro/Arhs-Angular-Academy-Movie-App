import { ElementRef, Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMovieHighlighter]'
})
export class MovieHighlighterDirective {

  constructor(private elementReference: ElementRef) { }

  @HostListener('mouseenter')
  highlight() {
    this.elementReference.nativeElement.style.color='blue';
  }

  @HostListener('mouseleave')
  removeHighlight() {
    this.elementReference.nativeElement.style.color= 'black';
  }
}
