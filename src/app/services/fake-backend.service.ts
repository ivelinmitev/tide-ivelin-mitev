import { InMemoryDbService } from 'angular-in-memory-web-api';

export class FakeBackendService implements InMemoryDbService {
  createDb() {
    const accounts = [
      { id: 1, fullName: 'Ivelin Mitev', dateOfBirth: '06/07/1991' },
      { id: 2, fullName: 'Petar Petrov', dateOfBirth: '01/08/1994' },
      { id: 3, fullName: 'Georgi Georgiev', dateOfBirth: '05/10/1987' }
    ];
    return {accounts};
  }
}
