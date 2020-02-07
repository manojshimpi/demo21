import { TestBed } from '@angular/core/testing';

import { MasterwebService } from './masterweb.service';

describe('MasterwebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterwebService = TestBed.get(MasterwebService);
    expect(service).toBeTruthy();
  });
});
