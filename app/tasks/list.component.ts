import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './app/templates/list.html',
})
export class ListComponent  {
  persons: Object[] = [
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

  add(name: string = '') {
    this.lastId++;
    let person: Object = {
      "id": this.lastId,
      "name": name
    };
    this.persons.push(person);
    return false;
  }

  delete(person: Object = null) {
    let index = this.persons.indexOf(person);

    if ( index > -1 ) {
      this.persons.splice(index, 1);
    }
  }
}
