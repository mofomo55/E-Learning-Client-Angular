import { TestBed } from '@angular/core/testing';

import { NotenbuchService } from './notenbuch.service';

describe('NotenbuchService', () => {
  let service: NotenbuchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotenbuchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
