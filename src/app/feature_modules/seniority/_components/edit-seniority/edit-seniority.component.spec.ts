import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSeniorityComponent } from './edit-seniority.component';

describe('EditSeniorityComponent', () => {
  let component: EditSeniorityComponent;
  let fixture: ComponentFixture<EditSeniorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditSeniorityComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSeniorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
