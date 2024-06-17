import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserModelFormComponent } from './new-user-model-form.component';

describe('NewUserModelFormComponent', () => {
  let component: NewUserModelFormComponent;
  let fixture: ComponentFixture<NewUserModelFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUserModelFormComponent]
    });
    fixture = TestBed.createComponent(NewUserModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
