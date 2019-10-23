import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceLineComponent } from './create-service-line.component';

describe('CreateServiceLineComponent', () => {
  let component: CreateServiceLineComponent;
  let fixture: ComponentFixture<CreateServiceLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceLineComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServiceLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
