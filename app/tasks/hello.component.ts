import { Component } from '@angular/core';

@Component({
  selector: 'new-year',
  template: `<h1>Merry christmas and happy {{name}}</h1>`,
})
export class HelloComponent  { name = 'New year'; }
