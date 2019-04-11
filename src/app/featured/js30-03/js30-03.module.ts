import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Js3003RoutingModule, routedComponents } from './js30-03-routing.module';

@NgModule({
  declarations: [...routedComponents],
  imports: [
    CommonModule,
    Js3003RoutingModule
  ]
})
export class Js3003Module { }
