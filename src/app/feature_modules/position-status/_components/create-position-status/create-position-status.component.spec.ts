import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePositionStatusComponent } from './create-position-status.component';

describe('CreatePositionStatusComponent', () => {
  let component: CreatePositionStatusComponent;
  let fixture: ComponentFixture<CreatePositionStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePositionStatusComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePositionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
