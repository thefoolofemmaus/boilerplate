import { TestBed } from '@angular/core/testing';

import { SimonService } from './simon.service';

describe('SimonService', () => {
  let service: SimonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
