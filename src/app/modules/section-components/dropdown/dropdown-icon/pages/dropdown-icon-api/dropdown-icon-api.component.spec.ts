import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownIconApiComponent } from './dropdown-icon-api.component';

describe('DropdownIconApiComponent', () => {
  let component: DropdownIconApiComponent;
  let fixture: ComponentFixture<DropdownIconApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownIconApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownIconApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
