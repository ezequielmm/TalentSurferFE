import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PositionStatusComponent } from "./position-status.component";

describe("PositionStatusComponent", () => {
  let component: PositionStatusComponent;
  let fixture: ComponentFixture<PositionStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PositionStatusComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
