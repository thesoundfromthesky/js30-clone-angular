import {
  Component,
  OnInit,
  Inject,
  Renderer2,
  AfterViewInit,
  ViewChildren,
  ElementRef,
  QueryList,
  HostListener
} from "@angular/core";

import { MatCard, MatAnchor, ThemePalette } from "@angular/material";

import { WINDOW } from "src/app/shared/core/service/window.service";

import { courseData } from "./class/courseData";
import { Course } from "./class/course";
import { colorData } from './class/colorData';
import { getRandomInt } from "src/app/class/util";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  readonly courseData: Course[] = courseData;
  readonly colorData: ThemePalette[] = colorData;

  constructor(
    @Inject(WINDOW) private window: Window,
    private renderer: Renderer2
  ) {}

  @ViewChildren(MatCard, { read: ElementRef }) matCard: QueryList<ElementRef>;
  @ViewChildren(MatAnchor) matAnchors: QueryList<MatAnchor>;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.randomColor();
    this.checkPosition();
  }

  trackByFn(index: number): number {
    return index;
  }

  randomColor(): void {
    this.matAnchors.forEach((matAnchor: MatAnchor) => {
      const randomInt: number = getRandomInt(2);
      matAnchor.color = colorData[randomInt];
    });
  }

  @HostListener("window:scroll", ["$event"])
  @HostListener("window:resize", ["$event"])
  onWindowScroll(e: Event): void {
    this.checkPosition();
  }

  checkPosition(): void {
    this.matCard.forEach((item: ElementRef, index: number) => {
      const positionFromTop: number =
        item.nativeElement.getBoundingClientRect().top +
        item.nativeElement.getBoundingClientRect().height;
      if (positionFromTop <  this.window.innerHeight) {
        this.renderer.removeClass(item.nativeElement, "hidden");
        this.renderer.addClass(item.nativeElement, "animated");
        this.renderer.addClass(item.nativeElement, "fadeIn");
      }
    });
  }
}
