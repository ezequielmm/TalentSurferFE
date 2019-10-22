import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCertaintyComponent } from './create-certainty.component';

describe('CreateCertaintyComponent', () => {
  let component: CreateCertaintyComponent;
  let fixture: ComponentFixture<CreateCertaintyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCertaintyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCertaintyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
