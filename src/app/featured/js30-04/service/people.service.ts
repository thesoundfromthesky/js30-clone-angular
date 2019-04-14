import { Injectable } from "@angular/core";

import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

import faker from "faker/locale/en_US";

import { convertDate } from "src/app/class/util";
import { Person } from "../model/person";

@Injectable()
export class PeopleService {
  private bs: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>(
    this.generatePeople()
  );
  people$: Observable<Person[]> = this.bs.asObservable();
  private _people: Person[];

  get people(): Person[] {
    return this._people;
  }
  set people(people: Person[]) {
    this._people = people;
  }

  constructor() {
    this.get();
  }

  generatePeople(int: number = 10): Person[] {
    const people: Person[] = Array(int)
      .fill(0)
      .map(
        (): Person => {
          return {
            name: faker.name.findName(),
            city: faker.address.city(),
            birthDate: convertDate(
              faker.date.between("1950-01-01", "2019/01/01")
            ),
            bio: faker.hacker.phrase()
          };
        }
      );
    return people;
  }

  fetch(int: number = 10): void {
    this.bs.next(this.generatePeople(int));
  }

  get(): void {
    this.people$.subscribe(
      (people: Person[]): void => {
        this.people = people;
      }
    );
  }

  serach(term: string): Observable<Person[]> {
    term = term.trim().toLowerCase();
    return this.people$.pipe(
      map(
        (people: Person[]): Person[] => {
          return people.filter(
            (person: Person): boolean => {
              return person.name.toLowerCase().includes(term);
            }
          );
        }
      )
    );
  }

  sortByName(isAsc: boolean = true): Observable<Person[]> {
    return this.people$.pipe(
      map(
        (people: Person[]): Person[] => {
          return people.sort(
            (a: Person, b: Person): number => {
              const [aFirst, aLast]: string[] = a.name.split(" ");
              const [bFirst, bLast]: string[] = b.name.split(" ");
              if (isAsc) return bLast < aLast ? 1 : -1;
              else return aLast < bLast ? 1 : -1;
            }
          );
        }
      )
    );
  }
}
