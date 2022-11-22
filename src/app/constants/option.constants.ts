export const OPTION_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/option/overview'
  },
  {
    title: 'Api',
    route: '/components/option/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/option/examples'
  }
];

export const OPTION_DATA_SOURCE = [
  {
    name: '@Input() <br /> option: Option',
    description: 'Se utiliza para definir las opciones que se va a mostrar.'
  },
  {
    name: '@Input() <br /> size: Sizes',
    description: 'Se utiliza para definir el tamaño de las opciones'
  }
];

export const OPTION_DATA_SOURCE_METHODS = [
  {
    name: '@Output() <br/> optionSelected: EventEmitter&lt;string&gt;',
    description: 'Se utiliza para obtener la opción seleccionada.'
  }
];

export const OPTION_BEST_PRACTICES = [
  '<strong>Limita a una cantidad de entre 5 y 15 opciones</strong> para elegir dentro de un menú.',
  '<strong>En formularios al utilizar menos de 5 opciones,</strong> use el componente de radio button y no un menú desplegable con opciones, específicamente en los formularios.',
  '<strong>Al utilizar más de 5 opciones,</strong> los menús se pueden desplazar. En este estado, muestra una barra de desplazamiento en su lado derecho para realizar el scroll correspondiente.',
  '<strong>Botones de radio y casillas de verificación</strong> pueden incluirse dentro de las opciones.',
  'Prioriza las opciones en un orden lógico</strong> coloca la opción más seleccionada en primer lugar.',
  '<strong>Mantene las opciones del menú breves y concisas.</strong> Se desaconsejan las opciones de menú largas que hacen que el texto se ajuste a varias líneas.'
];

export const OPTION_BAD_PRACTICES = [
  '<strong>No usar textos largos</strong> en donde el usuario se canse o confunda.',
  '<strong>No usar más de 20 opciones dentro de un menú,</strong> revisa la información, prioriza o dividi el menú en otro con una nueva categoría.'
];

export const OPTION_INTERFACE = `
  interface Option {
    title: string;
    items: OptionItem[];
  }
`;

export const OPTION_ITEM_INTERFACE = `
  interface OptionItem {
    text: string;
    active: boolean;
  }
`;

export const OPTION_EXAMPLE_HTML = `
  <o-option [option]="option" (optionSelected)="selectedItem($event)"></o-option>
`;

export const OPTION_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public option = {
      title:'Desplegable',
      items: [
        { text: 'Item 1' },
        { text: 'Item 2', active: true }
        { text: 'Item 3' }
      ]
    };

    public selectedItem (event: string): void {
      console.log(event);
    }
  }
`;

export const OPTION_EXAMPLE_MULTIPLE_HTML = `
  <form class="options-container">
    <o-option *ngFor="let option of optionList" [option]="option"></o-option>
  </form>
`;

export const OPTION_EXAMPLE_MULTIPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public optionList = [
      {
        title: 'Desplegable 1',
        items: [
        { text: 'Item 1' },
        { text: 'Item 2' },
        { text: 'Item 3' },
        { text: 'Item 4' }
        ]
      },
      {
        title: 'Desplegable 2',
        items: [
          { text: 'Item 1' },
          { text: 'Item 2' }
        ]
      },
      {
        title: 'Desplegable 3',
        items: [
          { text: 'Item 1' },
          { text: 'Item 2' },
          { text: 'Item 3' }
        ]
      }
    ];
  }
`;

export const OPTION_EXAMPLE_SIZES_HTML = `
  <form class="options-container">
    <o-option [option]="optionSm" size="sm"></o-option>
    <o-option [option]="option"></o-option>
    <o-option [option]="optionLg" size="lg"></o-option>
  </form>
`;

export const OPTION_EXAMPLE_SIZES_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public optionSm = {
      title: 'Desplegable',
      items: [
        { text: 'Item 1' },
        { text: 'Item 2' },
        { text: 'Item 3' }
      ]
    };

    public option = {
      title: 'Desplegable',
      items: [
        { text: 'Item 1' },
        { text: 'Item 2', active: true }
        { text: 'Item 3' }
      ]
    };

    public optionLg = {
      title: 'Desplegable',
      items: [
        { text: 'Item 1' },
        { text: 'Item 2' },
        { text: 'Item 3' }
      ]
    };
  }
`;
