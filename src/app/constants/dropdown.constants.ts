const DROPDOWN_ROUTE = 'dropdown';
const DROPDOWN_TOGGLE_ROUTE = 'dropdown/dropdown-toggle';
const DROPDOWN_ICON_ROUTE = 'dropdown/dropdown-icon';

export const DROPDOWN_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/dropdown/overview'
  },
  {
    title: 'Api',
    route: '/components/dropdown/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/dropdown/examples'
  }
];

export const DROPDOWN_TOGGLE_NAVIGATION = DROPDOWN_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(DROPDOWN_ROUTE, DROPDOWN_TOGGLE_ROUTE)
  };
});

export const DROPDOWN_ICON_NAVIGATION = DROPDOWN_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(DROPDOWN_ROUTE, DROPDOWN_ICON_ROUTE)
  };
});

export const DROPDOWN_TOGGLE_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public options = ['Opción 1', 'Opción 2', 'Opción 3'];

    public getData(event: string[]): void {
      console.log(event);
    }
  }
`;

export const DROPDOWN_TOGGLE_EXAMPLE = `
  <o-dropdown-toggle 
    filterName="Filtro" 
    [options]="options" 
    (dataSelected)="getData($event)"
  >
  </o-dropdown-toggle>`;

export const DROPDOWN_TOGGLE_BORDER_EXAMPLE = `
  <o-dropdown-toggle 
    filterName="Filtro" 
    [options]="options" 
    [isBordered]="true" 
    (dataSelected)="getData($event)"
    >
  </o-dropdown-toggle>`;

export const DROPDOWN_TOGGLE_SIZE_LG_EXAMPLE = `
  <o-dropdown-toggle 
    filterName="Filtro" 
    [options]="options" 
    size="lg" 
    [isBordered]="true" 
    (dataSelected)="getData($event)"
    >
  </o-dropdown-toggle>`;

export const DROPDOWN_TOGGLE_SIZE_MD_EXAMPLE = `
  <o-dropdown-toggle 
    filterName="Filtro" 
    [options]="options" 
    [isBordered]="true" 
    (dataSelected)="getData($event)"
    >
  </o-dropdown-toggle>`;

export const DROPDOWN_TOGGLE_SIZE_SM_EXAMPLE = `
  <o-dropdown-toggle 
    filterName="Filtro" 
    [options]="options" 
    size="sm" 
    [isBordered]="true" 
    (dataSelected)="getData($event)"
    >
  </o-dropdown-toggle>`;

export const DROPDOWN_TOGGLE_DATA_SOURCE = [
  {
    name: '@Input() <br/> filterName: string',
    description: 'Se utiliza para definir el nombre del filtro.'
  },
  {
    name: '@Input() <br/> options: string[]',
    description: 'Se utiliza para definir las opciones del filtro.'
  },
  {
    name: '@Input() <br/> size: Sizes',
    description: 'Se utiliza para definir el tamaño del filtro.'
  },
  {
    name: '@Input() <br/> isBordered: boolean',
    description: 'Se utiliza para definir si el filtro tiene borde. Por defecto es false.'
  }
];

export const DROPDOWN_DATA_SOURCE_METHODS = [
  {
    name: '@Output() <br/> dataSelected: string',
    description: 'Se utiliza para obtener el valor seleccionado. El valor devuelto es un array de strings.'
  }
];

export const DROPDOWN_ICON_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public options = ['Opción 1', 'Opción 2', 'Opción 3'];

    public getData(event: string | string[]): void {
      console.log(event);
    }
  }
`;

export const DROPDOWN_ICON_EXAMPLE = `
  <o-dropdown-icon 
    filterName="Mi perfil" 
    [options]="options" 
    (dataSelected)="getData($event)"
  > 
    <span icon class="dropdown-user-icon ml-0">&nbsp;</span>
  </o-dropdown-icon>`;

export const DROPDOWN_ICON_BORDER_EXAMPLE = `
  <o-dropdown-icon 
    filterName="Mi perfil" 
    [options]="options" 
    [isBordered]="true" 
    (dataSelected)="getData($event)"
  >
    <span icon class="dropdown-user-icon ml-0">&nbsp;</span>
  </o-dropdown-icon>`;

export const DROPDOWN_ICON_ONLY_EXAMPLE = `
  <o-dropdown-icon 
    [options]="options" 
    (dataSelected)="getData($event)"
  >
    <span icon class="dropdown-user-icon ml-0">&nbsp;</span>
  </o-dropdown-icon>`;

export const DROPDOWN_ICON_MULTIPLE_SELECTION_EXAMPLE = `
  <o-dropdown-icon 
    filterName="Mi perfil" 
    [options]="options" 
    [isMultipleSelection]="true" 
    (dataSelected)="getData($event)"
  >
    <span icon class="dropdown-user-icon ml-0">&nbsp;</span>
  </o-dropdown-icon>`;

export const DROPDOWN_ICON_DATA_SOURCE = [
  {
    name: '@Input() <br/> filterName: string',
    description: 'Se utiliza para definir el nombre del filtro.'
  },
  {
    name: '@Input() <br/> options: string[]',
    description: 'Se utiliza para definir las opciones del filtro.'
  },
  {
    name: '@Input() <br/> size: Sizes',
    description: 'Se utiliza para definir el tamaño del filtro.'
  },
  {
    name: '@Input() <br/> isBordered: boolean',
    description: 'Se utiliza para definir si el filtro tiene borde. Por defecto es false.'
  },
  {
    name: '@Input() <br/> isMultipleSelection: boolean',
    description: 'Se utiliza para definir si el filtro permite múltiple selección. Por defecto es false.'
  }
];

export const DROPDOWN_BEST_PRACTICES = [
  '<strong>Limitar a 15 la cantidad de opciones</strong> para elegir dentro de un menú.',
  '<strong>Desplazar los menús con más de 5 opciones.</strong> En este estado, muestra una barra de desplazamiento en su lado derecho para realizar el scroll correspondiente.',
  '<strong>Utilizar los desplegables para navegación o filtros,</strong> en donde se inicia una acción basada en la selección.',
  '<strong>Priorizar las opciones en un orden lógico</strong> colocando la opción más seleccionada en la parte superior.',
  '<strong>Mantener los textos de las opciones del menú breves y concisas.</strong> Se desaconsejan las opciones de menú que se extiendan en varias líneas.',
  '<strong>Se pueden combinar</strong> con los Botones y la Navegación horizontal.',
  '<strong>Alinear el menú desplegable con prioridad a la izquierda.</strong> En caso de no tener espacio suficiente para alinear desde la izquierda, alinear a la derecha.',
  '<strong>Alinear el menú desplegable al centro cuando los espacios en la pantalla sean reducidos.</strong>'
];

export const DROPDOWN_BAD_PRACTICES = ['No habilitar la opción de desplegar 2 o más menús al mismo tiempo.'];
