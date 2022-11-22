import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ODropdownToggleComponent } from './o-dropdown-toggle.component';

describe('ODropdownToggleComponent', () => {
  let component: ODropdownToggleComponent;
  let fixture: ComponentFixture<ODropdownToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ODropdownToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ODropdownToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
