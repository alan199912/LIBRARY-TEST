import { Component } from '@angular/core';
import { COLLAPSE_SIMPLE_INTERFACE } from 'src/app/constants/collapse.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-collapse-simple-api',
  templateUrl: './collapse-simple-api.component.html',
  styleUrls: ['./collapse-simple-api.component.scss']
})
export class CollapseSimpleApiComponent {
  public columnsCollapse = COLUMNS;
  public dataSourceCollapse = [
    {
      name: '@Input() <br/> arrCollapse: Collapse[]',
      description: 'Se utiliza para mostrar la lista de elementos.'
    },
    {
      name: '@Input() <br/> isMultipleSelection: boolean',
      description: 'Se utiliza para seleccionar múltiples elementos.'
    },
    {
      name: '@Input() <br/> identifier: string',
      description: 'Se utiliza para identificar el componente.'
    }
  ];
  public exampleIterface = COLLAPSE_SIMPLE_INTERFACE;
}
