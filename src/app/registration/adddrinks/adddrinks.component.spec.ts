import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddrinksComponent } from './adddrinks.component';

describe('AdddrinksComponent', () => {
  let component: AdddrinksComponent;
  let fixture: ComponentFixture<AdddrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
