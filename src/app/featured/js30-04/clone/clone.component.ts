import {
  Component,
  OnInit,
  Inject,
  Self,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
  SkipSelf
} from "@angular/core";

import { throttleTime, tap, delay } from "rxjs/operators";

import { WINDOW } from "src/app/shared/core/service/window.service";

import { Person } from "../model/person";
import { fromEvent } from "rxjs";
import { PeopleService } from "../service/people.service";

@Component({
  selector: "app-clone",
  templateUrl: "./clone.component.html",
  styleUrls: ["./clone.component.scss"]
})
export class CloneComponent implements OnInit {
  constructor(
    @Inject(WINDOW) private w: Window,
    @SkipSelf() public peopleService: PeopleService
  ) {}

  ngOnInit() {
  } 

  trackByFn(index: number): number {
    return index;
  }
}
