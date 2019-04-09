import {
  Component,
  OnInit,
  Inject,
  AfterViewInit,
  ElementRef,
  Renderer2
} from "@angular/core";

import { WINDOW } from "src/app/shared/core/service/window.service";

@Component({
  selector: "app-original",
  templateUrl: "./original.component.html",
  styleUrls: ["./original.component.scss"]
})
export class OriginalComponent implements OnInit, AfterViewInit {

  private intervalId: number;
  private secondHand: HTMLDivElement;
  private minsHand: HTMLDivElement;
  private hourHand: HTMLDivElement;

  constructor(
    @Inject(WINDOW) private window: Window,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.queryElements();
    this.setDate();
    this.intervalId = this.window.setInterval(this.setDate, 1000);
  }

  queryElements(): void {
    this.secondHand = this.el.nativeElement.querySelector(".second-hand");
    this.minsHand = this.el.nativeElement.querySelector(".min-hand");
    this.hourHand = this.el.nativeElement.querySelector(".hour-hand");
  }

  setDate: Function = (): void => {
    const now = new Date();

    const seconds: number = now.getSeconds();
    const secondsDegrees: number = (seconds / 60) * 360 + 90;
    this.renderer.setStyle(
      this.secondHand,
      "transform",
      `rotate(${secondsDegrees}deg)`
    );

    const mins: number = now.getMinutes();
    const minsDegrees: number = (mins / 60) * 360 + 90;
    this.renderer.setStyle(
      this.minsHand,
      "transform",
      `rotate(${minsDegrees}deg)`
    );

    const hour: number = now.getHours();
    const hourDegrees: number = (hour / 12) * 360 + 90;
    this.renderer.setStyle(
      this.hourHand,
      "transform",
      `rotate(${hourDegrees}deg)`
    );
  };

}
