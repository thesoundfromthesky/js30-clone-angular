import { Directive, ElementRef, AfterViewInit, Renderer2, HostListener } from "@angular/core";

import { degToRad } from "src/app/class/util";

@Directive({
  selector: "[appPosition]"
})
export class PositionDirective implements AfterViewInit {
  sections: HTMLDivElement[];

  constructor(private el: ElementRef, private r: Renderer2) {}

  ngAfterViewInit(): void {
    this.initElements();
    this.positionElements();
  }

  initElements(): void {
    this.sections = this.el.nativeElement.querySelectorAll("div.section");
  }

  @HostListener("window:resize", ["$event"])
  positionElements(): void {
    this.sections.forEach(
      (section: HTMLDivElement): void => {
        const radius: number = this.el.nativeElement.clientWidth * 0.8 * 0.5;
        const sectionRad: number = -degToRad(
          -90 + 30 * Number.parseInt(section.dataset.value)
        );
        const offsetLeft: number = section.clientWidth * 0.5;
        const offsetBottom: number = section.clientHeight * 0.5;
        const left: number = Math.cos(sectionRad) * radius;
        const bottom: number = Math.sin(sectionRad) * radius;
        this.r.setStyle(
          section,
          "left",
          `calc(50% - ${offsetLeft}px + ${left}px)`
        );
        this.r.setStyle(
          section,
          "bottom",
          `calc(50% - ${offsetBottom}px + ${bottom}px)`
        );
      }
    );
  }
}
