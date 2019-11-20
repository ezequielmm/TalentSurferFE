import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpportunityManagementComponent } from './add-opportunity.component';

describe('OpportunityManagementComponent', () => {
  let component: AddOpportunityManagementComponent;
  let fixture: ComponentFixture<AddOpportunityManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddOpportunityManagementComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOpportunityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
