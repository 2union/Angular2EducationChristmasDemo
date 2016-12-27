import { Component, OnInit } from '@angular/core';

import { Person }        from '../models/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'list',
  templateUrl: './app/templates/list.html',
  providers: [PersonService]
})
export class ListComponent implements OnInit  {
  persons: Person[];

  constructor(private personService: PersonService) { }

  add(name: string = ''): boolean {
    this.personService.create(name);
    return false;
  }

  delete(person: Person = null): void {
    this.personService.delete(person);
  }

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }
}
