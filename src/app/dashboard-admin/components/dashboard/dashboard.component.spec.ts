import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentAdmin } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponentAdmin;
  let fixture: ComponentFixture<DashboardComponentAdmin>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponentAdmin]
    });
    fixture = TestBed.createComponent(DashboardComponentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
