import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { HelloComponent }       from '../tasks/hello.component';
import { ListComponent }        from '../tasks/list.component';
import { WishComponent }        from '../tasks/wish.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ListComponent, WishComponent ],
  bootstrap:    [ ListComponent, WishComponent ]
})
export class NyModule { }
