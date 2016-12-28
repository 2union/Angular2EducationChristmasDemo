import { Component, OnInit } from '@angular/core';

import { Person }        from '../models/person';
import { Wish }          from '../models/wish';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'wish',
  templateUrl: './app/templates/wish.html'
})
export class WishComponent implements OnInit  {
  persons: Person[];
  wishes:  Wish[];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }

  getWish(id: number): Wish {
    let wish: Wish = {id: id, person: id, text: 'wish'};

    return wish;
  }
}
