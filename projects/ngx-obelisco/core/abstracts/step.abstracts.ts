import { EventEmitter } from '@angular/core';
import { StepService } from './step.service';

export abstract class AbstractStep {
  protected stopSteps!: EventEmitter<boolean>;
  public abstract previousStep(): void;
  public abstract nextStep(): void;

  constructor(protected readonly setpsService: StepService) {}
}
