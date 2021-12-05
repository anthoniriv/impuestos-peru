import { TestBed } from '@angular/core/testing';

import { CronoServiceService } from './crono-service.service';

describe('CronoServiceService', () => {
  let service: CronoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CronoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
