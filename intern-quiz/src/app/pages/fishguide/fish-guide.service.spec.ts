import { TestBed } from '@angular/core/testing';

import { FishGuideService } from './fish-guide.service';

describe('FishGuideService', () => {
  let service: FishGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FishGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
