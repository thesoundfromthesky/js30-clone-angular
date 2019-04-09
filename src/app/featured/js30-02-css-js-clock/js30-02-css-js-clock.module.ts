import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  Js3002CssJsClockRoutingModule,
  routedComponents
} from "./js30-02-css-js-clock-routing.module";
import { PositionDirective } from './directive/position.directive';

@NgModule({
  declarations: [routedComponents, PositionDirective],
  imports: [CommonModule, Js3002CssJsClockRoutingModule]
})
export class Js3002CssJsClockModule {}
