import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ODropdownIconComponent } from './o-dropdown-icon.component';

describe('ODropdownIconComponent', () => {
  let component: ODropdownIconComponent;
  let fixture: ComponentFixture<ODropdownIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ODropdownIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ODropdownIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
