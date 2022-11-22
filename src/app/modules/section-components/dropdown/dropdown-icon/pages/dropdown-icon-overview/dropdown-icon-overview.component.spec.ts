import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownIconOverviewComponent } from './dropdown-icon-overview.component';

describe('DropdownIconOverviewComponent', () => {
  let component: DropdownIconOverviewComponent;
  let fixture: ComponentFixture<DropdownIconOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownIconOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownIconOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
