import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let persons = [
      {id: 1, name: 'Ms. Jackson'},
      {id: 2, name: 'Mr. Philips'},
      {id: 3, name: 'Cusine Susy'},
      {id: 4, name: 'Antonio'},
      {id: 5, name: 'Carl'},
      {id: 6, name: 'Lisa'}
    ];

    let gifts = [
      {id: 1, title: 'Christmas tree', text: 'Big, green. Everything what you need from christmas tree.', price: 499.5},
      {id: 2, title: 'Christmas suit', text: 'Make Santa in proud of you. Amaze yours guests in thish beautiful suit.', price: 299.9},
      {id: 3, title: 'Lights', text: 'Your house must shine on this hollydays.', price: 199.5},
      {id: 4, title: 'Santas mask', text: 'You whant be a santa? We give you chance be a Santa with Santas mask.', price: 19.8}
    ];
    return {persons,gifts};
  }
}
