import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentMain } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponentMain;
  let fixture: ComponentFixture<DashboardComponentMain>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponentMain]
    });
    fixture = TestBed.createComponent(DashboardComponentMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
