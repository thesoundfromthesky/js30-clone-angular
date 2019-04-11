import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  AfterViewInit,
  HostBinding,
  Inject
} from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-original",
  templateUrl: "./original.component.html",
  styleUrls: ["./original.component.scss"]
})
export class OriginalComponent implements OnInit, AfterViewInit {
  private inputs: HTMLDivElement[];
  constructor(
    private el: ElementRef,
    private r2: Renderer2,
    private s: DomSanitizer,
    @Inject(DOCUMENT) private d: Document
  ) {}

  ngOnInit() {}

  @HostBinding("style")
  style: SafeStyle;

  ngAfterViewInit(): void {
    this.inputs = this.el.nativeElement.querySelectorAll(".controls input");
    this.inputs.forEach(
      (input: HTMLDivElement): void => {
        this.r2.listen(input, "change", this.handleUpdates);
        this.r2.listen(input, "mousemove", this.handleUpdates);
      }
    );
  }

  readonly handleUpdates = (e: Event): void => {
    e.stopPropagation();
    const suffix: string = e.target["dataset"].sizing || "";
    // this.style = this.s.bypassSecurityTrustStyle(
    //   `--${e.target["name"]}: ${e.target["value"]}${suffix}`
    // );
    // this.r2.setProperty(
    //   this.el.nativeElement,
    //   "style",
    //   `--${e.target["name"]}: ${e.target["value"]}${suffix}`
    // );
    // this.d.documentElement.style.setProperty(`--${e.target["name"]}`, e.target["value"] + suffix);
    this.el.nativeElement.style.setProperty(
      `--${e.target["name"]}`,
      `${e.target["value"]}${suffix}`
    );
  };
}
