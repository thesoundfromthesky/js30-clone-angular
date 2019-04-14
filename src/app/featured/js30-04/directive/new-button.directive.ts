import {
  Directive,
  HostListener,
  OnInit,
  HostBinding,
  SkipSelf
} from "@angular/core";
import { tap, auditTime } from "rxjs/operators";
import { Subject, Observable } from "rxjs";
import { PeopleService } from "../service/people.service";

@Directive({
  selector: "[newButton]"
})
export class NewButtonDirective implements OnInit {
  private clickSubject: Subject<string> = new Subject<string>();
  private clickEvent$: Observable<string> = this.clickSubject.asObservable();

  @HostBinding("disabled") isDisabled = false;

  @HostListener("click", ["$event"])
  subscribe(): void {
    this.clickSubject.next("New button Click");
  }

  constructor(@SkipSelf() private peopleService: PeopleService) {}
  ngOnInit(): void {
    this.clickEvent$
      .pipe(
        tap((message: string) => {
          console.log(message);
          // this.isDisabled = true;
          this.toggleDisabled();
          this.peopleService.fetch();
        }),
        auditTime(2000)
      )
      .subscribe(_ => {
        // this.isDisabled = false;
        this.toggleDisabled();
      });
  }

  toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }
}
