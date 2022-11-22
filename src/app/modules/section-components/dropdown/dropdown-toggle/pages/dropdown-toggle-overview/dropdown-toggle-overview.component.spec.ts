import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownToggleOverviewComponent } from './dropdown-toggle-overview.component';

describe('DropdownToggleOverviewComponent', () => {
  let component: DropdownToggleOverviewComponent;
  let fixture: ComponentFixture<DropdownToggleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownToggleOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownToggleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
