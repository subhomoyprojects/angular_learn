import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkcategoryComponent } from './drinkcategory.component';

describe('DrinkcategoryComponent', () => {
  let component: DrinkcategoryComponent;
  let fixture: ComponentFixture<DrinkcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
