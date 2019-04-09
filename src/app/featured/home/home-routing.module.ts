import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  {
    path: "js30-01",
    loadChildren:
      "../js30-01-java-script-drum-kit/js30-01-java-script-drum-kit.module#JS3001JavaScriptDrumKitModule"
  },
  {
    path: "js30-02",
    loadChildren:
      "../js30-02-css-js-clock/js30-02-css-js-clock.module#Js3002CssJsClockModule"
  }
];

export const routedComponents = [HomeComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
