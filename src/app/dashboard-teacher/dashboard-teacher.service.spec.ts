import { TestBed } from '@angular/core/testing';

import { DashboardTeacherService } from './dashboard-teacher.service';

describe('DashboardTeacherService', () => {
  let service: DashboardTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
