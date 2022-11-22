export const BREADCRUMB_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/breadcrumb/overview'
  },
  {
    title: 'Api',
    route: '/components/breadcrumb/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/breadcrumb/examples'
  }
];

export const BREADCRUMB_BEST_PRACTICES = [
  '<strong>Use migas de pan para la navegación anidada.</strong> Cada elemento debe actuar como un enlace, excepto el último que se visualiza y refuerza con el nombre de la página.',
  '<strong>Evalúe si sus usuarios necesitan las migas de pan</strong> si está utilizando otros elementos de navegación en la página, como una barra lateral.',
  '<strong>Empiece con la palabra "Inicio"</strong> como primer enlace de las rutas de navegación.'
];

export const BREADCRUMB_INTERFACE1 = `
  interface Breadcrumb {
    actualRoute: BreadcrumbRoute;
    routes: BreadcrumbRoute[];
    url: string;
  }
`;

export const BREADCRUMB_INTERFACE2 = `
  interface BreadcrumbRoute {
    name: string;
    id?: string;
    url?: string;
  }
`;

export const BREADCRUMB_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    constructor(private readonly breadcrumbService: BreadcrumbService) {}

    ngOnInit() {
      this.breadcrumbService.breadcrumb$.next({
        actualRoute: { name: 'ruta actual' },
        routes: [
        { name: 'ruta 1', id: '3' },
        { name: 'ruta 2', id: '5', url: 'routes-2/5' }
        ],
        url: 'url-ruta'
      });
    }
  }
`;
