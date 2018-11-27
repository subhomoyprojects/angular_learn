import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationcompletedComponent } from './registrationcompleted.component';

describe('RegistrationcompletedComponent', () => {
  let component: RegistrationcompletedComponent;
  let fixture: ComponentFixture<RegistrationcompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationcompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationcompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
