import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownToggleExamplesComponent } from './dropdown-toggle-examples.component';

describe('DropdownToggleExamplesComponent', () => {
  let component: DropdownToggleExamplesComponent;
  let fixture: ComponentFixture<DropdownToggleExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownToggleExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownToggleExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
