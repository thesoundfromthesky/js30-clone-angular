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
  selector: "app-clone",
  templateUrl: "./clone.component.html",
  styleUrls: ["./clone.component.scss"]
})
export class CloneComponent implements OnInit, AfterViewInit {
  private intervalId: number;
  private secondHand: HTMLDivElement;
  private minsHand: HTMLDivElement;
  private hourHand: HTMLDivElement;
  private audio: HTMLAudioElement;

  private playAudio: boolean = true;

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
    this.audio = this.el.nativeElement.querySelector("audio");
  }

  setDate: Function = (): void => {
    const now = new Date();

    const seconds: number = now.getSeconds();
    const secondsDegrees: number = (seconds / 60) * 360 - 90;
    this.removeTransitionTime(secondsDegrees, this.secondHand);
    this.renderer.setStyle(
      this.secondHand,
      "transform",
      `rotate(${secondsDegrees}deg)`
    );

    const mins: number = now.getMinutes();
    const minsDegrees: number = (mins / 60) * 360 - 90;
    this.removeTransitionTime(minsDegrees, this.minsHand);
    this.renderer.setStyle(
      this.minsHand,
      "transform",
      `rotate(${minsDegrees}deg)`
    );

    const hour: number = now.getHours();
    const hourDegrees: number = (hour / 12) * 360 - 90;
    this.removeTransitionTime(hourDegrees, this.hourHand);
    this.renderer.setStyle(
      this.hourHand,
      "transform",
      `rotate(${hourDegrees}deg)`
    );

    if (this.playAudio) {
      this.audio.play().catch(err => {
        console.log("fail", err);
      });
    }
  };

  removeTransitionTime(degree: number, element: HTMLDivElement): void {
    if (degree === -90) {
      this.renderer.setStyle(element, "transition-duration", "0s");
    } else {
      this.renderer.setStyle(element, "transition-duration", "0.05s");
    }
  }

  playTick(): void {
    this.playAudio = true;
  }
  pauseTick(): void {
    this.audio.pause();
    this.renderer.setProperty(this.audio, "currentTime", 0);
    this.playAudio = false;
  }
}
