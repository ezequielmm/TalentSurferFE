import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePositionSlotsComponent } from './create-position-slot.component';

describe('CreatePositionSlotsComponent', () => {
  let component: CreatePositionSlotsComponent;
  let fixture: ComponentFixture<CreatePositionSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePositionSlotsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePositionSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
