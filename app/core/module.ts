import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HelloComponent }  from '../tasks/hello.component';
import { ListComponent }   from '../tasks/list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HelloComponent, ListComponent ],
  bootstrap:    [ ListComponent ]
})
export class NyModule { }
