import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OriginalComponent } from "./original/original.component";
import { CloneComponent } from "./clone/clone.component";

// default url /js30-02
const routes: Routes = [
  { path: "", component: OriginalComponent, pathMatch: "full" },
  { path: "clone", component: CloneComponent }
];

export const routedComponents = [OriginalComponent, CloneComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Js3002CssJsClockRoutingModule {}
