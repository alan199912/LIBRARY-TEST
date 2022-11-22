import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownIconExamplesComponent } from './dropdown-icon-examples.component';

describe('DropdownIconExamplesComponent', () => {
  let component: DropdownIconExamplesComponent;
  let fixture: ComponentFixture<DropdownIconExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownIconExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownIconExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
