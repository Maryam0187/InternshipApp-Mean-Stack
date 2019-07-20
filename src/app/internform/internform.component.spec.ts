import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternformComponent } from './internform.component';

describe('InternformComponent', () => {
  let component: InternformComponent;
  let fixture: ComponentFixture<InternformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
