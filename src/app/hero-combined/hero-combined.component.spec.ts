import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCombinedComponent } from './hero-combined.component';

describe('HeroCombinedComponent', () => {
  let component: HeroCombinedComponent;
  let fixture: ComponentFixture<HeroCombinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCombinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCombinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
