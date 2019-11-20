import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOpportunityManagementComponent } from './edit-opportunity.component';

describe('OpportunityManagementComponent', () => {
  let component: EditOpportunityManagementComponent;
  let fixture: ComponentFixture<EditOpportunityManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditOpportunityManagementComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOpportunityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
