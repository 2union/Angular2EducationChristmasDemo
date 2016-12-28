import { Component, OnInit } from '@angular/core';

import { Person }        from '../models/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'count',
  template: '{{count}}'
})
export class CountComponent implements OnInit  {
  count: number = 0;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.countModify();
  }

  countModify(): void {
    if(this.count != this.personService.getPersons().length){
      this.count = this.personService.getPersons().length;
    }

    setTimeout(()=>this.countModify(),1000);
  }
}
