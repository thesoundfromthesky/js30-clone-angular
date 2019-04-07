import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "js30-01",
    loadChildren:
      "../js30-01-java-script-drum-kit/js30-01-java-script-drum-kit.module#JS3001JavaScriptDrumKitModule"
  }
];

export const routedComponents = [HomeComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
