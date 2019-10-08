import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OpportunityLocationComponent } from "./opportunity-location.component";

describe("OpportunityLocationComponent", () => {
  let component: OpportunityLocationComponent;
  let fixture: ComponentFixture<OpportunityLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpportunityLocationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
