import { Component, OnInit } from '@angular/core';

import { Person }        from '../models/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'wish',
  templateUrl: './app/templates/wish.html'
})
export class WishComponent implements OnInit  {
  persons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }
}
