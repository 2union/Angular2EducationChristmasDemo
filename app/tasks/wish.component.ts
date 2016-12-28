import { Component, OnInit } from '@angular/core';

import { Person }        from '../models/person';
import { Wish }          from '../models/wish';
import { PersonService } from '../services/person.service';
import { WishService }   from '../services/wish.service';

@Component({
  selector: 'wish',
  templateUrl: './app/templates/wish.html'
})
export class WishComponent implements OnInit  {
  persons: Person[];
  wishes:  Wish[];

  constructor(private personService: PersonService, private wishService: WishService) { }

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }

  getWish(id: number): Wish {
    let wish: Wish = {id: 0, person: id, text: 'wish'};

    //this.wishService.getWishFor(id).then(r => wish = r);

    return wish;
  }
}
