import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ImgFallback]'
})
export class ImgFallbackDirective {

  @Input()
  appImgFallback: string = '';

  constructor(private eRef: ElementRef) { }

  @HostListener('error')
  loadFallbackOnError() {
    const element: HTMLImageElement = <HTMLImageElement>this.eRef.nativeElement;
    element.src = this.appImgFallback || 'https://i.ibb.co/b20rR2S/images.png';
  }
}
