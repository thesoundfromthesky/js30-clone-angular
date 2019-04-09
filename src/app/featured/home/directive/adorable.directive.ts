import { Directive, Renderer2, ElementRef, OnInit } from "@angular/core";

import {
  generateAdorableUrl,
  generateLoremFlickrUrl
} from "../class/adorable-avatar";

@Directive({
  selector: "[adorable]"
})
export class AdorableDirective implements OnInit{
  
  constructor(private renderer: Renderer2, private element: ElementRef) {
  }

  ngOnInit(): void {
    const adorableUrl: string = generateAdorableUrl();
    this.renderer.setAttribute(this.element.nativeElement, "src", adorableUrl);
  }

}

@Directive({
  selector: "[loremFlickr]"
})
export class LoremFlickrDirective implements OnInit {
  constructor(private renderer: Renderer2, private element: ElementRef) {}

  ngOnInit(): void {
    const loremFlickrUrl: string = generateLoremFlickrUrl();
    this.renderer.setAttribute(
      this.element.nativeElement,
      "src",
      loremFlickrUrl
    );
  }

}

export const directives = [AdorableDirective, LoremFlickrDirective];
