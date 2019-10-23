import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPositionStatusComponent } from './edit-position-status.component';

describe('EditPositionStatusComponent', () => {
  let component: EditPositionStatusComponent;
  let fixture: ComponentFixture<EditPositionStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPositionStatusComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPositionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
