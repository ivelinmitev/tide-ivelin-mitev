import { TestBed } from '@angular/core/testing';

import { FakeBackendService } from './fake-backend.service';

describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeBackendService = TestBed.get(FakeBackendService);
    expect(service).toBeTruthy();
  });
});
