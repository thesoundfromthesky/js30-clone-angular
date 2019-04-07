import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OriginalComponent } from "./original/original.component";
import { NewComponent } from "./new/new.component";

// default url /js30-01
const routes: Routes = [
  { path: "", component: OriginalComponent },
  { path: "clone", component: NewComponent }
];

export const routedComponents = [OriginalComponent, NewComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JS3001JavaScriptDrumKitRoutingModule {}
