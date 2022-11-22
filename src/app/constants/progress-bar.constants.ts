export const PROGRESS_BAR_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/progress-bar/overview'
  },
  {
    title: 'Api',
    route: '/components/progress-bar/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/progress-bar/examples'
  }
];

export const DATA_SOURCE_PROGRESS_BAR_INPUT = [
  {
    name: '@Input() <br /> isSteps: boolean',
    description: 'Se utiliza para mostrar los pasos del proceso.'
  },
  {
    name: '@Input() <br /> color: string',
    description: 'Se utiliza para cambiar el color del componente.(tiene que ser tipo Color)'
  },
  {
    name: '@Input() <br /> currentStep: number',
    description: 'Se utiliza para cambiar el paso actual.'
  },
  {
    name: '@Input() <br /> totalStep: number',
    description: 'Se utiliza para mostrar el total de pasos'
  }
];

export const DATA_SOURCE_PROGRESS_BAR_OUTPUT = [
  {
    name: '@Output <br /> stopProgress: EventEmitter&lt;boolean&gt;',
    description:
      'Se utiliza para detener el proceso. <br/> Ocurrirá cuando se llegue al último paso y la barra de progreso se complete.'
  }
];

export const PROGRESS_BAR_BEST_PRACTICES = [
  '<strong>Utilice una barra de progreso determinada</strong> cuando el progreso se pueda calcular con respecto a un objetivo específico.',
  '<strong>Utilice una barra de progreso indeterminada</strong> cuando no se pueda determinar el tiempo o el esfuerzo para completarlo.'
];

export const PROGRESS_BAR_EXAMPLE_DIRECTIVE = `
  <o-progress-bar color="primary" [isStep]="true" [currentStep]="4" [totalSteps]="8"></o-progress-bar>

  <button oStepPrevious class="btn btn-link btn-sm">Anterior</button>

  <button oStepNext class="btn btn-link btn-sm">Siguiente</button>
`;

export const PROGRESS_BAR_EXAMPLE_FUNCIONALITY_HTML = `
  <o-progress-bar
    color="primary"
    [isStep]="true"
    [currentStep]="4"
    [totalSteps]="8"
    (stopSteps)="stopProgress($event)"
  ></o-progress-bar>

  <button class="btn btn-sm btn-link mr-2" (click)="prevStep()">Anterior</button>
  <button class="btn btn-sm btn-link" (click)="nextStep()">Siguiente</button>
`;

export const PROGRESS_BAR_EXAMPLE_FUNCIONALITY_TS = `
  import { Component, OnInit } from '@angular/core';
  import { StepService } from 'ngx-obelisco';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent implements OnInit {
    constructor(private readonly progressBarService: StepService) {}

    public ngOnInit(): void {
      this.progressBarService.initialize();
    }

    public nextStep(): void {
      this.progressBarService.next();
    }

    public previousStep(): void {
      this.progressBarService.previous();
    }

    public stopProgress(event: boolean): void {
      if (event) {
        console.log('Completado');
      }
    }
  }
`;

export const PROGRESS_BAR_EXAMPLE_NO_STEPS = `
  <o-progress-bar color="info" [currentStep]="4" [totalSteps]="8"></o-progress-bar>
`;

export const PROGRESS_BAR_EXAMPLE_COLORS = `
  <o-progress-bar color="primary" [currentStep]="5"></o-progress-bar>

  <o-progress-bar color="success" [currentStep]="4"></o-progress-bar>

  <o-progress-bar color="info" [currentStep]="3"></o-progress-bar>

  <o-progress-bar color="danger" [currentStep]="2"></o-progress-bar>
`;
