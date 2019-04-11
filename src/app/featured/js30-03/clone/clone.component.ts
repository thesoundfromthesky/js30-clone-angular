import {
  Component,
  OnInit,
  HostBinding,
  AfterViewInit,
  ElementRef,
  Renderer2
} from "@angular/core";
import { SafeStyle, DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-clone",
  templateUrl: "./clone.component.html",
  styleUrls: ["./clone.component.scss"]
})
export class CloneComponent implements OnInit, AfterViewInit {
  inputs: HTMLDivElement[];
  cssVars: Map<string, string> = new Map<string, string>();

  constructor(
    private el: ElementRef,
    private r2: Renderer2,
    private s: DomSanitizer
  ) {}

  ngOnInit(): void {}

  @HostBinding("style")
  style: SafeStyle = this.s.bypassSecurityTrustStyle("");

  ngAfterViewInit(): void {
    this.getElements();
    this.getCssVars();
    this.setCssVars();
    this.registerEventHandler();
  }

  getElements(): void {
    this.inputs = this.el.nativeElement.querySelectorAll("input");
  }

  getCssVars(): void {
    this.inputs.forEach(
      (input: HTMLDivElement): void => {
        this.updateCssVars(input["name"], input["value"]);
      }
    );
  }

  updateCssVars(key: string, value: string): void {
    this.cssVars.set(key, value);
  }

  registerEventHandler(): void {
    this.inputs.forEach(
      (input: HTMLDivElement): void => {
        this.r2.listen(input, "change", this.handleUpdate);
        this.r2.listen(input, "mousemove", this.handleUpdate);
      }
    );
  }

  readonly handleUpdate = (e: Event): void => {
    e.stopPropagation();
    this.updateCssVars(e.target["name"], e.target["value"]);
    this.setCssVars();
  };

  setCssVars(): void {
    let cssText: string = "";
    this.cssVars.forEach(
      (value: string, key: string): void => {
        cssText += `--${key}: ${value};`
      }
    );
    this.style = this.s.bypassSecurityTrustStyle(cssText);
  }
}
