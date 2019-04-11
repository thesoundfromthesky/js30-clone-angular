import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OriginalComponent } from "./original/original.component";
import { CloneComponent } from "./clone/clone.component";

//js30-03
const routes: Routes = [
  { path: "", component: OriginalComponent },
  { path: "clone", component: CloneComponent }
];

export const routedComponents = [OriginalComponent, CloneComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Js3003RoutingModule {}
