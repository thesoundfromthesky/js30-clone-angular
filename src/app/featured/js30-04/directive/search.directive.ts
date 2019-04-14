import {
  Directive,
  HostListener,
  SkipSelf,
  OnInit
} from "@angular/core";

import { Subject, Observable } from "rxjs";
import { PeopleService } from "../service/people.service";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import { Person } from "../model/person";

@Directive({
  selector: "[search]"
})
export class SearchDirective implements OnInit {
  private inputSubject: Subject<string> = new Subject<string>();
  private inputEvent$: Observable<string> = this.inputSubject.asObservable();


  @HostListener("input", ["$event"])
  subscribe(e: Event): void {
    this.inputSubject.next(e.currentTarget["value"]);
  }

  constructor(@SkipSelf() private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.inputEvent$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((term:string):Observable<Person[]>=>{
          return this.peopleService.serach(term);
        })
      )
      .subscribe((people:Person[]) => {
        this.peopleService.people = people;
      });
  }
}
