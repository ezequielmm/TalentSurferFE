import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCertaintyComponent } from './edit-certainty.component';

describe('EditCertaintyComponent', () => {
  let component: EditCertaintyComponent;
  let fixture: ComponentFixture<EditCertaintyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditCertaintyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCertaintyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
