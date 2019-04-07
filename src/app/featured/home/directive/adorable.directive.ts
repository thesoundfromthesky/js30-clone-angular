import { Directive, Renderer2, ElementRef } from "@angular/core";

import {
  generateAdorableUrl,
  generateLoremFlickrUrl
} from "../class/adorable-avatar";

@Directive({
  selector: "[adorable]"
})
export class AdorableDirective {
  constructor(private renderer: Renderer2, private element: ElementRef) {
    const adorableUrl: string = generateAdorableUrl();
    this.renderer.setAttribute(this.element.nativeElement, "src", adorableUrl);
  }
}

@Directive({
  selector: "[loremFlickr]"
})
export class LoremFlickrDirective {
  constructor(private renderer: Renderer2, private element: ElementRef) {
    const loremFlickrUrl: string = generateLoremFlickrUrl();
    this.renderer.setAttribute(this.element.nativeElement, "src", loremFlickrUrl);
  }
}

export const directives = [AdorableDirective, LoremFlickrDirective];
