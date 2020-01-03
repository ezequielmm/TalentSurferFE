import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPositionSlotsComponent } from './edit-position-slot.component';

describe('EditPositionSlotsComponent', () => {
  let component: EditPositionSlotsComponent;
  let fixture: ComponentFixture<EditPositionSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPositionSlotsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPositionSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
