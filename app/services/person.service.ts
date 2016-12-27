import { Injectable }    from '@angular/core';

import { Person } from '../models/person';

@Injectable()
export class PersonService {
  persons: Person[] = [
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

  lastId: number = 6;

  getPersons(): Person[]{
    return this.persons;
  }

  create(name: string = ''): void {
    this.lastId++;
    let person: Person = {
      "id": this.lastId,
      "name": name
    };
    this.persons.push(person);
  }

  delete(person: Person = null): void {
    let index = this.persons.indexOf(person);

    if ( index > -1 ) {
      this.persons.splice(index, 1);
    }
  }
}
