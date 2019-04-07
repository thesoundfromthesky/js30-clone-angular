import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.scss"]
})
export class NewComponent implements OnInit, AfterViewInit {
  keys: HTMLDivElement[];
  keyEventHandler: Function[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.initElements();
  }

  initElements(): void {
    this.keys = this.el.nativeElement.querySelectorAll("div.key");
    this.keys.forEach((key: HTMLDivElement, i) => {
      this.keyEventHandler.push(
        this.renderer.listen(key, "transitionend", this.removeTransition)
      );
    });
  }

  removeTransition = (e: TransitionEvent): void => {
    // if (e.propertyName !== "transform") return;
    if (e.target["classList"].contains("playing")) {
      this.renderer.removeClass(e.target, "playing");
    }
  };

  @HostListener("window:keydown", ["$event"])
  playSound(e: KeyboardEvent): void {
    const audio = this.el.nativeElement.querySelector(
      `audio[data-key="${e.keyCode}"]`
    );
    const key = this.el.nativeElement.querySelector(
      `div[data-key="${e.keyCode}"]`
    );
    if (!audio) return; 

    if (!e.target["classList"].contains("playing")) {
      this.renderer.addClass(key, "playing");
    }
    this.renderer.setProperty(audio, "currentTime", 0);
    audio.play();
  }
}
