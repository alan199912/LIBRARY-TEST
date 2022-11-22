import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownToggleApiComponent } from './dropdown-toggle-api.component';

describe('DropdownToggleApiComponent', () => {
  let component: DropdownToggleApiComponent;
  let fixture: ComponentFixture<DropdownToggleApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownToggleApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownToggleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
