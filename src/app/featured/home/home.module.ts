import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule, routedComponents } from "./home-routing.module";

import { MaterialModule } from 'src/app/shared/material/material.module';

import { directives } from "./directive/adorable.directive";

@NgModule({
  declarations: [...routedComponents, ...directives],
  imports: [CommonModule, HomeRoutingModule, MaterialModule]
})
export class HomeModule {}
