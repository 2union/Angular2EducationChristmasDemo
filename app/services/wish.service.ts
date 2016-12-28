import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Person } from '../models/person';
import { Wish }   from '../models/wish';

@Injectable()
export class WishService {
  private headers   = new Headers({'Content-Type': 'application/json'});
  private wishesUrl = 'api/wishes';

  constructor(private http: Http) {}

  getWishFor(id: number): Promise<Wish>{
    const url = `${this.wishesUrl}/?person=${id}`;

   return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Wish)
      .catch(this.handleError);
  }

  /*create(name: string): Promise<Person> {
    return this.http
      .post(this.wishesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Person)
      .catch(this.handleError);
  }

  update(name: string): Promise<Person> {
    return this.http
      .post(this.wishesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Person)
      .catch(this.handleError);
  }*/

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
