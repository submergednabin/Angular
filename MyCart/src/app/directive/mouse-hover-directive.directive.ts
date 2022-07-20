import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseHoverDirective]',
})
export class MouseHoverDirectiveDirective {
  @Input() appMouseHoverDirective = '';
  
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('green','white');
    
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('','');
  }
  private highlight(color: string, textColor: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color=textColor;
  }
}
