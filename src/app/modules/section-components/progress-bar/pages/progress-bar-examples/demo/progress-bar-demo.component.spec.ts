import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarDemoComponent } from './progress-bar-demo.component';

describe('ProgressBarDemoComponent', () => {
  let component: ProgressBarDemoComponent;
  let fixture: ComponentFixture<ProgressBarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressBarDemoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
