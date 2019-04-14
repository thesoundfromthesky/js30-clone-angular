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
  },
  {
    path: "js30-03",
    loadChildren:
      "../js30-03/js30-03.module#Js3003Module"
  },
  {
    path: "js30-04",
    loadChildren:
      "../js30-04/js30-04.module#Js3004Module"
  }
];

export const routedComponents = [HomeComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
