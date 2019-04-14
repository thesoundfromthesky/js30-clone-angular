import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  Js3004RoutingModule,
  routedComponents
} from "./js30-04-routing.module";
import { PeopleService } from "./service/people.service";
import { NewButtonDirective } from "./directive/new-button.directive";
import { SearchDirective } from './directive/search.directive';
import { SortButtonDirective } from './directive/sort-button.directive';

@NgModule({
  declarations: [...routedComponents, NewButtonDirective, SearchDirective, SortButtonDirective],
  imports: [CommonModule, Js3004RoutingModule],
  providers: [PeopleService]
})
export class Js3004Module {}
