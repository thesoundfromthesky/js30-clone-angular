import {
  Component,
  OnInit,
  AfterViewInit,
  HostListener,
  ElementRef,
  Renderer2
} from "@angular/core";

@Component({
  selector: "app-original",
  templateUrl: "./original.component.html",
  styleUrls: ["./original.component.scss"]
})
export class OriginalComponent implements OnInit, AfterViewInit {
  keys: HTMLDivElement[];
  keyEventHandler: Function[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initElements();
  }

  @HostListener("window:keydown", ["$event"])
  playSound(e: KeyboardEvent): void {
    const audio = this.el.nativeElement.querySelector(
      `audio[data-key="${e.keyCode}"]`
    );
    const key = this.el.nativeElement.querySelector(
      `div[data-key="${e.keyCode}"]`
    );
    if (!audio) return;

    this.renderer.addClass(key, "playing");
    this.renderer.setProperty(audio, "currentTime", 0);
    audio.play();
  }

  initElements(): void {
    this.keys = this.el.nativeElement.querySelectorAll(".key");
    this.keys.forEach((key: HTMLDivElement) =>
      this.keyEventHandler.push(
        this.renderer.listen(key, "transitionend", this.removeTransition)
      )
    );
  }

  removeTransition = (e: TransitionEvent): void => {
    if (e.propertyName !== "transform") return;
    this.renderer.removeClass(e.target, "playing");
  };
}
