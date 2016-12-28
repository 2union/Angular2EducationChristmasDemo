import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs';

import { Person }        from '../models/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'list',
  templateUrl: './app/templates/list.html'
})
export class ListComponent implements OnInit  {
  persons:      Person[];
  subscription: any;
  newPerson:    string;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.persons = this.personService.getPersons();
  }

  add() {
    let name = this.newPerson.trim();
    if (!name) { return false; }
    this.personService.create(name);
  }

  delete(person: Person = null): void {
    this.personService.delete(person);
  }
}
