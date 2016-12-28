import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }              from 'rxjs';

import 'rxjs/add/operator/map';

import { Gift } from '../models/gift';

@Injectable()
export class GiftService {
  private headers   = new Headers({'Content-Type': 'application/json'});
  private giftsUrl = 'api/gifts';

  constructor(private http: Http) {}

  getGifts(): Observable<Gift[]>{
    return this.http.get(this.giftsUrl)
      .map((r: Response) => r.json().data as Gift[]);
  }
}
