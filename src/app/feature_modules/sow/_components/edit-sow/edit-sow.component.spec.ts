import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSowComponent } from './edit-sow.component';

describe('EditSowComponent', () => {
  let component: EditSowComponent;
  let fixture: ComponentFixture<EditSowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditSowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
