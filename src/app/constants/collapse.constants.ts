const COLLAPSE_ROUTE = 'collapse';
const COLLAPSE_SIMPLE_ROUTE = 'collapse/collapse-simple';
const COLLAPSE_INFO_ROUTE = 'collapse/collapse-info';

export const COLLAPSE_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/collapse/overview'
  },
  {
    title: 'Api',
    route: '/components/collapse/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/collapse/examples'
  }
];

export const COLLAPSE_SIMPLE_NAVIGATION = COLLAPSE_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(COLLAPSE_ROUTE, COLLAPSE_SIMPLE_ROUTE)
  };
});

export const COLLAPSE_INFO_NAVIGATION = COLLAPSE_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(COLLAPSE_ROUTE, COLLAPSE_INFO_ROUTE)
  };
});

export const COLLAPSE_BEST_PRACTIVES = [
  '<strong>Utiliza otros recursos o componentes antes de usar los colapsables,</strong> te sugerimos simplificar y reducir la cantidad de contenido o dividir el contenido en varias páginas o mantener el contenido en una sola página separado por encabezados.'
];

export const COLLAPSE_BAD_PRACTICES = [
  '<strong>No utilice un acordeón para el contenido</strong> que todos los usuarios necesitan ver, no lo oculte dentro de un colapsable.',
  '<strong>Cuando el contenido es poco o insuficiente</strong> utilice otra herramienta o componente para mostrar esa información, como un encabezado y texto simple. Los colapsables aumentan la carga cognitiva de los usuarios a la hora de decidir.'
];

export const COLLAPSE_SIMPLE_INTERFACE = `
  interface Collapse {
    title: string;
    description: string;
  }
`;

export const COLLAPSE_INFO_INTERFACE = `
  interface CollapseInfo {
    header: string;
    body: string;
    footer: string;
  }
`;

export const COLLAPSE_SIMPLE_HTML = `
  <o-collapse [arrCollapse]="array" identifier="collapseOne"></o-collapse>
`;

export const COLLAPSE_SIMPLE_HTML_MULTIPLE = `
  <o-collapse
    [arrCollapse]="array"
    [isMultipleSelection]="true"
    identifier="collapseTwo"
  ></o-collapse>
`;

export const COLLAPSE_SIMPLE_HTML_ICON = `
  <o-collapse
    [arrCollapse]="array"
    identifier="collapseThree"
    [isIcon]="true"
  ></o-collapse>
`;

export const COLLAPSE_SIMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public array = [
      {
        title: 'Colapsable',
        description: 'Descripcion de ejemplo',
      },
      {
        title: 'Colapsable',
        description: 'Descripcion de ejemplo',
      },
      {
        title: 'Colapsable',
        description: 'Descripcion de ejemplo',
      }
    ];
  }
`;

export const COLLAPSE_INFO_EXAMPLE_HTML = `
  <o-collapse-info
    title="Total:"
    subtitle="$ 450"
    [collapseInfoArr]="array"
    identifier="collapseOne"
  ></o-collapse-info>
`;

export const COLLAPSE_INFO_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public array = [
      { header: 'BOLETA N° 2564-59879543', body: 'Solicitud de informes varios', footer: '$ 450' },
      { header: 'BOLETA N° 2564-59879543', body: 'Solicitud de informes varios', footer: '$ 450' }
    ];
  }
`;
