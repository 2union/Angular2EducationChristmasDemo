import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { HelloComponent }       from '../tasks/hello.component';
import { ListComponent }        from '../tasks/list.component';
import { WishComponent }        from '../tasks/wish.component';
import { PersonService }        from '../services/person.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ListComponent, WishComponent ],
  bootstrap:    [ ListComponent, WishComponent ],
  providers: [PersonService]
})
export class NyModule { }
