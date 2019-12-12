import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionSlotsComponent } from './position-slots.component';

describe('PositionSlotsComponent', () => {
  let component: PositionSlotsComponent;
  let fixture: ComponentFixture<PositionSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PositionSlotsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
