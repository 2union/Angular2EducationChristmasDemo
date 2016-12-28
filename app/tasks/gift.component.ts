import { Component, OnInit } from '@angular/core';

import { Gift }        from '../models/gift';
import { GiftService } from '../services/gift.service';

@Component({
  selector:    'gift',
  templateUrl: './app/templates/gift.html',
  providers:   [ GiftService ]
})
export class GiftComponent implements OnInit  {
  gifts: Gift[];

  constructor(private giftService: GiftService) { }

  ngOnInit(): void {
    this.giftService.getGifts().subscribe(result => this.gifts = result);
  }
}
