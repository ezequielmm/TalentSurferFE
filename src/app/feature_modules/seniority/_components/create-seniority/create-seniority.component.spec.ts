import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSeniorityComponent } from './create-seniority.component';

describe('CreateSeniorityComponent', () => {
  let component: CreateSeniorityComponent;
  let fixture: ComponentFixture<CreateSeniorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSeniorityComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSeniorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
