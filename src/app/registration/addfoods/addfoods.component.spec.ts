import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoodsComponent } from './addfoods.component';

describe('AddfoodsComponent', () => {
  let component: AddfoodsComponent;
  let fixture: ComponentFixture<AddfoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
