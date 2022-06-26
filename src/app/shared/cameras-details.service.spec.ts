import { TestBed } from '@angular/core/testing';

import { CamerasDetailsService } from './cameras-details.service';

describe('CamerasDetailsService', () => {
  let service: CamerasDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamerasDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
