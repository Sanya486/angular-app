import { TestBed } from '@angular/core/testing';

import { GetRandomActivityService } from './get-random-activity.service';

describe('GetRandomActivityService', () => {
  let service: GetRandomActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRandomActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
