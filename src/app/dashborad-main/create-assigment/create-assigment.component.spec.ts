import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssigmentComponent } from './create-assigment.component';

describe('CreateAssigmentComponent', () => {
  let component: CreateAssigmentComponent;
  let fixture: ComponentFixture<CreateAssigmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAssigmentComponent]
    });
    fixture = TestBed.createComponent(CreateAssigmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
