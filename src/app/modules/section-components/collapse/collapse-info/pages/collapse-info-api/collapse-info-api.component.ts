import { Component } from '@angular/core';
import { COLLAPSE_INFO_INTERFACE } from 'src/app/constants/collapse.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-collapse-info-api',
  templateUrl: './collapse-info-api.component.html',
  styleUrls: ['./collapse-info-api.component.scss']
})
export class CollapseInfoApiComponent {
  public columnsCollapse = COLUMNS;
  public dataSourceCollapse = [
    {
      name: '@Input() <br/> title: string',
      description: 'Se utiliza para mostrar el título del componente.'
    },
    {
      name: '@Input() <br/> subtitle: string',
      description: 'Se utiliza para mostrar el subtítulo del componente.'
    },
    {
      name: '@Input() <br/> identifier: string',
      description: 'Se utiliza para identificar el componente.'
    },
    {
      name: '@Input() <br/> collapseInfoArr: CollapseInfo[]',
      description: 'Se utiliza para mostrar la lista de información.'
    }
  ];
  public exampleIterface = COLLAPSE_INFO_INTERFACE;
}
