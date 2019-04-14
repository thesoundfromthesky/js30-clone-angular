import {
  Directive,
  HostListener,
  HostBinding,
  Input,
  OnInit
} from "@angular/core";

import { Subject, Observable } from "rxjs";
import { tap, auditTime } from "rxjs/operators";

import { PeopleService } from "../service/people.service";
import { Person } from "../model/person";

@Directive({
  selector: "[sort]"
})
export class SortButtonDirective implements OnInit {
  private s: Subject<string> = new Subject<string>();
  private o$: Observable<string> = this.s.asObservable();

  @Input("isAsc") isAsc: boolean = true;

  @HostBinding("disabled") isDisabled = false;

  @HostListener("click", ["$event"])
  sub(): void {
    this.s.next("sort button clicked");
  }

  constructor(private peopleService: PeopleService) {}
  ngOnInit(): void {
    this.o$
      .pipe(
        tap((message: string) => {
          console.log(message);
          // this.isDisabled = true;
          this.toggleDisabled();
          this.peopleService
            .sortByName(this.isAsc)
            .subscribe((people: Person[]) => {
              this.peopleService.people = people;
            });
        }),
        auditTime(2000)
      )
      .subscribe(() => {
        // this.isDisabled = false;
        this.toggleDisabled();
      });
  }
  toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }
}
