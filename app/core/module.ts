import { NgModule }             from '@angular/core';
import { HttpModule}            from '@angular/http';
import { BrowserModule }        from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from '../services/in-memory-data.service'
import { HelloComponent }       from '../tasks/hello.component';
import { ListComponent }        from '../tasks/list.component';
import { WishComponent }        from '../tasks/wish.component';
import { CountComponent }       from '../tasks/count.component';
import { GiftComponent }        from '../tasks/gift.component';
import { PersonService }        from '../services/person.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ ListComponent, WishComponent, GiftComponent, CountComponent ],
  bootstrap:    [ ListComponent, WishComponent, GiftComponent, CountComponent ],
  providers:    [ PersonService ]
})
export class NyModule { }
