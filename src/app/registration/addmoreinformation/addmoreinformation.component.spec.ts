import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoreinformationComponent } from './addmoreinformation.component';

describe('AddmoreinformationComponent', () => {
  let component: AddmoreinformationComponent;
  let fixture: ComponentFixture<AddmoreinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmoreinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoreinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
