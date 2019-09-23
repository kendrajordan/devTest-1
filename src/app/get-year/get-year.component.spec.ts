import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetYearComponent } from './get-year.component';

describe('GetYearComponent', () => {
  let component: GetYearComponent;
  let fixture: ComponentFixture<GetYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
