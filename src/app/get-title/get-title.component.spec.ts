import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTitleComponent } from './get-title.component';

describe('GetTitleComponent', () => {
  let component: GetTitleComponent;
  let fixture: ComponentFixture<GetTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
