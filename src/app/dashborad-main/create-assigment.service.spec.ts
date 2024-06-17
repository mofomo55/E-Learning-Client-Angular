import { TestBed } from '@angular/core/testing';

import { CreateAssigmentService } from './create-assigment.service';

describe('CreateAssigmentService', () => {
  let service: CreateAssigmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAssigmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
