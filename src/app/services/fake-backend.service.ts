import { InMemoryDbService } from 'angular-in-memory-web-api';

export class FakeBackendService implements InMemoryDbService {
  createDb() {
    const accounts = [
      { id: 11, fullName: 'Mr. Nice', dateOfBirth: '06/07/1991' },
      { id: 12, fullName: 'Narco', dateOfBirth: '' },
      { id: 13, fullName: 'Bombasto', dateOfBirth: '' }
    ];
    return {accounts};
  }
}
