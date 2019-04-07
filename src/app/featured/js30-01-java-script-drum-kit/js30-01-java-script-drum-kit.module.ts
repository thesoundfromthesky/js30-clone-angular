import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  JS3001JavaScriptDrumKitRoutingModule,
  routedComponents
} from "./js30-01-java-script-drum-kit-routing.module";
import { MaterialModule } from "../../shared/material/material.module";

@NgModule({
  declarations: [...routedComponents],
  imports: [CommonModule, JS3001JavaScriptDrumKitRoutingModule, MaterialModule]
})
export class JS3001JavaScriptDrumKitModule {}
