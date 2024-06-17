import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotenbuchComponent } from './notenbuch.component';

describe('NotenbuchComponent', () => {
  let component: NotenbuchComponent;
  let fixture: ComponentFixture<NotenbuchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotenbuchComponent]
    });
    fixture = TestBed.createComponent(NotenbuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
