import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Person } from '../models/person';

@Injectable()
export class PersonService {
  private headers           = new Headers({'Content-Type': 'application/json'});
  private personsUrl        = 'api/persons';
  private persons: Person[] = [];

  constructor(private http: Http) {
    this.loadPersons();
  }

  loadPersons(): void {
    this.http.get(this.personsUrl)
      .toPromise()
      .then(response => {
        let persons = response.json().data as Person[];
        persons.map(person => this.persons.push(person));
      })
      .catch(this.handleError);
  }

  getPersons(): Person[]{
    return this.persons;
  }

  delete(person: Person): void {
    const url = `${this.personsUrl}/${person.id}`;
    this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => {
        let index = this.persons.indexOf(person);

        if ( index > -1 ) {
          this.persons.splice(index, 1);
        }
      })
      .catch(this.handleError);
  }

  create(name: string): void {
    this.http
      .post(this.personsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => {
        let person = res.json().data as Person;
        this.persons.push(person);
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
