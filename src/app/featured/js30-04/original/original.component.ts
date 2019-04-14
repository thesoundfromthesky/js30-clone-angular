import { Component, OnInit, Inject } from "@angular/core";
import { WINDOW } from "src/app/shared/core/service/window.service";

interface Inventor {
  first: string;
  last: string;
  year: number;
  passed: number;
}

@Component({
  selector: "app-original",
  templateUrl: "./original.component.html",
  styleUrls: ["./original.component.scss"]
})
export class OriginalComponent implements OnInit {
  private inventors: Inventor[] = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
  ];

  private people: string[] = [
    "Beck, Glenn",
    "Becker, Carl",
    "Beckett, Samuel",
    "Beddoes, Mick",
    "Beecher, Henry",
    "Beethoven, Ludwig",
    "Begin, Menachem",
    "Belloc, Hilaire",
    "Bellow, Saul",
    "Benchley, Robert",
    "Benenson, Peter",
    "Ben-Gurion, David",
    "Benjamin, Walter",
    "Benn, Tony",
    "Bennington, Chester",
    "Benson, Leana",
    "Bent, Silas",
    "Bentsen, Lloyd",
    "Berger, Ric",
    "Bergman, Ingmar",
    "Berio, Luciano",
    "Berle, Milton",
    "Berlin, Irving",
    "Berne, Eric",
    "Bernhard, Sandra",
    "Berra, Yogi",
    "Berry, Halle",
    "Berry, Wendell",
    "Bethea, Erin",
    "Bevan, Aneurin",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bierce, Ambrose",
    "Biko, Steve",
    "Billings, Josh",
    "Biondo, Frank",
    "Birrell, Augustine",
    "Black, Elk",
    "Blair, Robert",
    "Blair, Tony",
    "Blake, William"
  ];

  constructor(@Inject(WINDOW) private w: Window) {}

  ngOnInit() {
    this.filter();
    this.map();
    this.sort();
    this.reduce();
    this.sort2();
    this.sort3();
    this.reduce2();
  }

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  filter(): void {
    const filter: Inventor[] = this.inventors.filter(
      (inventor: Inventor): boolean => {
        if (1500 <= inventor.year && inventor.year < 1600) return true;
      }
    );
    this.w.console.log(
      "1. Filter the list of inventors for those who were born in the 1500's"
    );
    this.w.console.table(filter);
  }

  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
  map(): void {
    const fullNames: string[] = this.inventors.map(
      (inventor: Inventor): string => {
        return `${inventor.first} ${inventor.last}`;
      }
    );
    this.w.console.log(
      "2. Give us an array of the inventors' first and last names"
    );
    this.w.console.table(fullNames);
  }

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  sort(): void {
    const sort: Inventor[] = this.inventors.sort(
      (a: Inventor, b: Inventor): number => {
        return b.year < a.year ? 1 : -1;
      }
    );
    this.w.console.log(
      "3. Sort the inventors by birthdate, oldest to youngest"
    );
    this.w.console.table(sort);
  }

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?
  reduce(): void {
    const sum: number = this.inventors.reduce(
      (total: number, inventor: Inventor): number => {
        return total + (inventor.passed - inventor.year);
      },
      0
    );
    this.w.console.log("4. How many years did all the inventors live?");
    this.w.console.table(sum);
  }

  // 5. Sort the inventors by years lived
  sort2(): void {
    const sort: Inventor[] = this.inventors.sort(
      (a: Inventor, b: Inventor): number => {
        const aLived: number = a.passed - a.year;
        const bLived: number = a.passed - a.year;
        return aLived < bLived ? 1 : -1;
      }
    );
    this.w.console.log("5. Sort the inventors by years lived");
    this.w.console.table(sort);
  }

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  // const category = document.querySelector('.mw-category');
  // const links = Array.from(category.querySelectorAll('a'));
  // const de = links
  //             .map(link => link.textContent)
  //             .filter(streetName => streetName.includes('de'));

  // 7. sort Exercise
  // Sort the people alphabetically by last name
  sort3(): void {
    const sort: string[] = this.people.sort(
      (a: string, b: string): number => {
        const [aLast, aFirst]: string[] = a.split(", ");
        const [bLast, bFirst]: string[] = b.split(", ");
        return bLast < aLast ? 1 : -1;
      }
    );
    this.w.console.log(
      "7. sort Exercise Sort the people alphabetically by last name"
    );
    this.w.console.table(sort);
  }

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  reduce2(): void {
    const data: string[] = [
      "car",
      "car",
      "truck",
      "truck",
      "bike",
      "walk",
      "car",
      "van",
      "bike",
      "walk",
      "car",
      "van",
      "car",
      "truck"
    ];
    const transportation: object = data.reduce(
      (obj: object, item: string): object => {
        console.log(item);
        if (!obj[item]) {
          obj[item] = 0;
        }
        ++obj[item];
        return obj;
      },
      {}
    );
    this.w.console.log(
      "8. Reduce Exercis Sum up the instances of each of these"
    );
    this.w.console.table(transportation);
  }
}
