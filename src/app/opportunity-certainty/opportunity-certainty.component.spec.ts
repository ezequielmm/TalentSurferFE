import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OpportunityCertaintyComponent } from "./opportunity-certainty.component";

describe("OpportunityCertaintyComponent", () => {
  let component: OpportunityCertaintyComponent;
  let fixture: ComponentFixture<OpportunityCertaintyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpportunityCertaintyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityCertaintyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
