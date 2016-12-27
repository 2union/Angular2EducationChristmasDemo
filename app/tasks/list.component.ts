import { Component, OnInit } from '@angular/core';

import { Person } from '../model/person';

@Component({
  selector: 'list',
  templateUrl: './app/templates/list.html',
})
export class ListComponent implements OnInit  {
  persons: Person[];

  lastId: number = 6;

  add(name: string = ''): boolean {
    this.lastId++;
    let person: Person = {
      "id": this.lastId,
      "name": name
    };
    this.persons.push(person);
    return false;
  }

  delete(person: Person = null): void {
    let index = this.persons.indexOf(person);

    if ( index > -1 ) {
      this.persons.splice(index, 1);
    }
  }

  ngOnInit(): void {
    this.persons = [
      {
        "id"  : 1,
        "name": 'Ms. Jackson'
      },
      {
        "id"  : 2,
        "name": 'Mr. Philips'
      },
      {
        "id"  : 3,
        "name": 'Cusine Susy'
      },
      {
        "id"  : 4,
        "name": 'Antonio'
      },
      {
        "id"  : 5,
        "name": 'Carl'
      },
      {
        "id"  : 6,
        "name": 'Lisa'
      }
    ];
  }
}
